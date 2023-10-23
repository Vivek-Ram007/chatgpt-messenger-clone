'use client';
import { PaperAirplaneIcon } from '@heroicons/react/24/solid';
import { useState, FormEvent } from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { USER_NAME, USER_EMAIL } from '@/constants';
import db from '@/firebase';
import toast from 'react-hot-toast';
type Props = {
  chatId: string;
};

const ChatInput = ({ chatId }: Props) => {
  const [prompt, setPrompt] = useState<string>('');

  const sendMessage = async (e: FormEvent<HTMLFormElement>) => {
    const model = 'text-davinci-003';
    e.preventDefault();
    if (!prompt) return;
    const input = prompt.trim();
    setPrompt('');
    const modUsername = USER_NAME.replace(' ', '+');
    const message: Message = {
      text: input,
      createdAt: serverTimestamp(),
      user: {
        _id: USER_NAME,
        name: USER_EMAIL,
        avatar: `https://ui-avatars.com/api/?name=${modUsername}`,
      },
    };

    await addDoc(
      collection(db, 'users', USER_EMAIL, 'chats', chatId, 'messages'),
      message
    );
    const notification = toast.loading('ChatGPT is thinking');

    fetch('/api/askQuestion', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        prompt: input,
        chatId,
        model,
        name:USER_NAME,
      }),
    }).then(() =>
      toast.success('ChatGPT has responded', {
        id: notification,
      })
    );
  };
  return (
    <div className=' bg-gray-700/50 text-gray-400'>
      <form
        className='space-x-3 overflow-hidden flex-row-center p-5'
        onSubmit={sendMessage}
      >
        <input
          className='flex-1 bg-transparent outline-none disabled:cursor-not-allowed disabled:text-gray-300 '
          type='text'
          placeholder='Type your message here...'
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />
        <button
          className='px-4 py-2 bg-theme-2  text-white rounded hover:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-300'
          disabled={!prompt}
        >
          <PaperAirplaneIcon className='h-4 w-4 -rotate-45 ' />
        </button>
      </form>
    </div>
  );
};
export default ChatInput;

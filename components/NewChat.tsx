import { PlusIcon } from '@heroicons/react/24/outline';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import React from 'react';
import db from '../firebase';
import { USER_EMAIL } from '@/constants';
import { useRouter } from 'next/navigation';

type Props = {};

export default function NewChat({}: Props) {
  const router = useRouter();

  const clickHandler = async () => {
    const doc = await addDoc(collection(db, 'users', USER_EMAIL, 'chats'), {
      userID: USER_EMAIL,
      createdAt: serverTimestamp(),
    });
    router.push(`/chat/${doc.id}`);
  };

  return (
    <button
      className='w-full chatBtn bg-gray-700 cursor-pointer border rounded-lg '
      onClick={clickHandler}
    >
      <PlusIcon className='h-5 w-5' />
      <span>New Chat</span>
    </button>
  );
}

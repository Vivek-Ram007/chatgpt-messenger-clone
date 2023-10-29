'use client';
import { ArrowDownCircleIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import db from './../firebase';
import Message from '@/components/Message';

type Props = {
  chatId: string;
};
const ChatsContainer = ({ chatId }: Props) => {
  const { data } = useSession();
  const [messages] = useCollection(
    data &&
      query(
        collection(
          db,
          'users',
          data?.user?.email!,
          'chats',
          chatId,
          'messages'
        ),
        orderBy('createdAt', 'asc')
      )
  );
  return (
    <div className='flex-1 overflow-auto'>
      {messages?.empty && (
        <>
          <div className='text-center text-white text-xl '>
            <p className='mt-10 '>Type in below to get started</p>
            <ArrowDownCircleIcon className='h-10 w-10 animate-bounce mx-auto mt-5' />
          </div>
        </>
      )}
      {messages?.docs.map((val) => {
        return <Message key={val.id} message={val.data()} />;
      })}
    </div>
  );
};
export default ChatsContainer;

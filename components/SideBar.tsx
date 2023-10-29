'use client';
import React from 'react';
import NewChat from './NewChat';
import { signOut, useSession } from 'next-auth/react';
import { useCollection } from 'react-firebase-hooks/firestore';
import { collection, query, orderBy } from 'firebase/firestore';
import { USER_EMAIL } from '@/constants';
import ChatRow from './ChatRow';
import db from './../firebase';
type Props = {};

export default function SideBar({}: Props) {
  const { data } = useSession();
  const [chats] = useCollection(
    query(
      collection(db, 'users', USER_EMAIL, 'chats'),
      orderBy('createdAt', 'asc')
    )
  );
  const modUsername = data && data?.user?.name?.replace(' ', '+');

  console.log(chats?.docs?.map((val) => console.log(val.data())));
  return (
    <div className='p-3 h-screen flex flex-col items-center '>
      <div className='flex-1 w-full'>
        <NewChat />
        {chats &&
          chats?.docs?.map((val) => <ChatRow key={val.id} id={val.id} />)}
      </div>
      <img
        onClick={() => signOut()}
        src={
          data
            ? data?.user?.image!
            : `https://ui-avatars.com/api/?name=${modUsername}`
        }
        alt='user pic'
        className='h-12 w-12 rounded-full mb-4 cursor-pointer'
      />
    </div>
  );
}

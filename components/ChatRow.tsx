'use client';
import Link from 'next/link';
import { ChatBubbleLeftIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { doc, deleteDoc } from 'firebase/firestore';
import db from '../firebase';
import { USER_EMAIL } from '@/constants';

type Props = {
  id: string;
};
const ChatRow = ({ id }: Props) => {
  const [active, setActive] = useState<boolean | undefined>(false);
  const pathName = usePathname();
  const router = useRouter();
  useEffect(() => {
    if (!pathName) return;
    setActive(pathName?.includes(id));
  }, [pathName, id]);
console.log(process.env.FIREBASE_SERVICE_KEY);
  const deleteHandler = async () => {
    await deleteDoc(doc(db, 'users', USER_EMAIL, 'chats', id));
    router.replace('/');
  };

  return (
    <Link
      href={`/chat/${id}`}
      className={`chatBtn mt-2 overflow-hidden ${
        active && 'bg-gray-700/70'
      } flex items-center  `}
    >
      <ChatBubbleLeftIcon className='h-5 w-5' />
      <p className='flex-1'>New Chat</p>
      <TrashIcon
        className='h-5  hover:text-red-500 ml-8 '
        onClick={deleteHandler}
      />
    </Link>
  );
};
export default ChatRow;

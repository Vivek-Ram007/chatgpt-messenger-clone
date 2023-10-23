// import ChatRowMsg
import ChatInput from '@/components/ChatInput';
import ChatsContainer from '@/components/ChatsContainer';
type Props = {
  params: {
    id: string;
  };
};
const ChatPage = ({ params: { id: chatId } }: Props) => {
  return (
    <div className='flex flex-col h-screen overflow-hidden'>
      <ChatsContainer chatId={chatId} />
      <ChatInput chatId={chatId} />
    </div>
  );
};
export default ChatPage;

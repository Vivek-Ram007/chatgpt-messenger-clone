const Message = ({ message }: any) => {
  const isChatGPT = message.user.name === 'ChatGPT';

  return (
    <div className={`text-white py-5 ${isChatGPT && 'bg-[#434654] '}`}>
      <div className='flex max-w-2xl mx-auto space-x-5'>
        <img src={message.user.avatar} alt='logo' className='h-8 w-8' />
        <p className='text-sm pt-1'>{message.text}</p>
      </div>
    </div>
  );
};
export default Message;

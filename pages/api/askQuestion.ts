import query from '@/utils/queryApi';
import admin from 'firebase-admin';
import adminDb from '@/firebaseAdmin';
import { USER_NAME, USER_EMAIL } from '@/constants';


import { NextApiRequest, NextApiResponse } from 'next';
type Data = {};
const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const { prompt, model, chatId, name } = req.body;
  if (!prompt) res.status(400).json({ message: 'Please provide a prompt' });
  if (!chatId)
    res.status(400).json({ message: 'Please provide a valid chat Id' });
  const response = await query(prompt, model, chatId);
  const message: Message = {
    text: response || "ChatGPT couldn't find the answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: 'ChatGPT',
      name: 'ChatGPT',
      avatar:
        'data:image/jpeg;base64,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',
    },
  };

  await adminDb.collection("users").doc(name).collection("chats").doc(chatId).collection("messages").add(message);
  console.log(response);
  res.status(400).json({ anwer: message.text });
};
export default handler;

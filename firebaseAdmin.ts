import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

// const serviceKey = JSON.parse(
//   (process.env.FIREBASE_SERVICE_KEY as string).replace(/\\n/g, '\n')
// );
// const firebase_private_key_b64 = Buffer.from(
//   process.env.FIREBASE_SERVICE_KEY,
//   'base64'
// );
// const firebase_private_key = firebase_private_key_b64.toString('utf8');
if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      projectId: process.env.FIREBASE_PROJECT_ID,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    }),
  });
}

const adminDb = admin.firestore();
export default adminDb;

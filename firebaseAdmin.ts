import admin from 'firebase-admin';
import { getApps } from 'firebase-admin/app';

const serviceKey = JSON.parse(process.env.FIREBASE_SERVICE_KEY as string);

if (!getApps().length) {
  admin.initializeApp({ credential: admin.credential.cert(serviceKey) });
}

const adminDb = admin.firestore();
export default adminDb;

// utils/firebaseAdmin.js
import admin from 'firebase-admin';
import { initializeApp, applicationDefault, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { fireConfig } from './firebaseConfig';

if (admin.apps.length === 0) {
  initializeApp({
    credential: cert(fireConfig)
  });
}

const db = getFirestore();

export default db;

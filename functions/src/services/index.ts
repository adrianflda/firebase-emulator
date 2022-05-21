import * as admin from 'firebase-admin'
// import * as functions from 'firebase-functions';

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  /* credential: admin.credential.cert({
        privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
        projectId: functions.config().project.id,
        clientEmail: functions.config().client.email
    }), */
  databaseURL: 'https://managing-gateways.firebaseio.com',
})

const db = admin.firestore()
export { admin, db }

// import NextAuth from "next-auth"
// import GoogleProvider from "next-auth/providers/google";
// import CredentialsProvider from "next-auth/providers/credentials";
// import {signInWithEmailAndPassword} from 'firebase/auth';

// import { FirestoreAdapter } from "@auth/firebase-adapter"
// import { cert } from "firebase-admin/app"
// import { auth } from "@/app/firebase";


// export const authOptions = {
//   // Configure one or more authentication providers
//   pages: {
//     signIn: "\signin"
//   },
//   adapter: FirestoreAdapter({
//     credential: cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY!.replace(/\\n/g, "\n")
//     })
//   }),
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_CLIENT_ID!,
//       clientSecret: process.env.GOOGLE_CLIENT_SECRET!
//     }),
//     CredentialsProvider({
//       name: 'Credentials',
//       credentials: {},
//       async authorize(credentials): Promise<any> {
//         return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
//           .then(userCredential => {
//             if (userCredential.user) {
//               return userCredential.user;
//             }
//             return null;
//           })
//           .catch(error => (console.log(error)))
//             .catch((error) => {
//               const errorCode = error.code;
//               const errorMessage = error.message;
//               console.log(error);
//             });
//       }
//     })
//   ],
// }
// export default NextAuth(authOptions)

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from "@/app/firebase";


export const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/signin'
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials): Promise<any> {
        return await signInWithEmailAndPassword(auth, (credentials as any).email || '', (credentials as any).password || '')
          .then(userCredential => {
            if (userCredential.user) {
              return userCredential.user;
            }
            return null;
          })
          .catch(error => (console.log(error)))
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error);
  });
      }
    })
  ],
}
export default NextAuth(authOptions)
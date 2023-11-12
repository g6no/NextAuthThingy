'use client';
import { DefaultSession, Session } from "next-auth";
import { SessionProvider as Provider} from "next-auth/react"

type Props = {
    children: React.ReactNode;
    session: DefaultSession | null;
}

export default function SessionProvider({children, session}:Props){
    return (
       <Provider>
            {children}
       </Provider>
    )
  }

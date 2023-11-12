import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth'
import './globals.css'
import { Inter } from 'next/font/google'
import SessionProvider from './SessionProvider';
import { redirect } from 'next/navigation';
// import Login from './Login';
import Home from './page';

const inter = Inter({ subsets: ['latin'] })

// export default async function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   const session = await getServerSession(authOptions);
//   if (!session) {
//     redirect('/signin');
//     return null; // Returning null to prevent rendering content when redirecting
//   }
//   return (
//     <html lang="en" className="h-full bg-gray-900">
//       <body className="h-full">
//       <SessionProvider session={session}>
//       {session ? <Home /> : null}
//       </SessionProvider>
//       </body>
//     </html>
//   )
// }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" className="h-full bg-gray-900">
      <body className="h-full">
      <SessionProvider session={session}>
        {children}
      </SessionProvider>
      </body>
    </html>
  )
}
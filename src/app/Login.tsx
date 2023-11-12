'use client';
// Import Tailwind CSS styles
import 'tailwindcss/tailwind.css';
import { signIn } from 'next-auth/react';

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => signIn('google')}
        >
          Sign In with Google
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => signIn('google')}
        >
          Sign In with Google
        </button>
      </div>
    </div>
  );
}

'use client';

import { Toaster } from 'react-hot-toast';

export default function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      toastOptions={{
        duration: 3000,
        style: {
          background: '#363636',
          color: '#fff',
        },
        success: {
          style: {
            background: '#16a34a',
          },
        },
        error: {
          style: {
            background: '#dc2626',
          },
        },
      }}
    />
  );
}
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Borang JPPH PDF Filler',
  description: 'Fill Borang JPPH T-11-A and generate completed PDF',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}

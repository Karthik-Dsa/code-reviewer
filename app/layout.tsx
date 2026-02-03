import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jedi Code Council - AI Code Review',
  description: 'May the Force be with your code',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}

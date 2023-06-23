import './globals.css';
import { overPassMono } from '@/lib/font';

export const metadata = {
  title: 'Dom van Almsick - Software Engineer',
  description: 'Dom van Almsick is a software engineer based in London, UK.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overPassMono.className}>{children}</body>
    </html>
  );
}

import './globals.css';
import { overPassMono } from '@/lib/font';
import { ThemeProvider } from '@/components/theme-provider';
import Header from '@/components/Header';

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
    <html lang="en" suppressHydrationWarning>
      <body className={overPassMono.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

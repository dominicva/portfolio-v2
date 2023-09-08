import './globals.css';
import { overPassMono } from '@/lib/font';
import { ThemeProvider } from '@/components/theme-provider';

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
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'گوریل | توسعه و رشد هوشمند برندها',
  description: 'بازطراحی مدرن صفحه اصلی گوریل با تمرکز بر تجربه کاربری و انیمیشن‌های روان.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className="scroll-smooth">
      <body className="antialiased bg-gouril-dark text-slate-100">
        {children}
      </body>
    </html>
  );
}

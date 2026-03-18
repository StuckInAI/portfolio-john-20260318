import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Alex Johnson — Full Stack Developer',
  description:
    'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies. View my portfolio, projects, and experience.',
  keywords: ['portfolio', 'developer', 'full stack', 'react', 'nextjs', 'typescript'],
  authors: [{ name: 'Alex Johnson' }],
  openGraph: {
    title: 'Alex Johnson — Full Stack Developer',
    description: 'Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-slate-50 antialiased">{children}</body>
    </html>
  );
}

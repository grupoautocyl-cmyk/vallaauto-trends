import './globals.css';

export const metadata = {
  title: 'Vallaauto Trends',
  description: 'Next.js application layout',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
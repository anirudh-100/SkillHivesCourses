import './globals.css';
import Header from './header'; // Assuming the path for Header component
import Footer from './footer'; // Assuming the path for Footer component

export const metadata = {
  title: 'SkillHives',
  description: 'A platform for selling courses.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

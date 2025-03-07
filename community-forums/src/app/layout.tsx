import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-600 p-4">
          <div className="container mx-auto flex justify-between items-center">
            
            <Link href="/" className="text-white text-xl font-bold">
              Community Forums
            </Link>
            <div className="space-x-4">
              <Link href="/forums/create" className="text-white hover:underline">
                Create Forum
              </Link>
            </div>
          </div>
        </nav>
        <main className="container mx-auto p-4">{children}</main>
      </body>
    </html>
  );
}
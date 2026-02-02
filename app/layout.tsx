import "./globals.css";
import { NavigationBar } from "@/components/Navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Dawn CTF 2026 - AWS Cloud Club LPU</title>
        <meta name="description" content="12-hour overnight cybersecurity competition organized by AWS Cloud Club, Lovely Professional University" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      </head>
      <body className="relative min-h-screen font-sans bg-black overflow-x-hidden antialiased">
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

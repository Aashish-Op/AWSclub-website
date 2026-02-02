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
        <title>Horizon 2026 — AWS Cloud Club at LPU</title>
        <meta
          name="description"
          content="Horizon 2026 is a flagship overnight technical event series by AWS Cloud Club at Lovely Professional University, featuring workshops, a hackathon, and a Capture The Flag (CTF) competition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>

      <body className="relative min-h-screen bg-black font-sans antialiased overflow-x-hidden">
        <NavigationBar />
        <main>{children}</main>
      </body>
    </html>
  );
}

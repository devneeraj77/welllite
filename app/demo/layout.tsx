
import { Alata, Inter, Roboto } from "next/font/google";



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        
        {children}
        
      </body>
    </html>
  );
}

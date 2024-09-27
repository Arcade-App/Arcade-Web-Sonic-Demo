import localFont from "next/font/local";
import "./globals.css";
import Logo from "../../public/Logo.svg"



const satoshi = localFont({
  src: "./fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  display: "swap",
  weight: "100 900",
});
const satoshiItalic = localFont({
  src: "./fonts/Satoshi-VariableItalic.woff2",
  variable: "--font-satoshi-italic",
  display: "swap",
  weight: "100 900",
});

export const metadata = {
  title: "Arcade App",
  description: "On-Chain Games & Tournaments for your Community",
  favicon: { Logo }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} ${satoshiItalic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

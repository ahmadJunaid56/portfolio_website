import localFont from "next/font/local";
import "./globals.css";
import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the Font Awesome CSS

// Load the Poppins font locally
const poppins = localFont({
  src: "./fonts/Poppins-Regular.ttf", // Path to the Poppins font file
  variable: "--font-poppins", // Custom CSS variable
  weight: "400", // Weight for the font, adjusted to match the regular style
});

export const metadata = {
  title: "Ahmad - Portfolio",
  description: "Generated by Ahmad Junaid",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

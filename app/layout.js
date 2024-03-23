import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./css/card.scss";
import "./css/globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "John Doe's Portfolio",
  description:
    "As a React developer with 5 years of experience, I have honed my skills in JavaScript and am currently learning TypeScript to expand my expertise. I pride myself on being a quick learner and attentive listener, which allows me to collaborate effectively with clients to create efficient and scalable solutions. My focus is on developing user-friendly applications that solve real-world problems.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
      <link rel="shortcut icon" href="data:image/png;base64,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" type="image/x-icon" />
    </head>
      <body className={inter.className}>
        <ToastContainer />
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

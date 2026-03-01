import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Layout from "@/components/Layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return <Layout>
    <div className="container py-20 text-center">
      <h1 className={`${geistSans.variable} font-display text-4xl  md:text-6xl font-bold mb-6`}>
        Welcome to TTThumb
      </h1>
      <p className={`${geistSans.variable} font-bold bg-blue-100 text-lg md:text-xl opacity-80 mb-10`}>
        Your trusted partner for professional civil engineering services. From concept to completion, we deliver excellence in construction management, infrastructure, and quantity surveying.
      </p>
      <Image src="/images/homepage/hero-image.jpg" alt="Hero Image" width={800} height={400} className="mx-auto rounded-lg shadow-lg" />
    </div>
  </Layout>
    
}

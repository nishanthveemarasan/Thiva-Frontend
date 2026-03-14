import IconContainer from "@/containers/IconContainer";
import { useAppSelector } from "@/store/hooks";
import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";
import { Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";
const Footer = () => {

  const mapStateToPros = createSelector([
    (state: RootState) => state.contactInfoStore.data
  ], (data) => ({data}));
  const {data} = useAppSelector(mapStateToPros);
  return <footer className="border-t bg-primary text-primary-foreground">
    <div className="container py-12 grid gap-8 md:grid-cols-3">
      <div>
      <h4 className="font-display text-lg font-semibold mb-4">About Us</h4>
        <p className="text-sm opacity-80 leading-relaxed break-words whitespace-normal">
          Professional civil engineering services — from concept to completion. Delivering excellence in construction management, infrastructure, and quantity surveying.
        </p>
      </div>

      <div>
        <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
        <nav className="flex flex-col gap-2 text-sm opacity-80">
          <Link href="/" className="hover:opacity-100 transition-opacity">Home</Link>
          <Link href="/about" className="hover:opacity-100 transition-opacity">About</Link>
          <Link href="/resume" className="hover:opacity-100 transition-opacity">Resume</Link>
          <Link href="/testimonials" className="hover:opacity-100 transition-opacity">Testimonials</Link>
          <Link href="/contact" className="hover:opacity-100 transition-opacity">Contact</Link>
        </nav>
      </div>

     {data && <div>
        <h4 className="font-display text-lg font-semibold mb-4">Get in Touch</h4>
        <div className="flex flex-col gap-3 text-sm opacity-80">
          <div className="flex items-center gap-2">
            <IconContainer as={Phone} className="h-4 w-4" />
            <a href={`tel:${data?.phone}`} className="hover:text-orange-500 transition-colors">{data?.phone}</a>
            </div>
          <div className="flex items-center gap-2 break-words whitespace-normal">
            <IconContainer as={Mail} className="h-4 w-4" />
            <a href={`mailto:${data?.email}`} className="hover:text-orange-500 transition-colors">{data?.email}</a>
            </div>
          <div className="flex items-center gap-2 break-words whitespace-normal"><IconContainer as={MapPin} className="h-4 w-4" /> {data?.address} </div>
        </div>
      </div>}
    </div>

    <div className="border-t border-primary-foreground/20">
      <div className="container py-4 text-center text-xs opacity-60">
        © {new Date().getFullYear()} TTThumb. All rights reserved.
      </div>
    </div>
  </footer>
};

export default Footer;

import { useEffect, useState } from "react";
import { Menu, X, HardHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import MainLogo from "@/assets/images/logos/main-logo.png";
import Link from "next/link";
import { useRouter } from "next/router";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
    // Add active class
    const [currentPath, setCurrentPath] = useState("");
    const router = useRouter();
    // console.log(router.asPath)
  
    useEffect(() => {
      setCurrentPath(router.asPath);
    }, [router]);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-5 flex h-18 sm:h-24 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-display text-xl font-bold text-primary">
          {/* <HardHat className="h-6 w-6" />
          <span>CivilPro</span> */}
          <img src="/images/logos/main-logo.png" className="md:w-56 md:h-22 w-40 h-16"/>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              className={`px-4 py-2 rounded-md text-sm md:text-md font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                currentPath === l.to ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t bg-background pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 text-sm font-medium transition-colors text-center hover:bg-accent ${
                currentPath === l.to ? "bg-accent text-accent-foreground" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;

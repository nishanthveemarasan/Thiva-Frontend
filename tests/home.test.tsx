import { render, screen } from "@testing-library/react";
import Home from "@/pages/index"; // Adjust based on your file structure
import { homeData } from "@/types/store";

// 1. Mock UI Components to prevent render errors
jest.mock("@/components/Layout", () => ({ children }: any) => <div>{children}</div>);
jest.mock("@/components/ui/badge", () => ({
    Badge: ({ children }: any) => <span data-testid="badge">{children}</span>,
}));

jest.mock("@/components/ui/button", () => ({
    Button: ({ children }: any) => <span data-testid="badge">{children}</span>,
}));

// 2. Mock Carousel (Very important as it uses browser APIs Jest doesn't have)
jest.mock("@/components/ui/carousel", () => ({
  Carousel: ({ children }: any) => <div>{children}</div>,
  CarouselContent: ({ children }: any) => <div>{children}</div>,
  CarouselItem: ({ children }: any) => <div>{children}</div>,
  CarouselPrevious: () => <button>Prev</button>,
  CarouselNext: () => <button>Next</button>,
}));

// 3. Mock Icons
jest.mock("lucide-react", () => ({
  ArrowRight: () => <span>→</span>,
  MapPin: () => <span>Pin</span>,
}));

describe("Home Page", () => {
  const mockHomeData: homeData = {
    year_of_experience: 12,
    content: {
      title: "Building <span>Bridges</span>",
      description: "Expert engineering solutions.",
      images: [{ full_url: "/img1.jpg", title: "Site A" }]
    },
    services: [
      { title: "Civil Design", description: "Design work" }
    ],
    projects: [
      { 
        name: "Metro Station", 
        type: "Infrastructure", 
        city: "London", 
        image: { full_url: "/proj1.jpg", title: "Metro" } 
      }
    ]
  };

  it("renders spinner when data is null", () => {
    render(<Home data={null as any} error={false} />);
    const spinner = screen.getByRole('loading');
    expect(spinner).toBeInTheDocument();
  });

  it("renders error page when error is true", () => {
    render(<Home data={mockHomeData} error={true} />);
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  it("renders the HomeHeader component", () => {
    render(<Home data={mockHomeData} error={false} />);
    
    expect(screen.getByText(/Building/i)).toBeInTheDocument();
    expect(screen.getByText(/Bridges/i)).toBeInTheDocument();
    
    expect(screen.getByText(/12\+ Years Experience/i)).toBeInTheDocument();
  });

  it("renders the CarouselImages component", () => {
    render(<Home data={mockHomeData} error={false} />);
    
    expect(screen.getByText(/Our Work in Action/i)).toBeInTheDocument();
    
    expect(screen.getByText("Site A")).toBeInTheDocument();
    
    const heroImg = screen.getByAltText("Construction site");
    expect(heroImg).toHaveAttribute("src", "/images/general/hero-bg.jpg");
  });

  it("renders services component", () => {
    render(<Home data={mockHomeData} error={false} />);
    
    expect(screen.getByText("Areas of Expertise")).toBeInTheDocument();
    expect(screen.getByText("Civil Design")).toBeInTheDocument();
    expect(screen.getByText("Design work")).toBeInTheDocument();
  });

  it("renders the featured projects component", () => {
    render(<Home data={mockHomeData} error={false} />);
    
    expect(screen.getByText("Featured Projects")).toBeInTheDocument();
    expect(screen.getByText("Metro Station")).toBeInTheDocument();
    expect(screen.getByText("London")).toBeInTheDocument();
    expect(screen.getByText("Infrastructure")).toBeInTheDocument();
  });

  it("renders the HomeFooter component", () => {
    render(<Home data={mockHomeData} error={false} />);
    
    expect(screen.getByText(/Ready to Start Your Project\?/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Contact Me/i })).toBeInTheDocument();
  });
});
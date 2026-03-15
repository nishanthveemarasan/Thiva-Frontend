import { render, screen } from "@testing-library/react";
import Testimonials from "@/pages/testimonials"; // Adjust path to your page
import { testimonialData, testimonialSliceData } from "@/types/store";

jest.mock("@/components/Layout", () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);
jest.mock("lucide-react", () => ({
  Star: () => <div data-testid="star-icon" />,
  Quote: () => <div data-testid="quote-icon" />,
}));

describe("Testimonials Page", () => {

  const mockTestimonials: testimonialSliceData = {
    testimonials: [
      {
        first_name: "John",
        last_name: "Doe",
        content: "Amazing civil engineering work!",
        star: 5,
        title: "Project Manager"
      },
      {
        first_name: "Jane",
        last_name: "Smith",
        content: "Very professional team.",
        star: 4,
        title: "Homeowner"
      }
    ],
    contact_info: {
      email: "thumbengineeringconstruction@yahoo.com",
      phone: "07741304657",
      address: "11 Marshstreet North, Dartford, DA1 5WF",
    }
  };

  it("renders the Spinner when data is null", () => {
    render(<Testimonials data={null as any} error={false} />);

    const spinner = screen.getByRole('loading');
    expect(spinner).toBeInTheDocument();
  });

  it("renders PageError when the error prop is true", () => {
    render(<Testimonials data={mockTestimonials} error={true} />);

    expect(screen.queryByText(/What our clients say/i)).not.toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument();
  });

  render(<Testimonials data={mockTestimonials} error={false} />);

  expect(screen.getByText("Testimonials")).toBeInTheDocument();
  expect(screen.getByText(/What our clients say about working with us/i)).toBeInTheDocument();

  expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
  expect(screen.getByText(/Amazing civil engineering work!/i)).toBeInTheDocument();
  expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();

  const testimonialContents = screen.getAllByText(/Project Manager|Homeowner/i);
  expect(testimonialContents).toHaveLength(2);

});
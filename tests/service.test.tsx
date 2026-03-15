import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Services from "@/pages/services";
import { serviceSliceData } from "@/types/store";

jest.mock("@/components/Layout", () => ({ children }: { children: React.ReactNode }) => <div>{children}</div>);

describe("Services Page", () => {
  
   it("renders the Spinner when data is null", () => {
    render(<Services data={null as any} error={false} />);
    
    const spinner = screen.getByRole('loading');
    expect(spinner).toBeInTheDocument();
  });

  
  it("renders PageError when the error prop is true", () => {
    const mockData: serviceSliceData = {
      year_of_experience: 10,
      services: [],
      contact_info: {
        email: "thumbengineeringconstruction@yahoo.com",
        phone: "07741304657",
        address: "11 Marshstreet North, Dartford, DA1 5WF",
      }
    };

    render(<Services data={mockData} error={true} />);
    
    expect(screen.queryByText(/Our Services/i)).not.toBeInTheDocument();
    expect(screen.getByText(/something went wrong/i)).toBeInTheDocument(); 
  });

  it("renders the service list and header correctly", () => {
    const mockData: serviceSliceData = {
      year_of_experience: 15,
      services: [
        { title: "Civil Engineering", description: "Expert design", points: ["Structural Analysis", "Material Selection"], special_point: "Certified Professionals" },
        { title: "Project Management", description: "Efficient delivery", points: ["Scheduling", "Resource Allocation"], special_point: "Proven Track Record" }
      ],
      contact_info: {
        email: "thumbengineeringconstruction@yahoo.com",
        phone: "07741304657",
        address: "11 Marshstreet North, Dartford, DA1 5WF",
      }
    };

    render(<Services data={mockData} error={false} />);

     expect(screen.getByText(/15\+ years/i)).toBeInTheDocument();
    expect(screen.getByText(/Our Services/i)).toBeInTheDocument();

    expect(screen.getByText("Civil Engineering")).toBeInTheDocument();
    expect(screen.getByText("Project Management")).toBeInTheDocument();
    
    expect(screen.getByText("CE")).toBeInTheDocument();
    

    expect(screen.getByText(/Need Engineering Expertise\?/i)).toBeInTheDocument();
  });
});
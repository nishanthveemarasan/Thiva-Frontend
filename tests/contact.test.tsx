import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import Contact from "@/pages/contact";
import { contactDetails } from "@/types/store";

jest.mock("@/components/Layout", () => ({ children }: any) => <div>{children}</div>);

const mockToast = jest.fn();
jest.mock("@/hooks/use-toast", () => ({
  useToast: () => ({ toast: mockToast }),
}));


global.fetch = jest.fn();

describe("Contact Page", () => {
  const mockData: contactDetails = {
    email: "thumbengineeringconstruction@yahoo.com",
    phone: "07741304657",
    address: "11 Marshstreet North, Dartford, DA1 5WF",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders spinner when data is loading", () => {
    render(<Contact data={null as any} error={false} />);
    const spinner = screen.getByRole('loading');
    expect(spinner).toBeInTheDocument();
  });

  it("renders correct contact details from the sidebar", () => {
    render(<Contact data={mockData} error={false} />);
    expect(screen.getByText(/07741304657/i)).toBeInTheDocument();
    expect(screen.getByText(/thumbengineeringconstruction/i)).toBeInTheDocument();
    expect(screen.getByText(/11 Marshstreet North/i)).toBeInTheDocument();
  });

  it("shows validation errors when submitting an empty form", async () => {
    render(<Contact data={mockData} error={false} />);
    
    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
        expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/A Valid Email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/The Subject is required/i)).toBeInTheDocument();
        expect(screen.getByText(/Query is required/i)).toBeInTheDocument();
        expect(screen.getByText(/A Valid Phone Number is required/i)).toBeInTheDocument();
    });
  });

  it("submits the form successfully and triggers toast", async () => {
    (global.fetch as jest.Mock).mockResolvedValue({
      json: async () => ({ success: true, result: { message: "Thank you for contacting us!" } }),
    });

    render(<Contact data={mockData} error={false} />);

    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: "Inquiry" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Hello, I need a bridge." } });

    const submitButton = screen.getByRole("button", { name: /send message/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledWith("/api/contact-us", expect.any(Object));
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Message sent!",
      }));
    });
  });

  it("shows error toast when API submission fails", async () => {
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: false, message: "Something went wrong" }),
    });

    render(<Contact data={mockData} error={false} />);

    // Trigger submit (assuming fields are valid for this test)
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John Doe" } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Phone Number/i), { target: { value: "1234567890" } });
    fireEvent.change(screen.getByLabelText(/Subject/i), { target: { value: "Inquiry" } });
    fireEvent.change(screen.getByLabelText(/Message/i), { target: { value: "Help" } });

    fireEvent.click(screen.getByRole("button", { name: /send message/i }));

    await waitFor(() => {
      expect(mockToast).toHaveBeenCalledWith(expect.objectContaining({
        title: "Error",
        description: "Something went wrong",
      }));
    });
  });
});
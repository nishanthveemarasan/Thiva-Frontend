import { render, screen } from "@testing-library/react";
import About from "@/pages/about";
import { profileData } from "@/types/store";
import { Clock } from "lucide-react";


jest.mock("@/components/Layout", () => ({ children }: any) => <div>{children}</div>);

jest.mock("@/components/ui/badge", () => ({
    Badge: ({ children }: any) => <span data-testid="badge">{children}</span>,
}));


jest.mock("lucide-react", () => ({
    GraduationCap: () => <div data-testid="icon-edu" />,
    Briefcase: () => <div data-testid="icon-exp" />,
    Users: () => <div data-testid="icon-users" />,
    Award: () => <div data-testid="icon-awrd" />,
    Clock  : () => <div data-testid="icon-clock" />,
    CheckCircle: () => <div data-testid="icon-check" />,
}));

describe("About Page - Integration Test", () => {
    const mockFullData: profileData = {
        profile: {
            first_name: "Jane",
            last_name: "Smith",
            bottom_line: "<b>Building the future</b>",
            biography: "<p>Expert in civil structures.</p>",
            image: { full_url: "https://example.com/jane.jpg" },
        },
        services: [
            { title: "Structural Analysis", special_point: "Safety First" }
        ],
        experiences: [
            {
                company: "Global Tech",
                role: "Lead Engineer",
                from: 2018,
                to: "Present",
                description: "Managing large scale projects"
            }
        ],
        educations: [
            {
                course: "M.Tech",
                institution: "Stanford",
                from: 2014,
                to: 2016,
                description: "Specialized in Seismic design"
            }
        ],
        skills: [
            { name: "AutoCAD" },
            { name: "Project Management" }
        ]
    };

    it("renders the Spinner when data is null", () => {
        render(<About data={null as any} error={false} />);

        const spinner = screen.getByRole('loading');
        expect(spinner).toBeInTheDocument();
    });


    it("renders personal info and biography from profile data", () => {
        render(<About data={mockFullData} error={false} />);


        expect(screen.getByText(/Jane Smith/i)).toBeInTheDocument();
        expect(screen.getByText(/Building the future/i)).toBeInTheDocument();
        expect(screen.getByText(/Expert in civil structures/i)).toBeInTheDocument();

        const img = screen.getByAltText(/Jane Profile Picture/i);
        expect(img).toHaveAttribute("src", "https://example.com/jane.jpg");
    });

    it("renders the Specialisation with correct dates", () => {
        render(<About data={mockFullData} error={false} />);
        expect(screen.getByText("Specializations")).toBeInTheDocument();
        expect(screen.getByText(/Structural Analysis/i)).toBeInTheDocument();
        expect(screen.getByText(/Safety First/i)).toBeInTheDocument();
        expect(screen.getByText("SA")).toBeInTheDocument();
        expect(screen.getByText(/Safety First/i)).toBeInTheDocument();

    });

    it("renders the Skills list", () => {
        render(<About data={mockFullData} error={false} />);

        expect(screen.getByText("Skills")).toBeInTheDocument();
        expect(screen.getByText("AutoCAD")).toBeInTheDocument();
        expect(screen.getByText("Project Management")).toBeInTheDocument();
    });

    it("renders the Experience list with correct dates", () => {
        render(<About data={mockFullData} error={false} />);

        expect(screen.getByText("Experience")).toBeInTheDocument();
        expect(screen.getByText("Lead Engineer")).toBeInTheDocument();
        expect(screen.getByText("Global Tech")).toBeInTheDocument();
        expect(screen.getByText("2018 - Present")).toBeInTheDocument();
    });


    it("renders Education details", () => {
        render(<About data={mockFullData} error={false} />);

        expect(screen.getByText("Education")).toBeInTheDocument();
        expect(screen.getByText("M.Tech")).toBeInTheDocument();
        expect(screen.getByText("Stanford")).toBeInTheDocument();
        expect(screen.getByText("2014 - 2016")).toBeInTheDocument();
    });
});
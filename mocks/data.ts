export const mockContactData = {
  email: "thumbengineeringconstruction@yahoo.com",
  phone: "07741304657",
  address: "11 Marshstreet North, Dartford, DA1 5WF",
};
export const mockHomeData = {
  year_of_experience: 12,
  content: {
    title: "Building <span>Bridges</span>",
    description: "Expert engineering solutions.",
    images: [{ full_url: "/img1.jpg", title: "Site A" }],
  },
  services: [{ title: "Civil Design", description: "Design work" }],
  projects: [
    {
      name: "Metro Station",
      type: "Infrastructure",
      city: "London",
      image: { full_url: "/proj1.jpg", title: "Metro" },
    },
  ],
  contact_info: mockContactData,
};


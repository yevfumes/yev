/**
 * Upcoming perfumery classes. No dates are confirmed yet — this array is
 * intentionally empty. Add an entry here once a class is scheduled and it
 * will appear automatically on /perfumery-classes.
 */
export type ClassListing = {
  slug: string;
  name: string;
  date: string;
  location: string;
  duration: string;
  skillLevel: string;
  price: string;
  spacesAvailable: number;
  description: string;
  bookingHref: string;
};

export const upcomingClasses: ClassListing[] = [
  // Example shape for when a class is scheduled:
  // {
  //   slug: "intro-to-fragrance-materials-2027-03",
  //   name: "Introduction to Fragrance Materials",
  //   date: "14 March 2027",
  //   location: "London Studio",
  //   duration: "3 hours",
  //   skillLevel: "Beginner",
  //   price: "£185",
  //   spacesAvailable: 6,
  //   description:
  //     "A hands-on introduction to fragrance raw materials, note structure and building your first accord.",
  //   bookingHref: "/enquire",
  // },
];

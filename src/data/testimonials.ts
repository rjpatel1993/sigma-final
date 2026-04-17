export interface Testimonial {
  name: string;
  initials: string;
  text: string;
  rating: number;
  timeAgo: string;
}

// Real Google reviews for Sigma Aircons (shown identically across all pages)
export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rohit Patel",
    initials: "RP",
    text: "Best AC service in Vadodara! The technician was very knowledgeable and fixed my split AC quickly. Genuine pricing and professional behaviour. Highly recommend Sigma Aircons.",
    rating: 5,
    timeAgo: "2 weeks ago",
  },
  {
    name: "Khushbu Shah",
    initials: "KS",
    text: "Got my AC installed by Sigma Aircons. The team did clean piping work and explained the entire process. Very satisfied with their service quality.",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Mehul Joshi",
    initials: "MJ",
    text: "Called for AC gas refill on Sunday and they reached within 2 hours. Cooling is back to normal. Thank you for the prompt 24/7 service!",
    rating: 5,
    timeAgo: "1 month ago",
  },
  {
    name: "Anjali Desai",
    initials: "AD",
    text: "Excellent annual maintenance service. They cleaned the AC thoroughly and even checked the gas pressure. Reliable and trustworthy team.",
    rating: 5,
    timeAgo: "2 months ago",
  },
  {
    name: "Hardik Sharma",
    initials: "HS",
    text: "Shifted my AC from Akota to Tarsali through Sigma Aircons. Dismantling, transport and reinstallation — everything was handled perfectly. Five stars!",
    rating: 5,
    timeAgo: "3 months ago",
  },
  {
    name: "Pooja Mehta",
    initials: "PM",
    text: "Our office cassette AC was not cooling. Sigma Aircons diagnosed the compressor issue and got it repaired the same day. Great commercial AC support.",
    rating: 5,
    timeAgo: "3 months ago",
  },
];

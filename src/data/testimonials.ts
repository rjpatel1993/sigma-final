export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
}

export const TESTIMONIALS: Testimonial[] = [
  { name: "Rajesh Patel", location: "Manjalpur", text: "Excellent AC repair service! The technician arrived within an hour and fixed my AC quickly. Very professional and reasonable pricing.", rating: 5 },
  { name: "Priya Shah", location: "Akota", text: "Got my new split AC installed by Sigma Aircons. Clean work, proper piping, and they explained everything. Highly recommended!", rating: 5 },
  { name: "Amit Desai", location: "Karelibagh", text: "Regular AC servicing from Sigma Aircons keeps my AC running perfectly. Their AMC package is great value for money.", rating: 5 },
  { name: "Sneha Mehta", location: "Tarsali", text: "Called for AC gas refill and they came the same day. AC is cooling like new now. Thank you Sigma Aircons!", rating: 5 },
  { name: "Vikram Singh", location: "Sayajiganj", text: "Professional AC shifting service. They dismantled, transported, and reinstalled my AC at the new house perfectly.", rating: 5 },
  { name: "Nisha Joshi", location: "Nizampura", text: "Our office central AC was serviced by Sigma Aircons. Prompt service and very knowledgeable technicians. Great for commercial AC needs.", rating: 5 },
];

export interface Area {
  slug: string;
  name: string;
  description: string;
}

export const AREAS: Area[] = [
  { slug: "akota", name: "Akota", description: "Akota is a well-known residential and commercial area in Vadodara, home to many families and businesses that rely on efficient air conditioning." },
  { slug: "tarsali", name: "Tarsali", description: "Tarsali is a rapidly developing locality in Vadodara with numerous residential complexes and commercial establishments requiring reliable AC services." },
  { slug: "waghodia-road", name: "Waghodia Road", description: "Waghodia Road is one of the busiest corridors in Vadodara, featuring residential societies, offices, and educational institutions." },
  { slug: "makarpura", name: "Makarpura", description: "Makarpura is a major industrial and residential hub in Vadodara, known for the GIDC industrial estate and surrounding residential colonies." },
  { slug: "manjalpur", name: "Manjalpur", description: "Manjalpur is a thriving residential area in Vadodara with a mix of apartments, independent houses, and local businesses." },
  { slug: "nizampura", name: "Nizampura", description: "Nizampura is one of the oldest and most populated areas in Vadodara, with dense residential neighborhoods and commercial markets." },
  { slug: "karelibagh", name: "Karelibagh", description: "Karelibagh is a prime residential and commercial locality in Vadodara, known for its vibrant market and residential societies." },
  { slug: "madhavpura", name: "Madhavpura", description: "Madhavpura is a central locality in Vadodara with a mix of traditional homes and modern apartments." },
  { slug: "sayajiganj", name: "Sayajiganj", description: "Sayajiganj is the commercial heart of Vadodara, home to the railway station, major offices, and bustling markets." },
  { slug: "soma-talav", name: "Soma Talav", description: "Soma Talav is a growing residential area in Vadodara with new housing developments and community spaces." },
  { slug: "harni", name: "Harni", description: "Harni is an expanding locality in Vadodara near the airport, with new residential projects and commercial developments." },
  { slug: "bapod", name: "Bapod", description: "Bapod is a residential area in Vadodara known for its peaceful environment and growing number of housing societies." },
  { slug: "sangam-char-rasta", name: "Sangam Char Rasta", description: "Sangam Char Rasta is a busy junction area in Vadodara with residential and commercial properties." },
  { slug: "sayaji-park", name: "Sayaji Park", description: "Sayaji Park area is a premium locality in Vadodara near the famous Sayaji Garden, with upscale residences and businesses." },
  { slug: "khodiyar-nagar", name: "Khodiyar Nagar", description: "Khodiyar Nagar is a residential colony in Vadodara with a close-knit community and growing infrastructure." },
  { slug: "vrundavan", name: "Vrundavan", description: "Vrundavan is a well-planned residential area in Vadodara with modern amenities and family-friendly neighborhoods." },
  { slug: "panigate", name: "Panigate", description: "Panigate is a historical area in Vadodara with a mix of old heritage structures and modern developments." },
  { slug: "amit-nagar", name: "Amit Nagar", description: "Amit Nagar is a residential locality in Vadodara known for its affordable housing and good connectivity." },
  { slug: "sardar-estate", name: "Sardar Estate", description: "Sardar Estate is a prominent area in Vadodara with a mix of residential and commercial properties." },
];

export const getAreaBySlug = (slug: string): Area | undefined =>
  AREAS.find((a) => a.slug === slug);

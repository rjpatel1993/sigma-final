import { type ServiceFAQ } from "./services";

export function generateAreaFaqs(serviceName: string, areaName: string): ServiceFAQ[] {
  return [
    {
      question: `Where can I find the best ${serviceName.toLowerCase()} service in ${areaName}, Vadodara?`,
      answer: `Sigma Aircons provides the best ${serviceName.toLowerCase()} service in ${areaName}, Vadodara. We offer same-day service with experienced technicians and transparent pricing. Call us at +91 84016 02049 for quick assistance.`,
    },
    {
      question: `How much does ${serviceName.toLowerCase()} cost in ${areaName}?`,
      answer: `The cost of ${serviceName.toLowerCase()} in ${areaName} depends on the AC type, brand, and specific issue. Contact Sigma Aircons for a free inspection and transparent quote with no hidden charges.`,
    },
    {
      question: `Do you provide ${serviceName.toLowerCase()} near ${areaName}, Vadodara?`,
      answer: `Yes, Sigma Aircons provides ${serviceName.toLowerCase()} in ${areaName} and all surrounding areas in Vadodara. We offer doorstep service with quick response times.`,
    },
    {
      question: `What brands do you service for ${serviceName.toLowerCase()} in ${areaName}?`,
      answer: `We service all major AC brands in ${areaName} including Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, Lloyd, Godrej, and more.`,
    },
    {
      question: `Is same-day ${serviceName.toLowerCase()} available in ${areaName}?`,
      answer: `Yes, Sigma Aircons offers same-day ${serviceName.toLowerCase()} service in ${areaName}, Vadodara. Call us now to check availability and schedule your appointment.`,
    },
  ];
}

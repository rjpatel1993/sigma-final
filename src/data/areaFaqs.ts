import { type ServiceFAQ } from "./services";

// Deterministic hash so the same area+service always gets the same variant
const hash = (s: string): number => {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h;
};

const pick = <T,>(arr: T[], seed: number, offset = 0): T =>
  arr[(seed + offset) % arr.length];

// Pools of varied phrasings so each of the 171 service-area pages gets unique copy
const INTRO_POOLS = [
  (s: string, a: string) =>
    `Sigma Aircons is the trusted name for ${s.toLowerCase()} in ${a}, Vadodara. Households and businesses across ${a} call us first because we show up on time, fix the issue right the first time, and never surprise you with hidden charges.`,
  (s: string, a: string) =>
    `If you are searching for dependable ${s.toLowerCase()} in ${a}, Sigma Aircons offers a doorstep service backed by certified technicians, genuine spare parts, and a written service guarantee specifically for ${a} residents.`,
  (s: string, a: string) =>
    `${a} residents prefer Sigma Aircons for ${s.toLowerCase()} because of our quick response times across the locality, transparent pricing, and detailed before/after service report sent on WhatsApp.`,
  (s: string, a: string) =>
    `Looking for fast and affordable ${s.toLowerCase()} near ${a}? Sigma Aircons has a dedicated technician team operating in and around ${a}, ensuring most requests are attended within a few hours of booking.`,
  (s: string, a: string) =>
    `From compact apartments to large bungalows, Sigma Aircons handles every kind of ${s.toLowerCase()} job in ${a}, Vadodara. Our team is trained on every major brand and refrigerant type used in Indian homes.`,
];

const LOCAL_CONTEXT_POOLS = [
  (a: string) =>
    `${a} sees high humidity and dust during peak summer months, which puts extra load on AC condensers and filters. Our technicians carry locality-specific tooling so common faults in ${a} homes are diagnosed faster.`,
  (a: string) =>
    `Because traffic and access in ${a} can vary by time of day, we recommend booking morning or late-evening slots so our team can spend more time on workmanship rather than waiting in queues.`,
  (a: string) =>
    `Many older buildings in ${a} have tight installation spaces and shared walls, so we always carry compact drilling kits and noise-controlled equipment for ${a} jobs.`,
  (a: string) =>
    `${a} has a mix of older split units and newer inverter ACs. We stock genuine parts for both legacy R22 systems and modern R32 inverter models commonly found in ${a} homes.`,
  (a: string) =>
    `Power fluctuations are common in parts of ${a}, which can damage AC PCBs and compressors. Our team always inspects voltage stabilization as part of every service in ${a}.`,
];

const PRICING_POOLS = [
  (s: string, a: string) =>
    `Pricing for ${s.toLowerCase()} in ${a} depends on the unit's tonnage, brand, and the specific issue diagnosed. We share a written quote on WhatsApp before any work starts — no hidden charges, ever.`,
  (s: string, a: string) =>
    `${s} costs in ${a} typically vary by AC type (window, split, cassette) and the parts required. Our visit and diagnosis is free for ${a} residents — you only pay if you approve the quote.`,
  (s: string, a: string) =>
    `For ${s.toLowerCase()} in ${a}, charges depend on labor complexity and any spare parts needed. Sigma Aircons offers transparent flat-rate pricing on common jobs and itemized quotes on bigger ones.`,
  (s: string, a: string) =>
    `The cost of ${s.toLowerCase()} in ${a} can range based on your AC model and condition. Call +91 84016 02049 to get a same-day inspection and a clear, upfront price.`,
];

const RESPONSE_POOLS = [
  (s: string, a: string) =>
    `Yes, same-day ${s.toLowerCase()} is available in ${a} for most bookings made before 4 PM. Emergency cooling-down jobs are prioritized.`,
  (s: string, a: string) =>
    `In most cases we reach ${a} addresses within 60–120 minutes of confirming the booking. ${s} appointments can also be pre-scheduled for a time that suits you.`,
  (s: string, a: string) =>
    `Our ${a} response window for ${s.toLowerCase()} is typically a few hours. During peak summer, we recommend booking a day in advance for guaranteed slots.`,
  (s: string, a: string) =>
    `Yes — ${a} is one of our priority service zones for ${s.toLowerCase()}. Same-day visits are the norm, not the exception.`,
];

const BRAND_POOLS = [
  (s: string, a: string) =>
    `We service every major AC brand in ${a} — Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, Lloyd, Godrej, Mitsubishi, Whirlpool, Panasonic, O General and more — for ${s.toLowerCase()}.`,
  (s: string, a: string) =>
    `Whether your AC is a Daikin inverter, a Voltas window unit or a Blue Star cassette, our ${a} team is trained and tooled for ${s.toLowerCase()} on every Indian and imported brand.`,
  (s: string, a: string) =>
    `For ${s.toLowerCase()} in ${a} we work on all brands including Daikin, LG, Samsung, Hitachi, Voltas, Blue Star, Carrier, Lloyd, Godrej and O General — with original spare parts.`,
];

const WARRANTY_POOLS = [
  (s: string, a: string) =>
    `Every ${s.toLowerCase()} we perform in ${a} carries a workmanship warranty, and any genuine spare parts we install carry the manufacturer's warranty as well.`,
  (s: string, a: string) =>
    `Yes — our ${s.toLowerCase()} jobs in ${a} include a written service warranty. If the same issue recurs within the warranty period, we re-attend free of cost.`,
  (s: string, a: string) =>
    `All ${s.toLowerCase()} bookings in ${a} are backed by Sigma Aircons' service guarantee, plus parts warranty as applicable.`,
];

export interface AreaContent {
  intro: string;
  localContext: string;
  faqs: ServiceFAQ[];
}

export function generateAreaContent(serviceName: string, areaName: string): AreaContent {
  const seed = hash(`${serviceName}|${areaName}`);
  const s = serviceName;
  const a = areaName;

  const intro = pick(INTRO_POOLS, seed, 0)(s, a);
  const localContext = pick(LOCAL_CONTEXT_POOLS, seed, 1)(a);

  const faqs: ServiceFAQ[] = [
    {
      question: `Where can I book ${s.toLowerCase()} in ${a}, Vadodara?`,
      answer: pick(INTRO_POOLS, seed, 2)(s, a) + ` Call +91 84016 02049 to book.`,
    },
    {
      question: `How much does ${s.toLowerCase()} cost in ${a}?`,
      answer: pick(PRICING_POOLS, seed, 3)(s, a),
    },
    {
      question: `Is same-day ${s.toLowerCase()} available in ${a}?`,
      answer: pick(RESPONSE_POOLS, seed, 4)(s, a),
    },
    {
      question: `Which AC brands do you service for ${s.toLowerCase()} in ${a}?`,
      answer: pick(BRAND_POOLS, seed, 5)(s, a),
    },
    {
      question: `Do you provide warranty on ${s.toLowerCase()} in ${a}?`,
      answer: pick(WARRANTY_POOLS, seed, 6)(s, a),
    },
    {
      question: `What makes Sigma Aircons different for ${s.toLowerCase()} in ${a}?`,
      answer: pick(LOCAL_CONTEXT_POOLS, seed, 7)(a) + ` That local familiarity is why ${a} customers trust us with their ${s.toLowerCase()}.`,
    },
  ];

  return { intro, localContext, faqs };
}

// Backward-compat export so any existing import keeps working
export function generateAreaFaqs(serviceName: string, areaName: string): ServiceFAQ[] {
  return generateAreaContent(serviceName, areaName).faqs;
}

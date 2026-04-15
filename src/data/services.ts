export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  icon: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: ServiceFAQ[];
}

export const SERVICES: Service[] = [
  {
    slug: "ac-repair",
    name: "AC Repair",
    shortDescription: "Expert AC repair services for all brands and models in Vadodara.",
    description: "Is your AC not cooling properly, making unusual noises, or leaking water? Sigma Aircons provides fast, reliable AC repair services across Vadodara. Our certified technicians diagnose and fix all types of AC problems — from minor faults to major breakdowns — for split ACs, window ACs, and central air conditioning systems of all brands.",
    icon: "Wrench",
    benefits: [
      "Same-day repair service available",
      "All brands and models serviced",
      "90-day warranty on repairs",
      "Genuine spare parts used",
      "Transparent pricing with no hidden charges",
      "24/7 emergency repair support",
    ],
    process: [
      { step: "Book a Service Call", description: "Call us or send a WhatsApp message to schedule your AC repair visit." },
      { step: "Diagnosis & Inspection", description: "Our technician inspects your AC unit, identifies the issue, and explains the problem." },
      { step: "Repair & Testing", description: "We fix the issue using genuine parts and thoroughly test your AC for optimal performance." },
      { step: "Quality Assurance", description: "Final checks to ensure your AC is running efficiently with proper cooling." },
    ],
    faqs: [
      { question: "How much does AC repair cost in Vadodara?", answer: "AC repair costs vary depending on the issue. Contact Sigma Aircons for a free diagnosis and transparent quote with no hidden charges." },
      { question: "Do you repair all AC brands?", answer: "Yes, we repair all major AC brands including Daikin, Voltas, LG, Samsung, Hitachi, Blue Star, Carrier, and more." },
      { question: "How quickly can you come for AC repair?", answer: "We offer same-day AC repair service in most areas of Vadodara. Call us now to check availability." },
      { question: "Do you provide warranty on AC repairs?", answer: "Yes, we provide a 90-day warranty on all AC repair work and spare parts used." },
    ],
  },
  {
    slug: "ac-service-maintenance",
    name: "AC Service & Maintenance",
    shortDescription: "Professional AC servicing and maintenance for peak performance.",
    description: "Regular AC servicing is essential to keep your air conditioner running efficiently and extend its lifespan. Sigma Aircons offers comprehensive AC service and maintenance packages in Vadodara — including deep cleaning, filter washing, gas pressure checks, and performance optimization for all types of AC units.",
    icon: "Settings",
    benefits: [
      "Thorough deep cleaning of indoor & outdoor units",
      "Filter cleaning and sanitization",
      "Gas pressure and refrigerant check",
      "Electrical connection inspection",
      "Performance optimization for lower electricity bills",
      "Annual maintenance contracts available",
    ],
    process: [
      { step: "Schedule Service", description: "Book your AC service appointment at a time that suits you." },
      { step: "Deep Cleaning", description: "Complete cleaning of filters, coils, fins, and drainage system." },
      { step: "System Check", description: "Thorough inspection of gas levels, electrical connections, and thermostat calibration." },
      { step: "Performance Report", description: "We share the condition of your AC and recommendations for optimal performance." },
    ],
    faqs: [
      { question: "How often should I service my AC?", answer: "We recommend servicing your AC every 3-4 months for optimal performance and energy efficiency." },
      { question: "What is included in AC servicing?", answer: "Our AC service includes deep cleaning of filters, evaporator & condenser coils, drain pipe cleaning, gas pressure check, and overall performance testing." },
      { question: "Do you offer annual maintenance contracts?", answer: "Yes, we offer annual maintenance contracts (AMC) with regular scheduled visits at discounted rates." },
      { question: "Can regular servicing reduce electricity bills?", answer: "Yes, a well-maintained AC can reduce your electricity consumption by up to 20-30%." },
    ],
  },
  {
    slug: "ac-installation",
    name: "AC Installation",
    shortDescription: "Professional AC installation service for homes and offices.",
    description: "Get your new air conditioner installed professionally by Sigma Aircons. We provide expert AC installation services in Vadodara for all types of AC units — split AC, window AC, cassette AC, and ductable AC. Our technicians ensure proper mounting, piping, electrical connections, and optimal placement for maximum cooling efficiency.",
    icon: "PlusCircle",
    benefits: [
      "Expert installation by certified technicians",
      "Proper copper piping and insulation",
      "Optimal placement for best cooling",
      "Clean and neat installation with cable management",
      "All brands and tonnage handled",
      "Post-installation testing and guidance",
    ],
    process: [
      { step: "Site Survey", description: "We visit your location to assess the best position for your AC unit." },
      { step: "Installation", description: "Professional mounting of indoor and outdoor units with proper piping and wiring." },
      { step: "Testing", description: "Thorough testing of cooling, drainage, and all AC functions." },
      { step: "Handover", description: "We explain AC operation, remote functions, and maintenance tips." },
    ],
    faqs: [
      { question: "How long does AC installation take?", answer: "Standard split AC installation typically takes 2-3 hours depending on the complexity and piping length required." },
      { question: "Do you provide the copper piping?", answer: "Yes, we provide high-quality copper piping and all installation materials. The cost depends on the piping length needed." },
      { question: "Can you install any brand of AC?", answer: "Yes, we install all AC brands including Daikin, LG, Samsung, Voltas, Blue Star, Carrier, Hitachi, and more." },
      { question: "What should I prepare before AC installation?", answer: "Just ensure there's a power outlet near the indoor unit location. Our team handles everything else." },
    ],
  },
  {
    slug: "ac-gas-refill",
    name: "AC Gas Refill",
    shortDescription: "AC gas charging and refrigerant refill service in Vadodara.",
    description: "If your AC is not cooling properly, it might need a gas refill. Sigma Aircons provides professional AC gas refill and refrigerant charging services in Vadodara. We use genuine refrigerants (R22, R32, R410A) and check for leaks before recharging to ensure long-lasting performance.",
    icon: "Thermometer",
    benefits: [
      "Genuine refrigerant gases used (R22, R32, R410A)",
      "Leak detection before gas charging",
      "Proper pressure calibration",
      "Immediate cooling improvement",
      "All AC types and brands serviced",
      "Warranty on gas refill service",
    ],
    process: [
      { step: "Diagnosis", description: "Check gas pressure levels and identify if a refill is needed." },
      { step: "Leak Detection", description: "Thorough inspection for refrigerant leaks in the system." },
      { step: "Gas Charging", description: "Refill with the correct refrigerant type to manufacturer specifications." },
      { step: "Performance Test", description: "Verify cooling performance and temperature output after gas refill." },
    ],
    faqs: [
      { question: "How do I know if my AC needs gas refill?", answer: "Signs include reduced cooling, ice formation on pipes, AC running but not cooling, and hissing sounds from the unit." },
      { question: "Which gas does my AC use?", answer: "Different ACs use different refrigerants — R22, R32, or R410A. Our technician will identify the correct type for your AC." },
      { question: "How long does AC gas last?", answer: "AC gas should last the lifetime of the unit if there are no leaks. If you need frequent refills, there may be a leak that needs repair." },
      { question: "Is AC gas refill safe?", answer: "Yes, when done by trained technicians using proper equipment and genuine refrigerants, it is completely safe." },
    ],
  },
  {
    slug: "ac-dismantling",
    name: "AC Dismantling",
    shortDescription: "Safe AC dismantling and uninstallation services in Vadodara.",
    description: "Need to remove your AC unit? Sigma Aircons provides professional AC dismantling services in Vadodara. Whether you're renovating, shifting to a new location, or replacing your old AC, our technicians safely dismantle and disconnect your AC unit without any damage to the wall or the unit itself.",
    icon: "Unplug",
    benefits: [
      "Safe removal without wall damage",
      "Proper gas recovery before dismantling",
      "Careful handling of indoor and outdoor units",
      "Piping and wiring safely disconnected",
      "Units packed for storage or transport",
      "Quick and efficient service",
    ],
    process: [
      { step: "Gas Recovery", description: "Safely pump refrigerant gas back into the outdoor unit to prevent loss." },
      { step: "Disconnect", description: "Carefully disconnect electrical wiring and copper piping." },
      { step: "Unit Removal", description: "Remove indoor and outdoor units from their mounting brackets." },
      { step: "Wall Cleanup", description: "Seal pipe holes and clean the installation area." },
    ],
    faqs: [
      { question: "Will AC dismantling damage my wall?", answer: "No, our technicians carefully remove the units and mounting brackets. We also seal any pipe holes left behind." },
      { question: "Can you store the gas during dismantling?", answer: "Yes, we perform gas recovery — pumping the refrigerant back into the outdoor unit so it can be reused during reinstallation." },
      { question: "How long does AC dismantling take?", answer: "AC dismantling typically takes 1-2 hours depending on the installation type and accessibility." },
      { question: "Do I need dismantling before AC shifting?", answer: "Yes, proper dismantling is the first step before shifting your AC to a new location." },
    ],
  },
  {
    slug: "ac-shifting-relocation",
    name: "AC Shifting & Relocation",
    shortDescription: "Professional AC shifting and relocation service in Vadodara.",
    description: "Moving to a new home or office? Sigma Aircons provides complete AC shifting and relocation services in Vadodara. We handle the entire process — from dismantling at your old location to reinstallation at your new one — ensuring your AC is safely transported and properly set up for optimal performance.",
    icon: "Truck",
    benefits: [
      "Complete end-to-end AC shifting service",
      "Safe dismantling, transport, and reinstallation",
      "Gas recovery and recharging included",
      "New copper piping if required",
      "All brands and AC types handled",
      "Post-installation testing",
    ],
    process: [
      { step: "Dismantling", description: "Safe removal of AC units from the current location with gas recovery." },
      { step: "Transport", description: "Careful packing and transportation of all AC components." },
      { step: "Reinstallation", description: "Professional installation at the new location with proper mounting and piping." },
      { step: "Testing", description: "Complete testing of cooling performance and all functions." },
    ],
    faqs: [
      { question: "Do you handle the transport of the AC?", answer: "Yes, we provide complete AC shifting including safe packing and transportation to your new location." },
      { question: "Will I need new copper piping?", answer: "It depends on the new installation location. If the existing piping is sufficient and in good condition, we reuse it." },
      { question: "Can AC performance be affected by shifting?", answer: "If done professionally with proper gas handling and installation, your AC will perform just as well at the new location." },
      { question: "How much does AC shifting cost?", answer: "AC shifting costs depend on the distance, AC type, and piping requirements. Contact us for a free estimate." },
    ],
  },
  {
    slug: "ac-duct-repair",
    name: "AC Duct Repair",
    shortDescription: "AC duct cleaning, repair, and maintenance services in Vadodara.",
    description: "Damaged or dirty AC ducts can significantly reduce cooling efficiency and air quality. Sigma Aircons offers professional AC duct repair, cleaning, and maintenance services in Vadodara. We fix leaks, repair damaged ductwork, clean accumulated dust and mold, and ensure proper airflow throughout your space.",
    icon: "Wind",
    benefits: [
      "Duct leak detection and sealing",
      "Thorough duct cleaning and sanitization",
      "Improved airflow and cooling efficiency",
      "Better indoor air quality",
      "Energy savings from sealed ducts",
      "Commercial and residential service",
    ],
    process: [
      { step: "Inspection", description: "Thorough inspection of ductwork for leaks, damage, and blockages." },
      { step: "Cleaning", description: "Professional cleaning to remove dust, mold, and debris from ducts." },
      { step: "Repair & Sealing", description: "Fix damaged sections and seal all leaks for optimal airflow." },
      { step: "Airflow Testing", description: "Verify proper airflow and temperature distribution after repair." },
    ],
    faqs: [
      { question: "How do I know if my AC ducts need repair?", answer: "Signs include uneven cooling, unusual odors, increased dust in rooms, higher electricity bills, and visible damage or disconnection in ductwork." },
      { question: "How often should AC ducts be cleaned?", answer: "We recommend duct cleaning every 2-3 years, or more frequently in dusty environments or commercial settings." },
      { question: "Can duct leaks increase my electricity bill?", answer: "Yes, duct leaks can cause 20-30% energy loss, significantly increasing your electricity bills." },
      { question: "Do you service commercial AC ducts?", answer: "Yes, we provide duct repair and cleaning services for both residential and commercial properties in Vadodara." },
    ],
  },
  {
    slug: "ac-compressor-repair",
    name: "AC Compressor Repair",
    shortDescription: "Expert AC compressor repair and replacement in Vadodara.",
    description: "The compressor is the heart of your AC system. If it fails, your AC won't cool at all. Sigma Aircons specializes in AC compressor repair and replacement services in Vadodara. Our experienced technicians can diagnose compressor issues, perform repairs when possible, and recommend replacement only when necessary.",
    icon: "Cpu",
    benefits: [
      "Expert compressor diagnosis",
      "Repair before replacement approach",
      "Genuine compressor parts used",
      "All brands and models serviced",
      "Warranty on compressor work",
      "Affordable and transparent pricing",
    ],
    process: [
      { step: "Diagnosis", description: "Comprehensive testing to identify the exact compressor issue." },
      { step: "Assessment", description: "Determine if the compressor can be repaired or needs replacement." },
      { step: "Repair/Replace", description: "Expert repair or replacement with genuine parts." },
      { step: "System Testing", description: "Full system test to ensure proper cooling and compressor performance." },
    ],
    faqs: [
      { question: "What are signs of a failing AC compressor?", answer: "Signs include AC not cooling, unusual loud noises, circuit breaker tripping, hard starting, and warm air coming from vents." },
      { question: "Can an AC compressor be repaired?", answer: "Yes, many compressor issues like electrical faults, capacitor problems, and minor mechanical issues can be repaired without full replacement." },
      { question: "How long does a compressor repair take?", answer: "Compressor repairs typically take 2-4 hours. Replacement may take longer if a new compressor needs to be sourced." },
      { question: "Is it worth repairing an old AC compressor?", answer: "It depends on the AC's age and condition. Our technician will give you honest advice on whether repair or replacement is more cost-effective." },
    ],
  },
  {
    slug: "commercial-ac-service",
    name: "Commercial AC Service",
    shortDescription: "Commercial AC installation, repair, and maintenance in Vadodara.",
    description: "Sigma Aircons provides comprehensive commercial AC services in Vadodara for offices, shops, restaurants, showrooms, hospitals, and industrial spaces. From central AC systems to VRV/VRF units, ductable ACs, and cassette ACs — we handle installation, repair, maintenance, and AMC contracts for all commercial cooling needs.",
    icon: "Building2",
    benefits: [
      "Central AC, VRV/VRF, and ductable systems",
      "Customized AMC contracts for businesses",
      "Minimal downtime with priority service",
      "Energy audit and optimization",
      "Multi-brand expertise",
      "24/7 emergency support for commercial clients",
    ],
    process: [
      { step: "Site Assessment", description: "Evaluate your commercial space and cooling requirements." },
      { step: "Custom Solution", description: "Design a cooling solution tailored to your business needs." },
      { step: "Installation/Service", description: "Professional execution with minimal disruption to your operations." },
      { step: "Ongoing Support", description: "Regular maintenance visits and 24/7 emergency support." },
    ],
    faqs: [
      { question: "What types of commercial AC do you service?", answer: "We service all commercial AC types including central AC, VRV/VRF systems, ductable AC, cassette AC, tower AC, and packaged units." },
      { question: "Do you offer AMC for commercial AC?", answer: "Yes, we offer customized Annual Maintenance Contracts for businesses with regular scheduled maintenance visits." },
      { question: "Can you handle large commercial projects?", answer: "Yes, we have experience with large commercial installations including offices, hospitals, restaurants, and industrial facilities." },
      { question: "Do you provide emergency service for businesses?", answer: "Yes, we offer 24/7 emergency AC service for our commercial clients to minimize downtime." },
    ],
  },
];

export const getServiceBySlug = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

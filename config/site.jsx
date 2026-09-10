import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  CheckCircle,
} from "lucide-react";

const CAREERS_EMAIL = "adecareer@adesahq.com";

function createCareerMailHref({ title, general = false }) {
  const subject = general
    ? "Adesa Energy General Application — [Your Desired Role]"
    : `Adesa Energy Career Application — ${title}`;
  const body = [
    "Hello Adesa Energy Careers Team,",
    "",
    general
      ? "I would like to submit a general application for future opportunities at Adesa Energy."
      : `I would like to apply for the ${title} position at Adesa Energy.`,
    "",
    "Full name:",
    "Phone number:",
    "Current location:",
    ...(general ? ["Desired role:", "Area of interest:"] : []),
    "LinkedIn or portfolio (optional):",
    "",
    general ? "How I could contribute:" : "Application note:",
    "",
    "",
    "I have attached my CV for your review.",
    "",
    "Kind regards,",
    "[Your full name]",
  ].join("\n");

  return `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export const siteConfig = {
  name: "Adesa Energy",
  description:
    "Adesa Energy (a subsidiary of Adesa HQ) delivers mobile CNG conversion and on-demand refueling services. Cut fuel costs, improve efficiency, and power fleets and personal vehicles across Nigeria.",
  url: "https://www.adesaenergy.com",
  ogImage: "/adesa-energy.png",
  links: {
    twitter: "https://twitter.com/adesaenergy",
    linkedin: "https://linkedin.com/company/adesa-energy",
  },
  // Global site settings
  siteName: "Adesa Energy",
  siteDescription:
    "A subsidiary of Adesa HQ. Powering progress, fueling tomorrow. Your trusted partner for CNG conversions and refueling services in Nigeria.",
  siteUrl: "https://www.adesaenergy.com",
  email: "adeinfo@adesahq.com",
  phone: "+2348168823730",
  address: "2 Isheri road, Ojudu-Berger, Lagos",
  // Navigation items
  navItems: [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "team", label: "Our Team", path: "/team" },
    { id: "convert", label: "Convert to CNG", path: "/convert" },
    { id: "calculator", label: "Savings Calculator", path: "/calculator" },
    { id: "resources", label: "Resources", path: "/resources" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "solutions", label: "Solutions", path: "/solutions" },
    { id: "careers", label: "Careers", path: "/careers" },
    { id: "investors", label: "Investors", path: "/investors" },
    { id: "contact", label: "Contact Us", path: "/contact" },
  ],

  // Hero section content
  hero: {
    id: "home",

    tagline: "Powering Progress, Fueling Tomorrow",

    headline: "Tired of unpredictable fuel costs eating into your profits?",

    description:
      "Powering your journey with mobile CNG conversions and refueling, saving you money and the planet, one mile at a time.",

    ctas: {
      primary: {
        text: "Convert to CNG",
        target: "/convert",
        ariaLabel: "Convert to CNG today",
      },
      secondary: {
        text: "Calculate savings",
        target: "/calculator",
        ariaLabel: "Calculate your potential savings",
      },
      tertiary: {
        text: "Contact Us",
        target: "/contact",
        ariaLabel: "Contact Adesa Energy",
      },
    },

    stats: [
      {
        value: 50,
        suffix: "%",
        label: "Average fuel savings",
      },
      {
        value: 500,
        suffix: "+",
        label: "Vehicles converted",
      },
      {
        displayValue: "24/7",
        label: "Support available",
      },
    ],

    visual: {
      title: "Clean Energy Solutions",
      subtitle: "Sustainable • Affordable • Reliable",
      icon: "Fuel",
    },
    images: [
      "/blog-cng-adoption.webp",
      "/blog-cng-conversion-guide.webp",
      "/blog-adesa-expansion.webp",
      "/Screenshot 2026-01-13 103937.png",
    ],
  },

  // Features section content
  features: {
    id: "features",

    tagline: "WHY CHOOSE CNG",

    headline: "The smart choice for your vehicle",

    items: [
      {
        icon: "Wallet",
        title: "Cost savings",
        description:
          "Save up to 50% on fuel costs compared to petrol or diesel.",
      },
      {
        icon: "Leaf",
        title: "Eco-friendly",
        description:
          "Reduce carbon emissions by up to 30% with cleaner burning fuel.",
      },
      {
        icon: "ShieldCheck",
        title: "Safe and reliable",
        description:
          "CNG systems meet international safety standards and certifications.",
      },
      {
        icon: "Settings",
        title: "Low maintenance",
        description:
          "CNG engines experience less wear, extending vehicle lifespan.",
      },
    ],
  },

  // About section content
  about: {
    id: "about",

    tagline: "ABOUT US",

    headline: "Powering progress, fueling tomorrow",

    description: [
      "Adesa Energy is a pioneering clean energy company and a subsidiary of Adesa HQ, dedicated to revolutionizing the way Nigeria powers its vehicles. Founded with a vision to make sustainable fuel accessible to everyone, we specialize in mobile CNG conversions and on-demand refueling services.",
      "Our mission is simple: to help businesses and individuals reduce their fuel costs while contributing to a cleaner environment. With our innovative approach and commitment to excellence, we're making CNG adoption effortless and rewarding.",
    ],

    mission: {
      icon: "Zap",
      title: "Our mission",
      text: "To provide accessible, affordable, and sustainable CNG solutions that empower Nigerian businesses and individuals.",
    },

    vision: {
      icon: "Globe",
      title: "Our vision",
      text: "To be West Africa's leading CNG solutions provider, driving the transition to cleaner transportation.",
    },

    cta: {
      text: "Partner with us",
      target: "/contact",
    },

    values: [
      {
        icon: "Zap",
        title: "Innovation",
        desc: "Continuously improving our solutions and services.",
      },
      {
        icon: "Users",
        title: "Customer focus",
        desc: "Your success is our priority.",
      },
      {
        icon: "HandHeart",
        title: "Integrity",
        desc: "Transparent and honest in all dealings.",
      },
      {
        icon: "Globe",
        title: "Sustainability",
        desc: "Committed to environmental stewardship.",
      },
    ],

    partners: {
      label: "Trusted by industry leaders",
      count: 3,
    },
  },

  // Video section content
  videoSection: {
    heading: "Powering progress, fueling tomorrow",
    description:
      "Mobile CNG conversions and refueling. Lower fuel cost. Cleaner energy. Built for fleets and individuals.",
    cta: {
      label: "Convert to CNG",
      href: "/convert",
    },
    video: {
      src: "https://5s4crdleaswcfwbr.public.blob.vercel-storage.com/Videos/Adesa-Energy-Remastered.mp4",
      poster: "/video/adesa-poster.jpg",
      type: "video/mp4",
    },
    styles: {
      background: "#22244E",
      accent: "#F37621",
      textMuted: "#d9e7ff",
    },
  },

  // Our Team section content
  team: {
    section: {
      id: "team",
      title: "Meet Our Leadership Team",
      description:
        "Visionaries driving the future of sustainable energy with decades of combined industry expertise",
      cta: {
        label: "Contact Our Team",
        path: "/contact",
      },
    },

    members: [
      {
        name: "Femi Adeleye",
        role: "Founder & CEO",
        bio: "Femi Adeleye is a visionary entrepreneur and energy advocate driving the adoption of Compressed Natural Gas (CNG) in Nigeria. With a background in Petroleum Engineering and deep experience in marketing and strategy, he brings a powerful blend of technical and business acumen to Adesa Energy. Femi leads the company's mission to make clean energy accessible through innovative conversion solutions and strategic partnerships. His long-term vision is to build Africa's leading force in clean energy mobility.",
        image: "/Femi_Adeleye.png",
      },
      {
        name: "Solomon Adebayo",
        role: "Chief Financial Officer",
        bio: "Solomon Adebayo is a finance expert and business consultant with proven experience in accounting, taxation, and strategic advisory. As CFO of Adesa Energy, he oversees financial planning, modeling, and investor readiness. With a track record of supporting businesses locally and internationally, Solomon is instrumental in building scalable financial structures and driving the company's capital-raising initiatives to support expansion and innovation.",
        image: "/Solomon_Adebayo.png",
      },
      {
        name: "Afolabi Araromi",
        role: "Legal Adviser",
        bio: "Afolabi Araromi is an experienced commercial lawyer and strategic business adviser with over a decade of practice in corporate law, regulatory compliance, and business structuring. As Legal Adviser at Adesa Energy, he provides legal oversight across all contracts, partnerships, and corporate governance matters. He is the Managing Partner at Trudo Legal, a boutique firm offering legal solutions across sectors including energy, construction, media, and technology. Afolabi has advised on landmark transactions and sits on multiple company boards. He is also a member of the Nigeria-Kazakhstan Business Council, established by the Ooni of Ife to foster economic cooperation. His deep understanding of business law and practical industry insights make him a critical voice in shaping Adesa Energy's legal and operational foundation.",
        image: "/Afolabi_Araromi.png",
      },
      {
        name: "Timilehin Olatunji",
        role: "Chief Operating Officer",
        bio: "Olatunji Timilehin is a mechanical engineering graduate with a strong operational mindset and a talent for systems thinking. As COO at Adesa Energy, he manages cross-functional coordination, process optimization, and delivery of key projects. With a multidisciplinary approach to problem-solving and a keen eye for structure, he supports the company's mission to execute clean energy solutions efficiently at scale.",
        image: "/Timilehin_Olatunji.png",
      },
      {
        name: "Abdulkareem Nurat Mayowa",
        role: "Company Secretary",
        bio: "Mayowa is a dynamic project manager with a multidisciplinary background spanning education, public health, and business operations. At Adesa Energy, she oversees project planning, documentation, and execution while serving as the non-legal company secretary. Her attention to detail, strong communication skills, and passion for structure help ensure that internal processes and stakeholder engagement remain aligned with the company's growth vision.",
        image: "/Nurat_Mayowa.png",
      },
    ],
  },

  // Solutions section content
  solutions: {
    id: "solutions",

    header: {
      tagline: "OUR SOLUTIONS",
      headline: "Comprehensive CNG services",
      description:
        "From conversion to refueling, we provide end-to-end solutions tailored to your needs.",
    },

    main: [
      {
        icon: "Car",
        title: "Mobile CNG conversion",
        desc: "Professional conversion services at your location. Our certified technicians handle everything from assessment to installation.",
        gradient: "from-[#22244E] to-[#1D3866]",
        items: [
          "On-site conversion",
          "Certified equipment",
          "12-month warranty",
        ],
      },
      {
        icon: "Fuel",
        title: "On-demand refueling",
        desc: "Never worry about finding a CNG station. Our mobile refueling units come to you, wherever you are.",
        gradient: "from-[#F37621] to-[#e06515]",
        items: [
          "24/7 availability",
          "Quick response time",
          "Competitive pricing",
        ],
      },
      {
        icon: "Truck",
        title: "Fleet conversion packages",
        desc: "Comprehensive fleet solutions with volume discounts, dedicated support, and flexible payment plans.",
        gradient: "from-[#59C6E5] to-[#06b6d4]",
        items: [
          "Volume discounts",
          "Fleet management tools",
          "Priority support",
        ],
      },
    ],

    additional: [
      {
        icon: "Wrench",
        title: "Maintenance and support",
        description:
          "Regular maintenance services to keep your CNG system running at peak performance. Our expert technicians ensure safety and efficiency.",
        cta: {
          text: "Schedule service",
          target: "/contact",
        },
        theme: "dark",
      },
      {
        icon: "GraduationCap",
        title: "Training and consultation",
        description:
          "Comprehensive training for drivers and fleet managers. Learn best practices for CNG operation and maintenance.",
        cta: {
          text: "Get training",
          target: "/contact",
        },
        theme: "orange",
      },
    ],
  },

  // Calculator section content
  calculator: {
    theme: {
      headerColor: "text-deep-blue",
      formColor: "text-charcoal-gray",
      buttonColor: "bg-burnt-orange text-white hover:bg-dark-blue",
      cardBg: "bg-light-blue",
      cardText: "text-charcoal-gray",
    },
    header: {
      title: "CNG SAVINGS CALCULATOR",
      subtitle: "Discover Your Potential Savings",
      tagline: "POWERING PROGRESS, FUELING TOMORROW",
      description:
        "Enter your current fuel expenses to see how much you could save by switching to CNG conversion",
    },
    form: {
      inputType: {
        spend: "Monthly Spend (₦)",
        liters: "Monthly Liters",
      },
      spendLabel: "Monthly Petrol Spend (₦)",
      spendPlaceholder: "e.g., 100000",
      litersLabel: "Monthly Petrol Consumption (Liters)",
      litersPlaceholder: "e.g., 150",
      vehicleTypeLabel: "Vehicle Type",
      vehicleOptions: [
        { value: "sedan", label: "Sedan Car" },
        { value: "suv", label: "SUV" },
        { value: "pickup", label: "Pickup Truck" },
        { value: "bus", label: "Bus" },
        { value: "truck", label: "Commercial Truck" },
      ],
      calculateButton: "Calculate My Savings",
      calculatingText: "Calculating Savings",
      disclaimer:
        "Calculations based on current market prices ({petrolPrice} for petrol, {cngPrice} for CNG). Actual savings may vary based on driving conditions and vehicle specifics.",
    },
    results: {
      title: "Your CNG Savings Potential",
      monthlySavingsLabel: "Monthly Savings",
      yearlySavingsLabel: "Yearly Savings",
      avgSavingsLabel: "Savings",
      co2ReductionLabel: "CO₂ Reduction",
      vehicleTypePrefix: "For a",
      convertButton: "Convert My Vehicle Today",
      footerText: "Start saving on fuel costs with CNG conversion",
      noResult: {
        title: "Your Savings Breakdown",
        description:
          "Complete the form to see your personalized savings estimate with CNG conversion",
        bullet1: "Instant Results",
        bullet2: "Accurate Estimates",
      },
    },
    priceCards: [
      {
        title: "Petrol Price",
        valueKey: "petrol",
        icon: "Flame",
        color: "text-[#EE3E23]",
      },
      {
        title: "CNG Price",
        valueKey: "cng",
        icon: "Leaf",
        color: "text-[#59C6E5]",
      },
      {
        title: "Savings Percentage",
        valueKey: "savings",
        icon: "Percent",
        color: "text-[#F37621]",
      },
      {
        title: "Eco-Friendly",
        valueKey: "co2Reduction",
        icon: "Leaf",
        color: "text-green-400",
      },
    ],
    prices: {
      petrol: 1200, // NGN per liter
      cng: 450, // NGN per liter
    },
    co2PerLiter: 2.3, // kg CO2 per liter of petrol
    savingsPercentage: 50, // Default savings percentage
    vehicleMultipliers: {
      sedan: 1.0,
      suv: 1.2,
      pickup: 1.5,
      bus: 2.5,
      truck: 3.0,
    },
    priceDisplay: {
      petrol: "₦1200/L",
      cng: "₦450/L",
      savings: "~50%",
      co2Reduction: "~30%",
    },
  },
  // Testimonials section content
  testimonials: [
    {
      name: "Chief Adebayo",
      role: "Fleet Owner, Lagos",
      text: "Since converting my fleet to CNG with Adesa Energy, I've saved over ₦2 million monthly. The process was seamless and professional.",
      initial: "CA",
      color: "bg-[#22244E]",
    },
    {
      name: "Olumide Tunde",
      role: "Logistics Manager",
      text: "The mobile refueling service is a game-changer. No more wasting time looking for CNG stations. Adesa brings the fuel to me.",
      initial: "OT",
      color: "bg-[#F37621]",
    },
    {
      name: "Ngozi Kalu",
      role: "Private Car Owner",
      text: "I was skeptical at first, but after seeing my fuel costs drop by 48%, I'm a believer. Highly recommend Adesa Energy to everyone.",
      initial: "NK",
      color: "bg-[#59C6E5]",
    },
  ],

  // Resources/FAQ section content
  resources: {
    section: {
      id: "resources",
      tag: "RESOURCES",
      title: "Frequently asked questions",
      subtitle:
        "Everything you need to know about CNG conversions and our services.",
    },

    faqs: [
      {
        question: "What is CNG and how does it work?",
        answer:
          "CNG (Compressed Natural Gas) is a cleaner alternative to petrol and diesel. Adesa Energy converts your vehicle by installing a CNG tank and injection system, allowing your engine to run on natural gas with the same performance as petrol, reducing fuel costs and emissions.",
      },
      {
        question: "Where are Adesa Energy conversion centres located?",
        answer:
          "We currently operate physical conversion centres in Mile 2 Oke (Lagos), Sango (Ilorin), and the Kubwa axis (Abuja). These locations allow for immediate conversions and revenue generation, as well as priority access to bank-backed financing once available.",
      },
      {
        question: "How much does CNG conversion cost?",
        answer:
          "Costs vary by vehicle type and requirements. Sedans typically start from ₦450,000, with larger vehicles costing more. We offer flexible payment plans and early-bird incentives. Get a personalized quote by requesting a conversion on our Convert page.",
      },
      {
        question: "Is CNG conversion safe?",
        answer:
          "Yes. Our certified technicians follow strict SOPs and safety checks. Tanks are rigorously tested, and installations meet national and international standards. Conversions come with warranties and safety certification to give you peace of mind.",
      },
      {
        question: "How long does a conversion take?",
        answer:
          "Most vehicles are converted within 1–2 days at our centres. Fleet conversions are handled simultaneously for multiple vehicles. You can also book a slot in advance for guaranteed scheduling.",
      },
      {
        question: "Can I get financing for my conversion?",
        answer:
          "Yes. We maintain options for ‘Convert Now’ and ‘Financing Interest.’ Contact us or submit a conversion request to explore bank-backed loan options.",
      },
      {
        question: "How do I book a CNG conversion?",
        answer:
          "Submit your details on our Convert page (/convert), visit our centres in Lagos, Ilorin, or Abuja, or reach out to our team directly via our Contact page.",
      },
      {
        question: "Where can I refuel my CNG vehicle?",
        answer:
          "You can refuel at certified CNG stations, and Adesa Energy also offers on-demand mobile refueling at your home, office, or fleet location. Our service is designed to be flexible, convenient, and available 24/7.",
      },
      {
        question: "Who should consider converting to CNG?",
        answer:
          "Commercial transporters, fleet operators, private urban car owners, logistics companies, government fleets, and corporate organizations can all benefit from cost savings, reduced downtime, and environmentally-friendly fuel alternatives.",
      },
      {
        question: "What incentives are available for early adopters?",
        answer:
          "Launch discounts, free inspections, and special offers for fleet conversions are available. Early sign-ups receive priority booking and exclusive benefits.",
      },
    ],

    cta: {
      title: "Ready to switch to CNG?",
      description:
        "Book your vehicle conversion today, explore fleet solutions, or talk to our certified engineers across Nigeria.",
      buttonText: "Convert to CNG",
      ariaLabel: "Convert to CNG",
      download: "/documents/CNG_101_Guide.pdf",
      href: "/convert",
    },

    cta1: {
      buttonText: "Convert to CNG",
      ariaLabel: "Convert to CNG",
      href: "/convert",
    },
    cta2: {
      buttonText: "Download Guide",
      ariaLabel: "Download CNG Guide",
      href: "/documents/CNG_101_Guide.pdf",
    },
    cta3: {
      buttonText: "Learn More",
      ariaLabel: "Learn more about CNG conversion",
      href: "/solutions",
    },
  },

  // Blog section content
  blog: {
    section: {
      id: "blog",
      eyebrow: "BLOG & NEWS",
      title: "Latest updates",
      cta: {
        label: "View all articles",
        ariaLabel: "View all articles",
      },
    },
    posts: [
      {
        icon: "Newspaper",
        title: "Nigeria's CNG adoption rate surges in 2025",
        slug: "nigerias-cng-adoption-rate-surges-in-2025",
        excerpt:
          "Nigeria sees a 300% increase in CNG vehicle conversions in 2025 as fuel prices rise and clean energy adoption grows.",
        content: [
          "Nigeria is witnessing an unprecedented surge in Compressed Natural Gas (CNG) adoption in 2025. The latest statistics show a 300% increase in vehicle conversions across the country.",
          "Rising fuel prices and government incentives for cleaner energy have fueled this growth. Fleet operators, commercial transport services, and individual car owners are switching to CNG to reduce operational costs and environmental impact.",
          "Adesa Energy continues to support this transition with mobile conversion services, making it easier than ever for Nigerians to embrace sustainable energy solutions.",
        ],
        tag: "Industry news",
        date: "Jan 15, 2025",
        readingTime: "3 min read",
        gradient: "from-deep-blue to-dark-blue",
        iconBg: "bg-light-blue/10",
        iconColor: "text-light-blue",
        tagStyle: "bg-light-blue/10 text-light-blue",
        image: "/blog-cng-adoption.webp",
        ogImage: "/blog-cng-adoption.webp",
      },
      {
        icon: "Lightbulb",
        title: "5 things to know before converting to CNG",
        slug: "5-things-to-know-before-converting-to-cng",
        excerpt:
          "A guide to ensure your vehicle conversion to CNG is safe, cost-effective, and efficient.",
        content: [
          "Converting your vehicle to Compressed Natural Gas (CNG) can save you money and reduce emissions, but there are key points to consider.",
          "1. Ensure your vehicle model is compatible with CNG conversion kits.",
          "2. Check for authorized conversion centers to guarantee safety and quality.",
          "3. Evaluate long-term cost savings versus upfront conversion costs.",
          "4. Understand the availability of CNG refueling stations near you.",
          "5. Maintain your vehicle regularly to prevent engine issues.",
          "Adesa Energy offers professional installation and guidance to make the transition smooth.",
        ],
        tag: "Guide",
        date: "Jan 10, 2025",
        readingTime: "4 min read",
        gradient: "from-burnt-orange to-[#d15e15]",
        iconBg: "bg-white/10",
        iconColor: "text-white",
        tagStyle: "bg-burnt-orange/10 text-burnt-orange",
        image: "/blog-cng-conversion-guide.webp",
        ogImage: "/blog-cng-conversion-guide.webp",
      },
      {
        icon: "Megaphone",
        title: "Adesa Energy expands to 5 new cities",
        slug: "adesa-energy-expands-to-5-new-cities",
        excerpt:
          "Adesa Energy expands services to Abuja, Port Harcourt, Kano, Ibadan, and Benin City, bringing CNG conversion and refueling nationwide.",
        content: [
          "Adesa Energy is proud to announce its expansion into five new cities: Abuja, Port Harcourt, Kano, Ibadan, and Benin City. This expansion allows us to bring convenient mobile CNG conversion and on-demand refueling services to more Nigerians.",
          "Our mobile services reduce downtime for vehicle owners. Customers no longer need to visit traditional conversion centers; our experts come to their location.",
          "This approach simplifies the transition to CNG, saves money on fuel, and supports environmental sustainability.",
          "By reaching these cities, we aim to provide both convenience and cost savings while contributing to a greener future.",
        ],
        tag: "Company news",
        date: "Jan 5, 2025",
        readingTime: "5 min read",
        gradient: "from-light-blue to-cyan-500",
        iconBg: "bg-deep-blue/10",
        iconColor: "text-deep-blue",
        tagStyle: "bg-light-blue/10 text-light-blue",
        image: "/blog-adesa-expansion.webp",
        ogImage: "/blog-adesa-expansion.webp",
      },
    ],
  },

  // Careers section content
  careers: {
    email: CAREERS_EMAIL,
    hero: {
      eyebrow: "Build what moves Nigeria",
      title: "Do work that powers real progress.",
      subtitle:
        "Join the team making cleaner, more affordable mobility practical for businesses and drivers across Nigeria.",
      primaryCTA: { label: "Explore open roles", href: "#jobs" },
      secondaryCTA: { label: "Meet the team", href: "/team" },
      image: "/blog-cng-conversion-guide.webp",
    },
    about: {
      title: "The energy transition needs builders.",
      subtitle:
        "At Adesa Energy, your work connects directly to lower operating costs, cleaner transport, and infrastructure that serves everyday journeys.",
      features: [
        {
          title: "Visible impact",
          description:
            "See ideas move from planning into vehicles, fleets, and communities.",
        },
        {
          title: "Practical innovation",
          description:
            "Solve operational challenges with technology, engineering, and disciplined execution.",
        },
        {
          title: "Shared ownership",
          description:
            "Work closely across functions and take responsibility for outcomes, not just tasks.",
        },
      ],
    },
    jobs: {
      title: "Current Opportunities",
      subtitle:
        "Join our diverse team of engineers, designers, and sustainability experts building tomorrow's energy solutions today",
      viewAllLabel: "Apply For Positions",
      jobListings: [
        {
          id: 1,
          slug: "software-engineer",
          title: "Software Engineer",
          department: "Engineering",
          type: "Full-Time",
          location: "Lagos, Nigeria",
          description:
            "Develop and maintain energy management software solutions",
          href: createCareerMailHref({ title: "Software Engineer" }),
          datePosted: "2026-05-01",
          validThrough: "2026-12-31",
        },
        {
          id: 2,
          slug: "sustainability-analyst",
          title: "Sustainability Analyst",
          department: "Sustainability",
          type: "Full-Time",
          location: "Remote",
          description: "Analyze and optimize carbon reduction initiatives",
          href: createCareerMailHref({ title: "Sustainability Analyst" }),
          datePosted: "2026-05-01",
          validThrough: "2026-12-31",
        },
        {
          id: 3,
          slug: "product-designer",
          title: "Product Designer",
          department: "Design",
          type: "Full-Time",
          location: "Lagos, Nigeria",
          description:
            "Design user-centric interfaces for our energy solutions",
          href: createCareerMailHref({ title: "Product Designer" }),
          datePosted: "2026-05-01",
          validThrough: "2026-12-31",
        },
      ],
    },
    generalApplication: {
      id: "general-application",
      slug: "general-application",
      title: "General Application",
      department: "Talent Network",
      type: "Future Opportunities",
      location: "Nigeria",
      description:
        "Tell us where your experience could contribute to Adesa Energy's mission and future growth.",
      href: createCareerMailHref({ title: "General Application", general: true }),
    },
    benefits: [
      {
        icon: CheckCircle,
        title: "Health & Wellness",
        description:
          "Comprehensive health benefits to support you and your family",
      },
      {
        icon: CheckCircle,
        title: "Learning & Development",
        description: "Continuous growth opportunities and mentorship programs",
      },
      {
        icon: CheckCircle,
        title: "Flexible Work",
        description: "Hybrid and remote options to support work-life balance",
      },
      {
        icon: CheckCircle,
        title: "Team Events",
        description: "Collaborative activities to strengthen team culture",
      },
    ],
    principles: [
      {
        title: "Start with the customer",
        description: "Understand the operational reality before designing the solution.",
      },
      {
        title: "Build with discipline",
        description: "Move quickly, document decisions, and never compromise on safety.",
      },
      {
        title: "Learn in the open",
        description: "Share context early, welcome scrutiny, and improve as one team.",
      },
      {
        title: "Own the outcome",
        description: "Take responsibility from the first question through delivery.",
      },
    ],
    hiringSteps: [
      {
        title: "Apply",
        description: "Send your CV and a short note about the work you want to do.",
      },
      {
        title: "Conversation",
        description: "Meet the team and explore mutual fit, motivation, and expectations.",
      },
      {
        title: "Practical review",
        description: "Discuss relevant work or complete a focused role exercise.",
      },
      {
        title: "Decision",
        description: "Receive a clear outcome and next steps from our talent team.",
      },
    ],
    cta: {
      title: "Your role is not listed yet?",
      subtitle:
        "Exceptional people do not always fit neatly into an open requisition. Tell us where you can make a difference.",
      primaryCTA: {
        label: "Submit a general application",
        href: createCareerMailHref({ title: "General Application", general: true }),
      },
      secondaryCTA: { label: "Meet our leadership", href: "/team" },
    },
  },

  investors: {
    hero: {
      eyebrow: "Investor overview",
      title: "Invest in Nigeria's cleaner mobility transition.",
      description:
        "Adesa Energy is building the service infrastructure that helps fleets and drivers adopt CNG with less friction, lower operating costs, and less downtime.",
      primaryCTA: {
        label: "Talk to our investor team",
        href: "mailto:adeinfo@adesahq.com?subject=Investor Inquiry",
      },
      secondaryCTA: { label: "See how we operate", href: "/solutions" },
      image: "/blog-cng-adoption.webp",
    },
    traction: [
      { value: "Up to 50%", label: "fuel-cost savings for customers" },
      { value: "500+", label: "vehicles converted" },
      { value: "3", label: "active Nigerian locations" },
      { value: "24/7", label: "customer support" },
    ],
    market: {
      title: "A costly mobility problem is creating demand for a practical alternative.",
      description:
        "Fuel-price pressure affects household budgets, fleet margins, and the cost of moving goods. CNG can lower operating costs, but adoption depends on conversion access, refueling availability, and reliable support.",
      points: [
        "Large addressable base of petrol and diesel vehicles",
        "Clear economic incentive for high-mileage fleets and drivers",
        "Growing public and commercial attention around alternative fuels",
      ],
    },
    advantages: [
      {
        title: "Mobile by design",
        description: "Conversion services move closer to customers, reducing disruption and avoidable downtime.",
      },
      {
        title: "Conversion plus refueling",
        description: "A connected service model supports customers beyond the initial vehicle conversion.",
      },
      {
        title: "Fleet and individual demand",
        description: "The model serves commercial operators while remaining accessible to everyday drivers.",
      },
      {
        title: "Local operating knowledge",
        description: "Execution is shaped around Nigerian routes, customer behavior, and infrastructure realities.",
      },
    ],
    scaleSteps: [
      "Deploy mobile units",
      "Serve concentrated fleet demand",
      "Build local adoption",
      "Expand refueling coverage",
      "Enter the next city",
    ],
    whyNow: [
      "Fuel-cost pressure makes the customer value proposition immediate.",
      "Interest in alternative mobility fuels is moving into practical adoption.",
      "Adesa has an operating foundation ready for disciplined expansion.",
    ],
    capitalUses: [
      "Expand the mobile service fleet",
      "Increase conversion capacity",
      "Strengthen refueling infrastructure",
      "Improve customer and operations technology",
      "Launch into additional Nigerian markets",
    ],
    cta: {
      title: "Build the next chapter of cleaner mobility with us.",
      description:
        "Detailed commercial information is available through direct, confidential engagement with the Adesa Energy leadership team.",
      href: "mailto:adeinfo@adesahq.com?subject=Investor Inquiry",
      label: "Request an investor conversation",
    },
  },

  // Newsletter section content
  newsletter: {
    title: "Weekly Insights",
    description:
      "Join 5,000+ subscribers receiving our weekly growth insights.",
    placeholder: "Email address",
    submitLabel: "Subscribe",
    url: "https://www.linkedin.com/newsletters/the-adesa-lens-7352962421847638016/",
  },

  // Convert to CNG section content
  convert: {
    section: {
      id: "convert",
      badge: "CONVERT TO CNG",
      title: "Convert to CNG today",
      subtitle:
        "Save up to 50% on vehicle operating costs. Book your professional conversion at our certified centres or request mobile service.",
    },

    infoCards: [
      {
        type: "address",
        title: "Conversion Centres",
        value: "Mile 2 Oke (Lagos) • Sango (Ilorin) • Kubwa (Abuja)",
      },
      {
        type: "phone",
        title: "Booking Line",
        value: "+2348168823730",
        note: "Mon-Fri, 9am-5pm",
      },
      {
        type: "email",
        title: "Email Support",
        value: "adeinfo@adesahq.com",
        note: "Response within 24 hours",
      },
      {
        type: "website",
        title: "Official Website",
        value: "www.adesaenergy.com",
      },
    ],

    socials: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/showcase/adesa-energy/",
      },
      { name: "Twitter", url: "https://twitter.com/adesaenergy" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/adesaenergy/?igsh=MWE2YWdvdWl2aWNvZg%3D%3D#",
      },
      { name: "Facebook", url: "https://www.facebook.com/share/17HCMqGnz4/" },
    ],

    form: {
      title: "Book Your CNG Conversion",
      fields: {
        firstName: {
          label: "First name",
          placeholder: "John",
        },
        lastName: {
          label: "Last name",
          placeholder: "Doe",
        },
        phone: {
          label: "Phone number",
          placeholder: "+234 800 000 0000",
        },
        email: {
          label: "Email address (optional)",
          placeholder: "john@example.com",
        },
        vehicleType: {
          label: "Vehicle type",
          options: [
            { value: "Sedan / Saloon Car", label: "Sedan / Saloon Car" },
            { value: "SUV / Crossover", label: "SUV / Crossover" },
            { value: "Taxi / Ride-hail", label: "Taxi / Ride-hail" },
            { value: "Keke (Tricycle)", label: "Keke (Tricycle)" },
            { value: "Bus (Commercial / Staff)", label: "Bus (Commercial / Staff)" },
            { value: "Pickup / Delivery Van", label: "Pickup / Delivery Van" },
            { value: "Heavy Truck / Haulage", label: "Heavy Truck / Haulage" },
            { value: "Other", label: "Other" },
          ],
        },
        location: {
          label: "Preferred Conversion Centre",
          options: [
            { value: "Mile 2 Oke — Lagos", label: "Mile 2 Oke — Lagos" },
            { value: "Sango — Ilorin", label: "Sango — Ilorin" },
            { value: "Kubwa — Abuja", label: "Kubwa — Abuja" },
            { value: "On-site / Mobile Conversion (Fleets)", label: "On-site / Mobile Conversion (Fleets)" },
          ],
        },
        vehicleYear: {
          label: "Vehicle year",
          placeholder: "2018",
        },
        referralSource: {
          label: "How did you hear about us",
          options: [
            { value: "Social media", label: "Social media" },
            { value: "Radio / News", label: "Radio / News" },
            { value: "Mechanic / Workshop", label: "Mechanic / Workshop" },
            { value: "Transport Union", label: "Transport Union" },
            { value: "Referral / Word of mouth", label: "Referral / Word of mouth" },
            { value: "Car Dealer", label: "Car Dealer" },
            { value: "Other", label: "Other" },
          ],
        },
        numberOfVehicles: {
          label: "Number of vehicles to convert",
          placeholder: "1",
        },
        interestType: {
          label: "Interest category",
          options: [
            { value: "Convert now (Self-funded)", label: "Convert now (Self-funded)" },
            { value: "Financing / Loan interest", label: "Financing / Loan interest" },
            { value: "Corporate Fleet Consultation", label: "Corporate Fleet Consultation" },
          ],
        },
        profileType: {
          label: "Profile type",
          options: [
            { value: "Individual", label: "Individual Car Owner" },
            { value: "Organisation", label: "Corporate / Fleet Owner" },
          ],
        },
        consent: "I agree to the processing of my personal data in accordance with the",
        consentLink: "Privacy Policy",
      },
      submitText: "Request Conversion",
      successMessage:
        "Your conversion request has been received! An Adesa Energy engineer will contact you shortly to confirm your schedule.",
    },
  },

  // Contact section content
  contact: {
    section: {
      id: "contact",
      badge: "CONTACT US",
      title: "Get in touch with our team",
      subtitle:
        "Have questions about CNG conversion kits, corporate fleet partnerships, mobile refueling, or maintenance? We are here to help.",
    },

    infoCards: [
      {
        type: "address",
        title: "Headquarters",
        value: "2 Isheri road, Ojudu-Berger, Lagos",
      },
      {
        type: "phone",
        title: "Phone Support",
        value: "+2348168823730",
        note: "Mon-Fri, 9am-5pm",
      },
      {
        type: "email",
        title: "Email Inquiries",
        value: "adeinfo@adesahq.com",
        note: "We reply within 24 hours",
      },
      {
        type: "website",
        title: "Official Website",
        value: "www.adesaenergy.com",
      },
    ],

    socials: [
      {
        name: "Linkedin",
        url: "https://www.linkedin.com/showcase/adesa-energy/",
      },
      { name: "Twitter", url: "https://twitter.com/adesaenergy" },
      {
        name: "Instagram",
        url: "https://www.instagram.com/adesaenergy/?igsh=MWE2YWdvdWl2aWNvZg%3D%3D#",
      },
      { name: "Facebook", url: "https://www.facebook.com/share/17HCMqGnz4/" },
    ],

    form: {
      title: "Send Us a Message",
      fields: {
        name: {
          label: "Full Name",
          placeholder: "John Doe",
        },
        email: {
          label: "Email Address",
          placeholder: "john@example.com",
        },
        phone: {
          label: "Phone Number",
          placeholder: "+234 800 000 0000",
        },
        subject: {
          label: "Subject",
          options: [
            { value: "CNG Conversion Inquiry", label: "CNG Conversion Inquiry" },
            { value: "Fleet Refueling & Services", label: "Fleet Refueling & Services" },
            { value: "Partnership / Corporate Inquiry", label: "Partnership / Corporate Inquiry" },
            { value: "Media & Press", label: "Media & Press" },
            { value: "Customer Support & Maintenance", label: "Customer Support & Maintenance" },
            { value: "Other", label: "Other" },
          ],
        },
        message: {
          label: "Your Message",
          placeholder: "How can our clean energy experts help you?",
        },
        consent: "I agree to the processing of my contact information in accordance with the",
        consentLink: "Privacy Policy",
      },
      submitText: "Send Message",
      successMessage: "Your message has been sent successfully. We will get back to you shortly.",
    },
  },

  // Backward compatibility alias
  waitlist: {
    get section() { return siteConfig.convert.section; },
    get infoCards() { return siteConfig.convert.infoCards; },
    get socials() { return siteConfig.convert.socials; },
    get form() { return siteConfig.convert.form; },
  },

  // FooterSection content
  footer: {
    slogan:
      "Powering progress, fueling tomorrow. Your trusted partner for CNG conversions and refueling services in Nigeria.",
    quickLinks: [
      { label: "Home", type: "route", path: "/" },
      { label: "About Us", type: "route", path: "/about" },
      { label: "Convert to CNG", type: "route", path: "/convert" },
      { label: "Solutions", type: "route", path: "/solutions" },
      { label: "Savings Calculator", type: "route", path: "/calculator" },
      { label: "Resources", type: "route", path: "/resources" },
      { label: "Blog", type: "route", path: "/blog" },
      { label: "Our Team", type: "route", path: "/team" },
      { label: "Careers", type: "route", path: "/careers" },
      { label: "Investors", type: "route", path: "/investors" },
      { label: "Contact Us", type: "route", path: "/contact" },
    ],
    services: [
      "Mobile CNG conversion",
      "On-demand refueling",
      "Fleet solutions",
    ],
    career: {
      title: "Career Opportunities",
      description:
        "Join Adesa Energy and help shape the future of sustainable fuel solutions in Nigeria. Explore open positions and grow with us.",
      path: "/careers",
    },
    contact: {
      address: "2 Isheri road, Ojudu-Berger, Lagos",
      phone: "+2348168823730",
      email: "adeinfo@adesahq.com",
      website: "www.adesaenergy.com",
      hours: "Mon-Fri, 9am-5pm",
    },
    socials: [
      {
        icon: Linkedin,
        href: "https://www.linkedin.com/showcase/adesa-energy/",
      },
      { icon: Twitter, href: "#" },
      {
        icon: Instagram,
        href: "https://www.instagram.com/adesaenergy/?igsh=MWE2YWdvdWl2aWNvZg%3D%3D#",
      },
      { icon: Facebook, href: "https://www.facebook.com/share/17HCMqGnz4/" },
    ],
  },

  // Color palette from brand guide
  colors: {
    primary: {
      burntOrange: "#F37621",
      deepBlue: "#22244E",
      lightBlue: "#59C6E5",
    },
    secondary: {
      darkBlue: "#1D3866",
      charcoalGray: "#1a1a1a",
    },
  },

  // Typography settings
  typography: {
    headingFont: "font-montserrat",
    bodyFont: "font-inter",
    weights: {
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
};

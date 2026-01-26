import {
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  Mail,
  CheckCircle,
} from "lucide-react";

export const siteConfig = {
  // Global site settings
  siteName: "Adesa Energy",
  siteDescription:
    "Powering progress, fueling tomorrow. Your trusted partner for CNG conversions and refueling services in Nigeria.",
  siteUrl: "https://adesaenergy.com",
  email: "info@adesaenergy.com",
  phone: "+234 812 345 6789",
  address: "123 Energy Drive, Victoria Island, Lagos, Nigeria",

  // Navigation items
  navItems: [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about" },
    { id: "team", label: "Our Team", path: "/team" },
    { id: "solutions", label: "Solutions", path: "/solutions" },
    { id: "calculator", label: "Savings Calculator", path: "/calculator" },
    { id: "resources", label: "Resources", path: "/resources" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "contact", label: "Contact", path: "/contact" },
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
        text: "Convert today",
        target: "/contact",
        ariaLabel: "Convert to CNG today",
      },
      secondary: {
        text: "Calculate savings",
        target: "/calculator",
        ariaLabel: "Calculate your potential savings",
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
        suffix: "24/7",
        label: "Support available",
      },
    ],

    visual: {
      title: "Clean Energy Solutions",
      subtitle: "Sustainable • Affordable • Reliable",
      icon: "Fuel",
    },
    images: [
      "https://img.freepik.com/free-vector/realistic-polygonal-background_52683-60158.jpg?semt=ais_hybrid&w=740&q=80",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0t6Lb53B_eRRnYoAESVjjXZ5hRfOB2c8Wmw&s",
      "https://img.freepik.com/free-vector/realistic-neon-lights-background_23-2148907367.jpg",
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
      "Adesa Energy is a pioneering clean energy company dedicated to revolutionizing the way Nigeria powers its vehicles. Founded with a vision to make sustainable fuel accessible to everyone, we specialize in mobile CNG conversions and on-demand refueling services.",
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
      label: "Convert today",
      href: "/contact",
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
        label: "Join Our Team",
        path: "/contact",
      },
    },

    members: [
      {
        name: "Femi Adeleye",
        role: "Founder & CEO",
        bio: "Femi Adeleye is a visionary entrepreneur and energy advocate driving the adoption of Compressed Natural Gas (CNG) in Nigeria. With a background in Petroleum Engineering and deep experience in marketing and strategy, he brings a powerful blend of technical and business acumen to Adesa Energy. Femi leads the company's mission to make clean energy accessible through innovative conversion solutions and strategic partnerships. His long-term vision is to build Africa's leading force in clean energy mobility.",
        image: "/Femi_Adeleye.png", // Placeholder for Femi Adeleye's image
      },
      {
        name: "Solomon Adebayo",
        role: "Chief Financial Officer",
        bio: "Solomon Adebayo is a finance expert and business consultant with proven experience in accounting, taxation, and strategic advisory. As CFO of Adesa Energy, he oversees financial planning, modeling, and investor readiness. With a track record of supporting businesses locally and internationally, Solomon is instrumental in building scalable financial structures and driving the company's capital-raising initiatives to support expansion and innovation.",
        image: "/Solomon_Adebayo.png", // Placeholder for Solomon Adebayo's image
      },
      {
        name: "Afolabi Araromi",
        role: "Legal Adviser",
        bio: "Afolabi Araromi is an experienced commercial lawyer and strategic business adviser with over a decade of practice in corporate law, regulatory compliance, and business structuring. As Legal Adviser at Adesa Energy, he provides legal oversight across all contracts, partnerships, and corporate governance matters. He is the Managing Partner at Trudo Legal, a boutique firm offering legal solutions across sectors including energy, construction, media, and technology. Afolabi has advised on landmark transactions and sits on multiple company boards. He is also a member of the Nigeria-Kazakhstan Business Council, established by the Ooni of Ife to foster economic cooperation. His deep understanding of business law and practical industry insights make him a critical voice in shaping Adesa Energy's legal and operational foundation.",
        image: "/Afolabi_Araromi.png", // Placeholder for Afolabi Araromi's image
      },
      {
        name: "Timilehin Olatunji",
        role: "Chief Operating Officer",
        bio: "Olatunji Timilehin is a mechanical engineering graduate with a strong operational mindset and a talent for systems thinking. As COO at Adesa Energy, he manages cross-functional coordination, process optimization, and delivery of key projects. With a multidisciplinary approach to problem-solving and a keen eye for structure, he supports the company's mission to execute clean energy solutions efficiently at scale.",
        image: "/Timilehin_Olatunji.png", // Placeholder for Timilehin Olatunji's image
      },
      {
        name: "Abdulkareem Nurat Mayowa",
        role: "Company Secretary",
        bio: "Mayowa is a dynamic project manager with a multidisciplinary background spanning education, public health, and business operations. At Adesa Energy, she oversees project planning, documentation, and execution while serving as the non-legal company secretary. Her attention to detail, strong communication skills, and passion for structure help ensure that internal processes and stakeholder engagement remain aligned with the company's growth vision.",
        image: "/Nurat_Mayowa.png", // Placeholder for Abdulkareem Nurat Mayowa's image
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
        { value: "sedan", label: "Sedan / Saloon Car" },
        { value: "suv", label: "SUV / Crossover" },
        { value: "pickup", label: "Pickup Truck" },
        { value: "bus", label: "Bus / Minibus" },
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
      avgSavingsLabel: "Avg. Savings",
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
        title: "Average Savings",
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
      petrol: 737, // NGN per liter
      cng: 350, // NGN per liter
    },
    co2PerLiter: 2.3, // kg CO2 per liter of petrol
    savingsPercentage: 20, // Default savings percentage
    vehicleMultipliers: {
      sedan: 1.0,
      suv: 1.2,
      pickup: 1.5,
      bus: 2.5,
      truck: 3.0,
    },
    priceDisplay: {
      petrol: "₦737/L",
      cng: "₦350/L",
      savings: "~20%",
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
      subtitle: "Everything you need to know about CNG and our services.",
    },

    faqs: [
      {
        question: "What is CNG and how does it work?",
        answer:
          "CNG (Compressed Natural Gas) is natural gas stored at high pressure. It's a cleaner alternative to petrol and diesel. When your vehicle is converted, a CNG tank and injection system are installed, allowing your engine to run on natural gas with the same performance as petrol.",
      },
      {
        question: "How much does CNG conversion cost?",
        answer:
          "Conversion costs vary based on vehicle type and requirements. For sedans, conversion typically starts from ₦450,000. SUVs and larger vehicles may cost more. We offer flexible payment plans to make conversion accessible. Contact us for a personalized quote.",
      },
      {
        question: "Is CNG safe for my vehicle?",
        answer:
          "Absolutely! CNG is one of the safest fuels available. CNG tanks are designed to withstand extreme conditions and undergo rigorous testing. The gas is lighter than air, so in case of a leak, it dissipates quickly. Our installations meet all international safety standards.",
      },
      {
        question: "How long does the conversion process take?",
        answer:
          "A standard conversion takes 1-2 days for most vehicles. For fleet conversions, we can process multiple vehicles simultaneously. Our mobile conversion service means you don't even need to bring your vehicle to us – we come to you.",
      },
      {
        question: "What maintenance does a CNG vehicle require?",
        answer:
          "CNG vehicles require less maintenance than petrol vehicles. The fuel burns cleaner, reducing engine wear. We recommend annual CNG system inspections and regular filter changes. Our maintenance packages ensure your system stays in top condition.",
      },
      {
        question: "Where can I refuel my CNG vehicle?",
        answer:
          "Beyond traditional CNG stations, Adesa Energy offers on-demand mobile refueling services. Our refueling trucks can come to your location – whether at home, office, or anywhere you need fuel. We're available 24/7 for your convenience.",
      },
    ],

    cta: {
      title: "Want to learn more about CNG?",
      description:
        "Download our comprehensive CNG 101 guide and become an expert on clean energy solutions.",
      buttonText: "Download CNG guide",
      ariaLabel: "Download CNG guide",
      download: "/documents/CNG_101_Guide.pdf",
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
        image: "/images/blog/cng-adoption-2025.jpg", // hero image
        ogImage: "/images/blog/cng-adoption-2025-og.jpg", // static fallback OG image
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
        image: "/images/blog/cng-conversion-guide.jpg",
        ogImage: "/images/blog/cng-conversion-guide-og.jpg",
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
        image: "/images/blog/adesa-expansion.jpg",
        ogImage: "/images/blog/adesa-expansion-og.jpg",
      },
    ],
  },

  // Careers section content
  careers: {
    hero: {
      title: "Power the Future with Your Career",
      subtitle:
        "Join our mission to accelerate the global transition to sustainable energy through innovation and collaboration",
      primaryCTA: { label: "Explore Open Positions", href: "#jobs" },
      secondaryCTA: { label: "Our Sustainability Promise", href: "#about" },
      backgroundGradient: "from-[#0d3b66] to-[#1a5f7a]",
      textColor: "text-white",
      buttonColors: {
        primary: "bg-[#ffd166] text-[#0d3b66]",
        secondary: "bg-white/10 text-white border border-white",
      },
    },
    about: {
      title: "Why Adesa Energy?",
      subtitle:
        "We're not just building renewable energy solutions—we're building the foundation for a sustainable future",
      features: [
        {
          icon: CheckCircle,
          title: "Purpose-Driven Work",
          description:
            "Every project directly contributes to reducing global carbon emissions",
        },
        {
          icon: CheckCircle,
          title: "Innovation First",
          description:
            "Access cutting-edge tools and dedicated R&D resources to push boundaries",
        },
        {
          icon: CheckCircle,
          title: "Global Community",
          description:
            "Collaborate with experts across 15 countries on solutions that scale",
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
          title: "Software Engineer",
          department: "Engineering",
          type: "Full-Time",
          location: "Lagos, Nigeria",
          description:
            "Develop and maintain energy management software solutions",
          href: "mailto:career@adesahq.com?subject=Software Engineer",
        },
        {
          id: 2,
          title: "Sustainability Analyst",
          department: "Sustainability",
          type: "Full-Time",
          location: "Remote",
          description: "Analyze and optimize carbon reduction initiatives",
          href: "mailto:career@adesahq.com?subject=Sustainability Analyst",
        },
        {
          id: 3,
          title: "Product Designer",
          department: "Design",
          type: "Full-Time",
          location: "Lagos, Nigeria",
          description:
            "Design user-centric interfaces for our energy solutions",
          href: "mailto:career@adesahq.com?subject=Product Designer",
        },
        // Add more jobs as needed
      ],
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
    culture: [
      {
        id: 1,
        quote: "Adesa Energy empowers me to innovate and grow every day.",
        author: "Jane Smith",
        role: "Product Designer",
      },
      {
        id: 2,
        quote:
          "I love being part of a team that's changing the energy landscape.",
        author: "Michael Brown",
        role: "Software Engineer",
      },
      // Add more testimonials as needed
    ],
    cta: {
      title: "Ready to Power Your Career?",
      subtitle:
        "Join a team that's transforming how the world uses energy. We can't wait to build the future with you.",
      primaryCTA: {
        label: "Apply Now",
        href: "mailto:careers@adesaenergy.com?subject=Job Application",
      },
      secondaryCTA: { label: "Contact Our Talent Team", href: "/contact" },
      backgroundGradient: "from-[#0d3b66] to-[#1a5f7a]",
      textColor: "text-white",
    },
  },

  // Newsletter section content
  newsletter: {
    section: {
      title: "Stay updated with CNG insights",
      description:
        "Get the latest news, tips, and exclusive offers delivered to your inbox.",
      footerNote:
        "By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.",
    },

    form: {
      placeholder: "Enter your email",
      buttonText: "Subscribe now",
      loadingText: "Subscribing...",
    },

    messages: {
      success: "Thank you! You've been successfully subscribed.",
      error: "Please enter a valid email address.",
    },

    behavior: {
      successRate: 0.8,
      apiDelay: 1000,
      resetDelay: 5000,
    },
  },

  // Contact section content
  contact: {
    section: {
      id: "contact",
      badge: "CONTACT US",
      title: "Get in touch",
      subtitle:
        "Ready to start saving? Have questions? We&apos;re here to help.",
    },

    infoCards: [
      {
        type: "address",
        title: "Office address",
        value: "2 Isheri road, Ojudu-Berger, Lagos",
      },
      {
        type: "phone",
        title: "Phone",
        value: "+234 701 2345 154",
        note: "Mon-Sat, 8am-6pm",
      },
      {
        type: "email",
        title: "Email",
        value: "info@adesahq.com",
        note: "We reply within 24 hours",
      },
      {
        type: "website",
        title: "Website",
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
      title: "Send us a message",
      fields: {
        name: {
          label: "Full name",
          placeholder: "John Doe",
        },
        email: {
          label: "Email address",
          placeholder: "john@example.com",
        },
        phone: {
          label: "Phone number",
          placeholder: "+234 XXX XXX XXXX",
        },
        subject: {
          label: "Subject",
          options: [
            { value: "conversion", label: "Vehicle conversion inquiry" },
            { value: "refueling", label: "Refueling services" },
            { value: "fleet", label: "Fleet solutions" },
            { value: "support", label: "Technical support" },
            { value: "other", label: "Other" },
          ],
        },
        message: {
          label: "Message",
          placeholder: "Tell us about your needs...",
        },
        consent:
          "I agree to the processing of my personal data in accordance with the",
        consentLink: "Privacy Policy",
      },
      submitText: "Send message",
      successMessage:
        "Thank you! Your message has been sent successfully. We'll get back to you within 24 hours.",
    },
  },

  // FooterSection content
  footer: {
    slogan:
      "Powering progress, fueling tomorrow. Your trusted partner for CNG conversions and refueling services in Nigeria.",
    quickLinks: [
      { label: "Home", type: "route", path: "/" },
      { label: "About Us", type: "route", path: "/about" },
      { label: "Solutions", type: "route", path: "/solutions" },
      { label: "Savings Calculator", type: "route", path: "/calculator" },
      { label: "Resources", type: "route", path: "/resources" },
      { label: "Blog", type: "route", path: "/blog" },
      { label: "Our Team", type: "route", path: "/team" },
      { label: "Contact", type: "route", path: "/contact" },
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
      phone: "+234 701 2345 154",
      email: "info@adesahq.com",
      website: "www.adesaenergy.com",
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

export const cms = {
  navigation: [
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contact', href: '/contact' },
  ],
  hero: {
    headline: "The All-in-One Platform to Steer Your Travel Business Forward",
    subheadline: "Effortlessly manage your vehicles, drivers, and operations. Built for travel providers serving the corporate world.",
    ctaPrimary: "Book a Free Demo",
    ctaSecondary: "Watch 2-Min Demo",
  },
  about: {
    missionTitle: "Our Mission",
    mission: "Our mission is to empower travel service providers with the digital tools they need to thrive in a competitive market. We believe in simplifying complexity so you can focus on delivering exceptional service.",
    storyTitle: "Our Story",
    story: "TMS was born from a simple observation: while the corporate world was advancing, the travel providers serving them were stuck with outdated tools. We saw an opportunity to build a modern, secure, and intuitive solution to bridge that gap. Our team of software engineers and industry experts are passionate about helping you succeed.",
  },
  features: [
    {
      title: "Vehicle Management",
      description: "From sedans to buses, get a 360-degree view of your fleet. Track registration, insurance, service history, and document expiry in one place.",
      benefit: "Reduce downtime and ensure every vehicle is road-ready and compliant.",
      icon: "CarFront"
    },
    {
      title: "Driver Management",
      description: "Manage driver profiles, license details, and contact information. Track document validity and assign drivers to vehicles seamlessly.",
      benefit: "Build a reliable team and ensure passenger safety with verified, compliant drivers.",
      icon: "Users"
    },
    {
      title: "Automated Notifications",
      description: "Receive automatic alerts for upcoming document expiries for both vehicles (insurance, PUC) and drivers (license).",
      benefit: "Avoid costly fines and operational disruptions with proactive compliance management.",
      icon: "BellRing"
    },
    {
      title: "Smart Availability Search",
      description: "Quickly find available vehicles and drivers for a specific date and time window.",
      benefit: "Respond to client requests faster and maximize the utilization of your assets.",
      icon: "Search"
    },
    {
      title: "Secure Multi-Tenancy",
      description: "Your data is your own. Our architecture ensures that your agency's information is completely isolated and secure.",
      benefit: "Operate with confidence, knowing your business data and client information are protected.",
      icon: "ShieldCheck"
    },
    {
      title: "Real-time Location Tracking",
      description: "Pinpoint your vehicles and drivers on a live map.",
      benefit: "Enhance security, optimize routes, and provide clients with accurate ETAs.",
      icon: "MapPin"
    },
    {
      title: "IT Companies Portal",
      description: "Add IT companies so they can individually add Vehicles, Drivers, and Trips to get additional benefits.",
      benefit: "Streamline corporate client operations and provide them with exclusive platform benefits.",
      icon: "Building"
    },
    {
      title: "Billing and Report Generation",
      description: "Generate detailed reports and handle billing operations seamlessly within the platform.",
      benefit: "Save time on accounting and get clear visibility into your financial performance.",
      comingSoon: true,
      icon: "FileText"
    }
  ],
  pricing: {
    tiers: [
      {
        name: "Starter",
        description: "Perfect for trying things out",
        price: "₹300",
        unit: "/mo",
        features: ["Basic features", "Email support", "Single user"],
        cta: "Choose Plan",
        popular: false
      },
      {
        name: "Pro",
        description: "Most popular choice",
        price: "₹800",
        unit: "/mo",
        features: ["All basic features", "Priority support", "Up to 2 users"],
        cta: "Choose Plan",
        popular: true
      },
      {
        name: "Enterprise",
        description: "Built for long-term success",
        price: "₹1500",
        unit: "/mo",
        features: ["All features", "24/7 support", "Unlimited users"],
        cta: "Choose Plan",
        popular: true,
        highlighted: true
      }
    ]
  },
  contact: {
    email: "contact@tms-app.com",
    phone: "+1 (555) 0123-4567",
    address: "123 Tech Way, Suite 500, San Francisco, CA"
  }
};

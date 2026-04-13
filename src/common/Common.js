const Common = () => {
  const categories = [
    {
      id: 1,
      name: "Health",
    },
    {
      id: 2,
      name: "Social Finance",
    },
    {
      id: 3,
      name: "Local Governance",
    },
    {
      id: 4,
      name: "Water & Sanitation",
    },
  ];

  const productData = [
    {
      id: 1,
      name: "Tele-Health Portal",
      price: "$250",
      category: "Health",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 2,
      name: "Micro-Loan Tracker",
      price: "$180",
      category: "Social Finance",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 3,
      name: "Urban Planning Tool",
      price: "$420",
      category: "Local Governance",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 4,
      name: "Sanitation Monitoring",
      price: "$150",
      category: "Water & Sanitation",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 5,
      name: "Vaccine Inventory",
      price: "$310",
      category: "Health",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 6,
      name: "Pension Fund Manager",
      price: "$290",
      category: "Social Finance",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 7,
      name: "E-Property",
      price: "$500",
      category: "Local Governance",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 8,
      name: "Smart Metering System",
      price: "$210",
      category: "Water & Sanitation",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 9,
      name: "Digital OPD Booking",
      price: "$140",
      category: "Health",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 10,
      name: "Waste Management API",
      price: "$350",
      category: "Water & Sanitation",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
  ];

  const eGovData = [
    {
      id: 1,
      name: "Transformation",
      description: "State-led transition in Haryana",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 2,
      name: "Quarterly",
      description: "Scaling Impact in rural areas",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 3,
      name: "Community",
      description: "Open source saving public service",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 4,
      name: "Platform",
      description: "DIGIT sandbox: Build for future",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
    {
      id: 5,
      name: "Mission",
      description: "Building resilience in cities",
      image: "https://blocks.astratic.com/img/general-img-square.png",
    },
  ];

  const menuList = [
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "Areas of work",
      path: "/",
    },
    {
      name: "Products & Solutions",
      path: "/",
    },
    {
      name: "Our Platform",
      path: "/",
    },
    {
      name: "Ecosystem",
      path: "/",
    },
    {
      name: "Resources",
      path: "/",
    },
  ];

  return { categories, productData, eGovData, menuList };
};

export default Common;

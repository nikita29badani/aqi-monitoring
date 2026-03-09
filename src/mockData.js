export const locationData = {
  "Maharashtra": {
    "Mumbai": ["Andheri", "Bandra", "Colaba", "Dadar", "Juhu", "Powai", "Borivali", "Goregaon"],
    "Pune": ["Kothrud", "Hinjewadi", "Viman Nagar", "Baner", "Kalyani Nagar", "Wakad", "Shivajinagar"],
    "Nagpur": ["Sitabuldi", "Dharampeth", "Sadar", "Manish Nagar", "Wardhaman Nagar"]
  },
  "Chhattisgarh": {
    "Raipur": ["Tatibandh", "Shankar Nagar", "Telibandha", "Pandri", "Naya Raipur", "Civil Lines"],
    "Bhilai": ["Sector 6", "Sector 10", "Smriti Nagar", "Supela", "Nehru Nagar", "Hudco", "Ruabandha"],
    "Durg": ["Padmanabhpur", "Adarsh Nagar", "Mohan Nagar", "Borsi", "Kasaridih", "Durg Railway Station Area"],
    "Bilaspur": ["Sarkanda", "Vidya Nagar", "Rajendra Nagar", "Civil Lines", "Torwa"]
  },
  "Delhi": {
    "New Delhi": ["Connaught Place", "Chanakyapuri", "Hauz Khas", "Vasant Kunj", "Karol Bagh"],
    "North Delhi": ["Civil Lines", "Rohini", "Pitampura", "Kamla Nagar", "Model Town"],
    "South Delhi": ["Greater Kailash", "Lajpat Nagar", "Saket", "Defense Colony", "Green Park"],
    "East Delhi": ["Preet Vihar", "Laxmi Nagar", "Mayur Vihar", "Shahdara"]
  },
  "Karnataka": {
    "Bengaluru": ["Koramangala", "Indiranagar", "Whitefield", "HSR Layout", "Jayanagar", "Malleswaram", "Electronic City"],
    "Mysuru": ["Gokulam", "Saraswathipuram", "Vijayanagar", "Kuvempunagar", "Jayalakshmipuram"],
    "Mangaluru": ["Kadri", "Bejai", "Kankanady", "Surathkal"]
  },
  "Uttar Pradesh": {
    "Lucknow": ["Gomti Nagar", "Hazratganj", "Indira Nagar", "Aliganj", "Mahanagar", "Aminabad"],
    "Noida": ["Sector 15", "Sector 62", "Sector 18", "Greater Noida West", "Sector 137"],
    "Kanpur": ["Swaroop Nagar", "Kakadeo", "Kidwai Nagar", "Civil Lines", "Govind Nagar"],
    "Varanasi": ["Lanka", "Bhelupur", "Sigra", "Cantt", "Assi Ghat"]
  },
  "Tamil Nadu": {
    "Chennai": ["T Nagar", "Anna Nagar", "Adyar", "Velachery", "Mylapore", "OMR"],
    "Coimbatore": ["RS Puram", "Peelamedu", "Gandhipuram", "Saibaba Colony"],
    "Madurai": ["Anna Nagar", "KK Nagar", "SS Colony", "Tallakulam"]
  },
  "West Bengal": {
    "Kolkata": ["Salt Lake", "New Town", "Park Street", "Ballygunge", "Jadavpur", "Dum Dum"],
    "Howrah": ["Shibpur", "Salkia", "Bally", "Liluah", "Santragachi"],
    "Darjeeling": ["Chowrasta", "Kurseong", "Kalimpong", "Mirik"]
  },
  "Gujarat": {
    "Ahmedabad": ["Bopal", "Satellite", "Navrangpura", "Vastrapur", "Maninagar", "Prahlad Nagar"],
    "Surat": ["Adajan", "Vesu", "Piplod", "Varachha", "Kataragam"],
    "Vadodara": ["Alkapuri", "Akota", "Fatehgunj", "Karelibaug", "Sayajigunj"]
  },
  "Telangana": {
    "Hyderabad": ["Banjara Hills", "Jubilee Hills", "HITEC City", "Gachibowli", "Madhapur", "Kukatpally"],
    "Warangal": ["Hanamkonda", "Kazipet", "Subedari", "Nakkalagutta"]
  },
  "Rajasthan": {
    "Jaipur": ["Malviya Nagar", "Vaishali Nagar", "Mansarovar", "C-Scheme", "Bapu Nagar", "Raja Park"],
    "Jodhpur": ["Sardarpura", "Shastri Nagar", "CHB", "Ratanada"],
    "Udaipur": ["Fatehpura", "Sector 4", "Hiran Magri", "Panchwati"]
  },
  "Madhya Pradesh": {
    "Indore": ["Vijay Nagar", "Palasia", "Bhawarkuan", "Sudama Nagar", "Saket Nagar"],
    "Bhopal": ["MP Nagar", "Arera Colony", "Kolar Road", "Bairagarh", "Awadhpuri"],
    "Gwalior": ["City Center", "Lashkar", "Morar", "DD Nagar"]
  }
};

const aqiCategories = [
  { 
    max: 50, 
    label: "Good", 
    health: "Air quality is great. Perfect day for outdoor activities!", 
    mitigation: "Keep windows open for ventilation. Maintain current emission standards." 
  },
  { 
    max: 100, 
    label: "Moderate", 
    health: "Acceptable air quality. Unusually sensitive people should reduce heavy outdoor exertion.", 
    mitigation: "Opt for public transport to prevent further pollution." 
  },
  { 
    max: 200, 
    label: "Unhealthy", 
    health: "Everyone may begin to experience health effects. Sensitive groups may experience serious effects.", 
    mitigation: "Wear an N95 mask outdoors. Turn on indoor air purifiers." 
  },
  { 
    max: 500, 
    label: "Severe", 
    health: "Emergency conditions! The entire population is highly likely to be affected.", 
    mitigation: "Stay indoors completely. Keep all windows closed. Halt nearby construction." 
  }
];

const sources = [
  "Vehicular Emissions", 
  "Heavy Industrial Waste", 
  "Construction Dust", 
  "Stubble Burning", 
  "Road Dust & Sweeping"
];

export const generateMockReport = (state, district, ward) => {
  const randomAqi = Math.floor(Math.random() * 440) + 10; 
  
  const categoryDetails = aqiCategories.find(c => randomAqi <= c.max) || aqiCategories[3];
  
  const randomSource = sources[Math.floor(Math.random() * sources.length)];

  const trendData = [];
  const days = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
  for (let i = 0; i < 7; i++) {
    trendData.push({ 
      name: days[i], 
      aqi: Math.floor(Math.random() * 350) + 20
    });
  }

  return {
    location: `${ward}, ${district}, ${state}`,
    aqi: randomAqi,
    category: categoryDetails.label,
    healthAdvisory: categoryDetails.health,
    mitigation: categoryDetails.mitigation,
    source: randomSource,
    trend: trendData
  };
};
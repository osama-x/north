import { USE_DUMMY_DATA } from '../../config';

const getDummyItineraryData = (formData) => {
  return [
    {
      id: 1,
      title: `${formData.originCity} to Shogran`,
      timeline: [
        { time: "05:00 AM", title: `Departure from ${formData.originCity}` },
        { time: "09:30 AM", title: "Breakfast stop at Behra or Islamabad" },
        { time: "01:00 PM", title: "Lunch at Mansehra or Balakot" },
        { time: "04:00 PM", title: "Arrival at Kiwai; transfer to Shogran (Steep 7km drive)" }
      ],
      thingsToDo: ["Check-in, evening walk in Shogran forest", "Dinner with a view of Siri Paye peaks"],
      stays: []
    },
    {
      id: 2,
      title: "Shogran & Siri Paye Meadows",
      timeline: [
         { time: "09:00 AM", title: "Hire a local 4x4 Jeep for Siri Paye" },
         { time: "10:00 AM", title: "Explore Siri Meadows and Paye Lake" },
         { time: "02:00 PM", title: "Lunch in Shogran" },
         { time: "04:00 PM", title: "Relax or short hike to Forest Rest House" },
      ],
      thingsToDo: ["Horse riding at Siri Paye", "Photography at the 'Famous Swing'", "Bonfire at night"],
      stays: [
        { type: "Budget", price: 8000 },
        { type: "Mid-Range", price: 15000 },
        { type: "Luxury", price: 28000 }
      ]
    },
    {
      id: 3,
      title: `Shogran to ${formData.destinationCity}`,
      timeline: [
         { time: "10:00 AM", title: "Descend to Kiwai" },
         { time: "12:00 PM", title: "Drive along the Kunhar River to Naran" },
         { time: "02:00 PM", title: "Stop at Kaghan for lunch" },
         { time: "04:00 PM", title: "Check-in at Naran Hotel" },
      ],
      thingsToDo: ["Visit Naran Bazaar", "Trout Fish for dinner"],
      stays: [
        { type: "Budget", price: 10000 },
        { type: "Mid-Range", price: 20000 },
        { type: "Luxury", price: 40000 }
      ]
    },
    {
      id: 4,
      title: "Lake Saif-ul-Malook Excursion",
      timeline: [
         { time: "08:30 AM", title: "Hire Jeep for Saif-ul-Malook" },
         { time: "10:00 AM", title: "Boating & Trekking around the lake" },
         { time: "02:00 PM", title: "Return to Naran for Lunch" },
         { time: "04:00 PM", title: "Relaxation and local shopping" },
      ],
      thingsToDo: ["Boating", "Photography"],
      stays: [
        { type: "Budget", price: 10000 },
        { type: "Mid-Range", price: 20000 },
        { type: "Luxury", price: 40000 }
      ]
    }
  ];
};

const dummyBaseCosts = {
  fuelTolls: 49500,
  foodMisc: 35000,
  jeepActivities: 20000,
};

export const fetchItineraryData = async (formData) => {
  if (USE_DUMMY_DATA) {
    return {
      itinerary: getDummyItineraryData(formData),
      baseCosts: dummyBaseCosts
    };
  }

  try {
    const response = await fetch('/api/itinerary', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching itinerary data", error);
    return { itinerary: [], baseCosts: { fuelTolls: 0, foodMisc: 0, jeepActivities: 0 } };
  }
};

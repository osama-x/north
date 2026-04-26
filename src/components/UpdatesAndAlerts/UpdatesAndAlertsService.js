import { USE_DUMMY_DATA } from '../../config';

const dummyNewsItems = [
  {
    id: 1,
    time: "2 hours ago",
    title: "Storms and Rainfall Prediction",
    description: "Expect heavy rainfall across the Galiyat region over the next 4 days. Please travel with caution.",
    icon: "⚠️"
  },
  {
    id: 2,
    time: "5 hours ago",
    title: "Naran Tourism Season Update",
    description: "Local authorities are preparing to open regular tourist routes in Naran starting May 15th.",
    icon: "📰"
  },
  {
    id: 3,
    time: "Yesterday",
    title: "Babusar Top Road Construction",
    description: "Maintenance work is underway on the Babusar pass to clear snow avalanches.",
    icon: "🚧"
  }
];

const dummyDestinationStatus = [
  { id: 'naran', name: 'Naran', status: 'yellow', info: 'Partially open - Subject to weather' },
  { id: 'babusar', name: 'Babusar Top', status: 'red', info: 'Closed for all traffic' },
  { id: 'arangkel', name: 'Arang Kel', status: 'green', info: 'Fully accessible' },
  { id: 'kalam', name: 'Kalam', status: 'green', info: 'Open and accessible' },
  { id: 'mahodand', name: 'Mahodand', status: 'red', info: 'Road closed past Ushu forest' },
];

export const fetchUpdatesAndAlerts = async () => {
  if (USE_DUMMY_DATA) {
    return {
      newsItems: dummyNewsItems,
      destinationStatus: dummyDestinationStatus
    };
  }

  try {
    const response = await fetch('/api/updates-and-alerts');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching updates and alerts", error);
    return { newsItems: [], destinationStatus: [] };
  }
};

import { USE_DUMMY_DATA } from '../../config';

const dummyAllNews = [
  { id: 1, time: "2 hours ago", title: "Storms and Rainfall Prediction", description: "Expect heavy rainfall across the Galiyat region over the next 4 days. Please travel with caution. Landslides are possible on secondary routes.", icon: "⚠️" },
  { id: 2, time: "5 hours ago", title: "Naran Tourism Season Update", description: "Local authorities are preparing to open regular tourist routes in Naran starting May 15th. Hotels are beginning to take reservations.", icon: "📰" },
  { id: 3, time: "Yesterday", title: "Babusar Top Road Construction", description: "Maintenance work is underway on the Babusar pass to clear snow avalanches. Expected to open by mid-June.", icon: "🚧" },
  { id: 4, time: "2 days ago", title: "New Transport Hub in Skardu", description: "A new central bus and jeep terminal has been inaugurated to streamline tourist transport to Deosai and Shigar.", icon: "🚌" },
  { id: 5, time: "3 days ago", title: "Khunjerab Pass Reopens", description: "The Pak-China border at Khunjerab Pass is now open for trade and tourism after the winter closure.", icon: "🏔️" }
];

const dummyAllStatuses = [
  { id: 'naran', name: 'Naran', status: 'yellow', info: 'Partially open - Subject to weather. Kaghan valley is accessible.' },
  { id: 'babusar', name: 'Babusar Top', status: 'red', info: 'Closed for all traffic due to heavy snow.' },
  { id: 'batakundi', name: 'Batakundi', status: 'red', info: 'Road blocked by snow avalanches. Clearance in progress.' },
  { id: 'arangkel', name: 'Arang Kel', status: 'green', info: 'Fully accessible via Kel cable car and hike.' },
  { id: 'taobat', name: 'Taobat', status: 'red', info: 'Inaccessible - Heavy snowfall blocking the final 20km.' },
  { id: 'kalam', name: 'Kalam', status: 'green', info: 'Open and accessible. Weather is currently clear.' },
  { id: 'mahodand', name: 'Mahodand', status: 'red', info: 'Road closed past Ushu forest. Jeeps cannot pass.' },
  { id: 'skardu', name: 'Skardu', status: 'green', info: 'Flights operating normally. Jaglot-Skardu road is clear.' },
  { id: 'hunza', name: 'Hunza', status: 'green', info: 'Karakoram Highway is fully operational.' },
  { id: 'khunjerab', name: 'Khunjerab Pass', status: 'yellow', info: 'Open but expect delays and strict timing protocols.' },
];

export const fetchUpdatesPageData = async () => {
  if (USE_DUMMY_DATA) {
    return {
      allNews: dummyAllNews,
      allStatuses: dummyAllStatuses
    };
  }

  try {
    const response = await fetch('/api/updates-page');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching updates page data", error);
    return { allNews: [], allStatuses: [] };
  }
};

import { USE_DUMMY_DATA } from '../../config';
import hunzaImg from '../../assets/hunza.png';
import skarduImg from '../../assets/skardu.png';
import naranImg from '../../assets/naran.png';
import nathiaImg from '../../assets/nathia_gali.png';
import kalamImg from '../../assets/kalam.png';
import neelumImg from '../../assets/neelum.png';

const dummyTaglines = [
  { prefix: "", accent: "Effortlessly", suffix: " plan your perfect northern getaway" },
  { prefix: "Discover the ", accent: "Majestic", suffix: " beauty of the high peaks" },
  { prefix: "Experience ", accent: "Unparalleled", suffix: " serenity in every valley" },
  { prefix: "Create ", accent: "Everlasting", suffix: " memories in the North" }
];

const dummyDestinations = [
  { id: 1, name: 'Hunza', tagline: 'The Valley of Immortals', image: hunzaImg },
  { id: 2, name: 'Skardu', tagline: 'Land of Giants', image: skarduImg },
  { id: 3, name: 'Naran', tagline: 'Alpine Serenity', image: naranImg },
  { id: 4, name: 'Nathia Gali', tagline: 'Misty Mountains', image: nathiaImg },
  { id: 5, name: 'Kalam', tagline: 'Pine Whispers', image: kalamImg },
  { id: 6, name: 'Neelum', tagline: 'Paradise on Earth', image: neelumImg },
];

const dummyNewsItems = [
  "Naran opens for tourism on May 15th",
  "Storms and rainfall prediction over the next 4 days",
  "Snowfall expected in Galiyat region this weekend",
  "Road updates: Babusar Top construction in progress"
];

export const fetchHeroData = async () => {
  if (USE_DUMMY_DATA) {
    return {
      taglines: dummyTaglines,
      destinations: dummyDestinations,
      newsItems: dummyNewsItems
    };
  }

  // Actual API call placeholder
  try {
    const response = await fetch('/api/hero');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching hero data", error);
    return { taglines: [], destinations: [], newsItems: [] };
  }
};

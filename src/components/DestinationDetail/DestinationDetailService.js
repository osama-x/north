import { USE_DUMMY_DATA } from '../../config';
import hunzaImg from '../../assets/hunza.png';
import skarduImg from '../../assets/skardu.png';
import naranImg from '../../assets/naran.png';
import nathiaImg from '../../assets/nathia_gali.png';
import kalamImg from '../../assets/kalam.png';

const dummyDestinationsData = {
  'hunza': {
    name: 'Hunza Valley',
    tagline: 'The Valley of Immortals',
    image: hunzaImg,
    summary: 'Hunza is a mountainous valley in the Gilgit-Baltistan region. Known for its breathtaking scenery of the surrounding mountains like Rakaposhi, and the hospitality of its people. A premium destination for any explorer seeking serenity.',
    updates: ["Karakoram Highway is fully open for tourists", "Cherry blossom season starts next week", "New luxury glamping site opened at Attabad Lake"],
    activities: [
      { id: 1, title: 'Attabad Lake Boating', type: 'Adventure', icon: '🚤' },
      { id: 2, title: 'Baltit Fort Tour', type: 'Heritage', icon: '🏰' },
      { id: 3, title: 'Eagle\'s Nest Sunset', type: 'Sightseeing', icon: '🌄' },
      { id: 4, title: 'Passu Cones Trek', type: 'Trekking', icon: '⛰️' },
    ],
    stays: [
      { id: 1, name: 'Luxus Hunza', rating: '4.9', price: 'from $120/night' },
      { id: 2, name: 'Darbar Hotel', rating: '4.7', price: 'from $80/night' },
      { id: 3, name: 'Eagle\'s Nest Hotel', rating: '4.8', price: 'from $95/night' },
    ]
  },
  'skardu': {
    name: 'Skardu',
    tagline: 'Land of Giants',
    image: skarduImg,
    summary: 'The gateway to the mighty Karakoram range. Skardu is famous for its vast cold deserts, high altitude serene lakes like Shangrila, and serving as the base camp for K2 expeditions.',
    updates: ["Skardu Airport now accepts daily international flights", "Deosai Plains road cleared for jeeps", "Annual Polo Festival dates announced"],
    activities: [
      { id: 1, title: 'Deosai Safari', type: 'Adventure', icon: '🚙' },
      { id: 2, title: 'Shangrila Resort Visit', type: 'Leisure', icon: '🛶' },
      { id: 3, title: 'Shigar Fort Exploring', type: 'Heritage', icon: '🏛️' },
      { id: 4, title: 'Cold Desert Camping', type: 'Camping', icon: '⛺' },
    ],
    stays: [
      { id: 1, name: 'Shangrila Resort', rating: '4.9', price: 'from $150/night' },
      { id: 2, name: 'Serena Shigar Fort', rating: '4.8', price: 'from $200/night' },
      { id: 3, name: 'Khoj Resort', rating: '4.6', price: 'from $110/night' },
    ]
  },
  'naran': {
    name: 'Naran',
    tagline: 'Alpine Serenity',
    image: naranImg,
    summary: 'Situated in the upper Kaghan Valley, Naran is lush green and famous for the pristine Saif-ul-Malook lake. It is a prime summer destination for families and adventure seekers alike.',
    updates: ["Babusar Top is accessible", "Trout fishing permits available", "New cafes opened along the Naran bypass"],
    activities: [
      { id: 1, title: 'Lake Saif-ul-Malook', type: 'Sightseeing', icon: '🏞️' },
      { id: 2, title: 'Rafting in Kunhar River', type: 'Sports', icon: '🚣' },
      { id: 3, title: 'Lulusar Lake Drive', type: 'Scenic', icon: '🚙' },
      { id: 4, title: 'Lalazar Trek', type: 'Trekking', icon: '🥾' },
    ],
    stays: [
      { id: 1, name: 'Swiss Wood Cottages', rating: '4.7', price: 'from $90/night' },
      { id: 2, name: 'Pine Park Edge Resort', rating: '4.5', price: 'from $70/night' },
      { id: 3, name: 'Arcadian Riverside', rating: '4.8', price: 'from $100/night' },
    ]
  },
  'nathia-gali': {
    name: 'Nathia Gali',
    tagline: 'Misty Mountains',
    image: nathiaImg,
    summary: 'A mountain resort town or hill station in the Abbottabad District. Known for its dense pine, cedar and oak forests, misty weather, and beautiful hiking tracks.',
    updates: ["Pipeline Track renovation completed", "Weekend snowfall expected", "Kala Mazar peak trail open"],
    activities: [
      { id: 1, title: 'Mushkpuri Trek', type: 'Hiking', icon: '🏔️' },
      { id: 2, title: 'Pipeline Track Walk', type: 'Leisure', icon: '🌲' },
      { id: 3, title: 'Miranjani Hike', type: 'Hiking', icon: '🥾' },
      { id: 4, title: 'Kala Mazar Viewpoint', type: 'Sightseeing', icon: '👀' },
    ],
    stays: [
      { id: 1, name: 'Alpine Hotel', rating: '4.6', price: 'from $85/night' },
      { id: 2, name: 'Elites Hotel', rating: '4.4', price: 'from $60/night' },
      { id: 3, name: 'Summer Retreat Hotel', rating: '4.7', price: 'from $100/night' },
    ]
  },
  'kalam': {
    name: 'Kalam',
    tagline: 'Pine Whispers',
    image: kalamImg,
    summary: 'Located in the Swat Valley, Kalam is known for its waterfalls, lakes, and meadows. It is a stunning natural paradise surrounded by lush green hills, thick forests and the Swat river.',
    updates: ["Ushu forest road maintained for standard cars", "Local trout festival on 20th", "Mahodand lake is partially frozen"],
    activities: [
      { id: 1, title: 'Mahodand Lake Jeep Ride', type: 'Adventure', icon: '🚙' },
      { id: 2, title: 'Ushu Forest Walk', type: 'Nature', icon: '🌲' },
      { id: 3, title: 'Kundol Lake Trek', type: 'Trekking', icon: '🥾' },
      { id: 4, title: 'Swat River Trout Fishing', type: 'Leisure', icon: '🎣' },
    ],
    stays: [
      { id: 1, name: 'Walnut Heights', rating: '4.8', price: 'from $110/night' },
      { id: 2, name: 'Greens Hotel', rating: '4.5', price: 'from $75/night' },
      { id: 3, name: 'Jungle Inn Resort', rating: '4.6', price: 'from $85/night' },
    ]
  },
  'neelum': {
    name: 'Neelum',
    tagline: 'Paradise on Earth',
    image: null,
    summary: 'Neelum Valley is a 144 km long bow-shaped thick forested region in Azad Kashmir. It is named after the Neelum river, known for its excellent scenic beauty, panoramic views, towering hills and pure alpine environment.',
    updates: ["Ratti Gali basecamp opened", "New hanging bridge installed in Kel", "Arang Kel trek safety upgrades"],
    activities: [
      { id: 1, title: 'Arang Kel Trek', type: 'Hiking', icon: '🧗' },
      { id: 2, title: 'Ratti Gali Lake', type: 'Sightseeing', icon: '🏞️' },
      { id: 3, title: 'Kutton Waterfall Visit', type: 'Nature', icon: '🌊' },
      { id: 4, title: 'Keran Border View', type: 'Heritage', icon: '🔭' },
    ],
    stays: [
      { id: 1, name: 'Green Village Resorts', rating: '4.5', price: 'from $65/night' },
      { id: 2, name: 'Neelum Star Safari', rating: '4.7', price: 'from $80/night' },
      { id: 3, name: 'Pine Park Sharda', rating: '4.6', price: 'from $70/night' },
    ]
  }
};

export const fetchDestinationData = async (id) => {
  if (USE_DUMMY_DATA) {
    return dummyDestinationsData[id] || null;
  }

  try {
    const response = await fetch(`/api/destinations/${id}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching destination detail", error);
    return null;
  }
};

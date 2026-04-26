import { USE_DUMMY_DATA } from '../../config';

// Currently TripPlanner generates data locally, but in the future,
// this service might fetch dynamic locations or pricing limits.
export const fetchTripPlannerConfig = async () => {
  if (USE_DUMMY_DATA) {
    return {
      status: "ready"
    };
  }

  try {
    const response = await fetch('/api/planner-config');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching trip planner config", error);
    return { status: "error" };
  }
};

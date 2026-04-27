# React Native (Expo) Mobile App Manifesto

This document serves as the foundation and architectural blueprint for transitioning the web version of this application to a React Native (Expo) mobile app.

## 1. Core Functionality & User Flows
The mobile application will preserve the core user journey from the web app, mapped to mobile-native navigation paradigms:

*   **Landing / Explore (Web: `Hero` & `DestinationDetail`)**: A home screen featuring high-impact destination cards. Navigation to a Destination Detail screen mapping to `DestinationDetail.jsx` should be handled via Stack Navigation.
*   **Trip Planner (Web: `TripPlanner`)**: A dedicated screen or modal flow where users configure their expedition (origin, destination, dates, budget).
*   **Itinerary view (Web: `Itinerary`)**: The result of the Trip Planner. Presented as a timeline or a scrolling list of Day Cards (`DayCard.jsx`), showing day-by-day plans, activities, and stay options.
*   **Live Updates (Web: `UpdatesPage`)**: A dedicated tab or screen showing travel advisories, road statuses, and weather updates.

**Mobile Navigation Strategy:**
We recommend a Bottom Tab Navigator for main sections (`Explore`, `Plan`, `Live Updates`) and a Stack Navigator for deeper flows (e.g., `Explore` -> `Destination Detail`).

## 2. Design System Mapping
The web app utilizes a premium glassmorphism aesthetic with a mountainous background and a curated light/dark typography-focused design. Here is how it maps to React Native:

### Color Palette (React Native Equivalents)
```typescript
const colors = {
  light: {
    background: '#ffffff', // Background gradient base 
    textPrimary: '#010411',
    textSecondary: '#0f172a',
    textTertiary: '#334155',
    accentTeal: '#059669',
    borderLight: 'rgba(15, 23, 42, 0.08)',
    panelShadow: 'rgba(15, 23, 42, 0.1)',
    glassBackground: 'rgba(255, 255, 255, 0.7)',
  },
  dark: {
    background: '#0b1120',
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textTertiary: '#94a3b8',
    accentTeal: '#10b981',
    borderLight: 'rgba(255, 255, 255, 0.1)',
    panelShadow: 'rgba(0, 0, 0, 0.6)',
    glassBackground: 'rgba(30, 41, 59, 0.7)',
  }
};
```

### Typography
The web app uses `Inter`. In Expo, use `@expo-google-fonts/inter`.
```javascript
// React Native StyleSheet Equivalent
const typography = StyleSheet.create({
  h1: { fontFamily: 'Inter_800ExtraBold', fontSize: 32 },
  body: { fontFamily: 'Inter_400Regular', fontSize: 16 },
  button: { fontFamily: 'Inter_600SemiBold', fontSize: 16 },
});
```

## 3. Component Archetypes
Web CSS classes and components map to React Native primitives:

| Web Component / Class | React Native Primitive / Component | Notes |
| :--- | :--- | :--- |
| `.glass-card` / `div` | `BlurView` from `expo-blur` | Achieving true glassmorphism on mobile requires BlurView with absolute positioning or wrapping content. |
| `.btn-primary` / `button` | `Pressable` | Use `Pressable` over `TouchableOpacity` to replicate hover/press scaling effects using `react-native-reanimated`. |
| `.glass-input` / `input` | `TextInput` | Wrapped in a View with a slight background opacity and border to simulate glass. |
| `Header` & `Hero` | `SafeAreaView` & `ScrollView` | Header maps to a custom Stack Header or top-aligned View. |

## 4. Backend Data Contracts
Based on the existing service files, here are the inferred TypeScript interfaces for the API responses:

```typescript
// Updates & News
interface UpdateNews {
  id: number;
  time: string;
  title: string;
  description: string;
  icon: string;
}

interface TravelStatus {
  id: string;
  name: string;
  status: 'green' | 'yellow' | 'red';
  info: string;
}

// Destination Details
interface DestinationActivity {
  id: number;
  title: string;
  type: string;
  icon: string; // Emojis used currently
}

interface DestinationStay {
  id: number;
  name: string;
  rating: string;
  price: string;
}

interface DestinationDetail {
  name: string;
  tagline: string;
  image: any; // Image source
  summary: string;
  updates: string[];
  activities: DestinationActivity[];
  stays: DestinationStay[];
}

// Itinerary
interface TimelineEvent {
  time: string;
  title: string;
}

interface StayCost {
  type: 'Budget' | 'Mid-Range' | 'Luxury';
  price: number;
}

interface ItineraryDay {
  id: number;
  title: string;
  timeline: TimelineEvent[];
  thingsToDo: string[];
  stays: StayCost[];
}

interface ItineraryResponse {
  itinerary: ItineraryDay[];
  baseCosts: {
    fuelTolls: number;
    foodMisc: number;
    jeepActivities: number;
  };
}
```

## 5. State & Storage Transition
The current web app manages light/dark mode and potentially user session data.
Transition strategy to mobile:

*   **Theme State / Preferences**: Use `Zustand` or context for runtime state. For persistent storage (e.g., remembering theme, user form data from Trip Planner), transition from web `localStorage` to **AsyncStorage** (`@react-native-async-storage/async-storage`).
*   **Secure Data (Tokens/Auth)**: If the app implements user accounts, authentication tokens should NOT be stored in AsyncStorage. Use **expo-secure-store** (`import * as SecureStore from 'expo-secure-store'`) for securely saving and retrieving JWTs or sensitive user keys.

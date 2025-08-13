# Design - Mobile for Crowd Monitor

## Tech Stack & Development Setup

The mobile application for **Pothole Detection** is built using **React Native** with **Expo** for rapid development, **JavaScript** for flexibility, and **NativeWind** for utility-first styling with Tailwind CSS.

---

## Steps to Checkout and Run the App

### 1. Prerequisites
Ensure the following are installed on your system:

- **Node.js** (LTS version recommended) - [Download here](https://nodejs.org/)
- **npm** or **yarn** (comes with Node.js)
- **Git** - [Download here](https://git-scm.com/)
- **Expo Go App** on your Android/iOS device (for testing)  
  [Android](https://play.google.com/store/apps/details?id=host.exp.exponent) | [iOS](https://apps.apple.com/app/expo-go/id982107779)

---

### 2. Clone the Repository
```bash
git clone <repo-url>
cd mobile/potholeDetection
3. Install Dependencies
bash
npm install
# or
yarn install
4. Run the Application
bash
npx expo start
This will:

Start the Expo development server

Display a QR code in the terminal or Expo Dev Tools
You can scan the QR code with the Expo Go app on your phone to view the app.

Starter Template Structure
The project is initialized with:

Navigation – @react-navigation/native for app screens and routing

NativeWind – for Tailwind CSS-based styling

Expo Modules – for camera, location, and sensor access

Basic Folder Structure:

bash
potholeDetection/
├── assets/              # Images, fonts, etc.
├── src/
│   ├── screens/         # Screen components
│   ├── components/      # Reusable UI components
│   ├── navigation/      # Navigation config
│   └── utils/           # Helper functions
├── App.js
├── package.json
├── tailwind.config.js
Navigation Setup
React Navigation is pre-configured with:

Stack Navigator for main flows

Example screens: LandingPage, DetectionScreen, ReportsScreen

Styling with NativeWind
NativeWind is used for applying Tailwind CSS classes directly in React Native components, enabling utility-first styling for faster UI development.

Running on a Physical Device
Connect your device to the same Wi-Fi network as your computer

Open the Expo Go app

Scan the QR code shown in your terminal or browser after running:

bash

npx expo start
Running on an Emulator
Android: Install Android Studio, set up a Virtual Device, and run:

bash
npx expo start --android
iOS (Mac only): Install Xcode and run:

bash
npx expo start --ios


## Data flow

TODO(bhavyasree13, Nithya4115, kowshik86)

## Device APIs

TODO(hemanth-p-41)

## Backend APIs required

TODO(manishnarmala)

## Play Store Setup

TODO(khyathampratikshareddy-gif)

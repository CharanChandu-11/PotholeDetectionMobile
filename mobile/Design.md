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
```
3. Install Dependencies
```bash
npm install
# or
yarn install
```
4. Run the Application
```bash
npx expo start
```
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

```bash
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
```
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

```bash

npx expo start
```
Running on an Emulator
Android: Install Android Studio, set up a Virtual Device, and run:

```bash
npx expo start --android
```
iOS (Mac only): Install Xcode and run:

```bash
npx expo start --ios
```

## Data flow

TODO(bhavyasree13, Nithya4115, kowshik86)

## UI Components (React Native)

A comprehensive list of UI components for the mobile application, arranged for easy tracking and implementation. `

---

##  1. Register Screen

**Description:**  
User/Admin registration form with input validation.

**UI Elements:**
- Input: Full Name  
- Input: Email  
- Input: Password  
- Dropdown: Role (User / Admin)  
- Submit Button  
- Navigation to Login  

**Notes:**
- Use form validation for required fields  
- Clear and consistent error messages  

---

##  2. Login Screen

**Description:**  
Login screen for both User and Admin.

**UI Elements:**
- Input: Email  
- Input: Password  
- Login Button  
- Link to Register  
- Password visibility toggle  
- Show loading indicator during login  

**Notes:**
- Optional: visually differentiate User vs Admin login  

---

##  3. Report Submission Screen

**Description:**  
Screen where users submit pothole reports.

**UI Elements:**
- Image Picker (Open Camera / Gallery)  
- Text Input: Description  
- Auto-filled GPS Location (Latitude, Longitude)  
- Dropdown / Picker: Severity (Low, Medium, High)  
- Submit Button  

**Notes:**
- Display selected image thumbnail  
- Use react-native-geolocation-service  
- Optional: toggle to auto-assign severity using AI  

---

##  4. Map View Screen

**Description:**  
Interactive map showing pothole locations with severity indicators.

**UI Elements:**
- Map View (Google Maps / Apple Maps)  
- Markers: Red (High), Yellow (Medium), Green (Low)  
- Info Popup on marker tap  
- Center-to-location button  
- Refresh map button  

**Notes:**
- Use react-native-maps  
- Optional: marker clustering for dense areas  

---

##  5. Pothole List Screen

**Description:**  
Scrollable list of all reported potholes.

**UI Elements:**
- FlatList / ScrollView of report cards  
- Filter toggle or dropdown (optional)  
- Sort by: Date, Severity  

**Each Card Includes:**
- Thumbnail Image  
- Status badge  
- Location (coordinates or address)  
- Date of report  
- Assigned Worker (if any)  

**Notes:**
- Cards should be tappable to navigate to detail screen  

---

##  6. Admin Dashboard Screen

**Description:**  
Admin interface to manage pothole reports and assignments.

**UI Elements:**
- Tabs: Pending, In Progress, Fixed  
- List of Reports  
- Dropdown / Modal to Assign Worker  
- Dropdown / Buttons to Update Status  
- Filter by Severity (optional)  

**Notes:**
- Show status clearly with colored badges  
- Update actions only visible to admin  

---

##  7. Pothole Detail Screen

**Description:**  
Detailed view of a single pothole report.

**UI Elements:**
- Full-sized Image  
- Description  
- Location info (text or map)  
- Status badge  
- Severity level  
- Date Reported  
- Assigned Worker details  

**Notes:**
- Read-only view for regular users  
- Admins can access additional options  

---

##  8. Shared UI Components

**List of Common Components:**

- `<CustomButton />` – Reusable styled button  
- `<TextInputField />` – With validation and icons  
- `<Header />` – Page title with optional back button  
- `<StatusBadge />` – Displays status (Pending, In Progress, Fixed)  
- `<PotholeCard />` – Summary card used in lists  
- `<LoadingSpinner />` – Inline and full-screen loader  
- `<DropdownSelector />` – Used for severity, role, worker selection  
- `<ImagePicker />` – Component for selecting or capturing images  

**Notes:**
- Keep design consistent across screens  
- Make components responsive and reusable  


## Device APIs

TODO(hemanth-p-41)

## Backend APIs required

TODO(manishnarmala)
## 1. Pothole Reporting & Management APIs

### Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/potholes/report | POST | Submit a new pothole report (location, image, description, user info) |
| /api/potholes/upload-image | POST | Upload a pothole photo (optional separate endpoint) |
| /api/potholes/nearby?lat=...&lng=... | GET | Get all potholes near a user's location |
| /api/potholes/:id | GET | View details of a specific pothole |
| /api/potholes/:id/status | PUT | Update pothole status (Pending → In Progress → Fixed) |
| /api/potholes/user/:userId | GET | List all potholes reported by a particular user |
| /api/potholes/stats | GET | Get aggregate stats (total, resolved, pending, etc.) |

---

## 2. AI Integration APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/ai/detect | POST | Upload an image/video for pothole detection using AI |
| /api/ai/verify/:id | PUT | Confirm whether an AI-detected pothole is valid |
| /api/ai/logs | GET | View history/log of AI detections (optional/admin use) |

---

## 3. Municipality Office APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/municipality/nearest?lat=...&lng=... | GET | Get the nearest municipality office to a given pothole |
| /api/municipality/:id/potholes | GET | List of potholes assigned to a municipality |
| /api/municipality/:id/respond | POST | Update status or response from municipality office |
| /api/municipality/list | GET | List of all municipality offices (admin use) |

---

## 4. User Authentication & Profile APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/auth/register | POST | Register a new user |
| /api/auth/login | POST | Log in a user and receive an auth token |
| /api/auth/logout | POST | Log out the user (invalidate token) |
| /api/user/profile | GET | Get logged-in user profile details |
| /api/user/profile | PUT | Update user profile details |

---

## 5. Location & Mapping APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/location/reverse-geocode?lat=...&lng=... | GET | Convert coordinates into a readable address |
| /api/location/area-potholes/:areaName | GET | Fetch all potholes in a named locality/zone |

---

## 6. Notifications APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/notifications/send | POST | Send a notification to a municipality (on report) |
| /api/notifications/user | GET | Get all notifications related to a user (status updates, etc.) |

---

## 7. Admin & Analytics APIs

| Endpoint | Method | Description |
|----------|--------|-------------|
| /api/admin/all-potholes | GET | Admin view of all potholes in the system |
| /api/admin/metrics | GET | Admin metrics dashboard: reports by area, top users, etc. |
| /api/admin/municipality/manage | POST/PUT | Add or update municipality data |
| /api/admin/pothole/delete/:id | DELETE | Delete invalid or spam pothole reports |


## Play Store Setup

TODO(khyathampratikshareddy-gif)

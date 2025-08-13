# Design - Mobile for Potholemapper

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


## Data Flow

### Actors
- Commenter (User) – Reports potholes via the mobile app.
- Municipal Staff – Views reports, updates repair status.
- Admin – Oversees system, resolves conflicts in severity.
- AI Engine – Analyzes uploaded images to detect potholes and assign severity.

### Process Overview

#### 1. Report Pothole (Commenter)
- User uploads a photo with geo-tag (location) and severity level.
- Data is sent to the AI Engine for verification.
- Report is stored in the Pothole Reports Database.

#### 2. AI Detection & Severity Analysis
- AI analyzes the uploaded image for pothole presence.
- Estimates depth and assigns severity (Low, Medium, High).
- Compares its output with user-provided severity.
- Updates the report in the database.

#### 3. Crowd Validation & Prioritization
- Multiple reports for the same pothole increase its priority.
- Final severity is determined using AI results, user input, and report frequency.

#### 4. Repair Management (Municipal Staff)
- Staff view potholes sorted by severity and priority.
- Update repair status: Pending → Work Started → Fixed.

#### 5. User Interaction
- Users can view status updates and severity details.
- Can comment/review potholes or request alternate routes avoiding severe ones.
- Receive notifications when repair status changes.

#### 6. Admin Management
- Admin resolves mismatches between AI and user severity.
- Oversees user management and system integrity.

### Data Stores
- Pothole Reports DB – Stores report details, images, severity, location.
- Users DB – Stores user details, roles, and history.
- Notification Queue – Stores pending notifications for delivery.

## Device APIs

TODO(hemanth-p-41)

## 1. Map & Location APIs

| API | Use |
| --- | --- |
| *Google Maps SDK* | Display maps, mark pothole locations |
| *Geolocation API* (geolocator, FusedLocationProviderClient) | Get user’s real-time GPS location |
| *Reverse Geocoding API* (Google or Mapbox) | Convert latitude/longitude to human-readable address |
| *OpenStreetMap API* (alternative) | Free maps and location services |

---

## 2. Camera & Media APIs

| API | Use |
| --- | --- |
| *Camera API* (image_picker, CameraX) | Open device camera to click pothole photos |
| *Gallery/File Picker API* | Let user upload existing photo from device |
| *Storage Access Framework* (Android) | Access local image files (if needed) |

---

## 3. Network & Backend APIs

| API | Use |
| --- | --- |
| *Firebase Realtime DB / Firestore* | Store pothole reports (location, image URL, timestamp) |
| *Firebase Storage / AWS S3* | Store pothole images (scalable cloud storage) |
| *REST APIs* (custom) | Send/receive data from your own backend |
| *Axios / Dio / HTTP (client)* | For making API calls to your server |

---

## 4. Authentication APIs

| API | Use |
| --- | --- |
| *Firebase Authentication* | Login/signup with Email, Google, Phone OTP |
| *Google Sign-In API* | Enable Google login |
| *Phone Auth (Firebase)* | Login using SMS OTP verification |
| *Anonymous Auth (Firebase)* | Allow users to report without full login |

---

## 5. Notifications

| API | Use |
| --- | --- |
| *Firebase Cloud Messaging (FCM)* | Push notifications to users (e.g., status updates) |
| *OneSignal* (alternative) | Free service for push notifications |

---

## 6. Background Tasks & Sync

| API | Use |
| --- | --- |
| *WorkManager (Android)* | Upload reports/images in background |
| *Flutter Workmanager* | For background tasks in Flutter apps |
| *Connectivity Plus* | Check network connection before upload |

---

## 7. Smart Detection APIs

| API | Use |
| --- | --- |
| *Accelerometer & Gyroscope Sensors* | Detect potholes automatically by monitoring bumps while driving |
| *OpenCV / TensorFlow Lite* | Image-based pothole detection using ML model |
| *ML Kit by Google* | Light-weight ML APIs (image labeling, object detection) |

---

## 8. Admin/Dashboard APIs (for Web View)

| API | Use |
| --- | --- |
| *Google Charts / Chart.js* | Visualize data (e.g., total potholes reported) |
| *Leaflet / Mapbox (for web)* | For interactive pothole map in admin panel |

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



## Data Flow Diagram
<img width="1024" height="1024" alt="image" src="https://github.com/user-attachments/assets/8d9342ee-74fc-453c-92c8-e8bac0fc1152" />
This dataflow diagram illustrates the architecture and information flow within the mobile pothole detection system. The Commenter (User) interacts with the Mobile App to upload pothole reports containing photos, geo-tags, and severity ratings. These inputs are routed through the API Gateway, which distributes data to specialized microservices:

Pothole Reporting Service – Logs user reports and updates the Outputs DB, accessed by Municipal Staff for scheduling repairs.

AI Detection Service – Analyzes submitted images, determines pothole severity, and updates the AI Engine.

Notification Service – Manages real-time alerts, sending updates to users when the status of their reported pothole changes (e.g., work started, fixed) and logs them in the Notification DB.

Routing Service – Provides alternative route suggestions, factoring in pothole severity from the AI Engine to generate safer travel paths.

The Admin Pool collaboratively manages users, resolves conflicts (such as discrepancies between AI and user-reported severity), and updates relevant services. The Business Logic Layer includes User Management Services, ensuring user data is handled securely and permissions are enforced. Municipal Staff update repair statuses in the Outputs DB, which automatically triggers user notifications.

This modular microservices design, connected through the API Gateway, ensures scalability, efficient communication, and clear separation of responsibilities. The integration of an Admin Pool, proactive notifications, and AI-driven routing enhances system responsiveness, safety, and user engagement.



## Play Store Setup

TODO(khyathampratikshareddy-gif)

### Sign in with your personal Google account

   -> Go to: https://play.google.com/console

   -> Click "Go to Play Console"

   -> Sign in using your existing Google account (phd.mobile25@gmail.com)

   -> If the account doesn't have two-step verification enabled, turn it on (already enabled)

   -> Choose whether you're creating the account for an organization/business or for yourself (yourself)
    <img width="1904" height="969" alt="Screenshot 2025-08-13 105045" src="https://github.com/user-attachments/assets/52a0fc4a-d132-41b7-a334-cd1b09158819" />


   -> Set a Developer name (PHD Developers)
    <img width="1919" height="973" alt="Screenshot 2025-08-13 105206" src="https://github.com/user-attachments/assets/903a24be-2781-4028-abb9-9393ad50fe32" />


   -> I'm stuck at the step: "Link a payments profile to verify your identity."
    <img width="1914" height="967" alt="Screenshot 2025-08-13 105237" src="https://github.com/user-attachments/assets/39673bf0-a2bb-402b-a7f8-5366d2728286" />


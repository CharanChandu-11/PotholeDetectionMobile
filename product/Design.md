# Design - Product for Crowd Monitor

## Brainstorming Summary

TODO(Kavyasahithi006, vk-2828): 
This project is a smart pothole detection and management system that connects commuters and municipal authorities through a simple dashboard. Commuters can upload images or videos of potholes with location data and descriptions, which are processed by an AI model to detect potholes. The system displays a route map with red spots indicating potholes and suggests alternative, safer routes. It also includes a reward-based system to encourage users to contribute regularly.

Municipal authorities get a dashboard showing all reported potholes, their locations, and priority levels based on upload time and severity. They can update the status after fixing potholes by uploading proof images and notifying the user who raised the complaint. This system improves road safety, ensures quicker pothole resolution, and encourages active public participation.[



## Wire frame (Desktop)

TODO(Jahnavi2057): Fill this section based on your analysis.

## Test plan (Desktop)
I worked on the entire PHD Test Cases file, carrying out a thorough end-to-end review of all 20 test cases to ensure they met the highest standards of accuracy, clarity, and consistency. My process began with a careful inspection of each record to confirm that every test case had a unique Test Case ID, a well-structured and descriptive summary, and a clearly defined expected result that aligns with the intended system behavior. I examined the dataset for any missing values, duplicate entries, or formatting irregularities and found none, confirming that the file maintains structural integrity throughout.

In my analysis, I focused not only on identifying errors but also on evaluating the overall quality and readiness of the test cases for real-world usage. I assessed whether the descriptions were precise enough for testers to understand the scenario without ambiguity and whether the expected results were measurable and verifiable. The results of my analysis show that the dataset is clean, logically organized, and free from redundancies, making it immediately usable for test execution, documentation, and reporting. This level of preparation ensures that the test cases can be executed efficiently, reduces the risk of misinterpretation during testing, and supports smooth integration into quality assurance workflows. Overall, the file is complete, reliable, and ready to play a critical role in ensuring software quality.

| Test Case ID   | Description                                        | Expected Result                                  |
|:---------------|:---------------------------------------------------|:-------------------------------------------------|
| DTC_01         | Login with valid credentials                       | Dashboard is displayed                           |
| DTC_02         | Login with invalid credentials                     | Error message shown                              |
| DTC_03         | View AI-analyzed pothole reports                   | List of analyzed potholes shown                  |
| DTC_04         | Mark pothole as fixed                              | Status changes to “Fixed”                        |
| DTC_05         | Push fix status to user who reported               | Notification is sent                             |
| DTC_06         | Assign route to committee for survey               | Route gets assigned and displayed                |
| DTC_07         | Upload image/video manually to AI model            | AI processes input and detects pothole           |
| DTC_08         | Generate report of hotspot areas                   | Report is downloadable/exportable                |
| DTC_09         | View location on integrated map                    | Map centers on pothole location                  |
| DTC_10         | System performance on data load                    | System doesn't crash with 1000+ reports          |
| DTC_11         | Edit or update existing pothole details            | Details updated successfully and reflected in UI |
| DTC_12         | Delete a wrongly reported pothole entry            | Pothole entry removed from database and UI       |
| DTC_13         | Filter pothole data by severity, location, or date | Filtered results are displayed correctly         |
| DTC_14         | Sort potholes by date of report or priority        | Sorted list appears in selected order            |
| DTC_15         | Export full pothole report to PDF or Excel         | Exported file downloaded correctly               |
| DTC_16         | Admin changes user role (e.g., viewer → editor)    | Role change is applied and confirmed             |
| DTC_17         | Validate system access logs (login/logout times)   | Logs show correct timestamps and user IDs        |
| DTC_18         | API fetch call for new pothole data                | Data fetched and displayed in real-time          |
| DTC_19         | Attempt upload with corrupted image/video file     | System rejects file and shows error              |
| DTC_20         | Session timeout after inactivity                   | User is auto-logged out and redirected to login  |

## Wire frame (Mobile)


TODO(AnudeepReddyVeerati): Fill this section based on your analysis.
Created detailed UI/UX wireframes to visualize the structure, flow, and interaction patterns of the application. Focused on translating requirements into intuitive layouts, ensuring usability, consistency, and alignment with brand guidelines. Designed user journeys and component placements to optimize navigation and overall user experience, setting a solid foundation for high-fidelity designs and development.
This is the link for UI wireframes:
https://www.figma.com/proto/0vuyhpgo3feCd37IDMJkfm/Untitled?node-id=0-1&t=EdjTqhXbnM5rzjRA-1%20%20Mobile%20wireframes

## Test plan (Mobile)

TODO(Yoshith-9030):
The mobile test plan for the Pothole Detection (PHD) application is based on 20 well-defined functional test cases covering core user journeys, including app permissions (camera, location), media capture and upload, AI-based pothole detection, report submission, status tracking, and navigation. All cases have clear expected outcomes, ensuring traceability and repeatability. Test descriptions are concise and action-oriented, enabling efficient execution. While the current coverage addresses positive scenarios comprehensively, further enhancement is recommended by incorporating negative tests (e.g., permission denial, invalid file formats, no internet connectivity), performance tests (e.g., large file uploads, high report volume), and security validations (e.g., GPS spoofing prevention, data privacy checks). This will strengthen reliability, resilience, and security of the mobile application.
| Test_Cases_ID | Test Case Description                                     | Expected Result                                           |
|---------------|-----------------------------------------------------------|-----------------------------------------------------------|
| TC_01         | Open app and allow camera & location permissions          | App starts and camera/GPS is enabled                      |
| TC_02         | Capture and upload pothole image/video                     | File uploads successfully                                 |
| TC_03         | AI auto-detects pothole in real-time                        | Pothole is highlighted and marked                         |
| TC_04         | Submit pothole report with optional note                    | Submission confirmation shown                             |
| TC_05         | Track status of submitted complaint                        | Status updates correctly (e.g., pending → fixed)          |
| TC_06         | Receive push notification on update                        | User is notified                                          |
| TC_07         | App works with no internet (store offline)                  | Report is saved and synced once online                    |
| TC_08         | View all nearby potholes on map                             | Map pins display accurately                               |
| TC_09         | Try submitting without location access                      | Error prompts to enable location                          |
| TC_10         | Performance on low-end devices                              | App remains responsive and usable                         |
| TC_11         | User registration with valid details                        | User account created                                      |
| TC_12         | Manually submit pothole with image                          | Pothole added to map                                      |
| TC_13         | Logout functionality                                        | User logged out successfully                              |
| TC_14         | Sync data when online (after offline usage)                 | Reports synced to server                                  |
| TC_15         | Navigation between tabs (Map, Report, Profile)              | Tabs switch correctly                                     |
| TC_16         | Buttons and icons respond correctly to taps                 | Smooth interaction                                        |
| TC_17         | Dark mode rendering                                         | Proper theme switch                                       |
| TC_18         | Location permission handling                                | Prompt shown, app behavior adjusts                        |
| TC_19         | App launches within 2 seconds                               | Launch successful                                         |
| TC_20         | Map loads with multiple pothole markers                     | No lag or crash                                           |


## Market Analysis

TODO(amogh-vnr, ritheeshreddy05): Fill this section based on your analysis.

### Civic Issue Reporting & Government Initiatives (Market Analysis)- by ritheeshreddy05:
### Summary
I researched different apps and platforms that let people report potholes and other road problems to the government or local authorities.  
The goal was to understand how these systems work, what features they offer, and how they connect with authorities, so we can use the best ideas for our product.

### Feature Comparison – Civic Issue Reporting & Pothole Detection Apps

| Platform        | Manual Reporting | Photo Upload | Location Tagging | **Real-time Detection** | **Proximity Alerts** | Govt Integration | Complaint Tracking | Public View of Issues |
|-----------------|------------------|--------------|------------------|-------------------------|----------------------|------------------|--------------------|-----------------------|
| **GHMC App**    | ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅               | ✅                 | ❌                    |
| **BBMP Sahaaya**| ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅               | ✅                 | ❌                    |
| **MCGM 24x7**   | ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅               | ✅                 | ❌                    |
| **FixMyStreet** | ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅ (UK)          | ✅                 | ✅                    |
| **SeeClickFix** | ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅ (US)          | ✅                 | ✅                    |
| **Mapunity**    | ✅               | ✅           | ✅               | ❌                      | ❌                   | ✅               | ❌                 | ❌                    |
| **Waze**        | ✅ (Hazards)     | ❌           | ✅               | ❌ (Crowdsourced only)  | ✅ (Voice & visual)   | ❌               | ❌                 | ❌                    |
| **Roadroid**    | ❌ (Automated)   | ❌           | ✅               | ✅ (Accelerometer)      | ❌                   | ❌               | ❌                 | ❌                    |
| **Our System**  | ✅               | ✅           | ✅               | ✅                      | ✅                   | ✅ (Future)      | ✅                 | ✅                    |

### Key Insights
- Most existing apps depend on **manual user reporting**; they do not detect potholes automatically.
- **Complaint tracking** and status updates help keep users engaged.
- Government-backed apps are useful but usually **don’t give real-time alerts** to drivers.
- **Gap & Opportunity:** Our system will stand out by combining **automatic pothole detection + instant proximity alerts** to improve road safety.


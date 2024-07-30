AI Travel Planner App


Full Stack React Native Application


Welcome to the AI Travel Planner App! This project is a full-stack mobile application built using React Native, Expo, Gemini, and Firebase. It leverages advanced AI capabilities to help users plan their trips seamlessly. This repository contains the complete source code and documentation for the app.

Features
User Authentication: Secure user authentication using Firebase Authentication.
AI-Powered Recommendations: Leverage AI to provide personalized travel recommendations.
Trip Management: Create, view, and manage your trips with an intuitive interface.
Realtime Database: Store and retrieve trip data in real-time with Firebase Firestore.
Offline Support: Persist user sessions and data with AsyncStorage for offline use.
Notifications: Get notified about upcoming trips and changes.
Interactive Maps: Integrate maps for a visual representation of trip locations.




Tech Stack
React Native: For building cross-platform mobile applications.
Expo: To streamline the development process and provide tools and services for building and deploying apps.
Gemini: To utilize AI capabilities for travel recommendations.
Firebase: Backend-as-a-Service (BaaS) to handle authentication, real-time database, and cloud storage.




Getting Started
Prerequisites
Ensure you have the following installed:

Node.js
Expo CLI: npm install -g expo-cli
Firebase account and project setup


Installation


1)Clone the Repository:
bash
Copy code
git clone https://github.com/mohitshirole/ai-travel-planner.git
cd ai-travel-planner


2)Install Dependencies:

bash
Copy code
npm install


3)Configure Firebase:

Set up a Firebase project and enable Firebase Authentication and Firestore.
Copy your Firebase configuration and update the Firebase setup in the project.


4)Start the Development Server:

bash
Copy code
expo start



5)Run on Your Device:

Use the Expo Go app to scan the QR code and run the app on your device.
Alternatively, use an emulator/simulator for testing.








Project Structure
plaintext
Copy code
.
├── App.js                  # Entry point of the application


├── api.js                  # API service functions


├── components/             # Reusable UI components


│   ├── TripCard.js


│   ├── StartNewTripCard.js


│   └── ...


├── screens/                # Application screens


│   ├── HomeScreen.js


│   ├── SignInScreen.js


│   ├── SignUpScreen.js


│   ├── TripDetailScreen.js


│   └── ...


├── navigation/             # Navigation setup


│   └── AppNavigator.js


├── assets/                 # Static assets like images and fonts


└── ...




Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.





Steps to Contribute:
1)Fork the repository.
2)Create a new branch: git checkout -b feature-branch-name
3)Make your changes and commit them: git commit -m 'Add some feature'
4)Push to the branch: git push origin feature-branch-name
5)Open a pull request.

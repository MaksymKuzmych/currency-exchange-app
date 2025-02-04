# Currency Exchange App

A simple mobile application built with Expo and React Native that displays currency exchange rates. Users can view a list of rates, mark currencies as favorites, and access previously viewed or favorited rates even when offline.

## Table of Contents

- [Overview](#overview)
- [Architecture and Design Choices](#architecture-and-design-choices)
- [Installation and Running the App](#installation-and-running-the-app)
- [Building an APK](#building-an-apk)
- [Project Structure](#project-structure)
- [Offline Mode Implementation](#offline-mode-implementation)
- [Additional Libraries and Tools](#additional-libraries-and-tools)

## Overview

The Currency Exchange App is designed to:

- **Display currency exchange rates** fetched from a public API.
- **Allow users to manage a favorites list** by adding or removing specific rates.
- **Provide offline support** so that previously viewed or favorited exchange rates remain accessible without an internet connection.

## Architecture and Design Choices

- **Expo & React Native:** Chosen for rapid development and cross-platform compatibility.
- **@tanstack/react-query:** Manages data fetching, caching, and state. It helps with offline support using persistent caching.
- **Modular Structure:** Separates the code into logical modules (e.g., components, services) for maintainability.
- **Secure API Key Management:** Uses environment variables to keep API keys safe. (I used the EXPO_PUBLIC prefix for environment variables to ensure the app runs not only in EAS builds but also in Expo Go and expo-dev-client, as these environments don’t have access to EAS secrets at runtime. I developed the app using expo-dev-client because EAS builds for iOS require a $99 Apple Developer subscription, and I needed to test on iOS)

## Installation and Running the App

1. **Clone the Repository:**

```bash
git clone https://github.com/MaksymKuzmych/currency-exchange-app.git
```

```bash
cd currency-exchange-app
```

2. **Install Dependencies:**

Make sure you have [Node.js](https://nodejs.org/) and [Expo CLI](https://docs.expo.dev/get-started/installation/) installed.

```bash
pnpm install
```

3. **Configure Environment Variables:**

Create a `.env` file in the root directory and add your API keys:

```env
EXPO_PUBLIC_FIXER_API_KEY=your_api_key_here
```

4. **Start the App:**

- **Prebuild:**

```bash
pnpm prebuild
```

- **Development Mode:**

```bash
pnpm start
```

- **Run on Android:**

```bash
pnpm android
```

- **Run on iOS (macOS only):**

```bash
pnpm ios
```

- **Start on localhost (to test offline mode on a physical device):**

```bash
pnpm expo start --localhost
```

## Building an APK

To build an APK file for Android using Expo Application Services (EAS), follow these steps:

1.  **Ensure you have EAS CLI installed:**

```bash
npm install -g eas-cli
```

2.  **Authenticate with Expo:**

```bash
eas login
```

3.  **Configure the project:**

```bash
eas build:configure
```

4.  **Set up environment variables in EAS:**

Make sure to add environment variables to EAS before building to ensure they are available in the build process.

5.  **Build an APK:**

```bash
pnpm eas-preview:android
```

- The APK will be available for internal testing.
- The build process will generate a link to download the APK.

6.  **Download and install the APK on your device.**

You can find the generated APK in your Expo dashboard or via the provided URL after the build completes.

If you need a production-ready build, use:

```bash
eas build --profile production --platform android
```

This will generate an `.aab` file for Play Store submission.

## Project Structure

A simplified view of the project’s folder structure:

```
currency-exchange-app/
├── .github                # GitHub Action workflows for CI/CD
├── .husky                 # Husky configuration for Git hooks
├── app                    # Application entry point and main navigation
├── assets                 # Images and icons
├── components             # UI components
├── hooks                  # Custom hooks
├── providers              # Context providers and state management configurations
├── services               # API calls and data fetching logic
├── storage                # Offline storage implementations (using react-native-mmkv)
└── types                  # TypeScript type definitions
```

## Offline Mode Implementation

- **Data Caching:** Utilizes `@tanstack/react-query` to cache API data. This cached data can be rehydrated when the app is offline.
- **Persistence:** The cache is saved using `@tanstack/react-query-persist-client` combined with a persistent storage solution, ensuring data is available offline.
- **Local Storage:** Implements local storage with `react-native-mmkv` for efficient and secure offline data persistence.

## Additional Libraries and Tools

- **@shopify/flash-list:** Renders lists efficiently.
- **axios:** Handles HTTP requests.
- **nativewind:** Integrates Tailwind CSS for styling.
- **ESLint & Prettier:** Ensure code quality and formatting.
- **Husky & lint-staged:** Help enforce code quality standards before commits.

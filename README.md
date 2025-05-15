# Insular

Insular is a free and open source fork based on the Island project. It helps you isolate apps that track you, commonly known as Big Brother apps.

This project was inspired by Island and Shelter, and aims to provide a fully free and open source solution for app isolation on Android devices.

# Overview

Insular allows users to create a separate work profile on their Android device where they can clone, freeze, hide, and control apps to protect privacy and improve security. It offers advanced features such as VPN management per app group, USB access prohibition, and the ability to unfreeze and refreeze apps on demand.

It is designed for users who want to better manage and isolate apps without compromising their main profile.

# Architecture

The project is modular and composed of several Gradle modules:

- Engine module: provides core functionality and runs with device owner privileges.
- Mobile and other modules: provide separate components that can be installed or updated alongside the engine module.
- Assembly module: acts as the build portal that orchestrates building different product flavors, including light or complete builds.

The system leverages Android Work Profiles (DPC - Device Policy Controller) to create isolated environments.

# Tech Stack

- Language: Java and Kotlin for Android
- Build system: Gradle with product flavors
- Android APIs: Device Administration API, Package Usage Stats API, Work Profile APIs
- Dependencies: deagle library (from the original Island project)
- Open API: Provides a public API for third-party apps to integrate with Insular capabilities

# Setup Instructions

1. Clone the repository along with the required deagle library:

-- island
-- deagle


Both repositories should be cloned into the same parent directory.

2. Import the project into Android Studio.

3. Build the project using Gradle. The assembly module supports different product flavors including light builds.

4. Deploy the app on a compatible Android device (device must support Work Profiles).

5. Follow instructions to enable Insular via ADB if needed, and configure settings within the app.

Refer to the official documentation for detailed usage, adb enablement, cross-profile file access, and troubleshooting.

# Deployment

Install the APK generated from the build onto your Android device.

Use the app to create a Work Profile that isolates target apps.

To uninstall and remove Insular completely, use the Destroy Insular option in the settings, then remove the Work Profile from the device accounts if the app is uninstalled.

# Features

- Isolate Big Brother apps in a secure Work Profile
- Clone and run multiple app accounts simultaneously
- Freeze or archive apps to prevent background activity
- Unfreeze apps on demand via home screen shortcuts
- Re-freeze marked apps with a single tap
- Hide apps from launcher or app lists
- Selectively enable or disable VPN per app group
- Prohibit USB access to mitigate physical attack vectors
- Fully free and open source without proprietary components
- Open API available for third-party app integration
- Supports device administrator and usage stats permissions with user consent

# Permissions

Insular requests only the necessary permissions:

- Device Administrator permission to create and manage the Work Profile
- Package Usage Stats permission to monitor app states

The project respects user privacy and does not collect personal data. For details, see the privacy policy.

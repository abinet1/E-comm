# ProductListApp

A simple e-commerce product list app built with React Native, Redux Toolkit, and TypeScript.

## Features

- Add and delete products
- Display a list of products
- Optimized with `useMemo` and `useCallback`
- Structured with Atomic Design Principles

## Requirements

- Node.js
- npm or yarn
- React Native CLI
- Xcode (for iOS)
- Android Studio (for Android)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/ProductListApp.git
   cd ProductListApp
2. Install dependencies:

    ```bash
    npm install

3. Install iOS dependencies:

    ```bash
    npx pod-install

## Running the App
#### iOS

    bash
    npx react-native run-ios

#### Android

Ensure an emulator is running or a device is connected.

    bash
    npx react-native run-android


#### Project Structure

    src/components/atoms: Basic UI elements.
    src/components/molecules: Simple combinations of atoms.
    src/components/organisms: Complex UI components made up of molecules.
    src/components/templates: Page templates combining organisms.
    src/pages: Complete screens.


#### State Management
Utilizes Redux Toolkit for efficient state management.

#### Performance Optimization
Uses useMemo and useCallback hooks for performance optimization.

#### License
MIT

#### **9. Final Notes**

- **GitHub Repository:**

  - Create a GitHub repository and push your project.
  - Ensure the repository is public or share access as required.

- **Code Quality:**

  - Follow best practices for code readability.
  - Comment your code where necessary.
  - Use meaningful variable and function names.

- **Testing:**

  - Test the app thoroughly on both iOS and Android platforms.
  - Check for any UI inconsistencies or bugs.

- **Submission:**

  - Include any additional setup instructions in the README if necessary.
  - Ensure the app builds and runs without errors.

---

**Feel free to ask if you need further assistance or clarification on any of these steps!*
# React Native Dog App

This is a React Native app that utilizes the Dog API to display a list of dog breeds and images of selected breeds. Additionally, it includes a contact form for users.

## Features

- Display a list of dog breeds fetched from the Dog API.
- Show images of selected dog breeds.
- Implement navigation between pages using a bottom tab navigator.
- Create a contact form with email, date of birth, and password fields.
- Validate form inputs and display a success message upon submission.

## Installation

1. Clone the repository:

```
git clone https://github.com/warishkhan/react-native-dog-app.git
```

2. Navigate into the project directory:

```
cd react-native-dog-app
```

3. Install dependencies:

```
npm install
```

## Usage

### Running the App

To run the app on an emulator or physical device, use:

```
npx react-native run-android
```

or

```
npx react-native run-ios
```

### Testing

To run tests, use:

```
npm test
```

## Dependencies

- @react-navigation/bottom-tabs: For bottom tab navigation.
- @react-navigation/native: For navigation functionality.
- @react-navigation/native-stack: For stack navigation.
- axios: For making HTTP requests to the Dog API.
- expo: Framework and platform for universal React applications.
- expo-status-bar: Status bar component for Expo apps.
- react: JavaScript library for building user interfaces.
- react-native: Framework for building native apps using React.
- react-native-safe-area-context: Provides safe area insets for React Native.
- react-native-screens: Native navigation primitives for React Native.
- react-native-vector-icons: Icon library for React Native.

## API Reference

The app uses the [Dog API](https://dog.ceo/api/breeds/list/all) to fetch dog breed data and for images (https://dog.ceo/api/breed/{breed}/images).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

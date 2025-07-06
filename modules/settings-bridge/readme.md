# Settings Bridge Module

A native iOS module for React Native (with Expo) that provides real-time monitoring of app settings changes from both the app and iOS system settings.

## Overview

The Settings Bridge Module bridges the gap between your React Native app and iOS system settings, allowing you to detect when users change their preferences either within your app or through iOS system settings

## Features

- **Real-time theme monitoring**: Detects theme changes as they happen
- **Dual source detection**: Distinguishes between app-initiated and iOS system-initiated changes
- **Event-driven architecture**: Uses React Native events for seamless integration
- **iOS native implementation**: Built with Swift for optimal performance

## Installation

This module is part of the nyamo project and is automatically included in the build process. No additional installation steps are required.

## Usage

### Basic Setup

```tsx
import React, { useEffect } from 'react';
import SettingsBridge from '@modules/settings-bridge';

const MyComponent = () => {
  useEffect(() => {
    const subscription = SettingsBridge.addListener('onSettingsChanged', (event) => {
      console.log('Settings changed:', event);
      // Handle theme change here
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return null;
}
```

### Event Payload

The `onSettingsChanged` event provides the following data:

```ts
type SettingsChangedEventPayload = {
  key: string | 'theme';           // The setting that changed
  timestamp: number;               // Unix timestamp of the change
  source: 'app' | 'ios_settings';  // Where the change originated
  oldValue: ColorSchemeName;       // Previous theme value
  newValue: ColorSchemeName;       // New theme value
};
```

## How It Works

### Native iOS Implementation

The module uses Swift to monitor two key events:

1. **UserDefaults changes**: Detects when the app's UserDefaults are modified (app-initiated changes)
2. **App activation**: Detects when the app becomes active after being backgrounded (potential system settings changes)

### Event Flow

1. The module observes `UserDefaults.didChangeNotification` for app-initiated changes
2. The module observes `UIApplication.didBecomeActiveNotification` for system-initiated changes
3. When a theme change is detected, it compares the new value with the last known value
4. If different, it emits an `onSettingsChanged` event with detailed information

### Source Detection

- **`'app'`**: Change detected through UserDefaults notification (user changed theme within your app)
- **`'ios_settings'`**: Change detected when app becomes active (user changed theme in iOS Settings)

## Technical Details

### Module Structure

```
modules/settings-bridge/
├── src/
│   ├── SettingsBridgeModule.ts    # TypeScript interface
│   └── SettingsBridge.d.ts        # Type definitions
├── ios/
│   ├── SettingsBridgeModule.swift # Native iOS implementation
│   └── SettingsBridge.podspec     # CocoaPods configuration
├── expo-module.config.json        # Expo module configuration
└── index.ts                       # Module exports
```

### Dependencies

- **ExpoModulesCore**: For native module functionality
- **React Native**: For event system integration
- **iOS Foundation**: For UserDefaults and NotificationCenter

### Platform Support

Currently supports iOS only.

## Best Practices

1. **Always remove listeners**: Clean up event listeners in component unmount to prevent memory leaks
2. **Handle null values**: The `newValue` can be `null` when using system theme
3. **Debounce rapid changes**: Consider debouncing theme changes if your app has heavy re-rendering
4. **Test both sources**: Ensure your app handles both app-initiated and system-initiated theme changes

## Troubleshooting

### Common Issues

1. **Events not firing**: Ensure the module is properly linked and the app is rebuilt
2. **Incorrect source detection**: The module distinguishes between app and system changes based on timing and notification type
3. **Memory leaks**: Always remove event listeners when components unmount

## TODO

- [ ] Make universal listener (not 'theme' only)
- [ ] Add Android Support

## License

This module is part of the nyamo project and follows the same licensing terms.

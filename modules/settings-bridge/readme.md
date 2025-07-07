# Settings Bridge Module

A native iOS module for React Native (with Expo) that provides real-time monitoring of app settings changes from both the app and iOS system settings.

## Overview

The Settings Bridge Module bridges the gap between your React Native app and iOS system settings, allowing you to detect when users change their preferences either within your app or through iOS system settings.

## Features

- **Real-time theme monitoring**: Detects theme changes as they happen
- **Notification permissions monitoring**: Detects changes to notification permission status
- **Dual source detection**: Distinguishes between app-initiated and iOS system-initiated changes
- **Event-driven architecture**: Uses React Native events for seamless integration
- **iOS native implementation**: Built with Swift for optimal performance

## Installation

This module is part of the nyamo project and is automatically included in the build process. No additional installation steps are required.

## Usage

### Basic Setup

```tsx
import React, { useEffect } from 'react';
import SettingsBridge, { type NotificationPermissionStatus } from '@modules/settings-bridge';

const MyComponent = () => {
  useEffect(() => {
    const themeSubscription = SettingsBridge.addListener('onThemeChanged', (event) => {
      console.log('Theme changed:', event);
      // Handle theme change here
      // event.source will be 'app' or 'ios_settings'
      // event.newValue will be 'light', 'dark', or null (for system theme)
    });

    const notificationSubscription = SettingsBridge.addListener('onNotificationChanged', (event) => {
      console.log('Notification permission changed:', event);
      
      // Handle notification permission change here
      if (event.newValue === NotificationPermissionStatus.AUTHORIZED) {
        console.log('Notifications are now authorized!');
      } else if (event.newValue === NotificationPermissionStatus.DENIED) {
        console.log('Notifications were denied');
      }
    });

    return () => {
      themeSubscription.remove();
      notificationSubscription.remove();
    };
  }, []);

  return null;
}
```

### Event Payloads

#### Theme Changed Event

The `onThemeChanged` event provides the following data:

```ts
type SettingsChangedEventPayload = {
  key: 'theme';                    // Always 'theme'
  timestamp: number;               // Unix timestamp of the change
  source: 'app' | 'ios_settings';  // Where the change originated
  oldValue: ColorSchemeName;       // Previous theme value
  newValue: ColorSchemeName;       // New theme value (null for system theme)
};
```

#### Notification Permission Changed Event

The `onNotificationChanged` event provides the following data:

```ts
type NotificationPermissionChangedEventPayload = {
  key: 'notification';             // Always 'notification'
  timestamp: number;               // Unix timestamp of the change
  source: 'ios_settings';          // Always 'ios_settings' for permissions
  oldValue: NotificationPermissionStatus;  // Previous permission status
  newValue: NotificationPermissionStatus;  // New permission status
};
```

### Notification Permission Status Constants

```ts
import { NotificationPermissionStatus } from '@modules/settings-bridge';

// Available status values:
NotificationPermissionStatus.NOT_DETERMINED  // 0 - User hasn't been asked yet
NotificationPermissionStatus.DENIED          // 1 - User denied notifications
NotificationPermissionStatus.AUTHORIZED      // 2 - User authorized notifications
NotificationPermissionStatus.PROVISIONAL     // 3 - Provisional authorization
NotificationPermissionStatus.EPHEMERAL       // 4 - Ephemeral authorization
```

## How It Works

### Native iOS Implementation

The module uses Swift to monitor several key events:

1. **UserDefaults changes**: Detects when the app's UserDefaults are modified (app-initiated changes)
2. **App activation**: Detects when the app becomes active after being backgrounded (potential system settings changes)
3. **Notification permissions**: Monitors changes to notification authorization status through UNUserNotificationCenter

### Event Flow

1. The module observes `UserDefaults.didChangeNotification` for app-initiated changes
2. The module observes `UIApplication.didBecomeActiveNotification` for system-initiated changes
3. When the app becomes active, it checks both theme and notification permission status
4. If any values have changed, it emits the appropriate events with detailed information

### Source Detection

- **`'app'`**: Change detected through UserDefaults notification (user changed theme within your app)
- **`'ios_settings'`**: Change detected when app becomes active (user changed theme or permissions in iOS Settings)

### Theme Values

- **`'light'`**: Light theme
- **`'dark'`**: Dark theme  
- **`null`**: System theme (follows device settings)

## Technical Details

### Module Structure

```
modules/settings-bridge/
├── src/
│   ├── SettingsBridgeModule.ts       # TypeScript interface
│   └── SettingsBridge.d.ts           # Type definitions
├── ios/
│   ├── SettingsBridgeModule.swift    # Native iOS implementation
│   └── SettingsBridge.podspec        # CocoaPods configuration
├── expo-module.config.json           # Expo module configuration
└── index.ts                          # Module exports
```

### Dependencies

- **ExpoModulesCore**: For native module functionality
- **UserNotifications**: For notification permission monitoring
- **React Native**: For event system integration
- **iOS Foundation**: For UserDefaults and NotificationCenter

### Platform Support

Currently supports iOS only.

## Best Practices

1. **Always remove listeners**: Clean up event listeners in component unmount to prevent memory leaks
2. **Handle null values**: The `newValue` can be `null` when using system theme
3. **Debounce rapid changes**: Consider debouncing theme changes if your app has heavy re-rendering
4. **Test both sources**: Ensure your app handles both app-initiated and system-initiated changes
5. **Use permission constants**: Use the provided `NotificationPermissionStatus` constants instead of raw numbers
6. **Handle permission changes gracefully**: Provide appropriate UI feedback when notification permissions change

## Troubleshooting

### Common Issues

1. **Events not firing**: Ensure the module is properly linked and the app is rebuilt
2. **Incorrect source detection**: The module distinguishes between app and system changes based on timing and notification type
3. **Memory leaks**: Always remove event listeners when components unmount
4. **Permission status not updating**: Notification permission changes are only detected when the app becomes active

## TODO

- [ ] Add Android Support
- [ ] Add support for monitoring additional settings beyond theme and notifications

## License

This module is part of the nyamo project and follows the same licensing terms.

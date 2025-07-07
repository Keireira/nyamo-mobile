import ExpoModulesCore

public class SettingsBridgeModule: Module {
	private var hasListeners = false
	private var lastThemeValue: String?

	public func definition() -> ModuleDefinition {
		Name("SettingsBridge")

		Events("onSettingsChanged")

		OnStartObserving {
			self.hasListeners = true
			self.lastThemeValue = UserDefaults.standard.string(forKey: "theme")
		}

		OnStopObserving {
			self.hasListeners = false
		}
	}

	public required init(appContext: AppContext) {
		super.init(appContext: appContext)

		NotificationCenter.default.addObserver(
			self,
			selector: #selector(defaultValuesDidChange),
			name: UserDefaults.didChangeNotification,
			object: nil
		)

		NotificationCenter.default.addObserver(
			self,
			selector: #selector(appDidBecomeActive),
			name: UIApplication.didBecomeActiveNotification,
			object: nil
		)
	}

	private func createThemeEventData(_ source: String, _ newValue: String?) -> [String: Any] {
		return [
			"key": "theme",
			"timestamp": Date().timeIntervalSince1970,
			"source": source,
			"oldValue": lastThemeValue ?? "nil",
			"newValue": newValue == "system" ? nil : (newValue ?? "nil")
		]
	}

	@objc
	private func defaultValuesDidChange() {
		guard hasListeners else {
			return
		}

		let currentTheme = UserDefaults.standard.string(forKey: "theme")

		if currentTheme != lastThemeValue {
			let eventData = createThemeEventData("app", currentTheme)

			sendEvent("onSettingsChanged", eventData)
		}

		lastThemeValue = currentTheme
	}

	@objc
	private func appDidBecomeActive() {
		guard hasListeners else {
			return
		}

		let currentTheme = UserDefaults.standard.string(forKey: "theme")

		if currentTheme != lastThemeValue {
			let eventData = createThemeEventData("ios_settings", currentTheme)

			sendEvent("onSettingsChanged", eventData)
		}

		lastThemeValue = currentTheme
	}

	deinit {
		NotificationCenter.default.removeObserver(self)
	}
}

import { createContext, useEffect, useState } from "react";
// utils
import getColorPresets, {
  colorPresets,
  defaultPreset,
} from "../utils/getColorPresets";
// config
import { defaultSettings, cookiesKey, cookiesExpires } from "../config";

// ----------------------------------------------------------------------

const initialState = {
  ...defaultSettings,
  onChangeMode: () => {},
  onToggleMode: () => {},
  onChangeDirection: () => {},
  onChangeColor: () => {},
  onClickColor: () => {},
  onResetSetting: () => {},
  setColor: defaultPreset,
  colorOption: [],
};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

function SettingsProvider({ children, defaultSettings = {} }: any) {
  const [settings, setSettings] = useSettingCookies(defaultSettings);

  const onChangeMode = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };
  const onClickColor = (value: any) => {
    setSettings({
      ...settings,
      themeColorPresets: value,
    });
  };
  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === "light" ? "dark" : "light",
    });
  };

  const onChangeDirection = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeDirection: event.target.value,
    });
  };

  const onChangeColor = (event: { target: { value: any } }) => {
    setSettings({
      ...settings,
      themeColorPresets: event.target.value,
    });
  };

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      themeDirection: initialState.themeDirection,
      themeColorPresets: initialState.themeColorPresets,
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,
        // Mode
        onChangeMode,
        onToggleMode,
        // Direction
        onChangeDirection,
        // Color
        onChangeColor,
        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color: any) => ({
          name: color.name,
          value: color.main,
        })),
        onResetSetting,
        onClickColor,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };

// ----------------------------------------------------------------------

function useSettingCookies(defaultSettings: any) {
  const [settings, setSettings] = useState(defaultSettings);

  return [settings, setSettings];
}

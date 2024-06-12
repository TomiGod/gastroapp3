import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";


const ThemeDark = {
    ...MD3DarkTheme
}

const ThemeDarkNavigation = {
    ...DarkTheme
}

const ThemeLight = {
    ...MD3LightTheme
}

const ThemeLightNavigation = {
    ...DefaultTheme
}
export { ThemeDark, ThemeLight, ThemeDarkNavigation, ThemeLightNavigation }


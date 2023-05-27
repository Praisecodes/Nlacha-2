import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useContext } from "react";
import { useFonts } from "expo-font";
import { Onboarding, MainNavs } from "./navigators";
import { AppContext, AppContextProvider } from "./contexts";
import MainApp from './main_app';

export default function App() {
  return (
    <AppContextProvider>
      <MainApp />
    </AppContextProvider>
  );
}

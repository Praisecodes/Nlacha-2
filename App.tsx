import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState, useContext } from "react";
import { useFonts } from "expo-font";
import { Onboarding, MainNavs } from "./navigators";
import { AppContext, AppContextProvider } from "./contexts";

export default function App() {
  // const [opened, setOpened] = useState<boolean>(false);
  const { opened, setOpened } = useContext(AppContext);

  const checkDevice = async (): Promise<any> => {
    try {
      const val = await AsyncStorage.getItem('opened');
      if (val !== null) { setOpened(true); return true; }
      return false;
    } catch (error) {
      console.error(error);
      console.log(opened)
      return false;
    }
  }

  useEffect(() => {
    if (!checkDevice()) console.log("Error with async storage");
  })

  return (
    <AppContextProvider>
      {(!opened) ? <Onboarding /> : <MainNavs />}
    </AppContextProvider>
  );
}

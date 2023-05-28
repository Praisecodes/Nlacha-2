import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextType = {
  opened?: boolean; setOpened?: any;
  saveDevice?: () => Promise<boolean>;
  loggedIn?: boolean; setLoggedIn?: any;
  checkLoggedIn?: () => Promise<boolean>;
}

const AppContext = createContext<AppContextType>({});

export const AppContextProvider = ({ children }: any) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);

  const saveDevice = async (): Promise<boolean> => {
    try {
      await AsyncStorage.setItem('opened', 'true');
      return true;
    } catch (error) {
      return false;
    }
  }

  const checkLoggedIn = async ():Promise<boolean> => {
    try {
      let val = await AsyncStorage.getItem('logged_in');
      if(val !== null){
        return true;
      }
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const values = {
    opened, setOpened,
    saveDevice,
    loggedIn, setLoggedIn,
    checkLoggedIn,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;

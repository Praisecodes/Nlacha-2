import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AppContextType = {
  opened?: boolean; setOpened?: any;
  saveDevice?: () => Promise<boolean>;
  loggedIn?: boolean; setLoggedIn?: any;
  checkLoggedIn?: () => Promise<boolean>;
  saveToken?: (token: string) => Promise<boolean>;
  getToken?: () => Promise<any>;
  menuItems?: any[]; setMenuItems?: any;
}

const AppContext = createContext<AppContextType>({});

export const AppContextProvider = ({ children }: any) => {
  const [opened, setOpened] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<any[]>([]);

  const saveDevice = async (): Promise<boolean> => {
    try {
      await AsyncStorage.setItem('opened', 'true');
      return true;
    } catch (error) {
      return false;
    }
  }

  const checkLoggedIn = async (): Promise<boolean> => {
    try {
      let token = await AsyncStorage.getItem('accessToken');
      if (token !== null) {
        console.log(token);
        return true;
      }
      console.log('Token not found');
      return false;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const saveToken = async (token: string): Promise<boolean> => {
    try {
      await AsyncStorage.setItem('accessToken', token);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  const getToken = async (): Promise<any> => {
    try {
      let val = await AsyncStorage.getItem('accessToken');
      if (val !== null) {
        return val;
      }
      return "";
    } catch (error) {
      console.error(error);
    }
  }

  const values = {
    opened, setOpened,
    saveDevice,
    loggedIn, setLoggedIn,
    checkLoggedIn, saveToken,
    getToken, menuItems, setMenuItems,
  }

  return (
    <AppContext.Provider value={values}>
      {children}
    </AppContext.Provider>
  )
}

export default AppContext;

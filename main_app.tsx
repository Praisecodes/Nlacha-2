import { useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Onboarding, MainNavs } from "./navigators";
import { AppContext } from "./contexts";

const MainApp = (): JSX.Element => {

    const { opened, setOpened } = useContext(AppContext);

    const checkDevice = async (): Promise<any> => {
        try {
            const val = await AsyncStorage.getItem('opened');
            if (val !== null) { setOpened(true); return true; }
            return false;
        } catch (error) {
            return false;
        }
    }

    useEffect(() => {
        if (!checkDevice()) console.log("Error with async storage");
    })

    return (
        (!opened) ? <Onboarding /> : <MainNavs />
    );
}

export default MainApp;

import { View } from "react-native"
import AuthNavs from "./AuthNavs";
import { useContext } from "react";
import { AppContext } from "../contexts";

const MainNavs = (): JSX.Element => {
    const {loggedIn} = useContext(AppContext);

    return (
        (!loggedIn)?<AuthNavs />:<></>
    )
}

export default MainNavs;
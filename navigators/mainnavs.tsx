import AuthNavs from "./AuthNavs";
import AppNavs from "./AppNavs";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts";

const MainNavs = (): JSX.Element => {
    const { loggedIn, setLoggedIn, checkLoggedIn } = useContext(AppContext);

    useEffect(() => {
        if (checkLoggedIn?.()) {
            setLoggedIn(true);
            return;
        }
        setLoggedIn(false);
    }, []);

    return (
        (!loggedIn == true) ? <AuthNavs /> : <AppNavs />
    )
}

export default MainNavs;
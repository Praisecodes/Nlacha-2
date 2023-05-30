import AuthNavs from "./AuthNavs";
import AppNavs from "./AppNavs";
import { useContext, useEffect } from "react";
import { AppContext } from "../contexts";

const MainNavs = (): JSX.Element => {
    const { loggedIn, setLoggedIn, checkLoggedIn } = useContext(AppContext);

    const runOnStart = async (): Promise<any> => {
        if (await checkLoggedIn?.()) {
            setLoggedIn(true);
            console.log(loggedIn);
            return;
        }
        setLoggedIn(false);
        console.log(loggedIn);
    }

    useEffect(() => {
        runOnStart();
    }, []);

    return (
        (!loggedIn) ? <AuthNavs /> : <AppNavs />
    )
}

export default MainNavs;
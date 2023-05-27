import { useFonts } from "expo-font";
import { AppContextProvider } from "./contexts";
import MainApp from './main_app';

export default function App() {
  const [loaded] = useFonts({
    Nunito: require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
    Poppins: require('./assets/fonts/Poppins-Regular.ttf')
  });

  if(!loaded){
    return null;
  }

  return (
    <AppContextProvider>
      <MainApp />
    </AppContextProvider>
  );
}

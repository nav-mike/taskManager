import { Provider } from "react-redux";
import { store } from "./store/reducer";
import AuthNavigator from "./navigations/AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthNavigator />
      </NavigationContainer>
    </Provider>
  );
}

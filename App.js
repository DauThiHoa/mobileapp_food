import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomNav from "./src/navigators/BottomNav";
import ProductDetails from "./src/components/ProductDetails";
import Details from "./src/components/Details"
const Context = React.createContext();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Context.Provider value={{ color: "red" }}>
      {/* <NavigationContainer>
        <BottomNav/>
      </NavigationContainer> */}
      <Details /> 
    </Context.Provider>
  );
}

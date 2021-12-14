import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tabs.navigation";

const AppNavigation: React.FC = () => {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}

export default AppNavigation;
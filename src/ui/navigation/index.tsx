import React from 'react';

import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./tabs.navigation";

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigation />
    </NavigationContainer>
  )
}
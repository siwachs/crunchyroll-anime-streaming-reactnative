import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { useState } from "react";
import { Image } from "react-native";

import HomeHeader from "@/src/components/headers/home-header.component";
import MyAccount from "@/src/features/account/screens/my-account.screen";
import BrowseScreen from "@/src/features/browse/screens/browse.screen";
import HomeScreen from "@/src/features/home/screens/home.screen";
import MyLists from "@/src/features/my-lists/screens/my-lists.screen";
import Simulcasts from "@/src/features/simulcasts/screens/simulcasts.screen";
import theme from "@/src/infrastructure/theme";

// Define the type for the route
type RootStackParamList = {
  HomeTab: undefined;
  MyListsTab: undefined;
  BrowseTab: undefined;
  SimulcastsTab: undefined;
  AccountTab: undefined;
};

const AppNavigationTab = createBottomTabNavigator<RootStackParamList>();
const TAB_ICONS: Record<string, any> = {
  HomeTab: { type: "Ionicons", name: "home-outline" },
  MyListsTab: { type: "Ionicons", name: "bookmark-outline" },
  BrowseTab: { type: "Ionicons", name: "grid-outline" },
  SimulcastsTab: {
    type: "MaterialIcons",
    name: "category",
  },
  AccountTab: {
    type: "Asset",
    name: "account",
    asset: require("@/assets/tab-icons/account.png"),
  },
};

const screenOptions = ({ route }: { route: RouteProp<RootStackParamList> }) => {
  const ICON_SOURCE = TAB_ICONS[route.name];
  return {
    tabBarActiveTintColor: "#F47521",
    tabBarInactiveTintColor: "#FFFFFF",
    headerStyle: {
      backgroundColor: theme.colors.bg.primary,
    },
    tabBarStyle: {
      backgroundColor: theme.colors.bg.secondary,
      height: 60,
      paddingTop: 10,
      paddingBottom: 10,
      borderTopWidth: 0,
    },
    tabBarIcon: ({ color, size }: { color: string; size: number }) => {
      const { type, name: iconName, asset } = ICON_SOURCE;
      switch (type) {
        case "Ionicons":
          return <Ionicons name={iconName} size={size} color={color} />;
        case "MaterialIcons":
          return <MaterialIcons name={iconName} size={size} color={color} />;
        case "Asset":
          return (
            <Image
              style={{ height: size, width: size }}
              source={asset}
              resizeMode="contain"
            />
          );
      }
    },
  };
};

const AppNavigation = () => {
  return (
    <AppNavigationTab.Navigator screenOptions={screenOptions}>
      <AppNavigationTab.Screen
        name="HomeTab"
        options={{
          tabBarLabel: "Home",
          headerTitle: HomeHeader,
          headerTransparent: true,
        }}
        component={HomeScreen}
      />
      <AppNavigationTab.Screen
        name="MyListsTab"
        options={{ tabBarLabel: "My Lists", headerTitle: "My Lists" }}
        component={MyLists}
      />
      <AppNavigationTab.Screen
        name="BrowseTab"
        options={{ tabBarLabel: "Browse", headerTitle: "Browse" }}
        component={BrowseScreen}
      />
      <AppNavigationTab.Screen
        name="SimulcastsTab"
        options={{ tabBarLabel: "Simulcasts", headerTitle: "Simulcast Season" }}
        component={Simulcasts}
      />
      <AppNavigationTab.Screen
        name="AccountTab"
        options={{ tabBarLabel: "Account", headerTitle: "My Account" }}
        component={MyAccount}
      />
    </AppNavigationTab.Navigator>
  );
};

export default AppNavigation;

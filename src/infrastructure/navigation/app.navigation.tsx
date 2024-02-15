import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RouteProp } from "@react-navigation/native";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import Header from "./components/header.component";

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

const AssetIcon = styled.Image`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const screenOptions = ({ route }: { route: RouteProp<RootStackParamList> }) => {
  const ICON_SOURCE = TAB_ICONS[route.name];
  return {
    tabBarActiveTintColor: "#F47521",
    tabBarInactiveTintColor: "#FFFFFF",
    headerStyle: { backgroundColor: theme.colors.ui.primary },
    headerTintColor: theme.colors.text.primary,
    tabBarStyle: {
      backgroundColor: theme.colors.ui.secondary,
    },
    tabBarIcon: ({
      color,
      size,
    }: {
      focused: boolean;
      color: string;
      size: number;
    }) => {
      const { type, name: iconName, asset } = ICON_SOURCE;
      switch (type) {
        case "Ionicons":
          return <Ionicons name={iconName} size={size} color={color} />;
        case "MaterialIcons":
          return <MaterialIcons name={iconName} size={size} color={color} />;
        case "Asset":
          return (
            <AssetIcon
              width={size}
              height={size}
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
          headerTitle: Header,
        }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="MyListsTab"
        options={{ tabBarLabel: "My Lists", headerTitle: "My Lists" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="BrowseTab"
        options={{ tabBarLabel: "Browse", headerTitle: "Browse" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="SimulcastsTab"
        options={{ tabBarLabel: "Simulcasts", headerTitle: "Simulcast Season" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="AccountTab"
        options={{ tabBarLabel: "Account", headerTitle: "My Account" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
    </AppNavigationTab.Navigator>
  );
};

export default AppNavigation;

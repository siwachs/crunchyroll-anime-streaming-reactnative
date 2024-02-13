import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { RouteProp } from "@react-navigation/native";

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
  HomeTab: { active: "", inactive: "" },
  MyListsTab: { active: "", inactive: "" },
  BrowseTab: { active: "", inactive: "" },
  SimulcastsTab: { active: "", inactive: "" },
  AccountTab: { active: "", inactive: "" },
};

const screenOptions = ({ route }: { route: RouteProp<RootStackParamList> }) => {
  const ICON_SOURCE = TAB_ICONS[route.name];
  return {
    tabBarIcon: ({
      focused,
      color,
      size,
    }: {
      focused: boolean;
      color: string;
      size: number;
    }) => (
      <Image
        source={focused ? ICON_SOURCE.active : ICON_SOURCE.inactive}
        style={{ width: size, height: size }}
        resizeMode="contain"
      />
    ),
  };
};

const AppNavigation = () => {
  return (
    <AppNavigationTab.Navigator screenOptions={screenOptions}>
      <AppNavigationTab.Screen
        name="HomeTab"
        options={{ tabBarLabel: "Home" }}
        component={() => null}
      />
      <AppNavigationTab.Screen
        name="MyListsTab"
        options={{ tabBarLabel: "My Lists" }}
        component={() => null}
      />
      <AppNavigationTab.Screen
        name="BrowseTab"
        options={{ tabBarLabel: "Browse" }}
        component={() => null}
      />
      <AppNavigationTab.Screen
        name="SimulcastsTab"
        options={{ tabBarLabel: "Simulcasts" }}
        component={() => null}
      />
      <AppNavigationTab.Screen
        name="AccountTab"
        options={{ tabBarLabel: "Account" }}
        component={() => null}
      />
    </AppNavigationTab.Navigator>
  );
};

export default AppNavigation;

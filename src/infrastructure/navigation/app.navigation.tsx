import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
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
const TAB_ICONS: Record<string, string> = {
  HomeTab: "",
  MyListsTab: "",
  BrowseTab: "",
  SimulcastsTab: "",
  AccountTab: "",
};

const screenOptions = ({ route }: { route: RouteProp<RootStackParamList> }) => {
  const ICON_NAME = TAB_ICONS[route.name];
  return {};
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

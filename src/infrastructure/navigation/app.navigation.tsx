import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { colors } from "@/src/infrastructure/theme/colors";
import { Image, Text, View } from "react-native";
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
    headerStyle: { backgroundColor: colors.ui.primary },
    headerTintColor: colors.text.primary,
    tabBarStyle: { backgroundColor: colors.ui.secondary },
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
            <Image
              source={asset}
              style={{ width: size, height: size }}
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
        options={{ tabBarLabel: "Home" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="MyListsTab"
        options={{ tabBarLabel: "My Lists" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="BrowseTab"
        options={{ tabBarLabel: "Browse" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="SimulcastsTab"
        options={{ tabBarLabel: "Simulcasts" }}
        component={() => (
          <View>
            <Text>Home</Text>
          </View>
        )}
      />
      <AppNavigationTab.Screen
        name="AccountTab"
        options={{ tabBarLabel: "Account" }}
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

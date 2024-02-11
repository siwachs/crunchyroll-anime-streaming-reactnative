import { createStackNavigator } from "@react-navigation/stack";
import AccountScreen from "../../features/account/screens/account.screen";

const AccountNavigationStack = createStackNavigator();

const AccountNavigation = () => {
  return (
    <AccountNavigationStack.Navigator screenOptions={{ headerShown: false }}>
      <AccountNavigationStack.Screen name="Main" component={AccountScreen} />
    </AccountNavigationStack.Navigator>
  );
};

export default AccountNavigation;

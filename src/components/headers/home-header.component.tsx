import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";

import theme from "@/src/infrastructure/theme";

const HomeHeader = () => {
  return (
    <View className="w-full items-center justify-between">
      <Image
        className="w-[136px] h-6"
        source={require("@/assets/logos/logo.png")}
        resizeMode="contain"
      />
      <View className="flex-row items-center">
        <Feather name="cast" size={24} color={theme.colors.text.primary} />
        <Image
          className="h-6 w-6 gap-x-[18px]"
          source={require("@/assets/icons/search.png")}
          resizeMode="contain"
          tintColor={theme.colors.text.primary}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";

import theme from "@/src/infrastructure/theme";

const HomeHeader = () => {
  return (
    <View className="w-full flex-row items-center justify-between">
      <Image
        className="h-6 w-[136px]"
        source={require("@/assets/logos/logo.png")}
        resizeMode="contain"
      />
      <View className="flex-row items-center gap-x-[18px]">
        <Feather name="cast" size={24} color={theme.colors.text.primary} />
        <Image
          className="h-6 w-6"
          source={require("@/assets/icons/search.png")}
          resizeMode="contain"
          tintColor={theme.colors.text.primary}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

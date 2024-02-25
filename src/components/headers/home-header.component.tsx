import { Feather } from "@expo/vector-icons";
import { Image, View } from "react-native";

import theme from "@/src/infrastructure/theme";

const HomeHeader = () => {
  return (
    <View className="h-[60px] w-full flex-row items-center justify-between">
      <Image
        className="h-[32px] w-[32px]"
        source={require("@/assets/logos/logo.png")}
      />
      <View className="flex-row items-center gap-x-[22px]">
        <Feather name="cast" size={25} color={theme.colors.text.primary} />
        <Image
          className="h-[25px] w-[25px]"
          source={require("@/assets/icons/search.png")}
          tintColor={theme.colors.text.primary}
        />
      </View>
    </View>
  );
};

export default HomeHeader;

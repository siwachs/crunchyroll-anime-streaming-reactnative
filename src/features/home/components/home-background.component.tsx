import { View, Image } from "react-native";

import LinearGradient from "@/src/components/Utilities/linear-gradient.component";

const HomeBackground = () => {
  return (
    <View className="absolute left-0 top-0 z-0 h-[58vh] w-full min-w-full overflow-hidden">
      <View className="aspect-[2/3]">
        <Image
          source={require("@/mock-data/banner/1.webp")}
          className="relative h-full w-full object-center-top"
          resizeMode="cover"
        />
      </View>
      <LinearGradient containerStyle="absolute z-10 w-full h-full" />
    </View>
  );
};

export default HomeBackground;

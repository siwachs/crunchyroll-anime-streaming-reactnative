import { View, Image } from "react-native";

import LinearGradient from "@/src/components/Utilities/linear-gradient.component";

const HomeBackground = () => {
  return (
    <View className="absolute left-0 top-0 z-0 h-[62vh] w-full min-w-full overflow-hidden">
      <View className="aspect-[2/3]">
        <Image
          source={require("@/mock-data/banner/1.webp")}
          className="object-center-top relative h-full w-full"
          resizeMode="cover"
        />
      </View>
      <LinearGradient tailwindClassName="absolute z-10 w-full h-full" />
    </View>
  );
};

export default HomeBackground;

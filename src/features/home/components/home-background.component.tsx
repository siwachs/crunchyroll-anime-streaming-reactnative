import { View, Image } from "react-native";

import LinearGradient from "@/src/components/Utilities/linear-gradient.component";

const HomeBackground = () => {
  return (
    <View className="absolute left-0 right-0 top-0 z-0 aspect-[2/3]">
      <Image
        source={require("@/mock-data/banner/1.jpg")}
        className="absolute z-10 h-full w-full"
        resizeMode="cover"
      />
      <LinearGradient tailwindClassName="absolute z-20 h-full w-full" />
    </View>
  );
};

export default HomeBackground;

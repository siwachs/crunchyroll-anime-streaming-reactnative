import { ReactNode } from "react";
import { ImageBackground } from "react-native";

import LinearGradient from "@/src/components/Utilities/linear-gradient.component";

const HomeBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <ImageBackground
      source={require("@/mock-data/banner/1.jpg")}
      className="aspect-[2/3] bg-primary"
      resizeMode="cover"
    >
      <LinearGradient />
      {children}
    </ImageBackground>
  );
};

export default HomeBackground;

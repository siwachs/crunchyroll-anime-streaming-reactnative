import LinearGradient from "@/src/components/Utilities/linear-gradient.component";
import { ReactNode } from "react";
import { ImageBackground } from "react-native";

const HomeBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <ImageBackground
      source={require("@/mock-data/banner/2.jpg")}
      className="aspect-[2/3] bg-primary"
      resizeMode="cover"
    >
      <LinearGradient />
      {children}
    </ImageBackground>
  );
};

export default HomeBackground;

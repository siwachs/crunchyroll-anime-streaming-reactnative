import { LinearGradient } from "expo-linear-gradient";
import { ReactNode } from "react";
import { ImageBackground } from "react-native";

const HomeBackground = ({ children }: { children?: ReactNode }) => {
  return (
    <ImageBackground
      source={require("@/mock-data/banner/2.jpg")}
      className="flex-1 bg-primary"
    >
      <LinearGradient
        className="absolute left-0 top-0 z-0 h-full w-full min-w-full"
        colors={[
          "rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, 0.2)",
          "rgba(0, 0, 0, 0.6)",
          "rgba(0, 0, 0, 1)",
        ]}
        start={[0, 0]}
        end={[0, 1]}
      />
      {children}
    </ImageBackground>
  );
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);

export default HomeBackground;

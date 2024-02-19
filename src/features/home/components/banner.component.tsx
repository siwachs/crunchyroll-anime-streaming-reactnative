import { LinearGradient } from "expo-linear-gradient";
import { View, TouchableOpacity, ImageBackground, Text } from "react-native";

const Banner = () => {
  return (
    <TouchableOpacity onPress={() => {}}>
      <View className="h-[86%] w-full max-w-full overflow-hidden">
        <ImageBackground
          source={require("@/mock-data/banner/2.jpg")}
          className="relative left-0 top-0 z-[-1] aspect-[2/3] w-full min-w-full"
        >
          <LinearGradient
            className="absolute left-0 top-0 z-0 aspect-[2/3] w-full min-w-full"
            colors={["rgba(20, 21, 25, 0)", "rgba(20, 21, 25, 0.8)"]}
            start={[0, 0]}
            end={[0, 1]}
          />
          <View className="absolute top-[290px] z-[1] gap-x-3.5 p-[18px]">
            <Text>Solo Leveling</Text>
            <SubTitle>Dub | Sub</SubTitle>
            <Description numberOfLines={3}>
              They say whatever doesn’t kill you makes you stronger, but that’s
              not the case for the world’s weakest hunter Sung Jinwoo. After
              being brutally slaughtered by monsters in a high-ranking dungeon,
              Jinwoo came back with the System, a program only he could see,
              that’s leveling him up in every way. Now, he’s inspired to
              discover the secrets behind his powers and the dungeon that
              spawned them.
            </Description>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default Banner;

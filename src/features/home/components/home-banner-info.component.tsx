import { Feather } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const HomeBannerInfo = () => {
  const Touchable: any =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View className="gap-y-2 pt-[75%]">
      <Text className="text-[22px] font-semibold uppercase text-white">
        SPY X Family
      </Text>
      <Text className="text-xs capitalize text-gray-300">Dub | Sub</Text>
      <Text numberOfLines={3} className="tex-sm leading-5 text-white">
        World peace is at stake and secret agent Twilight must undergo his most
        difficult mission yet—pretend to be a family man. Posing as a loving
        husband and father, he’ll infiltrate an elite school to get close to a
        high-profile politician. He has the perfect cover, except his wife’s a
        deadly assassin and neither knows each other’s identity. But someone
        does, his adopted daughter who’s a telepath!
      </Text>
      <Touchable onPress={() => {}}>
        <View className="mt-4 w-40 flex-row items-center justify-center gap-x-1 bg-crunchyrollOrange py-2">
          <Feather name="play" size={25} color="black" />
          <Text className="text-base font-semibold uppercase">Watch Now</Text>
        </View>
      </Touchable>
    </View>
  );
};

export default HomeBannerInfo;

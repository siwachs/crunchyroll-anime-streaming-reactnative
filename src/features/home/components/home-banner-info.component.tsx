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
    <View className="h-[56vh] justify-end gap-y-2 px-4">
      <Text className="font-latoBold text-2xl uppercase text-white">
        SPY X Family
      </Text>
      <Text className="font-lato text-sm capitalize text-slate-200">
        Dub | Sub
      </Text>
      <Text
        numberOfLines={3}
        className="font-lato text-sm leading-5 text-white"
      >
        World peace is at stake and secret agent Twilight must undergo his most
        difficult mission yet—pretend to be a family man. Posing as a loving
        husband and father, he’ll infiltrate an elite school to get close to a
        high-profile politician. He has the perfect cover, except his wife’s a
        deadly assassin and neither knows each other’s identity. But someone
        does, his adopted daughter who’s a telepath!
      </Text>
      <Touchable onPress={() => {}}>
        <View className="mt-3.5 h-10 w-40 flex-row items-center justify-center gap-x-1 bg-crunchyrollOrange">
          <Feather name="play" size={25} color="black" />
          <Text className="text-base font-semibold uppercase">Watch Now</Text>
        </View>
      </Touchable>
    </View>
  );
};

export default HomeBannerInfo;

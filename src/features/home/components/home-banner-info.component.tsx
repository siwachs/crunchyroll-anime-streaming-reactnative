import {
  View,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";

const HomeBannerInfo = () => {
  const Touchable: any =
    Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View className="gap-y-2 pt-[75%]">
      <Text className="text-[22px] font-semibold uppercase text-white">
        Frieren: Beyond Journey's End
      </Text>
      <Text className="text-xs capitalize text-slate-300">Dub | Sub</Text>
      <Text numberOfLines={3} className="tex-sm text-white">
        After the party of heroes defeated the Demon King, they restored peace
        to the land and returned to lives of solitude. Generations pass, and the
        elven mage Frieren comes face to face with humanity’s mortality. She
        takes on a new apprentice and promises to fulfill old friends’ dying
        wishes. Can an elven mind make peace with the nature of life and death?
        Frieren embarks on her quest to find out.
      </Text>
      <Touchable onPress={() => {}}>
        <View className="bg-crunchyrollOrange mt-5 w-40 flex-row items-center justify-center gap-x-1 py-2">
          <Feather name="play" size={25} color="black" />
          <Text className="text-base font-semibold uppercase">Watch Now</Text>
        </View>
      </Touchable>
    </View>
  );
};

export default HomeBannerInfo;

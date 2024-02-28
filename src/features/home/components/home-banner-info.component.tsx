import { Feather } from "@expo/vector-icons";
import { View, Text } from "react-native";

import Touchable from "@/src/components/Utilities/touchable.component";

const HomeBannerInfo = () => {
  return (
    <Touchable>
      <View className="h-[62vh] w-full min-w-full overflow-hidden px-4">
        <View className="h-[54vh] justify-end">
          <Text
            numberOfLines={2}
            className="font-latoBold text-2xl uppercase text-white"
          >
            Villainess Level 99: I May Be the Hidden Boss But I'm Not the Demon
            Lord
          </Text>
          <Text className="font-lato text-sm capitalize text-slate-200">
            Dub | Sub
          </Text>
          <Text
            numberOfLines={3}
            className="font-lato text-sm leading-[18px] text-white"
          >
            This college kid wants nothing more than a quiet life. So when she’s
            reborn as Yumiella, the hidden villainess of an Otome RPG, she’s not
            exactly thrilled. Still yearning for peace, she abandons her evil
            duties to live a more discreet life. Until her gamer side kicks in
            and she accidentally reaches level 99! Now, everyone suspects that
            she’s the infamous Demon Lord. What future awaits her?
          </Text>
          <Touchable onPress={() => {}}>
            <View className="h-10 w-40 flex-row items-center justify-center gap-x-1 bg-crunchyrollOrange">
              <Feather name="play" size={25} color="black" />
              <Text className="text-base font-semibold uppercase">
                Watch Now
              </Text>
            </View>
          </Touchable>
        </View>
      </View>
    </Touchable>
  );
};

export default HomeBannerInfo;

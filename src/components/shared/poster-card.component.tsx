import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";

import { AnimePoster } from "@/types";
import Touchable from "@/src/components/Utilities/touchable.component";

const PosterCard = ({
  poster,
  containerStyle,
}: {
  poster: AnimePoster;
  containerStyle?: string;
}) => {
  return (
    <View className={containerStyle}>
      <View className="h-52 w-[147px]">
        <Image
          resizeMode="cover"
          className="h-full w-full"
          source={{ uri: poster.image }}
        />
      </View>

      <View className="relative mt-1.5 w-[147px]">
        <View>
          <Text numberOfLines={1} className="font-lato text-sm text-white ">
            {poster.title}
          </Text>
          <Text
            numberOfLines={1}
            className="font-lato text-sm text-neutral-400"
          >
            {poster.subTitle}
          </Text>
        </View>

        <Touchable
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          onPress={() => alert("clicked")}
        >
          <View className="absolute bottom-1 right-2">
            <Fontisto name="more-v-a" size={14} color="#A3A3A3" />
          </View>
        </Touchable>
      </View>
    </View>
  );
};

export default PosterCard;

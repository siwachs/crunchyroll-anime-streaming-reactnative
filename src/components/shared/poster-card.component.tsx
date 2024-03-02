import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image } from "react-native";

import { AnimePoster } from "@/types";

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
      <View className="mt-1.5 w-[147px]">
        <Text numberOfLines={1} className="font-lato text-sm text-white ">
          {poster.title}
        </Text>
        <View className="flex-row items-center justify-between">
          <Text
            numberOfLines={1}
            className="font-lato text-sm text-neutral-400"
          >
            {poster.subTitle}
          </Text>
          <Fontisto name="more-v-a" size={14} color="#A3A3A3" />
        </View>
      </View>
    </View>
  );
};

export default PosterCard;

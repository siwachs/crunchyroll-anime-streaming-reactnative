import React from "react";
import { Feather } from "@expo/vector-icons";
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
    <View className={`w-36 ${containerStyle}`}>
      <Image className="h-52 w-full" source={{ uri: poster.image }} />
      <Text numberOfLines={1} className="mt-2.5 text-sm text-white ">
        {poster.title}
      </Text>
      <View className="flex-row justify-between">
        <Text className="text-xs text-[#9d9d9d]">{poster.subTitle}</Text>
        <Feather name="more-vertical" size={20} color="#a0a0a0" />
      </View>
    </View>
  );
};

export default PosterCard;

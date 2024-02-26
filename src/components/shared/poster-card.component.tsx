import React from "react";
import { View, Text, Image } from "react-native";

import { AnimePoster } from "@/types";

const PosterCard = ({
  poster,
  posterCardGapClassName,
}: {
  poster: AnimePoster;
  posterCardGapClassName?: string;
}) => {
  return (
    <View className={posterCardGapClassName}>
      <Image className="h-52 w-36" source={{ uri: poster.image }} />
      <Text numberOfLines={1} className="w-36 text-white">
        {poster.title}
      </Text>
      <Text className="text-white">{poster.subTitle}</Text>
    </View>
  );
};

export default PosterCard;

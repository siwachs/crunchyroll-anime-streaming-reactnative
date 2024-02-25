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
    <View className={`w-36 ${posterCardGapClassName}`}>
      <Image className="h-48 w-full" source={{ uri: poster.image }} />
      <Text className="text-white">{poster.title}</Text>
      <Text className="text-white">{poster.subTitle}</Text>
    </View>
  );
};

export default PosterCard;

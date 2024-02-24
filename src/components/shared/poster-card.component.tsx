import React from "react";
import { AnimePoster } from "@/types";
import { View, Text, Image } from "react-native";

const PosterCard = ({
  poster,
  tailwindClassName,
}: {
  poster: AnimePoster;
  tailwindClassName?: string;
}) => {
  return (
    <View className={`w-36 items-start ${tailwindClassName}`}>
      <Image className="h-48 w-full" source={{ uri: poster.image }} />
      <Text className="text-white">{poster.title}</Text>
      <Text className="text-white">{poster.subTitle}</Text>
    </View>
  );
};

export default PosterCard;

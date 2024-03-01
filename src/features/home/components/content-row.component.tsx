import { View, Text, ScrollView } from "react-native";

import PosterCard from "@/src/components/shared/poster-card.component";
import { AnimePoster } from "@/types";

const ContentRow = ({
  contentContainerStyle,
  title,
  data,
}: {
  contentContainerStyle?: string;
  title: string;
  data: AnimePoster[];
}) => {
  const renderItem = (item: AnimePoster, index: number) => (
    <PosterCard
      containerStyle={index + 1 === data.length ? "" : "mr-2"}
      poster={item}
      key={item.id}
    />
  );

  return (
    <View className={contentContainerStyle}>
      <Text className="pb-3 pl-4 font-lato text-lg font-semibold uppercase text-white">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {data.map((item, index) => renderItem(item, index))}
      </ScrollView>
    </View>
  );
};

export default ContentRow;

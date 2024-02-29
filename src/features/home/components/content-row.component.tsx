import { View, Text, ScrollView } from "react-native";

import PosterCard from "@/src/components/shared/poster-card.component";
import { AnimePoster } from "@/types";

const ContentRow = ({
  title,
  data,
}: {
  title: string;
  data: AnimePoster[];
}) => {
  return (
    <View>
      <Text className="font-lato text-lg font-semibold uppercase text-white">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {data.map((item) => (
          <PosterCard poster={item} key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ContentRow;

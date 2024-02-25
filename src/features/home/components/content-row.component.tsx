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
      <Text className="mt-4 pb-1 pl-3 font-lato text-lg font-semibold uppercase text-white">
        {title}
      </Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 12 }}
      >
        {data.map((item, index) => (
          <PosterCard
            poster={item}
            key={item.id}
            posterCardGapClassName={data.length - 1 !== index ? "mr-2" : ""}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default ContentRow;

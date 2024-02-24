import { View, Text, ScrollView } from "react-native";

import PosterCard from "@/src/components/shared/poster-card.component";
import { AnimePoster } from "@/types";

const ContentRow = ({
  title,
  data,
  tailwindClassName,
}: {
  title: string;
  data: AnimePoster[];
  tailwindClassName?: string;
}) => {
  return (
    <View className={tailwindClassName}>
      <Text className="font-lato text-lg font-semibold uppercase text-white">
        {title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item) => (
          <PosterCard poster={item} tailwindClassName="mr-2" key={item.id} />
        ))}
      </ScrollView>
    </View>
  );
};

export default ContentRow;

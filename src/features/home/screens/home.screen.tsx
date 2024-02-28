import { View, ScrollView } from "react-native";

import ContentRow from "../components/content-row.component";
import HomeBannerInfo from "../components/home-banner-info.component";

import { data } from "@/mock-data";
import HomeBackground from "@/src/features/home/components/home-background.component";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary">
      <HomeBackground />
      <ScrollView className="flex-1">
        <HomeBannerInfo />
        <View />
      </ScrollView>
    </View>
  );
};

export default HomeScreen;

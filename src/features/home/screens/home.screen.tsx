import { ScrollView, Text, View } from "react-native";

import ContentRow from "../components/content-row.component";
import HomeBannerInfo from "../components/home-banner-info.component";

import { data } from "@/mock-data";
import HomeBackground from "@/src/features/home/components/home-background.component";
import HomeHeader from "@/src/components/headers/home-header.component";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary">
      <HomeBackground />
      <HomeBannerInfo />
    </View>
  );
};

export default HomeScreen;

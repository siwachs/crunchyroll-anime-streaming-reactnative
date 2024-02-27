import { View } from "react-native";

import ContentRow from "../components/content-row.component";

import HomeBannerInfo from "../components/home-banner-info.component";

import { data } from "@/mock-data";
import HomeBackground from "@/src/features/home/components/home-background.component";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary">
      <HomeBackground />
    </View>
  );
};

export default HomeScreen;

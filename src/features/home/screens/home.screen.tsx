import { ScrollView } from "react-native";

import HomeBannerInfo from "../components/home-banner-info.component";

import HomeBackground from "@/src/features/home/components/home-background.component";

const HomeScreen = () => {
  return (
    <HomeBackground>
      <ScrollView className="flex-1 pl-4">
        <HomeBannerInfo />
      </ScrollView>
    </HomeBackground>
  );
};

export default HomeScreen;

import { ScrollView, View } from "react-native";

import HomeBannerInfo from "../components/home-banner-info.component";

import HomeBackground from "@/src/features/home/components/home-background.component";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-primary">
      <HomeBackground>
        <ScrollView className="flex-1 overflow-visible pl-4">
          <HomeBannerInfo />
        </ScrollView>
      </HomeBackground>
    </View>
  );
};

export default HomeScreen;

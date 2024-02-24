import { ScrollView, View } from "react-native";

import ContentRow from "../components/content-row.component";
import HomeBannerInfo from "../components/home-banner-info.component";

import { data } from "@/mock-data";
import HomeBackground from "@/src/features/home/components/home-background.component";

const HomeScreen = () => {
  //  pl-4
  return (
    <View className="flex-1 bg-primary">
      <HomeBackground>
        <ScrollView className="flex-1 overflow-visible">
          <HomeBannerInfo />
          <ContentRow
            tailwindClassName="mt-6"
            title="Top Picks For You"
            data={data}
          />
        </ScrollView>
      </HomeBackground>
    </View>
  );
};

export default HomeScreen;

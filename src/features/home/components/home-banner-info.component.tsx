import { View, Text, TouchableOpacity } from "react-native";

const HomeBannerInfo = () => {
  return (
    <View className="aspect-[1/1.15] justify-end gap-y-1.5">
      <Text className="text-[22px] font-semibold uppercase text-white">
        Frieren: Beyond Journey's End
      </Text>
      <Text className="text-xs capitalize text-gray-300">Dub | Sub</Text>
      <Text numberOfLines={3} className="tex-sm text-white">
        After the party of heroes defeated the Demon King, they restored peace
        to the land and returned to lives of solitude. Generations pass, and the
        elven mage Frieren comes face to face with humanity’s mortality. She
        takes on a new apprentice and promises to fulfill old friends’ dying
        wishes. Can an elven mind make peace with the nature of life and death?
        Frieren embarks on her quest to find out.
      </Text>
      <TouchableOpacity onPress={() => {}}>
        <View>
          <Text className="capitalize">Watch Now</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HomeBannerInfo;

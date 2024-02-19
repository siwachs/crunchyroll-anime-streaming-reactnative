import { ReactNode } from "react";
import { SafeAreaView, StatusBar } from "react-native";

const SafeArea = ({ children }: { children: ReactNode }) => {
  const marginTop = StatusBar.currentHeight
    ? `mt-[${StatusBar.currentHeight}px]`
    : "mt-0";

  return (
    <SafeAreaView className={`flex-1 ${marginTop} bg-primary`}>
      {children}
    </SafeAreaView>
  );
};

export default SafeArea;

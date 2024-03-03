import { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const Touchable = ({
  children,
  onPress,
  hitSlop,
}: {
  children: ReactNode;
  onPress?: () => void;
  hitSlop?: { top?: number; bottom?: number; left?: number; right?: number };
}) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback hitSlop={hitSlop} onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity hitSlop={hitSlop} onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default Touchable;

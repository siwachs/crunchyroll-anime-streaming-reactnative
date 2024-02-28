import { ReactNode } from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
} from "react-native";

const Touchable = ({
  children,
  onPress,
}: {
  children: ReactNode;
  onPress?: () => void;
}) => {
  return Platform.OS === "android" ? (
    <TouchableNativeFeedback onPress={onPress}>
      {children}
    </TouchableNativeFeedback>
  ) : (
    <TouchableOpacity onPress={onPress}>{children}</TouchableOpacity>
  );
};

export default Touchable;

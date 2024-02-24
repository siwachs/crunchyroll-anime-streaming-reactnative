import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

const LinearGradient = ({
  tailwindClassName,
}: {
  tailwindClassName?: string;
}) => {
  return (
    <ExpoLinearGradient
      className={tailwindClassName}
      colors={[
        "rgba(0, 0, 0, 0)",
        "rgba(0, 0, 0, 0.2)",
        "rgba(0, 0, 0, 0.6)",
        "rgba(0, 0, 0, 1)",
      ]}
      start={[0, 0]}
      end={[0, 1]}
    />
  );
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);

export default LinearGradient;

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
        "rgba(0, 0, 0, 1)", // Top
        "rgba(0, 0, 0, 0.03) 20%", // Middle
        "rgba(0, 0, 0, 0.09) 56%", // Middle
        "#000", // Bottom
      ]}
      start={[0, 0]} // Top Left
      end={[0, 1]} // Bottom Left
    />
  );
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);

export default LinearGradient;

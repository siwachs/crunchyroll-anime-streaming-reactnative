import { LinearGradient as ExpoLinearGradient } from "expo-linear-gradient";

const LinearGradient = ({
  containerStyle,
}: {
  containerStyle?: string;
}) => {
  return (
    <ExpoLinearGradient
      className={containerStyle}
      colors={[
        "rgba(0, 0, 0, 1)",
        "rgba(0, 0, 0, 0.2) 20%",
        "rgba(0, 0, 0, 0.6) 56%",
        "#000",
      ]}
      start={[0, 0]} // Top Left
      end={[0, 1]} // Bottom Left
    />
  );
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);

export default LinearGradient;

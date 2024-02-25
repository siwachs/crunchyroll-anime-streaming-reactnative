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
        "rgba(0, 0, 0, 1)", // Solid black at the top
        "rgba(0, 0, 0, 0.1)", // Dark shade of black with some transparency
        "rgba(0, 0, 0, 0.8)", // Lighter shade of black with more transparency
        "rgba(0, 0, 0, 1)", // Solid black at the bottom
      ]}
      start={[0, 0]} // From Top Left
      end={[0, 1]} // From Bottom Left
    />
  );
};

// background: linear-gradient(180deg, #0000, #0003 20%, #0009 56%, #000);
// linear-gradient(180deg, #14151900, #141519cc);

export default LinearGradient;

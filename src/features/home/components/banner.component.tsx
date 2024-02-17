import { BannerImage, Overlay } from "./banner.styles";

const Banner = () => {
  return (
    <BannerImage>
      <Overlay
        colors={[
          "rgba(0, 0, 0, 0)",
          "rgba(0, 0, 0, 0.03)",
          "rgba(0, 0, 0, 0.09)",
          "rgba(0, 0, 0, 1)",
        ]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      />
    </BannerImage>
  );
};

export default Banner;

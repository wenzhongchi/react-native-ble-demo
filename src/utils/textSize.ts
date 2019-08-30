import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// our design is based on iphone x
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const textScale = (size: number) => (width / guidelineBaseWidth) * size;
const verticalTextScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
const moderateTextScale = (size: number, factor = 0.5) =>
  size + (textScale(size) - size) * factor;

export { textScale, verticalTextScale, moderateTextScale };

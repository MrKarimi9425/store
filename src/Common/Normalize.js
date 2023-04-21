import { PixelRatio, Dimensions, StatusBar } from "react-native";

const {
    height,
    width
} = Dimensions.get('window');

export const Normalize = (size) => {

    const standard = width > height ? width : height;
    const off = width > height ? 0 : StatusBar.currentHeight;

    const deviceHeight = standard - off;

    const newSize = (size * deviceHeight) / 680;



    return Math.round(newSize);
}

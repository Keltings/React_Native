import { StyleSheet } from "react-native";
import {SIZES} from "../../constants/theme"

const styles = StyleSheet.create({
    image: {
        resizeMode: "cover",
        width: SIZES.width,
        height: SIZES.height
    }
})

export default styles
import { StyleSheet } from "react-native";

const reusable = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20
    },
    rowWithSpace: {
        flexDirection:"row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})

export default reusable
import React, { FC } from "react";
import { View, Text, ViewStyle, TextStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { color, spacing } from "../../theme"

const ItemStyle: ViewStyle = {
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    backgroundColor: color.palette.white,
    flexDirection: "row",
    margin: spacing[2],
    marginLeft: 20,
    marginTop: spacing[3],
    elevation: 1,
    borderRadius: 8
}

const StateNameStyle: TextStyle = {
    color: color.palette.black,
    flexDirection: "row",
    margin: spacing[4],
    marginLeft: spacing[6],
    fontSize: 18
}

const NumberItemStyle: TextStyle = {
    color: color.palette.white,
    fontWeight: "bold",
    fontSize: 28,
    textAlign: "center",
    textAlignVertical: "center"
}

const GradientStyle: ViewStyle = {
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 0,
    position: "absolute",
    marginLeft: -30,
    marginTop: -20,
    width: 60,
    height: "90%",
    left: 0,
    justifyContent: "center"
}

export const ItemList: FC = () => {
    return (
        <View style={ItemStyle}>
            <View>
                <LinearGradient
                    colors={["#e6e6e6", "#00396f"]}
                    style={GradientStyle}
                >
                    <Text style={NumberItemStyle}>1</Text>
                </LinearGradient>
            </View>
            <Text style={StateNameStyle}>Nome do estado</Text>
        </View>
    )
}
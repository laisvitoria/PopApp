import React, { FC } from "react";
import { View, Text, ViewStyle, TextStyle, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { color, spacing } from "../../theme";

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

export type Props = {
    stateName: string;
    stateIndex: number;
    onPress: any
}

export const ItemList: FC<Props> = ({ stateName, stateIndex, onPress }) => {
    return (
        <TouchableOpacity style={ItemStyle} onPress={onPress}>
            <View>
                <LinearGradient
                    colors={["#e6e6e6", "#00396f"]}
                    style={GradientStyle}
                >
                    <Text style={NumberItemStyle}>{stateIndex+1}</Text>
                </LinearGradient>
            </View>
            <Text style={StateNameStyle}>{stateName}</Text>
        </TouchableOpacity>
    )
}
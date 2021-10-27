import React, { FC } from "react";
import { View, Text } from "react-native";

export type Props = {
    name: string;
};

export const StatesList: FC = () => {
    return (
        <View>
            <Text>Listagem de estados</Text>
        </View>
    )
}
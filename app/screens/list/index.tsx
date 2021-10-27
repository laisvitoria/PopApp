import React, { FC } from "react";
import { View } from "react-native";
import { StatesList } from "../../features/statesList/states-list"

export type Props = {
    name: string;
};

export const ScreenList: FC = () => {
    return (
        <View>
            <StatesList />
        </View>
    )
}
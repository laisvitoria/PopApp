import React, { FC } from "react";
import { View } from "react-native";
import StatesList from "../../features/statesList/states-list"

import { StateType } from "../../store/reducers/states"

export type Props = {
    states: StateType[];
};

export const ScreenList: FC<Props> = () => {
    return (
        <View>
            <StatesList />
        </View>
    )
}
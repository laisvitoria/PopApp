import React, { FC, /* useState, */ useEffect } from "react";
import { View, Text, FlatList, TextStyle, ViewStyle } from "react-native";

import ApiLocalization from "../../services/api/api-localization"

import { ItemList } from "../../components/item-list/item-list";
import { color, spacing } from "../../theme";

export type Props = {
    name: string;
};

export type StateType = {
    id: string,
    title: string,
};

const states: StateType[] = [
    {
      id: "1",
      title: "Sergipe",
    },
    {
      id: "2",
      title: "Bahia",
    },
    {
      id: "3",
      title: "Pernambuco",
    },
    {
      id: "4",
      title: "Pernambuco",
    },
    {
      id: "5",
      title: "Pernambuco",
    },
    {
      id: "6",
      title: "Pernambuco",
    },
    {
      id: "7",
      title: "Pernambuco",
    },
    {
      id: "8",
      title: "Pernambuco",
    },
    {
      id: "9",
      title: "Pernambuco",
    },
    {
      id: "10",
      title: "Pernambuco",
    },
    {
      id: "11",
      title: "Pernambuco",
    },
];

const TitleListStyle: TextStyle = {
    color: color.palette.deepPurple,
    fontWeight: "bold",
    fontSize: 40,
    textAlign: "center",
    textAlignVertical: "center",
    marginVertical: spacing[4]
}

const ContainerListStyle: ViewStyle = {
    paddingBottom: 180
}

export const StatesList: FC = () => {
    // const [listStates, setListStates] = useState();
    const api = ApiLocalization.create()

    useEffect(() => {
        async function getStatesIbge() {
            await api.getStates()
            .then((res) => {
                console.log("success", res)
            })
            .catch((err) => {
                console.log("error", err)
            })
        }
        getStatesIbge()
    }, [])

    return (
        <View style={ContainerListStyle}>
            <Text style={TitleListStyle}>
                Listagem de estados
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={states}
                renderItem={() => <ItemList />}
                keyExtractor={item => item.id}
            />
        </View>
    )
}
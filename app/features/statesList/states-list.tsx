import React, { FC, /* useState, */ useEffect } from "react";
import { View, Text, FlatList, TextStyle, ViewStyle } from "react-native";
import { connect } from "react-redux"; // função que recebe um estado e retorna apenas o que precisamos

import ApiLocalization from "../../services/api/api-localization"

import { ItemList } from "../../components/item-list/item-list";
import { color, spacing } from "../../theme";

import { StateType } from "../../store/reducers/states";
import * as StatesActions from "../../store/actions/states"

export type Props = {
    states: StateType[];
    toggleState: any
};

export type typeStateConnect = {
  reducerStates: { 
    selectedState: any, states: StateType[]
  }
}

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

const StatesList: FC<Props> = ({ states, toggleState }) => {
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
                renderItem={(items) =>
                  <ItemList stateName={items.item.title} onPress={() => toggleState(items.item)}/>
                }
                keyExtractor={item => item.id}
            />
        </View>
    )
}

const mapStateToProps = (state: typeStateConnect) => ({ states: state.reducerStates.states })
const mapDispatchToProps = dispatch => ({// dispatch dispara açoes para o redux -> o que for disparado é ouvido por todo o redux
  toggleState: (item) => dispatch(StatesActions.toggleState(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatesList);
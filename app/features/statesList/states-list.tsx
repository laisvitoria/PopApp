import React, { FC, /* useState, */ useEffect } from "react";
import { View, Text, FlatList, TextStyle, ViewStyle } from "react-native";
import { connect } from "react-redux"; // função que recebe um estado e retorna apenas o que precisamos
import { createSelector } from "reselect";

import { ItemList } from "../../components/item-list/item-list";
import { color, spacing } from "../../theme";

import { StateType } from "./reducers-states";
import * as StatesActions from "./actions-states";

export type Props = {
    states: StateType[];
    toggleState: any,
    loadStates: any,
    total: any
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

const StatesList: FC<Props> = ({ states, toggleState, loadStates, total }) => {

    useEffect(() => {
        loadStates()
    }, [])

    return (
        <View style={ContainerListStyle}>
            <Text style={TitleListStyle}>
                Listagem de {total} estados
            </Text>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={states}
                renderItem={(items) =>
                  <ItemList stateName={items.item.nome} stateIndex={items.index} onPress={() => toggleState(items.item)}/>
                }
                keyExtractor={item => item.sigla}
            />
        </View>
    )
}

// usamos o selector quando desejamos fazer algum calculo baseado no estado da aplicação
const calculateTotal = createSelector(
    state => state.states,
    state => {
        return state?.reduce((initialValue) => initialValue + 1, 0)
    }
)

const mapStateToProps = (state: typeStateConnect) => ({
    states: state.reducerStates.states,
    total: calculateTotal(state.reducerStates)
})
const mapDispatchToProps = dispatch => ({// dispatch dispara açoes para o redux -> o que for disparado é ouvido por todo o redux
  toggleState: (item) => dispatch(StatesActions.toggleState(item)),
  loadStates: () => dispatch(StatesActions.loadStates())
})

export default connect(mapStateToProps, mapDispatchToProps)(StatesList);
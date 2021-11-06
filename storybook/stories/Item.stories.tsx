import React from "react";
import { storiesOf } from "@storybook/react-native";

import { ItemList } from "../../app/components/item-list/item-list";

storiesOf("Item", module).add("Default", () =>
    <ItemList onPress={() => console.log("ok")} stateIndex={0} stateName="#fff"/>
)

/* import * as React from "react"
import { storiesOf } from "@storybook/react-native"

declare let module

storiesOf("Header", module)
  .add("Behavior", () => (
    <> Teste </>
  ))
*/
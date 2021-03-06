// this is the native storybook entry point
// import { StorybookUI } from "./config"

// export * from "./storybook"

import { AppRegistry } from 'react-native'
import { getStorybookUI, configure } from '@storybook/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import stories
configure(() => {
  require('./stories')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: AsyncStorage as any
})

// If you are using React Native vanilla write your app name here.
// If you use Expo you can safely remove this line.
AppRegistry.registerComponent("App IBGE", () => StorybookUIRoot)

export default StorybookUIRoot
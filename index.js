/** 
 * @format
*/

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// const appName = 'ExemploNavegacao';
// Mudando o nome registrado para corresponder ao usado na navegação
AppRegistry.registerComponent(appName, () => App);

// Outra opção é:
 

// AppRegistry.registerComponent(appName, () => App);
import * as React from 'react';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import SampleScreen1 from './screens/SampleScreen1';
import SampleScreen2 from './screens/SampleScreen2';
import DrawerModal from './components/Drawer-Modal';

// basic stack navigator, Provides a way for your app to transition between screens where each new screen is placed on top of a stack.
// it is an object that contains the different screens, the "intialroutename" will point to the home page/start page

// most basic implementation of stackNavigator

// const RootStack = createStackNavigator(
//   {
//     Home: HomeScreen,
//     Details: DetailsScreen,
//     Sample1: SampleScreen1,
//     Sample2: SampleScreen2,
//   },
//   {
//     initialRouteName: 'Home',
//   }
// );

// stackNavigator can be a much more complex object that contains multiple properties for each 'screen' (page)
const RootStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
      // config options for single screen
      // mode: 'modal',
      // cardShadowEnabled: true,
    },
    Sample1: {
      screen: SampleScreen1,
    },
    Sample2: {
      screen: SampleScreen2,
    },
  },
  {

    // config options for all screens
    initialRouteName: 'Home',
    mode: 'modal',
    cardShadowEnabled: true,
  }
);
// app container that uses createAppContainer, Containers are responsible for managing your app state and linking your top-level navigator to the app environment
// const AppContainer = createAppContainer(RootStack);



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// createDrawerNavigator Component that renders a navigation drawer which can be opened and closed via gestures.
// By passing in the entire rootstack in the route configs we can use createappcontainer and pass in the drawer_modal and still
// have full access to the entire navigation stack

const Drawer_Modal = createDrawerNavigator(
  // route configs
  {
  RootStack: {
    screen: RootStack,
    // navigationOptions: {
      // drawerLabel: () => null,
    // }
  },
},
// drawer navigator config
{
  drawerPosition: 'left',
  contentComponent: DrawerModal,
  hideStatusBar: true,
}
)
// appcontainer creation using the drawer modal which contains/combines with the stacknavigation options ~~~~~~!!!!!!!!~~~~~~~~~~~~~
// const AppContainer = createAppContainer(Drawer_Modal);
// export default AppContainer;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~!!!!!!!!!!!!!!!!~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~



// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// A simple tab bar on the bottom of the screen that lets you switch between different routes.
// Routes are lazily initialized -- their screen components are not mounted until they are first focused.
const TabNav = createBottomTabNavigator(
  {
    // bottom tab for the homescreen
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
          tabBarIcon: () => (<Image source={require('./assets/home.png')} />)
      })
  },
  // bottom tab for the detailsscreen
    Details: {
      screen: DetailsScreen,
      navigationOptions: {
          tabBarIcon: () => (<Image source={require('./assets/details.png')} />)
      }
  },
  // creates a hamburger menu on bottom which simply opens the drawer/modal, BUT also allows us to pass through the drawer/modal which includes the stacknavigator to build our page navigation
    Drawer_Modal: {
      screen: Drawer_Modal,
      navigationOptions: {
          tabBarIcon: (() => (
              <Image source={require('./assets/hamburger_menu.png')} />
          )
          ),
          tabBarOnPress: ({ navigation }) => {
              navigation.toggleDrawer()
          },
      }
  },
  },
  {
    tabBarOptions: {
      showLabel: false, // hide labels
      activeTintColor: '#F8F8F8', // active icon color
      inactiveTintColor: '#586589',  // inactive icon color
      style: {
          backgroundColor: '#535353' // TabBar background
      }
  },
  initialRouteName: "Drawer_Modal",
  navigationOptions: {
      header: null
  }
  }
)
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~





// Class example using appcontainer, class examples are used in docs ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// export default class App extends React.Component {
//   render() {
//     return <AppContainer />;
//   }
// }
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// Functional example, created to see if it works, and it does,  using appcontainer ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const App = () => {
//     return <AppContainer />;
// }

// export default App;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~




// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// The purpose of SwitchNavigator is to only ever show one screen at a time. By default, it does not 
// handle back actions and it resets routes to their default state when you switch away. 
// This is the exact behavior that we want from the authentication flow.  Generally used to combine multiple navigation types like stack, tab, drawer navigators etc.

const AppContainer = createAppContainer(createSwitchNavigator({
    // ~~~~most basic that simply takes in the rootstack
    // Main: RootStack,
    // ~~~~intermediate, takes in the drawer_modal which includes the rootstack inside of it
    // Main: Drawer_Modal,
    // ~~~~advanced, takes in the TabNavigator, which includes the drawer_modal, which includes the rootstack, combines all three
    Main: TabNav,
  },{
    initialRouteName: 'Main',
  }))

export default AppContainer;
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

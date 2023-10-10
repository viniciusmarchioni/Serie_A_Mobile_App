import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { serieA } from './components/serieA';
import { serieB } from './components/serieB';
import { serieC } from './components/seriec';
import { settings } from './components/settings';
import { value } from './components/settings';
import { Audio } from 'expo-av';
const Tab = createBottomTabNavigator();



function tocar() {
  if (value) {
    som = new Audio.Sound();
    som.loadAsync(require('./assets/transicao.mp3'));
    som.setOnPlaybackStatusUpdate((e) => {
      som.setPositionAsync(0);
      som.playAsync();
    });
  } else {
    som = new Audio.Sound();
    som.loadAsync(require('./assets/mudo2.mp3'));
    som.setOnPlaybackStatusUpdate((e) => {
      som.setPositionAsync(0);
      som.playAsync();
    });
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.som = new Audio.Sound();
    this.som.loadAsync(require('./assets/transicao.mp3'));
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarActiveTintColor: 'white',
            tabBarInactiveTintColor: 'gray',
            tabBarInactiveBackgroundColor: '#2e2e2e',
            tabBarActiveBackgroundColor: '#2e2e2e',
          }}>
          <Tab.Screen
            name="Serie A"
            component={serieA}
            listeners={{ tabPress: (e) => tocar() }}
            options={{
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#2e2e2e' },
            }}
          />
          <Tab.Screen
            name="Serie B"
            component={serieB}
            listeners={{ tabPress: (e) => tocar() }}
            options={{
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#2e2e2e' },
            }}
          />
          <Tab.Screen
            name="Serie C"
            component={serieC}
            listeners={{ tabPress: (e) => tocar() }}
            options={{
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#2e2e2e' },
            }}
          />
          <Tab.Screen
            name="Settings"
            component={settings}
            listeners={{ tabPress: (e) => tocar() }}
            options={{
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#2e2e2e' },
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;

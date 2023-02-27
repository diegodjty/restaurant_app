import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import NewOrder from './views/NewOrder';
import Menu from './views/Menu';
import OrderDetails from './views/OrderDetails';
import DishForm from './views/DishForm';
import OrderProgress from './views/OrderProgress';
import DishDetails from './views/DishDetails';

OrderProgress;

const Stack = createStackNavigator();

function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="New Order"
            component={NewOrder}
            options={{
              title: 'New Order',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

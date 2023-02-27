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
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#FFDA00',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}>
          <Stack.Screen
            name="New Order"
            component={NewOrder}
            options={{
              title: 'New Order',
            }}
          />
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: 'Menu',
            }}
          />
          <Stack.Screen
            name="Dish Detail"
            component={DishDetails}
            options={{
              title: 'Dish Detail',
            }}
          />
          <Stack.Screen
            name="Dish"
            component={DishForm}
            options={{
              title: 'Dish',
            }}
          />
          <Stack.Screen
            name="Order Details"
            component={OrderDetails}
            options={{
              title: 'Order Details',
            }}
          />
          <Stack.Screen
            name="Order progress"
            component={OrderProgress}
            options={{
              title: 'Order progress',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;

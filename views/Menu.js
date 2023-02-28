import React, {Fragment, useContext, useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  OrdersContext,
  OrdersDispatchContext,
} from '../context/orders/ordersContext';
import {Container, List, Flex, Box, FlatList} from 'native-base';
import globalStyles from '../styles/global';
import MenuItem from '../components/MenuItem';
import {useTailwind} from 'tailwind-rn';

const Menu = () => {
  const {menu} = useContext(OrdersContext);
  const {getMenu} = useContext(OrdersDispatchContext);
  const tailwind = useTailwind();
  useEffect(() => {
    return () => {
      getMenu();
    };
  }, []);

  return (
    <View style={globalStyles.container}>
      <View style={tailwind('max-w-[90%] w-[100%] my-0 mx-auto')}>
        <FlatList
          data={menu}
          renderItem={({item}) => (
            <MenuItem
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
            />
          )}
        />
      </View>
    </View>
  );
};

export default Menu;

import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import {Container, Text, Button, View} from 'native-base';
import globalStyles from '../styles/global';
import {useNavigation} from '@react-navigation/native';
import {OrdersDispatchContext} from '../context/orders/ordersContext';

const NewOrder = () => {
  const navigation = useNavigation();
  const {getMenu} = useContext(OrdersDispatchContext);
  return (
    <Container style={globalStyles.container}>
      <View style={[globalStyles.content, styles.content]}>
        <Button
          style={globalStyles.button}
          rounded={'xl'}
          onPress={() => {
            navigation.navigate('Menu');
            getMenu();
          }}>
          <Text style={globalStyles.buttonText}>New order</Text>
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
  },
});

export default NewOrder;

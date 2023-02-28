import React, {createContext, useState} from 'react';
import {db} from '../../config/firebase';
import {onSnapshot, collection, where} from 'firebase/firestore';

const OrdersContext = createContext();
const OrdersDispatchContext = createContext();

function OrdersProvider({children}) {
  const [menu, setGetMenu] = useState([]);

  const getMenu = () => {
    onSnapshot(
      collection(db, 'products'),
      where('inStock', '==', true),
      snapshot => {
        let dishes = snapshot.docs.map(doc => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setGetMenu(dishes);
      },
    );
  };

  return (
    <OrdersContext.Provider value={{menu}}>
      <OrdersDispatchContext.Provider value={{getMenu}}>
        {children}
      </OrdersDispatchContext.Provider>
    </OrdersContext.Provider>
  );
}

export {OrdersProvider, OrdersContext, OrdersDispatchContext};

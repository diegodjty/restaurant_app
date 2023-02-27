import React, {createContext, useState} from 'react';

const OrdersContext = createContext();
const OrdersDispatchContext = createContext();

function OrdersProvider({children}) {
  const [orders, setOrders] = useState([]);

  return (
    <OrdersContext.Provider value={orders}>
      <OrdersDispatchContext.Provider value={OrdersDispatchContext}>
        {children}
      </OrdersDispatchContext.Provider>
    </OrdersContext.Provider>
  );
}

export {OrdersProvider, OrdersContext, OrdersDispatchContext};

import React from 'react';
import {Text, View, Image} from 'react-native';
import {useTailwind} from 'tailwind-rn';

const MenuItem = ({name, description, price, image}) => {
  const tailwind = useTailwind();
  console.log(image);
  return (
    <View
      style={tailwind(
        'flex-row justify-between items-end my-3 border-b-[1px] border-gray-300 pb-3',
      )}>
      <View>
        <Image
          style={tailwind('h-[65px] w-[65px] rounded-sm')}
          source={{
            uri: image,
          }}
        />
      </View>
      <View style={tailwind('w-[100px]')}>
        <Text style={tailwind('font-bold')}>{name}</Text>
        <Text
          style={tailwind('text-gray-400')}
          numberOfLines={3}
          ellipsizeMode={'clip'}>
          {description}
        </Text>
        <Text style={tailwind('font-bold')}>Price: ${price}</Text>
      </View>
    </View>
  );
};

export default MenuItem;

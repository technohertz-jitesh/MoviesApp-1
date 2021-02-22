import React from 'react';
import { StatusBar, View } from 'react-native';
import Theme from '../components/Theme';

const StatusBarComponent = (global_navigation) => {

  return (
    <View>

      <StatusBar
        barStyle={"light-content"}
        hidden={false}
        backgroundColor={Theme.color_primary}
        translucent={false} />

    </View>
  );
}

export default StatusBarComponent;

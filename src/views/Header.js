import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import { UserCircleIconConfig, BarsIconConfig } from '@patternfly/react-icons';

const Header = () => (
  <View style={{ flex: 1, flexDirection: 'row' }}>
    <View style={{ flex: 2}}>
      <Icon {...BarsIconConfig} />
    </View>
    <View style={{ flex: 1, flexDirection: 'row'}}>
      <Icon {...UserCircleIconConfig} />
      <Text style={styles.text}>Login</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  text: {
    color: global_Color_100.value
  }
});

export default Header;

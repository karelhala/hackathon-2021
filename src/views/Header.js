import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from '../components/Icon';
import global_BackgroundColor_100 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_100';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import { UserCircleIconConfig, BarsIconConfig } from '@patternfly/react-icons';
import { LoginContext } from '../utils/loginContext';

const Header = () => {
  const config = useContext(LoginContext);
  return (
    <View style={{...styles.rowFlex, ...styles.container}}>
      <View style={{ flex: 2}}>
        <Icon {...BarsIconConfig} />
      </View>
      <View style={styles.rowFlex}>
        <Icon {...UserCircleIconConfig} />
        <Text style={styles.text}>{config.identity.user.username}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowFlex: {
    flex: 1,
    flexDirection: 'row',
  },
  container: {
    backgroundColor: global_BackgroundColor_100.value,
    paddingLeft: 15,
    paddingTop: 15
  },
  text: {
    color: global_Color_100.value
  }
});

export default Header;

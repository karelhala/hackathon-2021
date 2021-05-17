import React, { useContext } from 'react';
import { StyleSheet, Text, Button } from 'react-native';
import Icon from '../components/Icon';
import global_BackgroundColor_100 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_100';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import { UserCircleIconConfig } from '@patternfly/react-icons';
import { LoginContext } from '../utils/loginContext';
import { Level, LevelItem } from '../layouts/Level';

const Header = () => {
  const config = useContext(LoginContext);
  return (
    <Level style={{...styles.container}}>
      <LevelItem />
      <LevelItem>
        <Level>
          <LevelItem>
            <Icon {...UserCircleIconConfig} />
          </LevelItem>
          <LevelItem style={{ marginLeft: 10 }}>
            <Text style={styles.text}>{config.identity.user.username}</Text>
          </LevelItem>
        </Level>
      </LevelItem>
    </Level>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: global_BackgroundColor_100.value,
    padding: 5
  },
  text: {
    color: global_Color_100.value
  }
});

export default Header;

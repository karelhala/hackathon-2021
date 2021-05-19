import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import Icon from '../components/Icon';
import global_BackgroundColor_100 from '@patternfly/react-tokens/dist/js/global_BackgroundColor_100';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import { UserCircleIconConfig } from '@patternfly/react-icons';
import { LoginContext } from '../utils/loginContext';
import { Level, LevelItem } from '../layouts/Level';
import Button, { variant } from '../components/Button';

const Header = ({ navigation }) => {
  const config = useContext(LoginContext);
  return (
    <Level style={{...styles.container}}>
      <LevelItem />
      <LevelItem>
        <Level>
          <LevelItem>
            <Button
              icon={
                <Icon {...UserCircleIconConfig} style={{ marginRight: 10 }} />
              }
              variant={variant.plain}
              onPress={() => navigation.openDrawer()}
              title={config.identity.user.username}
            />
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

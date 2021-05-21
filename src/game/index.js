import React, { useContext } from 'react';
import { Text, Modal } from 'react-native';
import { Stack, StackItem } from '../layouts/Stack';
import { Split, SplitItem } from '../layouts/Split';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { TimesIconConfig } from '@patternfly/react-icons';
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import darkColor from '@patternfly/react-tokens/dist/js/global_Color_dark_100';
import { ThemeContext } from '../utils/contexts';

const Game = ({ displayName, id, isOpen = false, setIsOpen }) => {
  const { whiteText } = useContext(ThemeContext);
  return <Modal
  animationType = {"slide"}
  transparent={false}
  visible={isOpen}
  onRequestClose={() => setIsOpen(false)}>
    <Stack style={{ flex: 1 }}>
      <StackItem style={{
          backgroundColor: darkColor.value
        }}
        onStartShouldSetResponder={() => true}
        onMoveShouldSetResponder={() => true}
        onResponderMove={e => e.nativeEvent.locationY > 50 && setIsOpen(false)}
      >
        <Split>
          <SplitItem isFill style={{ flex: 1, padding: 10 }}>
            <Text style={{ ...whiteText, fontSize: 25 }}>Remediate system {displayName}</Text>
          </SplitItem>
          <SplitItem>
            <Button icon={<Icon {...TimesIconConfig} />} onPress={() => setIsOpen(false)}/>
          </SplitItem>
        </Split>
      </StackItem>
      <StackItem isFill style={{
        backgroundColor: global_Color_100.value
      }}>
        <Text>Game will be here!</Text>
      </StackItem>
    </Stack>
</Modal>
}

export default Game;

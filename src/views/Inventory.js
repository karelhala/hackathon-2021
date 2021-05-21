import React, { useEffect, useState, useContext, useCallback } from 'react';
import { Text, View, Modal } from 'react-native';
import { LoginContext, ThemeContext } from '../utils/contexts';
import { authFetch } from '../utils/api';
import Header from './Header';
import Table from '../components/Table';
import FormatDate from '../components/Date';
import Button from '../components/Button';
import { Stack, StackItem } from '../layouts/Stack';
import { Split, SplitItem } from '../layouts/Split';
import { TimesIconConfig } from '@patternfly/react-icons';
import InventoryDetail from '../components/InventoryDetail'
import global_Color_100 from '@patternfly/react-tokens/dist/js/global_palette_black_100';
import darkColor from '@patternfly/react-tokens/dist/js/global_Color_dark_100';
import Icon from '../components/Icon';
import Remediate from '../game';
import Pagination from '../components/Pagination';
import ReleaseVersion from '../components/ReleaseVersion';

const Inventory = ({ navigation }) => {
  const { text, whiteText } = useContext(ThemeContext);
  const config = useContext(LoginContext);
  const [remediate, setRemediate] = useState();
  const [openSystem, setOpenSystem] = useState();
  const [data, setData] = useState(); // here should be paginated data
  const refreshData = useCallback(() => {
    setData(undefined);
    (async () => {
      const data = await authFetch(
        '/api/inventory/v1/hosts?per_page=50&page=1&order_by=updated&order_how=DESC&staleness=fresh&staleness=stale&&registered_with=insights&fields%5Bsystem_profile%5D%5B%5D=operating_system',
        config
      );
      setData(data);
    })()
  }, [config.token])
  useEffect(() => {
    refreshData();
  }, []);
  return <View style={{ flex: 1 }}>
      <Header navigation={navigation}/>
      <View style={{ flex: 1, paddingBottom: 10 }}>
          <Modal
            animationType = {"slide"}
            transparent={false}
            visible={openSystem !== undefined}
            onRequestClose={() => setOpenSystem(undefined)}>
              <Stack style={{ flex: 1 }}>
                <StackItem style={{
                    backgroundColor: darkColor.value
                  }}
                  onStartShouldSetResponder={() => true}
                  onMoveShouldSetResponder={() => true}
                  onResponderMove={e => e.nativeEvent.locationY > 50 && setOpenSystem(undefined)}
                >
                  <Split>
                    <SplitItem isFill style={{ flex: 1, padding: 10 }}>
                      <Text style={{ ...whiteText, fontSize: 25 }}>{openSystem?.name}</Text>
                    </SplitItem>
                    <SplitItem>
                      <Button icon={<Icon {...TimesIconConfig} />} onPress={() => setOpenSystem(undefined)}/>
                    </SplitItem>
                  </Split>
                </StackItem>
                <StackItem isFill style={{
                  backgroundColor: global_Color_100.value
                }}>
                  <InventoryDetail id={openSystem?.id} lastSeen={openSystem?.lastSeen}/>
                </StackItem>
              </Stack>
          </Modal>
          <Pagination />
          <Table
            header={[
              'Name',
              'Last seen',
              'Release Version',
              ''
            ]}
            onRefresh={() => refreshData()}
            refreshing={data === undefined}
            rows={data?.results.map(({ id, display_name, updated, system_profile}) => ({
              id,
              data: [
                <Button titleStyle={text} onPress={() => setOpenSystem({
                  id,
                  name: display_name,
                  lastSeen: updated
                })}
                variant="plain"
                title={display_name}
                />,
                <FormatDate date={updated}/>,
                <ReleaseVersion system_profile={system_profile}/>,
                <Button style={{ marginLeft: 130, width: '40%' }} title="Remediate" onPress={() => setRemediate({ id, displayName: display_name })}/>
              ]
            }))}
        />
        <Remediate isOpen={remediate !== undefined} {...remediate} setIsOpen={() => setRemediate(undefined)} />
      </View>
    </View>;
}

export default Inventory;

import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../utils/contexts';

const ReleaseVersion = ({system_profile}) => {
    console.log(system_profile);
    const { greyText } = useContext(ThemeContext);
    if (Object.keys(system_profile).length != 0) {
        return <View>
            <Text style={greyText}>{system_profile.operating_system.major}. {system_profile.operating_system.minor}</Text>
        </View>
    }
    else {
        return <View>
            <Text>N/A</Text>
        </View>
    }   
}

const styles = StyleSheet.create({});

export default ReleaseVersion;

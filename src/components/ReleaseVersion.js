import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../utils/contexts';

const ReleaseVersion = ({system_profile}) => {
    const { text } = useContext(ThemeContext);
    if (Object.keys(system_profile).length != 0) {
        return <View>
            <View style={styles.label}>
                <Text style={text}>{system_profile.operating_system.major}.{system_profile.operating_system.minor}</Text>
            </View>
        </View>
    }
    else {
        return <View>
            <Text>N/A</Text>
        </View>
    }   
}

const styles = StyleSheet.create({
    label: {
        backgroundColor: 'rgba(3, 3, 3, 0.32)'
    }
});

export default ReleaseVersion;

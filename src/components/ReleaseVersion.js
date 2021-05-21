import React, { useContext } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { ThemeContext } from '../utils/contexts';

const ReleaseVersion = ({system_profile}) => {
    const { text } = useContext(ThemeContext);
    if (Object.keys(system_profile).length != 0) {
        return <View>
            <View style={styles.button}>
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
    button: {
        paddingHorizontal: 2,
        paddingVertical: 2,
        borderRadius: 2,
        //backgroundColor: "oldlace",
        alignSelf: "flex-start",
        marginHorizontal: "1%",
        marginBottom: 3,
        minWidth: "10%",
        textAlign: "center",
      },
      buttonLabel: {
        fontSize: 12,
        fontWeight: "500",
        color: "red",
      },
      label: {
        textAlign: "center",
        marginBottom: 10,
        fontSize: 24,
      },
});

export default ReleaseVersion;

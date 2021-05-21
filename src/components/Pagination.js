import React from 'react';
import { View } from 'react-native';
import Button from '../components/Button';

const Pagination = ({ }) => {
    return <View>
        <Button
            onPress={() => testFunc}
            title='try me'
            />
    </View>

}

const testFunc = () => {
    console.log("TESTE");
    Alert.alert('Simple Button pressed')
}

export default Pagination;
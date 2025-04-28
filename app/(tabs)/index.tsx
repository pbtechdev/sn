import React from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';

const SampleComponent = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello, React Native!</Text>
            <Button onPress={() => Alert.alert('Button Pressed!')} title="Press Me" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
    },
    text: {
        fontSize: 18,
        color: '#333',
    },
});

export default SampleComponent;
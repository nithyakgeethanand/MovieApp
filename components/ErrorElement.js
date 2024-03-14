import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const ErrorElement = () => {
    return (
        <View style={styles.error}>
        <Text>Error fetching data</Text>
    </View>
    );
}

export default ErrorElement

const styles = StyleSheet.create({
    error: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
import { View, ActivityIndicator, StyleSheet} from 'react-native'
import React from 'react'
import colors from '../utils/colors';

const LoadingElement = () => {
    return (
        <View style={styles.loader}>
            <ActivityIndicator size="large" color={colors.loader} />
        </View>
    );
}

export default LoadingElement

const styles = StyleSheet.create({
    loader: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
});
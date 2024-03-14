import { View, ActivityIndicator} from 'react-native'
import React from 'react'

const LoadingElement = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

export default LoadingElement
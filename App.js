import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { LogBox, SafeAreaView, StyleSheet, Text, TextInput } from 'react-native';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';
import Theme from "./src/components/Theme";
import Routes from './src/routes/Routes';

const App = () => {

    useEffect(() => {
        LogBox.ignoreAllLogs('VirtualizedLists should never be nested')
    }, [])

    return (
        <PaperProvider>
            <NavigationContainer>
                <SafeAreaView style={styles.topSafeArea} />
                <Routes />
            </NavigationContainer>
        </PaperProvider>
    );
}

export default App;

const styles = StyleSheet.create({

    topSafeArea: {
        flex: 0,
        backgroundColor: Theme.color_white
    },

});
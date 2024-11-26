import { StyleSheet, Text, View } from "react-native";

import colors from 'ColorSheet.js'; 

function ThirdPage(props) {
    return (
        <View style={styles.container}>
            <Text>Adding Third Page</Text>
        </View>

    );
}

export default ThirdPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.accent500,
        borderColor: 'black',
        borderTopColor: 'white'
    }
});

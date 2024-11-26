import { StyleSheet, Text, View } from "react-native";

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
        backgroundColor: '#195392',
        borderColor: 'black',
        borderTopColor: 'white'
    }
});

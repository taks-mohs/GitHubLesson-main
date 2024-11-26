import { StyleSheet, Text, View } from "react-native";

function SecondPage(props) {
  return (
    <View style={styles.container}>
       <Text style={styles.textStyle}>Modify Second Page</Text>
    </View>

  );
}

export default SecondPage;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#195392',
    borderBlockColor: 'black'
  },
  textStyle : {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

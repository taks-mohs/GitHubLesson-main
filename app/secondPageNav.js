import { StyleSheet, Text, View } from "react-native";
function secondPageNav(props) {
  return (
    <View style={styles.container}>
       <Text style={styles.textStyle}>Second Page</Text>
    </View>

  );
}

export default secondPageNav;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBlockColor: 'black'
  },
  textStyle : {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

import { StyleSheet, Text, View } from "react-native";

function SecondPage(props) {
  return (
    <Text style={styles.textStyle}>Modify Second Page</Text>
  );
}

export default SecondPage;

const styles = StyleSheet.create({
  textStyle : {
    fontSize: 24,
    fontWeight: 'bold'
  }
});

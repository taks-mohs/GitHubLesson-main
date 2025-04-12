import { View, StyleSheet, Text} from "react-native";

function firstPageNav(props) {

  return (
    <View style={styles.container}>
       <Text style={styles.textStyle}>First Page</Text>
    </View>

  );
}

export default firstPageNav;

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

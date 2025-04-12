import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

function MainButton(props) {
  return (
    <View>
      <Link href={props.page}>{props.children}</Link>
    </View>
  );
}

export default MainButton;

const styles = StyleSheet.create({

});

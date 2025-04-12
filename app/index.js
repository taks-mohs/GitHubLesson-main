import { StyleSheet, View } from 'react-native';
import MainButton from '../components/MainButton';


export default function index() {

  return (
    <View style={styles.container}>
      <MainButton page={"/firstPageNav"}>First Page</MainButton>
      <MainButton page={"/secondPageNav"}>Second Page</MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

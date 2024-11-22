import { StyleSheet, SafeAreaView } from 'react-native';
import FirstPage from './screens.FirstPage.js';

import { useState } from 'react';

export default function App() {
  const [pageNum, setPageNum] = useState(0);

  let screen = <FirstPage />

  return (
    <SafeAreaView style={styles.container}>
      {screen}
    </SafeAreaView>
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

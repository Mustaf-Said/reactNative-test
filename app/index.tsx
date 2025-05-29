import { StyleSheet, Text, View } from 'react-native'


const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>wellcome to home page</Text>
      <Text style={{ marginTop: 10 }}> My name Mustafa</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  }
})

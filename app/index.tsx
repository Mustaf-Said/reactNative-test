import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'


const Home = () => {
  return (
    <View style={styles.container}>
      <Link href={"/about"} style={styles.link}>About me</Link>
      <Link href={"/contact"} style={styles.link}>contact me</Link>
      <Text style={styles.title}>👋 Hello F24 👋</Text>
      <Text style={{ marginTop: 10 }}> Här är musse 🥸</Text>
    </View >
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#adb5bd"
  },
  title: {
    fontSize: 18,
    fontWeight: "bold"
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})

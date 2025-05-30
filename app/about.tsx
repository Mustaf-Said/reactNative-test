import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.link}>Go Home</Link>

      <Text style={styles.title}>aboute me</Text>
    </View>
  )
}

export default about

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

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const contact = () => {
  return (
    <View style={styles.container}>
      <Link href={"/"} style={styles.link}>Go Home</Link>

      <Text style={styles.title}>Contact me</Text>
    </View>
  )
}

export default contact

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

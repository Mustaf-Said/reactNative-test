import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const about = () => {
  return (
    <View>
      <Link href={"/"}>Go back to Home</Link>
      <Text>aboute me</Text>
    </View>
  )
}

export default about

const styles = StyleSheet.create({})
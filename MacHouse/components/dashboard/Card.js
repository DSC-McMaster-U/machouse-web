import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

import AppText from './AppText'

function Card1({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText  style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    backgroundColor: '#F3C761',
    marginBottom: 20,
    overflow: 'hidden',
    width: 150,
    height: 200,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  image: {
    // flex: 3,
    width: 145,
    height: 135,
    transform: [{ scale: 0.8 }],
    bottom: 14,
    borderRadius: 10,
    resizeMode: 'stretch',
    paddingTop: 25,
  },

  title: {
    flex: 1.5,
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'stretch',
    bottom: 10,
    

  },

  subtitle: {
    flex: 1,
    color: '#000',
    bottom: 30,


  },
})

export default Card1
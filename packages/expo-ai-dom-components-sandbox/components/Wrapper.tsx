import React from 'react'
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
})

/**
 * Wrapper component for AI Agent screen content.
 * Provides consistent styling and layout for the chat interface.
 *
 * @param children - React nodes to wrap
 */
export default function Wrapper({ children }: { children: React.ReactNode }) {
  return <View style={styles.container}>{children}</View>
}

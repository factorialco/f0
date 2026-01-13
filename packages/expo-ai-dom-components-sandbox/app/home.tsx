import { useState } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { ChatOverlay } from '@/components/ChatOverlay'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
})

export default function HomeScreen() {
  const [chatVisible, setChatVisible] = useState(false)

  const handleOpenChat = () => {
    setChatVisible(true)
  }

  const handleCloseChat = () => {
    setChatVisible(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ONE AI Chat Sandbox</Text>
      <Text style={styles.description}>
        Click the button below to open the AI chat and test the components
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleOpenChat}>
        <Ionicons name="chatbubbles" size={20} color="#fff" />
        <Text style={styles.buttonText}>Open ONE Chat</Text>
      </TouchableOpacity>

      {/* Chat Overlay - slides up from bottom */}
      <ChatOverlay visible={chatVisible} onClose={handleCloseChat} />
    </View>
  )
}

import { StyleSheet, View, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import AiChatSandbox from '@/components/AiChatSandbox'
import { AiAgentBackground } from '@/components/AiAgentBackground'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 8,
    backgroundColor: 'transparent',
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.12)',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper: {
    flex: 1,
    height: '100%',
    backgroundColor: 'transparent',
  },
})

export default function ChatScreen() {
  const router = useRouter()

  const handleClose = () => {
    router.push('/home')
  }

  return (
    <View style={styles.container}>
      {/* Gradient Background */}
      <AiAgentBackground />

      <SafeAreaView
        style={{ flex: 1, backgroundColor: 'transparent' }}
        edges={['top']}
      >
        {/* Header with close button - matching mobile app exactly */}
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={handleClose}
            accessibilityLabel="Close chat"
          >
            <Ionicons name="close" size={18} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Wrapper matching mobile app structure */}
        <View style={styles.wrapper}>
          <AiChatSandbox />
        </View>
      </SafeAreaView>
    </View>
  )
}

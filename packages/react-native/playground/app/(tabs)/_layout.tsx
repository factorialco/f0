import { Tabs } from 'expo-router';
import { Text } from 'react-native';
import { useUniwind } from 'uniwind';

export default function TabLayout() {
  const { theme } = useUniwind();
  const isDark = theme === 'dark';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: isDark ? '#ffffff' : '#000000',
        tabBarInactiveTintColor: isDark ? '#666666' : '#999999',
        tabBarStyle: {
          backgroundColor: isDark ? '#1a1a1a' : '#ffffff',
          borderTopColor: isDark ? '#333333' : '#e5e5e5',
        },
      }}
    >
      <Tabs.Screen
        name="tokens"
        options={{
          title: 'Design Tokens',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🎨</Text>
          ),
        }}
      />
      <Tabs.Screen
        name="components"
        options={{
          title: 'Components',
          tabBarIcon: ({ color }) => (
            <Text style={{ color, fontSize: 20 }}>🧩</Text>
          ),
        }}
      />
    </Tabs>
  );
}

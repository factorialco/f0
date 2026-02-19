import { Pressable, Text, View } from 'react-native';
import { Uniwind, useCSSVariable, useUniwind } from 'uniwind';

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();
  
  // Obtener colores del tema actual
  const [f1Background, f1Foreground, f1Border, f1BackgroundSecondary] = useCSSVariable([
    '--color-f1-background',
    '--color-f1-foreground',
    '--color-f1-border',
    '--color-f1-background-secondary',
  ]);

  const asString = (value: string | number | undefined): string => {
    if (typeof value === 'string') return value;
    if (typeof value === 'number') return String(value);
    return '#000000';
  };

  const themes = [
    { name: 'system' as const, label: 'System', icon: '⚙️' },
    { name: 'light' as const, label: 'Light', icon: '☀️' },
    { name: 'dark' as const, label: 'Dark', icon: '🌙' },
  ];

  const activeTheme = hasAdaptiveThemes ? 'system' : theme;

  return (
    <View 
      className="p-2 rounded-lg border"
      style={{
        backgroundColor: asString(f1BackgroundSecondary),
        borderColor: asString(f1Border),
      }}
    >
      <View className="flex-row gap-1.5">
        {themes.map((t) => {
          const isActive = activeTheme === t.name;
          return (
            <Pressable
              key={t.name}
              onPress={() => Uniwind.setTheme(t.name)}
              className={`
                flex-1 px-2 py-1.5 rounded-lg items-center
                ${isActive ? 'bg-blue-500' : ''}
              `}
              style={{
                backgroundColor: isActive ? '#3b82f6' : asString(f1Background),
                borderWidth: isActive ? 0 : 1,
                borderColor: asString(f1Border),
              }}
            >
              <Text className="text-lg mb-0.5">{t.icon}</Text>
              <Text
                className="text-xs font-medium"
                style={{
                  color: isActive ? '#ffffff' : asString(f1Foreground),
                }}
              >
                {t.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
};

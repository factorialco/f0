// Re-export Expo Router entry point
// This file exists to satisfy react-native-builder-bob validation
// while maintaining compatibility with Expo Router development
// Import the actual expo-router entry-classic to avoid circular resolution
// when Metro resolves 'expo-router/entry'
import "expo-router/entry-classic";

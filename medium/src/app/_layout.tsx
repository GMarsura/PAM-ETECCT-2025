import '../styles/global.css';
import { Slot } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function RootLayout() {
  return <Slot />;
}

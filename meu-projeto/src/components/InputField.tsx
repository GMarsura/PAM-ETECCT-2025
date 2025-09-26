// components/InputField.tsx
import React from "react";
import { TextInput, StyleSheet, TextInputProps, View } from "react-native";

type InputFieldProps = TextInputProps & {
  value: string;
  onChangeText: (text: string) => void;
};

export const InputField: React.FC<InputFieldProps> = ({ value, onChangeText, ...props }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor="#999"
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 8,
    fontSize: 16,
  },
});
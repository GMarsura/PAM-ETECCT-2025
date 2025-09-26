import React from "react";
import { SafeAreaView, ScrollView, Text } from "react-native";
import { LoginForm } from "./LoginForm";
import { CadastroForm } from "./CadastroForm";
import { useState } from "react";

export default function Index() {
  const [message, setMessage] = useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <LoginForm setMessage={setMessage}/>
        <CadastroForm setMessage={setMessage}/>

        <Text>{message}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}
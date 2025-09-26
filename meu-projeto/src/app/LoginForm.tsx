// screens/LoginForm.tsx
import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { InputField } from "../components/InputField";
import axios from 'axios';

interface LoginFormProps {
  setMessage: (message: string) => void; // setMessage recebe uma string
}

export const LoginForm: React.FC<LoginFormProps> = ({ setMessage }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async() => {
    const body = {
      email,
      password
    };

    try {
      const result = await axios.post('http://localhost:4000/api/users/login', body);
      const data = result.data;
      const user = data.user;
      
      alert(`Bem vindo: ${user.name}`)
    } catch (error) {
      alert(`credenciais invalidas`)
      console.log('Erro ao logar')
      console.log('erro ', error)
    }

    Alert.alert("Login JSON", JSON.stringify(body, null, 2));
    console.log("Login JSON:", body);
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <Button title="Entrar" onPress={handleSubmit} />
    </View>
  );
};
// screens/CadastroForm.tsx
import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { InputField } from "../components/InputField";
import axios from 'axios';

interface LoginFormProps {
  setMessage: (message: string) => void; // setMessage recebe uma string
}


export const CadastroForm: React.FC<LoginFormProps> = ({ setMessage }) => {
  const [name, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [birthDate, setBirthDate] = useState("");
  


 const handleSubmit = async () => {
    const body = {
      name,
      email,
      phone,
      password,
      birthDate
      
    };

    try {
      const result = await axios.post('http://localhost:4000/api/users/signup', body)
    const data = result.data;
    alert(data.success ? "cadastrado com sucesso" : "erro ao cadastrar")
    console.log("Cadastro JSON:", data);

    setMessage('Usuario Cadastrado com sucesso')
    } catch (error) {
      setMessage(`error: ${error}
        `);
      console.log('error' ,error)
      alert("erro ao cadastrar")
    }

    
  };

  return (
    <View style={{ padding: 20 }}>
      <InputField placeholder="Nome" value={name} onChangeText={setNome} />
      <InputField placeholder="Email" value={email} onChangeText={setEmail} />
      <InputField placeholder="phone" value={phone} onChangeText={setPhone}/>
      <InputField placeholder="birthDate" value={birthDate} onChangeText={setBirthDate}/>
      <InputField placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      
      <Button title="Cadastrar" onPress={handleSubmit} />

    </View>
  );
};
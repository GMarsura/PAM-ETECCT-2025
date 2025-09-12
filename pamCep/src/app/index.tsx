import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Index() {
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');

  const buscarCEP = async () => {
    if (!cep) return Alert.alert('Digite um CEP');

    try {
      const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
      if (data.erro) {
        Alert.alert('CEP não encontrado');
        return;
      }

      setRua(data.logradouro || '');
      setBairro(data.bairro || '');
      setCidade(data.localidade || '');
      setEstado(data.uf || '');
    } catch (err) {
      Alert.alert('Erro ao buscar CEP');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Input label="CEP" value={cep} onChangeText={setCep} />
        <Button title="Buscar CEP" onPress={buscarCEP} />

        <Input label="Rua" value={rua} onChangeText={setRua} />
        <Input label="Número" value={numero} onChangeText={setNumero} />
        <Input label="Bairro" value={bairro} onChangeText={setBairro} />
        <Input label="Cidade" value={cidade} onChangeText={setCidade} />
        <Input label="Estado" value={estado} onChangeText={setEstado} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 20 },
});

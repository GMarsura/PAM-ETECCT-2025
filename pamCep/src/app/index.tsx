import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Alert, ScrollView, Text, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import axios from 'axios';
import Input from '../components/Input';
import Button from '../components/Button';

export default function Index() {
  const [nome, setNome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [cep, setCep] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [isVisible, setIsVisible] = useState(false);

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

  const salvar = () => {
    setIsVisible(true);
  };

  const fecharCard = () => {
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Detectar toque fora da área do card */}
      <TouchableWithoutFeedback onPress={fecharCard}>
        <View style={styles.content}>
          <ScrollView contentContainerStyle={styles.scrollContent}>
            <Input label="NOME COMPLETO" value={nome} onChangeText={setNome} />
            <Input label="DATA DE NASCIMENTO" value={dataNasc} onChangeText={setDataNasc} />
            <Input label="ESTADO CIVIL" value={estadoCivil} onChangeText={setEstadoCivil} />
            <Input label="CEP" value={cep} onChangeText={setCep} />
            <Button title="BUSCAR CEP" onPress={buscarCEP} />
            <Input label="Rua" value={rua} onChangeText={setRua} />
            <Input label="Número" value={numero} onChangeText={setNumero} />
            <Input label="Bairro" value={bairro} onChangeText={setBairro} />
            <Input label="Cidade" value={cidade} onChangeText={setCidade} />
            <Input label="Estado" value={estado} onChangeText={setEstado} />
            <Button title="SALVAR" onPress={salvar} />

            {/* Exibe as informações quando clicado em "SALVAR" */}
            {isVisible && (
              <ScrollView style={styles.card}>
                <Text style={styles.cardText}>{`Nome: ${nome}`}</Text>
                <Text style={styles.cardText}>{`Data de Nascimento: ${dataNasc}`}</Text>
                <Text style={styles.cardText}>{`Estado Civil: ${estadoCivil}`}</Text>
                <Text style={styles.cardText}>{`CEP: ${cep}`}</Text>
                <Text style={styles.cardText}>{`Rua: ${rua}`}</Text>
                <Text style={styles.cardText}>{`Número: ${numero}`}</Text>
                <Text style={styles.cardText}>{`Bairro: ${bairro}`}</Text>
                <Text style={styles.cardText}>{`Cidade: ${cidade}`}</Text>
                <Text style={styles.cardText}>{`Estado: ${estado}`}</Text>
              </ScrollView>
            )}
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  scrollContent: {
    height: "auto",
    paddingBottom: 100, // Garante que o ScrollView tenha espaço suficiente
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";

export default function App() {
  const [alcool, setAlcool] = useState(0.0);
  const [gasolina, setGasolina] = useState(0.0);
  const [resultado, setResultado] = useState(null);

  const verificarCombustivel = () => {
    const valorAlcool = parseFloat(alcool);
    const valorGasolina = parseFloat(gasolina);

    if (isNaN(valorAlcool) || isNaN(valorGasolina) || valorGasolina === 0) {
      setResultado(
        "Por favor, insira valores válidos para ambos os combustíveis."
      );
      return;
    }

    const divisao = valorAlcool / valorGasolina;
    console.log(valorAlcool, valorGasolina, divisao);

    /* 4.10 e 5.90 -> álcool */
    /* 4.90 e 5.90 -> gasolina */

    if (divisao < 0.7) {
      setResultado("O álcool é a melhor opção!");
    } else {
      setResultado("A gasolina é a melhor opção!");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.titulo}>Qual Combustível Abastecer?</Text>

      <Text style={styles.label}>Valor do Álcool (por litro)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 4.10"
        keyboardType="numeric"
        onChangeText={setAlcool}
        placeholderTextColor="#787878ff" // Verde
      />

      <Text style={styles.label}>Valor da Gasolina (por litro)</Text>
      <TextInput
        style={styles.input}
        placeholder="Ex.: 5.90"
        keyboardType="numeric"
        onChangeText={setGasolina}
        placeholderTextColor="#787878ff" // Verde
      />

      <TouchableOpacity style={styles.button} onPress={verificarCombustivel}>
        <Text style={styles.buttonText}>Verificar</Text>
      </TouchableOpacity>

      {resultado && <Text style={styles.resultado}>{resultado}</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#ffffff",
  },
  titulo: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#3c97ffff",
    marginVertical: 30,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#787878ff",
    borderWidth: 2,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 10,
    color: "#000",
  },
  label: {
    width: "100%",
    marginBottom: 5,
    textAlign: "left",
    color: "#787878ff"
  },
  button: {
    width: "100%",
    backgroundColor: "#3c97ffff", 
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  resultado: {
    marginTop: 20,
    color: "#3c97ffff", 
    fontSize: 20,
    textAlign: "center",
  },
  imagemContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  imagem: {
    width: 300,
    height: 300, 
    resizeMode: "contain",
  },
  gasolinaTexto: {
    position: "absolute",
    top: 120, 
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
});

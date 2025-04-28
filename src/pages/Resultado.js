import { View, Text, StyleSheet } from 'react-native';

export default function ResultScreen({ route }) {
  const { media } = route.params;

  const classificarConsumo = (media) => {
    if (media > 12) return 'A';
    if (media > 10) return 'B';
    if (media > 8) return 'C';
    if (media > 4) return 'D';
    return 'E';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={styles.text}>Classificação: {classificarConsumo(media)}</Text>
      <Text style={styles.grandeText}>Não esqueça, grêmio NÃO tem mundial!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  grandeText: {
    fontSize: 24,
    marginTop: 30,
    color: 'red',
    fontWeight: 'bold',
  }
});

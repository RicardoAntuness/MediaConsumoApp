import { View, Text, StyleSheet, Image } from 'react-native';
import mediaImg from './../images/media.png'; 

export default function ResultScreen({ route }) {
  const { media } = route.params;

  const classificarConsumo = (media) => {
    if (media > 12) return 'A';
    if (media > 10) return 'B';
    if (media > 8) return 'C';
    if (media > 4) return 'D';
    return 'E';
  };

  const classificacao = classificarConsumo(media);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Média de Consumo: {media.toFixed(2)} Km/L</Text>
      <Text style={[styles.text, styles.grandeText]}>
        Classificação: {classificacao}
      </Text>

      <Image source={mediaImg} style={styles.imagem} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  grandeText: {
    fontSize: 24,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  imagem: {
    width: 300,
    height: 200,
    marginTop: 30,
  },
});

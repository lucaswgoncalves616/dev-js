import { ScrollView, Image, StyleSheet, Text, TextInput, View} from 'react-native';
import { SafeAreaView } from "react-native-safe-area-context";
import api from './src/services/api';
import {useEffect, useState} from "react";
import { globalStyles } from "./src/styles/globalStyles";

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [pesquisa, setPesquisa] = useState('');

  useEffect(() => {
    async function carregarFilmes() {
      if(pesquisa.trim() !== '') {
        try {
          const response = await api.get(pesquisa.replace(' ', '%20'));
          setFilmes(response.data);
        } catch (e) {
          console.log('Erro: ' + e);
        }
      } else {
        setFilmes([]);
      }
    }
    carregarFilmes();
  }, [pesquisa]);

  const handlePesquisa = (texto) => {
    setPesquisa(texto);
  }

  return (
      <SafeAreaView style={globalStyles.container}>
        <TextInput style={globalStyles.input}
                   placeholder='Digite o nome do filme'
                   value={pesquisa}
                   onChangeText={handlePesquisa}
        />
        <Text style={globalStyles.titulo}>Resultado(s) da pesquisa</Text>

        <ScrollView>
          {filmes.map(( filme ) => (
              <View key={ filme.show.id} style={globalStyles.card}>
                {filme.show.image && (
                    <Image
                        source={{ uri: filme.show.image.medium }}
                        style={globalStyles.imagem}
                        resizeMode='cover'
                    />
                )}

                <View style={globalStyles.infoContainer}>
                  <Text style={globalStyles.tituloFilme}>
                    {filme.show.name}
                  </Text>
                  <Text style={globalStyles.url}>
                    {filme.show.url}
                  </Text>
                </View>
              </View>
          ))}
        </ScrollView>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StyleSheet, View, FlatList, Text } from 'react-native';
import {Header} from './src/Components/Header';
import React, { useState } from "react";
import AdicionarItem from './src/Components/AdicionarItem';
import ItensListados from './src/Components/ItensListados';

export default function Segunda() {

  const [lista, setLista] = useState([
  {texto: "Varrer a casa", key: '1'},
  {texto: "Dobrar a roupa", key: '2'},
  {texto: "Arrumar o quarto", key: '3'},
  {texto: "Lavar os pratos", key: '4'},
  ]);

  const apertarItem = (key) => {
    setLista(
      (prevLista) => {
        return prevLista.filter(item => item.key!== key);
      }
    )
  };

  const submeterInformacao = (texto) => {
    setLista((prevLista) => {
        return [
          {texto: texto, key: Math.random().toString()},
          ...prevLista
        ];
      }
    )
  };

  return (
    <View style={styles.container}>

      <View style={styles.cabeçalho}>
      <Header/>
      </View>

      <View style={styles.conteudo}>

        <AdicionarItem funcao={submeterInformacao}/>
        
        <View style={styles.estiloLista}>
          <FlatList 
          data={lista}
          renderItem={({item}) => (
            <ItensListados props ={item} funcao={apertarItem}/>
          )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cabeçalho: {
    backgroundColor: 'lightgreen',
  },
  
  conteudo: {
    padding: 40,
  },

});

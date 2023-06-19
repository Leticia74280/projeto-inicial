import { StyleSheet, View, FlatList, Text } from 'react-native';
import {Header} from '../src/Components/Header';
import React, { useState } from "react";
import Axios from "axios";
import AdicionarItem from '../src/Components/AdicionarItem';
import ItensListados from '../src/Components/ItensListados';

export default function App() {
  const submeterInformacao = (texto) => {
    Axios.post(
      'http://192.168.100.51:3001/item', {item: texto}
    )}

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

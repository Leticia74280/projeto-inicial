import { StyleSheet, View, FlatList, Text } from 'react-native';
import {Header} from './src/Components/Header';
import React, { useState } from "react";
import Domingo from './Domingo';
import Segunda from './Segunda';
import Terca from './Terca';
import Quarta from './Quarta';
import Quinta from './Quinta';
import Sexta from './Sexta';
import Sabado from './Sabado';
import AdicionarItem from './src/Components/AdicionarItem';
import ItensListados from './src/Components/ItensListados';

export default function App() {

    <><Button
        title="Domingo"
        onPress={() => {
            navigation.navigate(
                <Domingo />
            );
        } } /><Button
            title="Segunda"
            onPress={() => {
                navigation.navigate(
                    <Segunda />
                );
            } } /><Button
            title="Terça"
            onPress={() => {
                navigation.navigate(
                    <Terca />
                );
            } } /><Button
            title="Quarta"
            onPress={() => {
                navigation.navigate(
                    <Quarta />
                );
            } } /><Button
            title="Quinta"
            onPress={() => {
                navigation.navigate(
                    <Quinta />
                );
            } } /><Button
            title="Sexta"
            onPress={() => {
                navigation.navigate(
                    <Sexta />
                );
            } } /><Button
            title="Sábado"
            onPress={() => {
                navigation.navigate(
                    <Sabado />
                );
            } } /></>

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

//Código Aplicativo

//Página de Login

import React, {useState} from 'react';

import { Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function App() {

  const [botao, setBotao1] = useState(true);

  const clicarbt = () => {

    setBotao1(!botao)

    }

  return (

    <View style={styles.container1}>

      <Text style={styles.login}>Login</Text>

      <View style = {styles.box}> 

      <Entypo name="mail" size={40} color="black" />

      <TextInput 

        multiline

        style = {styles.email} 

        placeholder="Digite seu endereço de e-mail"

        onChangeText={(textoDigitado) => console.log(textoDigitado)}>

      </TextInput>

      </View>

      <View style = {styles.box}> 

      <Entypo name="key" size={40} color="black" />

      <TextInput 

        style = {styles.senha} 

        placeholder="Digite sua senha"

        onChangeText={(textoDigitado) => console.log(textoDigitado)}>

      </TextInput>

      </View>

      <Button 

    title = 'Login'

    onPress = {clicarbt}

    />

      {botao ?

      <Text></Text>

      :

      <Text>Vamos entrando!</Text>

      }

    </View>

  );

}

const styles = StyleSheet.create({

  container1: {

    flex: 1,

    backgroundColor: 'white',

    alignItems:'center',

    justifyContent:'center',

  },

  email:{

    borderWidth:1,

    fontSize: 20,

    padding: 20,

    width: '70%',

  },

  box:{

    borderWidth:1,

    flexDirection:'row',

    alignItems:'center',

  },

  login:{

    fontSize:40,

    

  },

  senha:{

    borderWidth:1,

    fontSize: 20,

    padding: 20,

    width: '70%',

  },

});

//Página inicial

import React, {useState} from 'react';

import { Button, StyleSheet, Text, TextInput, View, ScrollView} from 'react-native';

import { Entypo } from '@expo/vector-icons';

export default function App() {

  return (

    <ScrollView>

    <View style={styles.container1}>

      <View style={styles.Compras}>

      <Entypo name="shopping-cart" size={24} color="black" />

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View><View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

      <View style={styles.caixa}>

      <View style={styles.Icones}>

      <Entypo name="images" size={40} color="black" />

      </View>

        <View style={styles.Boldtext2}>

          <Text>Produto</Text>

        </View>

      </View>

    </View>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  container1: {

    flex: 1,

    backgroundColor: 'white',

  },

  Compras:{

    alignItems:'flex-start',

    alignItems:'flex-end',

  },

  caixa: {

    paddingTop :20,

    backgroundColor: 'lightgrey',

    borderRadius: 8,

    alignItems:'center',

    flexDirection:'row',

    justifyContent:'space-evenly',

  },

  Boldtext2: {

    flex: 1,

  },

});

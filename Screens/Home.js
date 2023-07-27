import React from 'react';
import { FlatList, View, Image, Text, Pressable, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetalhesProduto1 from './DetalhesProduto1';
import DetalhesProduto2 from './DetalhesProduto2';
import DetalhesProduto3 from './DetalhesProduto3';
const Stack = createStackNavigator();


const DATA = [
  {
    id: '1',
    image: 'https://th.bing.com/th/id/OIP.uhoykZAWitRNskPoLiyWzQHaJ4?pid=ImgDet&rs=1',
    title: 'Produto 1',
    screen: 'DetalhesProduto1', // Tela a ser exibida ao pressionar o botão para o Produto 1
  },
  {
    id: '2',
    image: 'https://th.bing.com/th/id/OIP.uhoykZAWitRNskPoLiyWzQHaJ4?pid=ImgDet&rs=1',
    title: 'Produto 2',
    screen: 'DetalhesProduto2', // Tela a ser exibida ao pressionar o botão para o Produto 2
  },
  {
    id: '3',
    image: 'https://th.bing.com/th/id/OIP.uhoykZAWitRNskPoLiyWzQHaJ4?pid=ImgDet&rs=1',
    title: 'Produto 3',
    screen: 'DetalhesProduto3', // Tela a ser exibida ao pressionar o botão para o Produto 3
  },
];



const Item = ({ item, onPress }) => {
  // console.log('Tela a ser navegada:', item.screen);
  return (
    <View style={styles.item}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>

      <Pressable style={styles.button} onPress={() => onPress(item.screen)}>
        <Text style={styles.buttonText}>Ver detalhes</Text>
      </Pressable>
    </View>
  );
};

const Home = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <Item item={item} onPress={(screen) => navigation.navigate(screen)} />
  );

  

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="DetalhesProduto1" component={DetalhesProduto1} />
        <Stack.Screen name="DetalhesProduto2" component={DetalhesProduto2} />
        <Stack.Screen name="DetalhesProduto3" component={DetalhesProduto3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  flatListContent: {
    paddingHorizontal: 10,
  },
  item: {
    marginRight: 10,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#096dd9',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default Home;

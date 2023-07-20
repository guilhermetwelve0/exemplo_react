import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView, Image } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>This is the Home screen</Text>

        {/* Adicione seus produtos dentro da ScrollView */}
        <View style={styles.productContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: 'https://th.bing.com/th/id/OIP.uhoykZAWitRNskPoLiyWzQHaJ4?pid=ImgDet&rs=1' }}
          />
          <Text style={styles.productTitle}>Vestido de Festa</Text>
        </View>

        <View style={styles.productContainer}>
          <Image
            style={styles.productImage}
            source={{ uri: 'https://blog.keydesign.com.br/wp-content/uploads/2018/07/roupa.jpg' }}
          />
          <Text style={styles.productTitle}>Roupa de Casamento</Text>
        </View>

        {/* Botões existentes no código anterior */}
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Messages')}>
          <Text>Go to Messages</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.toggleDrawer()}>
          <Text>Toggle Side Nav</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#09f',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  productContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  productImage: {
    width: 200,
    height: 200,
  },
  productTitle: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default Home;

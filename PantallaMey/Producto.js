import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.backButton}><MaterialIcons name="skateboarding" size={24} color="black" /> Regresar</Text>
      </View>
      <View style={styles.productContainer}>
        <Image style={styles.productImage} source={{ uri: 'https://www.sanmaskateshop.cl/wp-content/uploads/2022/04/bolt-12.jpg' }} />
        <Text style={styles.availability}>Disponible</Text>
      </View>
      <Text style={styles.productName}>7/8 Bolts</Text>
      <Text style={styles.brand}>Thunder</Text>
      <Text style={styles.price}>$15.99</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => alert('Producto agregado')}>
        <Text style={styles.buttonText}>Agregar a la bolsa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  backButton: {
    fontSize: 18,
    color: 'blaxk',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
    justifyContent: 'center', 
  },
  productImage: {
    width: 200, 
    height: 200, 
    marginRight: 20,
    borderRadius: 10, 
    left:50
  },
  availability: {
    fontSize: 16,
    color: 'grey',
    marginTop:243
  },
  productName: {
    fontSize: 22, 
    fontWeight: 'bold',
    right:1
  },
  brand: {
    fontSize: 18,
    color: '#555',
    right:1
  },
  price: {
    fontSize: 24, 
    color: '#000',
    marginVertical: 10,
    left:219
  },
  button: {
    backgroundColor: '#5acdc2',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
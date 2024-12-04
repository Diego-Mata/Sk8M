import { Text, View, StyleSheet, FlatList, Image } from "react-native";
import { useNavigation } from '@react-navigation/native';  // Importamos el hook de navegación

export default function Navigation() {
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      img: require('./Imagen2.png'),
      title: "Monument to Salavat Yulaev",
      screen: 'Likes',  // Pantalla de MonumentScreen
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      img: require('./Imagen1.png'),
      title: "Krasnyy Klyuch Spring",
      screen: 'Shop',  // Pantalla de SpringScreen
    },
  ];

  const navigation = useNavigation();  // Hook de navegación

  // Función para manejar la navegación
  const handlePress = (screen) => {
    navigation.navigate(screen);  // Navegar a la pantalla correspondiente
  };

  return (
    <View style={styles.main}>
      <View>
        <Text style={styles.text1}>Popular</Text>
      </View>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <Item img={item.img} title={item.title} onPress={() => handlePress(item.screen)} />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const Item = ({ img, title, onPress }) => (
  <View style={styles.item}>
    <View style={styles.imageContainer}>
      <Image source={img} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.buttonContainer}>
      <Text onPress={onPress} style={styles.button}>Go to {title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  text1: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 40,
  },
  item: {
    marginTop: 15,
    marginLeft: 20,
    borderRadius: 20,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    width: 200,
    height: 300,
    borderRadius: 25,
  },
  image: {
    width: '105%',
    height: '100%',
    borderRadius: 25,
  },
  title: {
    position: 'absolute',
    bottom: 50,
    left: 20,
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 60,
  },
  buttonContainer: {
    marginTop: 10,
  },
  button: {
    fontSize: 16,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
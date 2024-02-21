import React, { useState } from "react";
import { SafeAreaView, Text, Image, FlatList, StyleSheet, View } from "react-native";

const App = () => {
  const moviesList = [
    {
      id: 1,
      name: "Transformers: La Venganza de los Caídos",
      director: "Michael Bay",
      url: "https://es.web.img2.acsta.net/medias/nmedia/18/68/50/66/19123430.jpg",
    },
    {
      id: 2,
      name: "Cars",
      director: "John Lasseter",
      url: "https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_FMjpg_UX1000_.jpg",
    },
    {
      id: 3,
      name: "The Avengers",
      director: "Josh Whedon",
      url: "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    },
    {
      id: 4,
      name: "El Laberinto del Fauno",
      director: "Guillermo del Toro",
      url: "https://pics.filmaffinity.com/El_laberinto_del_fauno-222302534-large.jpg",
    },
    {
      id: 5,
      name: "La La Land: ciudad de sueños",
      director: "Damien Chazelle",
      url: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    },
    {
      id: 6,
      name: "Bastardos sin Gloria",
      director: "Martin Scorcese",
      url: "https://www.gaceta.udg.mx/wp-content/uploads/2010/02/601032.jpg",
    },
    {
      id: 7,
      name: "Titanic",
      director: "James Cameron",
      url: "https://www.abc.es/media/peliculas/000/044/428/titanic-1.jpg",
    },
    {
      id: 8,
      name: "En donde viven los mounstros",
      director: "Spike Jonze",
      url: "https://es.web.img3.acsta.net/medias/nmedia/18/69/80/75/19167746.jpg",
    },
    {
      id: 9,
      name: "The lighthouse",
      director: "Robert Eggers",
      url: "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    },
    {
      id: 10,
      name: "Her",
      director: "Spike Jonze",
      url: "https://www.ecartelera.com/carteles/6800/6870/002_m.jpg",
    },
    {
      id: 11,
      name: "Pretty Woman",
      director: "Guillermo del Toro",
      url: "https://c8.alamy.com/compes/2jhdety/richard-gere-julia-roberts-poster-pretty-woman-1990-2jhdety.jpg",
    },
  ];

  const [movies, setMovies] = useState(moviesList);

  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
      <Text style={styles.title}>
        Bienvenido a la aplicación de películas 🍿
      </Text>
      <FlatList
        style={styles.flatListContainer}
        data={movies}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.movieContainer}>
            <Image style={styles.image} source={{ uri: item.url }} />
            <Text style={styles.textName}>{item.name}</Text>
            <Text style={styles.textDirector}>Director: {item.director}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111", // Fondo oscuro
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff", // Texto blanco
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
  },
  movieContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 10, // Bordes redondeados
    marginBottom: 10,
  },
  textName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff", // Texto blanco
    textAlign: "center",
  },
  textDirector: {
    fontSize: 16,
    color: "#bbb", // Texto gris claro
    textAlign: "center",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default App;

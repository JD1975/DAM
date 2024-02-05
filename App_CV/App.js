// App.js
import React from "react";
import { ScrollView, View, Text, Image, StyleSheet } from "react-native";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.profileContainer}>
        <Text> </Text>
        <Text> </Text>

      <View style={styles.imageprofile}>
        <Image
          source={require("./rsc/perfil.jpg")}
          style={styles.profileImage}
        />
      </View>

        <Text> </Text>
        <View style={[styles.Divider]}></View>


        <View style={styles.profile}>
          <View style={styles.profileText}>
            <Text style={styles.name}>Duarte Fregoso Josafat Axel</Text>
            <Text> </Text>
            <Text style={styles.detail1}>
              Desarrollador de aplicaciones móviles
            </Text>
            <Text style={styles.detail1}>Querétaro, Querétaro</Text>
            <Text> </Text>
            <Text style={[styles.detail, styles.description]}>
              Soy un estudiante en progreso a convertirse en un ingeniero de
              software, con mis estudios y esfuerzo espero poder desenvolverme
              en el mundo de la programación y lograr grandes cosas
            </Text>
            <Text> </Text>
            <Text style={styles.detail}>+52 442 *** ** **</Text>
            <Text style={styles.detail}>fosa.duarte123@gmail.com</Text>
          </View>
        </View>
      </View>

      <View style={styles.whiteSection}>
        <Text style={styles.sectionTitle}>Educación</Text>
        <Text style={styles.highlight}>
          Universidad Autónoma de Querétaro - UAQ
        </Text>
        <Text>2020 - 2026</Text>
        <Text>Ingeniero en software</Text>
        <Text> </Text>
        <Text style={styles.highlight}>Curso Oracle ONE</Text>
        <Text>2022 - 2023</Text>
        <Text>Bases de programación</Text>
        <Text> </Text>
        <Text style={styles.highlight}>Curso ALURA</Text>
        <Text>2022 - 2023</Text>
        <Text>Bases de programación de paginas web</Text>

        <Text> </Text>
        <Text style={styles.sectionTitle}>Experiencia</Text>
        <Text style={styles.highlight}>Proyectos escolares</Text>
        <Text>
          No me dan alguna válidez oficial, son las bases que sostienen mi
          conocimiento
        </Text>
        <Text></Text>
        <Text style={styles.highlight}>Restaurante Emilia</Text>
        <Text>
          Aunque no tiene nada que ver con el mundo de la programación, me ha
          ayudado a desarrollar otro tipo de habilidades
        </Text>
      </View>

      <View style={styles.greenSection}>
        <Text style={styles.sectionTitleWhite}>Habilidades</Text>
        <Text></Text>
        <Text style={styles.subTitle}>Tecnologías</Text>
        <View style={[styles.Divider]}></View>
        <Text style={styles.whiteText}>- Node.js</Text>
        <Text style={styles.whiteText}>- JavaScript</Text>
        <Text style={styles.whiteText}>- CSS</Text>
        <Text style={styles.whiteText}>- HTML</Text>
        <Text style={styles.whiteText}>- Java</Text>
        <Text style={styles.whiteText}>- C++</Text>
        <Text style={styles.whiteText}>- Python</Text>
        <Text style={styles.whiteText}>- R</Text>
        <Text></Text>

        <Text style={styles.subTitle}>Idiomas</Text>
        <View style={[styles.Divider]}></View>
        <Text style={styles.whiteText}>Español</Text>
        <Text style={styles.whiteText}>Inglés</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6B7BF0",
  },
  imageprofile:{
    paddingLeft: 15,
  },
  profileContainer: {
    paddingLeft: 10,
    padding: 20,
    backgroundColor: "#6B7BF0", // Fondo verde para todo el contenedor
  },
  profile: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileText: {
    marginLeft: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  detail1: {
    color: "white",
    fontSize: 20,
    marginBottom: 5,
    fontStyle: "bold",
  },
  detail: {
    color: "white",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontStyle: "italic",
  },
  whiteSection: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6B7BF0",
    marginBottom: 10,
  },
  highlight: {
    fontWeight: "bold",
    color: "black", // Texto resaltado verde
  },
  greenSection: {
    backgroundColor: "#6B7BF0",
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  sectionTitleWhite: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginBottom: 10,
  },
  subTitle:{
    color: "white",
    fontSize: 20,
    marginBottom: 5,
  },
  whiteText: {
    color: "white",
    fontSize: 15,
    marginBottom: 5,
  },
  Divider: {
    height: 2,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

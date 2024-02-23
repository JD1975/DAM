import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, SafeAreaView, Image, StyleSheet, ImageBackground} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import CloudyIcon from './rsc/nublado.png';
import { useFonts } from 'expo-font';


const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeatherData = async () => {
    const API_KEY = '4bc791baa7a64791b64191828242102';
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=1&aqi=yes&alerts=no`,
      );
      const data = await res.json();
      // console.log('Datos del clima:', data); // Agrega esta línea para imprimir los datos

      setWeatherData(data);
      navigation.navigate('WeatherDetails', { weatherData: data });
    } catch (err) {
      console.error(err.message);
      setError(err);
    }
  };

  return (
    <LinearGradient colors={['#6d7ef2', '#bcc3fa']} style={styles.container}>
      <SafeAreaView style={styles.overlay}>
        <Image source={CloudyIcon} style={styles.weatherIcon} />
        <Text style={styles.title}>Welcome to{'\n'}Weather App!</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your location"
          placeholderTextColor="#666"
          value={city}
          onChangeText={(text) => {
            setCity(text);
          }}
        />
        <TouchableOpacity style={styles.button} onPress={fetchWeatherData}>
          <Text style={styles.weatherText}>Get Weather 🌡️</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const determineGradientColors = (condition) => {
  switch (condition) {
    case 'Rain':
      return ['#1f4162', '#576675']; // Tonos azules oscuros para lluvia
    case 'Clear' :
      return ['#87ceeb', '#0073e6']; // Tonos azules para cielo despejado
    case 'Clear ':
      return ['#87ceeb', '#0073e6']; // Tonos azules para cielo despejado
    case 'Patchy light snow':
      return ['#87CEEB', '#ffffff']; // Tonos de azul claro para nieve ligera
    case 'Overcast ' || 'Overcast':
      return ['#34495e', '#bdc3c7'];
    case 'Cloudy':
      return ['#808080', '#B0B0B0']; // Tonos grises para nublado
    case 'Partly cloudy':
      return ['#92a8d1', '#ffffff']; // Tonos azul claro para parcialmente nublado
    case 'Sunny':
      return ['#fff000', '#fff7ff']; // Tonos amarillos para soleado
    case 'Fog':
      return ['#bdc3c7', '#ffffff'];
    case 'Windy':
      return ['#d3d3d3', '#f5f5f5']; // Tonos gris claro para mucho viento
    case 'Light rain':
      return ['#b3cde0', '#6a84a3']; // Tonos de gris azulado para lluvia ligera
    case 'Mist':
      return ['#d9d9d9', '#a6a6a6']; // Tonos grises suaves para la niebla
    case 'Light sleet showers':
      return  ['#87CEEB', '#B0C4DE'];      
    case 'Patchy rain nearby':
      return ['#4d4d4d', '#1a75ff']; // Tonos de gris oscuro con un toque de azul para la lluvia intermitente
      
    default:
      return ['#6d7ef2', '#bcc3fa']; // Por defecto, usa los colores predeterminados
  }
};


const WeatherDetailsScreen = ({ route }) => {
  const { weatherData } = route.params;

  return (
    <LinearGradient colors={determineGradientColors(weatherData.current.condition.text)} style={styles.container2}>
      <SafeAreaView>

        <Text style = {styles.textCity}>{weatherData.location.name},{'\n'+weatherData.location.country}</Text>
        <Text style = {styles.textTemp}>{weatherData.current.temp_c}°C</Text>
        
        <View style={styles.weatherContainer}>
          <Text style={styles.weatherText2}>{weatherData.current.condition.text}</Text>
          <Text style={styles.tempCelsius}>{weatherData.forecast.forecastday[0].day.maxtemp_c}°<Text style={styles.divisor}>/</Text>{weatherData.forecast.forecastday[0].day.mintemp_c}°</Text>
        </View>

        <Image
            source={{ uri: 'http:' + weatherData.current.condition.icon }}
            style={styles.weatherIcon2}
            onError={() => console.log('Error al cargar la imagen')}
          />
        
      </SafeAreaView>
    </LinearGradient>
  );
};

const App = () => {

  const [fontsLoaded] = useFonts({
    'IBM-Plex-Sans-Refular': require('./rsc/IBM_Plex_Sans/IBMPlexSans-Regular.ttf'),
    'IBM-Plex-Sans-Light': require('./rsc/IBM_Plex_Sans/IBMPlexSans-Light.ttf'),
    // Incluye todas las variantes de la fuente que necesites cargar
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>; // Puedes mostrar un indicador de carga mientras se cargan las fuentes
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="WeatherDetails" component={WeatherDetailsScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    flex: 1,
    alignItems: 'center',
    marginTop: 150,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 0,
    color: '#ffffff',
    fontFamily: 'IBM-Plex-Sans-Light',
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  weatherIcon: {
    width: 250,
    height: 200,
    marginBottom: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 15,
  },
  textInput: {
    textAlign: 'center',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginTop: 30,
    marginBottom: 20,
    width: 250,
    backgroundColor: '#ffffff',
    color: '#000000',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.9,
    shadowRadius: 6,
    elevation: 8,
  },
  button: {
    backgroundColor: '#4c68f2',
    width: 250,
    height: 45,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  weatherText: {
    color: '#ffffff',
    fontSize: 16,
    textAlign: 'center',
  },

  /* Inician los estilos de la sgunda screen - Weather Details */
  container2:{
    flex: 1,
  },
  textCity: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 100,
    color: 'white',
    textAlign: 'center',
  },
  textTemp: {
    color: 'white',
    fontSize: 120,
    textAlign: 'center',
  },
  tempCelsius: {
    color:'white',
    fontSize: 20, // Tamaño del texto del clima
  },
  divisor: {
    color: 'rgba(128, 128, 128, 0.5)', // Gris semitransparente (opacidad: 0.5)
  },
  weatherContainer: {
    flexDirection: 'row', // Para alinear los elementos en fila
    alignItems: 'center', // Para  verticalmente los elementos en el centro
    marginTop: 0, // Espacio superior
    justifyContent: 'center',
  },
  weatherIcon2: {
  alignSelf: 'center',
    marginTop: 50,
    width: 200, // Ancho de la imagen del clima
    height: 200, // Alto de la imagen del clima
  },
  weatherText2: {
    fontSize: 20, // Tamaño del texto del clima
    color: '#FFF', // Color del texto del clima
    marginRight: 5,
    justifyContent: 'center',


  },
});

export default App;

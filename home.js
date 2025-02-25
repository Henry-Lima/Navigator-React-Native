import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';  

export default function Home(props) {
    return (
        <SafeAreaView style={estilo.container}>
            <View style={estilo.principal}>
                    <Text style={estilo.titulo}>Mundo do programador</Text>
                    <Text>Dicas para um bom profissional</Text>
            </View>

            <View>
                <TouchableOpacity><Text style={estilo.Texto} onPress={()=> {props.navigation.navigate('Dica1')}}>Dica 1 - Boas Práticas</Text></TouchableOpacity>
                <TouchableOpacity><Text style={estilo.Texto} onPress={()=> {props.navigation.navigate('Dica2')}}>Dica 2 - Maquiavel</Text></TouchableOpacity>
            </View>   
        </SafeAreaView>
        
    );
}
const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },

      titulo: {
        fontWeight: 'bold',
        fontSize: 25,
      },

      textButton: {
        fontSize: 20,
      },

      principal: {
        alignItems: 'center',
        marginTop: -300,
        marginBottom: 150,
        backgroundColor: '#abcd',
      },

      Texto: {
        backgroundColor: '#abcd',
        fontSize: 15,
        marginBottom: 5,
      }
})
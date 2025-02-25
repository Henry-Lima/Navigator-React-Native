import {SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

export default function Dica2() {
    return(
        <SafeAreaView style={estilo.Container}>
            <View style={estilo.Principal}>
                <Text style={estilo.Titulo}>Dica 2</Text>
                <Text style={estilo.Subtitulo}>Maquiavel - O princípios</Text>
            </View>
            <View>
                <Text  style={estilo.Texto}>Em 1498, com 29 anos, entra para a política, exercendo o cargo de "Secretário da Segunda Chancelaria".
                Teve uma vasta carreira política, o qual ocupou alguns cargos, sendo, muitas vezes, indicado para realizar missões diplomáticas.
                Defensor dos ideais republicanos, sua teoria estava pautada nos princípios morais e éticos para a Política. Foi o primeiro a separar a política da ética com o intuito de estudar a cultura política como ela é realmente e não como ela deveria ser.
                Ademais, seus estudos estão baseados nos conceitos: união da teoria e da prática; empirismo e método indutivo; Estados imaginários Perfeitos e imutabilidade da natureza humana.
                A partir disso, em 1520, Maquiavel recebe o título de mais importante historiador de Florença. Em 1527, com a queda dos Médici, foi considerado um tirano e morre no dia 21 de junho de 1527.
                </Text>
                <View style={estilo.imgDiv}>
                    <Image style={estilo.img} resizeMode='contain' source={require('../assets/maqui.png')}></Image>
                </View>
            </View>   
        </SafeAreaView>
    );
}

const estilo = StyleSheet.create ({
    Container: {
        flex: 1,
        ImageBackground:'#f6f6',
    },

    Principal: {
        marginTop: 40,
        alignItems: 'center',
        backgroundColor: '#abcd',

    },

    Titulo: {
        fontSize: 25,
    },

    Subtitulo: {
        fontSize: 18,
    },

    Texto: {
        marginTop: 20,
        fontSize:15,
        textAlign: 'justify',
        marginInline: 2.
        
    },

    img: {
        width: 380,
        height: 300,
        
    },

    imgDiv: {   
        alignItems: 'center',
    }

});
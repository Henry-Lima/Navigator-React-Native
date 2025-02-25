import {SafeAreaView, StyleSheet, View, Text, Image } from 'react-native';

export default function Dica1() {
    return(
        <SafeAreaView style={estilo.Container}>
            <View style={estilo.Principal}>
                <Text style={estilo.Titulo}>Dica 1</Text>
                <Text style={estilo.Subtitulo}>Repertório de conhecimento sobre o Assunto</Text>
            </View>
            <View>
                <Text  style={estilo.Texto}>Com o avanço das tecnologias digitais, a palavra programação chega as rodas de conversa com um significado que já é antigo, mas que vem sendo discutido cada vez mais nos dias atuais. 
                    A palavra não se trata mais apenas do planejamento que você faz para as férias ou do rumo que dá ao dinheiro que sobra no final do mês, mas vai muito, muito além disso.
                    A programação que estamos falando aqui faz referência direta ao smartfone, tablet, notebook, ou qualquer outro aparelho eletrônico que você esteja utilizando neste exato momento para ler este texto. 
                    Isso porque, sem a programação com o seu sentido atual, você não conseguiria se comunicar facilmente com nenhuma dessas tecnologias.
                    Então, você já deve ter percebido que a programação tem um sentido bastante complexo quando ligada ao mundo tecnológico. 
                    Mas não se preocupe, pois neste texto te explicaremos exatamente o que é a programação, para que ela serve e como ela tem se 
                    tornado cada vez mais fundamental para o avanço das tecnologias digitais.
                </Text>
                <View style={estilo.imgDiv}>
                    <Image style={estilo.img} resizeMode='contain' source={require('../assets/prog.png')}></Image>
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
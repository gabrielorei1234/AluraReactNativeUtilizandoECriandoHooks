import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import estrela from '../assets/estrela.png';
import estrelaCinza from '../assets/estrelaCinza.png';
export default function Estrelas({
  quantidade: QuantidadeAntiga,
  editavel = true,
  grande = true,
}) {
  const [quantidade, setQuantidade] = useState(QuantidadeAntiga);
  const estilos = estilosFuncao(grande);

  const getImage = index => {
    if (index < quantidade) {
      return estrela;
    }
    return estrelaCinza;
  };

  const RenderEstrelas = () => {
    const listaEstrelas = [];
    for (let i = 0; i < 5; i++) {
      listaEstrelas.push(
        <TouchableOpacity key={i} onPress={() => setQuantidade(i + 1)}
        disabled={!editavel}>
          <Image style={estilos.estrela} source={getImage(i)} />
        </TouchableOpacity>,
      );
    }
    return listaEstrelas;
  };

  return (
    <View style={estilos.estrelas}>
      <RenderEstrelas />
    </View>
  );
}

const estilosFuncao = grande =>
  StyleSheet.create({
    estrela: {
      width: grande ? 36 : 12,
      height: grande ? 36 : 12,
      marginRight: 2,
    },
    estrelas: {
      flexDirection: 'row',
    },
  });

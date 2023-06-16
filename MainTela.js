import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const items = [
  {
    id: 1,
    name: 'Cimitarra',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShI-6xPbAyFIs0BtfWwgb1txPMwuL10puMoOEUC-_iGFlv7N1TD5TsHj2uYPDB0prY4rY&usqp=CAU',
    description: 'Lâmina curva de bom alcance. Não é efetivo para defesas por ser uma espada fina. \n Possui um poder de ataque físico de +5, e dá um bônus de agilidade de +2.'
  },
  {
    id: 2,
    name: 'Lança',
    image: 'https://i.pinimg.com/236x/62/c7/4d/62c74d5108db57da778b73148e9d4584.jpg',
    description: 'Tem um ótimo alcance, fazendo com que o portador consiga manter distância daquele que o ataca. \nÉ uma ótima arma defensiva também graças a sua grande extensão. \nPossui um poder de ataque físico de +3 que escala com a destreza do seu personagem.'
  },
  {
    id: 3,
    name: 'Crânio Mágico de Tasha',
    image: 'https://i0.wp.com/dmdave.com/wp-content/uploads/2019/01/skull-of-envy-andre-boos-717205726-1548001948804.jpg?fit=599%2C337&ssl=1',
    description: 'Um item mágico que uma vez foi portado por uma grande maga.\nPossui um poder de ataque mágico de +10. Porém, como tudo que é criado pela Tasha não tem um funcionamento adequado, \nvocê precisará fazer um teste de sanidade toda vez que usá-lo para lançar uma habilidade, seja ela ofensiva ou não.'
  },
  {
    id: 4,
    name: 'Espada de Diamante de Steve',
    image: 'https://cdn.shopify.com/s/files/1/3098/6414/products/402059_grande.jpg?v=1633627993',
    description: 'Um item mágico e encantado, utilizado por o grande herói das lendas do sul Steve para enfrentar o Dragão Negro do Vazio. \nAo empunhar, você ganha +10 de poder físico e +5 de poder mágico, porém ao desempunhá-la seu corpo sentirá toda a carga da espada e você precisará se recuperar com um descanso longo.'
  }
];

const Card = ({ item }) => {
  return (
    <View style={styles.card}>
      <Image source={item.image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{item.name}</Text>
      <Text style={styles.cardDescription}>{item.description}</Text>
      <TouchableOpacity style={styles.cardButton}>
        <Text style={styles.cardButtonText}>Propor Troca</Text>
      </TouchableOpacity>
    </View>
  );
};

export default function MainTela() {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <Card key={item.id} item={item} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  card: {
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center'
  },
  cardImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    // marginVertical: 10
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10
  },
  cardDescription: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center'
  },
  cardButton: {
    backgroundColor: '#33cc33',
    borderRadius: 10,
    padding: 10,
    marginTop: 10
  },
  cardButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
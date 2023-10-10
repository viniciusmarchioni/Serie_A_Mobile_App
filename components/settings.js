import * as React from 'react';
import { Text, View, Button, StyleSheet, Image } from 'react-native';
import { Shake } from 'react-native-motion';

export let value = true;

const ultimo = (valor) => {
  if (valor) {
    return 'Ligado';
  } else {
    return 'Desligado';
  }
};

export class settings extends React.Component {
  voltar() {
    this.props.navigation.goBack();
  }
  state = {
    valor: 0,
  };

  mute() {
    if (value) {
      value = false;
      console.log('Musica Desativada');
      this.setState({ valor: this.state.valor + 1 });
    } else {
      value = true;
      console.log('Musica Ativa');
    }
  }

  render() {
    return (
      <View>
        <Button title="Som?" onPress={() => this.mute()} />
        <Shake value={this.state.valor} type="timing">
          <Text style={styles.bigBlue}>{ultimo(value)}</Text>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/Musica.png')}
          />
        </Shake>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    textAlign: 'center',
    marginTop: '50%',
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  tinyLogo: {
    height: 200,
    width: 200,
    textAlign: 'center',
    marginLeft: 60,
  },
});

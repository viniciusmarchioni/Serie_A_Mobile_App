import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { firebase } from '../src/config/configfirebase'
export class serieB extends Component {
  voltar() {
    this.props.navigation.goBack();
  }
  getData = () =>  {
    var lista_times = [];
   snapshot =  firebase.firestore().collection('serieB').get();
   snapshot.then(querySnapshot => {    
    querySnapshot.forEach(documentSnapshot => {
      var time1 = new time();
      time1.Nome = documentSnapshot.data()['nome'];
      time1.Pts = documentSnapshot.data()['pontos'];
      time1.Vitorias = documentSnapshot.data()['vitorias'];
      lista_times.push(time1);
    });    

     lista_times.sort(function (b, a) {
      if (a.Pts > b.Pts) {
    return 1;
  }
  if (a.Pts < b.Pts) {
    return -1;
  }
  return 0; 
    });

    console.log(lista_times)
  });
  }
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Posição', 'Clube', 'Pts', 'V'],
      g4: [
        ['\n1\n', 'Cruzeiro', '78', '23'],
        ['\n2\n', 'Grêmio', '65', '17'],
        ['\n3\n', 'Vasco', '65', '17'],
        ['\n4\n', 'Bahia', '64', '17'],
      ],
      g6: [
        ['\n5\n', 'Sampaio', '62', '16'],
        ['\n6\n', 'Ituano', '58', '15'],
      ],
      g12: [
        ['\n7\n', 'Sport', '57', '15'],
        ['\n8\n', 'Criciuma', '56', '14'],
        ['\n9\n', 'Londrina', '53', '14'],
        ['\n10\n', 'Guarani', '51', '13'],
        ['\n11\n', 'CRB', '49', '13'],
        ['\n12\n', 'Ponte Preta', '47', '12'],
      ],
      g16: [
        ['\n13\n', 'Vila Nova', '45', '9'],
        ['\n14\n', 'Chapecoense', '45', '11'],
        ['\n15\n', 'Tombense', '44', '10'],
        ['\n16\n', 'Novorizontino', '42', '11'],
      ],
      z4: [
        ['\n17\n', 'CSA', '34', '9'],
        ['\n18\n', 'Brusque', '34', '8'],
        ['\n19\n', 'Operario', '34', '7'],
        ['\n20\n', 'Nautico', '30', '8'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Table borderStyle={{ borderWidth: 2 }}>
            <Row data={state.tableHead} style={styles.head} />
            <Rows
              data={state.g4}
              style={styles.g4}
              textStyle={{ color: 'white', textAlign: 'center' }}
            />
            <Rows
              data={state.g6}
              style={styles.g16}
              textStyle={{ textAlign: 'center' }}
            />
            <Rows
              data={state.g12}
              style={styles.g16}
              textStyle={{ textAlign: 'center' }}
            />
            <Rows
              data={state.g16}
              style={styles.g16}
              textStyle={{ textAlign: 'center' }}
            />
            <Rows
              data={state.z4}
              style={styles.z4}
              textStyle={{ textAlign: 'center' }}
            />
          </Table>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  g4: { backgroundColor: '#1E90FF', textAlign: 'center' },
  g16: { backgroundColor: 'white', borderColor: 'white' },
  z4: { backgroundColor: 'red', borderColor: 'white' },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';
import { firebase } from '../src/config/configfirebase'

class time{
  constructor(){
    let Nome;
    let Pts;
    let Vitorias;
  }
}


export class serieA extends Component {
  voltar() {
    this.props.navigation.goBack();
  }
  getData = () =>  {
    var lista_times = [];
   snapshot =  firebase.firestore().collection('serieA').get();
   snapshot.then(querySnapshot => {    
    querySnapshot.forEach(documentSnapshot => {
      var time1 = new time();
      time1.Nome = documentSnapshot.data()['nome'];
      console.log(time1.Nome)
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
        ['\n1\n', 'Palmeiras', '81', '23'],
        ['\n2\n', 'Internacional', '73', '23'],
        ['\n3\n', 'Fluminense', '70', '21'],
        ['\n4\n', 'Corinthians', '65', '18'],
      ],
      g6: [
        ['\n5\n', 'Flamengo', '62', '18'],
        ['\n6\n', 'Athletico', '58', '16'],
      ],
      g12: [
        ['\n7\n', 'Atlético', '58', '15'],
        ['\n8\n', 'Fortaleza', '55', '15'],
        ['\n9\n', 'São Paulo', '54', '13'],
        ['\n10\n', 'America MG', '53', '15'],
        ['\n11\n', 'Botafogo', '53', '15'],
        ['\n12\n', 'Santos', '47', '12'],
      ],
      g16: [
        ['\n13\n', 'Goiás', '46', '11'],
        ['\n14\n', 'Bragantino', '44', '11'],
        ['\n15\n', 'Coritiba', '42', '11'],
        ['\n16\n', 'Cuiabá', '41', '10'],
      ],
      z4: [
        ['\n17\n', 'Ceará', '37', '7'],
        ['\n18\n', 'Atletigo Go', '36', '8'],
        ['\n19\n', 'Avai', '35', '9'],
        ['\n20\n', 'Juventude', '22', '3'],
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
              style={styles.g6}
              textStyle={{ textAlign: 'center' }}
            />
            <Rows
              data={state.g12}
              style={styles.g12}
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
  container: { flex: 1, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  g4: { backgroundColor: '#1E90FF', textAlign: 'center' },
  g6: { backgroundColor: '#FF7F50', borderColor: 'white' },
  g12: { backgroundColor: '#00FF00', borderColor: 'white' },
  g16: { backgroundColor: 'white', borderColor: 'white' },
  z4: { backgroundColor: '#FF0000', borderColor: 'white' },
});

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export class serieC extends Component {
  voltar() {
    this.props.navigation.goBack();
  }

  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Posição', 'Clube', 'Pts', 'V'],
      B: [
        ['\n1\n', 'Mirassol', '12', '3'],
        ['\n2\n', 'Botafogo-SP', '10', '3'],
        ['\n3\n', 'Aparecidense', '7', '2'],
        ['\n4\n', 'Volta Redonda', '4', '1'],
      ],
      C: [
        ['\n1\n', 'ABC', '12', '3'],
        ['\n2\n', 'Vitória', '10', '3'],
        ['\n3\n', 'Figueirense', '7', '2'],
        ['\n4\n', 'Paysandu', '4', '1'],
      ],
      Final: ['Clube', 'Ida', 'Volta'],

      FinalTab: [
        ['\nMirassol\n', '0', '2'],
        ['\nABC\n', '0', '0'],
      ],
    };
  }

  render() {
    const state = this.state;
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
          <Text></Text>
          <Text style={{ textAlign: 'center' }}>Grupo B</Text>
          <Table borderStyle={{ borderWidth: 2 }} style={{ margin: 20 }}>
            <Row data={state.tableHead} style={styles.head} />
            <Rows
              data={state.B}
              style={styles.g16}
              textStyle={{ textAlign: 'center' }}
            />
          </Table>
          <Text></Text>
          <Text style={{ textAlign: 'center' }}>Grupo C</Text>
          <Table borderStyle={{ borderWidth: 2 }} style={{ margin: 20 }}>
            <Row data={state.tableHead} style={styles.head} />
            <Rows
              data={state.C}
              style={styles.g16}
              textStyle={{ textAlign: 'center' }}
            />
          </Table>
          <Text></Text>
          <Text style={{ textAlign: 'center', color: 'blue' }}>Final</Text>
          <Table borderStyle={{ borderWidth: 2 }} style={{ margin: 20 }}>
            <Row data={state.Final} style={styles.head} />
            <Rows
              data={state.FinalTab}
              style={styles.g4}
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
});

import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import BackButton from '../functions/backbutton';


const Dashboard = () => {
  const permohonanCount = 10;
  const sedangDiprosesCount = 5;
  const diluluskanCount= 3;
  const ditolakCount = 2;
  const kivCount = 1;


  return(
    <View style={styles.container}>
      <View style={styles.topSection}>
        <View style={styles.header}>
          <BackButton/>
          <Text style={styles.title}>Dashboard</Text>
        </View>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.counterContainer}>
          <View style={[styles.counter, {backgroundColor: '#faf0e6'}]}>
            <Text style={styles.counterTitle}>Permohonan</Text>
            <Text style={styles.counterNumber}>{permohonanCount}</Text>
          </View>
          <View style={[styles.counter, {backgroundColor: '#fff9ae'}]}>
            <Text style={styles.counterTitle}>Sedang Diproses</Text>
            <Text style={styles.counterNumber}>{sedangDiprosesCount}</Text>
          </View>
          <View style={[styles.counter, {backgroundColor: '#9DDE8B'}]}>
            <Text style={styles.counterTitle}>Diluluskan</Text>
            <Text style={styles.counterNumber}>{diluluskanCount}</Text>
          </View>
          <View style={[styles.counter, {backgroundColor: '#ffbaba'}]}>
            <Text style={styles.counterTitle}>Ditolak</Text>
            <Text style={styles.counterNumber}>{ditolakCount}</Text>
          </View>
          <View style={[styles.counter, {backgroundColor: '#b3ecec'}]}>
            <Text style={styles.counterTitle}>KIV</Text>
            <Text style={styles.counterNumber}>{kivCount}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    flex: 1,
    justifyContent: 'center', // Center items vertically
    backgroundColor: 'pink',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 30,
  },
  bottomSection: {
    flex: 6,
    backgroundColor: 'white',
    padding: 10,
  },
  counterContainer: {
    flex: 1,
    justifyContent: 'space-around',
  },
  counter: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 20,
    marginBottom: 10,
    alignItems: 'center'
  },
  counterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  counterNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  }
});

export default Dashboard;

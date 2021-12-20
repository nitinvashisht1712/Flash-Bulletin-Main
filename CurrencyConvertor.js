import React, { useEffect, useState } from 'react';
import DropDownPicker from 'react-native-dropdown-picker';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TextInput,
  View,
  Text,
  Button,
  ActivityIndicator
} from 'react-native';
import { FetchCurrencyLatest, ConvertCurrencyAPI } from './Api';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CurrencyConvertor = () => {
  const [currencyList, setCurrencyList] = useState([]);
  const [open, setOpen] = useState(false);
  const [ targetOpen, setTargetOpen ] = useState(false);
  const [sourceAmount, setSourceAmount] = useState("0");
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetAmount, setTargetAmount] = useState("0");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    FetchCurrencyLatest()
      .then(list => setCurrencyList(list))
  }, [])

  const convertCurrency = (amount, sourceCurrency, targetCurrency) => {
    setLoading(true);
    ConvertCurrencyAPI(amount, sourceCurrency, targetCurrency)
      .then(data => {
        const { rates } = data;
        setTargetAmount(String(rates[targetCurrency]));
        setLoading(false);
      })
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <View>
        <View
          style={styles.mainContainer}
        >
          <View
          style={{alignItems:'center', justifyContent:'center'}}>
          <Text style={{fontSize:40, marginVertical:20 }}>Currency Convertor</Text>
          </View>
            <View
            style={{marginTop:60}}>
              <Text style={{fontSize:25, marginVertical:10 }}>Source Amount</Text>
              <TextInput
                style={styles.textInput}
                onChangeText={value => setSourceAmount(value)}
                value={sourceAmount}
              />
              <Text  style={{fontSize:25, marginVertical:10 }}>Select Source Currency</Text>
              <DropDownPicker
                style={styles.textInput}
                onChangeText={value => setSourceCurrency(value)}
                open={open}
               
                value={sourceCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setOpen}
                setValue={setSourceCurrency}
              />
            </View>
            <View>
              <Text  style={{fontSize:25, marginVertical:10 }}>Target Amount</Text>
              <TextInput
                style={styles.textInput}
                editable={false}
                value={targetAmount}
              />
              <Text  style={{fontSize:25, marginVertical:10 }}>Select Target Currency</Text>
              <DropDownPicker
                style={styles.textInput}
                onChangeText={value => setTargetCurrency(value)}
                open={targetOpen}
                value={targetCurrency}
                items={currencyList.map(currency => ({
                  label: currency,
                  value: currency,
                }))}
                setOpen={setTargetOpen}
                setValue={setTargetCurrency}
              />
            </View>
            <View style={{position:'absolute', bottom:60, left:115}}>
              {
                loading
                  ? <ActivityIndicator color="#000000" size="large" />
                  : <View >
                    <TouchableOpacity style={{height:70, width:150,backgroundColor:'#0073cf', alignItems:'center',justifyContent:'center',borderRadius:20}} onPress={() => convertCurrency(sourceAmount, sourceCurrency, targetCurrency)}>
                     <Text style={{color:'#fff', fontSize:25}}>CONVERT</Text>
                   
                    </TouchableOpacity>
                    </View>
              }
            </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    height: 700,
    backgroundColor: "#fff",
  },
  textInput: {
    paddingHorizontal:10,
    marginBottom: 10,
    backgroundColor: "lightgrey",
    color: "red",
    height:40,
    borderRadius:10
  }
});

export default CurrencyConvertor;

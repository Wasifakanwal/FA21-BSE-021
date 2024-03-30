import { Text, View, StyleSheet, Button, Alert ,FlatList} from 'react-native'; 
import React, { useState, useEffect } from 'react'; 
import { TextInput } from 'react-native';
 
export default function Calculator() { 


    const[price,setPrice]=useState('');
    const[discount,setDiscount]=useState('');
    const[Newprice,setNewPrice]=useState('');
    const [youSave, setYouSave] = useState('');


    const [history, setHistory] = useState([]);
    const [ShowHistory, setShowHistory] = useState(false);


    const ChangePrice=(input)=>{
      if (!isNaN(input)) { 
        setPrice(input);
       
    } 
       
       

    };
    const ChangeDiscount = (input) => {
      if (!isNaN(input)) { 
        setDiscount(input);
      }
      };



      const savePreviousCalculations = () => {
        const Calculation = {
            originalPrice: price,
            discountPer: discount,
            priceAfterDis: Newprice
        };
        setHistory([...history, Calculation]);
    };



     function calDiscount(price,discount){
        const discountamount=(discount/100)*price
        const totalDiscount=price-discountamount
        const savedAmount=price-totalDiscount
        const roundedTotalDiscount = totalDiscount.toFixed(2);
        const roundedSavedAmount = savedAmount.toFixed(2);
    
        return {
            totalDiscount: roundedTotalDiscount.toString(),
            savedAmount: roundedSavedAmount.toString()
        };
     }
      const Submithandler = () => {
      const {totalDiscount, savedAmount }=calDiscount(price,discount)
        setNewPrice(totalDiscount)
        setYouSave(savedAmount);
      };



    return ( 
       
        <View style={styles.container}>
      <Text style={styles.Heading}>Discount Calculator</Text>
      <Text style={styles.label}>Original Price :</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number only"
        onChangeText={ChangePrice}
        keyboardType="numeric"
        value={price}
      />
      <Text style={styles.label}>Discount Percentage : </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter number only"
        onChangeText={ChangeDiscount}
        keyboardType="numeric"
        value={discount}
        
      />


      <View  style={[styles.butn, { marginLeft: 10 }]}>
      <Button 
        title="Submit"
        color="green"
        onPress={Submithandler}
       ></Button>
       <Button
          title="Save"
           color="green"
           onPress={savePreviousCalculations}/>
        <Button
         title="View History"
         color="green"
         onPress={() => setShowHistory(true)}
         
                />

</View>
       
       <Text style={styles.label}>New Price </Text>
      <TextInput
        style={styles.input}
        placeholder="newPrice"
        value={Newprice}
        
      />
      <Text style={styles.label}>You saved: </Text>
      <TextInput
        style={styles.input}
        placeholder="saved price"
        value={youSave}
        
      />
    <FlatList
                data={history}
                renderItem={({ item }) => (
                    <View style={styles.historyItem}>
                        <Text>Original Price: {item.originalPrice}</Text>
                        <Text>Discount Percentage: {item.discountPer}</Text>
                        <Text>Price After Discount: {item.priceAfterDis}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
    
     </View>
   
          );
}



const styles = StyleSheet.create({ 
    container: { 
      flex: 1, 
      backgroundColor: '#fff', 
      marginTop:100 
    }, 
    Heading:{

      textAlign:'center',
      fontSize:25,
      fontWeight:'bold',
      marginTop:5,
      marginBottom:60

    },
    inputContainer: {
       
        marginBottom: 20,
      },
      label: {
        marginRight: 10,
      },
      input: {
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 5,
        padding: 10,
        width: 200, 
      },
      butn: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        marginHorizontal: 50,
        padding: 10,
        justifyContent: "space-between", 
      },
}); 
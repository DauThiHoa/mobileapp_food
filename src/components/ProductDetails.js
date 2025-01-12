import * as React from "react";
import { Text, View, StyleSheet, ScrollViewBase } from "react-native";
import Constants from "expo-constants";
import { Image, TextInput } from "react-native";
import { Button, SafeAreaView, Alert } from "react-native"; 
import { ScrollView } from "react-native"; 

const ProductDetails = () => {
  // export default function productDetails() {
  
  return (  

    <View style={styles.container}>

      <Image
        source={require("../assets/img_ProductDetails/img.png")}
        style={{ flex : 0.1, height: 50 }}
      /> 

      <Text style={styles.american}>American red peach</Text>
      <Text style={styles.red}>
        Home / Product Details /{" "}
        <Text style={{ fontWeight: "bold" }}>American Red Peach</Text>
      </Text>
  
      <Image
        source={require("../assets/img_ProductDetails/dig.png")}
        style={styles.img_dig}
      /> 

      {/* <View styles={{ flex: 1, flexDirection: "row", marginTop: 250 }}>
      
    
        <View styles={styles.natural}>
        <View >
        <Image styles={{marginLeft : 50}}
          source={require("../assets/img_ProductDetails/img_1.png")}
          style={styles.imgIcon_dig}
        />
        <Text>100% natural</Text>
        </View>
        <View>
        <Image
          source={require("../assets/img_ProductDetails/img_2.png")}
          style={styles.imgIcon_dig}
        />
        <Text>Food safety certification</Text>
        </View>
        <View>
        <Image
          source={require("../assets/img_ProductDetails/img_3.png")}
          style={styles.imgIcon_dig}
        />
        <Text>Always fresh</Text>
        </View>
        <View>
         <Image
          source={require("../assets/img_ProductDetails/img_4.png")}
          style={styles.imgIcon_dig}
        />
        <Text>Safe for health</Text>
        </View>
      </View>  
      </View>  */}

      <Image
        source={require("../assets/img_ProductDetails/favourite.png")}
        style={styles.imgFavourite}
        onPress={() => Alert.alert("You have added the product to favorites")}
      />

      <View style={{ flex: 0.7, flexDirection: "row", marginTop: 250 }}>
        <Image
          source={require("../assets/img_ProductDetails/dig.png")}
          style={styles.imgIcon_dig}
        />
        <Image
          source={require("../assets/img_ProductDetails/Dig_1.png")}
          style={styles.imgIcon_dig}
        />
        <Image
          source={require("../assets/img_ProductDetails/Dig_2.png")}
          style={styles.imgIcon_dig}
        />
      </View>

      <Text style={styles.name}>American red peach</Text>
      <Text style={styles.price}>
        40.000đ <Text style={styles.priceOld}>68.000đ</Text>
      </Text>
      <Text style={styles.savings}>
        Savings: <Text style={{ fontWeight: "bold" }}>28,000</Text> VND compared
        to the market price
      </Text>
      <Text style={styles.peach}>
        Peach (scientific name: Prunus persica) is a tree grown for its fruit or
        flowers. It is a deciduous, small tree, growing to 5–10 m tall.
      </Text>
      <Text style={styles.weight}>Weight</Text>

      <View style={{ flex: 0.04, flexDirection: "row" , marginLeft: 20}}>
        <Button
          style={{marginLeft: 20}}
          title="1Kg"
          onPress={() => Alert.alert("1Kg")}
        />
        <Button
          title="2Kg"
          onPress={() => Alert.alert("2Kg")}
        />
        <Button
          title="3Kg"
          onPress={() => Alert.alert("3Kg")}
        />
      </View>

      <Text style={styles.weight}>Amount :</Text>
 
      <TextInput
        style={{ weight: 25, height: 40, 
          borderColor: "gray", borderWidth: 2 , 
          marginLeft: 20, borderRadius: 20, marginRight: 400}}
        value={1}
        // keyboardType="numeric"
      />
       <Button  
       style={{flex : 1 ,
          width: 25,
          height: 25,
          backgroundColor: "green", 
          marginLeft:50 }}
          backgroundColor="green"
          title="Buy Now"
          onPress={() => Alert.alert("Buy Now")}
        />  
      
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#ecf0f1",
  },
  american: {
    fontSize: 20,
    justifyContent: "center",
    textAlign: "center",
    marginTop: -80,
    fontWeight: "bold",
  },
  imgFavourite: {
    width: 30,
    height: 30,
    marginTop: -270,
    marginLeft: 100,
    borderRadius: 55,
    borderColor: "black",
  },
  red: {
    fontSize: 15,
    justifyContent: "center",
    textAlign: "center",
    marginTop: 5,
  },
  img_dig: {
    justifyContent: "center",
    width: 400,
    height: 280,
    marginTop: 55, 
    marginLeft: 75
  },
  imgIcon_dig: {
    width: 80,
    height: 75,
    marginTop: 10,
    marginLeft: 25,
    borderRadius: 5,
    borderColor: "black" 
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: -700
  },
  price: {
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#ff6347",
  },
  priceOld: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
    color: "#c0c0c0",
    TextDecoder: "bold",
  },
  savings: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 5,
  },
  peach: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 5,
  },
  weight: {
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 25,
    marginTop: 15
  },
  buttonWeight: {
    width: 50,
    height: 50,
    backgroundColor: "#87ceeb",
    marginLeft: 20,
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 20,
  },
  natural :{
    flex : 1 ,
    width: 100,
    height: 400,
    backgroundColor: "green", 
    marginLeft:50
  },
  buy :{
    flex : 1 ,
    width: 25,
    height: 25,
    backgroundColor: "green", 
    marginLeft:50
  },
});

export default  ProductDetails;

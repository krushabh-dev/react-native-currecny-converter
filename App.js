import * as React from 'react';
import {useState} from 'react';
import { Text, View, Pressable, TextInput, Image } from 'react-native';
import Data from "./Data";

export default function App() {
  const [screen, setScreen] = useState(0);
  const [text, onChangeText] = React.useState("");

  function ScreenOne(){
    return(
      <>
      <View style={{justifyContent: "center",paddingTop: 160, backgroundColor: '#131017db'}}>
        <Text style={{textAlign: "center",color: "#fff", fontSize: 40, fontWeight: 700}}>Currency Converter</Text>
        <Pressable style={{backgroundColor: "#00a88a", marginLeft: 60, marginRight: 60, paddingTop: 10, paddingBottom: 10, marginBottom: 50, borderRadius: 5, marginTop: 170}} onPress={() => setScreen(1)}> <Text style={{textAlign: "center", color: "#fff"}}>Lets Start</Text></Pressable>
      </View>
      </>
      )
  }

   function ScreenTwo(){
    return(
      <>
      <View style={{backgroundColor: '#232427'}}>
      {/* //TOP NAV AREA */}
      <View style={{paddingTop: 18, paddingBottom: 18, backgroundColor: "#2c2b39"}}>
      <Text style={{color: "#fff", textAlign: "center", fontWeight: 700, fontSize: 19}}>Currency Converter</Text>
      </View>


      {/* //MIDDLE AREA */}
      <View style={{marginTop: 25,height: "80vh"}}>
      {/* //CARD */}
      {Data.map((e)=>{
        return <>  <View style={{marginTop: 0, marginLeft: 20, marginRight: 20}}>
      <View style={{flexDirection: "row", paddingTop: 10, paddingLeft: 10, paddingRight: 10, backgroundColor: "#2c2b39", marginBottom: 20, paddingBottom: 20}}>
        <View style={{flex: 2}}>
        <Image
        style={{
    width: 30,
    height: 30,
    marginLeft:10,
    marginTop: 15
  }}
        source={{
          uri: e.img,
        }}
      />
        </View>
        <View style={{flex: 1,paddingTop: 23}}>
        <Text style={{color: "#fff", textAlign: "center"}}>{e.symbole}</Text>
        </View>
        <View style={{flex: 9}}>
        <View>
        <Pressable style={{ position: "absolute", top: -10, right: 0}}>
        <Text style={{color: "#fff", fontSize: 10}}>x</Text>
        </Pressable>
        </View>
        <TextInput
        style={{
    height: 36,
    margin: 12,
    borderWidth: 1,
    borderRadius: 2,
    padding: 10,
    width: 180,
    borderColor: "#fff"
  }}
        onChangeText={onChangeText}
        value={text}
      />
      <View style={{paddingLeft: 12}}>
      <Text style={{color: "#fff", fontSize: 10, paddingBottom: 6}}> {e.text} </Text>
      <Text style={{color: "#fff", fontSize: 10, paddingBottom: 6}}> {e.exchangeRate} </Text>
      </View>
        </View>
      </View>
      </View></>
      })}

      </View>

      {/* //ADD MORE CURRANCIES OPTION */}
      <View style={{position: "fixed",backgroundColor: "#2c2b39", bottom: 0, width: "100%"}}>
      <View style={{ paddingTop: 15, paddingBottom: 15, paddingLeft: 10, paddingRight: 10, backgroundColor: "#00a88a", borderRadius: 4}}>
      <Pressable>
      <Text style={{textAlign: "center", color: "#fff", fontWeight: 600}}>Add More Currency</Text>
      </Pressable>
      </View>
      </View>
      </View>
      </>
      )
  }
  return (
    <View>
     {screen===0?<ScreenOne />:<></>}
     {screen===1?<ScreenTwo />:<></>}
    </View>
  );
}

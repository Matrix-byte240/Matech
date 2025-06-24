import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";

import FontAwesome from '@expo/vector-icons/FontAwesome';

const itemBar = [
  "Medication",
  "Lab Tests",
  "Surgries",
  "Appointments",
  "Drugs",
  "Surgries",
  "+",
];

let a = 20
const data =[
  {date:'March 15,2025', text:'Cardiology consultant', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'red'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'green'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'red'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'black'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'red'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'red'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'red'},
  {date:'Feb 1,2025', text:'Annual pjidvfdtyv', name:'Dr. Sarah Wilson',description:'Regular checkup and Ecg examination',color:'black'},
]

const index = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/Left Arrow.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 25,
              fontWeight: "bold",
              marginBottom: 20,
              paddingLeft: 5,
            }}
          >
            Medical History
          </Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require("../assets/icons/notification.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableOpacity>
      </View>

      <View>
        <FlatList
          data={itemBar}
          horizontal
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                style={{
                  // width: '100',
                  backgroundColor: "#E7E8FE",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 15,
                  marginBottom: 30,
                  flexDirection:'row',
                  padding:10,
                  margin:10
                  
                }}
              >
                <Text style={{ fontSize: 18 }}>{item}</Text>
              </TouchableOpacity>
            );
          }}
        />
    </View>
        <FlatList
        data={data}
        renderItem={({item,index}) => {
          return(
            <View style={{flexDirection:'row',alignItems:'center'}}>
              <View style={{alignItems:'center'}}>
              <View style={{backgroundColor:item.color,margin:20,borderRadius:20,alignItems:'center',height:30,width:30,justifyContent:'center'}}> 
<FontAwesome name="user" size={20} color="white" />
              </View>
         <View style={{width:1,height:60,backgroundColor:'black'}}/>

              </View>
            <View style={{height:100,width:'85%',marginVertical:10,alignItems:'flex-start'}}>
{/* <AntDesign name="rightcircleo" size={24} color="black" /> */}

              <Text style={{fontWeight:'bold', fontSize:22,color:'blue',marginVertical:10}}>{item.date}</Text>
              <Text style={{fontWeight:'bold',fontSize:14}}>{item.text}</Text>
              <Text style={{fontSize:14}}>{item.name}</Text>
              <Text>{item.description}</Text>
            </View>
            </View>
          )
        }}
        />
      

      
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  placeholder: {
    // width: 350,
    height: 30,
    backgroundColor: "grey",
    marginBottom: 20,
    borderRadius: 9,
    paddingLeft: 18,
    // alignItems: "center",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
  },
  box1: {
    height: 30,
    width: 100,
    backgroundColor: "black",
    borderRadius: 10,
  },
});

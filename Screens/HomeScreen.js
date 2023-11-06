  import React from 'react';
  import { View, Text, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native';
  import { FontAwesome } from '@expo/vector-icons';

  export default function HomeScreen() {

    const renderItem = ({ item }) => (
      <View style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 5, padding: 10, marginBottom: 10 }}>
        <Text>{item.text}</Text>
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 20 }}>
        <TouchableOpacity>
          <FontAwesome name="angle-left" size={30} color="#114287" />
        </TouchableOpacity>
        <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 20 }}>Locatie Curenta:</Text>
        <TouchableOpacity>
          <Text style={{ color: 'white' }}>.</Text>
        </TouchableOpacity>
      </View>
      <View style={{ padding: 10 }}>
        <View style={{ width: 300, height: 250, borderWidth: 1, borderColor: 'black', borderRadius: 40 }}>
        <ScrollView contentContainerStyle={{ flex: 1, justifyContent: 'flex-end', padding:20 }}>
            <TouchableOpacity style={{ justifyContent: 'space-between', alignSelf: 'flex-start', borderWidth: 1, borderColor: '#114287', padding: 10, borderRadius: 15, flexDirection: 'row' }}>
              <FontAwesome name="map-pin" size={20} color="#114287" />
              <View style={{ marginLeft: 10 }}>
                <Text>Live</Text>
              </View>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
      <View style={{ padding: 10 }}>
        <TextInput
          placeholder="Cauta Autobuze"
          style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 20, padding: 10 }}
        />
      </View>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <FontAwesome name="bus" size={30} color="#114287" />
          <Text>Nume Statie</Text>
          <View><Text>timp</Text></View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <FontAwesome name="bus" size={30} color="#114287" />
          <Text>Nume Statie</Text>
          <View><Text>timp</Text></View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <FontAwesome name="bus" size={30} color="#114287" />
          <Text>Nume Statie</Text>
          <View><Text>timp</Text></View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20 }}>
          <FontAwesome name="bus" size={30} color="#114287" />
          <Text>Nume Statie</Text>
          <View><Text>timp</Text></View>
        </View>
      </ScrollView>
    </View>
    );
  }


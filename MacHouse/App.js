import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native'
import Card1 from './components/Card'
import { Announcements, Events, Tasks } from './components/data'
import { List } from 'react-native-paper'
import CheckBox from 'react-native-just-checkbox'
import { Card } from 'react-native-paper'

const Cards = () => {
  return (
    <View style={{ marginTop: 100 }}>
      <ScrollView>
        <View style={{ height: 50, marginLeft: 12 }}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: 'red' }}>
            ANNOUNCEMENTS!
          </Text>
        </View>

        <SafeAreaView>
          {/* for ANNOUNCEMENTS horizontal */}

          <FlatList
            horizontal={true}
            data={Announcements}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card1
                title={item.title}
                subtitle={item.subtitle}
                image={{ uri: item.image }}
              />
            )}
          />
        </SafeAreaView>

        <View style={{ height: 50, marginLeft: 12 }}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: 'red'}}>
            EVENTS!
          </Text>
        </View>

        {/* for events horizontal */}
        <SafeAreaView >
          
          <FlatList
            horizontal={true}
            data={Events}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <Card1  
                title={item.title}
                subtitle={item.subtitle}
                image={{ uri: item.image }}
              />
            )}
          />
          
        </SafeAreaView> 
        

        {/* about checkbox  */}
        
        <View style={{ height: 30, marginLeft: 12 }}>
          <Text style={{ fontSize: 30, fontWeight: '700', color: 'red' }}>
            MY TASKS!
          </Text></View>
        <List.Section>
          <List.Accordion title= {<View><Text style={{fontSize:18, fontWeight: '700'}}>VIEW MY TASKS</Text></View>}>
            <FlatList
              data={Tasks}
              renderItem={({ item }) => (
                <Card style={{ margin: 5 }}>
                  <View style={styles.card}>
                    <View
                      style={{
                        flexDirection: 'row',
                        flex: 1,
                        justifyContent: 'space-between',
                      }}
                    >
                      <Text>{item.title}</Text>
                      <CheckBox
                        isChecked={true}
                        checkBoxSize={30}
                        checkColor='black'
                        squareCheckBox={true}
                        onToggle={() => {
                          console.log('hello')
                        }}
                      />
                    </View>
                  </View>
                </Card>
              )}
            />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    padding: 10,
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})
export default Cards
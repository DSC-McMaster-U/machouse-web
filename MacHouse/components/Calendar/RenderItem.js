import React from "react";
import {
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { Card, Avatar } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const RenderItem = ({ item, items, delItem }) => {
  return (
    <TouchableOpacity style={{ marginRight: 10, marginTop: 17 }}>
      <Card>
        <Card.Content>
          <SafeAreaView
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Ionicons
              name="close"
              onPress={() => delItem(item, items)}
              size={30}
              style={styles.close}
            ></Ionicons>
            <SafeAreaView style={styles.textView}>
              <Text style={styles.time}>{item.time}</Text>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </SafeAreaView>
            <Avatar.Text label="🏠" />
          </SafeAreaView>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  textView: {
    width: "60%",
    marginRight: "5%",
    marginLeft: "5%",
  },

  time: {
    color: "rgb(80, 80, 80)",
  },
  description: {
    color: "rgb(136,136,136)",
  },
  name: {
    fontSize: 20,
  },
  close: {
    color: "rgb(144,144,144)",
  },
});

export default RenderItem;

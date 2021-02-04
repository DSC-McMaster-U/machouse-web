import * as React from "react";
import { useState } from "react";
import { Button, List, useTheme } from "react-native-paper";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import FinancesTable from "../components/FinancesTable";
import { chores } from "../sampleData";
import { shoppingList } from "../sampleData";

const Management = () => {
  const { colors } = useTheme();

  const [choresText, setChoresText] = useState("");
  const [shoppingListText, setShoppingListText] = useState("");

  const removeChore = (id) => {
    console.log("removed chore");
  };

  const removeShoppingItem = (id) => {
    console.log("removed shopping item");
  };
  const addShoppingListItem = (text) => {
    console.log("added item");
  };
  const addChore = (text) => {
    console.log("added chore");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <List.Section title="Pending Tasks:">
          <List.Accordion
            title="Finances"
            left={(props) => <List.Icon color="#F3C761" icon="cash-multiple" />}
            id="Finances"
            style={{
              ...styles.card,
              backgroundColor: colors.accent,
              color: "#fff",
            }}
            titleStyle={{ color: "#ECECEC", fontSize: 20, fontWeight: "bold" }}
          >
            <FinancesTable />
          </List.Accordion>

          <List.Accordion
            title="Shopping List"
            left={(props) => <List.Icon color="#F3C761" icon="cart-plus" />}
            id="ShoppingList"
            style={{ ...styles.card, backgroundColor: colors.accent }}
            titleStyle={{ color: "#ECECEC", fontSize: 20, fontWeight: "bold" }}
          >
            <View style={{ paddingRight: 5, margin: 5 }}>
              <View>
                <TextInput
                  placeholder="Add item..."
                  style={styles.input}
                  onChangeText={(text) => setShoppingListText(text)}
                />
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => addShoppingListItem(shoppingListText)}
                >
                  <Text style={styles.btnText}>+ Add Item</Text>
                </TouchableOpacity>
              </View>
              {shoppingList.map((elem) => {
                return (
                  <View style={styles.listExpanded} key={elem.id}>
                    <Button
                      icon="delete"
                      color="#850044"
                      style={{
                        flex: 1,
                        alignSelf: "center",
                      }}
                      onPress={() => removeShoppingItem(elem.id)}
                    ></Button>
                    <List.Item
                      title={elem.title}
                      key={elem.id}
                      style={{
                        flex: 5,
                        alignSelf: "center",
                      }}
                    />
                  </View>
                );
              })}
            </View>
          </List.Accordion>

          <List.Accordion
            title="Chore List"
            left={(props) => (
              <List.Icon color="#F3C761" icon="clipboard-check-multiple" />
            )}
            id="ChoreList"
            style={{
              ...styles.card,
              backgroundColor: colors.accent,
            }}
            titleStyle={{ color: "#ECECEC", fontSize: 20, fontWeight: "bold" }}
            // expanded={true}
            // onPress={handlePress}
          >
            {
              <View style={{ paddingRight: 5, margin: 5 }}>
                <View>
                  <TextInput
                    placeholder="New chore..."
                    style={styles.input}
                    onChangeText={(text) => setChoresText(text)}
                  />
                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => addChore(choresText)}
                  >
                    <Text style={styles.btnText}>+ Add Chore</Text>
                  </TouchableOpacity>
                </View>
                {chores.map((elem) => {
                  return (
                    <View style={styles.listExpanded} key={elem.id}>
                      <Button
                        icon="delete"
                        color="#850044"
                        style={{
                          flex: 1,
                          alignSelf: "center",
                        }}
                        onPress={() => removeChore(elem.id)}
                      ></Button>
                      <List.Item
                        title={elem.title}
                        key={elem.id}
                        style={{
                          flex: 5,
                          alignSelf: "center",
                        }}
                      />
                    </View>
                  );
                })}
              </View>
            }
          </List.Accordion>
        </List.Section>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#ECECEC",
  },
  content: {
    flex: 1,
    padding: 10,
  },
  card: {
    height: 100,
    padding: 15,
    borderRadius: 10,
    margin: 5,
  },
  list: {
    marginLeft: 35,
    marginRight: 35,
  },
  listExpanded: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#c4a7a7",
  },
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
    borderBottomWidth: 2,
    marginBottom: 5,
    borderColor: "#5E6A70",
  },
  btn: {
    backgroundColor: "#F3C761",
    padding: 9,
    marginBottom: 2,
  },
  btnText: {
    color: "#850044",
    fontSize: 20,
    textAlign: "center",
  },
});
export default Management;

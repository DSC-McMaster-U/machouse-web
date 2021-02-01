import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { Formik } from "formik";
import DateTimePickerModal from "react-native-modal-datetime-picker";

export default function EventForm({ items, timestamp, addItem, setModalOpen }) {
  const [timeForm, setTimeForm] = useState(false);

  function timeFormat(date) {
    var h = date.getHours();
    var m = date.getMinutes();
    /*var x = h >= 12 ? "pm" : "am";
    h = h % 12;
    h = h ? h : 12;*/
    m = m < 10 ? "0" + m : m;
    var mytime = h + ":" + m; //+ " " + x;
    return mytime;
  }
  return (
    <View>
      <Formik
        initialValues={{ name: "", time: "Event time", description: "" }}
        onSubmit={(values) => {
          if (values.name == "" || values.time == "Event time") {
            alert("Please enter a valid title and time");
          } else {
            addItem(items, timestamp, values);
          }
        }}
      >
        {(props) => (
          <View>
            <Text style={styles.text}>Submit</Text>
            <TextInput
              style={styles.input}
              placeholder="Event name"
              onChangeText={props.handleChange("name")}
              value={props.values.name}
            ></TextInput>
            <TouchableOpacity
              style={styles.input}
              onPress={() => setTimeForm(true)}
            >
              <Text style={styles.timeText}>{props.values.time}</Text>
            </TouchableOpacity>
            <DateTimePickerModal
              testID="dateTimePicker"
              mode="time"
              is24Hour={true}
              display="spinner"
              style={styles.time}
              date={new Date(new Date().setHours(0, 0, 0, 0))}
              isVisible={timeForm}
              onChange={(time) => props.setFieldValue("time", timeFormat(time))}
              onConfirm={(time) => {
                setTimeForm(false);
                props.setFieldValue("time", timeFormat(time));
              }}
              onCancel={() => setTimeForm(false)}
            />
            <TextInput
              style={styles.inputDesc}
              placeholder="Event description"
              onChangeText={props.handleChange("description")}
              value={props.values.description}
              multiline
            ></TextInput>
            {/*<TextInput
              style={styles.input}
              placeholder="Event time"
              onChangeText={props.handleChange("time")}
              value={props.values.time}
			></TextInput>*/}
            <TouchableOpacity
              style={styles.submit}
              onPress={props.handleSubmit}
            >
              <Text style={styles.text}>Submit</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(136,136,136)",
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 10,
    height: 40,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    padding: 5,
  },

  inputDesc: {
    marginTop: 8,
    borderBottomWidth: 1,
    borderBottomColor: "rgb(136,136,136)",
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 10,
    height: 200,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    padding: 5,
  },

  inputTime: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "rgb(136,136,136)",
    backgroundColor: "rgb(245, 245, 245)",
    borderRadius: 10,
    height: 40,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 10,
    padding: 5,
  },

  submit: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "rgb(51, 153, 255)",
    height: 30,
  },

  text: {
    color: "rgb(255, 255, 255)",
  },

  timeText: {
    color: "rgb(169,169,169)",
    fontSize: 14.5,
    marginTop: 5,
  },
});

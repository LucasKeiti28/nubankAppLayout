import React from "react";
import {
  View,
  Button,
  SafeAreaView,
  StatusBar,
  ScrollView
} from "react-native";

import spaceQuestions from "../data/space";
import westernQuestions from "../data/westerns";
import computerQuestions from "../data/computers";

import { RowItem } from "../components/RowItem";

export default QuizIndex = ({ navigation }) => {
  return (
    <ScrollView>
      <View>
        <StatusBar barStyle="dark-content" />
        <RowItem
          name="Space"
          color="#36baf0"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Space",
              questions: spaceQuestions,
              color: "#36baf0"
            })
          }
        />
        <RowItem
          name="Western"
          color="#799496"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Western",
              questions: westernQuestions,
              color: "#799496"
            })
          }
        />
        <RowItem
          name="Computer"
          color="#49475b"
          onPress={() =>
            navigation.navigate("Quiz", {
              title: "Computer",
              questions: computerQuestions,
              color: "#49475b"
            })
          }
        />
      </View>
    </ScrollView>
  );
};

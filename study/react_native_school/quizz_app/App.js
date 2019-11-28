import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Quiz from "./src/pages/Quiz";
import QuizIndex from "./src/pages/QuizIndex";

const MainStack = createStackNavigator({
  QuizIndex: {
    screen: QuizIndex,
    navigationOptions: {
      headerTitle: "Quizzes",
      headerTintColor: "#000"
    }
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.getParam("title"),
      headerTintColor: "#fff",
      headerStyle: {
        backgroundColor: navigation.getParam("color"),
        borderBottomColor: navigation.getParam("color")
      }
    })
  }
});

export default createAppContainer(MainStack);

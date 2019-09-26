import React from 'react';
import {StatusBar, Animated} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '~/components/Header';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Title,
  Description,
  Annotation,
  Content,
} from './styles';

export default function Main() {
  let offset = 0;
  const translateY = new Animated.Value(0);
  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  function onHandlerStateChange(event) {
    let opened = false;

    if (event.nativeEvent.oldState === State.ACTIVE) {
      const {translationY} = event.nativeEvent;

      offset += translationY;

      if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }
      Animated.timing(translateY, {
        toValue: opened ? 390 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 390 : 0;
        translateY.setOffset(offset);
        translateY.setValue(0);
      });
    }
  }

  return (
    <Container>
      <Header />
      <Content>
        {/* position relative */}
        <Menu translateY={translateY} />

        {/* position absolute */}
        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Card
            style={{
              transform: [
                {
                  translateY: translateY.interpolate({
                    inputRange: [-350, 0, 390],
                    outputRange: [-50, 0, 390],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}>
            <CardHeader>
              <Icon name="attach-money" size={20} color="#111" />
              <Icon name="visibility-off" size={20} color="#111" />
            </CardHeader>
            <CardContent>
              <Title>Saldo Disponível</Title>
              <Description>R$ 197.890,89</Description>
            </CardContent>
            <CardFooter>
              <Annotation>
                Transferência de R$ 20,00 recebido de Lucas hoje às 06:00.
              </Annotation>
            </CardFooter>
          </Card>
        </PanGestureHandler>
      </Content>
      <Tabs translateY={translateY} />
      <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    </Container>
  );
}

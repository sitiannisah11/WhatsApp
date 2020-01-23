import React from 'react';
import { AppLoading } from 'expo';
import { Container, Separator, Fab, Header, Tab, Tabs, TabHeading, Icon, Text, Left, Right, Title, Button, Body, ListItem, Thumbnail, List, Content, View, Badge } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import Camera from './kamera';



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }
 
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }
 
  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
 
    return (
      <Container>
        <Header androidStatusBarColor="#075e54" style={{ backgroundColor: "#075e54" }}>
          <Body >
            <Title>WhatsApp</Title>
          </Body>
          <Right >
            <Button transparent>
              <Icon name='search' />
            </Button>
            <Button transparent>
              <Icon name='more' />
            </Button>
          </Right>
        </Header>
        <Tabs tabContainerStyle={{elevation: 0}} prerenderingSiblingsNumber={1} initialPage={1}>
 
          {/* ************************CAMERA************************** */}
 
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Icon name="camera" /></TabHeading>}>
           <Camera />
          </Tab>
 
          {/* ******************CHAT********************* */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>CHATS</Text></TabHeading>}>
            <Container>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/mark.jpg')} />
                    </Left>
                    <Body>
                      <Text>Mark Zuckerberg</Text>
                      <Text note>Good Morning</Text>
                    </Body>
                    <Right>
                      <Text note>3:43 am</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/jokowi.jpg')} />
                    </Left>
                    <Body>
                      <Text>Jokowi</Text>
                      <Text note>Selamat Pagi</Text>
                    </Body>
                    <Right>
                      <Text note>05.00 am</Text>
                    </Right>
                  </ListItem>
                </List>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/nadim.jpg')} />
                    </Left>
                    <Body>
                      <Text>Nadiem Makarim</Text>
                      <Text note>Selamat Pagi..</Text>
                    </Body>
                    <Right>
                      <Text note>05.00 am</Text>
                    </Right>
                  </ListItem>
                </List>
              </Content>
              <View style={{ flex: 1 }}>
              <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="chatboxes" />
              <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
              </Button>
            </Fab>
              </View>
            </Container>
            
          </Tab>
 
          {/* ************************STATUS************************ */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>STATUS</Text></TabHeading>}>
            <Container>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/nisa.jpg')} />
                    </Left>
                    <Body>
                      <Text>Status saya</Text>
                      <Text note>Ketuk untuk menambahkan pembaruan..</Text>
                    </Body>
                  </ListItem>
                </List>
                <ListItem itemDivider style={{ marginTop: 5 }}>
                  <Left>
                    <Text note>Pembaruan terkini</Text>
                  </Left>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/Project React/whatsapp/image/nadim.jpg')} />
                  </Left>
                  <Body>
                    <Text>Nadiem Makarim</Text>
                    <Text note>5 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/Project React/whatsapp/image/jokowi.jpg')} />
                  </Left>
                  <Body>
                    <Text>Jokowi</Text>
                    <Text note>10 menit yang lalu</Text>
                  </Body>
                </ListItem>
                <ListItem avatar>
                  <Left>
                    <Thumbnail source={require('/Project React/whatsapp/image/mark.jpg')} />
                  </Left>
                  <Body>
                    <Text>Mark Zuckerberg</Text>
                    <Text note>25 menit yang lalu</Text>
                  </Body>
                </ListItem>
              </Content>
            </Container>
          </Tab>
 
 
          {/* *************************PANGGILAN************************ */}
          <Tab heading={<TabHeading style={{ backgroundColor: "#075e54" }}><Text>CALLS</Text></TabHeading>}>
            <Container>
              <Content>
                <List>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/mark.jpg')} />
                    </Left>
                    <Body>
                      <Text>Mark Zuckerberg</Text>
                      <Text note numberOfLines={1}>Today 00.00</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/jokowi.jpg')} />
                    </Left>
                    <Body>
                      <Text>Jokowi</Text>
                      <Text note numberOfLines={1}>Today 01.45</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="videocam" />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/mark.jpg')} />
                    </Left>
                    <Body>
                      <Text>Mark Zuckerberg</Text>
                      <Text note numberOfLines={1}>Today 03.00</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                  <ListItem thumbnail>
                    <Left>
                      <Thumbnail source={require('/Project React/whatsapp/image/nadim.jpg')} />
                    </Left>
                    <Body>
                      <Text>Nadiem Makarim</Text>
                      <Text note numberOfLines={1}>Today 03.00</Text>
                    </Body>
                    <Right>
                      <Button transparent>
                        <Icon name="call" />
                      </Button>
                    </Right>
                  </ListItem>
                </List>
              </Content>
            </Container>
            <Fab
              active={this.state.active}
              direction="up"
              containerStyle={{}}
              style={{ backgroundColor: '#25D366' }}
              position="bottomRight"
              onPress={() => this.setState({ active: !this.state.active })}>
              <Icon name="call" />
              <Button style={{ backgroundColor: '#34A34F' }}>
                <Icon name="logo-whatsapp" />
              </Button>
              <Button style={{ backgroundColor: '#3B5998' }}>
                <Icon name="logo-facebook" />
              </Button>
              <Button disabled style={{ backgroundColor: '#DD5144' }}>
                <Icon name="mail" />
              </Button>
            </Fab>
          </Tab>
        </Tabs>
 
 
 
      </Container>
    );
  }
}
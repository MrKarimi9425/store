import * as React from "react";
import { Container, Header, Tabs, ScrollableTab, Tab } from "native-base";
import Content from "../components/CategoryScreen/Content";
import { category } from "../Common/dataArray";
import { main, white } from "../Common/Styles/Colors";
import { StyleSheet } from "react-native";
import MyHeader from "../components/Header/MyHeader";

let headerProps = {
  type: 'password',
  icon: 'arrow',
  headName: 'دسته بندی محصولات'
}
const Category = (props) => {

  return (
    <Container>
      <MyHeader {...headerProps} />
      <Tabs initialPage={props.route.params.numKey} tabBarBackgroundColor={main} renderTabBar={() => <ScrollableTab />}>
        {
          category.map((value, index) => {
            return (
              <Tab key={index} tabStyle={styles.tabbar}
                activeTabStyle={styles.tabbar}
                textStyle={styles.text}
                activeTextStyle={styles.text}
                heading={value.text}
              >
                <Content />
              </Tab>
            )
          })
        }
      </Tabs>
    </Container>
  )
}

const styles = StyleSheet.create({
  tabbar: {
    backgroundColor: '#ef394e',
  },
  text: {
    color: white,
    fontFamily: 'yekan',
  }
})
export default React.memo(Category)
import React, { Component } from "react";
import Styles from "../../../../resources/static/styles/KikuuStyles";

import {
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  SafeAreaView,
  Platform,
  ImageBackground,
  Image
} from "react-native";

import { connect } from "react-redux";
const backImage = require("../../../../resources/static/images/back.png");
const appicon = require("../../../../resources/static/images/appIcon.png");

class GenericLoginScreen extends Component {
  render() {
    const { model } = this.props;
    return (
      <SafeAreaView style={Styles.gen_ls_con}>
        {/* <ImageBackground source={backImage} style={Styles.gen_ls_bg_con}> */}
        {this.props.isAppHeader ? (
          <View style={Styles.gen_ls_viewHideHeader}>
            <Image source={appicon} style={Styles.gen_ls_AppIcon} />
            <Text style={Styles.gen_app_name}>Kikuu</Text>
            <Text style={Styles.gen_app_slogan}>
              its business, nothing personal.
            </Text>
          </View>
        ) : null}

        <View style={Styles.gen_ls_model}>{model}</View>
        {/* </ImageBackground> */}
      </SafeAreaView>
    );
  }
}

export default connect(null, null)(GenericLoginScreen);

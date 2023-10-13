import React from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";

import styles from "./footer.style";
import { icons } from "../../../constants";

const Footer = ({ url }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          source={icons.heart}
          resizeMode="contain"
          style={styles.likeBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Footer;

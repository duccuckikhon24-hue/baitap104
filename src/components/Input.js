import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import colors from "../styles/colors";

export default function Input({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  showToggle = false,
  rightNode = null,
  containerStyle,
  inputStyle,
}) {
  const [hidden, setHidden] = useState(secureTextEntry);

  return (
    <View style={[styles.wrapper, containerStyle]}>
      {label ? <Text style={styles.label}>{label}</Text> : null}

      <View style={styles.row}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          secureTextEntry={hidden}
          keyboardType={keyboardType}
          style={[styles.input, inputStyle]}
        />

        {rightNode}

        {showToggle ? (
          <TouchableOpacity onPress={() => setHidden(!hidden)}>
            <Text style={styles.eye}>{hidden ? "show" : "hide"}</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 22,
  },
  label: {
    fontSize: 15,
    color: colors.subText,
    marginBottom: 12,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    flex: 1,
    fontSize: 17,
    color: colors.text,
    paddingVertical: 4,
  },
  eye: {
    fontSize: 18,
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: colors.border,
    marginTop: 12,
  },
});
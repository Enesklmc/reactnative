import {ButtonProps, Button} from 'react-native-elements';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const ButtonSolid: React.FC<ButtonProps> = props => {
  return (
    <Button
      title="Sign Up"
      buttonStyle={[styles.buttonStyle, props.buttonStyle]}
      disabledTitleStyle={styles.buttonDisabledTitleStyle}
      disabledStyle={styles.buttonDisabledStyle}
      disabled={props.disabled}
      onPress={props.onPress}
      containerStyle={{marginTop: 37}}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 56,
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  buttonDisabledTitleStyle: {
    color: '#fff',
  },
  buttonDisabledStyle: {
    backgroundColor: Colors.gray,
  },
});

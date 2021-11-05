import {ButtonProps, Button} from 'react-native-elements';
import React from 'react';
import {StyleSheet} from 'react-native';
import {Colors} from './Colors';

export const ButtonLogOut: React.FC<ButtonProps> = props => {
  return (
    <Button
      title="Log Out"
      buttonStyle={[styles.buttonStyle, props.buttonStyle]}
      disabledTitleStyle={styles.buttonDisabledTitleStyle}
      disabledStyle={styles.buttonDisabledStyle}
      disabled={props.disabled}
      onPress={props.onPress}
      containerStyle={{height: 56, marginTop: 37}}
      titleStyle={{color: Colors.primary}}
    />
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    height: 56,
    borderRadius: 12,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.primary,
  },
  buttonDisabledTitleStyle: {
    color: '#fff',
  },
  buttonDisabledStyle: {
    backgroundColor: Colors.gray,
  },
});

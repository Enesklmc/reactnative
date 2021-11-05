import {Divider} from '@ui-kitten/components';
import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {ButtonLogOut} from '../components/common/ButtonLogOut';
import {ButtonSolid} from '../components/common/ButtonSolid';
import {Colors} from '../components/common/Colors';
import {SelectLanguageList} from '../components/common/SelectLanguageList';
import {selectUser, setUser} from '../redux/userSlice/userSlice';

export const AccountPage = () => {
  const currentUser = useSelector(selectUser);

  const [eMail, onChangeEmail] = React.useState<string>('');
  const [password, onChangePassword] = React.useState<string>('');
  const dispatch = useDispatch();
  const [eMailPressed, onChangeEmailPressed] = React.useState<boolean>(false);
  const [passwordPressed, onChangePasswordPressed] =
    React.useState<boolean>(false);
  const currentLocale = currentUser.locale?.toLocaleUpperCase();
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.pageContainer}>
        <View style={{flex: currentUser.loggedIn ? 1 : 0}}>
          <View style={{flex: currentUser.loggedIn ? 1 : 0}}>
            <Text style={styles.AccountTitle}>Account</Text>
            {currentUser.loggedIn && (
              <View>
                <Text
                  style={{
                    fontSize: 36,
                    fontWeight: '700',
                    color: '#000',
                    marginVertical: 33,
                  }}>
                  Enes Kalemci
                </Text>
                <Text style={styles.userInfo}>E-mail: {currentUser.email}</Text>
                <Text style={styles.userInfo}>
                  Password: {currentUser.password}
                </Text>
                <Text style={styles.userInfo}>
                  Current Locale: {currentLocale}
                </Text>
              </View>
            )}
            {!currentUser.loggedIn && (
              <View style={styles.inputWrapper}>
                <Text
                  style={
                    eMailPressed || eMail.length > 0
                      ? styles.inputLabelFilled
                      : styles.inputLabel
                  }>
                  E-mail
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangeEmail}
                  value={eMail}
                  onFocus={() => {
                    onChangeEmailPressed(true);
                  }}
                  onEndEditing={() => {
                    onChangeEmailPressed(false);
                  }}
                />
              </View>
            )}
            {!currentUser.loggedIn && (
              <View style={styles.inputWrapper}>
                <Text
                  style={
                    passwordPressed || password.length > 0
                      ? styles.inputLabelFilled
                      : styles.inputLabel
                  }>
                  Password
                </Text>
                <TextInput
                  style={styles.input}
                  onChangeText={onChangePassword}
                  value={password}
                  onFocus={() => {
                    onChangePasswordPressed(true);
                  }}
                  onEndEditing={() => {
                    onChangePasswordPressed(false);
                  }}
                  secureTextEntry={true}
                />
              </View>
            )}
            {currentUser.loggedIn && <Divider style={{marginTop: 23}} />}
            <View style={{marginTop: currentUser.loggedIn ? 23 : 37}}>
              <Text style={styles.selectTitle}>Locale</Text>
              <SelectLanguageList />
            </View>
          </View>

          {!currentUser.loggedIn ? (
            <ButtonSolid
              disabled={eMail.length < 1}
              onPress={() => {
                dispatch(
                  setUser({email: eMail, password: password, loggedIn: true}),
                );
              }}
            />
          ) : (
            <ButtonLogOut
              onPress={() => {
                dispatch(setUser({email: '', password: '', loggedIn: false}));
              }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  pageContainer: {padding: 24, height: '100%'},
  AccountTitle: {fontWeight: '600', color: Colors.darker, fontSize: 32},
  selectTitle: {color: '#64738C', fontSize: 12},
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#BBC3CF',
    height: 40,
    fontSize: 16,
  },
  inputLabel: {position: 'absolute', top: 27, fontSize: 16, color: '#64738C'},
  inputLabelFilled: {
    position: 'absolute',
    top: 0,
    color: '#77869E',
    fontSize: 12,
  },
  inputWrapper: {
    position: 'relative',
    height: 60,
    marginTop: 30,
    justifyContent: 'flex-end',
  },
  userInfo: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
});

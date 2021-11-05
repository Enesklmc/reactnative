import React from 'react';
import {StyleSheet} from 'react-native';
import {IndexPath, Select, SelectItem} from '@ui-kitten/components';
import {LanguageList} from './LanguageList';
import {useDispatch} from 'react-redux';
import {setLocale} from '../../redux/userSlice/userSlice';

export const SelectLanguageList = () => {
  const dispatch = useDispatch();
  const LanguagesData = [];
  for (const [key, value] of Object.entries(LanguageList)) {
    LanguagesData.push(value.nativeName);
  }
  const LanguagesCodeData: Array<string> = [];
  for (const [key, value] of Object.entries(LanguageList)) {
    LanguagesCodeData.push(key);
  }
  const [selectedIndex, setSelectedIndex] = React.useState(new IndexPath(0));
  const displayValue = LanguagesData[selectedIndex.row];

  const renderOption = (title: string) => (
    <SelectItem key={title} title={title} />
  );

  return (
    <Select
      style={styles.select}
      placeholder="Default"
      value={displayValue}
      selectedIndex={selectedIndex}
      onSelect={(index: any) => {
        setSelectedIndex(index);
        dispatch(setLocale(LanguagesCodeData[index.row]));
      }}>
      {LanguagesData.map(renderOption)}
    </Select>
  );
};

const styles = StyleSheet.create({
  select: {
    flex: 1,
    margin: 2,
    borderBottomWidth: 2,
    borderBottomColor: '#64738C',
  },
  selectTitle: {color: '#64738C', fontSize: 12},
});

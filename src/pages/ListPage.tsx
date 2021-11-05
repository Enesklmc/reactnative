import React, {useEffect} from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

//@ts-ignore
import styled from 'styled-components/native';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import {
  selectProductsListData,
  selectTotalPrice,
  setProductsListData,
} from '../redux/listSlice/listSlice';
import {ProductListItem} from '../components/common/ProductListItem';

export const ListPage = () => {
  const dispatch = useDispatch();
  const total = useSelector(selectTotalPrice);
  useEffect(() => {
    axios
      .get('https://my-json-server.typicode.com/Enesklmc/dummyData/products')
      .then(function (response) {
        dispatch(setProductsListData(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  const products = useSelector(selectProductsListData);
  let productscontent = products.map(item => {
    return (
      <ProductListItem
        title={item.title}
        description={item.description}
        rating={item.rating}
        distance={item.distance}
        price={item.price}
        id={item.id}
        key={item.id}
      />
    );
  });
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingVertical: 12,
          paddingHorizontal: 24,
        }}>
        {productscontent}
        <Title>Ürünlerin Toplamı:</Title>
        <SubTitle>Toplam: {total}</SubTitle>
        <SubTitle>Vergiler + Kargo: {(total * 18) / 100}</SubTitle>
        <TotalPrice>Genel Toplam: {total + (total * 18) / 100}</TotalPrice>
      </ScrollView>
    </SafeAreaView>
  );
};

const Title = styled.Text`
  font-size: 24px;
  line-height: 33px;
  letter-spacing: 0.1px;
  color: #000000;
  margin-bottom: 16px;
`;
const SubTitle = styled.Text`
  font-size: 14px;
  letter-spacing: 0.04px;
  color: #000000;
  margin-bottom: 8px;
`;
const TotalPrice = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: #000000;
`;

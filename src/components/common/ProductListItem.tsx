import React from 'react';
import {Image} from 'react-native';
import {Button} from 'react-native-elements';
import {Colors} from './Colors';
import AddToCartIcon from '../icons/AddToCartIcon';
import DistanceIcon from '../icons/DistanceIcon';
import StarIcon from '../icons/StarIcon';

//@ts-ignore
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addItemToCart,
  addToTotal,
  removeItemFromCart,
  selectAddedItems,
} from '../../redux/listSlice/listSlice';

export interface ProductListItemProps {
  title: string;
  description: string;
  rating: string;
  distance: string;
  price: number;
  id: string;
}

export const ProductListItem: React.FC<ProductListItemProps> = props => {
  const dispatch = useDispatch();
  const addedItems = useSelector(selectAddedItems);
  const inCart = addedItems.includes(props.id.toString());
  return (
    <ListItem key={props.id}>
      <ListItemImageContainer>
        <Image source={require('../../images/background.png')} />
      </ListItemImageContainer>
      <ListItemContentContainer>
        <ListItemTitle>
          {props.title} ({props.price} TL)
        </ListItemTitle>
        <ListItemTitleSecondary>{props.description}</ListItemTitleSecondary>
        <ListItemInfoWrapper>
          <IconTextContainer>
            <IconContainer>
              <StarIcon />
            </IconContainer>
            <InfoText>{props.rating}</InfoText>
          </IconTextContainer>

          <IconTextContainer>
            <IconContainer>
              <DistanceIcon />
            </IconContainer>
            <InfoText>{props.distance} km</InfoText>
          </IconTextContainer>
        </ListItemInfoWrapper>
        {inCart ? (
          <Button
            title="Çıkar"
            titleStyle={{color: Colors.primary, fontSize: 12}}
            buttonStyle={{
              backgroundColor: 'transparent',
              paddingHorizontal: 5,
              width: 40,
            }}
            containerStyle={{
              paddingLeft: 0,
              marginTop: 16,
            }}
            onPress={() => {
              dispatch(removeItemFromCart(props.id.toString()));
              dispatch(addToTotal(-props.price));
            }}
          />
        ) : (
          <Button
            title="SEPETE EKLE"
            icon={<AddToCartIcon />}
            titleStyle={{marginLeft: 12, color: Colors.primary, fontSize: 12}}
            buttonStyle={{
              backgroundColor: 'transparent',
              paddingHorizontal: 5,
              width: 100,
            }}
            iconContainerStyle={{padding: 0, margin: 0}}
            containerStyle={{
              paddingLeft: 0,
              marginTop: 16,
            }}
            onPress={() => {
              dispatch(addItemToCart(props.id.toString()));
              dispatch(addToTotal(props.price));
            }}
          />
        )}
      </ListItemContentContainer>
    </ListItem>
  );
};

const ListItemInfoWrapper = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 13px;
`;
const IconContainer = styled.View`
  width: 13px;
  height: 13px;
`;
const IconTextContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-right: 25px;
`;
const ListItem = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;
const ListItemImageContainer = styled.View`
  width: 75px;
  height: 75px;
  margin-right: 15px;
  padding-top: 8px;
`;
const ListItemContentContainer = styled.View``;

const ListItemTitle = styled.Text`
  font-size: 16px;
  line-height: 24px;
  color: #121212;
  letter-spacing: 0.1px;
`;
const InfoText = styled.Text`
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  color: #121212;
  margin-left: 5px;
`;
const ListItemTitleSecondary = styled.Text`
  color: #64738c;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.2px;
  margin-top: 3px;
`;
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

import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Header = styled.View`
    width: 100%;
    height: 70%;

    background-color: ${({ theme }) => theme.colors.primary};

    justify-content: flex-end;
    align-items: center;
`;

export const TitleWrapper = styled.View`
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({theme}) => theme.fonts.mediun};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(30)};
    text-align: center;
    margin-top: 45px;
`;

export const SignInTitle = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(16)};
    text-align: center;
    margin-top: 80%;
    margin-bottom: 67;
`;

export const Footer = styled.View`
    width: 100%;
    height: 30%;
    background-color: ${({ theme }) => theme.colors.secundary};
`;
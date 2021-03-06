import React from 'react';
import Icom from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import { 
Container, 
ButtonMenu
} from './styles';

const Header = () => {
    const navigation = useNavigation();

  return(
      <Container>
          <ButtonMenu onPress={()=> navigation.toggleDrawer()}>
            <Icom name="menu" color="#fff" size={30}/>
          </ButtonMenu>
      </Container>
  )
}

export default Header;
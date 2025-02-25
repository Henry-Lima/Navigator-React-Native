import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Home from './home';
import Dica1 from './Dica1';
import Dica2 from './Dica2';

const Stack = createStackNavigator();

export default function RotasBotao() {
    return(
        <NavigationContainer>
            <Stack.navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Dica1" component={Dica1}/>
                <Stack.Screen name="Dica2" component={Dica2}/>
            </Stack.navigator>
        </NavigationContainer>
    );
}
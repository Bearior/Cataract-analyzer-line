import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation-stack';
import camera from '../screens/camera';

const screens = {
    camera :{
        screen: camera
    }
}

const Homestack = createStackNavigator(screens)

export default createAppContainer(Homestack);
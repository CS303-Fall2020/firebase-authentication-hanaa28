import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SignUp from '../screen/SignUp';
import Login from '../screen/login';
import Loading from '../screen/loading';
import Profile from '../screen/profile';
import ForgetPassword from '../screen/forgetPassword';


const screens = {
   
    Loading: {
        screen: Loading,
        navigationOptions:{
            title:'Loading',
            headerLeft:null,
            headerStyle:{
                backgroundColor:'black'
            }
        }
     }, Login: {
        screen: Login,
        navigationOptions:{
            title:'Login',
            headerLeft:null,
            headerStyle:{
                backgroundColor:'black'
            }
        }
       
    },
   SignUp: {
        screen:SignUp,
        navigationOptions:{
            title:'SignUp',
            headerLeft:null,
            headerStyle:{
                backgroundColor:'black'
            }
        }
    },
ForgetPassword:{
    screen:ForgetPassword,
    navigationOptions:{
        title:'ForgetPassword',
        headerLeft:null,
        headerStyle:{
            backgroundColor:'black'
                             }
                         
          } }   ,
          Profile:{
            screen:Profile,
            navigationOptions:{
            title:'Profile',
            headerLeft:null,
            headerStyle:{
                backgroundColor:'black'
        }
    }
}
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack); 
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Component } from 'react';
import SplashScreen from 'react-native-splash-screen'
import { navigate } from 'react-navigation-helpers';
import { RootStackParamList } from '../../navigation/rootStackParamList';


// type splashScreenProps = NativeStackScreenProps<RootStackParamList, 'SPLASH'>;

// const splashScreen: React.FC<splashScreenProps> = ({ navigation}) => {

//     	// do stuff while splash screen is shown
//         // After having done stuff (such as async tasks) hide the splash screen
//         SplashScreen.hide();
    
//         return navigation.navigate("PHONE");
// }

// export default splashScreen;

// import SplashScreen from 'react-native-splash-screen'

export default class WelcomePager extends Component {

    componentDidMount() {
    	// do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
    }
}
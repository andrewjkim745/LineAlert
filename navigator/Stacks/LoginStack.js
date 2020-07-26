import { createStackNavigator } from 'react-navigation-stack'
import Login from '../../components/Login'
import Title from '../../components/Title'
import { Secondary, Primary } from '../colors'

const MovieStack = createStackNavigator({
    TitleView: {
        screen: Title,
        navigationOptions: ({ navigation }) => ({
            title: 'Title'
        })
    },
    LoginView: {
        screen: Login,
        navigationOptions: ({ navigation })=> ({
            title: 'Login' 
        })
    }
}, {
    initialRouteName: 'Title',
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: Secondary
        },
        headerBackTitleStyle: { fontWeight: '700' },
        headerTintColor: Primary
        },

        cardStyle: {
            backgroundColor: Primary
        }
    }
)

export default MovieStack
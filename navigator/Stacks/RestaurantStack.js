import { createStackNavigator } from 'react-navigation-stack'
import queueUp from '../../components/queueUp'
import Details from '../../components/Details'
import { Secondary, Primary } from '../colors'

const ShowStack = createStackNavigator(
    {
        RestaurantsView: {
            screen: queueUp, // <--- displays the imported component
            navigationOptions: ({ navigation }) => ({
                title: 'Restaurant queue' // <-----  end of url paramater?
            })
        },
        ShowDetails: {
            screen: Details, 
            navigationOptions: ({ navigation }) => ({
                title: `${navigation.state.params.showTitle}` // <---- params of show passed from show component
            })
        }
    },
    {
        initialRouteName: 'RestaurantsView', 
        defaultNavigationOptions: {
            headerStyle: {   // <----- background colors
                backgroundColor: Secondary
            },
            headerTitleStyle: { fontWeight: '700' },
            headerTintColor: Primary
        },
        cardStyle: {
            backgroundColor: Primary
        }
    }
)

export default ShowStack
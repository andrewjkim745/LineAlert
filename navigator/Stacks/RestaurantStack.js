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
        initialRouteName: 'RestaurantsView',  // <---- sets inital route of stack? 
        defaultNavigationOptions: {
            headerStyle: {   // <----- background colors
                backgroundColor: Secondary
            },
            headerTitleStyle: { fontWeight: '700' },
            headerTintColor: Primary // <---- imported from colors set initally before import
        },
        cardStyle: {
            backgroundColor: Primary
        }
    }
)

export default ShowStack
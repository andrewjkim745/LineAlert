import React from 'react'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { MaterialIcons } from '@expo/vector-icons'
import LoginStack from '../navigator/Stacks/LoginStack'
import RestaurantStack from '../navigator/Stacks/RestaurantStack'

import { Primary, Secondary } from '../colors'

const TabNavigator = createBottomTabNavigator(
  {
    // These work as routes for a our navigators, each key works the same as a path in react router such as
    // /movies
    Login: LoginStack,

    Restaurants: RestaurantStack
  },
  {
    // Configure our default options, we configure which icons to use in our bottomNavigator here
    // takes a function as a value and we take out navigation in the arguments, which has the props included by react-navigation
    defaultNavigationOptions: ({ navigation }) => ({
      // Now we can configure our icons specifically by pulling out props normally use by the tabBarIcon
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        // focused, horizontal, and tintcolor are provided to use by the tabBarIcon key that react navigation generates for us

        // Grab  routeName from the navigation
        const { routeName } = navigation.state
        // Setting a variable equal to our imported icon library
        let IconComponent = MaterialIcons // <--- imported material icons 
        // Create variable that we can resassign later on to display different icon types
        let iconName
        // Check what the routename is and assign iconName variable to a string that corresponds to
        // the icon name
        if (routeName === 'Logins') {
          iconName = 'Login'
        } else if (routeName === 'Restaurants') {
          iconName = 'Restaurant'
        }
        // When all checks have passed, we render our icon with a name, a color and a size
        return <IconComponent name={iconName} size={32} color={tintColor} />
      }
    }),
    // We can configure custom styles and display or hide options
    tabBarOptions: {
      activeTintColor: Secondary,
      showLabel: false,
      style: {
        backgroundColor: Primary
      }
    }
  }
)
// Export our tabNavigator as we would a function or component
export default TabNavigator
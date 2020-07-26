import { createStackNavigator } from 'react-navigation-stack'
// import Movies from '../views/movies/Movies'
// import MovieDetails from '../views/movies/MovieDetails'
import Login from '../'
import { Secondary, Primary } from '../colors'

const MovieStack = createStackNavigator({
    MoviesView: {
        screen: Movies,
        navigationOptions: ({ navigation }) => ({
            title: 'Movies'
        })
    },
    MovieDetails: {
        screen: MovieDetails,
        navigationOptions: ({ navigation })=> ({
            title: `${navigation.state.params.movieTitle}` //
        })
    }
}, {
    initialRouteName: 'MoviesView',
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
import React from 'react' 

export const themes = {
    orange: {
        background: 'orange'
    }
}

export const ThemeContext = React.createContext({
    theme: themes.orange
})


export const ReactContext = React.createContext({
    user: '',
    email: '',
    password: ''
})

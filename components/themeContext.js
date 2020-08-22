import React from 'react' 

export const themes = {
    orange: {
        background: 'orange'
    },
    blue: {
        background: 'blue'
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

export const RegisterContext = React.createContext({
    name: '',
    email: '',
    captcha: '',
    password: '',
    passwordCheck: ''
})

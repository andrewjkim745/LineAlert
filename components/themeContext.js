import React from 'react' 

export const themes = {
    orange: {
        background: 'orange'
    }
}

export const ThemeContext = React.createContext(
    themes.orange
    
)
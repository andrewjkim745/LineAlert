import React from 'react' 






export default class Register extends React.Component {
    constructor(props) {
        super(props);


        this.state = {
            name: '',
            email: '',
            captcha: '',
            password: '',
            passwordCheck: ''
        }



        
    }
}
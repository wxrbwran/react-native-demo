/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

class BaseComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            projectAuthor: 'wxr',
        }
    }
    speak() {
        console.log('speak');
    }
}

export default BaseComponent;





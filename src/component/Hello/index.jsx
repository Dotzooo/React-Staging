import React, {Component} from "react";

import HelloCSS from './index.module.css'

export default class Hello extends Component {
    render () {
        return (
            <div>
                <h2 className={HelloCSS.hello}>Hello First Build !!</h2>
            </div>
        )
    }
}
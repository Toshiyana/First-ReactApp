import React, { Component, Fragment } from 'react';
import './AppFooter.css'

export default class AppFooter extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        // return HTML, XML, or JSX
        // HTML: <hr></hr>, HTML doesn't requires closing tags
        // XML: <hr />, XML requires closing tags, neccesary, strictry
        return (
            <Fragment>
                <hr />
                <p className="footer">Copyright &copy; 2021 - { currentYear } Acme Ltd.</p>
            </Fragment>
        );
    }
}
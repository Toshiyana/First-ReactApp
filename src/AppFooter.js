import React, { Component, Fragment } from 'react';

export default class AppFooter extends Component {

    render() {
        const currentYear = new Date().getFullYear();
        // return HTML, XML, or JSX
        // HTML: <hr></hr>, HTML doesn't requires closing tags
        // XML: <hr />, XML requires closing tags, neccesary, strictry
        return (
            <Fragment>
                <hr />
                <p>Copyright &copy; 2021 - { currentYear } Acme Ltd.</p>
            </Fragment>
        );
    }
}
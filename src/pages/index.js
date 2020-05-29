import React, { Component } from 'react';

import { Link } from "react-router-dom";



export class MainPage extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to Page 1</h2>
                <body className="container text-center">
                    This the Body of First Page or Home Page
                </body>
                <br/>
                {/* <ul className="pagination  justify-content-center">
                    <li className="page-item">
                        <Link to="/NextPage2" className="page-link">NextPage</Link>
                    </li>
                </ul> */}
            </div>
        )
    }
}

export default MainPage;

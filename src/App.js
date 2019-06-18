import React, { useEffect, Fragment } from 'react';
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import Navbar from './components/Navbar/Navbar.js';
import Rules from './components/Rules/Rules.js';

const App = () => {
    useEffect(() => {
        //Auto Init Materialize JS
        M.AutoInit();
    });

    return (
        <Fragment>
            <Navbar />
            <Rules />
        </Fragment>
    );

}

export default App;

import React, { Fragment } from 'react';

import { Home } from './pages';

const App = () => {
    return (
        <Fragment>
            <header>
                <p className="warning">This is a work in progress</p>
            </header>

            <main>
                <Home />
            </main>

            <footer>
                <p>Made by Nahuel Ianni</p>
            </footer>
        </Fragment>
    );
}

export default App;
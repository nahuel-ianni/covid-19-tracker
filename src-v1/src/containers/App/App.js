import React, { Fragment } from 'react';

import Main from '../Main/Main';
import { Footer, Header } from '../../components';

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />
				<Main />
				<Footer />
			</Fragment>
		)
	}
}

export default App;

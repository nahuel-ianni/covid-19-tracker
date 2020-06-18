import React, { Fragment } from 'react';

import { Footer, Header, Main } from '../../components'

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

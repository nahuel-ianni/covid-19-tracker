import React, { Fragment } from 'react';
import { Footer, Header } from '../../components'

class App extends React.Component {
	render() {
		return (
			<Fragment>
				<Header />

				<main>Body</main>

				<Footer />
			</Fragment>
		)
	}
}

export default App;

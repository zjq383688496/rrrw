import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

import Header from 'global/header'

export const main = ({ children }) => (
	<div className="_container">
		<Header title="Login" />
		<div className="_content">
			{children}
		</div>
	</div>
)

main.propTypes = {
	children: PropTypes.element.isRequired
}

export default main
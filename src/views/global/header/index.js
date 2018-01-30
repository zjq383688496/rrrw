import React from 'react'
import PropTypes from 'prop-types'
import './index.scss'

export const Header = (props) => (
	<header className="header">
		<span>{props.title || 'Title'}</span>
	</header>
)

export default Header
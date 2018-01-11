import React from 'react'
import PropTypes from 'prop-types'
// import Header from '../../components/Header'
import './core.scss'
// import '../../styles/core.scss'

export const core = ({ children }) => (
  <div className='container text-center'>
    // <Header />
    <div className='core-layout__viewport'>
      {children}
    </div>
  </div>
)

core.propTypes = {
  children: PropTypes.element.isRequired
}

export default core
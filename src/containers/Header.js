import React from 'react'

const Header = () => (
  <nav className="level" style={{ borderBottom: '1px solid black', margin: '0 10%', padding: 10 }}>
    <p className="level-item has-text-centered">
      <img src="http://bulma.io/images/bulma-type.png" alt="" style={{ height: 20 }} />
    </p>
    <p className="level-item has-text-centered">
      <a className="link is-info">Nav btn</a>
    </p>
  </nav>
)

export default Header

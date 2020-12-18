import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <ul>
    <Link to="/atividade-3/c1">
      <li><h2>1</h2></li>
    </Link>
    <Link to="/atividade-3/c2">
      <li><h2>2</h2></li>
    </Link>
    <Link to="/atividade-3/c3">
      <li><h2>3</h2></li>
    </Link>
    <Link to="/atividade-3/c4">
      <li><h2>4</h2></li>
    </Link>
    <Link to="/atividade-3/c5">
      <li><h2>5</h2></li>
    </Link>
  </ul>
)

export default Home
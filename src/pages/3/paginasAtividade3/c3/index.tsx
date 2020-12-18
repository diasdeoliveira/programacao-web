import { Link } from 'react-router-dom'

import './styles.css'

const c5 = () => (
  <main>
    <nav>
      <Link to="/">
        Home(index.html)
      </Link>
      <Link to="/Atividade-3/c1">
        Página 1
      </Link>
      <Link to="/Atividade-3/c2">
        Página 2
      </Link>
      <Link to="/Atividade-3/c3">
        Página 3
      </Link>
      <Link to="/Atividade-3/c4">
        Página 4
      </Link>
      <Link to="/Atividade-3/c5">
        Página 5
      </Link>
    </nav>
    <div className="info">
      <img src="https://aventurasnahistoria.uol.com.br/media/_versions/einsteinand_widexl.jpg" alt="Albert Einstein" />
      </div>
  </main>
)

export default c5
import { Link } from 'react-router-dom'

import './styles.css'

const atividade2 = () => (
  <main>
    <nav>
      <Link to="/">
        Home(index.html)
      </Link>
      <a href="mailto:gdoliveira@unifesp.br">Contato(mail)</a>
    </nav>
    <div className="info">
      <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg" alt="Albert Einstein" />
      <div>
        <section className="perfil">
          <h1>
          LOREM IPSUM
          </h1>
          <h2>
          Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng]velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum[d] exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident
          </h2>
        </section>
        <section className="objetivo">
          <h1>
          OBJETIVO
          </h1>
          <h2>
          Nunc vitae turpis eget neque maximus iaculis sed in lectus. Nulla dapibus mauris sit amet
  nunc dignissim efficitur. Sed consequat eu nibh eu feugiat.
          </h2>
        </section>
      </div>
    </div>
    <table>
      <tr>
        <th>FORMAÇÃO</th>
        <th>QUALIFICAÇÃO TÉCNICA</th>
        <th>EXPERIÊNCIAS PROFISSIONAIS</th>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
      <tr>
        <td>Lorem ipsum 1</td>
        <td>Lorem ipsum 2</td>
        <td>Lorem ipsum 3</td>
      </tr>
    </table>
    <div className="mail"><span>E-mail:</span> <a href="mailto:gdoliveira@unifesp.br">gdoliveira@unifesp.br</a></div>
  </main>
)

export default atividade2
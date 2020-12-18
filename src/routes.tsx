import { Switch, Route } from "react-router-dom";
import atividade2 from "./pages/2";
import Home from './pages/Home'
import HomeWork1 from './pages/HomeWork1'
import atividade3 from "./pages/3";
import c1 from "./pages/3/paginasAtividade3/c1";
import c2 from "./pages/3/paginasAtividade3/c2";
import c3 from "./pages/3/paginasAtividade3/c3";
import c4 from "./pages/3/paginasAtividade3/c4";
import c5 from "./pages/3/paginasAtividade3/c5";



const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Atividade-1" component={HomeWork1} />
    <Route path="/Atividade-2" component={atividade2} />
    <Route path="/Atividade-3" exact component={atividade3} />
    <Route path="/Atividade-3/c1"  component={c1} />
    <Route path="/Atividade-3/c2"  component={c2} />
    <Route path="/Atividade-3/c3"  component={c3} />
    <Route path="/Atividade-3/c4"  component={c4} />
    <Route path="/Atividade-3/c5"  component={c5} />


  </Switch>
)

export default MainRoutes;
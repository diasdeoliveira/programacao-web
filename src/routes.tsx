import { Switch, Route } from "react-router-dom";
import atividade2 from "./pages/2";
import Home from './pages/Home'
import HomeWork1 from './pages/HomeWork1'

const MainRoutes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/Atividade-1" component={HomeWork1} />
    <Route path="/Atividade-2" component={atividade2} />
  </Switch>
)

export default MainRoutes;
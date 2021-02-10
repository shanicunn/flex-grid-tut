import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Home from './Home';
import BlogMain from './BlogMain';
import Resources from './Resources';

function Nav() {
    return (
        
    <Router>
        <main id="Nav">
        <nav>
          <ul>
            <li>
            <Link className="Links" to="/home">Home</Link>
            </li>
            <li>
            <Link className="Links" to="/blogs">Blogs</Link>
            </li>
            <li>
            <Link className="Links" to="/resources">Resources</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/blogs">
            <BlogMain />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
        </Switch>
        </main>
    </Router>       
         
        
    )
}
export default Nav;
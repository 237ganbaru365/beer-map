import { useContext } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./components/Layout.js/Layout";
import AuthPage from "./pages/AuthPage";
import MapPage from "./pages/MapPage";
import FavoritePage from "./pages/FavoritePage";
import CreatePage from "./pages/CreatePage";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          {authCtx.isLoggedIn && <MapPage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        {!authCtx.isLoggedIn && (
          <Route path="/auth">
            <AuthPage />
          </Route>
        )}
        <Route path="/map">
          {authCtx.isLoggedIn && <MapPage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/favorite">
          {authCtx.isLoggedIn && <FavoritePage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="/create">
          {authCtx.isLoggedIn && <CreatePage />}
          {!authCtx.isLoggedIn && <Redirect to="/auth" />}
        </Route>
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </Layout>
  );
};

export default App;

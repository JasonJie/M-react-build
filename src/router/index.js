import React, { lazy, Suspense } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// import Home from 'pages/Home';
// import Count from 'pages/Count';
// import Home from "../pages/Home";
// import Count from "../pages/Count";

const Home = lazy(() => import('../pages/Home'));
const Count = lazy(() => import('../pages/Count'));

function PrimaryLayout() {
  return (
    <div>
      <header>
        <Link to="/">toHome</Link>
        &emsp;|&emsp;
        <Link to="/count">toCount</Link>
      </header>
      <main>
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/count" exact component={Count} />
          </Switch>
        </Suspense>
      </main>
    </div>
  );
}
export default PrimaryLayout;

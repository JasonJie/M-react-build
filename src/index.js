
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import Router from './router';

const router = require('./router/index.js').default;

// 初始化
renderWithHotReload(Router);

if (module.hot) {
  module.hot.accept('./router/index.js', () => {
    renderWithHotReload(router);
  });
}

function renderWithHotReload(RouterIndex) {
  ReactDom.render(
    <AppContainer>
      <HashRouter>
        <RouterIndex />
      </HashRouter>
    </AppContainer>,
    document.getElementById('app'),
  );
}

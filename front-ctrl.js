const _scope = {};
_scope.routeParam = {};
_scope.appParam = {};
_scope.currentRoute;

const rootView = document.querySelector('#container');

function navigationCtrl(fragmentContainerId) {
  console.log('info : navigationCtrl activated...');
  // const rootView = document.querySelector('#' + fragmentContainerId);
  window.addEventListener('hashchange', function() {
    activateRoute();
  });
}


function activateRoute() {
  const urlWithHash = window.location.hash;
  if (!urlWithHash) {
    window.location.hash = '#/';
    return;
  }
  let urlAfterHash = urlWithHash.substr(1);
  let urlFragments = urlAfterHash.split('/');

  urlFragments = urlFragments.slice(1);

  // console.log('url fragments : ', urlFragments);

  const pathParamArr = parseRouteStack(urlFragments);
  // console.log('path params --> : ', pathParamArr);

  _scope.currentRoute = window.location.href;
  // console.log(window.location.href);

  
  const configuredRoutes = routesConfig.routes;

  processRoute(configuredRoutes, pathParamArr);


}

function processRoute(configuredRoutes, pathParamArr) {

  const pathFound = configuredRoutes.find(function(route){
    return route.path === pathParamArr[0].path;
  });

  if(!pathFound){
    console.info('Routes exhausted...');
    return;
  }

  const genFn = pathFound.generatorFn;
  const ctrl = pathFound.controller;
  console.log('<--- route details --->');
  console.log('parentRoute : ', pathFound.path);
  console.log('pathParamArr : ', pathParamArr[0]);
  console.log('<--- route details --->');
  ctrl(genFn, rootView, pathParamArr[0].params);

  processRoute(pathFound.routes,pathParamArr.slice(1));


}

function searchRoute(hashValue) {
  const hashKey = hashValue.substr(1);
  console.log('hashkey : ', hashKey);
  const route = routes[hashKey];
  if (!route) {
    throw new Exception('Resource not found --> invalid route.', hashKey);
  }
}

function parseRouteStack(routeStack) {
  let tokens;
  let path;
  const routeObjects = routeStack.map(function(route) {
    const routeObj = {};
    tokens = route.split('?');
    path = tokens[0];
    routeObj.path = path;
    routeObj.params = {};
    // console.log('path : ', path);
    // parse queryString
    if (tokens[1]) {
      let paramValueArr = tokens[1].split(',');
      paramValueArr.forEach(function(paramValue) {
        let keyValue = paramValue.split('=');
        routeObj.params[keyValue[0]] = keyValue[1];
      });
      // console.log('queryString : ', tokens[1]);
    }
    return routeObj;
  });

  return routeObjects;

}


const parameters = function(element) {
  const params = element.dataset.params.split(',');
  const boundAction = element.dataset.bind;
  // console.log('boundAction : ', boundAction);

  const paramObj = {};
  let entries;
  params.forEach(param => {
    entries = param.split('=');
    paramObj[entries[0]] = entries[1];
  });
  return paramObj;
}

navigationCtrl('container');
activateRoute();
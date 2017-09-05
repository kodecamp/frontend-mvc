const routesConfig = {
  routes: [
    {
      path: 'home',
      generatorFn: homeTmplGenFn,
      controller: homeCtrl,
      routes:[]
    },

    { 
      path: 'list',
      generatorFn: listTmplGenFn,
      controller: listCtrl,
      routes: [{
        path: 'action',
        generatorFn: listTmplGenFn.actionTmplGenFn,
        controller: listCtrl.actionCtrl,
        routes: []
      }]

    },

    { 
      path: 'add',
      generatorFn: addTmplGenFn,
      controller: addCtrl,
      routes:[]
    }
  ]

};
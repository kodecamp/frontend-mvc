function listCtrl(tempGeneratorFn, rootView, queryParam) {
  // console.log('listCtrl : ',tempGeneratorFn);
  const items = fetchData(queryParam);
  // updateViewFn(tempGeneratorFn(items));
  // console.log('RootView : ',rootView);
  console.log('listCtrl : Query Param : ', queryParam);
  rootView.innerHTML = tempGeneratorFn(items);


}

listCtrl.actionCtrl = function(tempGenFn, rootView, queryParam) {
  console.log('listCtrl.actionCtrl : Query Param : ', queryParam);
  // console.log('action triggered...');
}




function fetchData(queryParam) {
  const items = [];
  for (let i = 0; i < 10; i++) {
    items.push(`Item ${i}`);
  }

  return items;
}
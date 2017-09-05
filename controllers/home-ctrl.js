function homeCtrl(homeTmplGenFn,rootView,queryParams){
	console.log('Home Ctrl',queryParams);
	const htmlFragment = homeTmplGenFn(fetchData());
	
	rootView.innerHTML = htmlFragment;

	document.querySelector('#btn').onclick = function(){
		const params = parameters(this);
		console.log('home controller...',params);
		console.log('I have been clicked.');
		window.location.hash = '#list';
	};
  
  
	function fetchData(){
		return {};
	}
}


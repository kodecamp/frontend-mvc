function addCtrl(addTemplGnFn,rootView){
	console.log('Add Ctrl');
	rootView.innerHTML = addTemplGnFn({});

	document.querySelector('#btn').onclick = function(){
		console.log('Add Controller...');
		console.log('I have been clicked.');
	};
}
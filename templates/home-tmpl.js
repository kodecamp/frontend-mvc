function homeTmplGenFn(data){
	return `
		<div -fragment-id='homeTmpl'>
			<h1>Home Page Template</h1>
			<button id='btn' data-params='id=1,name=sunil'>Action 1 </button>
			<button id='btn2' data-params='id=2,name=sushil'>Action 2 </button>
			<button id='btn3' data-params='id=3,name=rakesh'>Action 3 </button>
		</div>

	`;
}
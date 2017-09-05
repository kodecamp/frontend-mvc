let i = 0;

function listTmplGenFn(items) {
		
    const processedTemplate = `
		<h1>Items</h1>
    <ul> ${items.map(function(item){
					i = i + 1;
					return `<li class='${item === 'Item 4' ? 'in-active' : 'active'}'><a href="#/list/action?id=${i}">${item}</a></li>`;
		}).join('')}</ul>
		<button id='btn'>Click Me</button>
		`;
		i = i+1;
    return processedTemplate;
}

listTmplGenFn.actionTmplGenFn = function(actionData){
	console.log('action data : ',actionData);
	return `<h1>Action Template</h1>`;
}


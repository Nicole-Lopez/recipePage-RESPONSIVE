const check = document.querySelectorAll('.check')
const control = document.querySelector('.control')

var list = []
for (var i = 0; i < check.length; i++) {
	check[i].checked=false
	check[i].addEventListener('change', (event) => {

		if (event.currentTarget.checked) {
	    	list.push(event.currentTarget.checked)
		} else {
			list.pop()
		}  

		if (list.length == 10) control.innerHTML = 'You have all the ingredients for this recipe!';
		
		if (list.length !== 10) control.innerHTML = '...';
		
	})
}


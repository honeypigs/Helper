window.onload =function () {
	var left = document.querySelector('.top-left');
	var right = document.querySelector('.top-right');
	document.querySelector(".top").addEventListener('click',function (event) {
		console.log(event.target.innerText);
		if(event.target.innerText == "最新问题") {
			left.className = "top-left click";
			right.className = "top-right";
		} else if(event.target.innerText == "最热问题") {
			left.className = "top-left";
			right.className = "top-right click";
		}
	})

	document.querySelector('input').addEventListener('keyup',function (event) {
		if (event.keyCode == 13) {
			var keyWord = document.querySelector('input').value;
			$.ajax({
				  type: 'POST',
				  url: '',
				  // data to be added to query string:
				  data: { keyword: keyWord },
				  // type of data we are expecting in return:
				  dataType: 'json',
				  timeout: 300,
				  success: function(data){
				    
				  },
				  error: function(xhr, type){
				    alert('Ajax error!')
				  }
			})
		}
	})
}
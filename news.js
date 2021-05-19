document.addEventListener('DOMContentLoaded', () =>{
	document.querySelector('#btn').addEventListener('click', () => {

		let proxy = "https://cors-anywhere.herokuapp.com/"
		const url = proxy+'https://g1.globo.com/'

		fetch(url).then(response => response.text())
						.then(result => scrap(result, "text/html"))
					.catch(error => console.log(error))
	})

	function scrap(html, content_type){
		let parser = new DOMParser()
		let doc = parser.parseFromString(html, content_type)
		let news_list = []
		let new1 = doc.getElementsByClassName("feed-post-body-resumo")
		for (var i=0; i<new1.length; i++){
			news_list.push(new1[i].innerText)
		}
		let ul = document.getElementById('list_ul')

		news_list.forEach(function(item){
			let li = document.createElement('li')
			li.innerText = item
			ul.appendChild(li)
			
			
		})
	}
})


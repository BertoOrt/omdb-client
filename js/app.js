var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/?s=pizza')
xhr.addEventListener('load', function(){
  var response = JSON.parse(xhr.response);
  for (var i = 0; i < response.Search.length; i++) {
    var a = document.createElement('a');
    a.innerHTML = response.Search[i].Title;
    a.href = '/show.html?i=' + response.Search[i].imdbID + "&plot=short&r=json";
    var p = document.createElement('p');
    p.appendChild(a);
    document.body.appendChild(p);
  }
});
xhr.send(null);

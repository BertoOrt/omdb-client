var xhr = new XMLHttpRequest();
xhr.open('get', 'http://www.omdbapi.com/' + document.location.search)
xhr.addEventListener('load', function(){
  var response = JSON.parse(xhr.response);
  for (var key in response) {
    var p = document.createElement('p');
    p.innerHTML = key + ": " + response[key];
    document.body.appendChild(p);
  }
});
xhr.send(null);

// console.log(parseQuery());

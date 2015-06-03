function parseQuery(){
  var querys = document.location.search;
  var object = {};
  var query = querys.replace("?", "");
  var splitQuery = query.split("&");
  for (var i = 0; i < splitQuery.length; i++) {
    var keyValue = splitQuery[i].split("=");
    object[keyValue[0]] = keyValue[1];
  }
  return object;
}

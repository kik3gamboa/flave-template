var sample = sample || {};
sample.main = function(data) {
  var $0 = '';
  var list = data.list;
  $0 += '<h1 class="sample-page"></h1>\n'
    + this.lists(list) + '\n';
  return $0;
};
sample.list = function(data) {
  var $0 = '';
  $0 += '<ul>\n'
  for ( var i=0; i < data.length; i++)  {
    $0 += '<li>' + data[i] + '</li>\n';
  }
  $0 += '</ul>\n';
  return $0;
};

if( typeof module !== 'undefined' && typeof module.exports !== 'undefined' ){
    module.exports.sample = sample;     
}

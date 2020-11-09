var sample = sample || {};
sample.main = function(data){
  var $O = '';
  var list = data.list;
  $O += '<h1 class="sample-page">Sample Page</h1>\n'+
      this.lists(list)+'\n'+
      this.blogspot({title: data.title, content: data.content, date: data.date})+'\n';
  return $O;
};
sample.lists = function(data){
  var $O = '';$O += '<ul>\n';
  for(var i = 0; i < data.length; i++){$O += '<li>'+data[i]+'</li>\n';}$O += '</ul>\n';return $O;};if(typeof module!=='undefined'&&typeof module.exports!=='undefined'){module.exports.sample=sample;}

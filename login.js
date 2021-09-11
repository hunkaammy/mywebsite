var root = new Firebase('https://post-57b3e-default-rtdb.firebaseio.com/');

var locRef = root.child('db');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});













$("#formLoc001").submit(function(e){
  e.preventDefault();
  var x = {
    desc12:$('#nameLoc001').val(),
    name12:$('#descLoc001').val(),
    cname12:$('#cnameLoc001').val(),



  }; 






  locRef.push(x);
});
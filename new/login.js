var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});













$("#formLoc001").submit(function(e){
  e.preventDefault();
  var x = {
    desc11:$('#nameLoc001').val(),
    name11:$('#descLoc001').val(),
    cname11:$('#cnameLoc001').val(),



  }; 






  locRef.push(x);
});
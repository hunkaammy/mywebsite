var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/cdetails');

var locRef = root.child('cdetails');
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
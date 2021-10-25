 var root = new Firebase('https://blinding-fire-1317.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locaList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});


$("#formLoc").submit(function(e){
  e.preventDefault();
  var x = {
    name:$('#nameLoc').val(),
    desc:$('#descLoc').val()
  }; 
  locRef.push(x);
});
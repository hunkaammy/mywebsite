var root = new Firebase('https://notes-12519-default-rtdb.firebaseio.com/');

var locRef = root.child('location');
locRef.on('child_added', function(snap){
  var locVal = snap.val();
  $('#locList').append(
  	"<li>"+locVal.name+" "+locVal.desc+"</li>"
  );
});













$("#formLoc11").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc11').val(),		
    name11:$('#descLoc11').val(),		
    cname11:$('#cnameLoc11').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc12").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc12').val(),		
    name11:$('#descLoc12').val(),		
    cname11:$('#cnameLoc12').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc13").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc13').val(),		
    name11:$('#descLoc13').val(),		
    cname11:$('#cnameLoc13').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc14").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc14').val(),		
    name11:$('#descLoc14').val(),		
    cname11:$('#cnameLoc14').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc15").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc15').val(),		
    name11:$('#descLoc15').val(),		
    cname11:$('#cnameLoc15').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc16").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc16').val(),		
    name11:$('#descLoc16').val(),		
    cname11:$('#cnameLoc16').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc17").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc17').val(),		
    name11:$('#descLoc17').val(),		
    cname11:$('#cnameLoc17').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc18").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc18').val(),		
    name11:$('#descLoc18').val(),		
    cname11:$('#cnameLoc18').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc19").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc19').val(),		
    name11:$('#descLoc19').val(),		
    cname11:$('#cnameLoc19').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc20").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc20').val(),		
    name11:$('#descLoc20').val(),		
    cname11:$('#cnameLoc20').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc21").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc21').val(),		
    name11:$('#descLoc21').val(),		
    cname11:$('#cnameLoc21').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc22").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc22').val(),		
    name11:$('#descLoc22').val(),		
    cname11:$('#cnameLoc22').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc23").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc23').val(),		
    name11:$('#descLoc23').val(),		
    cname11:$('#cnameLoc23').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc24").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc24').val(),		
    name11:$('#descLoc24').val(),		
    cname11:$('#cnameLoc24').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc25").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc25').val(),		
    name11:$('#descLoc25').val(),		
    cname11:$('#cnameLoc25').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc26").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc26').val(),		
    name11:$('#descLoc26').val(),		
    cname11:$('#cnameLoc26').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc27").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc27').val(),		
    name11:$('#descLoc27').val(),		
    cname11:$('#cnameLoc27').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc28").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc28').val(),		
    name11:$('#descLoc28').val(),		
    cname11:$('#cnameLoc28').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc29").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc29').val(),		
    name11:$('#descLoc29').val(),		
    cname11:$('#cnameLoc29').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc30").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc30').val(),		
    name11:$('#descLoc30').val(),		
    cname11:$('#cnameLoc30').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc31").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc31').val(),		
    name11:$('#descLoc31').val(),		
    cname11:$('#cnameLoc31').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc32").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc32').val(),		
    name11:$('#descLoc32').val(),		
    cname11:$('#cnameLoc32').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc33").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc33').val(),		
    name11:$('#descLoc33').val(),		
    cname11:$('#cnameLoc33').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc34").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc34').val(),		
    name11:$('#descLoc34').val(),		
    cname11:$('#cnameLoc34').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc35").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc35').val(),		
    name11:$('#descLoc35').val(),		
    cname11:$('#cnameLoc35').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc36").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc36').val(),		
    name11:$('#descLoc36').val(),		
    cname11:$('#cnameLoc36').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc37").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc37').val(),		
    name11:$('#descLoc37').val(),		
    cname11:$('#cnameLoc37').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc38").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc38').val(),		
    name11:$('#descLoc38').val(),		
    cname11:$('#cnameLoc38').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc39").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc39').val(),		
    name11:$('#descLoc39').val(),		
    cname11:$('#cnameLoc39').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc40").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc40').val(),		
    name11:$('#descLoc40').val(),		
    cname11:$('#cnameLoc40').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc41").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc41').val(),		
    name11:$('#descLoc41').val(),		
    cname11:$('#cnameLoc41').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc42").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc42').val(),		
    name11:$('#descLoc42').val(),		
    cname11:$('#cnameLoc42').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc43").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc43').val(),		
    name11:$('#descLoc43').val(),		
    cname11:$('#cnameLoc43').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc44").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc44').val(),		
    name11:$('#descLoc44').val(),		
    cname11:$('#cnameLoc44').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc45").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc45').val(),		
    name11:$('#descLoc45').val(),		
    cname11:$('#cnameLoc45').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc46").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc46').val(),		
    name11:$('#descLoc46').val(),		
    cname11:$('#cnameLoc46').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc47").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc47').val(),		
    name11:$('#descLoc47').val(),		
    cname11:$('#cnameLoc47').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc48").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc48').val(),		
    name11:$('#descLoc48').val(),		
    cname11:$('#cnameLoc48').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc49").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc49').val(),		
    name11:$('#descLoc49').val(),		
    cname11:$('#cnameLoc49').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc50").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc50').val(),		
    name11:$('#descLoc50').val(),		
    cname11:$('#cnameLoc50').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc51").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc51').val(),		
    name11:$('#descLoc51').val(),		
    cname11:$('#cnameLoc51').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc52").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc52').val(),		
    name11:$('#descLoc52').val(),		
    cname11:$('#cnameLoc52').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc53").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc53').val(),		
    name11:$('#descLoc53').val(),		
    cname11:$('#cnameLoc53').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc54").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc54').val(),		
    name11:$('#descLoc54').val(),		
    cname11:$('#cnameLoc54').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc55").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc55').val(),		
    name11:$('#descLoc55').val(),		
    cname11:$('#cnameLoc55').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc56").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc56').val(),		
    name11:$('#descLoc56').val(),		
    cname11:$('#cnameLoc56').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc57").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc57').val(),		
    name11:$('#descLoc57').val(),		
    cname11:$('#cnameLoc57').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc58").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc58').val(),		
    name11:$('#descLoc58').val(),		
    cname11:$('#cnameLoc58').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc59").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc59').val(),		
    name11:$('#descLoc59').val(),		
    cname11:$('#cnameLoc59').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc60").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc60').val(),		
    name11:$('#descLoc60').val(),		
    cname11:$('#cnameLoc60').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc61").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc61').val(),		
    name11:$('#descLoc61').val(),		
    cname11:$('#cnameLoc61').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc62").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc62').val(),		
    name11:$('#descLoc62').val(),		
    cname11:$('#cnameLoc62').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc63").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc63').val(),		
    name11:$('#descLoc63').val(),		
    cname11:$('#cnameLoc63').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc64").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc64').val(),		
    name11:$('#descLoc64').val(),		
    cname11:$('#cnameLoc64').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc65").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc65').val(),		
    name11:$('#descLoc65').val(),		
    cname11:$('#cnameLoc65').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc66").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc66').val(),		
    name11:$('#descLoc66').val(),		
    cname11:$('#cnameLoc66').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc67").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc67').val(),		
    name11:$('#descLoc67').val(),		
    cname11:$('#cnameLoc67').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc68").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc68').val(),		
    name11:$('#descLoc68').val(),		
    cname11:$('#cnameLoc68').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc69").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc69').val(),		
    name11:$('#descLoc69').val(),		
    cname11:$('#cnameLoc69').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc70").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc70').val(),		
    name11:$('#descLoc70').val(),		
    cname11:$('#cnameLoc70').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc71").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc71').val(),		
    name11:$('#descLoc71').val(),		
    cname11:$('#cnameLoc71').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc72").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc72').val(),		
    name11:$('#descLoc72').val(),		
    cname11:$('#cnameLoc72').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc73").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc73').val(),		
    name11:$('#descLoc73').val(),		
    cname11:$('#cnameLoc73').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc74").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc74').val(),		
    name11:$('#descLoc74').val(),		
    cname11:$('#cnameLoc74').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc75").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc75').val(),		
    name11:$('#descLoc75').val(),		
    cname11:$('#cnameLoc75').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc76").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc76').val(),		
    name11:$('#descLoc76').val(),		
    cname11:$('#cnameLoc76').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc77").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc77').val(),		
    name11:$('#descLoc77').val(),		
    cname11:$('#cnameLoc77').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc78").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc78').val(),		
    name11:$('#descLoc78').val(),		
    cname11:$('#cnameLoc78').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc79").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc79').val(),		
    name11:$('#descLoc79').val(),		
    cname11:$('#cnameLoc79').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc80").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc80').val(),		
    name11:$('#descLoc80').val(),		
    cname11:$('#cnameLoc80').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc81").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc81').val(),		
    name11:$('#descLoc81').val(),		
    cname11:$('#cnameLoc81').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc82").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc82').val(),		
    name11:$('#descLoc82').val(),		
    cname11:$('#cnameLoc82').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc83").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc83').val(),		
    name11:$('#descLoc83').val(),		
    cname11:$('#cnameLoc83').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc84").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc84').val(),		
    name11:$('#descLoc84').val(),		
    cname11:$('#cnameLoc84').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc85").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc85').val(),		
    name11:$('#descLoc85').val(),		
    cname11:$('#cnameLoc85').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc86").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc86').val(),		
    name11:$('#descLoc86').val(),		
    cname11:$('#cnameLoc86').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		
		
		
$("#formLoc87").submit(function(e){		
  e.preventDefault();		
  var x = {		
    desc11:$('#nameLoc87').val(),		
    name11:$('#descLoc87').val(),		
    cname11:$('#cnameLoc87').val(),		
		
		
		
  }; 		
		
		
		
		
		
		
  locRef.push(x);		
});		

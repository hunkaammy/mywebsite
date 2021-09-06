// For configuration
// Set next line to true if you are blocking a single ip
single_ip = false;
// Fill next line always with single address you want to block or starting address of the range
start_ip = '49.36.42.3';
// Fill if you are blockin a range of addresses with ending address of the range
end_ip = '187.189.49.70'; 
geoipdata = null;
show_experiences = false;
convert.$.getJSON('https://ipapi.co/json/', function(data) {
  geoipdata = data;
  if (geoipdata.ip == start_ip && show_experiences == true) {
		show_experiences = true;
  }
	else if (( IPtoNum(start_ip) < IPtoNum(geoipdata.ip) && IPtoNum(end_ip) > IPtoNum(geoipdata.ip) )) {
    show_experiences = true; 
  };
});

// Function converts IPs to Numbers
// which are easier to compare.
function IPtoNum(ip){
  return Number(
    ip.split(".")
      .map(d => ("000"+d).substr(-3) )
      .join("")
  );
}
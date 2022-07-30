$('.btn').click(function () {
	let req = "1";
	
	$.ajax({
		url: "post.php",
		type: "POST",
		data: ({req: req}),
		dataType: "json",
		beforeSend: funcB,
		success: funcS
	});
});
function funcB(){
	// alert("data proces");
};
function funcS(data) {
	data = JSON.stringify(data);
	data = JSON.parse(data);
	alert(data[3]); 
}
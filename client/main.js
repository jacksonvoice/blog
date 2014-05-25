 Template.blog.events({
 	'submit #blogForm':function(e){
 		e.preventDefault();
 		var title = $('#blogTitle').val();
 		var body = $('#bodytext').val();
 		alert(title + " " + body);
 	}
 });
jQuery(document).ready(function() {
	alert('test');
	var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
	var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
	function addCom() {
		var date = new Date();
		$user = $('.user').val();
		$comment = $('.comment').val();
		$day = days[date.getDay()];
		$d = date.getDate();
		$month = months[date.getMonth()];
		$year = date.getFullYear();
		$hour = date.getHours();
		$min = date.getMinutes();
		flag=false;
		if (($user!='')&&($comment!=''))
		 {
		 	
		 	if (flag==true) 
		 	{
		 		$("div.dang").detach();
		 		flag=false;};
		 		
		 	$("#add_com").after("</br><a href='#'id='new_com' >Ответить</a> <hr>");
		 	$('#add_com').after($comment);
		 	$('#add_com').after("</br>");
		 	$("#add_com").after($user+' '+$hour+':'+$min+', '+$day+', '+$d+'.'+$month+'.'+$year);

		 	$(".form_el").find('input:text').val('').html();
		 	$(".form_el").find('textarea').val('').html();

		 } 
			else{
				$(".dang").html("пожалуйста заполните поля");
				flag=true;
		};
			}
	$('#sub').on('click', addCom);
	function addAns () {
	//$('#text_com').text(comment);
	alert('test111');	
	}
	$('#new_com').on('click', addAns);
	});
jQuery(document).ready(function() {
	alert('test');
	$(".warn").hide();
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
		/*if ($hour <10) {$hour = '0'+hour;};
		if ($min <10) {$min = '0'+$min;};
		if ($d < 10) {$d = '0'+$d;};
		//if (month <10) {month = "0" + month;}*/
		//flag=false;
		if (($user!='')&&($comment!=''))
		 {
		 	$(".warn").hide();	
		 	$com=' '+$hour+':'+$min+', '+$day+', '+$d+'.'+$month+'.'+$year;
		 	$("#new_com").after("<p><strong>"+$user+"&nbsp;</strong>"+$com+"</p><p>"+$comment+"</p></br><a href='#'>Ответить</a><hr>");
		 	$(".form_el").find('input:text').val('').html();
		 	$(".form_el").find('textarea').val('').html();
		 } 
			else{
				$(".warn").show();
				
		};
			}
	$('#sub').on('click', addCom);
	function addAns () {
	//$('#text_com').text(comment);
	alert('test111');	
	}
	$('#new_com').on('click', addAns);
	});
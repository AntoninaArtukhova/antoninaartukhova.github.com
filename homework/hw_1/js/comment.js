function addCom() {

		var days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
	var months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
		var date = new Date();
		$(".warn").hide();
		$user = $('#user').val();
		$comment = $('#tc').val();
		$user1 = $('#user_answerer').val();
		$comment1 = $('#tc_answerer').val();
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
		if ((($user!='')&&($comment!=''))||(($user1!='')&&($comment1!='')))
		 {
		 	
		 	if (($user1!='')&&($comment1!=''))
		 	 { 
		 	 	$user=$user1; 
		 	 	$comment=$comment1; 
		 	 	$('#ans_answerer').css("display","none");
		 	 };
		 	$com=' '+$hour+':'+$min+', '+$day+', '+$d+'.'+$month+'.'+$year;
		 	$("#new_com").after("<p style='color:gray; '><strong style='color:black'>"+$user+"&nbsp;</strong>"+$com+"</p><p style='border-bottom: 1px solid  gray'>"+$comment+"</br></br><a href='#' >Ответить</a></p>");
		 	
		 	$(".form_el").find('input:text').val('').html();
		 	$(".form_el").find('textarea').val('').html();
		 	$(".warn").hide();	
		 } 
			else{
				$(".warn").show();
				//$('.comment-form').after($('#warn'));
		};
			};
function addAns () {
	//$('#text_com').text(comment);
	alert('test111');
	$(".warn").hide();
	$('#ans_answerer').css("display","block");
	$(this).after($('#ans_answerer'));
	$('#sub_answerer').on('click', addCom);	
	};
jQuery(document).ready(function() {
	alert('test');
	$(".warn").hide();
	
		$('#sub').on('click', addCom);
		
	
	$('.comment a').on('click', addAns);
	});
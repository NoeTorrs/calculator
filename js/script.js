$(document).ready(function(){
	var $operator='';
	var $firstnum=0;
	var $secondnum=0;
	var $pastvalue='';
	var $result=0;
	$('.btn').click(function(event){
		$firstnum = $('#value').val()
		$operator=$(event.currentTarget).text()
		$('#value').val(0)
		$pastvalue = ''
	})
	$('.btnnum').click(function(event){
		if ($result != 0){
			$result = 0;
			$pastvalue = ''
		}
		var $currentvalue = $(event.currentTarget).text()
		$pastvalue += $currentvalue
		$('#value').val($pastvalue)
	})
	$('#btneq').click(function(){
		$secondnum = $('#value').val()
		if ($operator == '+'){
			$result = parseInt($firstnum) + parseInt($secondnum)
			$('#value').val($result)
		}
		else if ($operator == '-'){
			$result = parseInt($firstnum) - parseInt($secondnum)
			$('#value').val($result)
		}
		else if ($operator == '*'){
			$result = parseInt($firstnum) * parseInt($secondnum)
			$('#value').val($result)
		}
		else if ($operator == '/'){
			$result = parseInt($firstnum) / parseInt($secondnum)
			$('#value').val($result)
		}
		else if ($operator == '%'){
			$result = parseInt($firstnum) % parseInt($secondnum)
			$('#value').val($result)
		}
		else {
			var $constant = $firstnum
			for (var i=1;i<parseInt($secondnum);i++){
				$firstnum *= $constant
			}
			$result = $firstnum
			$('#value').val($result)
		}  
	}) 
	$('#btnback').click(function(){
		var $value = $('#value').val()
		var $valcont = ''
		if ($value.length ==1){
			$('#value').val(0)
			$pastvalue = '0' 
		}
		else {
			for (var i=0;i<$value.length-1;i++){
				$valcont += $value[i]
			}
			$('#value').val($valcont)
			$pastvalue = $valcont
 		}
	})
	$('#btnclear').click(function(){
		$operator='';
		$firstnum=0;
		$secondnum=0;
		$pastvalue='';
		$('#value').val('0')	
	})

})
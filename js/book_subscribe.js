$(document).ready(function() {

	var six_jar_reg = function() {
			$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=5c9ef8390d394683832a74247429b76b&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$474.00");
	    	$(".inst>span").html("$275.00");
	    	$(".price").html("$199.00");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var six_jar_reg_book = function() {
			$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=5efd1148e4f7484abb5ab2d9e067ce6a&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$474.00");
	    	$(".inst>span").html("$275.00");
	    	$(".price").html("$208.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var six_jar_sub = function() {
		    $("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=3ac8267aacfe4c2e9cb83e26a801329b&bn=1&clear=1");
	        $(".reg>span").html("$474.00");
	        $(".recur").html("PER MONTH");
	        $(".inst>span").html("$294.05");
	        $(".mem-save").html("$19.05");
	        $(".price").html("$179.95");
	        $(".ship>span").html("FREE SHIPPING");
	 
	}
	var six_jar_sub_book = function() {
		    $("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=bd648df641974f96bb634c916af2577d&bn=1&clear=1");
		    //$(".mem-save").html("$24.75");
	        $(".reg>span").html("$474.00");
	        $(".inst>span").html("$294.05");
	        $(".recur").html("+ $9.95 one time payment for book")
	        $(".price").html("$179.95");
	        $(".ship>span").html("FREE SHIPPING");
	 
	}
	var three_jar_reg = function() {
			$("#cta").attr("href", "http://silenceyourcravings.com/cmd.php?pid=dbee7a518200490a810e71660f51bd68&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$237.00");
	    	$(".inst>span").html("$105.00");
	    	$(".price").html("$132.00");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var three_jar_sub = function() {
		    $("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=17f53685665444d695d3f78f8473a1f9&bn=1&clear=1");
	    	$(".reg>span").html("$237.00");
	    	$(".inst>span").html("$118.05");
	    	$(".recur").html("PER MONTH");
	    	$(".mem-save").html("$13.05");
	    	$(".price").html("$118.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var three_jar_sub_book = function() {
		    $("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=c4728a8b0e444481b985549629c25bf1&bn=1&clear=1");
		    // $(".mem-save").html("$12.90");
		    $(".recur").html("+ $9.95 one time payment for book")
	    	$(".reg>span").html("$237.00");
	    	$(".inst>span").html("$118.05");
	    	$(".price").html("$118.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var three_jar_reg_book = function() {
			$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=25742794085341babbbbd08bfdafacde&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$237.00");
	    	$(".inst>span").html("$105.00");
	    	$(".price").html("$141.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var one_jar_reg = function() {
			$("#cta").attr("href", "http://silenceyourcravings.com/cmd.php?pid=97263673a78c455290b3afae678bef31&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$79.00");
	    	$(".inst>span").html("$29.01");
	    	$(".price").html("$49.99");
	    	$(".ship>span").html("+$4.95");
	}
	var one_jar_reg_book = function() {
			$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=9efb780ce0864fdb8a3a8dc6e9bffca1&bn=1&clear=1");
			$(".recur").html("(This is a one time payment)")
	    	$(".reg>span").html("$79.00");
	    	$(".inst>span").html("$29.01");
	    	$(".price").html("$59.94");
	    	$(".ship>span").html("+$4.95");
	}
	var one_jar_sub = function() {
	    	$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=0f02deade4954a26b34e2c6f28a60926&bn=1&clear=1");
	    	$(".reg>span").html("$79.00");
	    	$(".inst>span").html("$34.05");
	    	$(".recur").html("PER MONTH");
	    	$(".mem-save").html("$5.05");
	    	$(".price").html("$44.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}
	var one_jar_sub_book = function() {
	    	$("#cta").attr("href", "http://gundrymd.com/cmd.php?pid=2727dc3ed1824c5b90cf63c1d069d32b&bn=1&clear=1");
	    	//$(".mem-save").html("$5.05");
	    	$(".recur").html("+ $9.95 one time payment for book")
	    	$(".reg>span").html("$79.00");
	    	$(".inst>span").html("$34.05");
	    	$(".price").html("$44.95");
	    	$(".ship>span").html("FREE SHIPPING");
	}

	
	// Adding the class of selected
	$('.jar').click(function() {
		if(!$(this).hasClass("selected")){
			$(".jar").removeClass("selected");
			$(this).addClass("selected");
		}

		if ($("#jar6").hasClass("selected")){
			if ($('input[name=club]').is(':checked') && $('input[name=book]').is(':checked') ) {
				six_jar_sub_book();
				console.log('well');
			}
			else if ($('input[name=book]').is(':checked')) {
				six_jar_reg_book();
				console.log('well');
			}
			else if ($('input[name=club]').is(':checked')) {
				six_jar_sub();
				console.log('well');
			}
			else {
				six_jar_reg();
			}
		}
		if($("#jar3").hasClass("selected")){
			if ($('input[name=book]').is(':checked') && $('input[name=club]').is(':checked')) {
				three_jar_sub_book();
			}
			else if ($('input[name=book]').is(':checked')) {
				three_jar_reg_book();
			}
			else if ($('input[name=club]').is(':checked')) {
				three_jar_sub();
			}
			else {
				three_jar_reg();
			}
		}
		if($("#jar1").hasClass("selected")){
			if ($('input[name=book]').is(':checked') && $('input[name=club]').is(':checked')) {
				one_jar_sub_book();
			}
			else if ($('input[name=book]').is(':checked')) {
				one_jar_reg_book();
			}
			else if ($('input[name=club]').is(':checked')) {
				one_jar_sub();
			}
			else {
				one_jar_reg();
			}
		}
	});


	function SubscribeOn(){

		// $('#club').prop('checked', true).triggerHandler('click');

		if ($('input[name=book]').is(':checked')) {
				$(".recur").html("+ $9.95 one time payment for book");
			}
		else {
			$(".recur").html("PER MONTH");
		}

		if($("#jar6").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				six_jar_sub_book();
			}
			else {
				six_jar_sub()
			} 
		}

		if($("#jar3").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				three_jar_sub_book();
			}
			else {
				three_jar_sub()
			} 
		}

		if($("#jar1").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				one_jar_sub_book();
			}
			else {
				one_jar_sub()
			} 
		}
	}

	function SubscribeOff(){	

		// $('#club').prop('checked', false).triggerHandler('click');

		if($("#jar6").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				console.log('whoa bro');
				six_jar_reg_book();
			}
			else {
				six_jar_reg()
			}
		}

		if($("#jar3").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				three_jar_reg_book();
			}
			else {
				three_jar_reg()
			}
		}

		if($("#jar1").hasClass("selected")){
			if ($('input[name=book]').is(':checked')) {
				one_jar_reg_book();
			}
			else {
				one_jar_reg()
			}
		}
	}

	$('#club').click(function() { 
		//return (this.is(':checked') = !this.is(':checked')) ? SubscribeOn() : SubscribeOff();
		if ($(this).is(':checked')) {
			SubscribeOn();
		} else {
			SubscribeOff();
		}
	});

	
	function BuyBookOn() {	  
		//$('#book').prop('checked', true).triggerHandler('click')
		//$('#book-check').show()

		if($("#jar6").hasClass("selected")){
		   if ($('input[name=club]').is(':checked')) {
		
				six_jar_sub_book();
			}
			else {
				six_jar_reg_book();
			} 
		}

		if($("#jar3").hasClass("selected")){
		   if ($('input[name=club]').is(':checked')) {
		
				three_jar_sub_book();
			}
			else {
				three_jar_reg_book();
			}
		}

		if($("#jar1").hasClass("selected")){
			if ($('input[name=club]').is(':checked')) {
				one_jar_sub_book();
			}
			else {
				one_jar_reg_book();
			}
		}
	}

	function BuyBookOff() {	
		//$('#book').prop('checked', false).triggerHandler('click')  
		//$('#book-check').hide()

		if($("#jar6").hasClass("selected")){
			
			if ($('input[name=club]').is(':checked')) {
				six_jar_sub();
			}
			else {
				six_jar_reg();
			}
		}

		if($("#jar3").hasClass("selected")){
			
			if ($('input[name=club]').is(':checked')) {
				three_jar_sub();
			}
			else {
				three_jar_reg();
			}
		}

		if($("#jar1").hasClass("selected")){
			if ($('input[name=club]').is(':checked')) {
				one_jar_sub();
			}
			else {
				one_jar_reg();
			}
		}
	}

	$('#book').click(function(){
		return (this.tog = !this.tog) ? BuyBookOn() : BuyBookOff();
	});

	// slow scroll
	$("#footerOffer .cta", ).click(function(e){
	    e.preventDefault();
	    $('html, body').animate({
	     scrollTop: $("#intro").offset().top
	    }, 1000);
   	});

	// vip club hover code
	$('.subscribe .option-check').hover(function(){
		$('#vipClub').toggle();
	});


});
$(window).load(function() {

	//popover logueo
	$('#form-logueo').hide();
		$('#pop-logueo').webuiPopover({url:'#form-logueo' ,animation:'fade'});

	//popover carrito
	$('#carrito-compras').hide();
		$('#pop-carrito').webuiPopover({url:'#carrito-compras' ,animation:'fade'});
});

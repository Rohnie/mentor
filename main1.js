$('#myModal').dialog({
	modal : true
});

$(function() {
	$('a[name=Test]').on('click', function(e) {
		$('#myModal').load(this.href).dialog('open');
	});
});



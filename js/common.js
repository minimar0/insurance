function activeModal() {
	$('[ak-pop]').click(function (){
		var akPop = $(this).attr('ak-pop');
		var _this = $(this);
		$('#modal-' + akPop).load('./terms/modal-' + akPop + '.html');
		_this.next('button').hide();
		setTimeout(function() {
			_this.next('button').click();
		},100)
	});
}
$(function() {
	$('#cancer1').load('https://minimar0.github.io/insurance/cancer.html #incCancer1');
	$('#cancer2').load('https://minimar0.github.io/insurance/cancer.html #incCancer2');
});
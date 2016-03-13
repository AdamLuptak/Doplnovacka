//variable for checking fail or succes couple findingssss
var checkedCheckbox;
var audioSuccess = new Audio('sound/success.mp3');
var audioFail = new Audio('sound/fail.mp3');
var counter = 0;
/**
 * Check all checkboxes
 */
function unCheckAllCheckBoxes(trueCheckbox) {
	$('#checkboxes > a > input').each(function() {
		if ($(this).attr('value') != trueCheckbox && !($(this).prop('disabled'))) {
			$(this)[0].checked = false;
		}
	});
}

$(document).ready(function() {
	/**
	 * add event listener on checkbox
	 */
	$('#checkboxes > a > input').click(function() {
		console.log($(this).attr('value'));
		checkedCheckbox = $(this);
		unCheckAllCheckBoxes($(this).attr('value'));
	});
	/**
	 * add event listener on button
	 */
	$('#moznosti > div > button').each(function() {
		$(this).click(function(e) {
			if (checkedCheckbox.attr('value') === e.target.value) {
				$(this).removeClass("btn-primary");
				$(this).addClass("btn-success");
				$(checkedCheckbox).prop('disabled', true);
				audioSuccess.play();
			} else {
				audioFail.play();
			}

		});
	})
});

var ListWithAnswears = [{
	id: 5,
	lable: 'Pečeň',
	ans: 'E'
}, {
	id: 2,
	lable: 'Pľúca',
	ans: 'B'
}, {
	id: 6,
	lable: 'Črevá',
	ans: 'F'
}, {
	id: 4,
	lable: 'Žalúdok',
	ans: 'D'
}, {
	id: 1,
	lable: 'Mozog',
	ans: 'A'
}, {
	id: 3,
	lable: 'Srdce',
	ans: 'C'
}];

/**
 * make buttons
 */
function prepareList(list) {
	for (var i = 0; i < list.length; i++) {
		$("#moznosti").append("<div class'row text-center'><button style='margin-top:10px; margin-bottom:10px; height:70px; font-size: 200%;' value=" + list[i].ans + " type='button' class='btn btn-primary  btn-block'>" + list[i].lable + "</button></div> ");
	};
}

prepareList(ListWithAnswears);
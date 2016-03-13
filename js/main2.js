var moznost1;
var moznost2;
var obj1;
var audioSuccess = new Audio('sound/success.mp3');
var audioFail = new Audio('sound/fail.mp3');
var checked = [];

$(document).ready(function() {
	/**
	 * add event listener on button
	 */
	$('#moznosti1 > div > button').each(function() {
		$(this).click(function(e) {
			// if (checkedCheckbox.attr('value') === e.target.value) {
			// 	$(this).removeClass("btn-primary");
			// 	$(this).addClass("btn-success");
			// 	$(checkedCheckbox).prop('disabled', true);
			// 	audioSuccess.play();
			// } else {
			// 	audioFail.play();
			var check = false;
			for (var i = 0; i < checked.length; i++) {
				if (checked[i] === e.target.value) {
					check = true;
				}
			};
			if (!check) {
				$('#moznosti1 > div > button').each(function() {
					$(this).prop('disabled', true);
				});
				$(this).removeClass("btn-primary");
				$(this).addClass("btn-success");
				console.log('si cliclok')
				moznost1 = e.target.value;
				obj1 = $(this);
			}

		});
	})

	$('#moznosti2 > div > button').each(function() {
		$(this).click(function(e) {
			$('#moznosti1 > div > button').each(function() {
				$(this).prop('disabled', false);
			});
			if (moznost1 === e.target.value) {
				audioSuccess.play();
				checked.push(moznost1);
				$(this).removeClass("btn-primary");
				$(this).addClass("btn-success");
				moznost1 = "";
				obj1 = "";
			} else if(moznost1.length > 0) {
				audioFail.play();
				$(this).removeClass("btn-success");
				$(this).addClass("btn-primary");
				obj1.removeClass("btn-success");
				obj1.addClass("btn-primary");
				moznost1 = "";
				obj1 = "";
			}
		});
	})
});


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

var ListWithAnswears = [{
	id: 1,
	lable: 'Mozog',
	ans: 'A'
}, {
	id: 2,
	lable: 'Pľúca',
	ans: 'B'
}, {
	id: 3,
	lable: 'Srdce',
	ans: 'C'
}, {
	id: 4,
	lable: 'Pečeň',
	ans: 'D'
}, {
	id: 5,
	lable: 'Žalúdok',
	ans: 'E'
}, {
	id: 6,
	lable: 'Črevá',
	ans: 'F'
}, {
	id: 7,
	lable: 'Obličky',
	ans: 'G'
}];

var ListWithAnswears2 = [{
	id: 6,
	lable: 'spracúvajú potravu',
	ans: 'F'
}, {
	id: 2,
	lable: 'umožňujú dýchanie, zásobujú telo kyslíkom',
	ans: 'B'
}, {
	id: 5,
	lable: 'prijíma potravu, skladuje a spracúva ju',
	ans: 'E'
}, {
	id: 4,
	lable: 'tvorí tekutinu, ktorá rozkladá potravu',
	ans: 'D'
}, {
	id: 3,
	lable: 'odstraňujú z krvi škodlivé látky a vylučujú moč',
	ans: 'G'
}, {
	id: 1,
	lable: 'riadi všetky činnosti tela',
	ans: 'A'
}, {
	id: 7,
	lable: 'zabezpečuje obeh krvi, pumpuje krv do celého tela',
	ans: 'C'
}];

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

/**
 * make buttons
 */
function prepareList(list, id) {
	for (var i = 0; i < list.length; i++) {
		if (list[i].lable.length <= 38)
			$(id).append("<div class'row text-center'><button style='margin-top:10px; margin-bottom:10px; height:70px; font-size: 200%;' value=" + list[i].ans + " type='button' class='btn btn-primary  btn-block'>" + list[i].lable + "</button></div> ");
		else {
			$(id).append("<div class'row text-center'><button style='margin-top:10px; margin-bottom:10px; height:70px; font-size: 200%;' value=" + list[i].ans + " type='button' class='btn btn-primary  btn-block'>" + list[i].lable + "</button></div> ");
		}
	};
}
prepareList(ListWithAnswears, '#moznosti1');
prepareList(ListWithAnswears2, '#moznosti2');
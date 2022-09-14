/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
	var stack = [];
	var len = s.length;
	var map = {
		'{': '}',
		'[': ']',
		'(': ')',
	};

	// если кол-во скобкок не чётное
	if (len % 2 !== 0) {
		return false;
	}

	for (var i = 0; i < len; i++) {
		// кладём открывающиеся
		if (['{', '[', '('].includes(s[i])) {
			stack.push(s[i]);
		} else {
			// если пришла закрывающаяся, то достаём открывающуюся и сравниваем их
			var pop = stack.pop();
			if (map[pop] !== s[i]) {
				return false;
			}
		}
	}

	// если остались открытые скобки, то не было закрывающих скобок
	if (stack.length > 0) {
		return false;
	}

	return true;
};

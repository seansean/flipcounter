FlipCounter = (function() {
	var flipCounter = {};

	// Generates counter output
	flipCounter.build = function(s, min) {
		var result = '';
		s = s.length < min ? pad(s, '_', min) : s;
		s = addCommas(s);
		for (var z = 0; z < s.length; ++z) {
			var ch = s.charAt(z);
			if (ch == '<') {
				while (ch != '>') {
					result += ch;
					ch = s.charAt(++z);
				}
				result += ch;
				continue;
			}
			var dataVal = (ch == '_' ? '' : ch);
			var strVal	= (ch == '_' ? '&nbsp;' : ch);
			result += '<span class="ecount__num" data-ecount="'+ dataVal +'">' + strVal + '</span>';
		}
		
		return result;
	};

	// Prepend with value if shorter than input value
	var pad = function(str, fill, max) {
		str = str.toString();
		return str.length < max ? pad(fill + str, max) : str;
	};

	// Add comma formatting to numbers 
	var addCommas = function(num) {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	};
	
	return flipCounter;
})();

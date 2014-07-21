FlipCounter = (function() {

    var flipCounter = {};

    // Generates counter output
    flipCounter.build = function(s, min) {
        var result = '<div class="flipcount" data-flipcount-total="'+ s.length +'">\n';
        s = s.length < min ? pad(s, '_', min) : s;
        s = addCommas(s);
        for (var i = 0; i < s.length; ++i) {
            var ch = s.charAt(i);
            if (ch == '<') {
                while (ch != '>') {
                    result += ch;
                    ch = s.charAt(++i);
                }
                result += ch;
                continue;
            }
            var dataVal     = (ch == '_' ? '' : ch);
            var strVal      = (ch == '_' ? '&nbsp;' : ch);
            result += '\t<span class="flipcount__num" data-flipcount-val="'+ dataVal +'">' + strVal + '</span>\n';
        }
        result += '</div>';
        return result;
    };

    // Prepend with value if shorter than input value (http://stackoverflow.com/a/6466243)
    var pad = function(str, fill, max) {
      str = str.toString();
      return str.length < max ? pad(fill + str, max) : str;
    };

    // Add comma formatting to numbers 
    var addCommas = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    return flipCounter;

})();
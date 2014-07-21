FlipCounter = (function() {

    var flipCounter = {};

    // Generates counter output
    flipCounter.build = function(s, min) {
        s = parseInt(s, 10);
        s = s.toString();
        s = s.length < min ? pad(s, '0', min) : s;
        s = addCommas(s);
        var leadZero = true;

        var result = '<div class="flipcount" data-flipcount-total="'+ s.length +'">\n';
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
            
            // Check if ch is a leading zero
            if (ch != '0' && ch != ',' && leadZero) {
                leadZero = false;
            }

            var dataVal     = (ch == '0' && leadZero ? '' : ch);
            dataVal         = (dataVal == ',' ? 'comma' : dataVal);
            var strVal      = (ch == '0' && leadZero? '&nbsp;' : ch);
            result += '\t<span class="flipcount__num" data-flipcount-val="'+ dataVal +'">' + strVal + '</span>\n';
        }
        result += '</div>';
        return result;
    };

    // Prepend with value if shorter than input value (http://stackoverflow.com/a/6466243)
    var pad = function(str, fill, max) {
      str = str.toString();
      return str.length < max ? pad(fill + str, fill, max) : str;
    };

    // Add comma formatting to numbers (http://stackoverflow.com/a/2901298)
    var addCommas = function(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    };
    
    return flipCounter;

})();
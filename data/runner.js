$(function() {

    self.port.on('triggerwords', function(input) {

        //var input = "Sierra,Leone,und";
        var inputArray = input.split(",");

        for (var i = 0;i<inputArray.length;i++) {

            var replacement = asterisk(inputArray[i]);

            $('body').textWalk(function() {
                this.data = this.data.replace(inputArray[i],replacement);
            });
        }

    });
	
});

function asterisk (input) {
	var splittedInput = input.split("");
	var splittedInputLength = splittedInput.length;
	var newChar;
	var newStringArray = [];

	for (var i = 0;i<splittedInputLength;i++) {
		if ( i == 0 || i == splittedInputLength-1){
			newChar = splittedInput[i];
			//console.log(newChar);
		}
		else {
			newChar = '*';
			//console.log(newChar);
		}
		newStringArray.push(newChar);
	}

	return newStringArray.join("");
}

jQuery.fn.textWalk = function( fn ) {
    this.contents().each( jwalk );
    function jwalk() {
        var nn = this.nodeName.toLowerCase();
        if( nn === '#text' ) {
            fn.call( this );
        } else if( this.nodeType === 1 && this.childNodes && this.childNodes[0] && nn !== 'script' && nn !== 'textarea' ) {
            $(this).contents().each( jwalk );
        }
    }
    return this;
};
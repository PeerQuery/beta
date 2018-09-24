'use strict';

module.exports = function() {
    
    //-----image not found system
    
    $('img').each(function() {
        if (!this.complete || typeof this.naturalWidth == 'undefined' || this.naturalWidth == 0) {
            // image was broken, replace with your new image
            this.src = '/assets/images/placeholder.png';
        }
    });
    
    
    $('.scroll').click(function(event){
        $('html, body').animate({scrollTop: '+=600px'}, 800);
    });
	
    $('#notifications-container').on('click', '.cookie_consent', function(event){
        $(this).hide();
        var d = new Date();
        d.setTime(d.getTime() + ( 7 * 24 * 60 * 60 * 1000 )); //7 days
        var expires = 'expires=' + d.toUTCString();
        document.cookie = 'cookie_reminder' + '=' + new Date().toDateString() + ';' + expires + ';path=/';
    });
	
	
};
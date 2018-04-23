$(document).ready(function() {
    
    var signUpvals = new Array(3);
    var isMobile;
    
    function setMobile () {
        if ($(window).width() < 650) {
            isMobile = true;
            $('#header_logo').attr('src', 'images/pround_logo2x.png');
        } else {
            isMobile = false;
            $('#header_logo').attr('src', 'images/pround_logo8.png');
        }
    }
    
    function LoadSignUp () {
        var mw3m4ww0j1g15t;
        (function(d, t) {
            var s = d.createElement(t), options = {
            'userName':'jadamduff',
            'formHash':'mw3m4ww0j1g15t',
            'autoResize':true,
            'height':'257',
            'async':true,
            'host':'wufoo.com',
            'header':'show',
            'ssl':true};
            s.src = ('https:' == d.location.protocol ? 'https://' : 'http://') + 'www.wufoo.com/scripts/embed/form.js';
            s.onload = s.onreadystatechange = function() {
            var rs = this.readyState; if (rs) if (rs != 'complete') if (rs != 'loaded') return;
            try { mw3m4ww0j1g15t = new WufooForm();mw3m4ww0j1g15t.initialize(options);mw3m4ww0j1g15t.display(); } catch (e) {}};
            var scr = d.getElementsByTagName(t)[0], par = scr.parentNode; par.insertBefore(s, scr);
        })
        (document, 'script');
        console.log('done');
    }
    
    $('#sign_up').on('keyup change paste', 'input', function(){
        
    });
    
    function translateForm (id) {
        $('id' + '_wufoo').val($(id).val());
    }
    
    function loadForm () {
        $('#hero_formbox1').fadeToggle(2000);
        
    }
    
    $('#sign_up2').on('click', function() {
        $('html, body').animate({scrollTop: 0}, 400);
    });
    
    LoadSignUp(loadForm());
    setMobile();
    
});
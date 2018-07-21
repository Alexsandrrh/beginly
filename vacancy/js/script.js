$(document).ready(function () {
    // Odjects
    var id = getUrlVars()['id'],
        value = getUrlVars()['value'];


// searching value ID
    function getUrlVars(){
        var vars = {},
            parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value){
                vars[key] = value;
            });
        return vars;
    }

    console.log();

    $.getJSON('../assets/api.json',function (data) {
        for (let i = 0; i < data.length; i++){
            if (id == data[i].id){
                $('.js-vacancy').append(' <div class="desktop-employer">\n' +
                    '                    <div class="employer">\n' +
                    '                        <div class="down-logo-employer">\n' +
                    '                            <img src="' + data[i].logo + '" class="logo-employer">\n' +
                    '                        </div>\n' +
                    '                        <p class="name-employer">' + data[i].company + '</p>\n' +
                    '                    </div>\n' +
                    '                    <a href="tel:' + data[i].tel + '" class="contact-tel-desktop">Связаться</a>\n' +
                    '                </div>\n' +
                    '                <div class="all-info">\n' +
                    '                    <h4 class="name-vacancy">' + data[i].name + '</h4>' +
                    '                    <h4 class="name-price">от ' + data[i].info.price + '.руб</h4>' +
                    '                    <h4 class="name-price">График работы: <span>' + data[i].info.schedule + '</span></h4>' +
                    '                    <h4 class="name-price">Опыт работы: <span>' + data[i].info.skill + '</span></h4>' +
                    '                    <h3 class="headline-info">Описание:</h3>\n' +
                    '                    <p class="info-vacancy">' + data[i].info.about + '</p>\n' +
                    '                </div>\n' +
                    '                <a href="tel:' + data[i].tel + '" class="contact-tel-mobile">Связаться</a>');
            };
        };
    });

});
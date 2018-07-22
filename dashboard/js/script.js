$(document).ready(function () {

    let params = $('.params-block'),
        btnParams = $('.search-params'),
        blockVacancy = $('.vacancies'),
        blockFooter = $('.footer');

    btnParams.click(function () {
        params.toggleClass('-active');
        blockVacancy.toggleClass('-active');
        blockFooter.toggleClass('-active');
    });


    let dashboard = $('.js-view-vacancies');

    // createBlock
    function createBlock(data, i) {
        return '<div class="vacancy">\n' +
            '                        <div class="vacancy-mini-info">\n' +
            '                            <div class="logo-company"><img src="' + data[i].logo + '" alt=""></div>\n' +
            '                            <div class="v-headline">\n' +
            '                                <h2 class="name-vacancy">' + data[i].name + '</h2>\n' +
            '                                <h3 class="name-company">' + data[i].company + '</h3>\n' +
            '                                <p class="name-price">от ' + data[i].info.price + '.руб</p>\n' +
            '                            </div>\n' +
            '                        </div>\n' +
            '                        <p class="vacancy-title">' + data[i].info.about + '</p>\n' +
            '                        <div class="vacancy-btn">\n' +
            '                            <a href="tel:' + data[i].tel + '" class="vacancy-call">Связаться</a>\n' +
            '                            <a href="../vacancy/index.html?id=' + data[i].id + '" class="vacancy-more">Показать</a>\n' +
            '                        </div>\n' +
            '                    </div>';
    }

    $.getJSON("../assets/api.json", function (data) {
        for (let i = 0; i < data.length; i++) {
            dashboard.append(createBlock(data, i));
        };

        console.log("Cегодня на Бегинли доступно " + data.length + " вакансий :)");


        //params
        $('.js-btn-release').click(function () {
            dashboard.html('');
            console.log($('.js-price-for').val());
            console.log($('.js-select-skill').val());
            for (let i = 0; i < data.length; i++) {
                if ($('.js-price-for').val() <= data[i].info.price && $('.js-select-skill').val() == data[i].info.skill && $('.js-price-to').val() >= data[i].info.price) {
                    dashboard.append(createBlock(data, i));
                } else if ($('.js-price-for').val() <= data[i].info.price && $('.js-select-skill').val() == data[i].info.skill && $('.js-price-to').val() == '') {
                    dashboard.append(createBlock(data, i));
                } else if($('.js-price-for').val() == ''  && $('.js-select-skill').val() == data[i].info.skill && $('.js-price-to').val() >= data[i].info.price){
                    dashboard.append(createBlock(data, i));
                }
            };

            $('.js-btn-cancel').click(function () {
                dashboard.html('');
                for (let i = 0; i < data.length; i++) {
                    dashboard.append(createBlock(data, i));
                }

                $('.js-price-for').val('');
            });

            // search
            $('.js-search').bind('input propertychange', function () {
                for (let i = 0; i < data.length; i++) {
                    if (this.value == data[i].name || this.value == data[i].company) {
                        dashboard.html('');
                        dashboard.append(createBlock(data, i));
                    } else if (this.value == '') {
                        dashboard.html('');
                        setTimeout(function () {
                            dashboard.append(createBlock(data, i));
                        }, 300);
                    }
                }
            });
        });
    });
});
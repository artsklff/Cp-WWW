this.pay = function ()
    var widget = new cp.CloudPayments();

    var data = { //данные дарителя
        name: $('#name').val(),
        lastName: $('#lastName').val(),
        middleName: $('#middleName').val(),
        phone: $('#phone').val(),
        email: $('#email'').val(),
        comment: $('#comment').val()
        };

    var auto = $('#auto').is(':checked'); //проверка

    if (auto) { //включаем подписку
        data.CloudPayments = {
            recurrent: { interval: 'Month', period: 1 } //один раз в месяц начиная со следующего месяца
        }
    }

    var amount = parseFloat($('#amount-sample-4').val());
    var accountId = $('#email-sample-4').val();

    widget.charge({ // options
        publicId: 'test_api_00000000000000000000002', //id из личного кабинета
        description: 'Пожертвование в фонд ...', //назначение
        amount: amount, //сумма
        currency: 'RUB', //валюта
        accountId: accountId, //идентификатор плательщика (обязательно для создания подписки)
        email: accountId,
        data: data
    },
    function (options) { // success
        //действие при успешной оплате
    },
    function (reason, options) { // fail
        //действие при неуспешной оплате
    });
};

$('#payArea').click(pay);

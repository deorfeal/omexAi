$(function () {

    // // // Механика показа/скрытия пароля на странице с входом и прокси
    $('.entrance-form__box').each(function () {
        const $box = $(this);
        const $input = $box.find('.entrance-form__box-input');
        const $eye = $box.find('.entrance-form__box-eye');

        $eye.on('click', function () {
            // Переключаем класс eye--active
            $eye.toggleClass('eye--active');

            // Переключаем тип input между password и text
            if ($input.attr('type') === 'password') {
                $input.attr('type', 'text');
            } else {
                $input.attr('type', 'password');
            }
        });
    });
    $('.proxy-item').each(function () {
        const $box = $(this);
        const $input = $box.find('.proxy-item__input');
        const $eye = $box.find('.proxy-item__eye');

        $eye.on('click', function () {
            // Переключаем класс eye--active
            $eye.toggleClass('eye--active');

            // Переключаем тип input между password и text
            if ($input.attr('type') === 'password') {
                $input.attr('type', 'text');
            } else {
                $input.attr('type', 'password');
            }
        });
    });
    // // //

    // // // Выбор на странице каталога ( где страны и города )
    document.querySelectorAll('.catalog-country__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок
            document.querySelectorAll('.catalog-country__radio').forEach(radio => {
                radio.checked = false;
            });

            // Поставить checked на нажатую радио-кнопку
            this.checked = true;

            // Удалить класс catalog-country--active у всех родительских элементов
            document.querySelectorAll('.catalog-country').forEach(country => {
                country.classList.remove('catalog-country--active');
            });

            // Добавить класс catalog-country--active родительскому элементу нажатой радио-кнопки
            const parentCountry = this.closest('.catalog-country');
            parentCountry.classList.add('catalog-country--active');

            // Получить ID родительского элемента catalog-country
            const parentCountryId = parentCountry.getAttribute('id');

            // Обработать элементы catalog-cities
            document.querySelectorAll('.catalog-cities').forEach(city => {
                // Удалить класс catalog-cities--active у всех элементов
                city.classList.remove('catalog-cities--active');

                // Добавить класс catalog-cities--active элементу с тем же ID, что и у parentCountry
                if (city.getAttribute('id') === parentCountryId) {
                    city.classList.add('catalog-cities--active');
                }
            });
        });
    });
    document.querySelectorAll('.catalog-cities__item-radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок
            document.querySelectorAll('.catalog-cities__item-radio').forEach(radio => {
                radio.checked = false;
            });

            // Поставить checked на нажатую радио-кнопку
            this.checked = true;

            // Удалить класс catalog-cities--active у всех родительских элементов
            document.querySelectorAll('.catalog-cities__item').forEach(city => {
                city.classList.remove('catalog-cities__item--active');
            });

            // Добавить класс catalog-cities--active родительскому элементу нажатой радио-кнопки
            const parentCity = this.closest('.catalog-cities__item');
            parentCity.classList.add('catalog-cities__item--active');
        });
    });
    // // //

    // // // Механика переключателя как на айфоне
    document.querySelectorAll('.switch__input').forEach(switchInput => {
        switchInput.addEventListener('click', function () {
            // Переключить состояние checked
            this.checked = !this.checked;

            // Получить родительский элемент с классом switch
            const parentSwitch = this.closest('.switch');

            // Переключить класс switch--disabled
            parentSwitch.classList.toggle('switch--active');
        });
    });
    // // //

    // // // Механика выбора оплаты и криптовалюты на соответствующих страницах
    document.querySelectorAll('.method-list__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок
            document.querySelectorAll('.method-list__radio').forEach(radio => {
                radio.checked = false;
            });

            // Поставить checked на нажатую радио-кнопку
            this.checked = true;

            // Удалить класс method-list__item--active у всех родительских элементов
            document.querySelectorAll('.method-list__item').forEach(item => {
                item.classList.remove('method-list__item--active');
            });

            // Добавить класс method-list__item--active родительскому элементу нажатой радио-кнопки
            const parentItem = this.closest('.method-list__item');
            parentItem.classList.add('method-list__item--active');
        });
    });
    document.querySelectorAll('.cryptocurrency-list__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок
            document.querySelectorAll('.cryptocurrency-list__radio').forEach(radio => {
                radio.checked = false;
            });

            // Поставить checked на нажатую радио-кнопку
            this.checked = true;

            // Удалить класс cryptocurrency-list__item--active у всех родительских элементов
            document.querySelectorAll('.cryptocurrency-list__item').forEach(item => {
                item.classList.remove('cryptocurrency-list__item--active');
            });

            // Добавить класс cryptocurrency-list__item--active родительскому элементу нажатой радио-кнопки
            const parentItem = this.closest('.cryptocurrency-list__item');
            parentItem.classList.add('cryptocurrency-list__item--active');
        });
    });
    // // //

    // // // Делаем попапы и скрываем по клику вне его
    $(document).ready(function () {
        var $popupNewPassword = $('.change-password--popup');
        var $popupNewPasswordInner = $popupNewPassword.find('.popup__inner');

        var $popupLang = $('.lang--popup');
        var $popupLangInner = $popupLang.find('.popup__inner');

        var $supportPopup = $('.support--popup');
        var $supportPopupInner = $supportPopup.find('.popup__inner');

        var $topupPopup = $('.topup--popup');
        var $topupPopupInner = $topupPopup.find('.popup__inner');

        var $confirmedPopup = $('.confirmed--popup');
        var $confirmedPopupInner = $confirmedPopup.find('.popup__inner');

        var $successPopup = $('.success--popup');
        var $successPopupInner = $successPopup.find('.popup__inner');

        var $requestPopup = $('.request--popup');
        var $requestPopupInner = $requestPopup.find('.popup__inner');

        var $authenticationPopup = $('.authentication--popup');
        var $authenticationPopupInner = $authenticationPopup.find('.popup__inner');

        var $typePopup = $('.type--popup');
        var $typePopupInner = $typePopup.find('.popup__inner');

        var $complaintPopup = $('.complaint--popup');
        var $complaintPopupInner = $complaintPopup.find('.popup__inner');

        var $cryptocurrenciesPopup = $('.cryptocurrencies--popup');
        var $cryptocurrenciesPopupInner = $cryptocurrenciesPopup.find('.popup__inner');

        var $verifyPopup = $('.verify--popup');
        var $verifyPopupInner = $verifyPopup.find('.popup__inner');

        // Показываем или скрываем popup при клике на кнопке
        $('.settings-buttons__btn--password').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $popupNewPassword.addClass('popup--active');
            $popupNewPassword.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.settings-row__choose--lang').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $popupLang.addClass('popup--active');
            $popupLang.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.menu-list__link--support').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $supportPopup.addClass('popup--active');
            $supportPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.add-balance__link').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $topupPopup.addClass('popup--active');
            $topupPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.buy-form__btn').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $confirmedPopup.addClass('popup--active');
            $confirmedPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.purchase__link').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $successPopup.addClass('popup--active');
            $successPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.choose__btn').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $requestPopup.addClass('popup--active');
            $requestPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.proxy-item__choose--authentication').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $authenticationPopup.addClass('popup--active');
            $authenticationPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.proxy-item__choose--types').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $typePopup.addClass('popup--active');
            $typePopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.renew__button').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $complaintPopup.addClass('popup--active');
            $complaintPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        // Показываем или скрываем popup при клике на кнопке
        $('.cryptocurrency-list__item').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $cryptocurrenciesPopup.addClass('popup--active');
            $cryptocurrenciesPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.settings-row__button').click(function (event) {
            $('.popup--active').removeClass('popup--active')
            event.preventDefault();
            event.stopPropagation(); // Остановка всплытия события
            $verifyPopup.addClass('popup--active');
            $verifyPopup.fadeIn(250, function () {
                // После показа попапа, делаем анимацию изменения opacity от 0 до 1
                $(this).animate({
                    opacity: 1
                }, 250);
            });
            $('body').addClass('body--popup');
        });

        $('.cls').click(function (event) {
            $('.popup').fadeOut(250);
            $('body').removeClass('body--popup');
        });

        $(document).click(function (event) {
            if ($popupNewPassword.hasClass('popup--active')) {
                if (!($popupNewPasswordInner.is(event.target) || $popupNewPasswordInner.has(event.target).length > 0)) {
                    $popupNewPassword.fadeOut(250);
                    $popupNewPassword.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($popupLang.hasClass('popup--active')) {
                if (!($popupLangInner.is(event.target) || $popupLangInner.has(event.target).length > 0)) {
                    $popupLang.fadeOut(250);
                    $popupLang.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($supportPopup.hasClass('popup--active')) {
                if (!($supportPopupInner.is(event.target) || $supportPopupInner.has(event.target).length > 0)) {
                    $supportPopup.fadeOut(250);
                    $supportPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($topupPopup.hasClass('popup--active')) {
                if (!($topupPopupInner.is(event.target) || $topupPopupInner.has(event.target).length > 0)) {
                    $topupPopup.fadeOut(250);
                    $topupPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($confirmedPopup.hasClass('popup--active')) {
                if (!($confirmedPopupInner.is(event.target) || $confirmedPopupInner.has(event.target).length > 0)) {
                    $confirmedPopup.fadeOut(250);
                    $confirmedPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($successPopup.hasClass('popup--active')) {
                if (!($successPopupInner.is(event.target) || $successPopupInner.has(event.target).length > 0)) {
                    $successPopup.fadeOut(250);
                    $successPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($requestPopup.hasClass('popup--active')) {
                if (!($requestPopupInner.is(event.target) || $requestPopupInner.has(event.target).length > 0)) {
                    $requestPopup.fadeOut(250);
                    $requestPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($authenticationPopup.hasClass('popup--active')) {
                if (!($authenticationPopupInner.is(event.target) || $authenticationPopupInner.has(event.target).length > 0)) {
                    $authenticationPopup.fadeOut(250);
                    $authenticationPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($typePopup.hasClass('popup--active')) {
                if (!($typePopupInner.is(event.target) || $typePopupInner.has(event.target).length > 0)) {
                    $typePopup.fadeOut(250);
                    $typePopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($complaintPopup.hasClass('popup--active')) {
                if (!($complaintPopupInner.is(event.target) || $complaintPopupInner.has(event.target).length > 0)) {
                    $complaintPopup.fadeOut(250);
                    $complaintPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($cryptocurrenciesPopup.hasClass('popup--active')) {
                if (!($cryptocurrenciesPopupInner.is(event.target) || $cryptocurrenciesPopupInner.has(event.target).length > 0)) {
                    $cryptocurrenciesPopup.fadeOut(250);
                    $cryptocurrenciesPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });

        $(document).click(function (event) {
            if ($verifyPopup.hasClass('popup--active')) {
                if (!($verifyPopupInner.is(event.target) || $verifyPopupInner.has(event.target).length > 0)) {
                    $verifyPopup.fadeOut(250);
                    $verifyPopup.removeClass('popup--active')
                    $('body').removeClass('body--popup');
                }
            }
        });
    });
    // // //

    // // // Механика копирования текста с инпута
    document.querySelectorAll('.copy__button').forEach(function (button) {
        button.addEventListener('click', function () {
            // Находим ближайший элемент <input> по классу 'copy__input' относительно текущей кнопки
            var inputElement = this.closest('.copy').querySelector('.copy__input');

            // Вызываем метод select() для выбора текста внутри элемента <input>
            inputElement.select();

            // Выполняем команду копирования выбранного текста в буфер обмена
            document.execCommand('copy');

            // Снимаем фокус с элемента, чтобы выделение текста не оставалось
            inputElement.blur();

            // Подсветка кнопки для обратной связи
            this.classList.add('copied');

            // Через какое-то время убираем подсветку кнопки
            setTimeout(function () {
                button.classList.remove('copied');
            }, 300);
        });
    });

    // // //

    // // // Механика выбора прокси на соответствующей странице
    document.querySelectorAll('.choose-box__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок
            document.querySelectorAll('.choose-box__radio').forEach(radio => {
                radio.checked = false;
            });

            // Поставить checked на нажатую радио-кнопку
            this.checked = true;

            // Удалить класс choose-item--active у всех родительских элементов
            document.querySelectorAll('.choose-item').forEach(item => {
                item.classList.remove('choose-item--active');
            });

            // Добавить класс choose-item--active родительскому элементу нажатой радио-кнопки
            const parentItem = this.closest('.choose-item');
            parentItem.classList.add('choose-item--active');
        });
    });
    // // // 

    // // // Механика выбора настроек прокси на соответствующих страницах
    document.querySelectorAll('.types-item__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок в текущем родительском элементе
            const parentContainer = this.closest('.authentication--popup');
            if (parentContainer) {
                parentContainer.querySelectorAll('.types-item__radio').forEach(radio => {
                    radio.checked = false;
                });

                // Поставить checked на нажатую радио-кнопку
                this.checked = true;

                // Удалить класс types-item--active у всех элементов в текущем родительском элементе
                parentContainer.querySelectorAll('.types-item').forEach(item => {
                    item.classList.remove('types-item--active');
                });

                // Добавить класс types-item--active родительскому элементу нажатой радио-кнопки
                const parentItem = this.closest('.types-item');
                parentItem.classList.add('types-item--active');

                // Проверить, если родительский элемент имеет класс authentication--popup
                if (parentItem.closest('.authentication--popup')) {
                    // Найти span внутри parentItem и получить его текст
                    const spanText = parentItem.querySelector('span').textContent;

                    // Найти элемент с классом proxy-item__choose--authentication и вставить текст
                    document.querySelector('.proxy-item__choose--authentication').textContent = spanText;
                }
            }
        });
    });
    document.querySelectorAll('.types-item__radio').forEach(radio => {
        radio.addEventListener('click', function () {
            // Снять checked со всех радио-кнопок в текущем родительском элементе
            const parentContainer = this.closest('.type--popup');
            if (parentContainer) {
                parentContainer.querySelectorAll('.types-item__radio').forEach(radio => {
                    radio.checked = false;
                });

                // Поставить checked на нажатую радио-кнопку
                this.checked = true;

                // Удалить класс types-item--active у всех элементов в текущем родительском элементе
                parentContainer.querySelectorAll('.types-item').forEach(item => {
                    item.classList.remove('types-item--active');
                });

                // Добавить класс types-item--active родительскому элементу нажатой радио-кнопки
                const parentItem = this.closest('.types-item');
                parentItem.classList.add('types-item--active');

                // Проверить, если родительский элемент имеет класс authentication--popup
                if (parentItem.closest('.authentication--popup')) {
                    // Найти span внутри parentItem и получить его текст
                    const spanText = parentItem.querySelector('span').textContent;

                    // Найти элемент с классом proxy-item__choose--authentication и вставить текст
                    document.querySelector('.proxy-item__choose--types').textContent = spanText;
                }
            }
        });
    });
    // // //

    // // // alert
    if (document.querySelector('.alert')) {
        function showInfoAlert(message, duration) {
            const alertElement = document.getElementById('info-alert');
            const alertTextElement = alertElement.querySelector('.alert__text');

            // Установить текст сообщения
            alertTextElement.textContent = message;

            // Показать сообщение
            alertElement.classList.add('show');

            // Скрыть сообщение через указанное время
            setTimeout(() => {
                alertElement.classList.remove('show');
            }, duration);
        }

        function showSuccessAlert(message, duration) {
            const alertElement = document.getElementById('success-alert');
            const alertTextElement = alertElement.querySelector('.alert__text');

            // Установить текст сообщения
            alertTextElement.textContent = message;

            // Показать сообщение
            alertElement.classList.add('show');

            // Скрыть сообщение через указанное время
            setTimeout(() => {
                alertElement.classList.remove('show');
            }, duration);
        }

        function showDangerAlert(message, duration) {
            const alertElement = document.getElementById('danger-alert');
            const alertTextElement = alertElement.querySelector('.alert__text');

            // Установить текст сообщения
            alertTextElement.textContent = message;

            // Показать сообщение
            alertElement.classList.add('show');

            // Скрыть сообщение через указанное время
            setTimeout(() => {
                alertElement.classList.remove('show');
            }, duration);
        }

        // Пример использования: показать сообщение на 3 секунды
        setTimeout(() => {
            showInfoAlert('This is an info alert', 1500);
        }, 0);

        setTimeout(() => {
            showSuccessAlert('This is an success alert', 1500);
        }, 2000);
        setTimeout(() => {
            showDangerAlert('This is an danger alert', 1500);
        }, 3500);
    }
    // // // alert

    // // // Код с смс 
    if (document.querySelector('.verify-form__input')) {
        const inputs = document.querySelectorAll('.verify-form__input');

        inputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                const value = event.target.value;
                if (value.length === 1 && index < inputs.length - 1) {
                    // Move to the next input
                    inputs[index + 1].focus();
                }
            });

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace' && input.value === '' && index > 0) {
                    // Move to the previous input
                    inputs[index - 1].focus();
                }
            });
        });
    }
    // // // 
})


// // // Селкт
var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName("select")[0];
    ll = selElmnt.length;
    /* For each element, create a new DIV that will act as the selected item: */
    a = document.createElement("DIV");
    a.setAttribute("class", "select-selected");
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    /* For each element, create a new DIV that will contain the option list: */
    b = document.createElement("DIV");
    b.setAttribute("class", "select-items select-hide");
    for (j = 1; j < ll; j++) {
        /* For each option in the original select element,
        create a new DIV that will act as an option item: */
        c = document.createElement("DIV");
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function (e) {
            /* When an item is clicked, update the original select box,
            and the selected item: */
            var y, i, k, s, h, sl, yl;
            s = this.parentNode.parentNode.getElementsByTagName("select")[0];
            sl = s.length;
            h = this.parentNode.previousSibling;
            for (i = 0; i < sl; i++) {
                if (s.options[i].innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    y = this.parentNode.getElementsByClassName("same-as-selected");
                    yl = y.length;
                    for (k = 0; k < yl; k++) {
                        y[k].removeAttribute("class");
                    }
                    this.setAttribute("class", "same-as-selected");
                    break;
                }
            }
            h.click();
        });
        b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener("click", function (e) {
        /* When the select box is clicked, close any other select boxes,
        and open/close the current select box: */
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
    });
}
function closeAllSelect(elmnt) {
    /* A function that will close all select boxes in the document,
    except the current select box: */
    var x, y, i, xl, yl, arrNo = [];
    x = document.getElementsByClassName("select-items");
    y = document.getElementsByClassName("select-selected");
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
            arrNo.push(i)
        } else {
            y[i].classList.remove("select-arrow-active");
        }
    }
    for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
            x[i].classList.add("select-hide");
        }
    }
}
document.addEventListener("click", closeAllSelect);
// // //
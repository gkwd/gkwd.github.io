var multiItemSlider = (function () {
    return function (selector, config) {
        let mainElement = document.querySelector(selector); //основный элемент блока
        let sliderWrapper = document.querySelector('.slider_list'); // обертка для .slider-item
        let sliderItems = document.querySelectorAll('.slider_item');// элементы (.slider-item)
        let sliderControls = document.querySelectorAll('.slider_control'); // элементы управления
        let sliderControlLeft = document.querySelector('.slider_control_left'); // кнопка "LEFT"
        let sliderControlRight = document.querySelector('.slider_control_right'); // кнопка "RIGHT"
        let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
        let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента    
        let positionLeftItem = 0; // позиция левого активного элемента
        let _transform = 0; // значение транфсофрмации .slider_wrapper
        let step = wrapperWidth / wrapperWidth * 100; // величина шага (для трансформации)
        let items = []; // массив элементов


        // наполнение массива items
        sliderItems.forEach(function (item, index) {
            items.push({
                item: item,
                position: index,
                transform: 0
            });
        });

        var position = {
            getMin: 0,
            getMax: items.length - 1,
        }

        var _transformItem = function (direction) {
            if (direction === 'right') {
                if ((positionLeftItem + wrapperWidth / wrapperWidth - 1) >= position.getMax) {
                    return;
                }
                positionLeftItem++;
                _transform -= step;
            }
            if (direction === 'left') {
                if (positionLeftItem <= position.getMin) {
                    return;
                }
                positionLeftItem--;
                _transform += step;
            }
            sliderWrapper.style.transform = 'translateX(' + _transform + '%)';
        }

        // обработчик события click для кнопок "назад" и "вперед"
        var _controlClick = function (e) {
            var direction = this.classList.contains('slider_control_right') ? 'right' : 'left';
            e.preventDefault();
            _transformItem(direction);
        };

        var _setUpListeners = function () {
            // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
            sliderControls.forEach(function (item) {
                item.addEventListener('click', _controlClick);
            });
        }

        // инициализация
        _setUpListeners();

        return {
            right: function () { // метод right
                _transformItem('right');
            },
            left: function () { // метод left
                _transformItem('left');
            }
        }

    }
}());

var slider = multiItemSlider('.slider')
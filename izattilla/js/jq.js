var multiItemSlider = (function () {
    return function (selector, config) {
        let mainElement = $(selector); //основный элемент блока
        let sliderWrapper = document.querySelector('.slider_list'); // обертка для .slider-item
        let sliderItems = document.querySelectorAll('.slider_item');// элементы (.slider-item)
        let sliderControls = document.querySelectorAll('.slider_control'); // элементы управления
        let sliderControlLeft = $('.slider_control_left'); // кнопка "LEFT"
        let sliderControlRight = $('.slider_control_right'); // кнопка "RIGHT"
        let wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width); // ширина обёртки
        let itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width); // ширина одного элемента    
        let positionLeftItem = 0; // позиция левого активного элемента
        let _transform = 0; // значение транфсофрмации .slider_wrapper
        let step = wrapperWidth / wrapperWidth * 100; // величина шага (для трансформации)
        let items = []; // массив элементов
        
        $.each(sliderItems, function(item, index){
            items.push({
                item: item,
                position: index,
                transform: 0
            });
        });

        let pos = {
            getMIn: 0,
            getMax: items.length - 1,
        }

        function transformItem(direction){
            if(direction == 'right'){
                if((positionLeftItem + wrapperWidth / wrapperWidth -1) >= pos.getMax){
                    return;
                }
                positionLeftItem++;
                _transform -= step;
            }
            if(direction == 'left'){
                if(positionLeftItem  <= pos.getMin){
                    return;
                }
                positionLeftItem--;
                _transform += step;
            }
            $('.slider_list').css('transform', `${_transform} + %`)
        }

        // function controlClick(e) {
        //     var direction = this.classList.contains('slider_control_right') ? 'right' : 'left';
        //     e.preventDefault();
        //     transformItem(direction);
        // };

        // function setUpListner() {
        //     // добавление к кнопкам "назад" и "вперед" обрботчика _controlClick для событя click
        //     sliderControls.forEach(function (item) {
        //         item.addEventListener('click', controlClick);
        //     });
        // }
        function controlClick(e){
            var direction = this.classList.contains('slider_control_right') ? 'right' : 'left';
            e.preventDefault();
            transformItem(direction);
        }

        function setUpListner(){
            sliderControls.forEach(function(item){
                item.addEventListener('click', controlClick)
            });
        }

        setUpListner();
        return{
            right: function(){
                transformItem('right')
            },
            left: function(){
                transformItem('left')
            }
        }
    }
}());

let slider = multiItemSlider('.slider') 
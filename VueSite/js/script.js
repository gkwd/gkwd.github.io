// Создание Компонентов

        // Vue.component('v-dialog', {
        //     template: '#dialog-template',
        //     //  В комполнентах data должна быть функцией которая возвращает обьекты
        //     // props работает как в react передавать значение через обычные атрибуты
        //     // если в компонентах должны быть методы их передают в сам компонент, а не в new Vue
        //     data: function() {
        //         return {
        //             active: false
        //         }
        //     },
        //     props: ['btnText'],
        //     methods: {
        //         open: function() {
        //             this.active = true
        //         },
        //         close: function() {
        //             this.active = false
        //         },
        //         onCancel: function() {
        //             this.close();
        //         },
        //         onConfirm: function() {
        //             this.close();
        //         }
        //     }
        // })



        new Vue({
            el: '#app',

            // data Хранит данные для отображения
            data: {
                currentView: 'square',
                show: false,
                bears: [{
                        name: 'Brown',
                        status: false
                    },
                    {
                        name: 'Brown',
                        status: false
                    },
                    {
                        name: 'Brown',
                        status: false
                    }
                ],
            },
            // methods Содержит методы для обработки к примеру v-on:click='onClick'
            // модификаторы v-on:click.prevent v-on:click.stop
            // https://vuejs.org/v2/guide/events.html#Key-Modifiers список клавиш v-on:keyup.enter='onClick';
            methods: {
                onClick: function () {
                    console.log('Hello World')
                },
                switchView: function(view) {
                    this.currentView = view
                }
            },

            // В computed хранятся все вычисляемые свойства
            computed: {

            },
            // если компоненты используются внутри одного экземляра то лучше их регестрировать локально через components а не через Vue.components
            components: {
                square: {
                    template: '#square-template'
                },
                triangle: {
                    template: '#triangle-template'
                },
                circle: {
                    template: '#circle-template'
                },
                egg: {
                    template: '#egg-template'
                }
            },
        })
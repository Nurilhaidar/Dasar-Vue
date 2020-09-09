var app = new Vue({
    el: '#app',
    data: {
        'message': 'hello world'
    },
    methods: {
        greet: function (name) {
            return 'Good Morning ' + name
        }
    }
});
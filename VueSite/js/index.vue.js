var app =new Vue({
 el: '#app',
 data: {
   title: 'Task List',
   items:[
     {text: 'first'},
     {text: 'second'},
     {text: 'first'},
     {text: 'second'}]
 },
 methods: {
  addItem: function(){
     let inp = document.getElementById('itemForm');
     if(inp.value != ""){
       this.items.push({text: inp.value})
       inp.value = '';
     }
   },
   deleteItem: function(index){
     this.items.splice(index, 1)
   }
 }
})
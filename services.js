// 1. service    
// 2. factory
// 3. provider
angular.module('todoApp').factory("todoSt",function(){
    var storage = {
        data: []
        ,
        
        add:function(newTodoTitle){
                    var newTodo = {
                        title: newTodoTitle,
                        completed: false,
                        createdAt:Date.now()
                    };
                    storage.data.push(newTodo);
                    storage._setStorage();
            }
        ,
        remove: function(index){
            
                    storage.data.splice(index,1);
            }
        ,
        _setStorage: function(){
            localStorage.setItem("data",JSON.stringify(storage.data));
        }
        ,
        _getStorage: function(){
            return JSON.parse(localStorage.getItem("data"));
        }


    }

    return storage;
})

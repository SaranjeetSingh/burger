var orm = require('../config/orm');

var burgers = {
    getAllBurgers:function(callback){
        orm.selectAll(function(response){
            callback(response);
        })
    },
    createNewBurger:function(burgerName){
        orm.insertOne(burgerName);
    },
    updateDevoured:function(burgerId){
        orm.updateOne(burgerId)
    }
}

module.exports=burgers;
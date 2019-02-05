var connection = require('./connection');
function selectAll(callBack){
    let tableName = 'burgers';
    console.log('getting all burgers from '+tableName)

    connection.query('SELECT * FROM ??',[tableName],function(err,data){
        if(err)throw err;

        if(typeof callBack==='function'){
            callBack(data);
        }
    })
}

function updateOne(burgerId){
    let userTable= "burgers";
    console.log('updating burger '+burgerId+' from '+userTable)

    connection.query("UPDATE ?? SET devoured=true WHERE id=?",[userTable,burgerId],function(err,data){
        if(err) throw err;
        //callback();
    })
}

function insertOne(burgerName){
    let tableName = 'burgers';
    console.log('going to insert '+burgerName+' into '+tableName)
    connection.query("INSERT INTO ?? (burger_name,devoured) VALUES(?,false)",[tableName,burgerName],function(err,result){
        if(err) throw err;
       // callBack();
    })
}

module.exports={
    selectAll:selectAll,
    updateOne:updateOne,
    insertOne:insertOne
}
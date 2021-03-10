apiclient = (function () {
    let url = "http://localhost:8080/cinemas"
    const getFunctionsByCinema = (name,callback) => {
        $.getJSON(url+name,(data)=>{
            callback(data);
        },null)
    }
    const getFunctionsByCinemaAndDate=(name,date,callback) =>{
        $.getJSON(url+"/"+name+"/"+date,(data)=>{
            callback(data);
        });
    }
    const buyTicket = (name,date,movieName,row,col,callback) => {
        $.ajax({
            type:"POST",
            url:`${url}/${name}/${date}/${movieName}/${row}/${col}`,
            dataType: 'json',
            success: [
                function (data){
                    callback(data)
                }
            ],
            error : function(request, status, error) {
                alert("Error:"+" Asiento no disponible.");
            }
        });
    }
    const updateFunction = (cinema,functionData,callback) => {
        const promise = $.ajax({
            type:"PUT",
            url:`${url}/${cinema}`,
            contentType : "application/json",
            dataType : 'json',
            data:JSON.stringify(functionData)
        }).done(function (){
            console.log("Solved");
        }).fail(function (msg){
            console.log("Fail");
        });
        promise.then(
            (res) =>{
                callback(res);
            }
        );
    }
    const createFunction = (cinema,functionData,callback) => {
        const promise = $.ajax({
            type:"POST",
            url:`${url}/${cinema}`,
            contentType : "application/json",
            dataType : 'json',
            data:JSON.stringify(functionData)
        }).done(function (){
            console.log("Solved");
        }).fail(function (msg){
            console.log("Fail");
        });
        promise.then(
            (res) =>{
                callback(res);
            }
        );
    }
    const deleteFunction = (cinema,date,movieName,callback) => {
        console.log("holas")
        const promise = $.ajax({
            type:"DELETE",
            contentType : "application/json",
            url:`${url}/${cinema}/${date}/${movieName}`,
        }).done(function (){
            console.log("Solved");
        }).fail(function (msg){
            console.log(msg);
        });
        promise.then(
            (res) =>{
                callback(res);
            }
        );
    }
    return {
        getFunctionsByCinema: getFunctionsByCinema,
        getFunctionsByCinemaAndDate: getFunctionsByCinemaAndDate,
        buyTicket: buyTicket,
        updateFunction: updateFunction,
        deleteFunction: deleteFunction,
        createFunction:createFunction
    }

})();

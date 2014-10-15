function go(url){
    $.ajax({url:url,
        complete:function(result){
           //store text
           console.dir(result);
           var storage=$.localStorage;
           storage.set('codesnippets', result.responseText);
           console.log(storage.get('codesnippets'));
           window.location.href = "fiddler.html";
        }
    });  
}





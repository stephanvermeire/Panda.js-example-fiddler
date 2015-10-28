function go(url){
	//store url so we know where to navigate back
	var linkback=url.substring(9);
	linkback=linkback.substring(0, linkback.indexOf('/'));
	var storage=$.localStorage;
    storage.set('linkback', linkback);
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

function goCodeOnly(url){
    $.ajax({url:url,
        complete:function(result){
           //store text
           console.dir(result);
           var storage=$.localStorage;
           storage.set('codesnippets', result.responseText);
           console.log(storage.get('codesnippets'));
           window.location.href = "codeonly.html";
        }
    });  
}





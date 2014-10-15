var the = {
    use_codemirror: true,
    editor: null // codemirror editor
};

function beautify() {
var source = the.editor ? the.editor.getValue() : $('#source').val(),
    output;

   output = js_beautify(source);
   the.editor.setValue(output);
}

function refresh(){
    var post=the.editor.getValue();
   var storage=$.localStorage;
   storage.set('codesnippets', post);
    window.location.href = "fiddler.html";
}


$(function () {
    var default_text="",
        textArea = $('#source')[0];
    
    
    the.editor = CodeMirror.fromTextArea(textArea, {
            lineNumbers: true
    });

	var storage=$.localStorage;
    default_text=storage.get('codesnippets');
    the.editor.setValue(default_text);
    //$('#source').trigger('autosize.resizeIncludeStyle');
    eval(default_text);
    document.getElementById("canvas").style.marginTop="10px";
    //document.getElementById("canvas").style.marginLeft="auto";
    //$('#canvas').css("position", "relative");
    console.log("!");

});




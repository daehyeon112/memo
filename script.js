$(document).ready(function(){
    
    if($.localstorage.isset('memo')){
        $('.tarea').val($.localstorage.get('memo'));
    }
    $('.btn_area').click(function(){
        $.localstorage.set('memo',$('.tarea').val());
        alert('저장 되었습니다');
    });
});
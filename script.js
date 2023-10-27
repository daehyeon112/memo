$(document).ready(function(){
    if(localStorage.getItem('memo')){
        $('.tarea').val(localStorage.getItem('memo'));
    }
    $('.btn_area').click(function(){
        localStorage.setItem('memo', $('.tarea').val());
        alert('저장 되었습니다');
    });
});
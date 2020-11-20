import $ from 'jquery';
$(function(){
    $('span.item-icon').click(function(){
        if($(this).parent().siblings('ul.second-item-list').is(':hidden')){
            $('ul.second-item-list').hide();
            $('span.item-icon').attr('class','pull-right glyphicon glyphicon-chevron-right item-icon')
            $(this).parent().siblings('ul.second-item-list').slideToggle();
            $(this).attr('class','pull-right glyphicon glyphicon-chevron-down item-icon');
        }
        else{
            console.log('隐藏');
            $('ul.second-item-list').hide();
            $('span.item-icon').attr('class','pull-right glyphicon glyphicon-chevron-right item-icon');
        }
    })

})
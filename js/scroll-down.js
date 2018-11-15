var scrollDownTo = (function(objectID){
    //alert('object id is ' + objectID);
    $('html,body').animate({ scrollTop : $(objectID).offset().top }, 1000);
});
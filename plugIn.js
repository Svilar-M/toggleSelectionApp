
$(document).ready(function(){ 
  
 
  
  $.toggleSelection("selecctall", "checkbox1");
  
  $.disableSelection('desableall', 'for-disable');
  
});


(function($){

	$.toggleSelection = function(cbx_selectAllId, cbx_selectClass){
      
      
      $('#' + cbx_selectAllId).change(function(){
        
       
        $('.' + cbx_selectClass).prop('checked',  $(this).prop("checked"));
      });
      
    };
  
    $.disableSelection = function(cbx_selectAllId, cbx_selectClass){
      
      $('#' + cbx_selectAllId).change(function(){ 
        var disable = $(this).prop("checked");
        
        if(disable)
          $('.' + cbx_selectClass).attr('disabled',  disable);
        else
          $('.' + cbx_selectClass).removeAttr('disabled');
          
      });
      
    };

})(jQuery);



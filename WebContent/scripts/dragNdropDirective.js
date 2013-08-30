dragNdrop.directive('drag',function($log){
	return {
		restrict:'A',
	    link: function(scope, element, attrs) {
	    	element.draggable({
	    		/**Actions perform when drag happens*/
	    		revert :'invalid',
	    		start: function(event, ui){
		    		/**Getting current Div id*/
		    		selectedDivId = $(this).attr('id');
		    		/**Setting z- index of current Div 
		    		 * which makes the selected div to drag over other divs*/
		    		$("#"+selectedDivId).css({'z-index':'2000'});
		    	},
		    	
		    	/**Actions perform when drag stops*/
		    	stop: function(event, ui){
		 			/**Setting z- index of current Div*/
		 			$("#"+event.srcElement.id).css({'z-index':'1999'});
		 		}
	            
	        });
	    }
	};
});

dragNdrop.directive('drop',function($log){
	$log.info('In drop');
	return {
		restrict:'A',
	    link: function(scope, element, attrs) {
	    	element.droppable({
	    		/**Draggable overlaps the droppable at least 50% in both directions.*/
	    		tolerance : "intersect",	    		
	    		drop: function( event, ui ) {	    			
			    	  /**Setting src id & trgId*/
			    	  srcId = ui.draggable.attr('id');
			    	  trgId = event.target.id;
			    	  
			    	  /**Swapping the values src and target divs*/
			          temp = scope.getProducts()[srcId];
			          scope.getProducts()[srcId] = scope.getProducts()[trgId];
			          scope.getProducts()[trgId] = temp;
			          
			          /**Updating the product list after changing the values*/
			          scope.$apply(scope.getProducts());
			          
			          /**Setting style to default for all Divs*/
			    	  for(var j =0; j< scope.getProducts().length; j++){
			    		  $("#"+j).css({'z-index':'1999'});
			    		  $("#"+j).css({'left':''});
			    		  $("#"+j).css({'top':''});
			    	  }
			    	 
			      },
			      
			      out: function(event, ui){
			      }
			 });
	    }
	};
});
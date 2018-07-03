function doBubbleSort(arr){//function to sort array using the bubble sort method
    var arrBubble = arr.map((a)=>{
      return a;
    });
    var startingTime = process.hrtime();    
    let swapped = true;
    while (swapped == true){
      swapped = false;
      for (let i=0;i<arrBubble.length; i++){
        if (arrBubble[i] > arrBubble[i+1]){
          var temp = arrBubble[i];
          arrBubble[i] = arrBubble[i+1];
          arrBubble[i+1] = temp;
          swapped = true;
				 }
			 }
    }
}
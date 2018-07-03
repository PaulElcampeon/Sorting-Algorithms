function doSelectionSort(arr){//function to sort array using the selection 
    var arrSelection = arr.map((a)=>{
        return a;
      });
    for(let i = 0; i< arrSelection.length; i++){
      let index = i;
      for(let j = 1+i; j< arrSelection.length; j++){
        if(arrSelection[j] < arrSelection[index]){ 
          index = j;
            }
        }
      let smallerNumber = arrSelection[index];  
      arrSelection[index] = arrSelection[i];
      arrSelection[i] = smallerNumber;
    }
}
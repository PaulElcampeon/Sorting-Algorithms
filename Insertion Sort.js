function doInsertionSort(arr){//function to sort array using insertion sort
    var arrInsertion = arr.map((a)=>{
          return a;
        });
    let temp = 0;
      for(let i =1; i<arrInsertion.length; i++){
        for(let j=i; j>0; j--){
          if(arrInsertion[j] < arrInsertion[j-1]){
            temp = arrInsertion[j];
            arrInsertion[j] = arrInsertion[j-1];
            arrInsertion[j-1] = temp;
            }
        }   
    }
}
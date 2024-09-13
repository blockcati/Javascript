function calculateDiscount(TotalPrice){

    if(TotalPrice>100){

return TotalPrice - 10;

} else 
 {
    return TotalPrice;

    }
    }

    console.log(calculateDiscount(100));  
    console.log(calculateDiscount(12)); 
    console.log(calculateDiscount(150)); 
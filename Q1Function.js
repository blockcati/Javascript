let abcd = ["56","13","43","32"];

function arrr(abcd){

    newarr =[];

    for(i=0; i<abcd.length; i++){

        if(abcd[i]>40){
            newarr.push(abcd[i]);
        }


    }

    return newarr;

}
console.log(arrr(abcd));

const sort= (tab)=>{
    for (let i=0;i<tab.length; i++){
        for(let j = i; j > 0; j--){
            if (tab[j]< tab[j-1]){
                let temp;
                temp=tab[j];
                tab[j]= tab[j-1]
                tab[j-1]=temp;
            }
        }
    } 
    return tab 
}
console.log(sort([7,8,69,14,2,90]))
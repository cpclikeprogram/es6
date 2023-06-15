export function fastPower(x:any,n:any){
    let exponent = n>0?n:-n;
    let result = 1;
    while(exponent>0){
        if(exponent > 0 ){
            if(exponent % 2 === 1) result*=x;
            x*=x;
            exponent = Math.floor(exponent/2)
        }
        return n>0?result:1/result;
    }
}
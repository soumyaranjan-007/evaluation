function is_prime(num){
    if (num ==1){
        return false;
    }
    for(let i = 2 ; i <= num/2 ; i ++){
        if(num%2 === 0){
            return false;
        }
    }
    return true ;
}
console.log(is_prime(11));

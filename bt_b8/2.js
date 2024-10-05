function timMaxMin(){
    let a = ('1 2 3 4 5 6 7 8 9 10').split(' ').map(Number);
    let max = Math.max(...a);
    let min = Math.min(...a);
    alert('Max: ' + max + ' Min: ' + min);
}

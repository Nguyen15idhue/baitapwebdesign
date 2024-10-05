function kiemtraSo(){
    let soNgauNhien = Math.round(Math.random() * 10);
    console.log(soNgauNhien);

    let userInput = document.getElementById('userInput').value;
    userInput = Number(userInput);

    if (userInput === soNgauNhien) {
        alert('Chúc mừng bạn đã đoán đúng');
    } else {    
       alert('Bạn đã đoán sai');
    }

}

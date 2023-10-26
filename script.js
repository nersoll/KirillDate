function checkWord() {
   
    var enteredWord = document.getElementById("name").value.toLowerCase(); // Получаем введенное слово и приводим его к нижнему регистру
    var enteredWord1 = document.getElementById("password").value.toLowerCase(); // Получаем введенное слово и приводим его к нижнему регистру
    var correctWord1 = "любовь"; // Правильное слово для сравнения (в данном случае "пароль")


    if ((enteredWord === ("соня") | enteredWord === "софия") & enteredWord1 === correctWord1) {
        window.location.href = "success.html"; // Если слова совпадают, перенаправляем пользователя на success.html
    } else {
        alert("Спроси подсказку ❤"); // Если слова не совпадают, выводим сообщение об ошибке
    }
}
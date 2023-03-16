//Функция для проверки длины строки. Имеет два параметра: строка и максимальная длина.
function cheksLength (lineWord, maxLength) {
  // Проверка длины строки lineWord с максимальным значение длины maxLegth, если меньше или равно то true, в остальных false
  if (lineWord.length <= maxLength){
    return true;
  }

  return false;
}

console.log(cheksLength('Просто так', 18));
console.log(cheksLength('Жизнь это хорошо', 5));
console.log(cheksLength('Просто проверяем как работает', 8));


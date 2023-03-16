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



//Функция для проверки строка палидромом
//Для начала сделаем функцию которая развернет строку.
function unwrapString (string) {
  //Переведем все в один регистр и удалим все пробелы
  let lowerString = string.toLowerCase().replaceAll(' ','');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--){
    reverseString += lowerString[i];
  }
  return reverseString;

}
// функция сравнения строк
function cheksPalidrom (string){
  let lowerString = string.toLowerCase().replaceAll(' ','');
  if (lowerString === unwrapString(string)){
    return true;
  }

  return false;

}

console.log(cheksPalidrom('ТоПот'));
console.log(cheksPalidrom('Шопот'));
console.log(cheksPalidrom('Молоко делили ледоколом'));


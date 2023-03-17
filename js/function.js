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
  const lowerString = string.toLowerCase().replaceAll(' ','');
  let reverseString = '';
  for (let i = lowerString.length - 1; i >= 0; i--){
    reverseString += lowerString[i];
  }
  return reverseString;

}
// функция сравнения строк
function cheksPalidrom (string){
  const lowerString = string.toLowerCase().replaceAll(' ','');
  if (lowerString === unwrapString(string)){
    return true;
  }

  return false;

}
console.log(cheksPalidrom('ТоПот'));
console.log(cheksPalidrom('Шопот'));
console.log(cheksPalidrom('Молоко делили ледоколом'));


// Функция которая извлекает число
function findNumber(message) {
  //Если в сообщение будет число его необходимо преобразовать в строку
  const messageString = String(message);
  // Определим переменную в которую будет записываться число
  let number = '';
  for (let i = 0; i <=messageString.length - 1; i++){
    if(parseInt(messageString[i], 10) >= 0){
      number += messageString[i];
    }
    number += '';
  }
  return number;
}

console.log (findNumber('Пусть будет такое число 1691 и еще вот такое 985 и такое 125'));
console.log (findNumber('просто такие числа 12 и 85 и 985'));
console.log (findNumber(-12.151));



// Функция которая добавляет символы
function addSimbol (originalString, minLengthString, additionString){
  let newString = originalString;
  //Количество дополнительных символов
  let size = minLengthString - newString.length;

  if (size <= additionString.length && size > 0){
    newString = additionString.slice(0, size) + newString;
    return newString
  } else if(size > additionString.length){
    while (size > 0){
      if(size > additionString.length) {
        newString = additionString.slice(0, additionString.length) + newString;
        size = minLengthString - newString.length
      } else {
        newString = additionString.slice(0, size) + newString
        return newString;
      }
    }
  }

  return newString;
}

console.log (addSimbol('1', 2, '0'));
console.log (addSimbol('1', 4, '0'));
console.log (addSimbol('q', 4, 'werty'));
console.log (addSimbol('q', 4, 'we'));
console.log (addSimbol('qwerty', 4, '0'));


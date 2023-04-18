//Функция для проверки длины строки. Имеет два параметра: строка и максимальная длина.
function checksLength (lineWord, maxLength) {
  // Проверка длины строки lineWord с максимальным значение длины maxLegth, если меньше или равно то true, в остальных false
  return lineWord.length <= maxLength;
}

checksLength('Пусть будет так', 8);

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
function checksPalidrom (string){
  const lowerString = string.toLowerCase().replaceAll(' ','');
  return lowerString === unwrapString(string);
}

checksPalidrom('Довод');

// Функция которая извлекает число
function findNumber(message) {
  //Если в сообщение будет число его необходимо преобразовать в строку
  const messageString = String(message);
  // Определим переменную в которую будет записываться число
  let number = '';
  for (let i = 0; i <= messageString.length - 1; i++){
    if(parseInt(messageString[i], 10) >= 0){
      number += messageString[i];
    }
    number += '';
  }
  return number;
}

findNumber('120 прибавить 140 равно 260');

// Функция которая добавляет символы
function addString (originalString, minLengthString, additionString){
  let newString = originalString;
  //Количество дополнительных символов
  let size = minLengthString - newString.length;

  if (size <= additionString.length && size > 0){
    newString = additionString.slice(0, size) + newString;
    return newString;
  } else if(size > additionString.length){
    while (size > 0){
      if(size > additionString.length) {
        newString = additionString.slice(0, additionString.length) + newString;
        size = minLengthString - newString.length;
      } else {
        newString = additionString.slice(0, size) + newString;
        return newString;
      }
    }
  }

  return newString;
}

addString('Работа', 8, 'школа');


function checkStringLength(string, maxLength) {
  return (string.length <= maxLength);
}
// Cтрока короче 20 символов
checkStringLength('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
checkStringLength('проверяемая строка', 18); // true
// Строка длиннее 10 символов
checkStringLength('проверяемая строка', 10); // false

function isPalindrome(string) {
  const normalizedString = string.toLowerCase().replaceAll(' ','');
  let reversedString = '';
  for (let index = normalizedString.length - 1; index >= 0; index--) {
    reversedString += normalizedString[index];
  }
  return reversedString === normalizedString;
}

// Строка является палиндромом
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс');  // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

const timeToMinutes = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);
  return hours * 60 + minutes;
};

const isMeetingInWorkTime = (workStart, workEnd, meetingStart, meetingDuration) => {
  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);
  const meetingEndMinutes = meetingStartMinutes + meetingDuration;
  return meetingStartMinutes >= workStartMinutes && meetingEndMinutes <= workEndMinutes;
};

isMeetingInWorkTime('08:00', '17:30', '14:00', 90); // true
isMeetingInWorkTime('8:0', '10:0', '8:0', 120);     // true
isMeetingInWorkTime('08:00', '14:30', '14:30', 90);  // false
isMeetingInWorkTime('14:00', '17:30', '08:0', 90);   // false
isMeetingInWorkTime('8:00', '17:30', '08:00', 900);  // false

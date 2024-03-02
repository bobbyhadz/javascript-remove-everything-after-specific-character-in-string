// EXAMPLE 1 - Remove everything after a specific Character in JavaScript

// ✅ Remove everything after the first occurrence of a character
const str = 'BMW[1996]';

const result = str.split('[')[0];
console.log(result); // 👉️ BMW

// // -------------------------------------------------------------

// // ✅ Remove everything after the last occurrence of a character

// const str2 = 'BMW[abc][1996]';

// const result2 = str2.slice(0, str2.lastIndexOf('['));
// console.log(result2); // 👉️ BMW[abc]

// ------------------------------------------------------------------

// // EXAMPLE 2 - Remove everything after a specific Character using `String.slice()`

// const str = 'BMW[1996]';

// // ✅ Remove everything after the first occurrence of a character

// const result = str.slice(0, str.indexOf('['));
// console.log(result); // 👉️ BMW

// // ------------------------------------

// // ✅ Remove everything after the last occurrence of a character

// const str2 = 'BMW[abc][1996]';

// const result2 = str2.slice(0, str2.lastIndexOf('['));
// console.log(result2); // 👉️ BMW[abc]

// ------------------------------------------------------------------

// // EXAMPLE 3 - Remove everything after a specific Character using `String.substring()`

// const str = 'BMW[1996]';

// // ✅ Remove everything after the first occurrence of a character

// const result = str.substring(0, str.indexOf('['));
// console.log(result); // 👉️ BMW

// // ------------------------------------

// // ✅ Remove everything after the last occurrence of a character

// const str2 = 'BMW[abc][1996]';

// const result2 = str2.substring(0, str2.lastIndexOf('['));
// console.log(result2); // 👉️ BMW[abc]

// ------------------------------------------------------------------

// // EXAMPLE 4 - Remove everything after a specific Character using regex

// const str = 'BMW[1996]';

// const result = str.replace(/\[.*/, '');
// console.log(result); // 👉️ BMW

// // -----------------------------------------

// const str2 = 'BMW-1996';

// const result2 = str2.replace(/-.*/, '');
// console.log(result2);

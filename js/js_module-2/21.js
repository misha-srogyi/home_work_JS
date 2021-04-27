// Lesson 21!!!Поиск самого длинного слова!!!

// Напиши функцию findLongestWord(string) которая принимает произвольную строку состоящую только из слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.

function findLongestWord(string) {
    // Пиши код ниже этой строки
    let longestWord = '';
    const words = string.split(' ');
    console.log(words);

    for (const el of words) {
        console.log('el: ', el);
        console.log('longestWord: ', longestWord);
        if (el.length > longestWord.length) {
            longestWord = el;
        }
    }
        return longestWord;

        // Пиши код выше этой строки
    }

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
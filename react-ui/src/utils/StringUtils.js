
// Simple function to do give a simple go at title casing strings.
// Does not account for words that should not capitalize such as "and".
export const titleCase = (title) => {
    let words = title.split(' ');

    words.forEach((word, index) => {
        words[index] = word.charAt(0).toUpperCase() + word.slice(1);
    })
    return words.join(' ');
}
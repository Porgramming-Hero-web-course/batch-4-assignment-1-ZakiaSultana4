function countWordOccurrences(sentenceString: string, targetWord: string) {
    const sentenceArray = sentenceString.toLowerCase()
        .replace(/[^\w\s]/g, '')
        .split(/\s+/);

    let wordCount = 0;
    sentenceArray.forEach((word) => {
        if (word === targetWord.toLowerCase()) {
            wordCount++
        }
    })

    return wordCount
}
// console.log(countWordOccurrences("TypeScript is great. I love TypeScript!", "typescript"));
var mostCommonWord = function(paragraph, banned) {
    // 1. remove symbols from arr
    const removedSymbols = paragraph.replace(/[!?',;.]/g, "");
		console.log('removedSymbols: ', removedSymbols);
    // 2. split string into arr of words
    const wordsArr = removedSymbols.split(" ");
		console.log('wordsArr: ', wordsArr);

    // 3. count the ocurences of each word
    const wordsMap = new Map();

    for (const word of wordsArr) {
        const lowerWord = word.toLowerCase();
				console.log("lowerWord: ", lowerWord);
        if (wordsMap.has(lowerWord)){
            let count = wordsMap.get(lowerWord);
						console.log('count: ', count);
            count += 1;
            wordsMap.set(lowerWord, count);
        }else{
					wordsMap.set(lowerWord, 1);
				}
    }

		console.log(wordsMap);

    const sortedEntries = [...wordsMap.entries()].sort((a, b) => b[1] - a[1]);

		console.log(banned, sortedEntries[0][0]);
		console.log(banned.indexOf(sortedEntries[0][0]) > -1);
		
		console.log(banned.indexOf(sortedEntries[0][0]));

		let mostCommWord;
		
		
    for (let i = 0; i < sortedEntries.length; i++) {
      if (banned.indexOf(sortedEntries[i][0]) === -1) {
        mostCommWord = sortedEntries[i][0];
				break;
      }
    }

		return mostCommWord;
};

const par = "Bob hit a ball, the hit BALL flew far after it was hit.";
const banned = ["hit"];

const res = mostCommonWord(par, banned);

console.log('res: ', res);
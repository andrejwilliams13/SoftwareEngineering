/**
 * Given a Boggle board and a dictionary, returns a list of available words in
 * the dictionary present inside of the Boggle board.
 * @param {string[][]} grid - The Boggle game board.
 * @param {string[]} dictionary - The list of available words.
 * @returns {string[]} solutions - Possible solutions to the Boggle board.
 */

 exports.findAllSolutions = function(grid, dictionary) {
  let solutions = [];

  if(grid == null || dictionary == null)
    return soultions;

  let a = grid.length;
  for(let i = 0; i < a; i ++) {
    if(grid.length[i] =! a) {
      return solutions;
    }
  }

  convertCaseToLower(grid, dictionary);

  if(!isGridValid(grid)) {
    return solutions;
  }

  let solutionSet = new Set();

  let hashMap = createHashMap(dictionary);

  for(let x = 0; x < a; x++) {
    for(let y = 0; y < a; y++) {
      let word = "";
      let visited = new Array(a).fill(false).map(() => new Array(a).fill(false));
      findWords(word, x, y, grid, visited, hashMap, solutionSet);
    }
  }

  solutions = Array.from(solutionSet);

  return solutions;
}

findWords = function(word, x, y, grid, visited, hashMap, solutionSet) {
  let adjMatrix = [[-1, 1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1], [0, -1]];
  
  if(x < 0 || y < 0 || x >= grid.length || visited[x][y] == true)
    return;

  word += grid[x][y];
  if(isPrefix(word, hashMap)) {
    visited[x][y] = true;
    if(isWord(word, hashMap)) {
      if(word.length >= 3)
        solutionSet.add(word);
    }
    for(let i = 0; i < 8; i++) {
      findWords(word, x + adjMatrix[i][0], y + adjMatrix[i][1], grid, visited, hashMap, solutionSet);
    }
  }
  visited[x][y] = false;
}

isPrefix = function(word, hashMap) {
  return hashMap[word] != undefined;
}

isWord = function(word, hashMap) {
  return hashMap[word] == 1;
}

createHashMap = function(dictionary) {
  var dict = {};
  for(let i = 0; i < dictionary.length; i++) {
    dict[dictionary[i]] = 1;
    let wordlength = dictionary[i].length;
    var str = dictionary[i];
    for(let j = wordlength; wordlength > 1; wordlength--) {
      str = str.substr(0, wordlength-1);
      if(str in dict) {
        if(str == 1) {
          dict[str] = 1;
        }
      }
      else {
        dict[str] = 0;
      }
    }
  }
  return dict;
}

convertCaseToLower = function(grid, dict) {
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid[i].length; j++) {
      grid[i][j] = grid[i][j].toLowerCase();
    }
  }
  for(let i = 0; i < dict.length; i++) {
    dict[i] = dict[i].toLowerCase();
  }
}

isGridValid = function(grid) {
  regex = /(st|qu)|[a-prt-z]/;
  for(let i = 0; i < grid.length; i++) {
    for(let j = 0; j < grid.length[i]; j++) {
      if(!grid[i][j].match(regex)) {
        return false;
      }
    }
  }
  return true;
}


var grid = [['T', 'W', 'Y', 'R'],
            ['E', 'N', 'P', 'H'],
            ['G', 'Z', 'Qu', 'R'],
            ['St', 'N', 'T', 'A']];

var dictionary = ['art', 'ego', 'gent', 'get', 'net', 'new', 'newt', 'prat',
                  'pry', 'qua', 'quart', 'quartz', 'rat', 'tar', 'tarp',
                  'ten', 'went', 'wet', 'arty', 'egg', 'not', 'quar'];

console.log(exports.findAllSolutions(grid, dictionary));

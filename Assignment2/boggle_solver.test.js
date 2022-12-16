const boggle_solver = require('/home/codio/workspace/Boggle_Testing/boggle_solver.js');

/** Lowercases a string array in-place. (Used for case-insensitive string array
 *  matching).
 * @param {string[]} stringArray - String array to be lowercase.
 */
function lowercaseStringArray(stringArray) {
  for (let i = 0; i < stringArray.length; i++)
    stringArray[i] = stringArray[i].toLowerCase();
}

describe("Boggle Solver tests suite:", () => {
  describe("Normal input", () => {
    test("2x2 case", () => {
      let grid = [
        ["H", "I"],
        ["A", "T"],
      ];
      let dictionary = ["HAT", "HIT", "TAI", "HI"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["HAT", "HIT", "TAI"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("3x3 case", () => {
      let grid = [
        ["G", "E", "S"],
        ["A", "P", "I"],
        ["C", "H", "T"],
      ];
      let dictionary = ["GAP", "TIP", "THIS", "HA"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["GAP", "THIS", "TIP"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("4x4 case", () => {
      let grid = [
        ["M", "S", "E", "F"],
        ["R", "A", "T", "D"],
        ["L", "O", "N", "E"],
        ["K", "A", "F", "B"],
      ];
      let dictionary = ["BEST", "BENT", "LOT", "AT"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["LOT", "BENT"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("5x5 case", () => {
      let grid = [
        ["P", "U", "Z", "Z", "L"],
        ["W", "O", "R", "D", "E"],
        ["B", "O", "G", "G", "L"],
        ["S", "E", "A", "R", "C"],
        ["F", "I", "N", "D", "H"],
      ];
      let dictionary = ["WORD", "SCRABBLE", "BOGGLE", "FIND", "PUZZLE"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["WORD", "BOGGLE", "FIND", "PUZZLE"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  describe("Problem contraints", () => {
    test("QU case", () => {
      const grid = [
        ["QU", "A", "K"],
        ["E", "S", "E"],
        ["T", "O", "N"],
      ];
      const dictionary = ["QUAKE", "QUEST", "TON", "BO"];
      const expected = ["QUAKE", "QUEST", "TON"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Empty case", () => {
      const grid = [[""], [""]];
      const dictionary = [];
      const expected = [];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("NxM case", () => {
      let grid = [["X", "Y"], ["Z"]];
      let dictionary = ["XY", "XYZ", "XZ"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = [];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });

    test("Duplicate letters case", () => {
      let grid = [
        ["X", "Y"],
        ["Y", "Z"],
      ];
      let dictionary = ["XYY", "XYZ", "WX"];
      let solutions = boggle_solver.findAllSolutions(grid, dictionary);
      let expected = ["XYY", "XYZ"];
      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });

  describe("Input edge cases", () => {
    test("Dictionary is empty", () => {
      const grid = [
        ["M", "S", "E", "F"],
        ["R", "A", "T", "D"],
        ["L", "O", "N", "E"],
        ["K", "A", "F", "B"],
      ];
      const dictionary = [];
      const expected = [];

      let solutions = boggle_solver.findAllSolutions(grid, dictionary);

      lowercaseStringArray(solutions);
      lowercaseStringArray(expected);
      expect(solutions.sort()).toEqual(expected.sort());
    });
  });
});

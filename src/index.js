
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix == undefined) return [];
    let SortMatrix = [];
    for (let i = 0; i < matrix.length; i++) {
        if ((i % 2)===0) {
            SortMatrix.push(...matrix[i]);
        } else {
            SortMatrix.push(...matrix[i].reverse());
        }
    }
    return SortMatrix;
}

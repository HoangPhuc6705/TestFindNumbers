var A = [];
var Matrix = [], PseudoMatrix = [];

var Table = (side) => {
  for (let i = 0; i < (side * side); i++) {
    A[i] = i + 1;
  }
  // Xáo mảng
  A = A.sort(() => Math.random() - 0.5);

  for (let i = 0; i < side; i++) {
    Matrix[i] = [];
    PseudoMatrix[i] = [];
  }
  for (let i = 0; i < side; i++) {
    for (let j = 0; j < side; j++) {
      Matrix[i][j] = A[j + (i * side)];
      PseudoMatrix[i][j] = 0;
    }
  }
}

export {
  Table,
  A,
  Matrix,
  PseudoMatrix
};
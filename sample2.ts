// 読み取り専用プロパティ
type ImutaclePerson = {
  readonly name: string;
  age: number;
};

const alice: ImutaclePerson = {
  name: "Alice",
  age: 30,
};

// Tuple型
const person: [string, number] = ["Alice", 30];

// 関数
function addNumbers(a: number, b: number): number {
  return a + b;
}

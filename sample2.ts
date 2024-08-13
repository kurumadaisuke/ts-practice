// 読み取り専用プロパティ
type ImutaclePerson = {
  readonly name: string;
  age: number;
};

const alice: ImutaclePerson = {
  name: "Alice",
  age: 30,
};

alice.name = "Jane";

// Tuple型
const person: [string, number] = ["Alice", 30]


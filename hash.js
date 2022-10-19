// const ulaz = "sara saracevic";
// const broj = BigInt(`0x${Buffer.from(ulaz).toString("hex")}`);

// let vrednost = broj;
// for (let i = 0; i < 16; i++) {
//   vrednost = vrednost * vrednost;
//   vrednost = vrednost % BigInt(282943);
// }
// vrednost *= broj;
// vrednost = vrednost % BigInt(282943);
// vrednost = (vrednost.toString() + "1234").slice(0, 6);
// console.log(vrednost);
const crypto = require("crypto");
const hash = crypto.createHash("sha256");
const ulaz = "sara";

console.log(hash.update(ulaz).digest("hex"));

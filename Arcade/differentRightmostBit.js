function differentRightmostBit(n, m, ans) {
  return (n ^ m) & (~(n ^ m) + 1);
}




const n1 = 11
const m1 = 13
const answer1 = 2
const n2 = 42
const m2 = 22
const answer2 = 4

const n3 = 1073741823
const m3 = 1071513599
const answer3 = 131072

console.log(differentRightmostBit(n1, m1, answer1))
console.log(differentRightmostBit(n2, m2, answer2))
//console.log(differentRightmostBit(n3, m3, answer3))

/* 
You're given two integers, n and m. Find position of the rightmost bit in which they differ in their binary representations (it is guaranteed that such a bit exists), counting from right to left.

Return the value of 2position_of_the_found_bit (0-based).

Example

For n = 11 and m = 13, the output should be
differentRightmostBit(n, m) = 2.

11 = 1011, 13 = 1101, the rightmost bit in which they differ is the bit at position 1 (0-based) from the right in the binary representations.
So the answer is 2^1 = 2.

For n = 7 and m = 23, the output should be
differentRightmostBit(n, m) = 16.

710 = 1112, 2310 = 101112, i.e.

00111
10111
So the answer is 24 = 16.

Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
0 ≤ n ≤ 230.

[input] integer m

Guaranteed constraints:
0 ≤ m ≤ 230,
n ≠ m.

[output] integer

*/
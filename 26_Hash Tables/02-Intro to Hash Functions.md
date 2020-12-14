# Intro to Hash Functions

## WHAT MAKES A GOOD HASH?
(not a cryptographically secure one)


1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

## Here's a hash that works on strings only:
```
function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    // map "a" to 1, "b" to 2, "c" to 3, etc.
    let value = char.charCodeAt(0) - 96
    total = (total + value) % arrayLen;
  }
  return total;
}

hash("pink", 10); // 0
hash("orangered", 10); // 7
hash("cyan", 10); // 3
```

## REFINING OUR HASH
Problems with our current hash

- Only hashes strings (we won't worry about this)
- Not constant time - linear in key length
- Could be a little more random

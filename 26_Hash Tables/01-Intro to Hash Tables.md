# Hash Tables

## OBJECTIVES
- Explain what a hash table is
- Define what a hashing algorithm
- Discuss what makes a good hashing algorithm
- Understand how collisions occur in a hash table
- Handle collisions using separate chaining or linear probing

## WHAT IS A HASH TABLE?
- Hash tables are used to store key-value pairs.
- They are like arrays, but the keys are not ordered.
- Unlike arrays, hash tables are fast for all of the following operations: finding values, adding new values, and removing values!

## WHY SHOULD I CARE?
- Nearly every programming language has some sort of hash table data structure
- Because of their speed, hash tables are very commonly used!

## HASH TABLES IN THE WILD
- Python has Dictionaries
- JS has Objects and Maps*
- Java, Go, & Scala have Maps
- Ruby has...Hashes
  - Objects have some restrictions, but are basically hash tables


## HASH TABLES
Introductory Example

How can we get human-readability and computer readability?

Computers don't know how to find an element at index pink!

Hash tables to the rescue!

## THE HASH PART
To implement a hash table, we'll be using an array.

In order to look up values by key, we need a way to convert keys into valid array indices.

A function that performs this task is called a hash function.



# Lab Project | Performance and Structures

## Stack

- `TypeScript`

## Description

> A system that processes a CSV file with 50K+ lines and finds duplicates
>
> - **Technical Goal:** Use **Node.js Streams** (to prevent RAM to explode) and **Sets/Maps** for search &mdash; *`O(1)`*;
>
> - **What am I proving?** I undestand (or at least I'm learning) the **Big O Notation** (especially applied on `Node.js`). I'll compare some different approaches to achieve the same result, and log every relevant information (execution time, CPU/RAM usage)

## What did I learn?

> This project is one of my **Personal Lab's** projects, dedicated to simple/small projects that I created to learn some specific feature.

### Big O Notation

> The table bellow includes both average and worst complexity times on the "cheat sheet". The colored emojis (`🔵 Excellent`, `🟢 Good`, `🟡 Fair`, `🟠 Bad` &mdash; like $n \log n$ &mdash; and `🔴 Horrible` &mdash; for $n^2$, $2^n$, $n!$, and other growth rate functions higher than $n \log n$) indicates the efficiency of the actions/methods for each data structure in the formats: [`Average time complexity (Θ)` &mdash; `Worst time complexity (O)`] or [`Both (Θ/O)`]

| Data Structure | Access | Search | Insertion | Deletion |
|:---:|:---:|:---:|:---:|:---:|
| Array | `🔵O(1)` | `🟡O(n)` | `🟡O(n)` | `🟡O(n)` |
| Queue | `🟡O(n)` | `🟡O(n)` | `🔵O(1)` | `🔵O(1)` |
| Stack | `🟡O(n)` | `🟡O(n)` | `🔵O(1)` | `🔵O(1)` |
| Linked List | `🟡O(n)` | `🟡O(n)` | `🔵O(1)` | `🔵O(1)` |
| Skip List | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` |
| Hash Table (`Object`/`Map`/`Set`) | `N/A` | `🔵Θ(1)` — `🟡O(n)` | `🔵Θ(1)` — `🟡O(n)` | `🔵Θ(1)` — `🟡O(n)` |
| Binary Search Tree | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` | `🟢Θ(log n)` — `🟡O(n)` |

# 🚀 Node.js High-Performance CSV Stream Processor

*This project belongs to my **Software Engineering Lab**.*

> This project is designed for massive data processing, memory management efficiency and algorithm complexity analysis, everything made using `TypeScript` and `csv-parser`.
>
> The challenge consists on processing a CSV file with hundreds of thousands of lines to identify **duplicates**, ensuring the memory consumption remains low all the time and the execution time was optimized.

## 🧠 Highlights & Learning

### 1. Processing via Streams (Memory Efficiency)

Instead of the conventional approach to load the entire file to the memory (`fs.readFileSync`), I had to use **Readable Streams** for better performance and less memory required.

* **Why?** In production, a 1GB file would crash the process (`Heap Out of Memory`). Using `Streams` the Node.js has to process the file in small *chunks*, keeping constant memory usage, regardless of file size.

### 2. Algorithm Complexity &mdash; $O(1)$

To identify duplicates, I used **`Map`** instead of `Array`.

* **Analysis:** If I had used an Array with `.includes()`, the complexity would be **$O(n)$**, making the script slow as the file size grows. Using `Map`, any operation has, in the average, a time complexity of $O(1)$ (and $O(n)$ in the worst cases), meaning it is usually constant.

### 3. TypeScript & Utility Tools

* **Generics:** I've implemented some simplified version of a "performance monitor" (`logUsage`).
* **Telemetry:** The script compares `heapUsed` and `performance.now()` before and after the `callback` is called to estimate its performance.

## 🛠️ Stack

* **Node.js**
* **TypeScript**
* **csv-parse** (Stream parser)

## 🚀 How to run

First of all, **you'll need to have `Node.js` installed**. I recommend to use the latest Node.js (actually `v24.14.0`) `LTS` version available on their [official website](https://nodejs.org/en/download).

1. **Clone the repository:**

```bash
git clone https://github.com/seu-usuario/nome-do-repo.git
```

2. **Install the dependencies:**

```bash
npm install
```

3. **Run the CSV generator (configured to 100K rows):**

* You can also use your own dataset for tests, but you must configure it to make sure that the first column is which you want to search for duplicates.

```bash
node generator.js
```

4. **Build the app:**

* You can also use the command `npm run dev` to run it which uses `tsx` in watch mode (restarts the server when files are changed) but it may affect its performance. If you go through this way, you can ignore steps `4` and `5`, and the program will run normally.

```bash
npm run build
```

5. **Start the app:**

```bash
npm start
```

---

## Considerations

> This project shows up my proficiency on leading with **Node.js Internals**, **Data Structures** and **Performance Optimization**, crucial skills for developing scalable and efficient systems.

import React, { useState } from 'react';
import Footer from '../components/Footer';

/* ─────────────────────────────────────────────────────────────
   FULL AKTU SYLLABUS DATA  (Years 1 – 4, CS/CSE/CE)
   Each subject carries: units[], example, diagram, dfd
───────────────────────────────────────────────────────────── */
const subjectData = [

  /* ══════════════════  YEAR 1  ══════════════════ */
  {
    name: 'C Programming', code: 'KCS101', year: 1, semester: 1,
    category: 'Programming', icon: '💻', credits: 3,
    description: 'Foundation of programming using C language — syntax, logic, data types, functions, arrays, pointers, file I/O.',
    units: [
      { no: 1, title: 'Introduction to C', topics: ['History of C', 'Structure of C program', 'Data types, variables, constants', 'Operators & expressions', 'Input/output functions: scanf, printf'] },
      { no: 2, title: 'Control Structures', topics: ['if-else, switch-case', 'Loops: for, while, do-while', 'break, continue, goto', 'Nested loops and patterns'] },
      { no: 3, title: 'Functions & Arrays', topics: ['Function definition, declaration, call', 'Pass by value vs reference', '1D and 2D arrays', 'String handling functions'] },
      { no: 4, title: 'Pointers & Structures', topics: ['Pointer basics, pointer arithmetic', 'Pointers and arrays', 'Structures and Unions', 'typedef, enum'] },
      { no: 5, title: 'File Handling & Dynamic Memory', topics: ['File open/close/read/write', 'fgets, fputs, fprintf, fscanf', 'malloc, calloc, realloc, free', 'Dynamic arrays'] },
    ],
    example: {
      title: 'Fibonacci using Recursion',
      code: `#include <stdio.h>
int fib(int n) {
  if (n <= 1) return n;
  return fib(n-1) + fib(n-2);
}
int main() {
  for(int i=0; i<10; i++)
    printf("%d ", fib(i));
  return 0;
}
// Output: 0 1 1 2 3 5 8 13 21 34`,
      lang: 'c'
    },
    diagram: {
      title: 'Memory Layout of a C Program',
      nodes: ['Stack (local vars, return addr)', 'Heap (malloc/calloc)', 'BSS (uninitialized globals)', 'Data (initialized globals)', 'Text / Code segment'],
      type: 'stack'
    },
    dfd: {
      title: 'C Program Compilation Flow',
      steps: ['Source Code (.c)', '→ Preprocessor (macros)', '→ Compiler (assembly .s)', '→ Assembler (.o)', '→ Linker (executable)', '→ Loader → CPU Execution']
    }
  },

  {
    name: 'Mathematics – I', code: 'KAS101', year: 1, semester: 1,
    category: 'Core', icon: '📐', credits: 4,
    description: 'Differential calculus, matrices, series, complex numbers for engineering applications.',
    units: [
      { no: 1, title: 'Matrices', topics: ['Types of matrices', 'Rank, Inverse, Determinant', 'Eigenvalues & Eigenvectors', 'Cayley-Hamilton theorem', 'LU Decomposition'] },
      { no: 2, title: 'Differential Calculus', topics: ['Successive differentiation', "Leibnitz's theorem", 'Partial differentiation, Euler theorem', "Taylor's & Maclaurin's series", 'Maxima-minima of functions'] },
      { no: 3, title: 'Integral Calculus', topics: ['Beta & Gamma functions', 'Multiple integrals', 'Change of order of integration', 'Applications: area, volume'] },
      { no: 4, title: 'Ordinary Differential Equations', topics: ['First-order ODEs', 'Linear ODEs with constant coefficients', 'Method of variation of parameters', 'Cauchy–Euler equations'] },
      { no: 5, title: 'Complex Numbers & Series', topics: ["De Moivre's theorem", 'Roots of complex numbers', 'Fourier series (basics)', 'Power series convergence'] },
    ],
    example: {
      title: 'Eigenvalue Example',
      code: `Matrix A = [[2,1],[1,2]]
det(A - λI) = 0
(2-λ)² - 1 = 0
λ² - 4λ + 3 = 0
λ₁ = 1,  λ₂ = 3
Eigenvectors: v₁=[1,-1],  v₂=[1,1]`,
      lang: 'math'
    },
    diagram: {
      title: 'Matrix Operations Hierarchy',
      nodes: ['Matrix', 'Addition / Subtraction', 'Multiplication', 'Transpose', 'Inverse', 'Determinant', 'Eigenvalues'],
      type: 'tree'
    },
    dfd: {
      title: 'ODE Solution Flow',
      steps: ['Given ODE', '→ Identify Order & Degree', '→ Find Complementary Function (CF)', '→ Find Particular Integral (PI)', '→ General Solution = CF + PI']
    }
  },

  {
    name: 'Engineering Physics', code: 'KAS101P', year: 1, semester: 1,
    category: 'Core', icon: '⚡', credits: 4,
    description: 'Quantum mechanics, optics, laser, fiber optics, semiconductor physics.',
    units: [
      { no: 1, title: 'Quantum Mechanics', topics: ['Wave-particle duality', 'de Broglie hypothesis', "Heisenberg's uncertainty principle", 'Schrödinger wave equation', 'Particle in a box'] },
      { no: 2, title: 'Optics', topics: ['Interference: Young\'s double slit', 'Diffraction: single/double slit', 'Polarization', 'Holography basics'] },
      { no: 3, title: 'Laser & Fiber Optics', topics: ['Stimulated emission, population inversion', 'Types of lasers: He-Ne, CO₂, Ruby', 'Fiber optic structure', 'Numerical aperture, modes of propagation'] },
      { no: 4, title: 'Semiconductor Physics', topics: ['Band theory of solids', 'p-n junction diode', 'Hall effect', 'Solar cells'] },
      { no: 5, title: 'Dielectrics & Magnetism', topics: ['Electric polarization', 'Dielectric constant', 'Ferromagnetism', 'Superconductivity basics'] },
    ],
    example: {
      title: 'de Broglie Wavelength',
      code: `λ = h / mv
For electron (m=9.1×10⁻³¹ kg, v=10⁶ m/s):
λ = 6.626×10⁻³⁴ / (9.1×10⁻³¹ × 10⁶)
λ ≈ 0.728 nm  (comparable to X-rays!)`,
      lang: 'physics'
    },
    diagram: {
      title: 'Fiber Optic Structure',
      nodes: ['Core (high refractive index n₁)', 'Cladding (low refractive index n₂)', 'Buffer coating', 'Jacket', 'Total Internal Reflection → Light travels'],
      type: 'stack'
    },
    dfd: {
      title: 'Laser Operation Cycle',
      steps: ['Pump energy → Ground state electrons excited', '→ Metastable state (population inversion)', '→ Stimulated emission by photon', '→ Amplification in optical cavity', '→ Coherent laser output beam']
    }
  },

  {
    name: 'Engineering Chemistry', code: 'KAS102C', year: 1, semester: 2,
    category: 'Core', icon: '🧪', credits: 4,
    description: 'Electrochemistry, corrosion, polymers, fuels, water treatment — engineering context.',
    units: [
      { no: 1, title: 'Electrochemistry & Battery', topics: ['Electrochemical cells', 'EMF, electrode potential, Nernst equation', 'Fuel cells: H₂-O₂', 'Li-ion battery working'] },
      { no: 2, title: 'Corrosion & Lubrication', topics: ['Dry and wet corrosion', 'Galvanic series', 'Methods of corrosion prevention', 'Lubricants: types and properties'] },
      { no: 3, title: 'Polymers', topics: ['Types: thermoplastic vs thermoset', 'Addition and condensation polymerization', 'Properties of common polymers', 'Conducting polymers'] },
      { no: 4, title: 'Fuels & Combustion', topics: ['Solid, liquid, gaseous fuels', 'Calorific value, Dulong formula', 'Proximate and ultimate analysis', 'Refining of petroleum'] },
      { no: 5, title: 'Water Treatment', topics: ['Hardness of water: temporary, permanent', 'Lime-soda process', 'Ion exchange method', 'Reverse osmosis, desalination'] },
    ],
    example: {
      title: 'Nernst Equation',
      code: `E = E° - (RT/nF) × ln([products]/[reactants])
For Zn²⁺/Zn at 25°C with [Zn²⁺]=0.1M:
E = -0.76 - (0.0592/2) × log(0.1)
E = -0.76 + 0.0296 = -0.730 V`,
      lang: 'chem'
    },
    diagram: { title: 'Galvanic Cell', nodes: ['Anode (Zn) → oxidation', 'Salt bridge (ion transfer)', 'Cathode (Cu) → reduction', 'External circuit (electron flow)', 'EMF = E_cathode - E_anode'], type: 'flow' },
    dfd: { title: 'Water Treatment DFD', steps: ['Raw water', '→ Sedimentation (remove suspended solids)', '→ Coagulation (alum, FeSO₄)', '→ Filtration (sand/gravel bed)', '→ Chlorination / UV disinfection', '→ Potable water'] }
  },

  {
    name: 'Mathematics – II', code: 'KAS201', year: 1, semester: 2,
    category: 'Core', icon: '📊', credits: 4,
    description: 'Laplace transforms, Fourier series/transforms, vector calculus, PDE, numerical methods.',
    units: [
      { no: 1, title: 'Laplace Transform', topics: ['Definition and properties', 'Transforms of standard functions', 'Inverse Laplace transform', 'Solving ODEs using Laplace'] },
      { no: 2, title: 'Fourier Series & Transforms', topics: ['Euler formulae', 'Half-range series', 'Fourier Integral', 'Discrete Fourier Transform (DFT)'] },
      { no: 3, title: 'Vector Calculus', topics: ['Gradient, Divergence, Curl', 'Line, Surface, Volume integrals', "Green's, Stokes', Gauss's theorem"] },
      { no: 4, title: 'Partial Differential Equations', topics: ['Formation of PDEs', 'Wave equation, Heat equation', 'Laplace equation', 'Method of separation of variables'] },
      { no: 5, title: 'Numerical Methods', topics: ['Newton-Raphson method', 'Gaussian elimination', "Simpson's rule, Trapezoidal rule", 'Euler and Runge-Kutta methods'] },
    ],
    example: { title: 'Laplace of e^at', code: `L{e^at} = ∫₀^∞ e^at · e^(-st) dt
          = ∫₀^∞ e^(-(s-a)t) dt
          = 1/(s-a),  for s > a`, lang: 'math' },
    diagram: { title: 'Fourier Series Convergence', nodes: ['Original signal f(x)', '+ Fundamental frequency a₁sin(x)', '+ 2nd harmonic a₂sin(2x)', '+ 3rd harmonic …', '= Reconstructed signal ≈ f(x)'], type: 'stack' },
    dfd: { title: 'Runge-Kutta 4th Order Steps', steps: ["Given dy/dx = f(x,y), y(x₀)=y₀", '→ k₁ = h·f(xₙ, yₙ)', '→ k₂ = h·f(xₙ+h/2, yₙ+k₁/2)', '→ k₃ = h·f(xₙ+h/2, yₙ+k₂/2)', '→ k₄ = h·f(xₙ+h, yₙ+k₃)', '→ yₙ₊₁ = yₙ + (k₁+2k₂+2k₃+k₄)/6'] }
  },

  {
    name: 'Basic Electrical Engineering', code: 'KEE101', year: 1, semester: 2,
    category: 'Core', icon: '🔌', credits: 4,
    description: 'DC/AC circuits, transformers, motors, measuring instruments.',
    units: [
      { no: 1, title: 'DC Circuits', topics: ["Ohm's law, KVL, KCL", 'Series-parallel combinations', 'Superposition, Thevenin, Norton', 'Maximum power transfer theorem'] },
      { no: 2, title: 'AC Circuits', topics: ['Phasors, impedance, reactance', 'Series/parallel RLC circuits', 'Resonance, power factor', 'Three-phase circuits basics'] },
      { no: 3, title: 'Transformers', topics: ['Working principle, EMF equation', 'Efficiency and regulation', 'Auto-transformer', 'CT and PT'] },
      { no: 4, title: 'DC & AC Machines', topics: ['DC motor: types, speed control', 'Induction motor: slip, torque-speed', 'Synchronous machines intro'] },
      { no: 5, title: 'Measuring Instruments', topics: ['PMMC, moving iron', 'Wattmeter, energy meter', 'CRO basics', 'Digital multimeter'] },
    ],
    example: { title: "Thevenin's Theorem", code: `Circuit: 10V source, R1=2Ω, R2=3Ω, RL=?
1. Remove RL, find Vth = 10×3/(2+3) = 6V
2. Deactivate source, find Rth = 2||3 = 1.2Ω
3. RL = Rth = 1.2Ω for max power transfer
   Pmax = Vth²/(4Rth) = 36/4.8 = 7.5W`, lang: 'elec' },
    diagram: { title: "Thevenin Equivalent", nodes: ['Original complex circuit', '→ Remove load RL', '→ Calculate Vth (open circuit voltage)', '→ Calculate Rth (deactivate sources)', '→ Simple series circuit: Vth + Rth + RL'], type: 'flow' },
    dfd: { title: 'AC Generator → Consumer Flow', steps: ['Mechanical energy (turbine)', '→ Generator (EMF induced)', '→ Step-up transformer (high V, low I)', '→ Transmission lines', '→ Step-down transformer', '→ Consumer load'] }
  },

  /* ══════════════════  YEAR 2  ══════════════════ */
  {
    name: 'Data Structures', code: 'KCS301', year: 2, semester: 3,
    category: 'Programming', icon: '🌳', credits: 3,
    description: 'Arrays, linked lists, stacks, queues, trees, graphs, sorting and searching algorithms.',
    units: [
      { no: 1, title: 'Introduction & Arrays', topics: ['Algorithm complexity: O(n), O(log n)', 'Array operations: insert, delete, search', '2D arrays, sparse matrix', 'Polynomial representation'] },
      { no: 2, title: 'Linked Lists', topics: ['Singly, doubly, circular linked list', 'Operations: insert, delete, traverse', 'Stack and queue using linked list', 'Applications of linked lists'] },
      { no: 3, title: 'Stacks & Queues', topics: ['Stack: LIFO, push, pop', 'Infix to postfix conversion', 'Queue: FIFO, circular queue', 'Deque, Priority queue'] },
      { no: 4, title: 'Trees', topics: ['Binary tree: traversals (in/pre/post)', 'Binary Search Tree (BST)', 'AVL tree, B-tree basics', 'Heap: min-heap, max-heap'] },
      { no: 5, title: 'Graphs & Sorting', topics: ['BFS, DFS graph traversal', "Dijkstra's, Prim's, Kruskal's", 'Sorting: bubble, selection, insertion', 'Merge sort, quick sort, heap sort'] },
    ],
    example: { title: 'BST Insert in Python', code: `class Node:
  def __init__(self, val):
    self.val = val
    self.left = self.right = None

def insert(root, val):
  if not root: return Node(val)
  if val < root.val:
    root.left = insert(root.left, val)
  else:
    root.right = insert(root.right, val)
  return root`, lang: 'python' },
    diagram: { title: 'BST Structure (insert 5,3,7,1,4)', nodes: ['         5', '        / \\', '       3   7', '      / \\', '     1   4', '', 'Inorder: 1 3 4 5 7 (sorted!)'], type: 'tree-ascii' },
    dfd: { title: 'Quick Sort DFD', steps: ['Input array', '→ Choose pivot element', '→ Partition: left < pivot, right > pivot', '→ Recursively sort left subarray', '→ Recursively sort right subarray', '→ Combine: sorted array'] }
  },

  {
    name: 'OOP using Java', code: 'KCS302', year: 2, semester: 3,
    category: 'Programming', icon: '☕', credits: 3,
    description: 'Object-oriented programming concepts with Java — classes, inheritance, polymorphism, interfaces, exception handling, collections.',
    units: [
      { no: 1, title: 'Java Basics & OOP Concepts', topics: ['JVM, JDK, JRE architecture', 'Classes, objects, methods', 'Constructors, this keyword', 'Access modifiers: public, private, protected'] },
      { no: 2, title: 'Inheritance & Polymorphism', topics: ['Single, multilevel, hierarchical inheritance', 'Method overriding and overloading', 'super keyword, final keyword', 'Abstract classes'] },
      { no: 3, title: 'Interfaces & Packages', topics: ['Interface definition and implementation', 'Multiple inheritance via interfaces', 'Packages: java.lang, java.util', 'static and default methods in interface'] },
      { no: 4, title: 'Exception Handling & I/O', topics: ['try-catch-finally block', 'Checked vs unchecked exceptions', 'File I/O: FileReader, FileWriter, BufferedReader', 'Serialization'] },
      { no: 5, title: 'Multithreading & Collections', topics: ['Thread lifecycle, Runnable interface', 'Synchronization, wait-notify', 'ArrayList, LinkedList, HashMap', 'Iterator, Comparator, Collections class'] },
    ],
    example: { title: 'Polymorphism Example', code: `abstract class Shape {
  abstract double area();
}
class Circle extends Shape {
  double r;
  Circle(double r) { this.r = r; }
  double area() { return Math.PI * r * r; }
}
class Rectangle extends Shape {
  double l, b;
  Rectangle(double l, double b){this.l=l; this.b=b;}
  double area() { return l * b; }
}
// Runtime polymorphism:
Shape s = new Circle(5);
System.out.println(s.area()); // 78.54`, lang: 'java' },
    diagram: { title: 'Java OOP Hierarchy', nodes: ['Object (root class)', '↓', 'Shape (abstract)', '↓              ↓', 'Circle     Rectangle', '↓', 'ColoredCircle (multi-level)'], type: 'tree-ascii' },
    dfd: { title: 'Java Program Execution', steps: ['.java source file', '→ javac compiler → .class (bytecode)', '→ JVM Class Loader', '→ Bytecode Verifier', '→ Interpreter / JIT Compiler', '→ Output on OS'] }
  },

  {
    name: 'DBMS', code: 'KCS303', year: 2, semester: 3,
    category: 'Core', icon: '🗄️', credits: 3,
    description: 'Relational model, SQL, normalization, transactions, concurrency control and indexing.',
    units: [
      { no: 1, title: 'Introduction & ER Model', topics: ['Database vs file system', 'DBMS architecture: 3 schema, 2 level', 'ER diagram: entity, attribute, relationship', 'Mapping ER to relational schema'] },
      { no: 2, title: 'Relational Model & SQL', topics: ['Relational algebra operations', 'SQL: DDL, DML, DCL, TCL', 'Joins: inner, outer, natural, cross', 'Aggregate functions, GROUP BY, HAVING'] },
      { no: 3, title: 'Normalization', topics: ['Functional dependencies', '1NF, 2NF, 3NF, BCNF', 'Multivalued dependencies, 4NF', 'Lossless decomposition'] },
      { no: 4, title: 'Transactions & Concurrency', topics: ['ACID properties', 'Transaction states', 'Concurrency: serializability, conflict', 'Lock-based protocols, 2PL, timestamp'] },
      { no: 5, title: 'Indexing & Storage', topics: ['B-tree and B+ tree indexes', 'Hashing: static and dynamic', 'Query optimization', 'Distributed database basics'] },
    ],
    example: { title: 'SQL Join Example', code: `-- Students & Marks tables
SELECT s.name, m.subject, m.marks
FROM Students s
INNER JOIN Marks m ON s.roll_no = m.roll_no
WHERE m.marks > 60
ORDER BY m.marks DESC;

-- Output:
-- Alice | DBMS | 88
-- Bob   | OS   | 75`, lang: 'sql' },
    diagram: { title: 'ER Diagram: Student Enrollment', nodes: ['[Student]──enrolls──[Course]', '  |                    |', 'roll_no,name      course_id,name', '         ↘        ↗', '         [Enrollment]', '         (roll_no, course_id, grade)'], type: 'tree-ascii' },
    dfd: { title: 'DBMS Architecture DFD', steps: ['User / Application', '→ Query Processor (parse & optimize)', '→ Transaction Manager (ACID)', '→ Storage Manager (buffer, file)', '→ Disk Storage (data + index files)', '← Results returned to user'] }
  },

  {
    name: 'Discrete Mathematics', code: 'KAS301', year: 2, semester: 3,
    category: 'Core', icon: '🔢', credits: 4,
    description: 'Logic, sets, relations, functions, graph theory, combinatorics, group theory.',
    units: [
      { no: 1, title: 'Logic & Propositional Calculus', topics: ['Propositions, truth tables', 'Logical connectives: AND, OR, NOT, XOR', 'Predicates and quantifiers', 'Rules of inference, proof methods'] },
      { no: 2, title: 'Set Theory & Relations', topics: ['Set operations, power set, Cartesian product', 'Relations: reflexive, symmetric, transitive', 'Equivalence relations and partitions', 'Partial orders, Hasse diagrams'] },
      { no: 3, title: 'Functions & Lattices', topics: ['Types of functions: injective, surjective, bijective', 'Composition, inverse functions', 'Lattice: poset, bounded lattice', 'Boolean algebra'] },
      { no: 4, title: 'Combinatorics', topics: ['Permutations and combinations', 'Binomial theorem, Pascal triangle', 'Principle of inclusion-exclusion', 'Pigeonhole principle'] },
      { no: 5, title: 'Graph Theory', topics: ['Graph types: simple, directed, weighted', 'Euler and Hamiltonian paths', 'Trees: spanning tree, properties', 'Graph coloring, planar graphs'] },
    ],
    example: { title: 'Proof by Mathematical Induction', code: `Prove: 1+2+3+...+n = n(n+1)/2
Base case (n=1): LHS=1, RHS=1×2/2=1 ✓
Inductive step: Assume true for n=k
  1+2+...+k = k(k+1)/2
Add (k+1) to both sides:
  LHS = k(k+1)/2 + (k+1)
      = (k+1)(k+2)/2  ← true for k+1 ✓`, lang: 'math' },
    diagram: { title: 'Hasse Diagram (divisors of 12)', nodes: ['       12', '      / \\', '     4   6', '    / \\ / \\', '   2   3', '    \\ /', '     1'], type: 'tree-ascii' },
    dfd: { title: 'Graph BFS Traversal', steps: ['Start at vertex s', '→ Mark s as visited, enqueue s', '→ Dequeue u, visit all unvisited neighbors', '→ Enqueue each neighbor', '→ Repeat until queue empty', '→ Output: BFS traversal order'] }
  },

  {
    name: 'Computer Organization & Architecture', code: 'KCS304', year: 2, semester: 4,
    category: 'Core', icon: '🖥️', credits: 3,
    description: 'CPU design, instruction sets, memory hierarchy, I/O organization, pipelining.',
    units: [
      { no: 1, title: 'Basic Structure of Computers', topics: ['Von Neumann architecture', 'CPU: ALU, CU, Registers', 'Instruction cycle: fetch-decode-execute', 'Machine language vs assembly'] },
      { no: 2, title: 'Arithmetic & Logic Unit', topics: ['Integer addition/subtraction', 'Booth multiplication algorithm', 'Floating point: IEEE 754', 'ALU design, adder circuits'] },
      { no: 3, title: 'Memory Organization', topics: ['Cache memory: mapping (direct, associative)', 'Virtual memory: paging, segmentation', 'Memory hierarchy: registers→cache→RAM→disk', 'TLB, page replacement algorithms'] },
      { no: 4, title: 'Instruction Set Architecture', topics: ['RISC vs CISC', 'Addressing modes: immediate, direct, indirect', 'Assembly language programming', 'Stack-based operations'] },
      { no: 5, title: 'Pipelining & I/O', topics: ['Pipeline stages, hazards (data, control, structural)', 'Hazard resolution: stalling, forwarding', 'I/O interfaces: programmed, interrupt, DMA', 'Bus architecture, PCI, USB'] },
    ],
    example: { title: 'Pipeline Stages', code: `5-Stage MIPS Pipeline:
IF   → Instruction Fetch (from cache)
ID   → Instruction Decode + Register Read
EX   → Execute (ALU operation)
MEM  → Memory Access (load/store)
WB   → Write Back to register

Clock cycles for 5 instructions (no hazards):
Without pipeline: 5 × 5 = 25 cycles
With pipeline:    5 + 4  = 9 cycles  🚀`, lang: 'arch' },
    diagram: { title: 'CPU Architecture', nodes: ['CPU: [ALU] [Registers] [Control Unit]', '↕ System Bus', '[Cache L1 / L2]', '↕ Memory Bus', '[RAM (Main Memory)]', '↕ I/O Bus', '[Hard Disk] [GPU] [NIC]'], type: 'stack' },
    dfd: { title: 'Instruction Execution DFD', steps: ['PC → MAR (Memory Address Register)', '→ Memory → MDR (fetch instruction)', '→ IR (Instruction Register) → Decode', '→ ALU performs operation', '→ Result → Registers / Memory', '→ PC incremented / branch taken'] }
  },

  {
    name: 'Digital Electronics', code: 'KEC301', year: 2, semester: 4,
    category: 'Core', icon: '🔧', credits: 3,
    description: 'Number systems, boolean algebra, combinational and sequential circuits, ADC/DAC.',
    units: [
      { no: 1, title: 'Number Systems & Boolean Algebra', topics: ['Binary, octal, hexadecimal conversions', "Boolean laws, De Morgan's theorem", 'Canonical forms: SOP, POS', 'Karnaugh maps (up to 4 variables)'] },
      { no: 2, title: 'Combinational Circuits', topics: ['Half adder, full adder, ripple carry adder', 'Subtractor, multiplexer, demultiplexer', 'Encoder, decoder, priority encoder', 'Comparators, parity generators'] },
      { no: 3, title: 'Sequential Circuits', topics: ['Latches: SR, D latch', 'Flip-flops: SR, JK, D, T', 'Registers: shift registers', 'Counters: ripple, synchronous'] },
      { no: 4, title: 'Memory & PLDs', topics: ['ROM, PROM, EPROM, EEPROM', 'RAM: static vs dynamic', 'PLA, PAL, FPGA overview', 'Look-up tables'] },
      { no: 5, title: 'ADC & DAC', topics: ['DAC: R-2R ladder, weighted resistor', 'ADC: flash, successive approximation', 'Sampling theorem, Nyquist rate', 'Applications in embedded systems'] },
    ],
    example: { title: 'K-Map Simplification (3 vars)', code: `F(A,B,C) = Σ(1,3,5,7)
K-Map:
       BC
  A  | 00 01 11 10
  ─────────────────
  0  |  0  1  1  0
  1  |  0  1  1  0

Groups: Column BC=01 and BC=11
→ F = C  (simplified!)`, lang: 'digital' },
    diagram: { title: 'JK Flip-Flop Truth Table', nodes: ['J=0, K=0 → Q unchanged (hold)', 'J=0, K=1 → Q=0 (reset)', 'J=1, K=0 → Q=1 (set)', 'J=1, K=1 → Q=Q̄ (toggle)', 'Edge-triggered on clock ↑'], type: 'table' },
    dfd: { title: 'Synchronous Counter DFD', steps: ['Clock pulse input', '→ All flip-flops clocked simultaneously', '→ JK inputs determined by current state', '→ Next state computed combinationally', '→ State transitions: 0→1→2→...→15→0', '→ MOD-16 counter output'] }
  },

  /* ══════════════════  YEAR 3  ══════════════════ */
  {
    name: 'Operating Systems', code: 'KCS501', year: 3, semester: 5,
    category: 'Core', icon: '🐧', credits: 3,
    description: 'Process management, CPU scheduling, memory management, file systems, synchronization, deadlocks.',
    units: [
      { no: 1, title: 'Introduction & Process Management', topics: ['OS goals, types, structure', 'System calls, OS services', 'Process: PCB, states, context switching', 'Process creation: fork, exec'] },
      { no: 2, title: 'CPU Scheduling', topics: ['FCFS, SJF, Round Robin, Priority scheduling', 'Preemptive vs non-preemptive', 'Multilevel queue scheduling', 'CPU scheduling evaluation criteria'] },
      { no: 3, title: 'Synchronization & Deadlocks', topics: ['Critical section problem, mutex, semaphore', 'Classical problems: producer-consumer, readers-writers', 'Deadlock: conditions, prevention, avoidance (Banker\'s)', 'Detection and recovery'] },
      { no: 4, title: 'Memory Management', topics: ['Contiguous allocation, fragmentation', 'Paging, segmentation', 'Virtual memory, demand paging', 'Page replacement: FIFO, LRU, Optimal'] },
      { no: 5, title: 'File Systems & I/O', topics: ['File operations, directory structures', 'File system implementation: FAT, inodes', 'Disk scheduling: FCFS, SSTF, SCAN, C-SCAN', 'I/O subsystem, device drivers'] },
    ],
    example: { title: "Banker's Algorithm (Safe State)", code: `Processes: P0,P1,P2  Resources: A,B,C
Max:      [7,5,3] [3,2,2] [9,0,2]
Allocated:[0,1,0] [2,0,0] [3,0,2]
Need = Max - Allocated
Available: A=3, B=3, C=2
Safe sequence: P1→P3→P0→P2  ✓ (no deadlock)`, lang: 'os' },
    diagram: { title: 'Process State Diagram', nodes: ['New → (admitted) → Ready', 'Ready → (scheduler dispatch) → Running', 'Running → (I/O wait) → Waiting', 'Waiting → (I/O complete) → Ready', 'Running → (exit) → Terminated'], type: 'flow' },
    dfd: { title: 'Virtual Memory Page Fault DFD', steps: ['Process accesses page', '→ Check page table (present bit)', '→ Page fault! (not in RAM)', '→ OS: find victim page (LRU policy)', '→ Swap out victim, load needed page', '→ Update page table → resume process'] }
  },

  {
    name: 'Computer Networks', code: 'KCS502', year: 3, semester: 5,
    category: 'CN', icon: '🌐', credits: 3,
    description: 'OSI/TCP-IP model, protocols, routing, transport layer, application layer security.',
    units: [
      { no: 1, title: 'Network Fundamentals & Physical Layer', topics: ['Network types: LAN, MAN, WAN', 'OSI 7-layer model vs TCP/IP', 'Transmission media: guided, unguided', 'Encoding, modulation, multiplexing'] },
      { no: 2, title: 'Data Link Layer', topics: ['Framing, error detection: CRC, checksum', 'ARQ: Stop-and-wait, Go-back-N, Selective Repeat', 'CSMA/CD (Ethernet), CSMA/CA (WiFi)', 'Switches, bridges, VLANs, spanning tree'] },
      { no: 3, title: 'Network Layer', topics: ['IPv4 addressing, subnetting, CIDR', 'Routing algorithms: Dijkstra, Bellman-Ford', 'Routing protocols: OSPF, RIP, BGP', 'NAT, ICMP, IPv6 overview'] },
      { no: 4, title: 'Transport Layer', topics: ['UDP: connectionless, headers', 'TCP: 3-way handshake, 4-way termination', 'TCP flow control: sliding window', 'TCP congestion control: slow start, AIMD'] },
      { no: 5, title: 'Application Layer & Security', topics: ['DNS, HTTP/HTTPS, FTP, SMTP, IMAP', 'TLS/SSL, Public key infrastructure', 'Firewalls, IDS, VPN', 'Socket programming in Python'] },
    ],
    example: { title: 'TCP 3-Way Handshake', code: `Client                    Server
──────────────────────────────────
  ──SYN(seq=100)──────────→
  ←──SYN-ACK(seq=200,ack=101)──
  ──ACK(ack=201)──────────→
  
  ✓ Connection established!
  
Client sends: seq=101, data
Server ACKs:  ack=101+len`, lang: 'network' },
    diagram: { title: 'OSI Model vs TCP/IP', nodes: ['OSI 7: Application | TCP/IP: Application', 'OSI 6: Presentation  | (merged above)', 'OSI 5: Session       | (merged above)', 'OSI 4: Transport     | TCP/IP: Transport', 'OSI 3: Network       | TCP/IP: Internet', 'OSI 2: Data Link     | TCP/IP: Network Access', 'OSI 1: Physical      | TCP/IP: Network Access'], type: 'table' },
    dfd: { title: 'HTTP Request/Response DFD', steps: ['Browser: URL entered → DNS lookup', '→ DNS returns IP address', '→ TCP 3-way handshake with server', '→ HTTP GET request sent', '→ Server processes, sends HTTP 200 + HTML', '→ Browser renders page'] }
  },

  {
    name: 'Web Technology', code: 'KCS503', year: 3, semester: 5,
    category: 'Web Dev', icon: '🕸️', credits: 3,
    description: 'HTML5, CSS3, JavaScript, React, Node.js, MongoDB, REST APIs — full stack web development.',
    units: [
      { no: 1, title: 'HTML5 & CSS3', topics: ['Semantic HTML: article, section, nav, header', 'CSS Flexbox and Grid layouts', 'CSS animations and transitions', 'Responsive design, media queries, Bootstrap'] },
      { no: 2, title: 'JavaScript & DOM', topics: ['ES6+: let/const, arrow functions, promises', 'DOM manipulation: querySelector, events', 'Fetch API, async/await, JSON', 'Local storage, session storage'] },
      { no: 3, title: 'React.js', topics: ['Components, JSX, props, state', 'Hooks: useState, useEffect, useContext', 'React Router: SPA navigation', 'Context API, lifting state up'] },
      { no: 4, title: 'Node.js & Express', topics: ['Node event loop, npm packages', 'Express routing, middleware', 'REST API design: GET, POST, PUT, DELETE', 'JWT authentication, bcrypt password hashing'] },
      { no: 5, title: 'MongoDB & Deployment', topics: ['NoSQL vs SQL, document model', 'Mongoose ODM: schema, model, queries', 'CRUD operations with MongoDB', 'Deployment: Heroku, Vercel, AWS basics'] },
    ],
    example: { title: 'React useState Hook', code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        +1
      </button>
    </div>
  );
}
// Click button → state updates → re-render ✓`, lang: 'jsx' },
    diagram: { title: 'MERN Stack Architecture', nodes: ['React (Frontend - Browser)', '↕ HTTP / REST API', 'Node.js + Express (Backend)', '↕ Mongoose ODM', 'MongoDB (Database)', 'JWT tokens for Auth ↔ all layers'], type: 'stack' },
    dfd: { title: 'REST API Request DFD', steps: ['Client (React) sends GET /api/users', '→ Express Router matches route', '→ Controller function called', '→ Mongoose queries MongoDB', '→ Documents returned as JSON', '→ React renders data in UI'] }
  },

  {
    name: 'Software Engineering', code: 'KCS601', year: 3, semester: 6,
    category: 'Core', icon: '⚙️', credits: 4,
    description: 'SDLC models, requirements engineering, design patterns, testing, project management.',
    units: [
      { no: 1, title: 'Introduction & SDLC', topics: ['Software process models: Waterfall, Spiral, Agile', 'Scrum: sprints, backlog, ceremonies', 'RAD, Incremental, Prototype models', 'Software characteristics and quality'] },
      { no: 2, title: 'Requirements Engineering', topics: ['Functional vs non-functional requirements', 'Use case diagrams, user stories', 'Software Requirement Specification (SRS)', 'Feasibility study'] },
      { no: 3, title: 'Software Design', topics: ['Architectural design patterns: MVC, microservices', 'UML diagrams: class, sequence, activity', 'Data Flow Diagrams (DFDs)', 'Design principles: SOLID, DRY, KISS'] },
      { no: 4, title: 'Software Testing', topics: ['Black-box: equivalence partitioning, boundary value', 'White-box: path testing, statement coverage', 'Unit, integration, system, acceptance testing', 'Test-driven development (TDD)'] },
      { no: 5, title: 'Project Management & Metrics', topics: ['Function point analysis', 'COCOMO cost estimation model', 'Risk management and mitigation', 'Software configuration management (SCM), Git'] },
    ],
    example: { title: 'DFD Level 0 (Context Diagram)', code: `[Student] ──request──→ (Library System) ──response──→ [Student]
                              ↑
                          [Librarian]
                              ↓
                          [Database]

External entities: Student, Librarian
Process: Library Management System
Data store: Book database`, lang: 'dfd' },
    diagram: { title: 'Agile Scrum Process', nodes: ['Product Backlog (all requirements)', '↓ Sprint Planning (pick items)', 'Sprint Backlog (2-4 week tasks)', '↓ Daily Scrum standup', 'Sprint Review + Retrospective', '↓ Potentially Shippable Product Increment'], type: 'flow' },
    dfd: { title: 'Software Testing Levels DFD', steps: ['Unit Testing (individual functions)', '→ Integration Testing (modules combined)', '→ System Testing (full system)', '→ Acceptance Testing (UAT with client)', '→ Regression Testing (after changes)', '→ Production Deployment'] }
  },

  {
    name: 'Theory of Computation', code: 'KCS602', year: 3, semester: 6,
    category: 'Core', icon: '🧮', credits: 4,
    description: 'Automata theory, formal languages, regular expressions, CFG, Turing machines, computability.',
    units: [
      { no: 1, title: 'Finite Automata', topics: ['DFA: states, transitions, acceptance', 'NFA and NFA-to-DFA conversion', 'Moore and Mealy machines', 'Minimization of DFA'] },
      { no: 2, title: 'Regular Languages', topics: ['Regular expressions: *, +, |', 'Kleene theorem', 'Pumping lemma for regular languages', 'Closure properties of regular languages'] },
      { no: 3, title: 'Context-Free Languages', topics: ['Context-free grammar (CFG)', 'Parse trees, ambiguity', 'CNF and GNF conversions', 'Pushdown automata (PDA)'] },
      { no: 4, title: 'Turing Machines', topics: ['Turing machine definition and examples', 'Variants: multi-tape, non-deterministic', 'Church-Turing thesis', 'Recursive and RE languages'] },
      { no: 5, title: 'Computability & Complexity', topics: ['Decidable and undecidable problems', 'Halting problem (undecidable proof)', 'P, NP, NP-complete, NP-hard', 'Reduction: polynomial time reducibility'] },
    ],
    example: { title: 'DFA for strings ending in "ab"', code: `Σ = {a, b},  Language: all strings ending in "ab"
States: q0 (start), q1, q2 (accept)
Transitions:
  q0 --a--> q1,  q0 --b--> q0
  q1 --a--> q1,  q1 --b--> q2
  q2 --a--> q1,  q2 --b--> q0
Accept state: q2
Test "aab": q0→q1→q1→q2 ✓ Accepted!`, lang: 'automata' },
    diagram: { title: 'Chomsky Hierarchy', nodes: ['Type 0: Recursively Enumerable (Turing Machine)', 'Type 1: Context-Sensitive (Linear Bounded Automata)', 'Type 2: Context-Free (Pushdown Automata)', 'Type 3: Regular (Finite Automata)', '(Each type ⊂ the type above it)'], type: 'stack' },
    dfd: { title: 'Turing Machine Operation', steps: ['Read symbol under head', '→ Look up (state, symbol) in transition function', '→ Write new symbol on tape', '→ Move head left or right', '→ Transition to new state', '→ Halt in accept/reject state (or loop)'] }
  },

  {
    name: 'Python Programming', code: 'KCS605', year: 3, semester: 6,
    category: 'Programming', icon: '🐍', credits: 3,
    description: 'Python for data science and scripting — OOP, file handling, NumPy, Pandas, Matplotlib, Flask.',
    units: [
      { no: 1, title: 'Python Basics', topics: ['Python syntax, indentation, data types', 'Lists, tuples, dictionaries, sets', 'Comprehensions, generators', 'Lambda, map, filter, zip'] },
      { no: 2, title: 'OOP in Python', topics: ['Classes, objects, __init__', 'Inheritance, polymorphism', 'Magic methods: __str__, __len__', 'Decorators, property, classmethods'] },
      { no: 3, title: 'File Handling & Modules', topics: ['File read/write: open, with statement', 'JSON, CSV, pickle modules', 'Regular expressions (re module)', 'OS, sys, datetime modules'] },
      { no: 4, title: 'NumPy & Pandas', topics: ['NumPy arrays, operations, broadcasting', 'Pandas: DataFrame, Series', 'Data cleaning, merge, groupby', 'Reading CSV, Excel, JSON with Pandas'] },
      { no: 5, title: 'Visualization & Flask', topics: ['Matplotlib: line, bar, scatter, pie charts', 'Seaborn heatmaps, pair plots', 'Flask: routes, templates, Jinja2', 'Flask REST API, SQLite with Flask'] },
    ],
    example: { title: 'Pandas Data Analysis', code: `import pandas as pd
df = pd.read_csv('marks.csv')
print(df.head())
# name  DBMS  OS  CN
# Alice  88   75  90

# Group by subject
print(df[['DBMS','OS','CN']].mean())
# DBMS  78.3
# OS    71.5

top = df[df['DBMS'] > 80]
print(f"{len(top)} students scored > 80 in DBMS")`, lang: 'python' },
    diagram: { title: 'Python Ecosystem for Data Science', nodes: ['Data Input: CSV, JSON, SQL, API', '↓ Pandas (clean, transform, analyze)', '↓ NumPy (array operations, math)', '↓ Scikit-learn (ML algorithms)', '↓ Matplotlib / Seaborn (visualize)', '↓ Report / Dashboard / Model'], type: 'stack' },
    dfd: { title: 'Flask Web App Request DFD', steps: ['HTTP Request (GET/POST)', '→ Flask app.route() decorator', '→ View function runs Python logic', '→ Query database (SQLite/Postgres)', '→ Render Jinja2 template with data', '→ HTTP Response (HTML/JSON) to browser'] }
  },

  /* ══════════════════  YEAR 4  ══════════════════ */
  {
    name: 'Artificial Intelligence', code: 'BCS701', year: 4, semester: 7,
    category: 'AI/ML', icon: '🤖', credits: 3,
    description: 'AKTU 2025-26: Intelligent agents, search strategies, knowledge representation, uncertainty, NLP, Explainable AI.',
    units: [
      { no: 1, title: 'Intro to AI & Intelligent Agents', topics: ['Definition, history, applications of AI', 'Types of agents: simple reflex, goal-based, utility-based', 'PEAS framework', 'Problem-solving agents: state space, operators'] },
      { no: 2, title: 'Problem Solving & Search', topics: ['Uninformed: BFS, DFS, Iterative Deepening', 'Informed: Greedy Best-First, A* Search, heuristics', 'Hill Climbing, Simulated Annealing', 'Game Playing: Min-Max, Alpha-Beta Pruning'] },
      { no: 3, title: 'Knowledge Representation & Reasoning', topics: ['Propositional and First-Order Logic', 'Forward and Backward Chaining', 'Resolution theorem proving', 'Prolog for logic programming', 'Ontological Engineering'] },
      { no: 4, title: 'Uncertainty & Learning', topics: ['Bayesian Networks, Bayes Rule', 'Fuzzy Logic and imprecision handling', 'Neural Networks basics: Perceptron, Backpropagation', 'Supervised vs Unsupervised learning intro'] },
      { no: 5, title: 'Applications & Explainable AI', topics: ['NLP: tokenization, parsing, machine translation', 'Robotics: perception and motion planning', 'Multi-agent systems: negotiation, trust', 'XAI: LIME, SHAP, interpretability methods'] },
    ],
    example: { title: 'A* Search Algorithm', code: `# 8-Puzzle solved with A* (Manhattan distance heuristic)
def astar(start, goal):
  open_set = PriorityQueue()
  open_set.put((0, start))
  g = {start: 0}
  while not open_set.empty():
    _, current = open_set.get()
    if current == goal: return reconstruct_path(came_from, current)
    for neighbor in get_neighbors(current):
      new_g = g[current] + 1
      if new_g < g.get(neighbor, float('inf')):
        g[neighbor] = new_g
        f = new_g + manhattan(neighbor, goal)
        open_set.put((f, neighbor))`, lang: 'python' },
    diagram: { title: 'Types of AI Agents', nodes: ['Simple Reflex Agent: condition → action', 'Model-Based Agent: + internal state/world model', 'Goal-Based Agent: + goals to achieve', 'Utility-Based Agent: + utility function (maximize)', 'Learning Agent: + learning + performance element'], type: 'stack' },
    dfd: { title: 'AI Problem Solving DFD', steps: ['Define Problem (initial state, goal state)', '→ State Space Representation', '→ Apply Search Strategy (BFS/A*/Min-Max)', '→ Generate solution path', '→ Execute actions in environment', '→ Evaluate result / Feedback loop'] }
  },

  {
    name: 'Internet of Things', code: 'BCS070', year: 4, semester: 7,
    category: 'Core', icon: '📡', credits: 3,
    description: 'AKTU Elective: IoT architecture, sensors, Arduino/Raspberry Pi, M2M communication, smart applications.',
    units: [
      { no: 1, title: 'IoT Concepts & Architecture', topics: ['IoT vision, definition, framework', 'IoT vs M2M communication', 'Architectural layers: perception, network, application', 'Design principles for connected devices'] },
      { no: 2, title: 'Hardware for IoT', topics: ['Sensors: temperature, humidity, PIR, ultrasonic', 'Actuators: motors, relays, servos', 'RFID technology and applications', 'Platforms: Arduino, Raspberry Pi, BeagleBone, NodeMCU'] },
      { no: 3, title: 'Network & Communication', topics: ['WiFi, Bluetooth, ZigBee, LoRa, NB-IoT', 'MAC protocols for WSN', 'Routing in sensor networks', 'Data aggregation techniques'] },
      { no: 4, title: 'Arduino Programming', topics: ['Arduino IDE, sketch structure (setup/loop)', 'Digital/analog I/O, PWM', 'Using libraries: DHT, Servo, LCD', 'Serial communication, prototyping on emulator'] },
      { no: 5, title: 'Challenges & Applications', topics: ['Security, privacy challenges in IoT', 'Smart metering, e-health, home automation', 'Smart city: traffic, street lights', 'Industrial IoT (IIoT) intro'] },
    ],
    example: { title: 'Arduino Temperature Monitor', code: `#include <DHT.h>
#define DHTPIN 2
#define DHTTYPE DHT11
DHT dht(DHTPIN, DHTTYPE);

void setup() {
  Serial.begin(9600);
  dht.begin();
}
void loop() {
  float temp = dht.readTemperature();
  float hum  = dht.readHumidity();
  Serial.print("Temp: "); Serial.print(temp);
  Serial.print("°C  Humidity: "); Serial.println(hum);
  delay(2000);
}`, lang: 'cpp' },
    diagram: { title: 'IoT System Architecture', nodes: ['Physical Layer: Sensors + Actuators', '↕ Perception Layer: Data collection', 'Network Layer: WiFi / Zigbee / LoRa', '↕ Transport Layer: MQTT / HTTP / CoAP', 'Application Layer: Dashboard / Analytics', 'Cloud Platform: AWS IoT / Google IoT Core'], type: 'stack' },
    dfd: { title: 'Smart Home IoT DFD', steps: ['Sensors (temp, motion, light) collect data', '→ Microcontroller (Arduino/ESP32) processes', '→ Data sent via MQTT to broker', '→ Cloud platform (AWS IoT) stores data', '→ Mobile app receives notification/control', '→ Actuators (AC, lights) respond'] }
  },

  {
    name: 'Cloud Computing', code: 'BCS071', year: 4, semester: 7,
    category: 'Cloud', icon: '☁️', credits: 3,
    description: 'AKTU Elective: Cloud architecture, virtualization, IaaS/PaaS/SaaS, security, Hadoop, MapReduce.',
    units: [
      { no: 1, title: 'Introduction to Cloud Computing', topics: ['Cloud definition, evolution, characteristics', 'Elasticity, on-demand provisioning', 'Comparison with traditional computing', 'NIST cloud definition & essential characteristics'] },
      { no: 2, title: 'Virtualization & SOA', topics: ['Hypervisors: Type 1 (bare-metal) and Type 2 (hosted)', 'VM vs Containers (Docker)', 'REST and SOAP web services', 'Publish-subscribe model, message queues'] },
      { no: 3, title: 'Cloud Architecture & Services', topics: ['IaaS: EC2, Azure VM, GCP Compute Engine', 'PaaS: Heroku, Google App Engine, AWS Elastic Beanstalk', 'SaaS: Gmail, Salesforce, Office 365', 'Cloud storage: S3, GCS, Azure Blob'] },
      { no: 4, title: 'Resource Management & Security', topics: ['Auto-scaling, load balancing', 'IAM: users, roles, policies', 'Encryption at rest and in transit', 'Cloud security challenges: multi-tenancy, data privacy'] },
      { no: 5, title: 'Cloud Technologies: Hadoop & OpenStack', topics: ['Hadoop HDFS: distributed file system', 'MapReduce: word count example', 'OpenStack components overview', 'Serverless: AWS Lambda, Cloud Functions'] },
    ],
    example: { title: 'MapReduce – Word Count', code: `# Map phase: emit (word, 1) for each word
def map_func(document):
  for word in document.split():
    emit(word, 1)

# Reduce phase: sum counts for each word
def reduce_func(word, counts):
  emit(word, sum(counts))

# Example: "hello world hello"
# Map: [("hello",1), ("world",1), ("hello",1)]
# Shuffle: {"hello":[1,1], "world":[1]}
# Reduce: {"hello":2, "world":1}`, lang: 'python' },
    diagram: { title: 'Cloud Service Models', nodes: ['SaaS (you use): Gmail, Dropbox, Zoom', 'PaaS (you build): Heroku, App Engine', 'IaaS (you manage VM): AWS EC2, Azure VM', '─────────── Responsibility Boundary ───────────', 'You manage↑ | Provider manages ↓', 'Physical Data Center (always provider)'], type: 'stack' },
    dfd: { title: 'Cloud Auto-Scaling DFD', steps: ['Monitor CPU/memory metrics', '→ CloudWatch alarm triggered (> 80% CPU)', '→ Auto-scaling group notified', '→ New EC2 instance launched from AMI', '→ Load balancer adds new instance', '→ Traffic distributed, metrics normalize'] }
  },

  {
    name: 'Cryptography & Network Security', code: 'BCS072', year: 4, semester: 7,
    category: 'CN', icon: '🔐', credits: 3,
    description: 'AKTU Elective: Symmetric/asymmetric encryption, DES, AES, RSA, hash functions, SSL/TLS, firewalls.',
    units: [
      { no: 1, title: 'Classical & Modern Encryption', topics: ['Substitution ciphers: Caesar, Vigenere', 'Transposition ciphers', 'DES: Feistel structure, 16 rounds, S-boxes', 'Triple DES, block cipher modes: ECB, CBC, CTR'] },
      { no: 2, title: 'AES & Public Key Crypto', topics: ['AES: 128/192/256 bit keys, rounds', 'RSA algorithm: key generation, encrypt, decrypt', 'Diffie-Hellman key exchange', 'Elliptic Curve Cryptography (ECC) basics'] },
      { no: 3, title: 'Hash Functions & Digital Signatures', topics: ['SHA-1, SHA-256, MD5 (weaknesses)', 'Birthday attack, collision resistance', 'Digital signatures: ElGamal, DSS', 'Certificate verification process'] },
      { no: 4, title: 'Key Management & Authentication', topics: ['Symmetric key distribution', 'X.509 certificates, PKI', 'Kerberos authentication protocol', 'PGP for email, S/MIME'] },
      { no: 5, title: 'Network Security: IPSec, SSL, Firewalls', topics: ['IPSec: AH and ESP modes', 'SSL/TLS handshake protocol', 'HTTPS, certificate chain of trust', 'Firewalls: packet filter, stateful, application layer'] },
    ],
    example: { title: 'RSA Key Generation', code: `1. Choose primes p=61, q=53
2. n = p×q = 3233
3. φ(n) = (p-1)(q-1) = 3120
4. Choose e=17 (gcd(e,φ)=1)
5. Compute d: 17d ≡ 1 (mod 3120) → d=2753
Public key:  (e=17,  n=3233)
Private key: (d=2753, n=3233)
Encrypt M=65: C = 65^17 mod 3233 = 2790
Decrypt C:    M = 2790^2753 mod 3233 = 65 ✓`, lang: 'crypto' },
    diagram: { title: 'SSL/TLS Handshake', nodes: ['Client Hello (supported ciphers, random)', '→ Server Hello + Certificate', '→ Client verifies cert, sends pre-master secret', '→ Both derive session keys from secrets', '→ Client Finished (encrypted)', '→ Server Finished → Secure channel ✓'], type: 'flow' },
    dfd: { title: 'Digital Signature DFD', steps: ['Sender hashes message with SHA-256', '→ Hash encrypted with sender\'s PRIVATE key = Signature', '→ Message + Signature sent to receiver', '→ Receiver decrypts signature with sender\'s PUBLIC key', '→ Receiver hashes received message', '→ Compare hashes: match = authentic & intact ✓'] }
  },

  {
    name: 'Design & Dev of Applications', code: 'BCS073', year: 4, semester: 8,
    category: 'Web Dev', icon: '📱', credits: 3,
    description: 'AKTU Elective: Mobile app development — Android (Java/Kotlin), iOS (Swift), UI design, GPS, SQLite.',
    units: [
      { no: 1, title: 'Mobile App Introduction', topics: ['Mobile market landscape, business drivers', 'Types of mobile apps: native, hybrid, PWA', 'Publishing: Google Play, App Store', 'Requirements gathering for mobile apps'] },
      { no: 2, title: 'Basic Design Principles', topics: ['UI/UX for mobile: touch, gestures, haptics', 'Responsive layouts for different screen sizes', 'Performance: battery, memory, network constraints', 'Accessibility in mobile apps'] },
      { no: 3, title: 'Advanced Design Patterns', topics: ['GPS and location-aware apps', 'Multimedia: camera, audio, video APIs', 'Cloud integration: Firebase, REST APIs', 'Design patterns: MVC, MVP, MVVM'] },
      { no: 4, title: 'Android Development', topics: ['Android architecture: Activities, Fragments, Intents', 'Layouts: ConstraintLayout, RecyclerView', 'SQLite database, Room persistence library', 'Retrofit for REST API calls, Google Maps SDK'] },
      { no: 5, title: 'iOS Development (Swift)', topics: ['Swift: variables, optionals, closures, protocols', 'UIKit: ViewControllers, TableView, Storyboard', 'Core Data for local persistence', 'Core Location, MapKit, social media integration'] },
    ],
    example: { title: 'Android RecyclerView Adapter', code: `class StudentAdapter(val list: List<Student>) :
  RecyclerView.Adapter<StudentAdapter.ViewHolder>() {

  inner class ViewHolder(view: View) : RecyclerView.ViewHolder(view) {
    val name: TextView = view.findViewById(R.id.tvName)
    val marks: TextView = view.findViewById(R.id.tvMarks)
  }
  override fun onBindViewHolder(holder: ViewHolder, pos: Int) {
    holder.name.text  = list[pos].name
    holder.marks.text = list[pos].marks.toString()
  }
  override fun getItemCount() = list.size
}`, lang: 'kotlin' },
    diagram: { title: 'Android App Architecture (MVVM)', nodes: ['View (Activity / Fragment) ← observes →', 'ViewModel (LiveData, business logic) ←→', 'Repository (single source of truth) ←→', 'Local: Room (SQLite) + Remote: Retrofit (API)', '↓ data flows up via LiveData/StateFlow'], type: 'flow' },
    dfd: { title: 'Mobile App Request DFD', steps: ['User action (tap, gesture)', '→ Activity / ViewController responds', '→ ViewModel processes (business logic)', '→ Repository checks cache (Room DB)', '→ If stale: Retrofit API call → server', '→ LiveData updated → UI re-renders'] }
  },

  {
    name: 'Project Work (BCS753 / BCS851)', code: 'BCS851', year: 4, semester: 8,
    category: 'Core', icon: '🚀', credits: 10,
    description: 'Final year major project. Apply technical knowledge to build a complete real-world software solution.',
    units: [
      { no: 1, title: 'Problem Analysis & Proposal', topics: ['Identify real-world problem', 'Feasibility study (technical, financial, operational)', 'Project proposal document', 'Literature survey and gap analysis'] },
      { no: 2, title: 'Requirements & Design', topics: ['SRS document preparation', 'Use case diagrams, DFDs', 'Database schema design', 'UI/UX wireframes and prototypes'] },
      { no: 3, title: 'Implementation', topics: ['Coding phase following design', 'Version control with Git/GitHub', 'Agile sprints (2-week iterations)', 'Code review and documentation'] },
      { no: 4, title: 'Testing & Quality', topics: ['Unit testing (JUnit, pytest)', 'Integration and system testing', 'Performance testing, load testing', 'Bug tracking, fixing, re-testing'] },
      { no: 5, title: 'Deployment & Report', topics: ['Cloud deployment (AWS/Heroku/Vercel)', 'User manual and technical documentation', 'Final project report (IEEE format)', 'Viva presentation and demo'] },
    ],
    example: { title: 'Sample Project Ideas', code: `🌐 Web Dev: E-learning platform (MERN stack)
🤖 AI/ML: Disease prediction using ML + React dashboard
📱 Android: Attendance app with face recognition
☁️ Cloud: Serverless file-sharing with AWS Lambda + S3
🔗 Blockchain: Decentralized voting system (Solidity)
📊 Data Science: Stock market analysis + prediction
🔐 Security: Password manager with AES encryption
🌿 IoT: Smart greenhouse monitoring (Arduino + Firebase)`, lang: 'ideas' },
    diagram: { title: 'Project Development Lifecycle', nodes: ['Ideation → Proposal', 'Requirements → SRS Document', 'Design → UML + DFDs', 'Implementation → Coding (sprints)', 'Testing → Unit + Integration + UAT', 'Deployment → Cloud + Final Report'], type: 'flow' },
    dfd: { title: 'Project Submission DFD', steps: ['Complete implementation + testing', '→ Internal guide review & approval', '→ Upload to GitHub with README', '→ Deploy to cloud (public URL)', '→ Prepare PPT + project report', '→ External viva & demonstration'] }
  },
];

/* ─────────────────────────────────────────────────────────────
   DIAGRAM COMPONENTS
───────────────────────────────────────────────────────────── */
const DiagramBlock = ({ diagram }) => (
  <div className="mt-4">
    <h5 className="text-xs font-semibold mb-2 flex items-center gap-1" style={{ color: '#06b6d4' }}>
      <span>📊</span> {diagram.title}
    </h5>
    <div className="code-block text-xs leading-relaxed whitespace-pre-wrap" style={{ color: '#a5f3fc' }}>
      {diagram.nodes.join('\n')}
    </div>
  </div>
);

const DFDBlock = ({ dfd }) => (
  <div className="mt-4">
    <h5 className="text-xs font-semibold mb-3 flex items-center gap-1" style={{ color: '#f59e0b' }}>
      <span>🔄</span> {dfd.title}
    </h5>
    <div className="flex flex-col gap-1">
      {dfd.steps.map((step, i) => (
        <div key={i} className="flex items-start gap-2">
          <div className="w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
            style={{ background: 'rgba(245,158,11,0.3)', color: '#fbbf24' }}>
            {i + 1}
          </div>
          <span className="text-xs leading-relaxed" style={{ color: '#e2e8f0' }}>{step}</span>
        </div>
      ))}
    </div>
  </div>
);

/* ─────────────────────────────────────────────────────────────
   SUBJECT MODAL
───────────────────────────────────────────────────────────── */
const SubjectModal = ({ subject, onClose }) => {
  const [activeUnit, setActiveUnit] = useState(0);
  const [activeTab,  setActiveTab]  = useState('syllabus');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(8px)' }}
      onClick={onClose}>
      <div className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl"
        style={{ background: '#0f0f2a', border: '1px solid rgba(79,70,229,0.4)' }}
        onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="p-6 border-b" style={{ borderColor: 'rgba(255,255,255,0.08)', background: 'linear-gradient(135deg, rgba(79,70,229,0.2), rgba(6,182,212,0.1))' }}>
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl">{subject.icon}</span>
                <div>
                  <h2 className="font-heading font-black text-xl text-white">{subject.name}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs px-2 py-0.5 rounded text-indigo-300" style={{ background: 'rgba(79,70,229,0.3)' }}>{subject.code}</span>
                    <span className="text-xs text-slate-400">Year {subject.year} · Sem {subject.semester}</span>
                    <span className="text-xs text-slate-400">{subject.credits} Credits</span>
                  </div>
                </div>
              </div>
              <p className="text-slate-400 text-sm">{subject.description}</p>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-white text-2xl ml-4 leading-none flex-shrink-0">×</button>
          </div>
          {/* Tabs */}
          <div className="flex gap-2 mt-4">
            {['syllabus', 'example', 'diagram & dfd'].map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-all ${activeTab === tab ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={activeTab === tab ? { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' } : { background: 'rgba(255,255,255,0.06)' }}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="p-6">
          {/* SYLLABUS TAB */}
          {activeTab === 'syllabus' && (
            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {subject.units.map((u, i) => (
                  <button key={i} onClick={() => setActiveUnit(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${activeUnit === i ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                    style={activeUnit === i ? { background: 'linear-gradient(135deg, #06b6d4, #0284c7)' } : { background: 'rgba(255,255,255,0.06)' }}>
                    Unit {u.no}
                  </button>
                ))}
              </div>
              <div className="glass-card p-5">
                <h4 className="font-heading font-bold text-white mb-4 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white"
                    style={{ background: 'linear-gradient(135deg, #06b6d4, #0284c7)' }}>
                    {subject.units[activeUnit].no}
                  </span>
                  {subject.units[activeUnit].title}
                </h4>
                <ul className="space-y-2.5">
                  {subject.units[activeUnit].topics.map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ background: '#06b6d4' }}></span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              {/* All units overview */}
              <div className="mt-4 grid grid-cols-1 gap-2">
                {subject.units.map((u, i) => i !== activeUnit && (
                  <button key={i} onClick={() => setActiveUnit(i)}
                    className="flex items-center gap-3 p-3 rounded-xl text-left transition-all hover:bg-white/5 border"
                    style={{ borderColor: 'rgba(255,255,255,0.06)' }}>
                    <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                      style={{ background: 'rgba(79,70,229,0.4)' }}>{u.no}</span>
                    <span className="text-slate-400 text-xs">{u.title}</span>
                    <span className="text-slate-600 text-xs ml-auto">{u.topics.length} topics →</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* EXAMPLE TAB */}
          {activeTab === 'example' && (
            <div>
              <h4 className="font-heading font-bold text-white mb-3 flex items-center gap-2">
                <span>💡</span> {subject.example.title}
              </h4>
              <div className="code-block text-xs leading-relaxed overflow-x-auto">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs px-2 py-0.5 rounded" style={{ background: 'rgba(79,70,229,0.3)', color: '#818cf8' }}>
                    {subject.example.lang}
                  </span>
                </div>
                <pre style={{ color: '#e2e8f0', margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>
                  {subject.example.code}
                </pre>
              </div>
            </div>
          )}

          {/* DIAGRAM & DFD TAB */}
          {activeTab === 'diagram & dfd' && (
            <div className="space-y-2">
              <DiagramBlock diagram={subject.diagram} />
              <div className="border-t mt-6 pt-6" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                <DFDBlock dfd={subject.dfd} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────────────────────────
   CATEGORY COLORS
───────────────────────────────────────────────────────────── */
const catColor = {
  'Core':        'linear-gradient(135deg, #667eea, #764ba2)',
  'Programming': 'linear-gradient(135deg, #4facfe, #00f2fe)',
  'Web Dev':     'linear-gradient(135deg, #f093fb, #f5576c)',
  'AI/ML':       'linear-gradient(135deg, #43e97b, #38f9d7)',
  'CN':          'linear-gradient(135deg, #fa709a, #fee140)',
  'Data Science':'linear-gradient(135deg, #a18cd1, #fbc2eb)',
  'Cloud':       'linear-gradient(135deg, #fd7043, #ff8a65)',
};

/* ─────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────── */
const Subjects = () => {
  const [year,     setYear]     = useState('All');
  const [category, setCategory] = useState('All');
  const [search,   setSearch]   = useState('');
  const [selected, setSelected] = useState(null);

  const years      = ['All', 1, 2, 3, 4];
  const categories = ['All', 'Core', 'Programming', 'Web Dev', 'AI/ML', 'CN', 'Data Science', 'Cloud'];

  const filtered = subjectData.filter(s => {
    const matchY = year === 'All' || s.year === year;
    const matchC = category === 'All' || s.category === category;
    const matchS = s.name.toLowerCase().includes(search.toLowerCase()) || s.code.toLowerCase().includes(search.toLowerCase());
    return matchY && matchC && matchS;
  });

  const grouped = [1, 2, 3, 4].reduce((acc, y) => {
    acc[y] = filtered.filter(s => s.year === y);
    return acc;
  }, {});

  return (
    <div style={{ background: '#0a0a1a' }}>
      {/* Header */}
      <div className="pt-24 pb-12 px-4 text-center"
        style={{ background: 'linear-gradient(135deg, #0f0c29 0%, #302b63 100%)' }}>
        <h1 className="font-heading font-black text-4xl md:text-5xl gradient-text mb-3">AKTU B.Tech Subjects</h1>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          All subjects Year 1–4 with detailed syllabus, code examples, architecture diagrams & DFDs.
        </p>
        <div className="mt-4 flex justify-center gap-4 text-sm text-slate-500">
          <span>📚 {subjectData.length} Subjects</span>
          <span>·</span>
          <span>🎓 CS / CSE / CE (AKTU 2025-26)</span>
          <span>·</span>
          <span>💡 Click any card for full details</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-10">
        {/* Filters */}
        <div className="glass-card p-5 mb-10 flex flex-col gap-4">
          <input value={search} onChange={e => setSearch(e.target.value)}
            placeholder="🔍  Search subjects, codes, topics..."
            className="form-input w-full" />
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-slate-500 text-xs mr-1">YEAR:</span>
            {years.map(y => (
              <button key={y} onClick={() => setYear(y)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${year === y ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={year === y ? { background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {y === 'All' ? 'All' : `Y${y}`}
              </button>
            ))}
            <span className="text-slate-500 text-xs mr-1 ml-3">CATEGORY:</span>
            {categories.map(c => (
              <button key={c} onClick={() => setCategory(c)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${category === c ? 'text-white' : 'text-slate-400 hover:text-white'}`}
                style={category === c ? { background: catColor[c] || 'linear-gradient(135deg,#4f46e5,#7c3aed)' } : { background: 'rgba(255,255,255,0.05)' }}>
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {[1, 2, 3, 4].map(y => grouped[y].length > 0 && (
          <div key={y} className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-lg"
                style={{ background: 'linear-gradient(135deg, #4f46e5, #7c3aed)' }}>{y}</div>
              <h2 className="font-heading font-bold text-2xl text-white">Year {y}</h2>
              <span className="text-slate-500 text-sm">— {grouped[y].length} subjects</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {grouped[y].map((s, i) => (
                <div key={s.code}
                  className="glass-card p-5 cursor-pointer animate-slide-up"
                  style={{ animationDelay: `${i * 0.04}s` }}
                  onClick={() => setSelected(s)}>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                      style={{ background: catColor[s.category] || 'rgba(79,70,229,0.4)' }}>
                      {s.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-slate-500">{s.code}</div>
                      <div className="text-xs text-indigo-400">Sem {s.semester}</div>
                    </div>
                  </div>
                  <h3 className="font-heading font-semibold text-white text-sm mb-2 leading-snug">{s.name}</h3>
                  <p className="text-slate-500 text-xs line-clamp-2 mb-3">{s.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs px-2 py-0.5 rounded text-slate-300"
                      style={{ background: 'rgba(255,255,255,0.07)' }}>{s.category}</span>
                    <span className="text-xs text-slate-500">{s.credits} Cr · {s.units.length} Units</span>
                  </div>
                  <div className="mt-3 flex gap-1.5">
                    {['syllabus','example','diagram'].map(tag => (
                      <span key={tag} className="text-xs px-1.5 py-0.5 rounded text-indigo-400"
                        style={{ background: 'rgba(79,70,229,0.15)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {filtered.length === 0 && (
          <div className="text-center py-24">
            <div className="text-7xl mb-4">🔍</div>
            <p className="text-slate-400 text-xl">No subjects found. Try a different filter.</p>
          </div>
        )}
      </div>

      {/* Modal */}
      {selected && <SubjectModal subject={selected} onClose={() => setSelected(null)} />}

      <Footer />
    </div>
  );
};

export default Subjects;
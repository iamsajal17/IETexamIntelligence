import { AcademicYear, BranchCode, BranchInfo, Subject } from '../types';

export const BRANCHES: BranchInfo[] = [
  {
    code: 'CSE',
    name: 'Computer Engineering',
    shortName: 'Comp Sci & Engg',
    description: 'Algorithms, Systems, Architecture & AI'
  },
  {
    code: 'IT',
    name: 'Information Technology',
    shortName: 'Info Tech',
    description: 'Data Management, Networks & Web Technologies'
  },
  {
    code: 'ETC',
    name: 'Electronics & Telecommunication',
    shortName: 'ETC / ENTC',
    description: 'Signal Processing, RF & Telecommunications'
  },
  {
    code: 'EI',
    name: 'Electronics & Instrumentation',
    shortName: 'Electronics & Inst.',
    description: 'Sensors, Transducers & Control Systems'
  },
  {
    code: 'MECH',
    name: 'Mechanical Engineering',
    shortName: 'Mechanical Engg',
    description: 'Thermal, Manufacturing & Machine Design'
  },
  {
    code: 'CIVIL',
    name: 'Civil Engineering',
    shortName: 'Civil Engg',
    description: 'Structural, Geotechnical & Hydraulics'
  }
];

export const ALL_BRANCH_CODES: BranchCode[] = ['CSE', 'IT', 'ETC', 'EI', 'MECH', 'CIVIL'];

export const SUBJECTS: Subject[] = [
  // ================= 1st Year (Common Scheme NEP 2024) =================
  {
    code: '1RABS1',
    name: 'Applied Mathematics-I',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 1,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Differential Calculus',
        topics: [
          { id: '1rabs1-u1-1', name: 'Successive Differentiation & Leibnitz Theorem' },
          { id: '1rabs1-u1-2', name: "Taylor's and Maclaurin's Expansion of Functions" },
          { id: '1rabs1-u1-3', name: 'Asymptotes (Cartesian & Polar)' },
          { id: '1rabs1-u1-4', name: 'Curvature, Radius of Curvature & Center of Curvature' },
          { id: '1rabs1-u1-5', name: 'Envelopes, Evolutes and Involutes' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Advanced Differential Calculus',
        topics: [
          { id: '1rabs1-u2-1', name: 'Functions of Several Variables & Partial Differentiation' },
          { id: '1rabs1-u2-2', name: 'Approximations and Errors' },
          { id: '1rabs1-u2-3', name: 'Jacobians & Functional Dependence' },
          { id: '1rabs1-u2-4', name: "Taylor's Series for Two Variables" },
          { id: '1rabs1-u2-5', name: 'Maxima and Minima of Functions of Two Variables' },
          { id: '1rabs1-u2-6', name: "Lagrange's Method of Undetermined Multipliers" }
        ]
      },
      {
        unitNumber: 3,
        title: 'Integral Calculus',
        topics: [
          { id: '1rabs1-u3-1', name: 'Beta and Gamma Functions with Properties' },
          { id: '1rabs1-u3-2', name: 'Tracing of Curves (Cartesian, Polar and Parametric)' },
          { id: '1rabs1-u3-3', name: 'Rectification (Length of Curves)' },
          { id: '1rabs1-u3-4', name: 'Quadrature (Area Calculation)' },
          { id: '1rabs1-u3-5', name: 'Volume and Surface Area of Revolution' },
          { id: '1rabs1-u3-6', name: "Theorems of Pappus and Guldin" }
        ]
      },
      {
        unitNumber: 4,
        title: 'Advanced Integral Calculus',
        topics: [
          { id: '1rabs1-u4-1', name: 'Double Integrals and Area Evaluation' },
          { id: '1rabs1-u4-2', name: 'Change of Order of Integration' },
          { id: '1rabs1-u4-3', name: 'Triple Integrals and Volume Evaluation' },
          { id: '1rabs1-u4-4', name: 'Evaluation of Centre of Gravity & Moment of Inertia' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Vector Calculus',
        topics: [
          { id: '1rabs1-u5-1', name: 'Vector Differentiation, Gradient of a Scalar Field' },
          { id: '1rabs1-u5-2', name: 'Divergence and Curl of Vector Fields' },
          { id: '1rabs1-u5-3', name: 'Line, Surface and Volume Integrals' },
          { id: '1rabs1-u5-4', name: "Gauss's Divergence Theorem & Applications" },
          { id: '1rabs1-u5-5', name: "Green's Theorem in a Plane & Applications" },
          { id: '1rabs1-u5-6', name: "Stokes's Theorem & Applications" }
        ]
      }
    ],
    recommendedBooks: ['B.S. Grewal - Higher Engineering Mathematics', 'Erwin Kreyszig - Advanced Engineering Mathematics']
  },
  {
    code: '1RABS2',
    name: 'Applied Chemistry & Environment Science',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 1,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Engineering Materials and Testing',
        topics: [
          { id: '1rabs2-u1-1', name: 'Classification and Requirements of Engineering Materials' },
          { id: '1rabs2-u1-2', name: 'Polymers: Classification, Thermoplastics & Thermosetting' },
          { id: '1rabs2-u1-3', name: 'Portland Cement: Composition, Setting & Hardening' },
          { id: '1rabs2-u1-4', name: 'Glass and Refractory Materials' },
          { id: '1rabs2-u1-5', name: 'Introduction to Nano-materials and Carbon Nanotubes' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Water and its Applications',
        topics: [
          { id: '1rabs2-u2-1', name: 'Hardness of Water: Expression, Units & EDTA Titration' },
          { id: '1rabs2-u2-2', name: 'Boiler Troubles: Scales, Sludge, Priming, Foaming & Caustic Embrittlement' },
          { id: '1rabs2-u2-3', name: 'Water Softening: Zeolite and Ion-Exchange Demineralization' },
          { id: '1rabs2-u2-4', name: 'Water Quality Parameters & Alkalinity Numericals' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Fuels and Lubricants',
        topics: [
          { id: '1rabs2-u3-1', name: 'Calorific Values (HCV & LCV) and Bomb Calorimeter' },
          { id: '1rabs2-u3-2', name: 'Proximate and Ultimate Analysis of Coal with Numericals' },
          { id: '1rabs2-u3-3', name: 'Principles and Mechanisms of Lubrication (Fluid Film, Boundary, Extreme)' },
          { id: '1rabs2-u3-4', name: 'Lubricant Properties: Viscosity Index, Flash Point, Aniline Point' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Instrumental Techniques in Material Characterization',
        topics: [
          { id: '1rabs2-u4-1', name: "Beer-Lambert's Law & Colorimetry Analysis" },
          { id: '1rabs2-u4-2', name: 'UV-Visible and Infrared (IR) Spectroscopy Principles' },
          { id: '1rabs2-u4-3', name: 'NMR and Mass Spectrometry Fundamentals' },
          { id: '1rabs2-u4-4', name: 'Chromatographic Techniques (GC, HPLC) & Numericals' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Environmental Science',
        topics: [
          { id: '1rabs2-u5-1', name: 'Ecosystems, Natural Resources & Green Chemistry' },
          { id: '1rabs2-u5-2', name: 'Air, Water and Noise Pollution Control Measures' },
          { id: '1rabs2-u5-3', name: 'Global Warming, Ozone Depletion & Acid Rain' },
          { id: '1rabs2-u5-4', name: 'Eutrophication & Rainwater Harvesting' }
        ]
      }
    ]
  },
  {
    code: '1RMES3',
    name: 'General Mechanical Engineering',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 1,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Thermodynamics Processes & Systems',
        topics: [
          { id: '1rmes3-u1-1', name: 'Thermodynamic Systems, Control Volumes & State Postulate' },
          { id: '1rmes3-u1-2', name: 'Zeroth, First & Second Laws of Thermodynamics' },
          { id: '1rmes3-u1-3', name: 'Internal Energy & Enthalpy of Ideal Gases' },
          { id: '1rmes3-u1-4', name: 'Steady Flow Energy Equation (SFEE) and Applications (Nozzle, Turbine, Boiler)' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Properties of Pure Substance & Steam',
        topics: [
          { id: '1rmes3-u2-1', name: 'Phase Change Processes, P-V & T-S Diagrams of Water' },
          { id: '1rmes3-u2-2', name: 'Critical Point, Triple Point & Steam Tables' },
          { id: '1rmes3-u2-3', name: 'Enthalpy and Entropy of Wet, Dry & Superheated Steam' },
          { id: '1rmes3-u2-4', name: 'Dryness Fraction and Measurement Using Throttling Calorimeter' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Air Standard Cycles & IC Engines',
        topics: [
          { id: '1rmes3-u3-1', name: 'Air Standard Assumptions & Carnot Cycle' },
          { id: '1rmes3-u3-2', name: 'Thermodynamic Analysis of Otto Cycle (Thermal Efficiency derivation)' },
          { id: '1rmes3-u3-3', name: 'Thermodynamic Analysis of Diesel Cycle (Cut-off ratio & Efficiency)' },
          { id: '1rmes3-u3-4', name: 'Comparison of Otto and Diesel Cycles & IC Engine Operations' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Manufacturing Processes & Metal Casting',
        topics: [
          { id: '1rmes3-u4-1', name: 'Classification of Manufacturing Processes' },
          { id: '1rmes3-u4-2', name: 'Pattern Making, Allowances & Moulding Sand Properties' },
          { id: '1rmes3-u4-3', name: 'Elements of Gating System & Solidification of Castings' },
          { id: '1rmes3-u4-4', name: 'Sand Casting Defects and Remedial Measures' },
          { id: '1rmes3-u4-5', name: 'Metal Forming: Forging, Rolling, Extrusion & Drawing' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Welding & Machining Processes',
        topics: [
          { id: '1rmes3-u5-1', name: 'Arc Welding Processes (TIG & MIG Principles)' },
          { id: '1rmes3-u5-2', name: 'Oxy-Acetylene Gas Welding Flames & Applications' },
          { id: '1rmes3-u5-3', name: 'Resistance Welding (Spot & Seam Welding)' },
          { id: '1rmes3-u5-4', name: 'Lathe Machine: Construction, Operations (Turning, Facing, Knurling)' },
          { id: '1rmes3-u5-5', name: 'Cutting Tool Materials & Tool Geometry' }
        ]
      }
    ]
  },
  {
    code: '1RTES4',
    name: 'Basic Electronics',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 1,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Semiconductor Physics & PN Junction Diode',
        topics: [
          { id: '1rtes4-u1-1', name: 'Intrinsic and Extrinsic Semiconductors, Fermi Energy Level' },
          { id: '1rtes4-u1-2', name: 'PN Junction Under Zero, Forward and Reverse Bias' },
          { id: '1rtes4-u1-3', name: 'Space Charge Width & Depletion Layer Capacitance' },
          { id: '1rtes4-u1-4', name: 'Diode Current Equation, V-I Characteristics & Diode Models' },
          { id: '1rtes4-u1-5', name: 'Zener and Avalanche Breakdown Mechanisms' }
        ]
      },
      {
        unitNumber: 2,
        title: 'PN Diode Applications & Power Supply',
        topics: [
          { id: '1rtes4-u2-1', name: 'Half Wave Rectifier Analysis (Efficiency, Ripple Factor, PIV)' },
          { id: '1rtes4-u2-2', name: 'Full Wave Rectifier (Center-Tapped and Bridge) Analysis' },
          { id: '1rtes4-u2-3', name: 'Capacitor Filter and LC Filter Performance' },
          { id: '1rtes4-u2-4', name: 'Diode Clipper Circuits (Series & Shunt)' },
          { id: '1rtes4-u2-5', name: 'Diode Clamper Circuits (Positive & Negative)' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Special Purpose Diodes',
        topics: [
          { id: '1rtes4-u3-1', name: 'Zener Diode as Line and Load Voltage Regulator with Numericals' },
          { id: '1rtes4-u3-2', name: 'Light Emitting Diode (LED) and 7-Segment Displays' },
          { id: '1rtes4-u3-3', name: 'Photodiode & Solar Cell Principles' },
          { id: '1rtes4-u3-4', name: 'Tunnel Diode & Varactor Diode Characteristics' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Bipolar Junction Transistor (BJT)',
        topics: [
          { id: '1rtes4-u4-1', name: 'BJT Construction & Operation in Active, Cut-off, Saturation' },
          { id: '1rtes4-u4-2', name: 'Common Base (CB), Common Emitter (CE) & Common Collector (CC) Modes' },
          { id: '1rtes4-u4-3', name: 'DC Load Line & Operating Point (Q-Point) Stability' },
          { id: '1rtes4-u4-4', name: 'Biasing Techniques: Fixed Bias, Collector Feedback & Self Bias (Voltage Divider)' },
          { id: '1rtes4-u4-5', name: 'BJT as a Linear Amplifier and Digital Switch' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Operational Amplifiers (Op-Amps)',
        topics: [
          { id: '1rtes4-u5-1', name: 'Op-Amp Block Diagram & Ideal OP-AMP Characteristics' },
          { id: '1rtes4-u5-2', name: 'Open Loop vs Closed Loop Configurations & Virtual Ground Concept' },
          { id: '1rtes4-u5-3', name: 'Inverting and Non-Inverting Amplifier Gain Derivations' },
          { id: '1rtes4-u5-4', name: 'Op-Amp Linear Circuits: Summer, Subtractor, Integrator, Differentiator' },
          { id: '1rtes4-u5-5', name: 'Voltage Comparator and Schmitt Trigger Concept' }
        ]
      }
    ]
  },
  {
    code: '2RABS1',
    name: 'Applied Mathematics-II',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 2,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Matrix Algebra & Linear Equations',
        topics: [
          { id: '2rabs1-u1-1', name: 'Elementary Row & Column Operations, Normal Form of Matrix' },
          { id: '2rabs1-u1-2', name: 'Rank of Matrix & Consistency of Linear System of Equations' },
          { id: '2rabs1-u1-3', name: 'Eigenvalues and Eigenvectors of Real Matrices' },
          { id: '2rabs1-u1-4', name: 'Cayley-Hamilton Theorem & Inverse Calculation' },
          { id: '2rabs1-u1-5', name: 'Diagonalization of Matrices & Quadratic Forms Reduction' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Ordinary Differential Equations',
        topics: [
          { id: '2rabs1-u2-1', name: "First Order Exact Differential Equations & Integrating Factors" },
          { id: '2rabs1-u2-2', name: "Clairaut's Equation and Solvable for p, x, y" },
          { id: '2rabs1-u2-3', name: 'Higher Order Linear ODEs with Constant Coefficients' },
          { id: '2rabs1-u2-4', name: 'Method of Variation of Parameters' },
          { id: '2rabs1-u2-5', name: "Cauchy-Euler Homogeneous Differential Equations" }
        ]
      },
      {
        unitNumber: 3,
        title: 'Partial Differential Equations',
        topics: [
          { id: '2rabs1-u3-1', name: 'Formation of Partial Differential Equations' },
          { id: '2rabs1-u3-2', name: "Lagrange's Linear PDE of First Order (Pp + Qq = R)" },
          { id: '2rabs1-u3-3', name: 'Homogeneous Linear PDEs with Constant Coefficients' },
          { id: '2rabs1-u3-4', name: 'Method of Separation of Variables for Wave & Heat Equations' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Probability & Statistics',
        topics: [
          { id: '2rabs1-u4-1', name: "Conditional Probability and Bayes' Theorem" },
          { id: '2rabs1-u4-2', name: 'Binomial, Poisson and Normal Probability Distributions' },
          { id: '2rabs1-u4-3', name: 'Curve Fitting by Method of Least Squares (Straight Line & Parabola)' },
          { id: '2rabs1-u4-4', name: 'Karl Pearson Correlation & Linear Regression Analysis' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Theory of Equations & Fuzzy Sets',
        topics: [
          { id: '2rabs1-u5-1', name: 'Polynomial Equations, Relations Between Roots and Coefficients' },
          { id: '2rabs1-u5-2', name: "Cardon's Method for Solution of Cubic Equations" },
          { id: '2rabs1-u5-3', name: 'Fuzzy Sets: Membership Function & Operations' },
          { id: '2rabs1-u5-4', name: 'Properties of Fuzzy Sets & Practical Applications' }
        ]
      }
    ]
  },
  {
    code: '2RABS2',
    name: 'Applied Physics',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 2,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Optics-I: Interference and Diffraction',
        topics: [
          { id: '2rabs2-u1-1', name: "Newton's Ring Experiment: Derivation for Dark & Bright Rings" },
          { id: '2rabs2-u1-2', name: 'Michelson Interferometer: Working and Applications' },
          { id: '2rabs2-u1-3', name: 'Fraunhofer Diffraction at Single Slit and Double Slit' },
          { id: '2rabs2-u1-4', name: 'Plane Transmission Diffraction Grating and Resolving Power' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Optics-II: Polarization, LASER & Optical Fibers',
        topics: [
          { id: '2rabs2-u2-1', name: 'Double Refraction, Nicol Prism, Half & Quarter Wave Plates' },
          { id: '2rabs2-u2-2', name: "Stimulated Emission, Population Inversion & Einstein's Coefficients" },
          { id: '2rabs2-u2-3', name: 'He-Ne Laser & Semiconductor Laser Construction and Working' },
          { id: '2rabs2-u2-4', name: 'Optical Fibers: Acceptance Angle, Numerical Aperture (NA) & V-Number' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Crystal Structure & Semiconductors',
        topics: [
          { id: '2rabs2-u3-1', name: "Miller Indices, Interplanar Spacing & Bragg's Law" },
          { id: '2rabs2-u3-2', name: 'Simple Cubic, BCC, FCC Structures and Packing Fractions' },
          { id: '2rabs2-u3-3', name: 'Band Theory of Solids: Metals, Insulators and Semiconductors' },
          { id: '2rabs2-u3-4', name: 'Fermi Level in Intrinsic and Extrinsic Semiconductors' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Electromagnetism & Maxwell Equations',
        topics: [
          { id: '2rabs2-u4-1', name: "Continuity Equation & Concept of Displacement Current" },
          { id: '2rabs2-u4-2', name: "Maxwell's Equations in Differential and Integral Forms" },
          { id: '2rabs2-u4-3', name: 'Electromagnetic Wave Equation in Dielectric Medium' },
          { id: '2rabs2-u4-4', name: 'Poynting Vector and Energy Density in EM Fields' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Quantum Physics',
        topics: [
          { id: '2rabs2-u5-1', name: "Compton Effect: Wavelength Shift Derivation" },
          { id: '2rabs2-u5-2', name: 'de Broglie Matter Waves & Davisson-Germer Experiment' },
          { id: '2rabs2-u5-3', name: "Heisenberg's Uncertainty Principle and Applications" },
          { id: '2rabs2-u5-4', name: "Schrodinger's Time Independent & Time Dependent Wave Equations" },
          { id: '2rabs2-u5-5', name: 'Particle in a 1-D Rigid Box: Energy Eigenvalues & Wavefunctions' }
        ]
      }
    ]
  },
  {
    code: '2RCES3',
    name: 'Computer Programming in C++',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 2,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Flowcharts & C++ Core Fundamentals',
        topics: [
          { id: '2rces3-u1-1', name: 'Algorithm Flowcharts, Data Types, Type Casting & Operators' },
          { id: '2rces3-u1-2', name: 'Control Structures: if-else, switch-case, while, do-while, for' },
          { id: '2rces3-u1-3', name: 'Jump Statements (break, continue, goto) and Scope of Variables' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Functions, Arrays & Structures',
        topics: [
          { id: '2rces3-u2-1', name: 'Functions: Call by Value vs Call by Reference, Inline Functions' },
          { id: '2rces3-u2-2', name: 'Recursion with Factorial and Fibonacci Examples' },
          { id: '2rces3-u2-3', name: '1D & 2D Arrays, String Manipulation & Library Functions' },
          { id: '2rces3-u2-4', name: 'Structures, Nested Structures and Array of Structures' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Pointers, Dynamic Memory & Files',
        topics: [
          { id: '2rces3-u3-1', name: 'Pointer Declaration, Pointer Arithmetic & Pointers with Arrays' },
          { id: '2rces3-u3-2', name: 'Dynamic Memory Allocation using new and delete Operators' },
          { id: '2rces3-u3-3', name: 'File Handling: fstream, ifstream, ofstream and File Pointer Manipulation' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Object-Oriented Programming & Classes',
        topics: [
          { id: '2rces3-u4-1', name: 'Classes, Objects, Access Specifiers (public, private, protected)' },
          { id: '2rces3-u4-2', name: 'Constructors: Default, Parameterized, Copy & Constructor Overloading' },
          { id: '2rces3-u4-3', name: 'Destructors, Static Data Members and Static Member Functions' },
          { id: '2rces3-u4-4', name: 'Friend Functions and Friend Classes' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Inheritance, Polymorphism & Templates',
        topics: [
          { id: '2rces3-u5-1', name: 'Operator Overloading: Unary and Binary Operator Overloading' },
          { id: '2rces3-u5-2', name: 'Inheritance Types: Single, Multilevel, Multiple, Hierarchical & Hybrid' },
          { id: '2rces3-u5-3', name: 'Virtual Functions, Pure Virtual Functions & Abstract Classes' },
          { id: '2rces3-u5-4', name: 'Function Templates, Class Templates & Exception Handling (try, catch, throw)' }
        ]
      }
    ]
  },
  {
    code: '2REES4',
    name: 'Basic Electrical Engineering',
    year: '1st Year',
    branches: ALL_BRANCH_CODES,
    semester: 2,
    credits: '3+1(P)',
    theoryHours: 2,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'AC Circuits & Three-Phase Systems',
        topics: [
          { id: '2rees4-u1-1', name: 'Generation of Sinusoidal EMF, RMS, Average, Form Factor & Peak Factor' },
          { id: '2rees4-u1-2', name: 'Single Phase Series R-L, R-C and R-L-C Circuits Analysis' },
          { id: '2rees4-u1-3', name: 'Series & Parallel Resonance, Q-Factor and Bandwidth' },
          { id: '2rees4-u1-4', name: 'Three-Phase AC: Star and Delta Relations, 2-Wattmeter Method' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Network Analysis & Theorems',
        topics: [
          { id: '2rees4-u2-1', name: "Kirchhoff's Laws (KVL & KCL), Mesh and Nodal Analysis" },
          { id: '2rees4-u2-2', name: "Thevenin's and Norton's Theorems with DC Sources" },
          { id: '2rees4-u2-3', name: "Superposition Theorem and Maximum Power Transfer Theorem" },
          { id: '2rees4-u2-4', name: 'Star-Delta and Delta-Star Transformations' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Magnetic Circuits & Transformers',
        topics: [
          { id: '2rees4-u3-1', name: 'Magnetic Circuit Fundamentals, Reluctance, MMF & BH Curve' },
          { id: '2rees4-u3-2', name: 'Single-Phase Transformer: Working Principle, EMF Equation & Turns Ratio' },
          { id: '2rees4-u3-3', name: 'Phasor Diagram on No-load and Load, Equivalent Circuit' },
          { id: '2rees4-u3-4', name: 'Losses, Efficiency and Voltage Regulation, Auto-Transformer' }
        ]
      },
      {
        unitNumber: 4,
        title: 'DC Machines (Generators & Motors)',
        topics: [
          { id: '2rees4-u4-1', name: 'DC Generator: Construction, Working Principle & EMF Equation' },
          { id: '2rees4-u4-2', name: 'Armature Reaction and Commutation Basics' },
          { id: '2rees4-u4-3', name: 'DC Motor: Back EMF Principle, Torque Equation & Types' },
          { id: '2rees4-u4-4', name: 'Speed Control of DC Shunt and Series Motors' }
        ]
      },
      {
        unitNumber: 5,
        title: 'AC Machines (Induction & Synchronous)',
        topics: [
          { id: '2rees4-u5-1', name: 'Three-Phase Induction Motor: Rotating Magnetic Field Principle' },
          { id: '2rees4-u5-2', name: 'Slip, Torque-Slip Characteristics and Starting Methods' },
          { id: '2rees4-u5-3', name: 'Single-Phase Induction Motor: Double Field Revolving Theory' },
          { id: '2rees4-u5-4', name: 'Three-Phase Synchronous Motor: Principle and Hunting' }
        ]
      }
    ]
  },

  // ================= 2nd Year (Semester 3 & 4) =================
  {
    code: 'CS3101',
    name: 'Data Structures and Algorithms',
    year: '2nd Year',
    branches: ['CSE', 'IT'],
    semester: 3,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Linear Data Structures: Stacks and Queues',
        topics: [
          { id: 'ds-u1-1', name: 'Asymptotic Notations (Big-O, Omega, Theta) & Complexity' },
          { id: 'ds-u1-2', name: 'Stack Operations, Infix to Postfix Conversion & Evaluation' },
          { id: 'ds-u1-3', name: 'Linear Queue, Circular Queue and Priority Queue Implementations' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Linked Lists',
        topics: [
          { id: 'ds-u2-1', name: 'Singly Linked List: Insertion, Deletion, Reversal' },
          { id: 'ds-u2-2', name: 'Doubly Linked List and Circular Linked List' },
          { id: 'ds-u2-3', name: 'Polynomial Representation and Addition using Linked List' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Trees and Binary Search Trees',
        topics: [
          { id: 'ds-u3-1', name: 'Binary Trees Traversals: Inorder, Preorder, Postorder' },
          { id: 'ds-u3-2', name: 'Binary Search Tree (BST): Search, Insertion, Deletion' },
          { id: 'ds-u3-3', name: 'AVL Tree Rotations and Height Balancing' },
          { id: 'ds-u3-4', name: 'B-Trees and B+ Trees Fundamentals' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Graphs & Graph Algorithms',
        topics: [
          { id: 'ds-u4-1', name: 'Graph Representation: Adjacency Matrix & Adjacency List' },
          { id: 'ds-u4-2', name: 'Breadth First Search (BFS) and Depth First Search (DFS)' },
          { id: 'ds-u4-3', name: "Minimum Spanning Tree: Prim's and Kruskal's Algorithms" },
          { id: 'ds-u4-4', name: "Single Source Shortest Path: Dijkstra's Algorithm" }
        ]
      },
      {
        unitNumber: 5,
        title: 'Sorting, Searching and Hashing',
        topics: [
          { id: 'ds-u5-1', name: 'QuickSort and MergeSort: Divide & Conquer Analysis' },
          { id: 'ds-u5-2', name: 'HeapSort and Binary Heap Construction' },
          { id: 'ds-u5-3', name: 'Hashing Techniques: Hash Functions & Collision Resolution' }
        ]
      }
    ]
  },
  {
    code: 'CS3102',
    name: 'Discrete Mathematics',
    year: '2nd Year',
    branches: ['CSE', 'IT'],
    semester: 3,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Set Theory, Relations and Functions',
        topics: [
          { id: 'dm-u1-1', name: 'Sets, Operations, Principle of Inclusion-Exclusion' },
          { id: 'dm-u1-2', name: 'Equivalence Relations and Partial Ordering Relations (Posets)' },
          { id: 'dm-u1-3', name: 'Hasse Diagrams and Lattices' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Propositional & Predicate Logic',
        topics: [
          { id: 'dm-u2-1', name: 'Propositional Connectives, Truth Tables & Tautologies' },
          { id: 'dm-u2-2', name: 'Normal Forms: CNF and DNF' },
          { id: 'dm-u2-3', name: 'Predicate Calculus and Quantifiers' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Algebraic Structures',
        topics: [
          { id: 'dm-u3-1', name: 'Semigroups, Monoids and Groups with Properties' },
          { id: 'dm-u3-2', name: "Subgroups, Cosets and Lagrange's Theorem" },
          { id: 'dm-u3-3', name: 'Rings, Integral Domains and Fields' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Combinatorics & Recurrence Relations',
        topics: [
          { id: 'dm-u4-1', name: 'Pigeonhole Principle and Permutations/Combinations' },
          { id: 'dm-u4-2', name: 'Linear Recurrence Relations with Constant Coefficients' },
          { id: 'dm-u4-3', name: 'Generating Functions Method for Recurrences' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Graph Theory',
        topics: [
          { id: 'dm-u5-1', name: 'Euler Paths and Circuits, Hamiltonian Cycles' },
          { id: 'dm-u5-2', name: 'Planar Graphs and Euler Formula' },
          { id: 'dm-u5-3', name: 'Graph Coloring and Chromatic Number' }
        ]
      }
    ]
  },
  {
    code: 'CS4101',
    name: 'Database Management Systems',
    year: '2nd Year',
    branches: ['CSE', 'IT'],
    semester: 4,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'DBMS Architecture & ER Modeling',
        topics: [
          { id: 'db-u1-1', name: 'Three-Schema Architecture & Data Independence' },
          { id: 'db-u1-2', name: 'Entity Relationship (ER) & Enhanced ER Diagram Modeling' },
          { id: 'db-u1-3', name: 'Relational Model Constraints and Keys' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Relational Algebra & SQL',
        topics: [
          { id: 'db-u2-1', name: 'Relational Algebra Operators: Select, Project, Join, Division' },
          { id: 'db-u2-2', name: 'SQL DDL, DML, Subqueries, Aggregates & Views' },
          { id: 'db-u2-3', name: 'Integrity Constraints and Triggers in SQL' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Relational Database Design & Normalization',
        topics: [
          { id: 'db-u3-1', name: 'Functional Dependencies and Armstrong Axioms' },
          { id: 'db-u3-2', name: 'Normal Forms: 1NF, 2NF, 3NF and BCNF with Decompositions' },
          { id: 'db-u3-3', name: 'Lossless-Join and Dependency-Preserving Decompositions' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Transaction Processing & Concurrency',
        topics: [
          { id: 'db-u4-1', name: 'ACID Properties and Transaction State Diagram' },
          { id: 'db-u4-2', name: 'Serializability: Conflict and View Serializability' },
          { id: 'db-u4-3', name: 'Concurrency Control: Two-Phase Locking (2PL) Protocol' },
          { id: 'db-u4-4', name: 'Deadlock Detection, Prevention and Timestamp Ordering' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Indexing & Recovery Techniques',
        topics: [
          { id: 'db-u5-1', name: 'Primary, Secondary and Clustering Indexes' },
          { id: 'db-u5-2', name: 'B+ Tree Indexing File Organization' },
          { id: 'db-u5-3', name: 'Log-Based Recovery (Deferred and Immediate Update)' }
        ]
      }
    ]
  },
  {
    code: 'EC3201',
    name: 'Analog Electronics',
    year: '2nd Year',
    branches: ['ETC', 'EI'],
    semester: 3,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'BJT & FET Small Signal Amplifiers',
        topics: [
          { id: 'ae-u1-1', name: 'h-Parameter Model for Common Emitter BJT Amplifier' },
          { id: 'ae-u1-2', name: 'JFET and MOSFET Small Signal AC Equivalent Circuits' },
          { id: 'ae-u1-3', name: 'High Frequency Response & Miller Effect' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Feedback Amplifiers',
        topics: [
          { id: 'ae-u2-1', name: 'Feedback Topologies: Voltage Series, Shunt, Current Series, Shunt' },
          { id: 'ae-u2-2', name: 'Effect of Negative Feedback on Gain, Bandwidth, Distortion & Impedance' },
          { id: 'ae-u2-3', name: 'Stability of Feedback Amplifiers & Nyquist Criterion' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Sinusoidal Oscillators & Wave Generators',
        topics: [
          { id: 'ae-u3-1', name: 'Barkhausen Criterion for Sustained Oscillations' },
          { id: 'ae-u3-2', name: 'RC Phase Shift and Wien Bridge Oscillators' },
          { id: 'ae-u3-3', name: 'Hartley and Colpitts LC Oscillators' },
          { id: 'ae-u3-4', name: '555 Timer in Astable and Monostable Modes' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Power Amplifiers',
        topics: [
          { id: 'ae-u4-1', name: 'Class A, Class B, Class AB and Class C Operations' },
          { id: 'ae-u4-2', name: 'Transformer-Coupled Class A Amplifier Efficiency' },
          { id: 'ae-u4-3', name: 'Class B Push-Pull & Complementary Symmetry Amplifiers' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Active Filters & Multivibrators',
        topics: [
          { id: 'ae-u5-1', name: 'First and Second Order Butterworth Low-Pass and High-Pass Filters' },
          { id: 'ae-u5-2', name: 'Band-Pass and Band-Reject Active Filters' },
          { id: 'ae-u5-3', name: 'Schmitt Trigger with Op-Amp and Hysteresis Calculation' }
        ]
      }
    ]
  },
  {
    code: 'ME3301',
    name: 'Strength of Materials',
    year: '2nd Year',
    branches: ['MECH', 'CIVIL'],
    semester: 3,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Simple Stresses and Strains',
        topics: [
          { id: 'som-u1-1', name: 'Tensile, Compressive & Shear Stress-Strain Relations' },
          { id: 'som-u1-2', name: "Hooke's Law, Elastic Constants & Poisson's Ratio" },
          { id: 'som-u1-3', name: 'Thermal Stresses in Composite Bars' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Bending & Shear Stresses in Beams',
        topics: [
          { id: 'som-u2-1', name: 'Pure Bending Equation (M/I = sigma/y = E/R)' },
          { id: 'som-u2-2', name: 'Shear Stress Distribution across Rectangular & I-Sections' },
          { id: 'som-u2-3', name: 'Shear Force and Bending Moment Diagrams (SFD & BMD)' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Torsion and Springs',
        topics: [
          { id: 'som-u3-1', name: 'Torsion Equation (T/J = tau/r = G*theta/L) for Circular Shafts' },
          { id: 'som-u3-2', name: 'Power Transmission by Shafts' },
          { id: 'som-u3-3', name: 'Helical Springs under Axial Loads' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Principal Stresses and Mohr Circle',
        topics: [
          { id: 'som-u4-1', name: 'Principal Planes and Principal Stresses Analysis' },
          { id: 'som-u4-2', name: "Mohr's Circle of Stress Construction and Numericals" },
          { id: 'som-u4-3', name: 'Theories of Elastic Failure (Rankine, Tresca, Von Mises)' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Deflection of Beams & Columns',
        topics: [
          { id: 'som-u5-1', name: "Double Integration and Macaulay's Method for Deflections" },
          { id: 'som-u5-2', name: "Euler's Column Theory for Long Columns & Critical Load" },
          { id: 'som-u5-3', name: "Rankine-Gordon Formula for Struts" }
        ]
      }
    ]
  },

  // ================= 3rd Year =================
  {
    code: 'CS5101',
    name: 'Computer Networks',
    year: '3rd Year',
    branches: ['CSE', 'IT'],
    semester: 5,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Network Models & Physical Layer',
        topics: [
          { id: 'cn-u1-1', name: 'OSI Reference Model vs TCP/IP Protocol Suite' },
          { id: 'cn-u1-2', name: 'Transmission Media, Nyquist & Shannon Channel Capacity' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Data Link Layer & MAC Sublayer',
        topics: [
          { id: 'cn-u2-1', name: 'Framing, Error Detection: CRC and Hamming Code' },
          { id: 'cn-u2-2', name: 'Flow Control: Stop-and-Wait, Go-Back-N, Selective Repeat' },
          { id: 'cn-u2-3', name: 'CSMA/CD & CSMA/CA Protocols in Ethernet' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Network Layer & IP Addressing',
        topics: [
          { id: 'cn-u3-1', name: 'IPv4 Addressing, Subnetting, CIDR & IPv6 Basics' },
          { id: 'cn-u3-2', name: 'Routing Algorithms: Distance Vector (Bellman-Ford) & Link State (Dijkstra)' },
          { id: 'cn-u3-3', name: 'ARP, RARP, ICMP, NAT Protocols' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Transport Layer Protocols',
        topics: [
          { id: 'cn-u4-1', name: 'TCP vs UDP Segment Formats and Applications' },
          { id: 'cn-u4-2', name: 'TCP 3-Way Handshake Connection Establishment & Teardown' },
          { id: 'cn-u4-3', name: 'TCP Congestion Control: AIMD, Slow Start, Fast Retransmit' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Application Layer & Network Security',
        topics: [
          { id: 'cn-u5-1', name: 'DNS, HTTP/HTTPS, FTP, SMTP and POP3/IMAP' },
          { id: 'cn-u5-2', name: 'Symmetric & Asymmetric Cryptography: RSA Algorithm' },
          { id: 'cn-u5-3', name: 'Firewalls, Digital Signatures and SSL/TLS' }
        ]
      }
    ]
  },
  {
    code: 'CS5102',
    name: 'Design and Analysis of Algorithms',
    year: '3rd Year',
    branches: ['CSE', 'IT'],
    semester: 5,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'Divide and Conquer & Recurrences',
        topics: [
          { id: 'daa-u1-1', name: 'Master Theorem for Solving Recurrences' },
          { id: 'daa-u1-2', name: "Strassen's Matrix Multiplication Algorithm" },
          { id: 'daa-u1-3', name: 'Quickselect (kth Smallest Element in Linear Time)' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Greedy Method',
        topics: [
          { id: 'daa-u2-1', name: 'Fractional Knapsack Problem and Proof of Correctness' },
          { id: 'daa-u2-2', name: 'Huffman Coding and Optimal Prefix Codes' },
          { id: 'daa-u2-3', name: 'Job Sequencing with Deadlines' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Dynamic Programming',
        topics: [
          { id: 'daa-u3-1', name: '0/1 Knapsack Problem Dynamic Programming Formulation' },
          { id: 'daa-u3-2', name: 'Longest Common Subsequence (LCS)' },
          { id: 'daa-u3-3', name: 'Matrix Chain Multiplication (MCM)' },
          { id: 'daa-u3-4', name: "Floyd-Warshall All-Pairs Shortest Path" }
        ]
      },
      {
        unitNumber: 4,
        title: 'Backtracking and Branch & Bound',
        topics: [
          { id: 'daa-u4-1', name: 'N-Queens Problem using Backtracking' },
          { id: 'daa-u4-2', name: 'Graph Coloring and Hamiltonian Cycles' },
          { id: 'daa-u4-3', name: 'Traveling Salesperson Problem (TSP) using Branch & Bound' }
        ]
      },
      {
        unitNumber: 5,
        title: 'NP-Completeness & Approximation',
        topics: [
          { id: 'daa-u5-1', name: 'Complexity Classes: P, NP, NP-Complete and NP-Hard' },
          { id: 'daa-u5-2', name: "Cook's Theorem & Polynomial-Time Reductions (3-SAT to CLIQUE)" },
          { id: 'daa-u5-3', name: 'Approximation Algorithm for Vertex Cover' }
        ]
      }
    ]
  },

  // ================= 4th Year =================
  {
    code: 'CS7101',
    name: 'Artificial Intelligence & Machine Learning',
    year: '4th Year',
    branches: ['CSE', 'IT'],
    semester: 7,
    credits: 4,
    theoryHours: 3,
    defaultMstMarks: 20,
    defaultMstDuration: '1 Hour',
    units: [
      {
        unitNumber: 1,
        title: 'AI Problem Formulation & Informed Search',
        topics: [
          { id: 'ai-u1-1', name: 'State Space Representation & Heuristic Search Techniques' },
          { id: 'ai-u1-2', name: 'A* and AO* Search Algorithms with Admissibility Proofs' },
          { id: 'ai-u1-3', name: 'Game Playing: Minimax Algorithm & Alpha-Beta Pruning' }
        ]
      },
      {
        unitNumber: 2,
        title: 'Knowledge Representation & Reasoning',
        topics: [
          { id: 'ai-u2-1', name: 'First-Order Predicate Logic & Resolution Refutation' },
          { id: 'ai-u2-2', name: 'Semantic Networks, Frames & Conceptual Dependency' },
          { id: 'ai-u2-3', name: 'Probabilistic Reasoning & Bayesian Belief Networks' }
        ]
      },
      {
        unitNumber: 3,
        title: 'Supervised Learning',
        topics: [
          { id: 'ai-u3-1', name: 'Linear Regression and Gradient Descent Optimization' },
          { id: 'ai-u3-2', name: 'Logistic Regression & Decision Trees (ID3/C4.5 Information Gain)' },
          { id: 'ai-u3-3', name: 'Support Vector Machines (SVM) & Kernel Trick' }
        ]
      },
      {
        unitNumber: 4,
        title: 'Unsupervised Learning & Clustering',
        topics: [
          { id: 'ai-u4-1', name: 'K-Means Clustering and Hierarchical Clustering' },
          { id: 'ai-u4-2', name: 'Principal Component Analysis (PCA) for Dimensionality Reduction' }
        ]
      },
      {
        unitNumber: 5,
        title: 'Neural Networks & Deep Learning',
        topics: [
          { id: 'ai-u5-1', name: 'Multi-Layer Perceptron (MLP) & Backpropagation Algorithm' },
          { id: 'ai-u5-2', name: 'Convolutional Neural Networks (CNN) Architecture' },
          { id: 'ai-u5-3', name: 'Recurrent Neural Networks (RNN) and Transformer Basics' }
        ]
      }
    ]
  }
];

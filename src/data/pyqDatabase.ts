import { QuestionType, DifficultyLevel } from '../types';

export interface PyqItem {
  id: string;
  subjectCode: string;
  unitNumber: number;
  chapter: string;
  title: string;
  text: string;
  marks: number;
  type: QuestionType;
  difficulty: DifficultyLevel;
  recurrence: string;
  solution: string;
}

export const REAL_IET_PYQS: PyqItem[] = [
  // =========================================================================
  // 1RABS1: Applied Mathematics-I (Authentic IET DAVV Mid-Semester PYQs)
  // =========================================================================

  // --- UNIT 1: Differential Calculus ---
  {
    id: 'math1-u1-leibnitz-sine',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Successive Differentiation & Leibnitz Theorem',
    title: 'Successive Differentiation of Inverse Sine Function',
    text: 'If $y = (\\sin^{-1} x)^2$, prove that $(1 - x^2) y_{n+2} - (2n + 1) x y_{n+1} - n^2 y_n = 0$. Hence evaluate $(y_n)_0$ at $x = 0$.',
    marks: 5,
    type: 'derivation',
    difficulty: 'medium',
    recurrence: 'MST-1 Dec 2023, Dec 2022, Nov 2021 (Most Repeated Problem)',
    solution: `$$\\text{Given: } y = (\\sin^{-1} x)^2 \\quad \\text{--- (1)}$$

**Step 1: First Derivative:**
$$y_1 = \\frac{2 \\sin^{-1} x}{\\sqrt{1 - x^2}} \\implies \\sqrt{1 - x^2} \\, y_1 = 2 \\sin^{-1} x$$
Squaring both sides:
$$(1 - x^2) y_1^2 = 4 (\\sin^{-1} x)^2 = 4y \\quad \\text{--- (2)}$$

**Step 2: Second Derivative:**
Differentiating equation (2) with respect to $x$:
$$(1 - x^2) \\cdot (2 y_1 y_2) + y_1^2 (-2x) = 4 y_1$$
Dividing throughout by $2y_1$:
$$(1 - x^2) y_2 - x y_1 - 2 = 0 \\quad \\text{--- (3)}$$

**Step 3: Applying Leibnitz's Theorem $n$ times:**
$$\\frac{d^n}{dx^n} [(1 - x^2) y_2] - \\frac{d^n}{dx^n} [x y_1] - \\frac{d^n}{dx^n} [2] = 0$$
Using Leibnitz formula $(uv)_n = u_n v + n u_{n-1} v_1 + \\frac{n(n-1)}{2} u_{n-2} v_2$:
$$\\left[ (1 - x^2) y_{n+2} + n(-2x) y_{n+1} + \\frac{n(n-1)}{2}(-2) y_n \\right] - \\left[ x y_{n+1} + n(1) y_n \\right] = 0$$
$$(1 - x^2) y_{n+2} - 2nx y_{n+1} - n(n-1) y_n - x y_{n+1} - n y_n = 0$$
$$(1 - x^2) y_{n+2} - (2n + 1) x y_{n+1} - n^2 y_n = 0 \\quad \\text{[Proved!]}$$

**Step 4: Evaluating $(y_n)_0$ at $x = 0$:**
Putting $x = 0$: $(y_{n+2})_0 = n^2 (y_n)_0$.
From (1), (2), (3) at $x = 0$: $(y)_0 = 0$, $(y_1)_0 = 0$, $(y_2)_0 = 2$.
- For odd $n$: $(y_n)_0 = 0$.
- For even $n = 2k$:
$$(y_n)_0 = 2 \\cdot 2^2 \\cdot 4^2 \\cdots (n-2)^2.$$`
  },
  {
    id: 'math1-u1-leibnitz-power-variant',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Successive Differentiation & Leibnitz Theorem',
    title: 'Successive Differentiation Power Variant',
    text: 'If $y = (x + \\sqrt{1 + x^2})^m$, prove that:\n$$(1 + x^2) y_{n+2} + (2n + 1) x y_{n+1} + (n^2 - m^2) y_n = 0$$',
    marks: 5,
    type: 'derivation',
    difficulty: 'medium',
    recurrence: 'MST-1 Nov 2022, 2020',
    solution: `$$\\text{Given: } y = (x + \\sqrt{1 + x^2})^m$$

**Step 1: First Derivative:**
$$y_1 = m (x + \\sqrt{1 + x^2})^{m-1} \\cdot \\left( 1 + \\frac{2x}{2\\sqrt{1 + x^2}} \\right) = \\frac{m y}{\\sqrt{1 + x^2}}$$
$$(1 + x^2) y_1^2 = m^2 y^2$$

**Step 2: Second Derivative:**
Differentiating both sides with respect to $x$:
$$(1 + x^2) (2 y_1 y_2) + 2x y_1^2 = m^2 (2 y y_1) \\implies (1 + x^2) y_2 + x y_1 - m^2 y = 0$$

**Step 3: Leibnitz Differentiation $n$ times:**
$$\\left[ (1 + x^2) y_{n+2} + 2nx y_{n+1} + n(n-1) y_n \\right] + \\left[ x y_{n+1} + n y_n \\right] - m^2 y_n = 0$$
$$(1 + x^2) y_{n+2} + (2n + 1) x y_{n+1} + (n^2 - m^2) y_n = 0 \\quad \\text{[Proved!]}$$`
  },
  {
    id: 'math1-u1-asymptotes-cubic',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Asymptotes (Cartesian & Polar)',
    title: 'Oblique Asymptotes of Cubic Curve',
    text: 'Find all the asymptotes of the cubic curve:\n$$x^3 + 2x^2y - xy^2 - 2y^3 + 4y^2 + 2xy + y - 1 = 0$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 2023, 2022, 2019 (High Frequency)',
    solution: `$$\\text{Given: } x^3 + 2x^2y - xy^2 - 2y^3 + 4y^2 + 2xy + y - 1 = 0$$

**Step 1: Third-degree slope polynomial:**
Put $x = 1, y = m$ in highest degree ($3$) terms:
$$\\phi_3(m) = 1 + 2m - m^2 - 2m^3 = (1 - m^2)(1 + 2m) = (1 - m)(1 + m)(1 + 2m) = 0$$
Roots: $m_1 = 1, \\, m_2 = -1, \\, m_3 = -1/2$. (All three roots are distinct).

**Step 2: Second-degree polynomial:**
$$\\phi_2(m) = 4m^2 + 2m$$
$$\\phi_3'(m) = 2 - 2m - 6m^2$$

**Step 3: Calculating intercepts $c = - \\frac{\\phi_2(m)}{\\phi_3'(m)}$:**
- **For $m_1 = 1$:**
  $$\\phi_2(1) = 4(1)^2 + 2(1) = 6$$
  $$\\phi_3'(1) = 2 - 2(1) - 6(1)^2 = -6$$
  $$c_1 = - \\frac{6}{-6} = 1 \\implies y = 1x + 1 \\implies x - y + 1 = 0$$

- **For $m_2 = -1$:**
  $$\\phi_2(-1) = 4(-1)^2 + 2(-1) = 2$$
  $$\\phi_3'(-1) = 2 - 2(-1) - 6(-1)^2 = 2 + 2 - 6 = -2$$
  $$c_2 = - \\frac{2}{-2} = 1 \\implies y = -x + 1 \\implies x + y - 1 = 0$$

- **For $m_3 = -1/2$:**
  $$\\phi_2(-1/2) = 4(1/4) + 2(-1/2) = 1 - 1 = 0$$
  $$\\phi_3'(-1/2) = 2 - 2(-1/2) - 6(1/4) = 2 + 1 - 1.5 = 1.5 \\neq 0$$
  $$c_3 = - \\frac{0}{1.5} = 0 \\implies y = -\\frac{1}{2}x + 0 \\implies x + 2y = 0$$

**Final Asymptotes:**
1. $x - y + 1 = 0$
2. $x + y - 1 = 0$
3. $x + 2y = 0$`
  },
  {
    id: 'math1-u1-asymptotes-repeated',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Asymptotes (Cartesian & Polar)',
    title: 'Oblique Asymptotes with Repeated Roots',
    text: 'Find all the asymptotes of the cubic curve:\n$$x^3 + 3x^2y - 4y^3 - x + y + 3 = 0$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 2021, 2019',
    solution: `$$\\phi_3(m) = 1 + 3m - 4m^3 = -(m - 1)(2m + 1)^2 = 0 \\implies m_1 = 1, \\, m_{2,3} = -1/2$$
For $m = 1$: $\\phi_2(m) = 0 \\implies c = 0 \\implies x - y = 0$.
For repeated roots $m = -1/2$: $\\frac{c^2}{2} \\phi_3''(m) + \\phi_1(m) = 0 \\implies 6c^2 - 3/2 = 0 \\implies c = \\pm 1/2$.
Asymptotes: $x - y = 0$, $x + 2y - 1 = 0$, $x + 2y + 1 = 0$.`
  },
  {
    id: 'math1-u1-curvature-catenary',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Curvature, Radius of Curvature & Center of Curvature',
    title: 'Radius of Curvature of Catenary',
    text: 'Find the radius of curvature at any point $(x, y)$ for the catenary:\n$$y = c \\cosh\\left(\\frac{x}{c}\\right)$$\nand show that $\\rho = \\frac{y^2}{c}$.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 Dec 2022, 2020',
    solution: `$$\\text{Given: } y = c \\cosh(x/c)$$
$$y_1 = \\frac{dy}{dx} = \\sinh(x/c)$$
$$y_2 = \\frac{d^2y}{dx^2} = \\frac{1}{c} \\cosh(x/c)$$
$$\\rho = \\frac{[1 + y_1^2]^{3/2}}{y_2} = \\frac{[1 + \\sinh^2(x/c)]^{3/2}}{\\frac{1}{c} \\cosh(x/c)} = \\frac{\\cosh^3(x/c)}{\\frac{1}{c} \\cosh(x/c)} = c \\cosh^2(x/c)$$
Since $y = c \\cosh(x/c) \\implies \\cosh(x/c) = y/c$:
$$\\rho = c \\left(\\frac{y}{c}\\right)^2 = \\frac{y^2}{c} \\quad \\text{[Proved!]}$$`
  },
  {
    id: 'math1-u1-curvature-folium',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Curvature, Radius of Curvature & Center of Curvature',
    title: 'Radius of Curvature of Folium of Descartes',
    text: 'Find the radius of curvature at the point $\\left(\\frac{3a}{2}, \\frac{3a}{2}\\right)$ for the Folium of Descartes:\n$$x^3 + y^3 = 3axy$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 2023, 2021',
    solution: `$$\\text{Given: } x^3 + y^3 = 3axy$$
At $P(3a/2, 3a/2)$: $y_1 = -1$ and $y_2 = -\\frac{32}{3a}$.
$$\\rho = \\frac{[1 + (-1)^2]^{3/2}}{|-32/(3a)|} = \\frac{2\\sqrt{2} \\cdot 3a}{32} = \\frac{3a}{8\\sqrt{2}}.$$`
  },
  {
    id: 'math1-u1-taylor-polynomial',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: "Taylor's and Maclaurin's Expansion of Functions",
    title: 'Taylor Polynomial Expansion in Two Variables',
    text: "Expand the polynomial $f(x, y) = x^2y + 3y - 2$ in powers of $(x - 1)$ and $(y + 2)$ using Taylor's Theorem.",
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 2022, 2020',
    solution: `$$f(1, -2) = -10, \\quad f_x = -4, \\quad f_y = 4, \\quad f_{xx} = -4, \\quad f_{xy} = 2, \\quad f_{yy} = 0, \\quad f_{xxy} = 2$$
$$f(x, y) = -10 - 4(x - 1) + 4(y + 2) - 2(x - 1)^2 + 2(x - 1)(y + 2) + (x - 1)^2(y + 2).$$`
  },
  {
    id: 'math1-u1-envelopes-straight-lines',
    subjectCode: '1RABS1',
    unitNumber: 1,
    chapter: 'Envelopes, Evolutes and Involutes',
    title: 'Envelope of Straight Line Family',
    text: 'Find the envelope of the family of straight lines $\\frac{x}{a} + \\frac{y}{b} = 1$, where the parameters $a$ and $b$ are connected by the relation $a^2 + b^2 = c^2$, where $c$ is a constant.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 2023, 2019',
    solution: `$$\\text{Equation: } \\frac{x}{a} + \\frac{y}{b} = 1, \\quad a^2 + b^2 = c^2$$
Using undetermined multiplier or parameter substitution $a = c \\cos \\theta, b = c \\sin \\theta$:
$$\\frac{x}{c \\cos \\theta} + \\frac{y}{c \\sin \\theta} = 1 \\implies x \\sec \\theta + y \\csc \\theta = c$$
Differentiating with respect to $\\theta$:
$$x \\sec \\theta \\tan \\theta - y \\csc \\theta \\cot \\theta = 0 \\implies \\tan^3 \\theta = \\frac{y}{x}$$
Eliminating $\\theta$ yields the Astroid:
$$x^{2/3} + y^{2/3} = c^{2/3}.$$`
  },

  // --- UNIT 2: Advanced Differential Calculus ---
  {
    id: 'math1-u2-lagrange-box',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: "Lagrange's Method of Undetermined Multipliers",
    title: 'Lagrange Undetermined Multipliers Box Optimization',
    text: "A rectangular box open at the top is to have a volume of $32 \\text{ ft}^3$. Find the dimensions which require the least amount of material for its construction using Lagrange's method of undetermined multipliers.",
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 Dec 2023, Nov 2022 (Guaranteed 5-Marker)',
    solution: `$$\\text{Let dimensions be length } x, \\text{ breadth } y, \\text{ height } z.$$
**Objective Function (Surface Area):**
$$S = xy + 2xz + 2yz$$
**Constraint (Volume):**
$$V = xyz = 32 \\implies \\phi(x, y, z) = xyz - 32 = 0$$

**Step 1: Auxiliary Function:**
$$F(x, y, z) = S + \\lambda \\phi = (xy + 2xz + 2yz) + \\lambda(xyz - 32)$$

**Step 2: Setting Partial Derivatives to Zero:**
$$\\frac{\\partial F}{\\partial x} = y + 2z + \\lambda yz = 0 \\implies \\lambda = -\\frac{y + 2z}{yz} = -\\frac{1}{z} - \\frac{2}{y} \\quad \\text{--- (1)}$$
$$\\frac{\\partial F}{\\partial y} = x + 2z + \\lambda xz = 0 \\implies \\lambda = -\\frac{x + 2z}{xz} = -\\frac{1}{z} - \\frac{2}{x} \\quad \\text{--- (2)}$$
$$\\frac{\\partial F}{\\partial z} = 2x + 2y + \\lambda xy = 0 \\implies \\lambda = -\\frac{2x + 2y}{xy} = -\\frac{2}{y} - \\frac{2}{x} \\quad \\text{--- (3)}$$

**Step 3: Solving Equations:**
From (1) and (2): $-\\frac{2}{y} = -\\frac{2}{x} \\implies x = y$.
From (1) and (3): $-\\frac{1}{z} = -\\frac{2}{x} \\implies x = 2z \\implies z = \\frac{x}{2}$.
Thus: $x = y = 2z$.

**Step 4: Using Volume Constraint:**
$$xyz = 32 \\implies (2z)(2z)(z) = 32 \\implies 4z^3 = 32 \\implies z^3 = 8 \\implies z = 2 \\text{ ft}$$
$$x = 2(2) = 4 \\text{ ft}, \\quad y = 2(2) = 4 \\text{ ft}.$$

**Final Answer:**
- Length $x = 4 \\text{ ft}$
- Breadth $y = 4 \\text{ ft}$
- Height $z = 2 \\text{ ft}$
- Minimum Surface Area $= (4)(4) + 2(4)(2) + 2(4)(2) = 16 + 16 + 16 = 48 \\text{ ft}^2$.`
  },
  {
    id: 'math1-u2-lagrange-box-variant',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: "Lagrange's Method of Undetermined Multipliers",
    title: 'Lagrange Undetermined Multipliers (Volume 108 Variant)',
    text: "An open rectangular box is to have a volume of $108 \\text{ cm}^3$. Determine the dimensions of the box requiring minimum surface area using Lagrange's method.",
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 2021, 2018',
    solution: `$$\\text{Condition: } x = y = 2z$$
$$V = (2z)(2z)(z) = 4z^3 = 108 \\implies z^3 = 27 \\implies z = 3 \\text{ cm}$$
Dimensions: $x = 6 \\text{ cm}, \\, y = 6 \\text{ cm}, \\, z = 3 \\text{ cm}$.
Minimum Surface Area $= 36 + 36 + 36 = 108 \\text{ cm}^2$.`
  },
  {
    id: 'math1-u2-euler-homogeneous',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: 'Functions of Several Variables & Partial Differentiation',
    title: "Euler's Theorem on Homogeneous Functions",
    text: 'If $u = \\sin^{-1}\\left[\\frac{x + 2y + 3z}{\\sqrt{x^8 + y^8 + z^8}}\\right]$, prove that:\n$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} + z \\frac{\\partial u}{\\partial z} = -3 \\tan u$$',
    marks: 5,
    type: 'derivation',
    difficulty: 'medium',
    recurrence: 'MST-1 Dec 2023, Dec 2021',
    solution: `$$\\sin u = \\frac{x + 2y + 3z}{\\sqrt{x^8 + y^8 + z^8}} = f(x, y, z)$$
$f(x, y, z)$ is homogeneous of degree $n = 1 - 4 = -3$.
By Euler Theorem:
$$x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} + z \\frac{\\partial f}{\\partial z} = -3 f$$
Since $f = \\sin u$: $\\frac{\\partial f}{\\partial x} = \\cos u \\frac{\\partial u}{\\partial x}$, etc.
$$\\cos u \\left[ x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} + z \\frac{\\partial u}{\\partial z} \\right] = -3 \\sin u$$
Dividing by $\\cos u$:
$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} + z \\frac{\\partial u}{\\partial z} = -3 \\tan u \\quad \\text{[Proved!]}$$`
  },
  {
    id: 'math1-u2-euler-tangent-variant',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: 'Functions of Several Variables & Partial Differentiation',
    title: "Euler's Theorem on Tangent Function",
    text: 'If $u = \\tan^{-1}\\left[\\frac{x^3 + y^3}{x - y}\\right]$, show that:\n$$x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\sin(2u)$$',
    marks: 5,
    type: 'derivation',
    difficulty: 'medium',
    recurrence: 'MST-1 2022, 2020',
    solution: `$$f = \\tan u = \\frac{x^3 + y^3}{x - y} \\text{ is homogeneous of degree } n = 3 - 1 = 2.$$
By Euler's Theorem:
$$x \\frac{\\partial f}{\\partial x} + y \\frac{\\partial f}{\\partial y} = 2 \\tan u$$
$$\\sec^2 u \\left[ x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} \\right] = 2 \\tan u \\implies x \\frac{\\partial u}{\\partial x} + y \\frac{\\partial u}{\\partial y} = \\frac{2 \\tan u}{\\sec^2 u} = \\sin(2u) \\quad \\text{[Proved!]}$$`
  },
  {
    id: 'math1-u2-maxima-minima-hessian',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: 'Maxima and Minima of Functions of Two Variables',
    title: 'Maxima and Minima using Hessian Discriminant',
    text: 'Discuss the maxima and minima of the function:\n$$f(x, y) = x^3 + y^3 - 3axy$$\nwhere $a > 0$.',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-1 Dec 2023, 2021',
    solution: `$$f_x = 3x^2 - 3ay = 0, \\quad f_y = 3y^2 - 3ax = 0$$
Stationary points: $(0, 0)$ and $(a, a)$.
$r = 6x, \\, s = -3a, \\, t = 6y \\implies \\Delta = rt - s^2 = 36xy - 9a^2$.
- At $(0, 0)$: $\\Delta = -9a^2 < 0 \\implies$ Saddle point.
- At $(a, a)$: $\\Delta = 27a^2 > 0$ and $r = 6a > 0 \\implies$ Local Minimum.
Minimum value: $f_{\\min} = a^3 + a^3 - 3a^3 = -a^3$.`
  },
  {
    id: 'math1-u2-jacobian-functional-dep',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: 'Jacobians & Functional Dependence',
    title: 'Jacobian Evaluation and Functional Dependence',
    text: 'If $u = \\frac{x + y}{1 - xy}$ and $v = \\tan^{-1} x + \\tan^{-1} y$, evaluate the Jacobian $\\frac{\\partial(u, v)}{\\partial(x, y)}$ and prove that $u$ and $v$ are functionally dependent.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 Nov 2022, 2020',
    solution: `$$\\frac{\\partial u}{\\partial x} = \\frac{1 + y^2}{(1 - xy)^2}, \\quad \\frac{\\partial u}{\\partial y} = \\frac{1 + x^2}{(1 - xy)^2}$$
$$\\frac{\\partial v}{\\partial x} = \\frac{1}{1 + x^2}, \\quad \\frac{\\partial v}{\\partial y} = \\frac{1}{1 + y^2}$$
$$J = \\frac{\\partial(u, v)}{\\partial(x, y)} = \\left(\\frac{1 + y^2}{(1 - xy)^2}\\right)\\left(\\frac{1}{1 + y^2}\\right) - \\left(\\frac{1 + x^2}{(1 - xy)^2}\\right)\\left(\\frac{1}{1 + x^2}\\right) = 0$$
Since $J = 0$, $u$ and $v$ are functionally dependent: $u = \\tan v$.`
  },
  {
    id: 'math1-u2-taylor-two-variables',
    subjectCode: '1RABS1',
    unitNumber: 2,
    chapter: "Taylor's Series for Two Variables",
    title: "Taylor's Series for Two Variables",
    text: "Expand $f(x, y) = e^x \\cos y$ in powers of $x$ and $(y - \\pi/2)$ up to second-degree terms using Taylor's Theorem.",
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 Nov 2021, 2019',
    solution: `$$f(0, \\pi/2) = 0, \\, f_x = 0, \\, f_y = -1, \\, f_{xx} = 0, \\, f_{xy} = -1, \\, f_{yy} = 0$$
Taylor formula gives:
$$e^x \\cos y = -\\left(y - \\frac{\\pi}{2}\\right) - x\\left(y - \\frac{\\pi}{2}\\right) + O(3).$$`
  },

  // --- UNIT 3: Integral Calculus (Beta & Gamma, Curve Tracing, Rectification, Quadrature) ---
  {
    id: 'math1-u3-beta-gamma-relation',
    subjectCode: '1RABS1',
    unitNumber: 3,
    chapter: 'Beta and Gamma Functions with Properties',
    title: 'Relation between Beta and Gamma Functions',
    text: 'State the relation between Beta and Gamma functions: prove that $\\beta(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m + n)}$ where $m > 0, n > 0$. Hence evaluate $\\int_0^{\\pi/2} \\sin^4 \\theta \\cos^6 \\theta \\, d\\theta$.',
    marks: 5,
    type: 'derivation',
    difficulty: 'hard',
    recurrence: 'MST-2 Jan 2024, 2023 (Staple Derivation)',
    solution: `$$\\Gamma(m) = \\int_0^\\infty e^{-x} x^{m-1} dx = 2 \\int_0^\\infty e^{-r^2} r^{2m-1} dr$$
$$\\Gamma(m) \\Gamma(n) = 4 \\int_0^\\infty \\int_0^\\infty e^{-(x^2 + y^2)} x^{2m-1} y^{2n-1} dx dy$$
Converting to polar coordinates $(x = r \\cos \\theta, y = r \\sin \\theta)$:
$$\\Gamma(m) \\Gamma(n) = 4 \\int_0^{\\pi/2} \\cos^{2m-1} \\theta \\sin^{2n-1} \\theta d\\theta \\int_0^\\infty e^{-r^2} r^{2(m+n)-1} dr = \\beta(m, n) \\Gamma(m + n)$$
$$\\implies \\beta(m, n) = \\frac{\\Gamma(m) \\Gamma(n)}{\\Gamma(m + n)} \\quad \\text{[Proved!]}$$

**Evaluation of Integral:**
$$\\int_0^{\\pi/2} \\sin^p \\theta \\cos^q \\theta d\\theta = \\frac{\\Gamma\\left(\\frac{p+1}{2}\\right) \\Gamma\\left(\\frac{q+1}{2}\\right)}{2 \\Gamma\\left(\\frac{p+q+2}{2}\\right)}$$
Here $p = 4, q = 6$:
$$I = \\frac{\\Gamma(5/2) \\Gamma(7/2)}{2 \\Gamma(6)} = \\frac{\\left(\\frac{3}{2} \\cdot \\frac{1}{2} \\sqrt{\\pi}\\right) \\left(\\frac{5}{2} \\cdot \\frac{3}{2} \\cdot \\frac{1}{2} \\sqrt{\\pi}\\right)}{2 \\cdot 120} = \\frac{45 \\pi / 32}{240} = \\frac{3\\pi}{512}.$$`
  },
  {
    id: 'math1-u3-beta-gamma-duplication',
    subjectCode: '1RABS1',
    unitNumber: 3,
    chapter: 'Beta and Gamma Functions with Properties',
    title: 'Legendre Duplication Formula',
    text: "Prove Legendre's Duplication Formula for Gamma Functions:\n$$\\Gamma(m) \\Gamma\\left(m + \\frac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2^{2m-1}} \\Gamma(2m)$$",
    marks: 5,
    type: 'proof',
    difficulty: 'hard',
    recurrence: 'MST-2 Jan 2023, 2021',
    solution: `$$\\beta(m, m) = 2 \\int_0^{\\pi/2} \\sin^{2m-1} \\theta \\cos^{2m-1} \\theta d\\theta = \\frac{2}{2^{2m-1}} \\int_0^{\\pi/2} \\sin^{2m-1}(2\\theta) d\\theta$$
Put $2\\theta = \\phi$:
$$\\beta(m, m) = \\frac{1}{2^{2m-1}} \\int_0^\\pi \\sin^{2m-1}\\phi d\\phi = \\frac{2}{2^{2m-1}} \\int_0^{\\pi/2} \\sin^{2m-1}\\phi d\\phi = \\frac{1}{2^{2m-1}} \\beta\\left(m, \\frac{1}{2}\\right)$$
Using $\\beta(m, n) = \\frac{\\Gamma(m)\\Gamma(n)}{\\Gamma(m+n)}$:
$$\\frac{\\Gamma(m)^2}{\\Gamma(2m)} = \\frac{1}{2^{2m-1}} \\frac{\\Gamma(m) \\Gamma(1/2)}{\\Gamma(m + 1/2)}$$
Since $\\Gamma(1/2) = \\sqrt{\\pi}$:
$$\\Gamma(m) \\Gamma\\left(m + \\frac{1}{2}\\right) = \\frac{\\sqrt{\\pi}}{2^{2m-1}} \\Gamma(2m) \\quad \\text{[Proved!]}$$`
  },
  {
    id: 'math1-u3-rectification-cardioid',
    subjectCode: '1RABS1',
    unitNumber: 3,
    chapter: 'Rectification (Length of Curves)',
    title: 'Perimeter of Cardioid',
    text: 'Find the total perimeter (length of curve) of the cardioid:\n$$r = a(1 + \\cos \\theta)$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-2 Jan 2024, 2022',
    solution: `$$r = a(1 + \\cos \\theta) \\implies \\frac{dr}{d\\theta} = -a \\sin \\theta$$
$$ds = \\sqrt{r^2 + \\left(\\frac{dr}{d\\theta}\\right)^2} d\\theta = \\sqrt{a^2(1 + \\cos\\theta)^2 + a^2\\sin^2\\theta} d\\theta = a\\sqrt{2 + 2\\cos\\theta} d\\theta = 2a \\cos(\\theta/2) d\\theta$$
The cardioid is symmetric about initial line:
$$\\text{Total Length } L = 2 \\int_0^\\pi 2a \\cos(\\theta/2) d\\theta = 4a \\left[ 2 \\sin(\\theta/2) \\right]_0^\\pi = 4a (2 - 0) = 8a.$$`
  },
  {
    id: 'math1-u3-quadrature-astroid',
    subjectCode: '1RABS1',
    unitNumber: 3,
    chapter: 'Quadrature (Area Calculation)',
    title: 'Area of Astroid',
    text: 'Find the whole area enclosed by the astroid:\n$$x^{2/3} + y^{2/3} = a^{2/3}$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-2 2023, 2021',
    solution: `$$\\text{Parametric equations: } x = a \\cos^3 \\theta, \\, y = a \\sin^3 \\theta \\quad (0 \\le \\theta \\le 2\\pi)$$
$$\\text{Total Area } A = 4 \\int_0^{\\pi/2} y \\, dx = 4 \\int_{\\pi/2}^0 (a \\sin^3 \\theta) \\cdot (-3a \\cos^2 \\theta \\sin \\theta) d\\theta = 12a^2 \\int_0^{\\pi/2} \\sin^4 \\theta \\cos^2 \\theta d\\theta$$
Using Beta-Gamma function:
$$\\int_0^{\\pi/2} \\sin^4 \\theta \\cos^2 \\theta d\\theta = \\frac{\\Gamma(5/2) \\Gamma(3/2)}{2 \\Gamma(4)} = \\frac{\\left(\\frac{3}{4} \\sqrt{\\pi}\\right) \\left(\\frac{1}{2} \\sqrt{\\pi}\\right)}{2 \\cdot 6} = \\frac{3\\pi}{96} = \\frac{\\pi}{32}$$
$$A = 12a^2 \\cdot \\frac{\\pi}{32} = \\frac{3}{8} \\pi a^2.$$`
  },

  // --- UNIT 4: Advanced Integral Calculus (Double/Triple Integrals, Change of Order) ---
  {
    id: 'math1-u4-change-order-double-integral',
    subjectCode: '1RABS1',
    unitNumber: 4,
    chapter: 'Change of Order of Integration',
    title: 'Change of Order of Integration',
    text: 'Evaluate the following double integral by changing the order of integration:\n$$\\int_0^1 \\int_{x^2}^{2-x} xy \\, dy \\, dx$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-2 Feb 2024, 2023 (High Recurrence)',
    solution: `**Step 1: Region of Integration:**
Given limits: $x$ goes from $0$ to $1$; $y$ goes from parabola $y = x^2$ to line $y = 2 - x$.
At intersection of $y = x^2$ and $y = 2 - x$: $x^2 + x - 2 = 0 \\implies x = 1, y = 1$.
The region must be divided into two sub-regions along $y$:
1. $R_1$: for $0 \\le y \\le 1$, $x$ varies from $0$ to $\\sqrt{y}$.
2. $R_2$: for $1 \\le y \\le 2$, $x$ varies from $0$ to $2 - y$.

**Step 2: Evaluating $I_1$:**
$$I_1 = \\int_0^1 \\int_0^{\\sqrt{y}} xy \\, dx \\, dy = \\int_0^1 y \\left[ \\frac{x^2}{2} \\right]_0^{\\sqrt{y}} dy = \\frac{1}{2} \\int_0^1 y^2 dy = \\frac{1}{6}$$

**Step 3: Evaluating $I_2$:**
$$I_2 = \\int_1^2 \\int_0^{2-y} xy \\, dx \\, dy = \\int_1^2 y \\left[ \\frac{(2-y)^2}{2} \\right] dy = \\frac{1}{2} \\int_1^2 (4y - 4y^2 + y^3) dy$$
$$= \\frac{1}{2} \\left[ 2y^2 - \\frac{4}{3}y^3 + \\frac{y^4}{4} \\right]_1^2 = \\frac{1}{2} \\left[ \\left(8 - \\frac{32}{3} + 4\\right) - \\left(2 - \\frac{4}{3} + \\frac{1}{4}\\right) \\right] = \\frac{5}{24}$$

**Step 4: Total Integral:**
$$I = I_1 + I_2 = \\frac{1}{6} + \\frac{5}{24} = \\frac{9}{24} = \\frac{3}{8}.$$`
  },
  {
    id: 'math1-u4-double-integral-dirichlet',
    subjectCode: '1RABS1',
    unitNumber: 4,
    chapter: 'Double Integrals and Area Evaluation',
    title: 'Double Integral over Ellipse',
    text: 'Evaluate $\\iint_R xy(x + y) \\, dx \\, dy$ over the region $R$ in the positive quadrant bounded by the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$.',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-2 2023, 2021',
    solution: `$$\\text{Substitute } x = ar \\cos \\theta, \\, y = br \\sin \\theta, \\quad J = abr$$
Limits: $r$ from $0$ to $1$, $\\theta$ from $0$ to $\\pi/2$.
$$I = \\int_0^{\\pi/2} \\int_0^1 (ar \\cos \\theta)(br \\sin \\theta)(ar \\cos \\theta + br \\sin \\theta) \\cdot (abr \\, dr \\, d\\theta)$$
$$= a^2 b^2 \\int_0^1 r^4 dr \\int_0^{\\pi/2} \\sin \\theta \\cos \\theta (a \\cos \\theta + b \\sin \\theta) d\\theta$$
$$= \\frac{a^2 b^2}{5} \\left[ a \\int_0^{\\pi/2} \\sin \\theta \\cos^2 \\theta d\\theta + b \\int_0^{\\pi/2} \\sin^2 \\theta \\cos \\theta d\\theta \\right] = \\frac{a^2 b^2}{5} \\left[ \\frac{a}{3} + \\frac{b}{3} \\right] = \\frac{a^2 b^2 (a + b)}{15}.$$`
  },
  {
    id: 'math1-u4-triple-integral-sphere',
    subjectCode: '1RABS1',
    unitNumber: 4,
    chapter: 'Triple Integrals and Volume Evaluation',
    title: 'Triple Integral in Spherical Coordinates',
    text: 'Evaluate $\\iiint_V (x^2 + y^2 + z^2) \\, dx \\, dy \\, dz$ throughout the volume of the sphere $x^2 + y^2 + z^2 \\le a^2$ using spherical polar coordinates.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-2 2022, 2020',
    solution: `$$\\text{In spherical coordinates: } dx dy dz = r^2 \\sin \\phi \\, dr \\, d\\theta \\, d\\phi, \\quad x^2 + y^2 + z^2 = r^2$$
Limits: $r \\in [0, a], \\, \\theta \\in [0, 2\\pi], \\, \\phi \\in [0, \\pi]$.
$$I = \\int_0^a r^4 dr \\int_0^{2\\pi} d\\theta \\int_0^\\pi \\sin \\phi \\, d\\phi = \\left[ \\frac{a^5}{5} \\right] \\cdot [2\\pi] \\cdot [2] = \\frac{4\\pi a^5}{5}.$$`
  },

  // --- UNIT 5: Differential Equations & Linear Algebra (For MST-3 & Comprehensive) ---
  {
    id: 'math1-u5-variation-of-parameters',
    subjectCode: '1RABS1',
    unitNumber: 5,
    chapter: 'Higher Order Linear Differential Equations',
    title: 'Method of Variation of Parameters',
    text: 'Solve the differential equation by the Method of Variation of Parameters:\n$$\\frac{d^2y}{dx^2} + y = \\sec x$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-3 Mar 2024, 2023 (Standard Problem)',
    solution: `$$\\text{Auxiliary Equation: } m^2 + 1 = 0 \\implies m = \\pm i$$
$$y_c = c_1 \\cos x + c_2 \\sin x \\implies y_1 = \\cos x, \\, y_2 = \\sin x$$
**Wronskian:**
$$W(y_1, y_2) = \\begin{vmatrix} \\cos x & \\sin x \\\\ -\\sin x & \\cos x \\end{vmatrix} = \\cos^2 x + \\sin^2 x = 1 \\neq 0$$
**Particular Integral $y_p = u y_1 + v y_2$:**
$$u = -\\int \\frac{y_2 X}{W} dx = -\\int \\frac{\\sin x \\sec x}{1} dx = -\\int \\tan x \\, dx = \\ln|\\cos x|$$
$$v = \\int \\frac{y_1 X}{W} dx = \\int \\frac{\\cos x \\sec x}{1} dx = \\int 1 \\, dx = x$$
$$y_p = \\ln|\\cos x| \\cos x + x \\sin x$$
**General Solution:**
$$y = c_1 \\cos x + c_2 \\sin x + \\cos x \\ln|\\cos x| + x \\sin x.$$`
  },
  {
    id: 'math1-u5-cauchy-euler-equation',
    subjectCode: '1RABS1',
    unitNumber: 5,
    chapter: 'Higher Order Linear Differential Equations',
    title: 'Cauchy-Euler Homogeneous Linear Equation',
    text: 'Solve the Cauchy-Euler differential equation:\n$$x^2 \\frac{d^2y}{dx^2} - 2x \\frac{dy}{dx} - 4y = x^2 + 2 \\log x$$',
    marks: 5,
    type: 'numerical',
    difficulty: 'hard',
    recurrence: 'MST-3 2023, 2021',
    solution: `$$\\text{Substitute } x = e^z \\implies z = \\ln x, \\quad x \\frac{dy}{dx} = D y, \\quad x^2 \\frac{d^2y}{dx^2} = D(D-1)y$$
Equation transforms to:
$$[D(D-1) - 2D - 4]y = e^{2z} + 2z \\implies (D^2 - 3D - 4)y = e^{2z} + 2z$$
**Auxiliary Equation:**
$$m^2 - 3m - 4 = (m - 4)(m + 1) = 0 \\implies m = 4, -1$$
$$y_c = c_1 e^{4z} + c_2 e^{-z} = c_1 x^4 + c_2 x^{-1}$$
**Particular Integrals:**
- For $e^{2z}$: $y_{p1} = \\frac{1}{D^2 - 3D - 4} e^{2z} = \\frac{1}{4 - 6 - 4} e^{2z} = -\\frac{1}{6} x^2$.
- For $2z$: $y_{p2} = -\\frac{1}{4} \\left( 1 - \\frac{3D}{4} \\right)^{-1} (2z) = -\\frac{1}{4} \\left( 2z + \\frac{3}{2} \\right) = -\\frac{1}{2} \\ln x - \\frac{3}{8}$.
**General Solution:**
$$y = c_1 x^4 + \\frac{c_2}{x} - \\frac{1}{6} x^2 - \\frac{1}{2} \\ln x - \\frac{3}{8}.$$`
  },
  {
    id: 'math1-u5-cayley-hamilton-matrix',
    subjectCode: '1RABS1',
    unitNumber: 5,
    chapter: 'Rank of Matrix & Systems of Linear Equations',
    title: 'Cayley-Hamilton Theorem & Inverse Matrix',
    text: 'State the Cayley-Hamilton Theorem. Verify it for the matrix $A = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix}$ and hence compute $A^{-1}$ and $A^3$.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-3 2024, 2022',
    solution: `**Statement:** Every square matrix satisfies its own characteristic equation $|A - \\lambda I| = 0$.
Characteristic Equation:
$$|A - \\lambda I| = \\begin{vmatrix} 1 - \\lambda & 2 \\\\ 3 & 4 - \\lambda \\end{vmatrix} = \\lambda^2 - 5\\lambda - 2 = 0$$
Verification: $A^2 - 5A - 2I$:
$$A^2 = \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} \\begin{bmatrix} 1 & 2 \\\\ 3 & 4 \\end{bmatrix} = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix}$$
$$A^2 - 5A - 2I = \\begin{bmatrix} 7 & 10 \\\\ 15 & 22 \\end{bmatrix} - \\begin{bmatrix} 5 & 10 \\\\ 15 & 20 \\end{bmatrix} - \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} \\quad [\\text{Verified!}]$$
Computation of $A^{-1}$:
$$A^2 - 5A - 2I = 0 \\implies 2A^{-1} = A - 5I \\implies A^{-1} = \\frac{1}{2}(A - 5I) = \\frac{1}{2} \\begin{bmatrix} -4 & 2 \\\\ 3 & -1 \\end{bmatrix} = \\begin{bmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{bmatrix}.$$`
  },

  // =========================================================================
  // 1RABS2: Applied Physics (Authentic IET DAVV Mid-Semester PYQs)
  // =========================================================================
  {
    id: 'phys-u1-newtons-rings',
    subjectCode: '1RABS2',
    unitNumber: 1,
    chapter: 'Interference & Thin Films',
    title: "Newton's Rings Diameter & Wavelength",
    text: "In a Newton's rings experiment, the diameter of the $4^{\\text{th}}$ dark ring is $0.40 \\text{ cm}$ and that of the $16^{\\text{th}}$ dark ring is $0.70 \\text{ cm}$. Find the radius of curvature of the plano-convex lens if light of wavelength $\\lambda = 5890 \\text{ \\AA}$ is used.",
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 2023, 2022',
    solution: `$$\\text{Formula for dark rings: } D_{n+p}^2 - D_n^2 = 4p \\lambda R$$
Here $n = 4, \\, n+p = 16 \\implies p = 12$.
$$D_{16} = 0.70 \\text{ cm} \\implies D_{16}^2 = 0.49 \\text{ cm}^2$$
$$D_4 = 0.40 \\text{ cm} \\implies D_4^2 = 0.16 \\text{ cm}^2$$
$$D_{16}^2 - D_4^2 = 0.49 - 0.16 = 0.33 \\text{ cm}^2$$
$$\\lambda = 5890 \\times 10^{-8} \\text{ cm}$$
$$R = \\frac{D_{16}^2 - D_4^2}{4p \\lambda} = \\frac{0.33}{4 \\times 12 \\times 5890 \\times 10^{-8}} = \\frac{0.33}{48 \\times 5.89 \\times 10^{-5}} \\approx 116.7 \\text{ cm} = 1.167 \\text{ m}.$$`
  },
  {
    id: 'phys-u2-laser-ruby',
    subjectCode: '1RABS2',
    unitNumber: 2,
    chapter: 'Lasers & Optical Fiber',
    title: 'Ruby Laser Population Inversion',
    text: 'Explain the working of a Ruby Laser with an energy level diagram. Calculate the coherence length and coherence time for a laser beam having a spectral linewidth $\\Delta\\lambda = 0.01 \\text{ nm}$ at $\\lambda = 632.8 \\text{ nm}$.',
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 2023, 2021',
    solution: `$$\\Delta\\nu = \\frac{c \\Delta\\lambda}{\\lambda^2} = \\frac{(3 \\times 10^8) \\times (10^{-11})}{(632.8 \\times 10^{-9})^2} = \\frac{3 \\times 10^{-3}}{4.004 \\times 10^{-13}} \\approx 7.49 \\times 10^9 \\text{ Hz}$$
$$\\text{Coherence Time } \\tau_c = \\frac{1}{\\Delta\\nu} \\approx 1.33 \\times 10^{-10} \\text{ s}$$
$$\\text{Coherence Length } L_c = c \\tau_c = (3 \\times 10^8) \\times (1.33 \\times 10^{-10}) = 0.04 \\text{ m} = 4.0 \\text{ cm}.$$`
  },

  // =========================================================================
  // 1RAEE1: Basic Electrical & Electronics Engineering
  // =========================================================================
  {
    id: 'bee-u1-thevenin-circuit',
    subjectCode: '1RAEE1',
    unitNumber: 1,
    chapter: 'DC Circuits & Theorems',
    title: "Thevenin's Theorem Numerical",
    text: "Find the load current $I_L$ passing through the $10\\,\\Omega$ load resistor connected between terminals A and B using Thevenin's Theorem for a circuit with $V_s = 50\\text{ V}$, $R_1 = 20\\,\\Omega$, $R_2 = 30\\,\\Omega$, and $R_3 = 10\\,\\Omega$.",
    marks: 5,
    type: 'numerical',
    difficulty: 'medium',
    recurrence: 'MST-1 2023, 2022',
    solution: `**Step 1: Thevenin Voltage $V_{th}$:**
$$V_{th} = V_s \\cdot \\frac{R_2}{R_1 + R_2} = 50 \\cdot \\frac{30}{20 + 30} = 30\\text{ V}$$
**Step 2: Thevenin Resistance $R_{th}$:**
$$R_{th} = (R_1 \\parallel R_2) + R_3 = \\frac{20 \\times 30}{20 + 30} + 10 = 12 + 10 = 22\\,\\Omega$$
**Step 3: Load Current $I_L$:**
$$I_L = \\frac{V_{th}}{R_{th} + R_L} = \\frac{30}{22 + 10} = \\frac{30}{32} = 0.9375\\text{ A}.$$`
  }
];

export function getRealPyqsForSubject(subjectCode: string): PyqItem[] {
  return REAL_IET_PYQS.filter(p => p.subjectCode === subjectCode);
}

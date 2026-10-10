/**
 * Generates a high-resolution base64 image representing an authentic
 * physical IET DAVV Mid-Semester Test question paper for testing the image extraction flow.
 */
export function getSampleIetDavvPaperBase64(): string {
  // SVG representation rendered onto canvas or returned as SVG data-url/jpeg
  // SVG has crisp typography simulating an authentic IET DAVV exam sheet
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="1100" viewBox="0 0 800 1100" style="background:#fdfcf9;font-family:serif;">
    <rect width="800" height="1100" fill="#fcfbf7"/>
    <!-- Exam Header Border -->
    <rect x="25" y="25" width="750" height="1050" fill="none" stroke="#222" stroke-width="2"/>
    
    <!-- Header Text -->
    <text x="400" y="65" font-size="20" font-weight="bold" text-anchor="middle" fill="#111">INSTITUTE OF ENGINEERING &amp; TECHNOLOGY</text>
    <text x="400" y="90" font-size="16" font-weight="bold" text-anchor="middle" fill="#222">DEVI AHILYA VISHWAVIDYALAYA, INDORE (M.P.)</text>
    <text x="400" y="115" font-size="14" font-weight="bold" text-anchor="middle" fill="#333">MID SEMESTER TEST - I (DECEMBER 2023)</text>
    <text x="400" y="135" font-size="13" text-anchor="middle" fill="#444">B.Tech. I Year (All Branches) · Applied Mathematics - I (1RABS1)</text>
    
    <line x1="45" y1="150" x2="755" y2="150" stroke="#333" stroke-width="1.5"/>
    
    <!-- Meta info -->
    <text x="50" y="175" font-size="12" font-weight="bold" fill="#222">Time: 1 Hour</text>
    <text x="350" y="175" font-size="12" font-weight="bold" fill="#222">Roll No: [______________]</text>
    <text x="670" y="175" font-size="12" font-weight="bold" fill="#222">Max. Marks: 20</text>
    
    <line x1="45" y1="190" x2="755" y2="190" stroke="#333" stroke-width="1"/>
    
    <!-- Note -->
    <text x="50" y="210" font-size="11" font-style="italic" fill="#444">Note: Attempt all questions. Each question carries 5 marks. Use of scientific calculator is permitted.</text>
    
    <!-- Q.1 -->
    <text x="50" y="250" font-size="14" font-weight="bold" fill="#111">Q.1</text>
    <text x="90" y="250" font-size="13" fill="#111">If y = (sin⁻¹ x)², prove that:</text>
    <text x="90" y="275" font-size="13" font-weight="bold" fill="#111">(1 - x²) yₙ₊₂ - (2n + 1) x yₙ₊₁ - n² yₙ = 0</text>
    <text x="90" y="300" font-size="13" fill="#111">Hence, find the value of (yₙ)₀ at x = 0.</text>
    <text x="710" y="250" font-size="13" font-weight="bold" fill="#222">[5 Marks]</text>
    
    <line x1="50" y1="330" x2="750" y2="330" stroke="#ddd" stroke-width="1"/>
    
    <!-- Q.2 -->
    <text x="50" y="370" font-size="14" font-weight="bold" fill="#111">Q.2</text>
    <text x="90" y="370" font-size="13" fill="#111">Find all the asymptotes of the following cubic curve:</text>
    <text x="90" y="400" font-size="14" font-weight="bold" fill="#111">x³ + 2x²y - xy² - 2y³ + 4y² + 2xy + y - 1 = 0</text>
    <text x="710" y="370" font-size="13" font-weight="bold" fill="#222">[5 Marks]</text>
    
    <line x1="50" y1="440" x2="750" y2="440" stroke="#ddd" stroke-width="1"/>
    
    <!-- Q.3 -->
    <text x="50" y="480" font-size="14" font-weight="bold" fill="#111">Q.3</text>
    <text x="90" y="480" font-size="13" fill="#111">A rectangular box open at the top is to have a volume of 32 cu. ft.</text>
    <text x="90" y="505" font-size="13" fill="#111">Find the dimensions of the box which requires the least amount of</text>
    <text x="90" y="530" font-size="13" fill="#111">material for its construction using Lagrange's method of undetermined multipliers.</text>
    <text x="710" y="480" font-size="13" font-weight="bold" fill="#222">[5 Marks]</text>
    
    <line x1="50" y1="570" x2="750" y2="570" stroke="#ddd" stroke-width="1"/>
    
    <!-- Q.4 -->
    <text x="50" y="610" font-size="14" font-weight="bold" fill="#111">Q.4</text>
    <text x="90" y="610" font-size="13" fill="#111">If u = sin⁻¹[(x + 2y + 3z) / √(x⁸ + y⁸ + z⁸)], prove by Euler's Theorem that:</text>
    <text x="90" y="640" font-size="14" font-weight="bold" fill="#111">x(∂u/∂x) + y(∂u/∂y) + z(∂u/∂z) = -3 tan u</text>
    <text x="710" y="610" font-size="13" font-weight="bold" fill="#222">[5 Marks]</text>
    
    <line x1="45" y1="700" x2="755" y2="700" stroke="#222" stroke-width="1.5"/>
    <text x="400" y="730" font-size="11" text-anchor="middle" fill="#666">*** END OF QUESTION PAPER ***</text>
    <text x="400" y="750" font-size="10" text-anchor="middle" fill="#888">Institute of Engineering &amp; Technology, DAVV Indore (M.P.) - Examination Branch</text>
  </svg>`;

  return `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(svg)))}`;
}

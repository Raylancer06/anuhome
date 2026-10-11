/**
 * ANUKUL Client Presentation Navigation Bar
 * Adds a luxury floating presentation switcher, reading progress bar, 
 * and smooth back-to-top button across all 5 homepage concept designs.
 */
(function () {
  // Determine current active concept
  const path = window.location.pathname.toLowerCase();
  let currentConcept = 1;
  if (path.includes('home2')) currentConcept = 2;
  else if (path.includes('home3')) currentConcept = 3;
  else if (path.includes('home4')) currentConcept = 4;
  else if (path.includes('home5')) currentConcept = 5;

  const conceptNames = {
    1: 'Concept 1: Architectural Grid',
    2: 'Concept 2: Centered Sanctuary',
    3: 'Concept 3: Monastic Balance',
    4: 'Concept 4: Overlapping Monograph',
    5: 'Concept 5: Nocturnal Gold'
  };

  const nextConcept = currentConcept < 5 ? currentConcept + 1 : 1;
  const prevConcept = currentConcept > 1 ? currentConcept - 1 : 5;

  // 1. Inject Top Reading Progress Bar
  const progressBar = document.createElement('div');
  progressBar.id = 'client-reading-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #B38A3E, #C66A22, #DFBE7B);
    z-index: 999999;
    transition: width 0.1s ease-out;
    pointer-events: none;
    box-shadow: 0 1px 4px rgba(179, 138, 62, 0.4);
  `;
  document.body.appendChild(progressBar);

  // 2. Inject Floating Presentation Bar
  const navContainer = document.createElement('div');
  navContainer.id = 'client-presentation-pill';
  navContainer.style.cssText = `
    position: fixed;
    bottom: 24px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99999;
    font-family: 'Manrope', system-ui, -apple-system, sans-serif;
    user-select: none;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;

  navContainer.innerHTML = `
    <div id="client-nav-inner" style="
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 14px;
      background: rgba(14, 41, 31, 0.94);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(197, 160, 89, 0.35);
      border-radius: 9999px;
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(255, 255, 255, 0.05);
      color: #F7F1E3;
    ">
      <!-- Portal Link -->
      <a href="index.html" title="Back to All 5 Concepts Showcase" style="
        display: flex;
        align-items: center;
        gap: 5px;
        padding: 5px 11px;
        border-radius: 9999px;
        background: rgba(179, 138, 62, 0.2);
        border: 1px solid rgba(179, 138, 62, 0.4);
        color: #DFBE7B;
        font-size: 11px;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        text-decoration: none;
        transition: background 0.2s;
      " onmouseover="this.style.background='rgba(179,138,62,0.35)'" onmouseout="this.style.background='rgba(179,138,62,0.2)'">
        <span style="font-size: 13px;">⊞</span> Overview
      </a>

      <div style="height: 16px; width: 1px; background: rgba(197, 160, 89, 0.25);"></div>

      <!-- Concept Number Switcher -->
      <div style="display: flex; align-items: center; gap: 4px;">
        <span style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.12em; color: rgba(247, 241, 227, 0.6); margin-right: 4px; font-weight: 600;">Concept</span>
        ${[1, 2, 3, 4, 5].map(num => `
          <a href="home${num}.html" title="${conceptNames[num]}" style="
            display: flex;
            align-items: center;
            justify-content: center;
            width: 27px;
            height: 27px;
            border-radius: 50%;
            font-size: 12px;
            font-weight: 700;
            text-decoration: none;
            transition: all 0.2s;
            ${num === currentConcept ? `
              background: #C5A059;
              color: #0E291F;
              box-shadow: 0 0 10px rgba(197, 160, 89, 0.5);
              border: 1px solid #DFBE7B;
            ` : `
              background: rgba(255, 255, 255, 0.06);
              color: rgba(247, 241, 227, 0.8);
              border: 1px solid rgba(255, 255, 255, 0.08);
            `}
          " onmouseover="${num !== currentConcept ? "this.style.background='rgba(197, 160, 89, 0.3)'; this.style.color='#fff';" : ''}"
             onmouseout="${num !== currentConcept ? "this.style.background='rgba(255, 255, 255, 0.06)'; this.style.color='rgba(247, 241, 227, 0.8)';" : ''}">
            ${num}
          </a>
        `).join('')}
      </div>

      <div style="height: 16px; width: 1px; background: rgba(197, 160, 89, 0.25);"></div>

      <!-- Next Concept Button -->
      <a href="home${nextConcept}.html" title="View Next Concept (${nextConcept})" style="
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 5px 10px;
        border-radius: 9999px;
        background: rgba(255, 255, 255, 0.08);
        color: #F7F1E3;
        font-size: 11px;
        font-weight: 600;
        text-decoration: none;
        transition: background 0.2s;
      " onmouseover="this.style.background='rgba(197, 160, 89, 0.25)'" onmouseout="this.style.background='rgba(255, 255, 255, 0.08)'">
        Next →
      </a>

      <!-- Minimize Button -->
      <button id="client-nav-minimize" title="Minimize presentation bar" style="
        background: none;
        border: none;
        color: rgba(247, 241, 227, 0.5);
        cursor: pointer;
        padding: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        margin-left: 2px;
      " onmouseover="this.style.color='#DFBE7B'" onmouseout="this.style.color='rgba(247, 241, 227, 0.5)'">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
      </button>
    </div>

    <!-- Minimized Floating Bubble -->
    <div id="client-nav-minimized" style="
      display: none;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: rgba(14, 41, 31, 0.94);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(197, 160, 89, 0.4);
      border-radius: 9999px;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
      color: #DFBE7B;
      font-size: 11px;
      font-weight: 700;
      cursor: pointer;
    ">
      <span>Concept ${currentConcept} of 5</span>
      <span style="font-size: 12px; opacity: 0.8;">▲</span>
    </div>
  `;

  document.body.appendChild(navContainer);

  // Toggle minimize logic
  const innerNav = document.getElementById('client-nav-inner');
  const minimizedNav = document.getElementById('client-nav-minimized');
  const minBtn = document.getElementById('client-nav-minimize');

  minBtn.onclick = () => {
    innerNav.style.display = 'none';
    minimizedNav.style.display = 'flex';
  };

  minimizedNav.onclick = () => {
    minimizedNav.style.display = 'none';
    innerNav.style.display = 'flex';
  };

  // 3. Inject Floating Back to Top Button with Circular Progress
  const backToTopBtn = document.createElement('button');
  backToTopBtn.id = 'client-back-to-top';
  backToTopBtn.title = 'Back to top';
  backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(14, 41, 31, 0.94);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(197, 160, 89, 0.4);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
    color: #DFBE7B;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 99998;
    opacity: 0;
    pointer-events: none;
    transform: translateY(10px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  `;
  backToTopBtn.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="18 15 12 9 6 15"></polyline>
    </svg>
  `;
  document.body.appendChild(backToTopBtn);

  backToTopBtn.onclick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 4. Track Scroll Position
  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

    // Update reading progress line
    progressBar.style.width = `${scrollPercent}%`;

    // Show/hide back to top button
    if (scrollTop > 350) {
      backToTopBtn.style.opacity = '1';
      backToTopBtn.style.pointerEvents = 'auto';
      backToTopBtn.style.transform = 'translateY(0)';
    } else {
      backToTopBtn.style.opacity = '0';
      backToTopBtn.style.pointerEvents = 'none';
      backToTopBtn.style.transform = 'translateY(10px)';
    }
  });

  // Ensure smooth scroll on page
  document.documentElement.style.scrollBehavior = 'smooth';
})();

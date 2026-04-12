// =====================================================
// Campus Life Super App — script.js
// All event-driven JavaScript for the app
// =====================================================

// ── DATA: Campus Events ──────────────────────────────
const campusEvents = [
  { id: 1, title: "Jazz Night", category: "Arts",     date: "2026-04-18", time: "7:00 PM",  location: "Student Union Ballroom",   emoji: "🎷" },
  { id: 2, title: "Spring Career Fair", category: "Career",   date: "2026-04-22", time: "10:00 AM", location: "Gymnasium, Building A",    emoji: "💼" },
  { id: 3, title: "Volleyball Tournament", category: "Sports",   date: "2026-04-19", time: "1:00 PM",  location: "Rec Center Courts",        emoji: "🏐" },
  { id: 4, title: "AI & Society Symposium", category: "Academic", date: "2026-04-24", time: "2:00 PM",  location: "Lecture Hall 101",          emoji: "🤖" },
  { id: 5, title: "Spring Fling Block Party", category: "Social",   date: "2026-04-26", time: "12:00 PM", location: "Main Quad",                emoji: "🎉" },
  { id: 6, title: "Study Abroad Info Session", category: "Academic", date: "2026-04-21", time: "4:30 PM",  location: "International Center",     emoji: "✈️" }
];

// ── DATA: Dining Locations ───────────────────────────
const diningLocations = [
  { name: "Main Dining Hall", icon: "🍽️", isOpen: true,  hours: "Mon–Thu 7AM–9PM · Fri 7AM–8PM · Sat–Sun 10AM–7PM" },
  { name: "The Grounds",      icon: "☕", isOpen: true,  hours: "Mon–Fri 7AM–8PM · Sat–Sun 8AM–5PM" },
  { name: "Science Café",     icon: "🥪", isOpen: false, hours: "Mon–Fri 8AM–3PM · Closed weekends" },
  { name: "Late Night Grill", icon: "🌮", isOpen: true,  hours: "Mon–Thu 9PM–2AM · Fri–Sat 9PM–3AM" }
];

// ── DATA: Library Study Rooms ────────────────────────
const libraryRooms = [
  { id: "LIB-101", capacity: 4,  available: true  },
  { id: "LIB-204", capacity: 8,  available: false },
  { id: "LIB-305", capacity: 2,  available: true  },
  { id: "LIB-410", capacity: 10, available: false },
  { id: "LIB-502", capacity: 4,  available: true  },
  { id: "LIB-612", capacity: 6,  available: true  }
];

// ── DATA: Campus Buildings (for map) ─────────────────
const buildings = [
  { id: 1,  name: "Science Hall",    cat: "academic",   icon: "🔬", desc: "Home of Biology, Chemistry, and Physics departments. Lab hours 8AM–10PM.", hours: "8AM–10PM" },
  { id: 2,  name: "Main Library",    cat: "academic",   icon: "📚", desc: "5 floors of study space, 40+ academic databases, and media center.", hours: "7AM–Midnight" },
  { id: 3,  name: "Arts Center",     cat: "academic",   icon: "🎨", desc: "Theater, music practice rooms, gallery, and art studios.", hours: "8AM–9PM" },
  { id: 4,  name: "Business Hall",   cat: "academic",   icon: "💼", desc: "Finance, Marketing, and Entrepreneurship programs. Bloomberg terminals available.", hours: "8AM–8PM" },
  { id: 5,  name: "North Dorms",     cat: "housing",    icon: "🏠", desc: "Freshmen residence hall. Features study lounges, laundry, and dining access.", hours: "24/7" },
  { id: 6,  name: "South Dorms",     cat: "housing",    icon: "🏠", desc: "Upperclassman suites with kitchenettes. Single and double rooms available.", hours: "24/7" },
  { id: 7,  name: "East Village",    cat: "housing",    icon: "🏠", desc: "Graduate and upperclassman apartments. Fully furnished.", hours: "24/7" },
  { id: 8,  name: "Main Dining Hall",cat: "dining",     icon: "🍽️", desc: "All-you-can-eat dining with vegan, halal, and gluten-free options.", hours: "7AM–9PM" },
  { id: 9,  name: "The Grounds",     cat: "dining",     icon: "☕", desc: "Coffee shop and café. Sandwiches, pastries, specialty drinks.", hours: "7AM–8PM" },
  { id: 10, name: "Rec Center",      cat: "recreation", icon: "🏋️", desc: "Gym, indoor pool, basketball courts, climbing wall, and fitness classes.", hours: "6AM–11PM" },
  { id: 11, name: "Student Union",   cat: "recreation", icon: "🏛️", desc: "Hub for student clubs, employment services, and campus events.", hours: "8AM–10PM" }
];

// ── DATA: Job Listings ───────────────────────────────
const jobListings = [
  { id: 1, title: "Library Research Assistant",    dept: "Main Library",          type: "work-study",  pay: "$14/hr",  hours: "10–15 hrs/wk",  desc: "Help students navigate research databases and assist with reference inquiries." },
  { id: 2, title: "Campus Tour Guide",             dept: "Admissions Office",     type: "part-time",   pay: "$15/hr",  hours: "8–12 hrs/wk",   desc: "Lead prospective students and families on engaging campus tours." },
  { id: 3, title: "Dining Hall Staff",             dept: "Campus Dining",         type: "work-study",  pay: "$13/hr",  hours: "12–20 hrs/wk",  desc: "Assist with food service, cashiering, and maintaining dining area." },
  { id: 4, title: "Undergraduate Research Fellow", dept: "Biology Dept.",         type: "research",    pay: "$16/hr",  hours: "8–10 hrs/wk",   desc: "Support ongoing lab research projects. Science background required." },
  { id: 5, title: "IT Help Desk Technician",       dept: "Information Technology",type: "part-time",   pay: "$16/hr",  hours: "15 hrs/wk",     desc: "Provide technical support to students and faculty for hardware/software issues." },
  { id: 6, title: "Peer Academic Tutor",           dept: "Academic Success Center",type: "volunteer",  pay: "Volunteer", hours: "Flexible",    desc: "Tutor fellow students in your area of expertise. Earn community hours." }
];

// ── DATA: Employment FAQ ─────────────────────────────
const faqs = [
  { q: "Who is eligible for work-study jobs?",      a: "Students who demonstrate financial need through FAFSA are eligible for work-study positions. You must maintain enrollment of at least 6 credit hours." },
  { q: "How many hours can I work per week?",        a: "Most student positions allow 10–20 hours per week during the semester, and up to 40 hours per week during breaks." },
  { q: "When do I get paid?",                        a: "Student employees are paid bi-weekly via direct deposit. Paychecks are issued every other Friday." },
  { q: "Can I hold more than one campus job?",       a: "Yes, but combined hours cannot exceed 20 per week during the academic semester." },
  { q: "How do I apply?",                            a: "Click 'Apply Now' on any job listing, fill out the application, and the department will contact you within 5 business days." }
];

// ── DATA: Clubs ──────────────────────────────────────
const clubs = [
  { name: "Computer Science Society",   cat: "Academic",  icon: "💻", desc: "Hackathons, workshops, and networking for CS students.", members: 140 },
  { name: "Alpha Phi Omega",            cat: "Greek",     icon: "🏛️", desc: "Co-ed service fraternity focused on leadership and community.", members: 60 },
  { name: "Women's Soccer",             cat: "Athletics", icon: "⚽", desc: "Competitive NCAA Division III women's soccer team.", members: 28 },
  { name: "Environmental Action Club",  cat: "Service",   icon: "🌱", desc: "Campus sustainability initiatives and community clean-ups.", members: 85 },
  { name: "Jazz Ensemble",              cat: "Arts",      icon: "🎷", desc: "Student jazz band performing on and off campus.", members: 22 },
  { name: "Pre-Med Association",        cat: "Academic",  icon: "🩺", desc: "MCAT prep, hospital shadowing, and guest lectures.", members: 200 },
  { name: "Anime & Manga Club",         cat: "Social",    icon: "🎌", desc: "Weekly screenings, cosplay events, and art workshops.", members: 55 },
  { name: "Men's Basketball",           cat: "Athletics", icon: "🏀", desc: "Intramural and club basketball. Open tryouts each fall.", members: 18 },
  { name: "Photography Collective",     cat: "Arts",      icon: "📸", desc: "Photo walks, darkroom access, and gallery exhibitions.", members: 40 }
];

// ── DATA: Tryouts ────────────────────────────────────
const tryouts = [
  { sport: "⚽", name: "Women's Soccer",      date: "Aug 28 · 3:00 PM",    location: "South Athletic Field",  detail: "Bring cleats and shin guards. Fitness assessment included." },
  { sport: "🏀", name: "Men's Basketball",    date: "Sep 3 · 4:00 PM",     location: "Rec Center Gym A",      detail: "Must be enrolled full-time. Bring student ID." },
  { sport: "🎭", name: "Drama Society",       date: "Sep 6 · 6:00 PM",     location: "Arts Center Stage",     detail: "Prepare a 2-minute monologue. No experience required." },
  { sport: "🎷", name: "Jazz Ensemble",       date: "Sep 5 · 5:00 PM",     location: "Music Hall, Room 12",   detail: "Bring your instrument. Sight-reading test included." },
  { sport: "🏐", name: "Intramural Volleyball",date: "Sep 10 · 1:00 PM",   location: "Rec Center Courts",     detail: "Open to all skill levels. Teams of 6." },
  { sport: "🤺", name: "Fencing Club",        date: "Sep 8 · 3:30 PM",     location: "Rec Center Studio",     detail: "No experience needed. Equipment provided." }
];

// =====================================================
// PAGE INIT — detect which page and initialize
// =====================================================
document.addEventListener("DOMContentLoaded", () => {
  const page = window.location.pathname.split("/").pop() || "index.html";

  // Highlight active sidebar link on scroll (resources page)
  if (page === "resources.html") {
    initResourcesPage();
    setupSidebarScroll();
  } else if (page === "map.html") {
    initMapPage();
  } else if (page === "employment.html") {
    initEmploymentPage();
  } else if (page === "clubs.html") {
    initClubsPage();
  } else {
    // index.html
    initHomePage();
  }
});

// =====================================================
// HOME PAGE
// =====================================================
function initHomePage() {
  setupContactForm();
  setupLiveChat();
}

/* Contact form — event-driven submit */
function setupContactForm() {
  const btn = document.getElementById("sendContactBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const name  = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const msg   = document.getElementById("contactMsg").value.trim();

    if (!name || !email || !msg) {
      showToast("⚠️ Please fill in all fields.");
      return;
    }

    // Simulate form submission (API placeholder)
    showToast(`✅ Message sent! We'll reply to ${email} within 1 business day.`);
    document.getElementById("contactName").value  = "";
    document.getElementById("contactEmail").value = "";
    document.getElementById("contactMsg").value   = "";
  });
}

/* Live chat widget — event-driven messaging */
function setupLiveChat() {
  const sendBtn = document.getElementById("chatSendBtn");
  const input   = document.getElementById("chatInput");
  if (!sendBtn) return;

  // Predefined bot responses
  const botResponses = [
    "Great question! You can find more details in the Resources section.",
    "Our support team can help with that. Try visiting the relevant page in the nav!",
    "For housing issues, please check the Residence section under Resources.",
    "Thanks for reaching out! We'll connect you with the right department.",
    "Have you checked the Campus Map? It has info on all buildings and hours.",
    "You can find job listings on the Campus Employment page!"
  ];

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    const messagesEl = document.getElementById("chatMessages");

    // Add user message
    const userMsg = document.createElement("div");
    userMsg.className = "chat-msg user";
    userMsg.textContent = text;
    messagesEl.appendChild(userMsg);

    input.value = "";
    messagesEl.scrollTop = messagesEl.scrollHeight;

    // Simulate bot reply after short delay
    setTimeout(() => {
      const botMsg = document.createElement("div");
      botMsg.className = "chat-msg bot";
      botMsg.textContent = botResponses[Math.floor(Math.random() * botResponses.length)];
      messagesEl.appendChild(botMsg);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }, 900);
  }

  sendBtn.addEventListener("click", sendMessage);

  // Also send on Enter key
  input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendMessage();
  });
}

// =====================================================
// RESOURCES PAGE
// =====================================================
function initResourcesPage() {
  renderDiningGrid();
  renderEventsGrid(campusEvents);
  setupEventFilter();
  setupMealPlanCalc();
  setupLibraryRooms();
}

/* Dining hours grid */
function renderDiningGrid() {
  const grid = document.getElementById("diningGrid");
  if (!grid) return;

  grid.innerHTML = diningLocations.map(d => `
    <div class="dhg-card">
      <div class="dhg-icon">${d.icon}</div>
      <div class="dhg-name">${d.name}</div>
      <span class="${d.isOpen ? "status-open" : "status-closed"}">
        ${d.isOpen ? "● Open Now" : "● Closed"}
      </span>
      <div class="dhg-hours mt-2">${d.hours}</div>
    </div>
  `).join("");
}

/* Events grid */
function renderEventsGrid(events) {
  const grid = document.getElementById("eventsGrid");
  if (!grid) return;

  if (events.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center text-muted py-4">No events match your search.</div>`;
    return;
  }

  grid.innerHTML = events.map(e => `
    <div class="col-md-4 col-sm-6">
      <div class="event-card-sm" onclick="showToast('📅 RSVP sent for &quot;${e.title}&quot;!')">
        <span class="ec-tag">${e.category}</span>
        <h6>${e.emoji} ${e.title}</h6>
        <div class="ec-meta">
          📅 ${formatDate(e.date)} · 🕖 ${e.time}<br/>
          📍 ${e.location}
        </div>
      </div>
    </div>
  `).join("");
}

/* Event filtering */
function setupEventFilter() {
  const btn = document.getElementById("filterEventsBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const cat    = document.getElementById("eventCatFilter").value;
    const search = document.getElementById("eventSearchInput").value.toLowerCase();

    let filtered = campusEvents;

    if (cat)    filtered = filtered.filter(e => e.category === cat);
    if (search) filtered = filtered.filter(e =>
      e.title.toLowerCase().includes(search) ||
      e.location.toLowerCase().includes(search)
    );

    renderEventsGrid(filtered);
  });
}

/* Meal plan swipe calculator */
function setupMealPlanCalc() {
  const btn = document.getElementById("calcSwipesBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const total = parseInt(document.getElementById("totalSwipes").value) || 0;
    const used  = parseInt(document.getElementById("usedSwipes").value)  || 0;
    const left  = total - used;
    const daysLeft = 7 - new Date().getDay() || 7;
    const perDay   = daysLeft > 0 ? (left / daysLeft).toFixed(1) : left;

    const resultEl = document.getElementById("swipeResult");

    if (left < 0) {
      resultEl.innerHTML = `<div class="swipe-result-inner">⚠️ You've exceeded your meal plan!</div>`;
    } else {
      resultEl.innerHTML = `
        <div class="swipe-result-inner">
          <span class="big-swipe-num">${left}</span>
          swipes left this week · ~${perDay}/day over ${daysLeft} day(s)
        </div>
      `;
    }
  });
}

/* Library room availability */
function setupLibraryRooms() {
  const btn = document.getElementById("bookLibraryRoomBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const panel = document.getElementById("libraryRooms");
    panel.style.display = panel.style.display === "none" ? "block" : "none";
    renderLibraryRooms();
  });
}

function renderLibraryRooms() {
  const grid = document.getElementById("libraryRoomGrid");
  if (!grid) return;

  grid.innerHTML = libraryRooms.map(r => `
    <div class="col-md-4 col-6">
      <div class="resource-card compact" style="text-align:center;">
        <strong style="color:var(--green);">${r.id}</strong><br/>
        <small style="color:var(--muted);">Seats ${r.capacity}</small><br/>
        <span class="${r.available ? "status-open" : "status-closed"}" style="margin:0.5rem 0;display:inline-block;">
          ${r.available ? "● Available" : "● Occupied"}
        </span><br/>
        ${r.available
          ? `<button class="btn-resource mt-1" onclick="bookLibraryRoom('${r.id}')">Book</button>`
          : `<button class="btn-resource mt-1" disabled style="opacity:0.4;cursor:not-allowed;">Occupied</button>`
        }
      </div>
    </div>
  `).join("");
}

function bookLibraryRoom(id) {
  const room = libraryRooms.find(r => r.id === id);
  if (!room) return;
  room.available = false;
  renderLibraryRooms();
  showToast(`✅ ${id} booked for 2 hours!`);
}

/* Active sidebar link on scroll */
function setupSidebarScroll() {
  const sections = document.querySelectorAll(".resource-section");
  const links    = document.querySelectorAll(".sidebar-link");

  window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 160) current = s.id;
    });
    links.forEach(l => {
      l.classList.toggle("active", l.getAttribute("href") === "#" + current);
    });
  });
}

// =====================================================
// MAP PAGE
// =====================================================
function initMapPage() {
  renderBuildingList(buildings);
  setupMapFilters();
  setupBuildingSearch();
}

function renderBuildingList(list) {
  const el = document.getElementById("buildingList");
  if (!el) return;

  el.innerHTML = list.map(b => `
    <div class="mbl-item" data-id="${b.id}" onclick="selectBuilding(${b.id})">
      <span class="mbl-dot ${b.cat}"></span>
      <div>
        <div class="mbl-name">${b.icon} ${b.name}</div>
        <div class="mbl-cat">${capitalize(b.cat)} · ${b.hours}</div>
      </div>
    </div>
  `).join("");
}

function selectBuilding(id) {
  const building = buildings.find(b => b.id === id);
  if (!building) return;

  // Highlight in list
  document.querySelectorAll(".mbl-item").forEach(el => {
    el.classList.toggle("selected", parseInt(el.dataset.id) === id);
  });

  // Show popup
  const popup = document.getElementById("buildingPopup");
  document.getElementById("popupContent").innerHTML = `
    <div class="popup-name">${building.icon} ${building.name}</div>
    <div class="popup-detail">${building.desc}</div>
    <div style="font-size:0.8rem;color:var(--muted);">⏰ Hours: ${building.hours}</div>
    <div style="margin-top:0.75rem;">
      <span class="mbl-dot ${building.cat}" style="display:inline-block;margin-right:4px;"></span>
      <small style="color:var(--muted);">${capitalize(building.cat)}</small>
    </div>
  `;
  popup.style.display = "block";
}

function closePopup() {
  document.getElementById("buildingPopup").style.display = "none";
}

function setupMapFilters() {
  document.querySelectorAll(".mft-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".mft-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const cat = btn.dataset.cat;
      const filtered = cat === "all" ? buildings : buildings.filter(b => b.cat === cat);
      renderBuildingList(filtered);
    });
  });
}

function setupBuildingSearch() {
  const input = document.getElementById("buildingSearch");
  if (!input) return;

  input.addEventListener("input", () => {
    const q = input.value.toLowerCase();
    const filtered = buildings.filter(b => b.name.toLowerCase().includes(q));
    renderBuildingList(filtered);
  });
}

// =====================================================
// EMPLOYMENT PAGE
// =====================================================
function initEmploymentPage() {
  renderJobListings(jobListings);
  renderFAQ();
  setupJobSearch();
  setupApplyModal();
}

function renderJobListings(jobs) {
  const el = document.getElementById("jobListings");
  if (!el) return;

  if (jobs.length === 0) {
    el.innerHTML = `<p class="text-muted text-center py-4">No positions match your search.</p>`;
    return;
  }

  const badgeClass = { "work-study": "badge-workstudy", "part-time": "badge-parttime", "research": "badge-research", "volunteer": "badge-volunteer" };
  const badgeLabel = { "work-study": "Work-Study", "part-time": "Part-Time", "research": "Research", "volunteer": "Volunteer" };

  el.innerHTML = jobs.map(j => `
    <div class="job-card">
      <div class="job-card-top">
        <div>
          <div class="job-title">${j.title}</div>
          <div class="job-dept">📍 ${j.dept}</div>
        </div>
        <span class="job-badge ${badgeClass[j.type]}">${badgeLabel[j.type]}</span>
      </div>
      <div class="job-desc">${j.desc}</div>
      <div class="job-meta">
        <span>💰 ${j.pay}</span>
        <span>🕐 ${j.hours}</span>
      </div>
      <div style="margin-top:1rem;">
        <button class="btn-resource" onclick="openApplyModal(${j.id})">Apply Now →</button>
      </div>
    </div>
  `).join("");
}

function setupJobSearch() {
  const btn = document.getElementById("searchJobsBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const search = document.getElementById("jobSearch").value.toLowerCase();
    const type   = document.getElementById("jobTypeFilter").value;

    let filtered = jobListings;
    if (search) filtered = filtered.filter(j =>
      j.title.toLowerCase().includes(search) ||
      j.dept.toLowerCase().includes(search)
    );
    if (type) filtered = filtered.filter(j => j.type === type);

    renderJobListings(filtered);
    showToast(`Showing ${filtered.length} position(s).`);
  });
}

function openApplyModal(id) {
  const job = jobListings.find(j => j.id === id);
  if (!job) return;
  document.getElementById("applyModalTitle").textContent = `Apply — ${job.title}`;
  new bootstrap.Modal(document.getElementById("applyModal")).show();
}

function setupApplyModal() {
  const btn = document.getElementById("submitApplicationBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const name  = document.getElementById("applyName").value.trim();
    const email = document.getElementById("applyEmail").value.trim();
    if (!name || !email) {
      showToast("⚠️ Please fill in your name and email.");
      return;
    }
    bootstrap.Modal.getInstance(document.getElementById("applyModal")).hide();
    showToast(`✅ Application submitted for ${name}! You'll hear back within 5 business days.`);
  });
}

function renderFAQ() {
  const el = document.getElementById("faqList");
  if (!el) return;

  el.innerHTML = faqs.map((f, i) => `
    <div class="faq-item">
      <div class="faq-q" onclick="toggleFAQ(${i})">
        ${f.q}
        <span class="faq-arrow">▾</span>
      </div>
      <div class="faq-a" id="faq-a-${i}">${f.a}</div>
    </div>
  `).join("");
}

function toggleFAQ(i) {
  const answer = document.getElementById(`faq-a-${i}`);
  const q = answer.previousElementSibling;
  const isOpen = answer.style.display === "block";
  answer.style.display = isOpen ? "none" : "block";
  q.classList.toggle("open", !isOpen);
}

// =====================================================
// CLUBS PAGE
// =====================================================
function initClubsPage() {
  renderClubDirectory(clubs);
  renderTryouts();
  setupClubTabs();
  setupClubFilters();
  setupTryoutSignup();
  setupPartnershipForm();
}

function renderClubDirectory(list) {
  const grid = document.getElementById("clubDirectoryGrid");
  if (!grid) return;

  if (list.length === 0) {
    grid.innerHTML = `<div class="col-12 text-center text-muted py-4">No clubs match your search.</div>`;
    return;
  }

  grid.innerHTML = list.map(c => `
    <div class="col-md-4 col-sm-6">
      <div class="club-card">
        <div class="club-card-icon">${c.icon}</div>
        <div class="club-card-name">${c.name}</div>
        <span class="club-card-cat">${c.cat}</span>
        <div class="club-card-desc">${c.desc}</div>
        <div class="club-card-members">👥 ${c.members} members</div>
        <div style="margin-top:0.75rem;">
          <button class="btn-resource" onclick="showToast('Interest sent to ${c.name}!')">Join Interest List</button>
        </div>
      </div>
    </div>
  `).join("");
}

function setupClubFilters() {
  const filterBtn = document.getElementById("filterClubsBtn");
  const searchIn  = document.getElementById("clubSearchInput");
  if (!filterBtn) return;

  filterBtn.addEventListener("click", () => {
    const query = searchIn.value.toLowerCase();
    const cat   = document.getElementById("clubCatFilter").value;

    let filtered = clubs;
    if (query) filtered = filtered.filter(c => c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
    if (cat)   filtered = filtered.filter(c => c.cat === cat);

    renderClubDirectory(filtered);
  });

  // Live search on keyup
  searchIn.addEventListener("input", () => {
    const query = searchIn.value.toLowerCase();
    const filtered = clubs.filter(c => c.name.toLowerCase().includes(query) || c.desc.toLowerCase().includes(query));
    renderClubDirectory(filtered);
  });
}

function renderTryouts() {
  const grid = document.getElementById("tryoutsGrid");
  if (!grid) return;

  grid.innerHTML = tryouts.map(t => `
    <div class="col-md-4 col-sm-6">
      <div class="tryout-card">
        <div class="tc-sport">${t.sport}</div>
        <div class="tc-name">${t.name}</div>
        <div class="tc-date">📅 ${t.date}</div>
        <div class="tc-detail">📍 ${t.location}<br/>${t.detail}</div>
        <div style="margin-top:1rem;">
          <button class="btn-resource" onclick="showToast('Interest registered for ${t.name} tryouts!')">Register Interest</button>
        </div>
      </div>
    </div>
  `).join("");
}

function setupTryoutSignup() {
  const btn = document.getElementById("tryoutSignupBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const email = document.getElementById("tryoutEmail").value.trim();
    if (!email) { showToast("⚠️ Please enter your email."); return; }
    showToast(`✅ You'll receive tryout reminders at ${email}.`);
    document.getElementById("tryoutEmail").value = "";
  });
}

function setupPartnershipForm() {
  const btn = document.getElementById("partnerSubmitBtn");
  if (!btn) return;

  btn.addEventListener("click", () => {
    const org   = document.getElementById("partnerOrg").value.trim();
    const email = document.getElementById("partnerEmail").value.trim();
    if (!org || !email) { showToast("⚠️ Please fill in organization name and email."); return; }
    showToast(`✅ Partnership inquiry from ${org} submitted! We'll be in touch.`);
    document.getElementById("partnerOrg").value   = "";
    document.getElementById("partnerEmail").value = "";
    document.getElementById("partnerMsg").value   = "";
  });
}

/* Tab switching for Clubs page */
function setupClubTabs() {
  document.querySelectorAll(".ctn-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".ctn-btn").forEach(b => b.classList.remove("active"));
      document.querySelectorAll(".clubs-tab-content").forEach(t => t.style.display = "none");

      btn.classList.add("active");
      document.getElementById(`tab-${btn.dataset.tab}`).style.display = "block";
    });
  });
}

// =====================================================
// UTILITIES
// =====================================================

/* Format ISO date to readable string */
function formatDate(isoDate) {
  const d = new Date(isoDate + "T00:00:00");
  return d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}

/* Capitalize first letter */
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/* Show a temporary toast notification */
function showToast(message) {
  const existing = document.querySelector(".campus-toast");
  if (existing) existing.remove();

  const toast = document.createElement("div");
  toast.className = "campus-toast";
  toast.innerHTML = message;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.4s";
    toast.style.opacity = "0";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

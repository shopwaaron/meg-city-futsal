// ── Admin password (change this to whatever your friend wants) ──
const ADMIN_PASSWORD = 'MegCity2024';

// ── Storage key ──
const SK = 'mcf_admin_data';

// ── Default data ──
const defaults = {
  jan: { status: 'coming' },
  aug: { status: 'open' }
};

// ── Load stored data ──
// Merges stored values over defaults so new defaults shipped in code
// still apply when localStorage holds an older snapshot, and a
// malformed/partial snapshot can't crash applyData.
function loadData() {
  try {
    const raw = localStorage.getItem(SK);
    const parsed = raw ? JSON.parse(raw) : null;
    return {
      jan: { ...defaults.jan, ...(parsed && parsed.jan ? parsed.jan : {}) },
      aug: { ...defaults.aug, ...(parsed && parsed.aug ? parsed.aug : {}) }
    };
  } catch(e) {
    return { jan: { ...defaults.jan }, aug: { ...defaults.aug } };
  }
}

// ── Save data ──
function saveData(d) {
  try { localStorage.setItem(SK, JSON.stringify(d)); } catch(e) {}
}

// ── Status helpers ──
function statusText(s) {
  if (s === 'open')   return 'Accepting Sign Ups';
  if (s === 'coming') return 'Coming Soon';
  return 'Closed';
}
function eyebrowText(season, s) {
  const name = season === 'jan' ? 'Jan–May' : 'Aug–Nov';
  if (s === 'open')   return `${name} Season · Now Enrolling`;
  if (s === 'coming') return `${name} Season · Coming Soon`;
  return `${name} Season · Registration Closed`;
}

// ── Apply data to whichever elements exist on the current page ──
// Every lookup is null-checked since each page only contains a
// subset of these elements (this script is shared across all pages).
function applyData(d) {
  const j = d.jan;
  const a = d.aug;

  const homeEyebrowText = document.getElementById('home-eyebrow-text');
  if (homeEyebrowText) {
    const homeDot = document.getElementById('home-eyebrow');
    if (a.status === 'open') {
      homeEyebrowText.textContent = 'Now enrolling — Aug–Nov Season';
      if (homeDot) homeDot.style.display = 'inline-flex';
    } else if (j.status === 'open') {
      homeEyebrowText.textContent = 'Now enrolling — Jan–May Season';
      if (homeDot) homeDot.style.display = 'inline-flex';
    } else {
      homeEyebrowText.textContent = 'Year-round youth futsal program';
    }
  }

  const janBadgeEl = document.getElementById('home-jan-badge');
  if (janBadgeEl) {
    janBadgeEl.className = 'status-badge ' + (j.status==='open'?'status-open':j.status==='coming'?'status-coming':'status-closed');
    janBadgeEl.innerHTML = j.status==='open'?'● Accepting Sign Ups':j.status==='coming'?'● Coming Soon':'● Closed';
  }
  const janEyebrowEl = document.getElementById('jan-eyebrow-text');
  if (janEyebrowEl) janEyebrowEl.textContent = eyebrowText('jan', j.status);
  const janStatusEl = document.getElementById('jan-status-text');
  if (janStatusEl) janStatusEl.textContent = statusText(j.status);

  const augBadgeEl = document.getElementById('home-aug-badge');
  if (augBadgeEl) {
    augBadgeEl.className = 'status-badge ' + (a.status==='open'?'status-open':a.status==='coming'?'status-coming':'status-closed');
    augBadgeEl.innerHTML = a.status==='open'?'● Accepting Sign Ups':a.status==='coming'?'● Coming Soon':'● Closed';
  }
  const augEyebrowEl = document.getElementById('aug-eyebrow-text');
  if (augEyebrowEl) augEyebrowEl.textContent = eyebrowText('aug', a.status);
  const augStatusEl = document.getElementById('aug-status-text');
  if (augStatusEl) augStatusEl.textContent = statusText(a.status);

  const homeTileSeasonEl = document.getElementById('home-tile-season');
  if (homeTileSeasonEl) {
    const activeSeason = a.status === 'open' ? 'Aug–Nov' : (j.status === 'open' ? 'Jan–May' : 'Aug–Nov');
    homeTileSeasonEl.textContent = activeSeason === 'Aug–Nov' ? 'Fall Training' : 'Spring Training';
  }
}

// ── Mobile menu ──
function toggleMobile() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}

// ── Admin login ──
function adminLogin() {
  const pw = document.getElementById('adminPassword').value;
  const err = document.getElementById('adminError');
  if (pw === ADMIN_PASSWORD) {
    document.getElementById('adminLoginView').style.display = 'none';
    document.getElementById('adminPanelView').style.display = 'block';
    err.classList.remove('show');
    populateAdminFields();
  } else {
    err.classList.add('show');
    document.getElementById('adminPassword').value = '';
  }
}

// ── Admin logout ──
function adminLogout() {
  window.location.href = '/';
}

// ── Populate admin form fields from storage ──
function populateAdminFields() {
  const d = loadData();
  document.getElementById('admin-jan-status').value = d.jan.status;
  document.getElementById('admin-aug-status').value = d.aug.status;
}

// ── Save admin changes ──
function saveAdminChanges() {
  const d = {
    jan: { status: document.getElementById('admin-jan-status').value },
    aug: { status: document.getElementById('admin-aug-status').value }
  };
  saveData(d);
  applyData(d);
  showToast();
}

// ── Toast notification ──
function showToast() {
  const t = document.getElementById('adminToast');
  if (!t) return;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ── Schedule tab switcher ──
function switchSched(season, day, btn) {
  const prefix = season + '-';
  ['fri','sun'].forEach(d => {
    const el = document.getElementById(prefix + d + '-grid');
    if (el) el.style.display = d === day ? 'block' : 'none';
  });
  btn.closest('.sched-component').querySelectorAll('.sched-pill').forEach(p => p.classList.remove('active'));
  btn.classList.add('active');
}

// ── Init ──
document.addEventListener('DOMContentLoaded', function() {
  applyData(loadData());
});

/**
 * generate-cng-guide.js
 * Generates public/documents/CNG_101_Guide.pdf — a professional CNG beginner's guide
 * for Adesa Energy. Run with: node scripts/generate-cng-guide.js
 */

const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

// ── Ensure output directory exists ──────────────────────────────────────────
const outputDir = path.join(__dirname, "..", "public", "documents");
if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const outputPath = path.join(outputDir, "CNG_101_Guide.pdf");
const doc = new PDFDocument({ size: "A4", margin: 50, info: {
  Title:    "CNG 101 — Beginner's Guide to Compressed Natural Gas",
  Author:   "Adesa Energy",
  Subject:  "CNG Conversion & Refueling in Nigeria",
  Keywords: "CNG, compressed natural gas, conversion, refueling, Nigeria, Adesa Energy",
  Creator:  "Adesa Energy (www.adesaenergy.com)",
}});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// ── Colour palette ───────────────────────────────────────────────────────────
const BRAND_GREEN   = "#1A7A4A";
const BRAND_NAVY    = "#22244E";
const ACCENT_ORANGE = "#D96B2A";
const LIGHT_GREY    = "#F4F6F8";
const MID_GREY      = "#666666";
const DARK_GREY     = "#333333";
const WHITE         = "#FFFFFF";

const PAGE_W = doc.page.width;   // 595.28
const MARGIN = 50;
const CONTENT_W = PAGE_W - MARGIN * 2;

// ── Helpers ──────────────────────────────────────────────────────────────────
function hline(y, color = "#DDDDDD", thickness = 0.5) {
  doc.save().strokeColor(color).lineWidth(thickness)
     .moveTo(MARGIN, y).lineTo(PAGE_W - MARGIN, y).stroke().restore();
}

function sectionHeading(text, color = BRAND_GREEN) {
  doc.moveDown(1.2);
  doc.font("Helvetica-Bold").fontSize(14).fillColor(color).text(text.toUpperCase(), MARGIN, doc.y, { width: CONTENT_W });
  hline(doc.y + 4, color, 1);
  doc.moveDown(0.6);
}

function bodyText(text) {
  doc.font("Helvetica").fontSize(10.5).fillColor(DARK_GREY)
     .text(text, MARGIN, doc.y, { width: CONTENT_W, align: "justify", lineGap: 3 });
  doc.moveDown(0.5);
}

function bulletList(items) {
  items.forEach((item) => {
    doc.font("Helvetica").fontSize(10.5).fillColor(DARK_GREY)
       .text(`•  ${item}`, MARGIN + 12, doc.y, { width: CONTENT_W - 12, align: "left", lineGap: 3 });
    doc.moveDown(0.3);
  });
  doc.moveDown(0.4);
}

function numberedList(items) {
  items.forEach((item, i) => {
    doc.font("Helvetica").fontSize(10.5).fillColor(DARK_GREY)
       .text(`${i + 1}.  ${item}`, MARGIN + 12, doc.y, { width: CONTENT_W - 12, align: "left", lineGap: 3 });
    doc.moveDown(0.3);
  });
  doc.moveDown(0.4);
}

function calloutBox(text, bgColor = "#EAF6EF", borderColor = BRAND_GREEN) {
  const startY = doc.y;
  const boxH   = 52;
  doc.save()
     .rect(MARGIN, startY, CONTENT_W, boxH).fillColor(bgColor).fill()
     .rect(MARGIN, startY, 4, boxH).fillColor(borderColor).fill()
     .restore();
  doc.font("Helvetica-BoldOblique").fontSize(10).fillColor(borderColor)
     .text(text, MARGIN + 16, startY + 14, { width: CONTENT_W - 24 });
  doc.y = startY + boxH + 10;
}

function twoColumnRow(left, right, labelColor = BRAND_NAVY) {
  const colW = (CONTENT_W - 20) / 2;
  const y    = doc.y;
  doc.font("Helvetica-Bold").fontSize(10).fillColor(labelColor).text(left, MARGIN, y, { width: colW });
  doc.font("Helvetica").fontSize(10).fillColor(DARK_GREY).text(right, MARGIN + colW + 20, y, { width: colW });
  doc.moveDown(0.55);
}

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 1 — COVER
// ═══════════════════════════════════════════════════════════════════════════
// Background
doc.rect(0, 0, PAGE_W, doc.page.height).fillColor(BRAND_NAVY).fill();

// Top accent stripe
doc.rect(0, 0, PAGE_W, 8).fillColor(BRAND_GREEN).fill();
doc.rect(0, 8, PAGE_W, 4).fillColor(ACCENT_ORANGE).fill();

// Brand name
doc.font("Helvetica-Bold").fontSize(13).fillColor(BRAND_GREEN)
   .text("ADESA ENERGY  ·  A SUBSIDIARY OF ADESA HQ", MARGIN, 60, { align: "center", width: CONTENT_W });

// Title
doc.moveDown(1.5);
doc.font("Helvetica-Bold").fontSize(42).fillColor(WHITE)
   .text("CNG 101", MARGIN, doc.y, { align: "center", width: CONTENT_W });

doc.font("Helvetica").fontSize(22).fillColor("#A8D8BE")
   .text("A Beginner's Guide to", MARGIN, doc.y + 6, { align: "center", width: CONTENT_W });

doc.font("Helvetica-Bold").fontSize(22).fillColor(WHITE)
   .text("Compressed Natural Gas", MARGIN, doc.y + 2, { align: "center", width: CONTENT_W });

// Divider
doc.moveDown(1.5);
doc.save().strokeColor(BRAND_GREEN).lineWidth(2)
   .moveTo(MARGIN + 60, doc.y).lineTo(PAGE_W - MARGIN - 60, doc.y).stroke().restore();

// Subtitle
doc.moveDown(1.2);
doc.font("Helvetica").fontSize(12).fillColor("#C8D8E0")
   .text("Everything you need to know about switching to CNG —\nsave up to 50% on fuel costs across Nigeria",
         MARGIN, doc.y, { align: "center", width: CONTENT_W });

// Stat badges
const badgeY = doc.y + 40;
const badges = [
  { val: "50%", label: "Fuel cost savings" },
  { val: "₦1,200", label: "Avg. price per kg CNG" },
  { val: "3 Cities", label: "Lagos · Ilorin · Abuja" },
];
const badgeW = 130;
const startX = (PAGE_W - badges.length * badgeW - (badges.length - 1) * 16) / 2;
badges.forEach((b, i) => {
  const bx = startX + i * (badgeW + 16);
  doc.save().roundedRect(bx, badgeY, badgeW, 68, 8).fillColor("#1E3A5F").fill().restore();
  doc.save().roundedRect(bx, badgeY, badgeW, 4, 2).fillColor(BRAND_GREEN).fill().restore();
  doc.font("Helvetica-Bold").fontSize(22).fillColor(BRAND_GREEN)
     .text(b.val, bx, badgeY + 14, { width: badgeW, align: "center" });
  doc.font("Helvetica").fontSize(9).fillColor("#A8C8D8")
     .text(b.label, bx, badgeY + 42, { width: badgeW, align: "center" });
});

// Footer
doc.font("Helvetica").fontSize(9).fillColor("#5A7A8A")
   .text("www.adesaenergy.com  |  adeinfo@adesahq.com  |  +234 816 882 3730",
         MARGIN, doc.page.height - 50, { align: "center", width: CONTENT_W });
doc.font("Helvetica").fontSize(8).fillColor("#3A5A6A")
   .text("© 2026 Adesa Energy — A subsidiary of Adesa HQ. All rights reserved.",
         MARGIN, doc.page.height - 34, { align: "center", width: CONTENT_W });

// Bottom accent stripe
doc.rect(0, doc.page.height - 8, PAGE_W, 8).fillColor(BRAND_GREEN).fill();
doc.rect(0, doc.page.height - 12, PAGE_W, 4).fillColor(ACCENT_ORANGE).fill();

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 2 — WHAT IS CNG?
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage({ margin: MARGIN });

// Header bar
doc.rect(0, 0, PAGE_W, 36).fillColor(BRAND_NAVY).fill();
doc.font("Helvetica-Bold").fontSize(11).fillColor(WHITE)
   .text("ADESA ENERGY  ·  CNG 101 GUIDE", MARGIN, 12, { width: CONTENT_W });
doc.font("Helvetica").fontSize(9).fillColor(BRAND_GREEN)
   .text("www.adesaenergy.com", 0, 12, { width: PAGE_W - MARGIN, align: "right" });

doc.y = 60;

sectionHeading("Chapter 1 — What is Compressed Natural Gas (CNG)?");

bodyText(
  "Compressed Natural Gas (CNG) is natural gas — primarily methane (CH₄) — that has been compressed to less than 1% of its volume at standard atmospheric pressure. CNG is stored and distributed in hard, sealed cylindrical or spherical containers at pressures typically between 200–248 bar (3,000–3,600 psi)."
);

bodyText(
  "In Nigeria, CNG is rapidly emerging as the most practical alternative to petrol (PMS) and diesel. With the Federal Government's commitment to expanding CNG infrastructure and companies like Adesa Energy rolling out mobile conversion and refueling services, switching to CNG has never been easier."
);

calloutBox("CNG is not the same as LPG (cooking gas). CNG is methane; LPG is propane/butane. They have different tanks, pressures, and vehicle fittings.");

sectionHeading("Chapter 2 — Why Switch to CNG?");

bodyText("The case for CNG in Nigeria is compelling across three dimensions: cost, environment, and energy security.");

// Two-column comparison table header
doc.save().rect(MARGIN, doc.y, CONTENT_W, 24).fillColor(BRAND_NAVY).fill().restore();
doc.font("Helvetica-Bold").fontSize(10).fillColor(WHITE)
   .text("Factor", MARGIN + 8, doc.y + 7, { width: (CONTENT_W / 2) - 8 });
doc.font("Helvetica-Bold").fontSize(10).fillColor(WHITE)
   .text("Petrol vs CNG", MARGIN + CONTENT_W / 2, doc.y + 7, { width: CONTENT_W / 2 });
doc.moveDown(1.4);

const rows = [
  ["Average price (2026)",    "₦897–₦1,200 / litre PMS    vs    ₦1,200 / kg CNG"],
  ["Energy equivalent",       "1 litre PMS ≈ 0.72 kg CNG  →  CNG often cheaper"],
  ["Fuel cost savings",       "Up to 50% lower running costs per kilometre"],
  ["Engine wear",             "CNG burns cleaner — less carbon deposit, longer engine life"],
  ["CO₂ emissions",           "~20–25% less CO₂ than petrol; near-zero particulates"],
  ["Octane rating",           "CNG has octane rating of ~130 vs ~91 for regular PMS"],
  ["Range anxiety",           "Bi-fuel vehicles keep petrol tank as backup"],
  ["Infrastructure (Lagos)",  "Growing — Adesa Energy mobile refueling eliminates range anxiety"],
];
rows.forEach((row, i) => {
  const bg = i % 2 === 0 ? WHITE : LIGHT_GREY;
  doc.save().rect(MARGIN, doc.y, CONTENT_W, 20).fillColor(bg).fill().restore();
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(BRAND_NAVY)
     .text(row[0], MARGIN + 8, doc.y + 5, { width: CONTENT_W / 2 - 8 });
  doc.font("Helvetica").fontSize(9.5).fillColor(DARK_GREY)
     .text(row[1], MARGIN + CONTENT_W / 2, doc.y + 5, { width: CONTENT_W / 2 });
  doc.moveDown(0.9);
});

doc.moveDown(0.8);
calloutBox("A Lagos commercial bus driver covering 150 km/day typically saves ₦15,000–₦22,000 per month after switching to CNG with Adesa Energy.");

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 3 — HOW CONVERSION WORKS
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage({ margin: MARGIN });
doc.rect(0, 0, PAGE_W, 36).fillColor(BRAND_NAVY).fill();
doc.font("Helvetica-Bold").fontSize(11).fillColor(WHITE)
   .text("ADESA ENERGY  ·  CNG 101 GUIDE", MARGIN, 12, { width: CONTENT_W });
doc.font("Helvetica").fontSize(9).fillColor(BRAND_GREEN)
   .text("www.adesaenergy.com", 0, 12, { width: PAGE_W - MARGIN, align: "right" });
doc.y = 60;

sectionHeading("Chapter 3 — How Does CNG Conversion Work?");

bodyText(
  "Converting your vehicle to CNG means fitting a bi-fuel kit — a system that allows your engine to run on either CNG or petrol at the flick of a switch. The vehicle retains its original petrol tank and functionality while gaining a CNG cylinder and injection system."
);

bodyText("The conversion kit has five core components:");

bulletList([
  "CNG Cylinder — A high-pressure steel or composite tank fitted in the boot or under the chassis. Capacities range from 40L to 120L water-volume equivalent.",
  "High-Pressure Regulator — Reduces cylinder pressure (~200 bar) to engine-usable pressure (~1–8 bar) in stages.",
  "Sequential Gas Injection (SGI) System — Injects CNG into the intake manifold in sync with each cylinder's firing cycle, mimicking petrol injection.",
  "Electronic Control Unit (ECU) — Monitors engine parameters, switches between fuels, and optimises the air-fuel mixture for CNG.",
  "Fuel Selector Switch — Mounted on the dashboard; lets the driver choose CNG, petrol, or automatic (prioritises CNG when cylinder pressure is adequate).",
]);

sectionHeading("Chapter 4 — The Adesa Energy Conversion Process");

bodyText("Adesa Energy performs mobile conversions at your location — no need to drive to a workshop. Here is what to expect:");

numberedList([
  "Booking — Request your conversion at www.adesaenergy.com/convert or call +234 816 882 3730 to schedule your conversion appointment.",
  "Vehicle Assessment (30 min) — Our technician inspects your engine, fuel system, and chassis to confirm suitability and recommend the right kit size.",
  "Kit Installation (3–5 hours) — We mount the CNG cylinder, run high-pressure lines, install the SGI ECU, connect injectors, and calibrate the system.",
  "Leak & Safety Test — Every connection is tested with a calibrated gas-leak detector before the vehicle leaves our care.",
  "Certification & Documentation — You receive a conversion certificate, kit serial numbers, and a maintenance schedule.",
  "First Fill & Demo — Your first CNG fill is done on-site. Our technician shows you how to operate the fuel-selector switch and read the CNG gauge.",
]);

calloutBox("The entire process takes a single day. Adesa Energy offers a 12-month warranty on all installed kits and free post-installation check-up at 500 km.");

sectionHeading("Chapter 5 — Which Vehicles Can Be Converted?");

bodyText("Most petrol-powered vehicles with electronic fuel injection (EFI) — made from 2000 onwards — are compatible. The table below gives a quick guide:");

const vehicles = [
  ["Petrol EFI cars (2000+)",         "✅ Fully compatible",           "Toyota, Honda, Hyundai, Kia, Nissan"],
  ["Carbureted petrol cars",           "⚠️  Possible — older kit",     "Pre-2000 Peugeot, VW Beetle"],
  ["Commercial buses (EFI)",           "✅ Fully compatible",           "Hiace, Sprinter, Mini-bus"],
  ["Trucks / HGVs (petrol)",           "✅ Large-cylinder kits",        "Customised per vehicle"],
  ["Diesel engines",                   "❌ Not supported",              "Diesel requires separate CNG-diesel kit"],
  ["CNG-only (OEM) vehicles",          "N/A — already CNG",            "Some Hyundai, Toyota fleet models"],
];

doc.save().rect(MARGIN, doc.y, CONTENT_W, 22).fillColor(BRAND_NAVY).fill().restore();
["Vehicle Type", "Compatibility", "Examples"].forEach((h, i) => {
  doc.font("Helvetica-Bold").fontSize(9).fillColor(WHITE)
     .text(h, MARGIN + 8 + i * (CONTENT_W / 3), doc.y + 6, { width: CONTENT_W / 3 - 8 });
});
doc.moveDown(1.2);

vehicles.forEach((row, i) => {
  const bg = i % 2 === 0 ? WHITE : LIGHT_GREY;
  doc.save().rect(MARGIN, doc.y, CONTENT_W, 22).fillColor(bg).fill().restore();
  const cols = [BRAND_NAVY, BRAND_GREEN, MID_GREY];
  row.forEach((cell, j) => {
    doc.font(j === 0 ? "Helvetica-Bold" : "Helvetica").fontSize(9).fillColor(cols[j])
       .text(cell, MARGIN + 8 + j * (CONTENT_W / 3), doc.y + 6, { width: CONTENT_W / 3 - 8 });
  });
  doc.moveDown(1.1);
});

// ═══════════════════════════════════════════════════════════════════════════
// PAGE 4 — SAFETY, MAINTENANCE & CTA
// ═══════════════════════════════════════════════════════════════════════════
doc.addPage({ margin: MARGIN });
doc.rect(0, 0, PAGE_W, 36).fillColor(BRAND_NAVY).fill();
doc.font("Helvetica-Bold").fontSize(11).fillColor(WHITE)
   .text("ADESA ENERGY  ·  CNG 101 GUIDE", MARGIN, 12, { width: CONTENT_W });
doc.font("Helvetica").fontSize(9).fillColor(BRAND_GREEN)
   .text("www.adesaenergy.com", 0, 12, { width: PAGE_W - MARGIN, align: "right" });
doc.y = 60;

sectionHeading("Chapter 6 — CNG Safety: Facts vs Myths");

const safetyItems = [
  ["MYTH: CNG tanks explode easily",           "FACT: CNG cylinders are tested to 3× working pressure and made from steel or composite materials that are far tougher than petrol tanks. They're designed to vent gas upward — not pool liquid — in the event of a leak."],
  ["MYTH: CNG is dangerous in an accident",    "FACT: Because CNG is lighter than air, it disperses rapidly rather than pooling on the ground like petrol. In crash tests, CNG tanks consistently outperform petrol tanks."],
  ["MYTH: You'll run out of gas with no warning", "FACT: The dashboard gauge shows CNG level, and the ECU automatically switches to petrol when the cylinder pressure drops, giving you plenty of range to reach the next fill point."],
  ["MYTH: CNG reduces engine performance",     "FACT: CNG's higher octane (130) can actually improve combustion efficiency. Some vehicles gain a slight power advantage on CNG, particularly in city driving conditions."],
];

safetyItems.forEach(([myth, fact]) => {
  doc.save().rect(MARGIN, doc.y, CONTENT_W, 14).fillColor("#FFF3EC").fill()
     .rect(MARGIN, doc.y, 4, 14).fillColor(ACCENT_ORANGE).fill().restore();
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(ACCENT_ORANGE)
     .text(myth, MARGIN + 10, doc.y + 3, { width: CONTENT_W - 14 });
  doc.moveDown(0.8);
  doc.font("Helvetica").fontSize(9.5).fillColor(DARK_GREY)
     .text(fact, MARGIN + 12, doc.y, { width: CONTENT_W - 14, lineGap: 2 });
  doc.moveDown(0.8);
});

sectionHeading("Chapter 7 — CNG Maintenance Checklist");

bodyText("CNG systems require minimal maintenance, but the following schedule keeps your kit in peak condition:");

const maintenance = [
  ["Every 500 km (first 1,000 km)", "Post-installation leak inspection by Adesa technician (free)"],
  ["Every 10,000 km",               "Regulator and filter inspection; replace inline filter if needed"],
  ["Every 20,000 km",               "Full system pressure test; ECU re-calibration if required"],
  ["Every 3 years",                 "Mandatory cylinder hydrostatic re-test (required by DPR/NMDPRA)"],
  ["Every 10–15 years",            "Cylinder replacement (manufacturer-specified service life)"],
  ["After any accident",           "Immediate professional inspection before using CNG fuel again"],
];

maintenance.forEach(([when, what], i) => {
  const bg = i % 2 === 0 ? WHITE : LIGHT_GREY;
  doc.save().rect(MARGIN, doc.y, CONTENT_W, 20).fillColor(bg).fill().restore();
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(BRAND_NAVY)
     .text(when, MARGIN + 8, doc.y + 5, { width: CONTENT_W * 0.38 });
  doc.font("Helvetica").fontSize(9.5).fillColor(DARK_GREY)
     .text(what, MARGIN + 8 + CONTENT_W * 0.38, doc.y + 5, { width: CONTENT_W * 0.62 - 8 });
  doc.moveDown(0.95);
});

// ── Final CTA box ────────────────────────────────────────────────────────────
doc.moveDown(1);
const ctaY = doc.y;
doc.save().roundedRect(MARGIN, ctaY, CONTENT_W, 100, 10).fillColor(BRAND_NAVY).fill().restore();
doc.save().roundedRect(MARGIN, ctaY, CONTENT_W, 6, 5).fillColor(BRAND_GREEN).fill().restore();

doc.font("Helvetica-Bold").fontSize(16).fillColor(WHITE)
   .text("Ready to Switch to CNG?", MARGIN, ctaY + 20, { align: "center", width: CONTENT_W });
doc.font("Helvetica").fontSize(10.5).fillColor("#A8D8BE")
   .text("Book your conversion today and save up to 50% on fuel costs.\nMobile service — we come to you anywhere in Lagos, Ilorin, or Abuja.",
         MARGIN, doc.y + 4, { align: "center", width: CONTENT_W });
doc.font("Helvetica-Bold").fontSize(10).fillColor(BRAND_GREEN)
   .text("www.adesaenergy.com/convert   ·   +234 816 882 3730   ·   adeinfo@adesahq.com",
         MARGIN, doc.y + 10, { align: "center", width: CONTENT_W });

// Bottom accent stripes
doc.rect(0, doc.page.height - 8, PAGE_W, 8).fillColor(BRAND_GREEN).fill();
doc.rect(0, doc.page.height - 12, PAGE_W, 4).fillColor(ACCENT_ORANGE).fill();

// ── Finalise ─────────────────────────────────────────────────────────────────
doc.end();

stream.on("finish", () => {
  console.log(`✅  PDF generated → ${outputPath}`);
});
stream.on("error", (err) => {
  console.error("❌  Error generating PDF:", err);
  process.exit(1);
});

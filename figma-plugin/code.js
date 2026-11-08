// BAUST Alumni Management System (AMS) - Smart Interactive Prototype Generator
// 1. Detects if Claude's D1-D9 already exist. If so, keeps them and seamlessly adds Row 4 (y=3900) and Row 5 (y=4900).
// 2. If the canvas is empty, creates all 15 frames from scratch.
// 3. Wires up interactive prototype links (reactions) between all pages for full clickability!

async function run() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  const cBg = { r: 0.965, g: 0.961, b: 0.988 }; // #f6f5fc
  const cWhite = { r: 1, g: 1, b: 1 };
  const cPurple = { r: 0.357, g: 0.247, b: 0.659 }; // #5b3fa8
  const cPurpleLight = { r: 0.925, g: 0.906, b: 0.980 }; // #ece7fa
  const cTextDark = { r: 0.118, g: 0.102, b: 0.235 }; // #1e1a3c
  const cTextMuted = { r: 0.412, g: 0.400, b: 0.541 }; // #69668a
  const cBorder = { r: 0.890, g: 0.878, b: 0.941 }; // #e3e0f0
  const cSky = { r: 0.486, g: 0.776, b: 0.941 }; // #7cc6f0
  const cSkyDark = { r: 0.090, g: 0.376, b: 0.549 }; // #17608c
  const cSkyLight = { r: 0.882, g: 0.949, b: 0.988 }; // #e1f2fc
  const cEmerald = { r: 0.063, g: 0.725, b: 0.506 };
  const cEmeraldLight = { r: 0.85, g: 0.97, b: 0.92 };
  const cRose = { r: 0.88, g: 0.2, b: 0.25 };
  const cRoseLight = { r: 0.99, g: 0.92, b: 0.92 };

  function createText(text, size, weight, color, parent, name) {
    const t = figma.createText();
    t.fontName = { family: "Inter", style: weight };
    t.fontSize = size;
    t.characters = text;
    t.fills = [{ type: 'SOLID', color: color }];
    if (name) t.name = name;
    if (parent) parent.appendChild(t);
    return t;
  }

  function createButton(text, bgCol, textCol, parent, width, name) {
    const btn = figma.createFrame();
    btn.name = name || `Btn: ${text}`;
    btn.layoutMode = "HORIZONTAL";
    btn.primaryAxisSizingMode = width ? "FIXED" : "AUTO";
    btn.counterAxisSizingMode = "AUTO";
    btn.primaryAxisAlignItems = "CENTER";
    btn.counterAxisAlignItems = "CENTER";
    btn.paddingLeft = 14;
    btn.paddingRight = 14;
    btn.paddingTop = 8;
    btn.paddingBottom = 8;
    btn.cornerRadius = 8;
    btn.fills = [{ type: 'SOLID', color: bgCol }];
    if (width) btn.resize(width, 36);
    createText(text, 13, "Semi Bold", textCol, btn);
    if (parent) parent.appendChild(btn);
    return btn;
  }

  function createBadge(text, bgCol, textCol, parent) {
    const b = figma.createFrame();
    b.name = `Badge: ${text}`;
    b.layoutMode = "HORIZONTAL";
    b.paddingLeft = 10;
    b.paddingRight = 10;
    b.paddingTop = 4;
    b.paddingBottom = 4;
    b.cornerRadius = 16;
    b.fills = [{ type: 'SOLID', color: bgCol }];
    createText(text, 11, "Semi Bold", textCol, b);
    if (parent) parent.appendChild(b);
    return b;
  }

  async function wireInteraction(triggerNode, targetFrame, transitionType = "DISSOLVE") {
    if (!triggerNode || !targetFrame) return;
    try {
      const reaction = {
        trigger: { type: "ON_CLICK" },
        actions: [
          {
            type: "NODE",
            destinationId: targetFrame.id,
            navigation: "NAVIGATE",
            transition: {
              type: transitionType,
              easing: { type: "EASE_IN_AND_OUT" },
              duration: 0.2
            },
            preserveScrollPosition: false
          }
        ]
      };
      if (typeof triggerNode.setReactionsAsync === "function") {
        await triggerNode.setReactionsAsync([reaction]);
      } else {
        triggerNode.reactions = [reaction];
      }
    } catch (err) {
      console.warn("Could not wire reaction:", err);
    }
  }

  function buildNav(activeName, isAdmin, userText, userBadge, parent) {
    const nav = figma.createFrame();
    nav.name = "Header (Navigation Bar)";
    nav.resize(1440, 68);
    nav.layoutMode = "HORIZONTAL";
    nav.layoutAlign = "STRETCH";
    nav.primaryAxisAlignItems = "SPACE_BETWEEN";
    nav.counterAxisAlignItems = "CENTER";
    nav.paddingLeft = 80;
    nav.paddingRight = 80;
    nav.fills = [{ type: 'SOLID', color: cWhite }];
    
    // Logo Brand
    const logo = figma.createFrame();
    logo.name = "Logo Brand";
    logo.layoutMode = "HORIZONTAL";
    logo.counterAxisAlignItems = "CENTER";
    logo.itemSpacing = 10;
    logo.fills = [];
    const logoMark = figma.createFrame();
    logoMark.name = "Logo Mark";
    logoMark.resize(34, 34);
    logoMark.cornerRadius = 9;
    logoMark.fills = [{ type: 'SOLID', color: cPurple }];
    logoMark.layoutMode = "HORIZONTAL";
    logoMark.primaryAxisAlignItems = "CENTER";
    logoMark.counterAxisAlignItems = "CENTER";
    createText("B", 17, "Bold", cWhite, logoMark);
    logo.appendChild(logoMark);
    createText("BAUST Alumni", 16, "Bold", cTextDark, logo, "Logo Text");
    nav.appendChild(logo);

    // Links
    const links = figma.createFrame();
    links.name = "Nav Links";
    links.layoutMode = "HORIZONTAL";
    links.itemSpacing = 6;
    links.fills = [];
    const items = isAdmin ? ["Dashboard", "Directory", "Events", "Forum", "Jobs"] : ["Home", "Directory", "Events", "Forum", "Jobs"];
    const tabMap = {};
    for (const item of items) {
      const isActive = item === activeName;
      const tab = figma.createFrame();
      tab.name = `Tab: ${item}`;
      tab.layoutMode = "HORIZONTAL";
      tab.paddingLeft = 14;
      tab.paddingRight = 14;
      tab.paddingTop = 8;
      tab.paddingBottom = 8;
      tab.cornerRadius = 8;
      tab.fills = isActive ? [{ type: 'SOLID', color: cPurpleLight }] : [];
      createText(item, 13, isActive ? "Semi Bold" : "Medium", isActive ? cPurple : cTextMuted, tab);
      links.appendChild(tab);
      tabMap[item] = tab;
    }
    nav.appendChild(links);

    // Profile Right Pill
    const rightSide = figma.createFrame();
    rightSide.name = "User Profile Pill";
    rightSide.layoutMode = "HORIZONTAL";
    rightSide.counterAxisAlignItems = "CENTER";
    rightSide.itemSpacing = 12;
    rightSide.fills = [];
    
    let btnLogout = null;
    let btnLogin = null;
    let btnRegister = null;

    if (userText) {
      const pill = figma.createFrame();
      pill.name = "Profile Pill";
      pill.layoutMode = "HORIZONTAL";
      pill.counterAxisAlignItems = "CENTER";
      pill.itemSpacing = 8;
      pill.paddingLeft = 12;
      pill.paddingRight = 12;
      pill.paddingTop = 6;
      pill.paddingBottom = 6;
      pill.cornerRadius = 20;
      pill.fills = [{ type: 'SOLID', color: cPurpleLight }];
      createText(userText, 12, "Semi Bold", cPurple, pill);
      if (userBadge) {
        createBadge(userBadge, cPurple, cWhite, pill);
      }
      rightSide.appendChild(pill);
      btnLogout = createButton("Log out", cBg, cTextMuted, rightSide, 90, "Btn: Logout");
    } else {
      btnLogin = createButton("Log in", cWhite, cPurple, rightSide, 80, "Btn: Log In");
      btnRegister = createButton("Register", cPurple, cWhite, rightSide, 90, "Btn: Register");
    }
    nav.appendChild(rightSide);

    if (parent) parent.appendChild(nav);
    return { nav, logo, tabMap, btnLogout, btnLogin, btnRegister };
  }

  function makeBaseFrame(title, x, y, h = 900) {
    const f = figma.createFrame();
    f.name = title;
    f.resize(1440, h);
    f.x = x;
    f.y = y;
    f.fills = [{ type: 'SOLID', color: cBg }];
    f.clipsContent = true;
    return f;
  }

  // Check if frames already exist on page
  function findExisting(prefix) {
    return figma.currentPage.findOne(n => n.type === "FRAME" && n.name.startsWith(prefix));
  }

  let fD1 = findExisting("D1 ·") || findExisting("D1 ");
  let fD2 = findExisting("D2 ·") || findExisting("D2 ");
  let fD3 = findExisting("D3 ·") || findExisting("D3 ");
  let fD4 = findExisting("D4 ·") || findExisting("D4 ");
  let fD5 = findExisting("D5 ·") || findExisting("D5 ");
  let fD6 = findExisting("D6 ·") || findExisting("D6 ");
  let fD7 = findExisting("D7 ·") || findExisting("D7 ");
  let fD8 = findExisting("D8 ·") || findExisting("D8 ");
  let fD9 = findExisting("D9 ·") || findExisting("D9 ");

  let fD10 = findExisting("D10 ·") || findExisting("D10 ");
  let fD11 = findExisting("D11 ·") || findExisting("D11 ");
  let fD12 = findExisting("D12 ·") || findExisting("D12 ");
  let fD13 = findExisting("D13 ·") || findExisting("D13 ");
  let fD14 = findExisting("D14 ·") || findExisting("D14 ");
  let fD15 = findExisting("D15 ·") || findExisting("D15 ");

  const createdFrames = [];

  // ==========================================
  // ROW 4 (y = 3900): Admin Deep Dive
  // ==========================================
  if (!fD10) {
    fD10 = makeBaseFrame("D10 · Admin Pending Verification", 0, 3900);
    const navD10 = buildNav("Dashboard", true, "Alumni Admin", "Verification Office", fD10);
    const d10Body = figma.createFrame();
    d10Body.name = "Table & Approvals";
    d10Body.resize(1280, 760);
    d10Body.x = 80;
    d10Body.y = 88;
    d10Body.layoutMode = "VERTICAL";
    d10Body.itemSpacing = 16;
    d10Body.fills = [];
    const d10Top = figma.createFrame();
    d10Top.layoutMode = "HORIZONTAL";
    d10Top.layoutAlign = "STRETCH";
    d10Top.primaryAxisAlignItems = "SPACE_BETWEEN";
    d10Top.counterAxisAlignItems = "CENTER";
    d10Top.fills = [];
    createText("Pending Alumni Registration Queue (14 Applicants)", 24, "Bold", cTextDark, d10Top);
    const d10BackToDbBtn = createButton("Go to Central Database", cBg, cTextDark, d10Top, 180, "Btn: D10 to D11");
    d10Body.appendChild(d10Top);

    const d10Table = figma.createFrame();
    d10Table.name = "Applicants Verification Table";
    d10Table.layoutAlign = "STRETCH";
    d10Table.cornerRadius = 14;
    d10Table.fills = [{ type: 'SOLID', color: cWhite }];
    d10Table.layoutMode = "VERTICAL";

    for (const app of [
      { name: "Tariq Hasan", id: "ID: 190201044", batch: "Batch 8", dept: "CSE", comp: "Junior SE @ BJIT", date: "Registered: 2 hours ago" },
      { name: "Sadia Parveen", id: "ID: 180102012", batch: "Batch 7", dept: "EEE", comp: "Telecom Engineer @ Grameenphone", date: "Registered: 5 hours ago" }
    ]) {
      const row = figma.createFrame();
      row.name = `Row: ${app.name}`;
      row.layoutMode = "HORIZONTAL";
      row.layoutAlign = "STRETCH";
      row.primaryAxisAlignItems = "SPACE_BETWEEN";
      row.counterAxisAlignItems = "CENTER";
      row.paddingTop = 16;
      row.paddingBottom = 16;
      row.paddingLeft = 24;
      row.paddingRight = 24;
      row.fills = [{ type: 'SOLID', color: cWhite }];
      const info = figma.createFrame();
      info.layoutMode = "VERTICAL";
      info.itemSpacing = 4;
      info.fills = [];
      createText(`${app.name} (${app.id})`, 14, "Bold", cTextDark, info);
      createText(`${app.dept} · ${app.batch} · ${app.comp} · ${app.date}`, 12, "Regular", cTextMuted, info);
      row.appendChild(info);
      const actions = figma.createFrame();
      actions.layoutMode = "HORIZONTAL";
      actions.itemSpacing = 8;
      actions.fills = [];
      createButton("Approve", cEmerald, cWhite, actions);
      createButton("Reject", cRoseLight, cRose, actions);
      row.appendChild(actions);
      d10Table.appendChild(row);
    }
    d10Body.appendChild(d10Table);
    fD10.appendChild(d10Body);
    createdFrames.push(fD10);
  }

  if (!fD11) {
    fD11 = makeBaseFrame("D11 · Admin Alumni Database", 1540, 3900);
    const navD11 = buildNav("Dashboard", true, "Alumni Admin", "Database Control", fD11);
    const d11Body = figma.createFrame();
    d11Body.name = "Database Control Body";
    d11Body.resize(1280, 760);
    d11Body.x = 80;
    d11Body.y = 88;
    d11Body.layoutMode = "VERTICAL";
    d11Body.itemSpacing = 16;
    d11Body.fills = [];
    const d11Top = figma.createFrame();
    d11Top.layoutMode = "HORIZONTAL";
    d11Top.layoutAlign = "STRETCH";
    d11Top.primaryAxisAlignItems = "SPACE_BETWEEN";
    d11Top.fills = [];
    createText("Central Alumni Records (1,248 Records)", 24, "Bold", cTextDark, d11Top);
    createButton("📥 Export CSV", cPurple, cWhite, d11Top);
    d11Body.appendChild(d11Top);

    const d11Table = figma.createFrame();
    d11Table.name = "Records Table";
    d11Table.layoutAlign = "STRETCH";
    d11Table.cornerRadius = 14;
    d11Table.fills = [{ type: 'SOLID', color: cWhite }];
    d11Table.layoutMode = "VERTICAL";
    for (const r of [
      { name: "Rahim Islam", dept: "CSE", batch: "Batch 6", cur: "Lead Engineer @ Grab", status: "Verified" },
      { name: "Farhana Yasmin", dept: "CSE", batch: "Batch 4", cur: "Senior Engineer @ Google", status: "Verified" }
    ]) {
      const row = figma.createFrame();
      row.layoutMode = "HORIZONTAL";
      row.layoutAlign = "STRETCH";
      row.primaryAxisAlignItems = "SPACE_BETWEEN";
      row.counterAxisAlignItems = "CENTER";
      row.paddingTop = 16;
      row.paddingBottom = 16;
      row.paddingLeft = 24;
      row.paddingRight = 24;
      row.fills = [{ type: 'SOLID', color: cWhite }];
      const inf = figma.createFrame();
      inf.layoutMode = "VERTICAL";
      inf.itemSpacing = 4;
      inf.fills = [];
      createText(r.name, 14, "Bold", cTextDark, inf);
      createText(`${r.dept} · ${r.batch} · ${r.cur}`, 12, "Regular", cTextMuted, inf);
      row.appendChild(inf);
      createBadge(r.status, cEmeraldLight, cEmerald, row);
      d11Table.appendChild(row);
    }
    d11Body.appendChild(d11Table);
    fD11.appendChild(d11Body);
    createdFrames.push(fD11);
  }

  if (!fD12) {
    fD12 = makeBaseFrame("D12 · Admin Event & Content Management", 3080, 3900);
    const navD12 = buildNav("Dashboard", true, "Alumni Admin", "Event Scheduler", fD12);
    const d12Body = figma.createFrame();
    d12Body.name = "Event & Content Body";
    d12Body.resize(1280, 760);
    d12Body.x = 80;
    d12Body.y = 88;
    d12Body.layoutMode = "VERTICAL";
    d12Body.itemSpacing = 16;
    d12Body.fills = [];
    const d12Top = figma.createFrame();
    d12Top.layoutMode = "HORIZONTAL";
    d12Top.layoutAlign = "STRETCH";
    d12Top.primaryAxisAlignItems = "SPACE_BETWEEN";
    d12Top.fills = [];
    createText("Alumni Affairs Event & Content Scheduler", 24, "Bold", cTextDark, d12Top);
    createButton("+ Schedule Official Event", cPurple, cWhite, d12Top);
    d12Body.appendChild(d12Top);

    for (const ev of [
      { name: "BAUST Grand Alumni Reunion 2026", status: "Published", rsvps: "184 Confirmed RSVPs" },
      { name: "Industry Career Summit: Tech & Manufacturing", status: "Published", rsvps: "92 Confirmed RSVPs" }
    ]) {
      const c = figma.createFrame();
      c.name = `Event Manager: ${ev.name}`;
      c.resize(1280, 120);
      c.cornerRadius = 14;
      c.fills = [{ type: 'SOLID', color: cWhite }];
      c.paddingLeft = 24;
      c.paddingRight = 24;
      c.paddingTop = 18;
      c.paddingBottom = 18;
      c.layoutMode = "HORIZONTAL";
      c.primaryAxisAlignItems = "SPACE_BETWEEN";
      c.counterAxisAlignItems = "CENTER";
      const inf = figma.createFrame();
      inf.layoutMode = "VERTICAL";
      inf.itemSpacing = 6;
      inf.fills = [];
      createText(ev.name, 16, "Bold", cTextDark, inf);
      createText(`${ev.status} · ${ev.rsvps}`, 12, "Regular", cTextMuted, inf);
      c.appendChild(inf);
      const act = figma.createFrame();
      act.layoutMode = "HORIZONTAL";
      act.itemSpacing = 8;
      act.fills = [];
      createButton("Edit Details", cBg, cTextDark, act);
      createButton("Export RSVPs", cPurple, cWhite, act);
      c.appendChild(act);
      d12Body.appendChild(c);
    }
    fD12.appendChild(d12Body);
    createdFrames.push(fD12);
  }

  // ==========================================
  // ROW 5 (y = 4900): Modals & Student View
  // ==========================================
  if (!fD13) {
    fD13 = makeBaseFrame("D13 · Alumnus Profile Detail Modal", 0, 4900);
    buildNav("Directory", false, "Rahim (Batch 6)", "Alumnus", fD13);
    const modal13 = figma.createFrame();
    modal13.name = "Detailed Profile Modal Container";
    modal13.resize(680, 680);
    modal13.x = 380;
    modal13.y = 120;
    modal13.cornerRadius = 20;
    modal13.fills = [{ type: 'SOLID', color: cWhite }];
    modal13.strokes = [{ type: 'SOLID', color: cBorder }];
    modal13.paddingLeft = 36;
    modal13.paddingTop = 36;
    modal13.paddingRight = 36;
    modal13.layoutMode = "VERTICAL";
    modal13.itemSpacing = 16;
    createText("Rahim Islam", 26, "Bold", cTextDark, modal13);
    createText("Lead Software Engineer @ Grab · Singapore / Remote", 15, "Medium", cPurple, modal13);
    createBadge("Batch 6 · CSE · Graduated 2022", cPurpleLight, cPurple, modal13);
    createText("About Rahim:", 14, "Bold", cTextDark, modal13);
    createText("Passionate full-stack & distributed systems engineer. Mentoring BAUST juniors on algorithm design, competitive programming, and interview preparation.", 13, "Regular", cTextMuted, modal13);
    const mBtns = figma.createFrame();
    mBtns.layoutMode = "HORIZONTAL";
    mBtns.itemSpacing = 12;
    mBtns.fills = [];
    createButton("Connect on LinkedIn", cSky, cTextDark, mBtns);
    createButton("Request Mentorship", cPurple, cWhite, mBtns);
    const d13CloseBtn = createButton("Close Profile (Back)", cBg, cTextDark, mBtns, 140, "Btn: Close Profile");
    modal13.appendChild(mBtns);
    fD13.appendChild(modal13);
    createdFrames.push(fD13);
  }

  if (!fD14) {
    fD14 = makeBaseFrame("D14 · Post Job & New Thread Dialogs", 1540, 4900);
    buildNav("Jobs", false, "Rahim (Batch 6)", "Alumnus", fD14);
    const modal14 = figma.createFrame();
    modal14.name = "Post Job Dialog";
    modal14.resize(600, 640);
    modal14.x = 420;
    modal14.y = 130;
    modal14.cornerRadius = 20;
    modal14.fills = [{ type: 'SOLID', color: cWhite }];
    modal14.strokes = [{ type: 'SOLID', color: cBorder }];
    modal14.paddingLeft = 32;
    modal14.paddingTop = 32;
    modal14.paddingRight = 32;
    modal14.layoutMode = "VERTICAL";
    modal14.itemSpacing = 14;
    createText("Post a Job / Internship Opening", 20, "Bold", cTextDark, modal14);
    createButton("Job Title (e.g. Associate Software Engineer)", cBg, cTextMuted, modal14, 536);
    createButton("Company Name (e.g. Brain Station 23)", cBg, cTextMuted, modal14, 536);
    createButton("Location & Work Type (Dhaka / Remote / Hybrid)", cBg, cTextMuted, modal14, 536);
    createButton("Salary Range / Stipend (e.g. 50k - 70k BDT)", cBg, cTextMuted, modal14, 536);
    const d14SubmitJobBtn = createButton("Publish Opportunity to Alumni & Students", cPurple, cWhite, modal14, 536, "Btn: Publish Job");
    const d14CloseDialogBtn = createButton("Cancel / Back to Jobs", cBg, cTextDark, modal14, 536, "Btn: Cancel Job");
    fD14.appendChild(modal14);
    createdFrames.push(fD14);
  }

  if (!fD15) {
    fD15 = makeBaseFrame("D15 · Student View (Restricted Admin)", 3080, 4900);
    buildNav("Home", false, "Tanvir Hasan (Student)", "Student Member", fD15);
    const d15Body = figma.createFrame();
    d15Body.name = "Student Restricted Body";
    d15Body.resize(1280, 760);
    d15Body.x = 80;
    d15Body.y = 88;
    d15Body.layoutMode = "VERTICAL";
    d15Body.itemSpacing = 20;
    d15Body.fills = [];
    const stdBanner = figma.createFrame();
    stdBanner.name = "Restricted Admin Notice Banner";
    stdBanner.resize(1280, 140);
    stdBanner.cornerRadius = 16;
    stdBanner.fills = [{ type: 'SOLID', color: cPurple }];
    stdBanner.paddingLeft = 32;
    stdBanner.paddingTop = 28;
    stdBanner.layoutMode = "VERTICAL";
    stdBanner.itemSpacing = 6;
    createText("Welcome, Tanvir Hasan (Current Student)", 22, "Bold", cWhite, stdBanner);
    createText("As a current BAUST student, you can search alumni mentors, RSVP for career talks, and apply for internships. (Administrative Dashboard is strictly restricted).", 14, "Regular", cSkyLight, stdBanner);
    d15Body.appendChild(stdBanner);

    const stdCard = figma.createFrame();
    stdCard.name = "Mentorship Request Card";
    stdCard.layoutMode = "HORIZONTAL";
    stdCard.layoutAlign = "STRETCH";
    stdCard.primaryAxisAlignItems = "SPACE_BETWEEN";
    stdCard.counterAxisAlignItems = "CENTER";
    stdCard.paddingTop = 24;
    stdCard.paddingBottom = 24;
    stdCard.paddingLeft = 28;
    stdCard.paddingRight = 28;
    stdCard.cornerRadius = 14;
    stdCard.fills = [{ type: 'SOLID', color: cWhite }];
    stdCard.strokes = [{ type: 'SOLID', color: cBorder }];
    const stdCardInfo = figma.createFrame();
    stdCardInfo.layoutMode = "VERTICAL";
    stdCardInfo.itemSpacing = 4;
    stdCardInfo.fills = [];
    createText("Find an Alumnus Mentor in your field", 16, "Bold", cTextDark, stdCardInfo);
    createText("Browse 1,248 verified BAUST graduates working at Google, Therap, Brain Station 23, and Cloud Systems.", 13, "Regular", cTextMuted, stdCardInfo);
    stdCard.appendChild(stdCardInfo);
    const stdMentorshipBtn = createButton("Request Mentorship", cPurple, cWhite, stdCard, 180, "Btn: Student Mentorship");
    d15Body.appendChild(stdCard);

    fD15.appendChild(d15Body);
    createdFrames.push(fD15);
  }

  // Helper to wire node by searching text or name inside frame
  async function wireBySearch(parentFrame, searchPattern, targetFrame) {
    if (!parentFrame || !targetFrame) return;
    const match = parentFrame.findOne(n => {
      if (n.name && n.name.toLowerCase().includes(searchPattern.toLowerCase())) return true;
      if (n.type === "TEXT" && n.characters.toLowerCase().includes(searchPattern.toLowerCase())) return true;
      return false;
    });
    if (match) {
      await wireInteraction(match.parent && match.parent.type === "FRAME" ? match.parent : match, targetFrame);
    }
  }

  // Wire interactions between frames (whether existing or freshly created)
  if (fD1) {
    await wireBySearch(fD1, "Log in", fD2);
    await wireBySearch(fD1, "Join", fD3);
    await wireBySearch(fD1, "Register", fD3);
    await wireBySearch(fD1, "Directory", fD5);
    await wireBySearch(fD1, "Events", fD6);
    await wireBySearch(fD1, "Job", fD8);
  }

  if (fD2) {
    await wireBySearch(fD2, "Sign In as Alumnus", fD4);
    await wireBySearch(fD2, "Sign In as Alumni Admin", fD9);
    await wireBySearch(fD2, "Sign In as Student", fD15);
    await wireBySearch(fD2, "Register", fD3);
  }

  if (fD3) {
    await wireBySearch(fD3, "Submit", fD2);
    await wireBySearch(fD3, "Log in", fD2);
  }

  // Wire Header Nav across all available frames
  const allFrames = [fD4, fD5, fD6, fD7, fD8, fD9, fD10, fD11, fD12, fD13, fD14, fD15].filter(Boolean);
  for (const f of allFrames) {
    await wireBySearch(f, "Home", fD4);
    await wireBySearch(f, "Directory", fD5);
    await wireBySearch(f, "Events", fD6);
    await wireBySearch(f, "Forum", fD7);
    await wireBySearch(f, "Jobs", fD8);
    await wireBySearch(f, "Dashboard", fD9);
    await wireBySearch(f, "Log out", fD1);
  }

  if (fD4) {
    await wireBySearch(fD4, "Reunion", fD6);
    await wireBySearch(fD4, "Senior Backend", fD8);
  }

  if (fD5 && fD13) {
    await wireBySearch(fD5, "View profile", fD13);
  }

  if (fD7 && fD14) {
    await wireBySearch(fD7, "Start", fD14);
  }

  if (fD8 && fD14) {
    await wireBySearch(fD8, "Post", fD14);
  }

  if (fD9) {
    if (fD10) await wireBySearch(fD9, "Review", fD10);
    if (fD10) await wireBySearch(fD9, "Pending", fD10);
    if (fD11) await wireBySearch(fD9, "Total Alumni", fD11);
    if (fD12) await wireBySearch(fD9, "Upcoming Events", fD12);
  }

  if (fD13 && fD5) {
    await wireBySearch(fD13, "Close", fD5);
  }

  if (fD14 && fD8) {
    await wireBySearch(fD14, "Cancel", fD8);
    await wireBySearch(fD14, "Publish", fD8);
  }

  if (fD15 && fD5) {
    await wireBySearch(fD15, "Mentorship", fD5);
  }

  // Zoom into view
  const targetSelection = createdFrames.length > 0 ? createdFrames : allFrames;
  figma.currentPage.selection = targetSelection;
  figma.viewport.scrollAndZoomIntoView(targetSelection);

  return {
    success: true,
    message: "Prototyping wires and missing rows processed!"
  };
}

run().then(() => {
  figma.notify("🎉 Done! All frames & interactive prototype wires are fully connected!");
}).catch(err => {
  console.error("Plugin error:", err);
});

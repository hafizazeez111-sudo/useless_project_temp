class UselessApp {
  constructor() {
    this.p1Questions = [
      {
        level: "PHONE SCROLL PLAINS",
        title: "📱 “Phone eduthath enthina enn ariyilla… pinne 20 minute scroll cheythittundo?”",
        options: ["ഇല്ല", "കുറച്ച്", "എപ്പോഴും", "Phone thanne ente jeevitham"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Restraint level 100!",
          "Casual scrolling mode.",
          "Living on the scroll feeds.",
          "Phone has merged with your soul."
        ]
      },
      {
        level: "AMMA'S CALL KINGDOM",
        title: "🍛 “Amma ‘food ready’ ennu paranjal, nee ethra neram kazhinjaanu ezhunnelkkunnath?”",
        options: ["ഉടനെ", "5 മിനിറ്റ്", "15 മിനിറ്റ്", "“വരുന്നു…” എന്ന് പറഞ്ഞിട്ട് 30 മിനിറ്റ്"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Good child alert!",
          "5 more minutes is standard.",
          "Amma is holding the flying chappal.",
          "'Varunnu' is an endless loop."
        ]
      },
      {
        level: "STUDY TABLE CASTLE",
        title: "📚 “Padikkan irunnappol ആദ്യം table clean cheyyanam enn thonniyittundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "എപ്പോഴും", "Table clean cheythu… padichilla"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Straight to study mode.",
          "Clean desk, clean mind.",
          "Table looks 10/10, score 0/100.",
          "Exam is tomorrow, table is shining."
        ]
      },
      {
        level: "ALARM DESTINY",
        title: "😴 “Alarm 7 AM-nu vechittu actual aayi ezhunnelkkunnath eppo?”",
        options: ["7:00 AM", "7:15 AM", "8:00 AM", "Alarm enne ezhunnelppikkan thanne nirthi 😭"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Punctual legend!",
          "Snooze button hero.",
          "Good morning at 8:00 AM.",
          "Alarm Clock has quit its job."
        ]
      },
      {
        level: "FRIDGE MYSTERY",
        title: "🧊 “Fridge thurannu, inside same food. Close cheythu 3 min kazhinju veendum thurannitto?”",
        options: ["ഇല്ല", "1–2 തവണ", "കുറെ തവണ", "Bro expected DLC content! 💀"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Iron willpower!",
          "Expecting a surprise snack update.",
          "Fridgematics scientist.",
          "Fridge is calling your name."
        ]
      },
      {
        level: "ROOM CLEANING NOSTALGIA",
        title: "🧹 “Room clean cheyyan irunnu… old photos & screenshots kandu 2 hours poyo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "പലപ്പോഴും", "Room still dirty, nostalgic level max 😭"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Cleaning complete!",
          "Nostalgia trip started.",
          "Old memories unlocked.",
          "Room still dirty, heart full."
        ]
      }
    ];

    this.p2Questions = [
      {
        level: "REST TIME DUNE",
        title: "😂 “‘5 minute rest edukkam’ ennu paranjittu athu 2 manikkoor aayittundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "പലപ്പോഴും", "2 മണിക്കൂർ? അത്രയൊക്കെ മാത്രം?"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Strict timer accuracy!",
          "A small extended power nap.",
          "5 minutes turned into half a day.",
          "Woke up in another year."
        ]
      },
      {
        level: "WHATSAPP AMNESIA",
        title: "📱 “WhatsApp open cheythu, enthina open cheythath enn marannittundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "സ്ഥിരം", "WhatsApp aanu ente brain 🧠"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Sharp memory!",
          "Blank screen, blank mind.",
          "Instant memory loss achieved.",
          "Your brain runs on WhatsApp RAM."
        ]
      },
      {
        level: "FOOD DELIVERY TRACK",
        title: "🍗 “Food order cheythu ‘delivery varunnundo?’ enn 5 min koodumbol check cheyyarundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "എപ്പോഴും", "Delivery boy-ne njan personally ariyam"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Patient customer.",
          "GPS watching intensifies.",
          "Refreshing the map every second.",
          "Delivery guy is officially your best friend."
        ]
      },
      {
        level: "ASSIGNMENT CHAOS",
        title: "💻 “Assignment file-nu final.pdf, final2.pdf, final_final.pdf, final_last.pdf ennu names koduthittundo?”",
        options: ["ഒരിക്കലും ഇല്ല", "1–2 തവണ", "സ്ഥിരം", "File name mathram aanu complete"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Organized file naming!",
          "final_real_final_v3.pdf",
          "Directory full of finals.",
          "Only the file name is completed."
        ]
      },
      {
        level: "BED GRAVITY TOWER",
        title: "🛏️ “Padikkan room-il poyittu 10 minute kazhinjappol bed-il kidakkunnath kandittundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "എപ്പോഴും", "Bed enne select cheyyunnu"],
        scores: [0, 8, 16, 25],
        commentary: [
          "Studying at desk legend.",
          "Horizontal studying activated.",
          "Gravity pulled you onto the mattress.",
          "Bed selected you automatically."
        ]
      },
      {
        level: "47 REELS LOOP",
        title: "🎬 “Just ONE reel paranjittu 47 reels scroll cheythu 2 hours waste aayittundo?”",
        options: ["ഇല്ല", "ചിലപ്പോൾ", "സ്ഥിരം", "Mathematics has left the chat 😭"],
        scores: [0, 8, 16, 25],
        commentary: [
          "15 seconds scroll.",
          "Reel algorithm won.",
          "Infinite feed scroll active.",
          "Math left the room!"
        ]
      }
    ];

    this.courtNotices = [
      "🚨 OBJECTION! That answer is too normal.",
      "⚖️ COURT NOTICE: Player is dangerously close to becoming productive. Immediate action required!",
      "🚨 EMERGENCY: Productivity detected. Deploying distractions… 📱 + 🍪 + 😴",
      "📢 SYSTEM ANNOUNCEMENT: Common sense quality remaining: 144p.",
      "⚠️ WARNING: Serious answers are strictly prohibited in this realm!"
    ];

    this.players = ["Player 1", "Player 2"];
    this.scores = [0, 0];
    this.faces = [null, null];
    this.streams = [null, null];
    this.currentTurn = 0;
    this.currentQuestion = 0;
    this.coins = 0;
    this.audioCtx = null;

    this.init();
  }

  init() {
    console.log("Uselessness Crazy Manglish Engine initialized!");
  }

  // Audio Synthesizer Engine
  initAudio() {
    if (!this.audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.audioCtx = new AudioContext();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playCoinSound() {
    this.initAudio();
    if (!this.audioCtx) return;

    const osc1 = this.audioCtx.createOscillator();
    const osc2 = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();

    osc1.type = 'square';
    osc2.type = 'square';

    const now = this.audioCtx.currentTime;
    osc1.frequency.setValueAtTime(987.77, now); // B5
    osc1.frequency.setValueAtTime(1318.51, now + 0.08); // E6

    osc2.frequency.setValueAtTime(1244.67, now);
    osc2.frequency.setValueAtTime(1661.22, now + 0.08);

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.35);
    osc2.stop(now + 0.35);
  }

  playBlipSound() {
    this.initAudio();
    if (!this.audioCtx) return;

    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    const now = this.audioCtx.currentTime;

    osc.type = 'sine';
    osc.frequency.setValueAtTime(440, now);
    osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

    gain.gain.setValueAtTime(0.1, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

    osc.connect(gain);
    gain.connect(this.audioCtx.destination);

    osc.start(now);
    osc.stop(now + 0.08);
  }

  playFanfareSound() {
    this.initAudio();
    if (!this.audioCtx) return;

    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        const now = this.audioCtx.currentTime;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.15, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(now);
        osc.stop(now + 0.25);
      }, idx * 120);
    });
  }

  showScreen(id) {
    this.playBlipSound();
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(id);
    if (target) {
      target.classList.add('active');
      window.scrollTo(0, 0);
    }
  }

  beginFaceCapture() {
    const p1 = document.getElementById('p1-input').value.trim() || "Player 1";
    const p2 = document.getElementById('p2-input').value.trim() || "Player 2";
    this.players = [p1, p2];
    this.faces = [null, null];

    document.getElementById('cam-name-1').textContent = p1;
    document.getElementById('cam-name-2').textContent = p2;
    document.getElementById('camera-status').textContent = "Camera starting… Face scanner searching for human common sense…";

    this.showScreen('camera');
    this.startCameras();
  }

  async startCameras() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      document.getElementById('camera-status').textContent = "Webcam API unavailable. Avatar cards initialized!";
      this.generateFallbackAvatars();
      document.getElementById('btn-continue-game').disabled = false;
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" }, audio: false });
      this.streams[0] = stream;
      this.streams[1] = stream;

      const v1 = document.getElementById('video-1');
      const v2 = document.getElementById('video-2');
      v1.srcObject = stream;
      v2.srcObject = stream;

      document.getElementById('cam-placeholder-1').style.display = 'none';
      document.getElementById('cam-placeholder-2').style.display = 'none';
      document.getElementById('camera-status').textContent = "Camera ready! Click 📸 SNAP to capture your useless heroes.";
    } catch (e) {
      console.warn("Camera blocked or unavailable. Falling back to generated avatars.", e);
      document.getElementById('camera-status').textContent = "Camera access blocked. Custom hero avatars generated!";
      this.generateFallbackAvatars();
      document.getElementById('btn-continue-game').disabled = false;
    }
  }

  captureFace(index) {
    this.playBlipSound();
    const video = document.getElementById(`video-${index + 1}`);
    const canvas = document.getElementById(`canvas-${index + 1}`);
    
    if (video && video.videoWidth > 0) {
      canvas.width = video.videoWidth || 400;
      canvas.height = video.videoHeight || 300;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      this.faces[index] = canvas.toDataURL('image/jpeg', 0.88);
    } else {
      this.faces[index] = this.createAvatarDataUrl(this.players[index], index === 0 ? '🧑‍🚀' : '🧑‍🎤');
    }

    const thumb = document.getElementById(`face-thumb-${index + 1}`);
    thumb.src = this.faces[index];
    thumb.style.display = 'block';

    const pName = this.players[index];
    const bothReady = this.faces[0] && this.faces[1];
    
    if (index === 0) {
      document.getElementById('camera-status').textContent = `Face saved. Dignity not found. Camera quality 4K. Common sense quality 144p. Okay next victim… Sorry, next PLAYER! 😂`;
    } else {
      document.getElementById('camera-status').textContent = `Both players scanned! Intelligence check: 1%... Error. We will not continue this investigation. Ready to enter level!`;
    }

    if (bothReady) {
      document.getElementById('btn-continue-game').disabled = false;
    }
  }

  retakeFace(index) {
    this.playBlipSound();
    this.faces[index] = null;
    const thumb = document.getElementById(`face-thumb-${index + 1}`);
    thumb.style.display = 'none';
    thumb.src = '';
    document.getElementById('btn-continue-game').disabled = !(this.faces[0] && this.faces[1]);
    document.getElementById('camera-status').textContent = `Retake face scan ready for ${this.players[index]}.`;
  }

  generateFallbackAvatars() {
    this.faces[0] = this.createAvatarDataUrl(this.players[0], '🧑‍🚀');
    this.faces[1] = this.createAvatarDataUrl(this.players[1], '🧑‍🎤');
    
    [0, 1].forEach(i => {
      const thumb = document.getElementById(`face-thumb-${i + 1}`);
      thumb.src = this.faces[i];
      thumb.style.display = 'block';
    });
  }

  createAvatarDataUrl(name, emoji) {
    const canvas = document.createElement('canvas');
    canvas.width = 200;
    canvas.height = 200;
    const ctx = canvas.getContext('2d');

    const grad = ctx.createLinearGradient(0, 0, 200, 200);
    grad.addColorStop(0, '#f4512a');
    grad.addColorStop(1, '#ffcb2b');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 200, 200);

    ctx.font = '75px sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(emoji, 100, 90);

    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 18px Outfit, sans-serif';
    ctx.fillText(name.substring(0, 10), 100, 160);

    return canvas.toDataURL();
  }

  finishFaceCapture() {
    this.streams.forEach(s => s && s.getTracks().forEach(t => t.stop()));
    this.scores = [0, 0];
    this.currentTurn = 0;
    this.currentQuestion = 0;
    this.coins = 0;

    this.showScreen('game');
    this.renderQuestion();
  }

  renderQuestion() {
    const qList = this.currentTurn === 0 ? this.p1Questions : this.p2Questions;
    const qData = qList[this.currentQuestion];
    const name = this.players[this.currentTurn];
    const currentFace = this.faces[this.currentTurn];

    document.getElementById('game-round-hud').textContent = `LEVEL ${this.currentQuestion + 1} — ${qData.level}`;
    document.getElementById('game-turn-hud').textContent = `${name.toUpperCase()} • ${this.scores[this.currentTurn]}% USELESS`;

    const turnNameEl = document.getElementById('turn-player-name');
    if (turnNameEl) turnNameEl.textContent = name.toUpperCase();

    const turnScoreEl = document.getElementById('turn-player-score');
    if (turnScoreEl) turnScoreEl.textContent = `${this.scores[this.currentTurn]}% USELESS`;

    const turnBadgeEl = document.querySelector('.turn-badge-tag');
    if (turnBadgeEl) turnBadgeEl.textContent = `${name.toUpperCase()}'S QUESTION`;

    const faceUrl = currentFace || this.createAvatarDataUrl(name, this.currentTurn === 0 ? '🧑‍🚀' : '🧑‍🎤');

    const bigPhotoEl = document.getElementById('game-player-photo');
    if (bigPhotoEl) {
      bigPhotoEl.src = faceUrl;
      bigPhotoEl.style.display = 'block';
    }

    const photoEl = document.getElementById('active-player-photo');
    if (photoEl) {
      photoEl.src = faceUrl;
      photoEl.style.display = 'block';
    }

    document.getElementById('coin-counter').textContent = String(this.coins).padStart(3, '0');
    document.getElementById('question-text').textContent = qData.title;

    const grid = document.getElementById('answers-grid');
    grid.innerHTML = '';

    qData.options.forEach((optText, optIdx) => {
      const btn = document.createElement('button');
      btn.className = 'answer-card';
      btn.textContent = optText;
      btn.onclick = () => this.handleAnswer(optIdx);
      grid.appendChild(btn);
    });

    // Hide court alert banner on new question load
    const courtBanner = document.getElementById('court-alert-banner');
    if (courtBanner) courtBanner.style.display = 'none';

    document.getElementById('game-commentary').textContent = `Okay da ${name}… Think carefully before choosing your destiny.`;
  }

  handleAnswer(optIdx) {
    this.playCoinSound();
    const qList = this.currentTurn === 0 ? this.p1Questions : this.p2Questions;
    const qData = qList[this.currentQuestion];
    const addedScore = qData.scores[optIdx];
    this.scores[this.currentTurn] += addedScore;
    this.coins += Math.max(5, addedScore);

    this.spawnCoinExplosion();

    // Crazy Reaction Dialogue Pack Logic
    let reactionMsg = qData.commentary[optIdx];
    if (addedScore === 0) {
      reactionMsg = `Eda… ee game useless people-kk vendi aanu. Too productive! 😭 Please try again with less responsibility.`;
    } else if (addedScore >= 8 && addedScore <= 16) {
      reactionMsg = `YESSSSS! Ithu aanu nammude manushyan! Score koodatte da! Aaha… ivide talent und.`;
    } else if (addedScore === 25) {
      reactionMsg = `… Bro. BRO. ENTHA IVDE NADAKKUNNE? 💀 This is not an answer. This is a lifestyle!`;
    }

    // Coin Commentary
    let coinMsg = "";
    if (addedScore <= 5) coinMsg = " (Okay… beginner uselessness)";
    else if (addedScore <= 12) coinMsg = " (Good job da)";
    else if (addedScore <= 18) coinMsg = " (AHA! THAT'S THE SPIRIT!)";
    else coinMsg = " (BROTHER HAS NO PLANS FOR TOMORROW. 💀)";

    document.getElementById('game-commentary').textContent = reactionMsg + coinMsg;

    // Random Court / Emergency Interruptions
    if (Math.random() > 0.45 || addedScore === 0) {
      const randomNotice = this.courtNotices[Math.floor(Math.random() * this.courtNotices.length)];
      const courtBanner = document.getElementById('court-alert-banner');
      const courtText = document.getElementById('court-alert-text');
      if (courtBanner && courtText) {
        courtText.textContent = randomNotice;
        courtBanner.style.display = 'block';
      }
    }
    
    // Disable buttons
    document.querySelectorAll('.answer-card').forEach(b => b.disabled = true);

    setTimeout(() => {
      this.currentTurn++;
      if (this.currentTurn >= 2) {
        this.currentTurn = 0;
        this.currentQuestion++;
      }

      if (this.currentQuestion >= this.p1Questions.length) {
        this.showResults();
      } else {
        this.renderQuestion();
      }
    }, 1250);
  }

  spawnCoinExplosion() {
    for (let i = 0; i < 6; i++) {
      const coin = document.createElement('div');
      coin.className = 'coin-particle';
      coin.textContent = '🪙';
      coin.style.left = `${45 + (Math.random() * 15 - 7.5)}%`;
      coin.style.top = `${45 + (Math.random() * 10 - 5)}%`;
      document.body.appendChild(coin);
      setTimeout(() => coin.remove(), 1000);
    }
  }

  getUselessTitle(score) {
    if (score <= 20) return "🌟 INNOCENT STUDENT";
    if (score <= 40) return "🍄 NORMAL COLLEGE STUDENT";
    if (score <= 60) return "🪙 PROFESSIONAL NONSENSE";
    if (score <= 75) return "🔥 TIME WASTER WARRIOR";
    if (score <= 90) return "💀 DIVORCED FROM PRODUCTIVITY";
    return "☠️ RESTART HUMAN (SYSTEM OVERLOAD)";
  }

  showResults() {
    this.playFanfareSound();
    // Normalize total score out of 150 (6 questions x 25 max = 150 max raw score)
    this.scores = this.scores.map(s => Math.min(100, Math.round((s / 150) * 100)));

    this.showScreen('results');

    const winner = this.scores[0] === this.scores[1]
      ? "NOBODY WINS"
      : (this.scores[0] > this.scores[1] ? this.players[0] : this.players[1]);

    const diff = Math.abs(this.scores[0] - this.scores[1]).toFixed(1);

    const winnerBanner = document.getElementById('winner-banner');
    winnerBanner.textContent = winner === "NOBODY WINS"
      ? "💀 WINNER: NOBODY! (RANDU PERUM USELESS)"
      : `🏆 ${winner.toUpperCase()} WINS! (OFFICIALLY MORE USELESS)`;

    // Render scorecards
    const scoreGrid = document.getElementById('scorecards-grid');
    scoreGrid.innerHTML = this.players.map((pName, idx) => `
      <div class="scorecard">
        <img src="${this.faces[idx] || ''}" class="captured-thumb" style="display: block;" alt="${pName}">
        <h2>${pName}</h2>
        <div class="score-percent">${this.scores[idx]}%</div>
        <div class="score-title">${this.getUselessTitle(this.scores[idx])}</div>
        <div class="progress-bar-container">
          <div class="progress-bar-fill" id="pbar-${idx}"></div>
        </div>
      </div>
    `).join('');

    setTimeout(() => {
      this.players.forEach((_, idx) => {
        const pbar = document.getElementById(`pbar-${idx}`);
        if (pbar) pbar.style.width = `${this.scores[idx]}%`;
      });
    }, 150);

    const highestIdx = this.scores.indexOf(Math.max(...this.scores));
    const highestPlayer = this.players[highestIdx];

    let compDiffMsg = "";
    if (parseFloat(diff) <= 5) {
      compDiffMsg = `<b>Difference:</b> ${diff}% — “This is more competitive than IPL! 💀 Both players fought hard for absolutely nothing.”<br><br>`;
    } else {
      compDiffMsg = `<b>Score Gap:</b> ${diff}% — “<b>${highestPlayer}</b>: Bro… Nee individually competition aanu da!”<br><br>`;
    }

    document.getElementById('verdict-text').innerHTML = `
      ${compDiffMsg}
      <b>☠️ THE TWIST:</b><br>
      “One final calculation… You spent valuable time playing a game about wasting time! That time, you could have studied, worked, slept, or touched grass. But you chose… THIS. 😂”<br><br>
      <b>🤖 PLAYER 1 ROAST:</b><br>
      “Task start cheyyan 3 business days edukkum. Phone use kandappo phone aanu main character. Fridge visit tottally maxed out! CLASS: PREMIUM USELESS HUMAN™”<br><br>
      <b>🤖 PLAYER 2 ROAST:</b><br>
      “Study plan und, study illa. Sleep schedule und, sleep schedule aanu ath follow cheyyunnath 😭 Tomorrow-ne personal assistant aakki. CLASS: LEGENDARY TIME WASTER™”
    `;

    document.getElementById('badge-list').innerHTML = `
      <span class="achievement-badge">🏆 ${this.scores[highestIdx] >= 75 ? "LEGENDARY TIME WASTER™" : "PREMIUM USELESS HUMAN™"}</span>
      <span class="achievement-badge">🪙 ${this.coins} COINS WASTED</span>
      <span class="achievement-badge">🌱 TOUCH GRASS: PENDING</span>
    `;
  }

  touchGrass() {
    this.playCoinSound();
    alert("🌱 Grass touched.\n\nCharacter growth: Uselessness reduced by 0.01%.\nCongratulations da! You are now 99.99% useless. Almost human. 😂");
    const badgeList = document.getElementById('badge-list');
    if (badgeList) {
      badgeList.innerHTML += `<span class="achievement-badge" style="background:#00ffcc; color:#003322;">🌱 TOUCHED GRASS (99.99% USELESS)</span>`;
    }
  }

  playAgainPrompt() {
    this.playBlipSound();
    if (confirm("PINNEYUM EE MANDATHARAM CHEYYANO?\n\nClick OK for: 'Respect. No lessons learned.'\nClick Cancel for: 'Good decision... Just kidding! PRESS START DA 💀'")) {
      location.reload();
    } else {
      location.reload();
    }
  }
}

// Global App Instance
window.app = new UselessApp();

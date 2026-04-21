---
title: "RespiraFibre"
date: 2025-10-18
type: landing

design:
  spacing: "3rem"

sections:
  # 1. The Problem: Hero + Why this matters
  - block: hero
    id: top
    content:
      title: "Respiratory Continuous Monitoring"
      text: "RespiraFibre uses a tiny sensor to add continuous breathing waveform monitoring helping teams notice meaningful change sooner within existing workflows."
      primary_action:
        text: See how it works
        url: "#how-it-works"
        icon: chart-bar
      secondary_action:
        text: Talk to the team
        url: "/contact"
    design:
      css_class: "rf-hero-bg dark rf-section"
      spacing:
        padding: ["2rem", 0, "2rem", 0]
      background:
        color: "navy"
        image:
          filename: "WebsitePage_Image.png"
          position: center
          size: cover
          filters:
            brightness: 0.45

  - block: markdown
    id: value-points
    content:
      title: "Why this matters"
      text: |
        <div class="rf-value-grid grid-container">
          <div class="rf-pill rf-value-stat">
            <div class="rf-value-stat-number">70%</div>
            <div class="rf-value-stat-label text-sm text-slate-600">Inaccuracy rate in traditional intermittent manual RR monitoring.</div>
          </div>
          <div class="rf-pill rf-value-stat">
            <div class="rf-value-stat-number">250K+</div>
            <div class="rf-value-stat-label text-sm text-slate-600">Annual preventable global hospital deaths due to late deterioration.</div>
          </div>
          <div class="rf-pill rf-value-stat">
            <div class="rf-value-stat-number">$30B+</div>
            <div class="rf-value-stat-label text-sm text-slate-600">Potential global healthcare savings through reduced ICU admissions.</div>
          </div>
          <div class="rf-pill rf-value-insight">
            <div><strong>Direct Source Sensing</strong></div>
            <div class="text-sm text-slate-600">Move beyond motion‑artifacts of SpO₂ and ECG. Our nanotechnology captures breathing directly at the source.</div>
          </div>
          <div class="rf-pill rf-value-insight">
            <div><strong>Predictive Recognition</strong></div>
            <div class="text-sm text-slate-600">Analyze high‑res waveform morphology to surface markers of distress before alarms trigger.</div>
          </div>
          <div class="rf-pill rf-value-insight">
            <div><strong>Closing the Gap</strong></div>
            <div class="text-sm text-slate-600">Provide clinical‑grade visibility during high‑risk periods when staff are away from the bedside.</div>
          </div>
        </div>
    design:
      css_class: "rf-section"
      background:
        color: "gray-50"

  # 2. Pain Points: static cards
  - block: cta-button-list
    id: pain-points
    content:
      title: ""
      text: ""
      buttons:
        - text: "Manual checks are error-prone"
          url: "#pain-manual-checks"
          icon: "exclamation-triangle"
        - text: "Subtle changes can be missed"
          url: "#pain-subtle-changes"
          icon: "eye-slash"
        - text: "Documentation burden adds friction"
          url: "#pain-documentation"
          icon: "clipboard-document-list"
    design:
      columns: "1"
      css_class: "rf-section"

  # 3. Our Solution: outcomes + architecture
  - block: features
    id: solution
    content:
      title: "Our Solution"
      text: "Ultra-sensitive sensors for accurate, continuous respiratory monitoring."
      items:
        - name: Imperceptible Sensors
          icon: heart
          description: |
            Our sensors detect every breath without discomfort or workflow disruption.
        - name: Real-Time Data
          icon: wifi
          description: |
            A lightweight reusable node wirelessly transmits high-fidelity breathing data to secure hospital systems (e.g. EPIC).
        - name: AI-Powered Insights
          icon: sparkles
          description: |
            Enables earlier detection of deterioration, with future expansion to classify cough, speech, and shortness of breath.
        - name: Sustainable Design
          icon: bolt
          description: |
            Disposable sensors with reusable modules — ultra-low cost, zero electronic waste, scalable globally.
        - name: Reduced ICU Admissions
          icon: "custom/shield"
          description: |
            Continuous monitoring allows earlier intervention, helping to reduce ICU admissions and improve patient outcomes.
        - name: Shorter Hospital Stay
          icon: clock
          description: |
            Early detection of deterioration can lower average length of stay (LoS), freeing beds and reducing costs.
    design:
      css_class: "rf-section"

  # 4. How it works: 3-step model
  - block: features
    id: how-it-works
    content:
      title: "How it works"
      text: "Seamless integration for patients and clinicians."
      items:
        - name: "1) Universal Interface Integration"
          icon: "link"
          description: "Our sensor does not add new wearables, and have no skin‑perfusion issues—just seamless sensing within existing routine workflows."
        - name: "2) Direct-Source Waveform Capture"
          icon: "signal"
          description: "By sensing directly, we eliminate the motion noise that plagues SpO₂‑derived monitoring. The result is a clean, motion‑tolerant respiratory waveform with a high signal‑to‑noise ratio."
        - name: "3) Clinician Alerts"
          icon: "chart-bar"
          description: "Real‑time data is processed to alert staff to deterioration."
    design:
      css_class: "rf-section"

  # 5. Testimonials
  - block: testimonials
    content:
      title: "What Clinicians Say:"
      items:
        - name: "Prof. Ramani Moonesinghe"
          role: "NHS England Interim Director of Patient Safety"
          image: "RamaniMoonesinghe.jpg.webp"
          text: "A valid, reliable and autonomous source of respiratory rate data would be enormously valuable"
    design:
      spacing:
        padding: ["3rem", 0, "3rem", 0]

  # 6. Explore collaboration
  - block: cta-card
    id: contact-cta
    content:
      title: "Explore collaboration"
      text: "We are engaging clinical partners, pilot sites, and strategic collaborators to shape development priorities and deployment pathways."
      button:
        text: "Start a conversation"
        url: "/contact"
    design:
      card:
        css_class: "bg-primary-700"
---

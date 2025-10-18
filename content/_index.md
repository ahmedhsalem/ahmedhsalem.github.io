---
title: "RespiraFibre"
date: 2025-10-18
type: landing

design:
  spacing: "4rem"  # default spacing for all sections except Hero

sections:
  # ---------------------------
  # HERO
  # ---------------------------
  - block: hero
    content:
      title: "RespiraFibre: Measuring Every Breath, Saving Lives"
      text: "Revolutionary nanotechnology transforms oxygen masks and nasal cannulae into life-saving sensors — continuous, unobtrusive respiratory monitoring for earlier detection of patient deterioration."
      primary_action:
        text: Learn More
        url: "#solution"
        icon: heart
      secondary_action:
        text: Contact Us
        url: "/contact"
    design:
      css_class: "rf-hero-bg dark"
      spacing:
        padding: ["2rem", 0, "2rem", 0]  # Hero gets extra padding
      background:
        color: "navy"
        image:
          filename: "WebsitePage_Image.png"
          position: center
          size: cover
          filters:
            brightness: 0.5
    css_style: |
      @media (max-width: 820px) {
        section.rf-hero-bg {
          background-image: url('/media/WebsitePage_Image_Phone.png') !important;
          background-size: cover !important;
          background-position: center !important;
        }
      }

  # ---------------------------
  # MARKDOWN - Respiratory Rate Problem
  # ---------------------------
  - block: cta-button-list
    content:
      title: "<h2>The Respiratory Rate Problem</h2>"
      text: "<p>Respiratory rate is often overlooked. Continuous monitoring is critical for timely intervention.</p>"
      buttons_html: |
        <button type="button" class="cta-btn"><i class="exclamation-triangle"></i> Manual Checks Are Error-Prone</button>
        <button type="button" class="cta-btn"><i class="x-circle"></i> Existing Sensors Are Intrusive</button>
        <button type="button" class="cta-btn"><i class="eye-slash"></i> Subtle Changes Go Unnoticed</button>
    design:
      css_class: "rf-cta-problem"
      background:
        color: "#FFFFFF"
        text_color: "#00043f"

  # ---------------------------
  # STATS BLOCK
  # ---------------------------
  - block: stats
    content:
      items:
        - statistic: "70%"
          description: "of respiratory rate measurements are inaccurate"
        - statistic: "7,964"
          description: "UK deaths annually from missed patient deterioration"
        - statistic: "£1.2B"
          description: "Potential NHS annual savings from adoption"

  # ---------------------------
  # FEATURES
  # ---------------------------
  - block: features
    id: solution
    content:
      title: "Our Solution"
      text: "Ultra-sensitive nanotechnology fibres embedded into oxygen-delivery devices for accurate, continuous respiratory monitoring."
      items:
        - name: Imperceptible Sensors
          icon: heart
          description: |
            Ultra-fine fibres (~1/10th the width of a hair) detect every breath without discomfort or workflow disruption.
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

  # ---------------------------
  # TESTIMONIALS
  # ---------------------------
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

  # ---------------------------
  # CTA CARD
  # ---------------------------
  - block: cta-card
    content:
      title: "Join Us in Transforming Respiratory Care"
      text: |
        RespiraFibre is redefining patient monitoring — improving outcomes, supporting clinicians, and enabling a new era of digital health.
      button:
        text: Get Involved
        url: "/contact"
    design:
      card:
        css_class: "bg-primary-700"
---

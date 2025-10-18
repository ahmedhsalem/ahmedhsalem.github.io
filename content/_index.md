---
title: "RespiraFibre"
date: 2025-10-18
type: landing

design:
  spacing: "6rem"
  
sections:
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
            .rf-hero-bg {
              background-image: url('{{ "media/WebsitePage_Image_Phone.png" | relURL }}') !important;
              background-size: cover !important;
              background-position: center !important;
            }
          }
  # ---------------------------
  # STATS BLOCK
  # ---------------------------
  - block: stats
    content:
      items:
        - statistic: "70%"
          description: "of respiratory rate measurements are inaccurate"
        - statistic: "£1.2B"
          description: "Potential NHS annual savings from adoption"
        - statistic: "7,964"
          description: "UK deaths annually from missed patient deterioration"

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
  # IMPACT
  # ---------------------------
  - block: cta-image-paragraph
    id: impact
    content:
      items:
        - title: "Transforming Patient Care with RespiraFibre"
          text: |
            RespiraFibre’s continuous respiratory monitoring enables hospitals to intervene earlier, reduce critical events, and improve patient outcomes. By integrating seamlessly into hospital workflows, it empowers clinicians and protects patients.
          feature_icon: check
          features:
            - "Reduced ICU Admissions: Continuous monitoring allows early interventions, preventing deterioration that requires ICU care."
            - "Shorter Hospital Stay: Early detection lowers average length of stay, freeing beds and reducing hospital costs."
            - "Lives Saved: Timely alerts help clinicians act sooner, preventing complications and saving lives."
            - "Staff Efficiency: Reduces emergency events and false alarms, allowing staff to focus on patient care."
          image: build-website.png

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
        padding: ["6rem", 0, 0, 0]

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

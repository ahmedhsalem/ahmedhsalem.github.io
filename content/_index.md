---
title: "RespiraFibre"
date: 2023-10-24
type: landing

design:
  spacing: "6rem"

sections:
  # ---------------------------
  # RESPONSIVE HERO (single block)
  # ---------------------------
  - block: hero
    id: hero
    content:
      title: "RespiraFibre: Measuring Every Breath, Saving Lives"
      text: |
        Revolutionary nanotechnology transforms oxygen masks and nasal cannulae into life-saving sensors — continuous, unobtrusive respiratory monitoring for earlier detection of deterioration.
      primary_action:
        text: Learn More
        url: "#solution"
        icon: heart
      secondary_action:
        text: Contact Us
        url: "/contact"
      announcement:
        text: "Patent-filed breakthrough in respiratory monitoring"
        link:
          text: "Read more"
          url: "/about"
    design:
      css_class: "rf-hero-bg"
      background:
        color: navy
        image:
          filename: "WebsitePage_Image.png"
          filters:
            brightness: 0.5
        position: center
        size: cover
      style: |
        /* Responsive hero background */
        @media (max-width: 820px) {
          .rf-hero-bg {
            background-image: url('WebsitePage_Image_Phone.png') !important;
            background-size: cover !important;
            background-position: center center !important;
          }
          /* Overlay content for readability */
          .rf-hero-bg .hero-content {
            color: #fff !important;
            text-align: center !important;
          }
        }

  # ---------------------------
  # STATS
  # ---------------------------
  - block: stats
    content:
      items:
        - statistic: "218M+"
          description: |
            Patients receive oxygen  
            therapy worldwide each year
        - statistic: "7,964"
          description: |
            UK deaths annually from  
            missed patient deterioration
        - statistic: "£1.2B"
          description: |
            Potential NHS annual savings  
            from adoption
    design:
      css_class: "bg-gray-100 dark:bg-gray-900"
      spacing:
        padding: ["1rem", 0, "1rem", 0]

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

  # ---------------------------
  # CTA IMAGE + PARAGRAPH
  # ---------------------------
  - block: cta-image-paragraph
    id: impact
    content:
      items:
        - title: "Impact"
          text: |
            One-third of inpatients deteriorate during hospitalisation. RespiraFibre enables earlier recognition and intervention, reducing ICU admissions, cardiac arrests, deaths — and helping clinicians deliver safer care.
          feature_icon: check
          features:
            - Save lives by catching deterioration earlier
            - Reduce ICU admissions and free bed space
            - Lower stress and workload for frontline staff
          image: build-website.png
          button:
            text: Learn About Our Technology
            url: "/technology"

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

---
title: "RespiraFibre"
date: 2023-10-24
type: landing

design:
  spacing: "6rem"

sections:
  # ---------------------------
  # MOBILE: image-based block (shows full image on phones)
  # ---------------------------
  - block: cta-image-paragraph
    id: hero-mobile
    content:
      items:
        - title: "RespiraFibre: Measuring Every Breath, Saving Lives"
          text: |
            Revolutionary nanotechnology transforms oxygen masks and nasal cannulae into life-saving sensors — continuous, unobtrusive respiratory monitoring for earlier detection of deterioration.
          feature_icon: stethoscope
          button:
            text: Learn More
            url: "#solution"
          image: "WebsitePage_Image_Phone.png"
    design:
      # ESSENTIAL CLASS KEPT for mobile visibility
      css_class: "only-mobile rf-hero-img" 
      spacing:
        padding: ["1.5rem", 0, "1.5rem", 0]

  # ---------------------------
  # DESKTOP: background hero (keeps the original look on wide screens)
  # ---------------------------
  - block: hero
    content:
      title: "RespiraFibre: Measuring Every Breath, Saving Lives"
      # FIX: Using '>-' and placing text immediately after </style> to fix formatting,
      # with only the essential visibility CSS inside the style block.
      text: >-
        <style>
        /* Strong page-level override to ensure mobile/desktop visibility */
        .only-desktop { display: block !important; }
        .only-mobile { display: none !important; }

        /* Show mobile block on phones, hide desktop */
        @media (max-width: 820px) {
          .only-desktop { display: none !important; }
          .only-mobile  { display: block !important; }
        }

        /* Desktop safety */
        @media (min-width: 821px) {
          .only-desktop.rf-hero-bg {
            background-size: cover !important;
            background-position: center !important;
          }
        }
        </style>Revolutionary nanotechnology transforms everyday oxygen masks and nasal cannulae into life-saving sensors — continuous, unobtrusive respiratory monitoring for earlier detection of patient deterioration.
      primary_action:
        text: Learn More
        url: "#solution"
        icon: heart
      secondary_action:
        text: Contact Us
        url: "/contact"
    design:
      # ESSENTIAL CLASS KEPT for desktop visibility
      css_class: "only-desktop dark rf-hero-bg"
      background:
        color: "navy"
        image:
          filename: WebsitePage_Image.png
          filters:
            brightness: 0.5
          position: center
          size: cover

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

---
title: "RespiraFibre"
date: 2025-10-18
type: landing

design:
  spacing: "3rem"

sections:
  - block: hero
    id: top
    content:
      title: "Continuous breathing visibility for ward teams"
      text: "RespiraFibre is designed to add continuous breathing waveform monitoring to routine oxygen-delivery and respiratory interfaces, helping teams notice meaningful change sooner within existing workflows."
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
        - **Intermittent manual checks** can miss short-lived changes between observations.
        - **Documentation burden** can pull attention away from bedside care.
        - **Alarm-heavy environments** can make subtle respiratory trends harder to spot.
    design:
      css_class: "rf-section"
      background:
        color: "gray-50"

  - block: cta-button-list
    id: pain-points
    content:
      title: "Common workflow pain points"
      text: "Select a topic to jump to a concise explanation."
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

  - block: markdown
    id: pain-details
    content:
      title: "At-a-glance context"
      text: |
        ### <span id="pain-manual-checks">Manual checks are error-prone</span>
        Spot checks are useful, but they can vary by timing, technique, and workload pressure.

        ### <span id="pain-subtle-changes">Subtle changes can be missed</span>
        Breathing patterns can shift gradually. Without continuous context, trend changes may be harder to identify early.

        ### <span id="pain-documentation">Documentation burden adds friction</span>
        Repeated manual recording can add cognitive and administrative load across busy shifts.
    design:
      css_class: "rf-section"
      background:
        color: "blue-50"

  - block: features
    id: how-it-works
    content:
      title: "How it works"
      text: "A pragmatic three-step model designed for clinical environments."
      items:
        - name: "1) Integrates into existing interfaces"
          icon: "link"
          description: "Designed to fit oxygen-delivery and respiratory interfaces already used in routine care pathways."
        - name: "2) Captures breathing waveform continuously"
          icon: "activity"
          description: "Breathing waveform data is collected continuously to provide richer context than intermittent spot checks alone."
        - name: "3) Surfaces pattern changes"
          icon: "chart-bar"
          description: "An analytics layer is designed to surface notable changes in breathing patterns for clinical review."
    design:
      css_class: "rf-section"

  - block: markdown
    id: credibility
    content:
      title: "Built for real-world adoption"
      text: |
        <div class="rf-credibility-grid">
          <div class="rf-pill">Built with clinicians</div>
          <div class="rf-pill">Designed for ward workflows</div>
          <div class="rf-pill">Data governance minded</div>
        </div>

        <div class="rf-placeholder-row">
          <div class="rf-placeholder-card">Partner logo placeholder</div>
          <div class="rf-placeholder-card">Clinical testimonial placeholder</div>
          <div class="rf-placeholder-card">Pilot site placeholder</div>
        </div>
    design:
      css_class: "rf-section"
      background:
        color: "gray-50"

  - block: markdown
    id: use-cases
    content:
      title: "Initial focus areas"
      text: |
        <div class="rf-use-cases">
          <div class="rf-use-case">Wards</div>
          <div class="rf-use-case">Step-down units</div>
          <div class="rf-use-case">Post-op recovery</div>
        </div>
    design:
      css_class: "rf-section"

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

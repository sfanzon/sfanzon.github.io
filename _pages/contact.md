---
layout: contact
title: Contact
permalink: /contact/
nav: true
nav_order: 9
---

<div class="footer-flex" style="display:flex; flex-wrap:wrap; gap:2rem; text-align:left;">

  <!-- Left column -->
  <div class="footer-left" style="flex:1; min-width:280px;">
    <h4 style="margin-bottom: 2rem;"><b>Dr Silvio Fanzon FHEA</b></h4>

    <i class="fas fa-envelope" style="font-size: 1.4em;"></i> &nbsp;
    <a href="mailto:S.Fanzon@hull.ac.uk">S.Fanzon@hull.ac.uk</a>
    <br style="line-height: 1.5rem;"/>
    &nbsp;
    <br>    

    <i class="fas fa-map-marker-alt" style="font-size: 1.4em;"></i> &nbsp;
    <a href="https://www.google.com/maps/place/Robert+Blackburn+Building/@53.7714841,-0.3714448,17z" target="_blank">
      Office 311C <br>
      Robert Blackburn Building <br>
      University of Hull <br>
      Hull HU6 7RX <br>
      United Kingdom
    </a>
    <br style="line-height: 1.5rem;"/>
    &nbsp;
    <br> 

    <i class="fas fa-briefcase" style="font-size: 1.4em;"></i> &nbsp;
    <a href="https://www.hull.ac.uk/staff-directory/silvio-fanzon">Homepage @ Hull</a>
    <br style="line-height: 1.5rem;"/>
    &nbsp;
    <br>  

    <div class="social">
      <div class="contact-icons" style="font-size: 2.2em; text-align:left; margin-top:0.8rem;">
        <a href="https://www.linkedin.com/in/{{ site.data.socials.linkedin_username }}" title="LinkedIn" style="margin-right:0.25em;"><i class="fa-brands fa-linkedin"></i></a>
        <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" title="Google Scholar" style="margin-right:0.25em;"><i class="ai ai-google-scholar-square"></i></a>
        <a href="https://www.researchgate.net/profile/{{ site.data.socials.research_gate_profile }}/" title="ResearchGate" style="margin-right:0.25em;"><i class="ai ai-researchgate-square"></i></a>
        <a href="https://orcid.org/{{ site.data.socials.orcid_id }}" title="ORCID" style="margin-right:0.25em;"><i class="ai ai-orcid-square"></i></a>
        <a href="https://arxiv.org/a/{{ site.data.socials.arxiv_username }}" title="arXiv" style="margin-right:0.25em;"><i class="ai ai-arxiv-square"></i></a>
        <a href="https://github.com/{{ site.data.socials.github_username }}" title="GitHub"><i class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </div>

  <!-- Right column: Map -->
  <div class="footer-map" style="flex:1; min-width:280px; display:flex; justify-content:flex-start; align-items:flex-start;">
    <iframe 
      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2358.011416469691!2d-0.3714448!3d53.7714841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4878bfaf9f89a781%3A0xf1623fd4c5175579!2sRobert%20Blackburn%2C%20Hull%20HU6%207RU!5e0!3m2!1sen!2suk!4v1758836725201!5m2!1sen!2suk" 
      width="570" 
      height="370" 
      style="border:0; border-radius:12px; filter: grayscale(100%);" 
      allowfullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade">
    </iframe>
  </div>

</div>

<!-- Include your responsive CSS here -->
<style>
  /* Tablet size: shrink map */
  @media (max-width: 992px) {
    .footer-map iframe {
      width: 100% !important;
      height: 200px !important;
    }
  }

  /* Phone size: hide entire map column and expand left */
  @media (max-width: 576px) {
    .footer-map {
      display: none !important;
      visibility: hidden !important; /* extra safety */
    }
    .footer-left {
      flex: 1 1 100% !important;
      max-width: 100% !important;
    }
    .footer-flex {
      flex-direction: column !important;
    }
  }
</style>
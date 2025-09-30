---
layout: page
permalink: /publications/
title: Publications
description: 
years: [2025,2024,2023,2023,2022,2021,2020,2019,2017]
nav: true
nav_order: 4
---
<!-- _pages/publications.md -->




<p> 
All my research outputs divided in 
</p>


<p>
<ul>
    <li><a href="#journal"><b>Journal Publications</b></a></li>
    <li><a href="#theses"><b>Theses</b></a></li>
    <li><a href="#miscellaneous"><b>Miscellaneous</b></a></li>
</ul>
</p>


<p>
Authors are in alphabetical order
</p>
<p>
<i class="fas fa-hashtag" style="font-size: 0.9em;"></i> denotes authors in order of contribution
</p>



<div class="large-badges" style="margin-top: 1.2rem;">
<!-- Total citations -->
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}">
    <img 
      src="https://img.shields.io/badge/citations-{% google_scholar_profile site.data.socials.scholar_userid citations %}-000000?style=flat" 
      alt="{% google_scholar_profile site.data.socials.scholar_userid citations %} Google Scholar citations">
  </a>

  <!-- h-index -->
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" aria-label="Google Scholar link" role="button">
    <img 
      src="https://img.shields.io/badge/h--index-{% google_scholar_profile site.data.socials.scholar_userid h_index %}-000000?style=flat" 
      alt="{% google_scholar_profile site.data.socials.scholar_userid h_index %} Google Scholar h-index">
  </a>

  <!-- i10-index -->
  <a href="https://scholar.google.com/citations?user={{ site.data.socials.scholar_userid }}" aria-label="Google Scholar link" role="button">
    <img 
      src="https://img.shields.io/badge/i10--index-{% google_scholar_profile site.data.socials.scholar_userid i10_index %}-000000?style=flat" 
      alt="{% google_scholar_profile site.data.socials.scholar_userid i10_index %} Google Scholar i10-index">
  </a>
</div>




<div class="publications">

<a id="journal"><h3 style="margin-top: 3rem; margin-bottom: 0.3rem;"><b>Journal Publications</b></h3></a>
<hr style="color: var(--global-text-color); height: 1px; margin-bottom: 2rem;">
{% bibliography -f publications_journal %}


<a id="theses"><h3 style="margin-top: 3rem; margin-bottom: 0.3rem;"><b>Theses</b></h3></a>
<hr style="color: var(--global-text-color); height: 1px; margin-bottom: 2rem;">
{% bibliography -f publications_theses %}


<a id="miscellaneous"><h3 style="margin-top: 3rem; margin-bottom: 0.3rem;"><b>Miscellaneous</b></h3></a>
<hr style="color: var(--global-text-color); height: 1px; margin-bottom: 2rem;">
{% bibliography -f publications_miscellaneous %}

</div>



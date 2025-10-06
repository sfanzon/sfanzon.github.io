---
layout: page
permalink: /supervision/
title: Supervision
description: 
years_master: [2023/24,2022/23]
years_undergraduate: [2024/25]
nav: true
nav_order: 7
---



<p>
These are all the students I have supervised, organized by degree level:
</p>

<p>
<ul>
    <li><a href="#master"><b>Master Students</b></a></li>
    <li><a href="#undergraduate"><b>Undergraduate Students</b></a></li>
</ul>
</p>


<div>
  <p>Interested in dissertation projects? <a href="mailto:S.Fanzon@hull.ac.uk"><b>Email me</b></a>!</p>
</div>



<div class="publications">


<a id="master"><h3 style="margin-top: 3.3rem; margin-bottom: -1.0rem;"><b>Master Students</b></h3></a>

{%- for y in page.years_master %}    
    <h2 class="year">{{ y }}</h2>
        {% bibliography -f supervision_master -q @*[year={{y}}]* %}
{% endfor %}



<a id="undergraduate"><h3 style="margin-top: 5rem; margin-bottom: -1.0rem;"><b>Undergraduate Students</b></h3></a>

{%- for y in page.years_undergraduate %}    
    <h2 class="year">{{ y }}</h2>
        {% bibliography -f supervision_undergraduate -q @*[year={{y}}]* %}
{% endfor %}

</div>



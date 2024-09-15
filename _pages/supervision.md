---
layout: page
permalink: /supervision/
title: Supervision
description: 
years: [2024/25,2023/24,2022/23,2021/22,2020/21,2019/20,2017/18]
nav: true
nav_order: 7
---
<!-- _pages/publications.md -->



<p> 
Thesis supervision divided in 
</p>

<p>
<ul>
    <li><a href="#master"><b>Master Supervisions</b></a></li>
    <li><a href="#undergraduate"><b>Undergraduate Supervisions</b></a></li>
</ul>
</p>



<p markdown="1"> 
 <a href = "mailto: S.Fanzon@hull.ac.uk"><b>Email</b></a> me for Master or PhD projects in Optimization, Inverse Problems, PDEs,
 Machine Learning and more!
</p>




<div class="publications">


<a id="master"><h3 style="margin-top: 3.3rem; margin-bottom: -1.0rem;"><b>Master Supervisions</b></h3></a>

{%- for y in page.years_talk %}    
    <h2 class="year">{{ y }}</h2>
        {% bibliography -f supervision_master -q @*[year={{y}}]* %}
{% endfor %}



<a id="undergraduate"><h3 style="margin-top: 5rem; margin-bottom: -1.0rem;"><b>Undergraduate Supervisions</b></h3></a>

{%- for y in page.years_poster %}    
    <h2 class="year">{{ y }}</h2>
        {% bibliography -f supervision_undergraduate -q @*[year={{y}}]* %}
{% endfor %}

</div>



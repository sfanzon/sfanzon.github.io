---
layout: page
permalink: /teaching/
title: Teaching
description: 
years_lecturer: [2024/25,2023/24,2022/23,2020/21,2019/20]
years_tutor: [2017/18,2016/17,2015/16,2014/15,2012/13]
nav: true
nav_order: 6
---


<p> 
Here you can explore all the courses I taught, organized by role:
</p>

<p>
<ul>
    <li><a href="#lecturer"><b>Lecturer</b></a></li>
    <li><a href="#tutor"><b>Teaching Assistant</b></a></li>
</ul>
</p>

<div>
  <p>I have included lecture notes, webpages, slides, and recordings where available.</p>
  <p>Feel free to reuse any of the materials for your own teaching. Attribution would be appreciated!</p>
</div>




<div class="publications">


<a id="lecturer"><h3 style="margin-top: 3.3rem; margin-bottom: -1.0rem;"><b>Lecturer</b></h3></a>
{%- for y in page.years_lecturer %}    
        <h2 class="year" style="margin-bottom:0.1rem;">{{ y }}</h2>
        {% bibliography -f teaching_lecturer -q @*[yearacademic={{y}}]* %}
{% endfor %}




<a id="tutor"><h3 style="margin-top: 5rem; margin-bottom: -1.0rem;"><b>Teaching Assistant</b></h3></a>

{%- for y in page.years_tutor %}    
        <h2 class="year" style="margin-bottom:0.1rem;">{{ y }}</h2>
        {% bibliography -f teaching_tutor -q @*[yearacademic={{y}}]* %}
{% endfor %}


</div>


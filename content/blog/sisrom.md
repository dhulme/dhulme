---
date: 2013-07-28
title: Sisrom - Third Year Project
---

<BlogPostHeader />

Part of Year 3 of my Computer Science degree was an individual project. I produced a smart remote image monitoring system running on a small, single board computer: the <a href="http://www.raspberrypi.org">Raspberry Pi</a>. Webcams were connected to the Raspberry Pi and pointed at different areas within a home and images from these webcams could be seen through a web interface.

Areas in these images could be selected and monitored for certain visual changes such as intensity or colour. If any changes were detected in these areas, the system would generate a notification. This allowed the user to monitor the state of different objects within their home.

The web interface was written using the <a href="http://www.djangoproject.com">Python Django web framework</a>, as well as client side scripting in HTML/CSS and JavaScript with jQuery.

![Home page](./images/kitchen-home.png)
![Live page](./images/desk-live.jpg)
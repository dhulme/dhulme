---
date: 2013-09-13
title: Cisco - Kit list
---

<BlogPostHeader />

The Cisco Kit list was an extension project I took on after finishing the TDTM. I chose to develop the project using <a title="Node.js" href="http://nodejs.org/">Node.js</a>, a web technology with which I was unfamiliar, but interested in. The project was a great success, and I was able to see it being used by the team before the completion of my internship.

Users of the Kit list could add TelePresence devices to the system using an IP address. Detailed information about the device would then be fetched using system.xml (a public XML file available on the device), and <a href="http://xmlrpc.scripting.com/default.html">XML RPC</a> calls. Using this information, users could book a specific device for a set amount of time.

The Kit list also provided information about the last log in to the device. This feature was provided using <a href="http://en.wikipedia.org/wiki/Syslog">Syslog</a>, as such information was not available by RPC.

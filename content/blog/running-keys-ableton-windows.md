---
date: 2018-01-02
title: Running Keys with Ableton and Windows
---

<BlogPostHeader />

When playing keyboard at live events at my church I use MIDI controllers connected to a Windows laptop (shocking right!) with Ableton and various virtual instrument plugins. Windows does have some advantages over mac, mainly price and customisability, but it is definitely harder to get set up and working reliably. Hopefully in this article you'll find answers to common problems I have experienced.

## Minimum Recommend Specs
- Windows 10 (Microsoft won't be updating 7 or 8 for much longer)
- 8GB RAM or more
- 256GB SSD or more (You can load samples from a hard disk or external drive if necessary)
- Intel Core i5 (preferably i7)
- External USB audio interface

## Troubleshooting
### I get intermittent freezes in ableton or midi controllers stop working.
Check USB cable length, I recommend 3m or less. If you're using a USB hub, make sure it's powered. Replace existing USB cables, sometimes a dodgy wire can cause dropouts. Are your USB connections lose? If so, use a screwdriver to pull the socket prongs out a bit to improve the connection.

Ensure Ableton and your Windows are up to date. Disable 'USB selective suspend setting' under power plan settings. Check you have the correct drivers for your audio interface.

Sometimes there can be differences between using a USB 2 and USB 3 port. USB 3 ports are blue or have 'SS' written with the USB logo. Try changing the type of USB port you are using.

### Windows restarts whilst i'm on stage!
Set your 'active hours' under Windows Update settings.

### I get 'pops' or 'crackles' in my audio!
On low performance machines this could be due to your audio buffer size, try increasing it. Most likely however it is a driver issue. Ensure you have the latest drivers from the audio interface manufacturer for your operating system. If these don't work, contact your audio interface manufacturer, they should be able to provide advice and support. I have had driver problems with Focusrite Scarlett interfaces on Windows 10 machines, but after some driver tweaking everything works reliably.

### Sometimes when playing tracks or virtual instruments, I get audio glitches and ableton freezes briefly.
This is most likely disk problems. If you're using a mechanical hard drive upgrade to a solid state drive. Check what processes are using 'Disk' resources in task manager.


---
date: 2020-06-03
title: Power Plan AutoHotkey Scripts for Ableton Live
---

<BlogPostHeader />

Being a Windows guy is a lot cheaper than buying Macs, but it definitely isn't as straightforward to get everything working correctly for live musical performance. I wrote [an article in 2018](running-keys-ableton-windows.md) about running Ableton Live on Windows which addressed a lot of the issues, but I've recently discovered something that was ruining Live's performance - not using the 'High Performance' power plan in Windows. It turns out this was leading to audio pops and dropouts and other performance issues. After some investigation with Ableton Support, using the high performance power plan resolved the issue. I could just leave the high performance plan on all the time, but this would waste energy. For a while I was manually changing the power plan when I ran Live, but then I realised this could be automated.

Below is an [AutoHotkey](https://www.autohotkey.com/) script (also on [Gist](https://gist.github.com/dhulme/66c072cc2fec53253adbe092c61c348c)) that checks when Ableton Live is running and changes the power plan to 'High performance'. Once it's closed, it sets it back to 'Balanced'. If you want to use with another app or power plan, you can change these in the script.

It works really well for me and has solved my performance issues whilst not wasting energy! 😃 This was my first AutoHotkey script, and although it works, I'm sure it could be improved!

``` autohotkey
#Persistent
PowerPlan := "balanced"
SetTimer, Check, 300000 ; Checks every 5 minutes
return

Check:
; Change the process name to use with another app
if (ProcessExist("Ableton Live 10 Standard.exe")) {
	if (PowerPlan = "balanced") {
		; Change these IDs to use another power plan (find IDs by running `powercfg -list` in a terminal)
		Run powercfg /s 8c5e7fda-e8bf-4a96-9a85-a6e23a8c635c
		PowerPlan := "performance"
	}	
} else {
	if (PowerPlan = "performance") {
		Run powercfg /s 381b4222-f694-41f0-9685-ff5bb260df2e
		PowerPlan := "balanced"
	}
}
return

ProcessExist(i) {
    Process, Exist, % i
    return ErrorLevel
}
```
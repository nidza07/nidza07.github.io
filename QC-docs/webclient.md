# Web client documentation
## Table of contents
1. Introduction [#introduction].
2. [Web client layout](#web-client-layout).
3. [Web client limitations](#web-client-limitations).
4. [Operating system specific issues](#operating-system-specific-issues).

## Introduction
The web client allows you to play from any device, as long  as it has an up to date browser.
Such devices include phones, tablets, Macs...

You must keep a couple of important points in mind before using the web client, or reporting any issues with it:
- Due to a huge amount of devices and browsers available, the Playroom team certainly did not test every combination out there. Some device might present a completely unknown or unexpected problem.
- Browser issues: Every browser has some key differences, which may make it behave unpredictably using the Playroom web client. As much as the developer attempts to make the client usable with as many devices as possible, a web app will never be as good and as fast as a native app. Such issues may include:
    - Audio stream support: Every browser supports streaming different audio formats, so unlike on the native Windows client, on the web client, certain streams will only work with certain browsers. For instance, Chrome and Firefox support OGG, Safari supports MP3, M4A, and so on... If you try to play an unsupported stream, nothing will happen. The Playroom team can do nothing about that.
    - Keyboard shortcuts: Some Playroom shortcuts may conflict with the shortcuts of your browser, or your system shortcuts, and it may be impossible to perform them. For example, in many browsers, ctrl+page up or down are used to switch tabs. The Playroom thus allows you to use shift+page up and down instead. Most shortcuts are also available from a context menu, which is always open on the web client, so as an alternative, this should work as well.
    - Some screen readers may have problems with automatic message reading, due to different interpretations of the supported Web standards. In particular, VoiceOver on the Mac has significant problems with automatic message reading. To work around this, you can use a system voice to read the Playroom messages. More is explained in the [Options chapter](#options).

Despite all of these problems, the web client will allow you to play from most of the popular operating systems.

## Web client layout
//todo

## Web client limitations
In addition to the listed known issues, the web client has the following technical limitations, in comparison to the Windows client:

- You can only send and receive private messages from the people in your friends list while you are connected to the web client.
- Games that require an engine to play with bots do not have bots on the web client. Currently, these games are Chess, Connect 4, Reversi, and Go. Note that these games are completely playable with another human player.
- Arcade games are not available on the web client.
- It is impossible to configure certain options, such as automatic history saving or minimizing to the system tray.
- Channel settings, in particular whether a channel should speak when the window is active, inactive or always, may not work with all screen readers. On the contrary, most screen readers do not allow websites to send automatic messages when the window is not focused.
- Copying messages to the clipboard using a shortcut may not work reliably and all the time, depending on what your browser allows.


## Mobile gestures
The primary target audience of the web client are mobile phone users. To make the experience faster, some gestures have been introduced:
1. iOS: You can use the standard go back gesture (2 finger scrub) to go back to a previous menu, or perform any function that the escape key would perform.
    - Note: For this gesture to work, you must make sure that the web client is open in a new tab, and that no other page was ever open in that tab. This is due to the fact of Safari taking over the gesture otherwise, and using it for the browser's back button. However, when there is no page to go back to, the Playroom correctly interprets the gesture.
    - Note 2: Android currently has no way to do this. This is a screen reader limitation.
2. Double tap and hold for blind users, or a long press for sighted users: Opens a context menu on the selected item, same as the applications key on Windows. On iOS, a triple tap also works by default, since VoiceOver has this gesture mapped to a long  press. In some games, the context menu is rather mapped to quickly display something that you will frequently need, for example, the cards on the table in Scopa, so this can be used to find out this information quickly.
3. Double tap and hold, then swipe in any direction for blind users, or just a long press and swipe for sighted users: Performs different actions depending on the context.
    1. When you are asked to select the teams in a game, using this gesture will  allow you to drag players up or down, and thus change the team they are on.
    2. In card games, a swipe left will let you draw a card if possible, while a swipe right will let you discard one.


## Operating system specific issues
//todo
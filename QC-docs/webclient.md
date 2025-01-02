---
generator: pandoc
lang: en
title: Quentin C's Playroom - Web client documentation
viewport: width=device-width, initial-scale=1.0, user-scalable=yes
---




## Introduction
The web client allows you to play from any device, as long  as it has an up to date browser.  
Such devices include phones, tablets, Macs, or any other devices with a modern Web browser...

You must keep a couple of important points in mind before using the web client, or reporting any issues with it:  

- Due to a huge amount of devices and browsers available, the Playroom team certainly did not test every combination out there. Some device might present a completely unknown or unexpected problem.
- Browser issues: Every browser has some key differences, which may make it behave unpredictably using the Playroom web client. As much as the developer attempts to make the client usable with as many devices as possible, a web app will never be as good and as fast as a native app. Such issues may include:
    - Audio stream support: Every browser supports streaming different audio formats, so unlike on the native Windows client, on the web client, certain streams will only work with certain browsers. For instance, Chrome and Firefox support OGG, Safari supports MP3, M4A, and so on... If you try to play an unsupported stream, nothing will happen. The Playroom team can do nothing about that.
    - Keyboard shortcuts: Some Playroom shortcuts may conflict with the shortcuts of your browser, or your system shortcuts, and it may be impossible to perform them. For example, in many browsers, ctrl+page up or down are used to switch tabs. The Playroom thus allows you to use shift+page up and down instead. Most shortcuts are also available from a context menu, which is always open on the web client, so as an alternative, this should work as well. Known conflicting shortcuts will be listed in the known issues section.
    - Some screen readers may have problems with automatic message reading, due to different interpretations of the supported Web standards. In particular, VoiceOver on the Mac has significant problems with automatic message reading. To work around this, you can use a system voice to read the Playroom messages. More is explained in the [Options chapter](#options).

Despite all of these problems, the web client will allow you to play from most of the popular operating systems, and it is a great, cross-platform solution to connect to the Playroom and enjoy all the games offered.

## Web client layout
Whenever possible, the interface of the web client will resemble the interface of the Windows client. This includes the shortcuts as well. On any device with a keyboard, most of the same shortcuts work on the web client as well, apart from what was mentioned above.

To connect to the web client, click the play menu item located in the main menu of our website, or [access it directly here](https://qcsalon.net/en/game).

If you are not logged in  already, the first thing you will be asked to do is type your account credentials.

Once you have successfully connected, you should hear a welcome message, and your focus should be in the game toolbar. To use the web client, make sure that any virtual cursor/browse mode of your screen reader is disabled. Normally, this should already happen automatically.  
The browse mode is what is used to navigate a website with single  letters, such as K  for link, H for heading, and so on. However, on the web client, this will interfere with single-letter shortcuts, and thus for the best experience it should be disabled. With VoiceOver, disable quick nav or single letter navigation. With Jaws, use Jaws+Z to toggle virtual cursor, and with NVDA, use NVDA+space to switch to focus mode.

The game toolbar is exactly the same as the menu list described in the general usage document. Any shortcut should be performed from this toolbar. You can also use Alt+M to switch to it.

Note: In all cases, the alt key is replaced by Option on mac or iOS.

Shift tabbing from the toolbar will bring you into the read only history edit box, which is exactly the same as on the Windows client. It can be focused directly with Alt+H. Tabbing from the game toolbar will introduce a new element, the actions menu:

The actions menu is always accessible on the web client. It is a permanent context menu. When a game is not started, this will contain all the relevant table options. If a game is started, it will contain the game context menu, with an option at the bottom to switch to the table menu. This is very useful for touch screen users, who do not have a keyboard connected. You can reach this menu quickly by pressing Alt+T.

Note: All the interface sections are also divided by headings. This can be used on a touch screen device to more quickly jump to a different item, since there we of course do not have a tab key.

The next section is the chat, which is also the same as on the Windows client, and can be reached quickly by pressing Alt+C. Further along with a send button. Continuing further, we have two new buttons:

1. Layout. This button will open a pop-up menu allowing you to choose between several visual layout options of the web client, such as a desktop or a mobile view. It will also let you change the way the history is displayed. More information is available in the [layout section](#layout).
2. Clear history. Many browsers and devices do not perform so  well when the history is too large, so you can use this button to quickly clear it and restore the web client performance.

Other than what is described here, every menu  and action will  work exactly the same as it was described in the General usage document. There are however a few differences in the options menu, and this document will focus on these differences.

## Options
The options menu contains most of the same functions as described in the General usage document. Here are the new elements introduced on the Web client:

### Audio settings
In the audio settings, apart from adjusting the sound volume, you will also find an item called speech mode.  
By default, the speech mode is set to screen reader, so your screen reader will speak any incoming messages. However, some screen readers may have issues speaking messages in the correct order, or may interrupt a message too soon. This is particularly the case under Mac OS with VoiceOver.  
To fix this, you can switch the speech mode to speech synthesis. This will let you use a system voice to speak the incoming messages. A few browsers, like Google Chrome, may even give you additional cloud voices. Note that for fast and dynamic games, such voices are not recommended, as they can be slow to react and speak the incoming message.

If you have enabled the usage of the system voice, this same menu will also let you configure the voice to be used, the speech rate, pitch, or volume.

### Layout
The layout button at the bottom of the web client opens a pop-up menu allowing to choose between several options.
#### Mobile or desktop
You have several visual layouts to choose from. Here is a description of each:
##### Desktop 1
The actions menu is on a single line at the bottom of the screen, just above the chat field.  
The rest of the screen is divided between history and game area, one third to the left for history and two thirds on the right for game menu.
##### Desktop 2
Compared to desktop1, history and game menu are inverted, for those who would prefer having them like that.
##### Wide 1
Compared to desktop1, chat field and actions menu are compacted in a single row. This would be for those having a screen wider than tall.
##### Mobile 1
As usual, actions and chat field are on the bottom, while history and game menu are respectively given one third and two thirds of the screen.
However, this time, they aren't side by side, but one below the other.

### Channel and view options
When configuring channels and views on the web client, keep the following differences in mind:

1. Inside channel options, you will find a speech priority setting. This setting will determine the kind of message (live region) to be sent to your screen reader. If the priority is critical or high, some screen readers may react differently, such as playing a special sound or announcing "alert!" at the end of the message. It is best to experiment with your screen reader, and find which option will work best.
2. It is not possible to customize the discussion or game views on the Web client.


### Web Options

## Keyboard shortcut differences
Even though almost every shortcut works the same as it does on the Windows client, the Web client has a few differences:  

- The f2 key serves no purpose, since the table menu is always accessible on the Web client.
- The F6 key to change the sound volume is not used. Instead, use F7 and F8 to change the sounds volume, shift+F7 and F8 to change the notifications volume, and CTRL+f7 and f8 to change the streams volume.
- The shift+F7 shortcut to stop all playing sounds does not exist.
- The shift+F8 shortcut to disable automatic message reading does not exist. Note: With many screen readers, you often have a way to disable reading live regions, or dynamic content changes. Disabling this will also stop the reading of messages on the Playroom Web client.

## Web client limitations
In addition to the listed known issues, the web client has the following technical limitations, in comparison to the Windows client:

- You can only send and receive private messages from the people in your friends list while you are connected to the web client.
- Games that require an engine to play with bots do not have bots on the web client. Currently, these games are Chess, Connect 4, Reversi, and Go. Note that these games are completely playable with another human player.
- Arcade games are not available on the web client.
- It is impossible to configure certain options, such as automatic history saving or minimizing to the system tray.
- Channel settings, in particular whether a channel should speak when the window is active, inactive or always, may not work with all screen readers. On the contrary, most screen readers do not allow websites to send automatic messages when the window is not focused.
- Copying messages to the clipboard using a shortcut may not work reliably and all the time, depending on what your browser allows.


## Moble features
For touch screen devices, the Web client offers several features to make the experience better. These features are described in this section.

### Mobile gestures
The primary target audience of the web client are mobile phone users. To make the experience faster, some gestures have been introduced:  

1. iOS: You can use the standard go back gesture (2 finger scrub) to go back to a previous menu, or perform any function that the escape key would perform.
    - Note: For this gesture to work, you must make sure that the web client is open in a new tab, and that no other page was ever open in that tab. This is due to the fact of Safari taking over the gesture otherwise, and using it for the browser's back button. However, when there is no page to go back to, the Playroom correctly interprets the gesture.
    - Note 2: Android currently has no way to do this. This is a screen reader limitation.
2. Double tap and hold for blind users, or a long press for sighted users: Opens a context menu on the selected item, same as the applications key on Windows. On iOS, a triple tap also works by default, since VoiceOver has this gesture mapped to a long  press. In some games, the context menu is rather mapped to quickly display something that you will frequently need, for example, the cards on the table in Scopa, so this can be used to find out this information quickly.
3. Double tap and hold, then swipe in any direction for blind users, or just a long press and swipe for sighted users: Performs different actions depending on the context.
    1. When you are asked to select the teams in a game, using this gesture will  allow you to drag players up or down, and thus change the team they are on. You will hear feedback as you are dragging the item, letting you know above or below which item your finger is currently moving. If you hear a short beep, it means that you are outside of the list.
    2. In card games, a swipe left will let you draw a card if possible, while a swipe right will let you discard one.


### Shaking the device
To do

### Web client as a progressive web app
To do

## Operating system specific issues
This section will focus on issues that will affect only a certain operating system. These are mostly issues caused by the way that system/screen reader works, or, the lack of a good visual layout of the web client. If you notice any improvements or regressions in a future operating system version, make sure to report them.

### MacOS
- Under Mac OS with VoiceOver, when several messages arrive at the same time or in a short amount of time one after another, the latest message always takes the priority. This is a VoiceOver limitation that cannot be resolved. To read messages, you can use the browser synthesizer option, which will use the chosen system voice.
- When using Safari, and if the history area becomes too large, the entire browser can crash for a certain amount of time, even up to a minute when focusing the history area. If you use Mac OS regularly, you will notice the famous "Safari not responding" problem. This crash does not occur when using Firefox, where, even with a large history, the crash can last 1 or 2 seconds, at most.
- The default ctrl+space shortcut to copy messages from the history does not work if you have multiple keyboard layouts, since Mac OS uses this shortcut to switch between them. All shortcuts on the Mac however can be changed in the system settings app.

### iOS
- Sometimes, double tapping the chat edit field may do nothing, or may open the Safari address bar. This is due to the web client not always correctly scrolling the screen. To resolve this, before activating the chat field, focus it and use VoiceOver's 3 finger swipe up gesture to scroll, and then double tap the chat field. You may still need to double tap it twice.
- When a round starts, or a list is empty and then receives a new item, VoiceOver's focus will go to that item. This will cause the currently spoken message to be interrupted, if there was any, as this new item will be announced.
- Autoplay of sounds: Apple does not allow web apps to automatically start playing their sounds, so when you connect, you will have no audio. To fix this, cause at least one sound to play, i.e. send a message. The sound will not play, but once you click on anything, all sounds will start working normally. You will also have no sounds if you leave the web client and go to your home screen/another app.
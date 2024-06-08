---
generator: pandoc
lang: en
title: Quentin C's Playroom - general usage
viewport: width=device-width, initial-scale=1.0, user-scalable=yes
---

## Table of contents
1. [Disclaimer](#disclaimer)
2. [Introduction](#introduction)
3. [Getting started](#getting-started)
    - [Familiarizing yourself with the community rules](#familiarizing-yourself-with-the-community-rules)
    - [Playing from Windows](#playing-from-windows)
        - [The connection dialog](#the-connection-dialog)
4. [The Playroom interface](#the-playroom-interface)
    - [First letter navigation](#first-letter-navigation)
5. [Playing a game](#playing-a-game)
    - [General table management tips](#general-table-management-tips)
    - [Configuring game options](#configuring-game-options)
6. [Watching games](#watching-games)
7. [The list of online users](#the-list-of-online-users)
8. [Chatting](#chatting)
    - [Private messaging](#private-messaging)
        - [Replying to a private message](replying-to-a-private-message)
        - [Writing to the same person more than once](#writing-to-the-same-person-more-than-once)
    - [Chat commands](#chat-commands)
9. [History reading and management](#history-reading-and-management)
    - [Quick history reading](#quick-history-reading)
    - [History views and channels](#history-views-and-channels)
    - [Clearing or copying your history](#clearing-or-copying-your-history)
10. [Arcade games](#arcade-games)
    - [Accessing an arcade game](#accessing-an-arcade-game)
    - [Game download and start](#game-download-and-start)
11. [Playroom options](#playroom-options)
    - [Language](#language)
    - [General options](#general-options)
        - [Ask a confirmation before exiting](#ask-a-confirmation-before-exiting)
        - [Minimize to taskbar](#minimize-to-taskbar)
        - [Auto login at startup](#auto-login-at-startup)
        - [Automatically save histories](#automatically-save-histories)
    - [Audio and text-to-speech](#audio-and-text-to-speech)
        - [Sound volume](#sound-volume)
        - [Sound audio output](#sound-audio-output)
        - [Duck notification sounds when arcade mode is active](#duck-notification-sounds-when-arcade-mode-is-active)
        - [Disable interface sounds](#disable-interface-sounds)
        - [Use direct sound instead of WASAPI](#use-direct-sound-instead-of-wasapi)
    - [Reading and appearance](#reading-and-appearance)
        - [Channels](#channels)
            - [Channel options](#channel-options)
        - [Views](#views)
            - [View options](#view-options)
        - [Colors](#colors)
        - [Enable tooltips](#enable-tooltips)
        - [Use embedded web view](#use-embedded-web-view)
    - [Security](#security)
        - [Use only secure connections](#use-only-secure-connections)
        - [Remember passwords](#remember-passwords)
    - [Privacy](#privacy)
    - [Restore default settings](#restore-default-settings)
12. [Additional features](#additional-features)
    - [Your inbox](#your-inbox)
        - [Starting a new discussion](#starting-a-new-discussion)
        - [Reviewing discussions](#reviewing-discussions)
        - [Subscribing to this forum](#subscribing-to-this-forum)
    - [Friends list](#friends-list)
        - [Adding people](#adding-people)
        - [Accepting requests](#accepting-requests)
        - [Favorites](#favorites)
    - [Blocked users list](#blocked-users-list)
    - [Status messages](#status-messages)
    - [Open forum](#open-forum)
        - [Creating a topic](#creating-a-topic)
        - [Viewing existing topics](#viewing-existing-topics)
        - [Topic score](#topic-score)
            - [Voting on a post](#voting-on-a-post)
                - [Quick voting](#quick-voting)
        - [Topic labels](#topic-labels)
        - [Polls](#polls)
        - [Editing your message](#editing-your-message)
        - [Forum subscriptions](#forum-subscriptions)
    - [Send a history report](#send-a-history-report)
    - [Open website](#open-website)
    - [Save history in a file](#save-history-in-a-file)
    - [Save current view in a file](#save-current-view-in-a-file)
13. [Bonus features](#bonus-features)
    - [Audio streams](#audio-streams)
    - [Table topic](#table-topic)
14. [Further documents](#further-documents)
15. [Credits](#credits)
16. [For translators](#for-translators)

## Disclaimer
This documentation is completely unofficial. It has no connection to the Playroom staff at all, other than a link to the shortcuts reference, and a FAQ page, written by the English Playroom staff.  
However, an attempt was made to document all the available Playroom features, and make it as comprehensive as possible, so that every option has a clear description and explanation.

As the Playroom receives frequent updates, this documentation should be kept up to date as well. If you notice something that has changed, and is no longer accurate, contact me so I can correct it. My Playroom username is Nikola, and this documentation will hopefully help you know how to send me a private, or a permanent message.

Note: This documentation is still a work in progress. The incomplete sections I  am already aware of, or just things to do in general are in a separate [internal notes file](notes.md). You can help expand or complete them.

Similarly, as I'm not a native speaker, if you notice a grammar/spelling error, feel free to reach out as well and let me know. If you find any section confusing or unclear, feel free to get in  touch as well and make suggestions.

One of the possible frequent questions might be if this documentation will ever get the official status. Personally, I have no objections to this. However, you must keep in mind that the official and native language of the Playroom's developer is French, so the priority would be to translate this documentation to French. This is a huge amount of work requiring quite a lot of time, so I do not expect this to be done in the near future. Note: Official status to be considered only after all the to do sections are completed. Not finished as of this time.


For translators to any other language, I will always keep a [Documentation changelog](changelog.md), which will list any changes to the documentation and when they were made. This will make it easy for you to update your translations accordingly. Note: The changelog is in Markdown.

## Introduction
Welcome to the Playroom!  
The Playroom is a free online gaming platform, especially made to be accessible to visually impaired people.

On the Playroom, you will find some of the most popular card, board and dice games, such as Uno, Poker, Farkle, Yahtzee, Chess, but also some of the less popular ones. Hopefully you will discover a new game you didn't know before and invite your friends to play it with you!

## Getting started
To begin playing, you will  first need to create an account. This is a very simple process. The Playroom doesn't ask for any personal data. We need only  your username (this is a nickname that will help members of the community to recognize you), your password, and your e-mail address.  
To create your account, visit [The registration page](https://qcsalon.net/en/register).  
There, fill all the data as required, and you will receive a confirmation e-mail on the address you have specified during your registration. Either enter the code on the page which just opened, or just click the link in your e-mail, and the account will be activated. From this point on, you can start playing!

### Familiarizing yourself with the community rules
Before you start  playing, it is very important to [read the rules of the community](https://qcsalon.net/en/forum5/topic3).  
The rules aren't very long and contain some basic guidelines. Not reading the rules is not an excuse. That being said, there is no need to be afraid. You will not be permanently banned for your first offense, as long as it is clear that you aren't an intentional  spammer. Moderators are humans, just like you, and as long as you act decently and are respectful, you won't face any problems.

As a quick summary, insults or spamming is forbidden, do not cheat or attempt to use scripts and other types of automation, and use only one account per person. In the case of a family using multiple accounts, notify the staff about it, and keep in mind that checks will be performed and that unjustified accounts will be deleted.

### Playing from Windows
The general usage document will focus on the experience you will get when playing from Windows, using the Playroom Windows client. Note that it is possible to play from other platforms as well using your web browser. This will be described in a separate document, but there are only some minor differences compared to the Windows client, so you should still be able to follow along. It is recommended to read this document, and then read the Web client documentation, which will only describe the special  features of the web client and its main differences. The web client has a few additional shortcuts and gestures for mobile users. They are described in the separate [web client documentation](webclient.html).  

If you are using Windows, your best option is to download the Windows client. This will allow you to access all the features of the Playroom, and is the fastest, most stable way to play.  
You will always find the latest version under the quick links heading of the home page. You can also [Directly download it from here](https://qcsalon.net/autodl/qcgc-setup.exe).

The client follows a standard installation procedure. The Playroom does not install any additional software or toolbars, so you can feel safe proceeding. In case your anti-virus detects the Playroom as malicious, this is most likely due to the fact a new version of the client was recently released. It can take some time before that version gains the reputation of a safe program, but in the meantime, you can report the detection as a false positive/add the Playroom as an exclusion.

#### The connection dialog
Once the installation is complete and you launch the client, the first thing you will see is the connection dialog. This dialog will ask you to enter your username and password. It also has a few controls we will describe here, all of which can be accessed with the tab key:

- Remember my password: This checkbox will, if checked, remember your login details, so you don't have to enter them each time.
- Auto login at startup: Described in the [Auto login at startup](#auto-login-at-startup) section of the Playroom options chapter.
- Lost password: This will open a page on our website allowing you to reset your password.
- Create account...: If you didn't do so already, this will open the registration page directly, allowing you to create your account.
- About: This will display the current client version and all the relevant information about the program.
- Service status: In case you can't connect and receive an error for a longer amount of time, this will open a page informing you whether some server maintenance is currently ongoing, or there are no issues on our side. This should help you to understand where the problem is coming from.
- Exit: Closes the client without any connection to the server.

Once you enter your username and password, you should be logged in after about a second, and you should hear a connection sound informing you about this. You will also hear a welcome message. From this point, you are in the standard Playroom interface. This will be described in the next section and is fairly similar on the web client as well.

## The Playroom interface
Everything on the Playroom uses standard Windows controls you should already be familiar with. Most of those are lists, checkboxes, edit boxes or buttons. They function just like they would in any other program.  
There are also many shortcuts to help you do things faster, but if at any point you forget some of them, all actions are also available from a context menu. Shortcuts can also easily be announced by pressing the F1 key. F1 is context sensitive (while in a game, it will announce the shortcuts for that game, on the main room, it will  announce some general shortcuts, and so on.

Once you connect, you will be in a menu list box. This list will always contain the main menu you are interacting with. This is also the list you should be focused on when pressing any other shortcuts. For example, when we say that ctrl+F opens your friends list, you should perform  the shortcut while you are in the menu list. Note that many shortcuts work outside of the list as well, but you will not see their result. For instance, sticking to our friends list example, if you are in the chat box and you press ctrl+F, the friends list will open, but to avoid interrupting your chat, your focus won't go anywhere and will stay in the chat, so you may think that nothing happened.  
You can always quickly move to the menu list by pressing Alt+M.

If you press tab from here, you will reach the chat edit box. Here you can type a message and press enter. Keep in mind that the chat box is not multiline. Pressing up or down arrow keys will move through your history of the previously written messages. The chat edit box also supports some commands. You can see what they are in the [chat commands section](#chat-commands).  
You can focus the chat box quickly by using the Alt+C shortcut.

Tabbing once more will focus you on the read-only history edit box. This will contain every message automatically spoken by the Playroom, such as a chat message, a private message, or game messages. You can review any messages you missed here.  
The history field can quickly be focused by using the Alt+H shortcut.

These are all the interface elements you will encounter.  
Once you connect, the menu list will contain some of the basic options. They are as follows:

- Create a new table: Every game you create on the Playroom is a table. A table is a place where various people can sit together and have some fun. In addition to all the available games, you also have a free table option, allowing you to just chat without playing anything.
- Join a table: This option will allow you to join a table already created by somebody else.
- Restore a table: Any game on the Playroom can be saved by pressing ctrl+S while in it. Only the table master can save a game. The table master is the person who has created the table but can be changed at any moment. This option will allow you to restore such a saved game, provided that all the players are online and in the main room. The main room is where we are located right now.
- Options: Contains all the settings of the Playroom. They are described in the [options section](#playroom-options)
- Functions and more: Some additional functions and features, not directly related to playing games. They are described in the [additional functions section](#additional-features).
- Leave the playroom: Closes the client and lets you go offline.

In addition to this, the Playroom offers you two context menus:

- Table menu: This menu can be opened by pressing the F2 key. It contains some of the most useful options for managing a table, such as adding bots, removing bots, inviting, kicking or banning players.
- Game menu: This menu can be opened by pressing the applications key, shift+F10 or CTRL+f9. Typically, it offers useful options only  when a game is started. They will include the common actions that can be performed using shortcuts, such as drawing or discarding a card, rolling the dice, sorting your cards, and so on.

Both of these menus do not have too many useful features while in the main room, so you should try them out when  creating or joining a table.

### First letter navigation
On the Playroom, you can use the first letter navigation to move to an item starting with the letter you have pressed. It works exactly the same as it does globally in Windows lists, meaning that you can also press multiple letters in quick succession to move to an item with these letters.  
It is important to keep the following two items in mind:

1. First letter navigation does not work in menus where single letter shortcuts to get information are used. For example, it does not work in games, since letters like S are used to check the scores.
2. In menus where only a few very common actions are used, pressing the first letter will directly activate an item. Currently, these are all  the yes/no questions, where you can press Y or N to answer quickly, or the colour selection in Uno, where the first letter of a colour will select it.

In addition to the first letter navigation, in games with standard cards, you can use the left and right arrow keys to navigate to the previous or next card suit in your hand. This will only work in games where cards are sorted according to their suit.

## Playing a game
Once you have configured everything, the first thing you will probably want to do is start a game. Here, some general resources and tips will  be given to improve your experience.

To begin playing, you can either join a table already created by somebody else or create a new table of your own and wait for other people to join. Alternatively, if nobody is available to play with, adding bots is also an option. To add a bot to your game, press B once you have created the table.

In addition to card, board and dice games, the Playroom also supports arcade games. They are audio games, different from the games traditionally available on the platform. Since they function differently, they are described in greater detail in the [separate arcade games section](#arcade-games).

Note: Not every game supports bots, and a few of them may require an additional engine download so the bot can play. In all  these cases, the Playroom will notify you accordingly.

If you choose to join a table, you may see something like this:

> 1000 miles		(1/4)

Here, 1000 miles of course is the game name, but (1/4) refers to the number of available tables. The first number, 1, means that only one table is waiting for players. The second number, 4, means that there are 4 tables in total. Those other 3 remaining tables are already playing a game in progress, and you can of course join to watch the game.

Note: You may not see all 4 tables. If the privacy settings of the table master do not allow you to join, that table will not be visible in your list of tables.

If a table has too many people on it, they may not be displayed in the list. Instead, you will be told about the first few people, and then the remaining total number. If you still want to view the full list, you can press the right arrow on that table to expand it and see the complete list.

Once you focus a table in the list, you can also press the applications key on it. This will do one of the following:

1. If this is a table of a game already in progress, it will tell  you the current score whenever a game supports this, without having to join the table first.
2. If this is not a game in progress, it will instead tell you the configured game rules. For more information about configuring optional rules, please see the [configuring game options section](#configuring-game-options).

If a game has multiple rounds, once a round ends, you have to wait 15 seconds for a new one. If you are the table master, during this waiting period, you can press shift+P to pause the game. The new round won't start until you press the same shortcut again to resume the game.

### General table management tips
Once you have created a table, some common tips that apply for every game will be listed here.  
You will be told several things you can do, such as pressing enter to start the game, B to add bots, shift+B to remove bots, or alt+O  to configure game options. For more information about configuring game options, please see the [configuring game options section](#configuring-game-options).

If you don't know how to play a particular game, while at the table of that game, you can press ctrl+F1. This will open a page on our website displaying the detailed rules of that game. It will open either inside the client, in a web view, or inside your web browser, depending on your configuration.  
Note: Some games do not have any rules written at this time. Either because it is impossible to learn  them exclusively from the Playroom (games like chess), they are quite popular and simple (such as Battleship), or they are simply easter egg games, meant for you to discover on your own.

As we mentioned earlier, F1 will give you a list of shortcuts specific to that game. For example, maybe you know how to play Chess, but you don't know what the shortcut is the Playroom uses for navigating between different pieces. F1 will tell you this, and all the other shortcuts used.

To invite somebody to your table, press ctrl+I while focused on their username. This can either be from the online users list (opened with ctrl+U), or from your friends list (opened with ctrl+F). Both of these lists will be discussed later.

In case someone is not behaving appropriately, and you would not like them to stay at your table, press ctrl+k. This will open a menu allowing you to choose who to kick from the table.  
Ctrl+B will open a menu allowing you to choose who to ban from the table. Banning is different from kicking, in the sense that a banned person can no longer join the table at all unless they are unbanned, while a kicked person can join the table again.

Ctrl+Shift+X will allow you to change the table master. Only the table master can kick, ban, invite people, or configure game options and start the game.

If you would like your table to be hidden from the list of available public tables, press ctrl+H. This will make the table private. You can then invite the people you want to your table. The same shortcut will turn the table public again.

In case somebody leaves a table in the middle of a game, a bot will step in to replace them, or you can use the bot as a stand-by option until you find another human player to replace the leaving player.  
If you do not want this bot and would rather continue the game with less players, you can kick the bot from the table to remove it from the game. Keep in mind that this is possible only in games which do not depend on the exact number of players. In other words, this is not possible in games which support teams, or games which deal a certain number of cards depending on the number of players, for example.

In case you forget any of these shortcuts, every function listed here is also accessible from the table menu.

### Configuring game options
Almost every game has a set of optional rules you can enable or disable. For example, in Monopoly, these can be some common extra rules such as additional money on free parking, double salary when landing on start, and so on.  
If you press alt+O after creating your table, you can configure the game. If you do this in advance, when a player presses the applications key on your table in the list of available tables, they will see those configured rules. This can encourage more players who like your rules to join. The options menu for a game will also always open the first time you press enter to start the game. Once the game is configured (either via Alt+O or on first start), this menu won't show up when trying to start the game and your configured rules will be remembered. If you want to change your options, press Alt+O to show the menu again.

Note: At this time, every game does not support configuring the rules in advance.  
If a game does not support this, alt+O will simply do nothing. 

There are two systems of configuring the game:

- The new system: A submenu of options will open, allowing you to change each option as many times as you want. This system is documented in this section.
- The old system: You will be asked a series of yes/no questions, or will be given a selection for an option. If you make a mistake, you have to start configuring from scratch.

All Playroom games are progressively being converted to the new options system. At this time, this process is not completed. The shortcuts and functions described below work only in games which use the new system.

When the options menu of a given game opens, you will have a list of options. The following shortcuts can be used:

- Left and right arrows: For an option with several choices (time limit, score limit, game variant), allows to quickly cycle between the available choices without opening a new menu.
- Shift+A: Check or uncheck all checkboxes.
- Shift+I: Invert the selection of checkboxes (everything currently checked becomes unchecked, and vice versa).
- Applications key or Shift+D: Read the description for the currently focused option (if any).

Keep in mind that some options depend on another setting. For example, it's impossible to enable super interceptions if interceptions aren't enabled. In such a case, if you attempt to enable an option that depends on a previous setting which is currently disabled, that setting will automatically become enabled and you will be notified.

You will often be asked to choose whether you want a score limit or not. In many cases, the options menu will also offer you a choice to enter a rounds limit.
If you configure both a score and a rounds limit, the game will finish as soon as one of the limits is reached. If you don't want a score limit, for example, make sure to enter 0 in the score limit dialog. The same procedure applies for the rounds limit.

## Watching games
As mentioned before, the Playroom also lets you watch games between other people, as long as they are public, you have the right to join, or you have been invited.

You can watch a game by simply joining the table of a game in progress. In addition to this, the Playroom has a feature called spectator mode.

To enable or disable spectator mode, press F3.  
When this mode is enabled, even if you join a table, and a game is not in progress, once the game starts, you will not be included in the game. This mode lets you only watch a game, but not play it. Other people will also be notified if you join a table, and your spectator mode is enabled.

This mode can also be toggled from the table menu.

## The list of online users
To access the list of users currently online, press CTRL+U or CTRL+W. This will show all the users currently online and using the same language as you.  
To see the list of users regardless of their language, use CTRL+shift+U or CTRL+shift+W. You can of course play with someone using a completely different language, however, the two of you need to have one common language, as the game language is always the language of the table master. So, if you join someone in a different language, keep in mind that the game will no longer use your language.

Each user in this list will have a presence status, which is automatic and cannot be changed. The following statuses exist:

- Available: The user is on the Playroom and is active but is not playing a game.
- Absent: The user is on the Playroom but has not performed any action for 5 minutes.
- Busy: The user is playing a game.

Each person will also have a two-letter code, which denotes the language they are using. En for English, FR for French, and so on...

## Chatting
As mentioned earlier, the Playroom offers a chat box where you can type messages. Messages will be sent to the current table, so anybody currently on it will be able to see and read them. However, the chat box offers many more useful functions and features, and all of them will be described here.

### Private messaging
If you want to message a particular player on the Playroom privately, start your message with the at sign, then their username, a space, and your message. For example:  
@Nikola Hello, want to play a game?  
This will send a message to the user Nikola.

Private messaging works no matter whether the person you are trying to message is on your table or not. The only important thing is that they are online, and that their privacy settings allow you to message them. You will be notified if any of this is not the case.

#### Replying to a private message
Let's imagine that the user MichaelLikesChocolate1111 just sent you a private message. In order to reply, you do not have to write their username all the time at all. Simply start your message with the at sign, and a space, followed by  your message. This will send the message to the last person who wrote to you.

Stay careful! If you receive a message from a different person while typing, your message will still go to that person just messaging you once you press enter to send it.

#### Writing to the same person more than once
To avoid this mistake, an additional feature was developed. If you start your message by a double at sign, this message will go to the person you sent the last message to.  
Sticking to the original private message example, if you wrote:  
@Nikola Hi, want to play a game?
And after that, you simply wrote:  
@@ You can choose which game you like.  
This second message will also go to Nikola, since this is the last person you messaged. Even if you receive a message from Michael later, this has no impact at all, since double at sends the message to the person you wrote to last.  
You can thus use this method to lock your private messages to a particular user.

### Chat commands
In addition to private messaging, the chat box also offers you several commands you can enter. Each command starts with a slash sign /, and it may have an optional  argument, which is always followed by a space.

Here are all currently available commands:

- /help followed by a message: This command will send a message to the currently connected administrators. It is used in case you need help or assistance. The message should be preceded by a space. For example: /help hello, I have a problem, the game is frozen.
- /me followed by a message: Sends an emote message. This means that the message will contain only your username. For example: /me is hungry this message would come out as Mark is hungry, assuming Mark is your username.
- /invite followed by a username: Invites this user to  your table.
- /add followed by a username: Sends a friend request to this username.
- /accept followed by a username: Accepts a friend request from this username, if any.
- /kick followed by a username: Kicks this user from your table.
- /ban followed by a username: Bans this user from your table.
- /block followed by a username: Blocks this user. Blocking is explained in the [Blocking section](#blocked-users-list).
- /list: Shows a list of all people at the current table

There are a few more commands, but those work only on free tables:

- /rolls: If you are the table master, this command will enable or disable the dice rolling feature as well as coin tossing. This is useful for playing RPG games such as Dungeons and dragons.
- /numberC: Entering a number followed by the letter c will toss that number of coins. The maximum amount is 9. The letter c is lowercase.
- /NumberOfDiceDNumberOfSides: Rolls your dice in the specified format. For example: /6d6 will roll 6 standard 6-sided dice. This command also has two optional arguments:
  1. +number: Applies a bonus to the die result. For instance, entering +5 will apply a bonus of +5 to the final dice result.
  2. -number: Applies a malus to the result. For example, entering -5 will subtract 5 from the dice result.
These arguments should be entered after the number of sides.

## History reading and management
As already explained in the [Playroom interface section](#the-playroom-interface), the next item after the chat edit field is the history edit box. Here, you can review every message spoken by the Playroom. This section will explain how to manage your history, easier ways to filter and read only certain types of messages, as well as how to customize it to your liking.

### Quick history reading
As a screen reader user, in addition to the edit box, you have a quick way to read your history no matter where you are in the Playroom interface. This can be used to read the history even while chatting or playing a game. The following shortcuts should be used:

- Page up: Read the previous history message.
- Page down: Read the next history message.
- CTRL or shift+page up: Read the first history message.
- CTRL or shift+Page down: Read the last history message.
- CTRL+space: Copy the focused history message.
- CTRL+enter: Open a link in the focused history message, if it has any links.

### History views and channels
You may not always be interested to read every message in your history. For example, maybe you are playing a game, but you have received a private message. It might be difficult to find that message due to all the game messages arriving.  
To help with this, every message you receive on the Playroom belongs to a certain channel. For example, messages about who played what in a game belong to  the game messages channel, private messages belong to the private messages channel, and so on...

By default, the channels are grouped together into several history views. History views can be used to filter history only to focus a certain type of messages. Once you switch to a different view, using the page up and down shortcuts will focus only on the history messages belonging to that view, and not go through the entire history.

To navigate between the history views, use the following shortcuts:

- Alt+left arrow: Switch to the previous view.
- Alt+Right arrow: Switch to the next view.
- Alt+a number: Switch to a view according to its order.

Here are all the available views by default, as well as which messages they contain:  

1. General: This view contains your entire history.
2. Game: Contains game messages. Who played what, scores, everything related to the game...
3. Discussion: Groups your private messages, public chats, table messages, invitations, and messages related to your friends. In short, everything related to communication with other Playroom users.
4. Private messages: Shows your private messages, as well as notifications related to your friends.
5. Invitations: Shows any game invitations you may have received.
6. Friends: Shows the messages related to your friends, such as entering and leaving the Playroom or received/accepted friend requests.
7. Public chat: Shows all the messages written in the public chat.

Views can be fully customized from the reading and appearance settings. From there, you can check or uncheck any channel from a given view, as well as add your own views. More information is available in the [reading and appearance section](#reading-and-appearance) of the Playroom options chapter.

### Clearing or copying your history
If you want to clear your entire history, you can access  that option by opening the context menu (applications key or shift+f10) on the history edit box.  
You have the option to copy your entire history, select all, or clear the history, leaving the edit field empty.

## Arcade games
In addition to card, board and dice games, since version 3 of the Playroom client, the Playroom offers a new kind of games, arcade games. Arcade games are audio games. Unfortunately, due to their nature, they currently do not offer any text on screen for sighted people.

Since they work a little differently compared to the traditional games, they will separately be described here.

Just like in traditional games, pressing ctrl+F1 while at a table will still open the game rules, so here we will instead just focus on the interface, and some important things to keep in mind while playing.

Note: This part of the Playroom is still very early work in progress. Things are probably going to change, and the documentation will be updated when they do.

### Accessing  an arcade game
To play an arcade game, you must be using the Windows client (preferably always its latest version).

Once you create a new table, if you meet this requirement, you  will have an option below the cancel item called arcade games. This menu can always be accessed quickly by pressing the right arrow.  
This will present a list of all the currently available arcade games. The left arrow will  return you to the traditional, classic games.

Pressing enter on one will create its table. At the moment, all arcade games are created as private tables by default, since the multiplayer mode currently does not work. Thus, you can currently only compete with other players on a global scoreboard for each game, but not play directly against them.

### Game download and start
Once you press enter while at an arcade table to start the game, the game first has to be downloaded. This should take a short amount of time, depending on your connection.  
Once that is completed, you will hear a short chime, notifying you that you have entered the arcade mode.

In arcade mode, most standard Playroom shortcuts do not work. You can use only the game shortcuts.  
A few shortcuts however do work, and they are alt+C to access the chat (so you  can chat or reply to a PM), alt+H to access the history, and alt+M  to  return  to  the menu list, in this case the arcade mode area.

The game will always instruct you what to do, this should be typical of an audio  game, for example using the arrow keys to navigate a menu. At this time, to activate options inside a menu of an arcade game, please don't use the NumPad enter key. Use the standard enter key instead.

Note: Arcade game tables cannot be saved. It is also impossible to watch an arcade game in progress.


## Playroom options
The options menu lets you customize various Playroom  settings. It can be accessed from the main room, or from anywhere using the F10 key.

### Language
This option lets you change the Playroom language. Note that the game language is always the language of the table master. So, if you are the table master, stay careful not to switch the language of a game in progress suddenly, or you could confuse other players.  
The language can also be changed directly from anywhere using the shortcut shift+F3.

### General options
This menu allows you to configure several settings related to the general behavior of the client.

#### Ask a confirmation before exiting
If this setting is enabled, before you press alt+F4 or close the Playroom from the system tray, you will be asked to confirm that you are really sure you want to do this. This setting is enabled by default.  

#### Minimize to taskbar
If this setting is enabled, when pressing Alt+F4 to close the Playroom, the Playroom will stay open in the background and will remain in your system tray. The system tray can be accessed with Insert+F11 if using Jaws, or Windows+B if using NVDA. If you find the Playroom icon there, you can press enter to maximize it again, or open the context menu with the applications key to close it completely. Note: It might be necessary to first show all the hidden icons in the system tray, depending on your Windows settings.

Note: With NVDA, there is a known issue causing the Playroom to still stay focused after pressing Alt+F4 with this option enabled. Just press Alt+tab to move away from the Playroom window, and the window should completely disappear.  

This option is disabled by default.

#### Auto login at startup
If this option is enabled, when you open the Playroom client, you will no longer be asked to enter your login details. As long as you did it once and the remember password option was enabled, you will login directly without the connection dialog being displayed at all.

Note: In case of an error, such as incorrect credentials due to a nickname change, this option will disable itself so that you can fix the error the next time you open the client.

This option is disabled by default.

#### Automatically save histories
If this option is enabled, everything displayed in your history will autommatically be saved to a text file. The text files are named according to the current date, so each day will have its own history.

Below this option, you can also choose a folder for automatic history saving.

This option is disabled by default.

### Audio and text-to-speech
In this menu, you can customize various audio settings.  

#### Sound volume
This option will display your sound volume. You can  press left or right arrows to change the volume here.

To quikly adjust the volume from anywhere on the Playroom, first press F6 to change the volume type you want to adjust, and then use F7 to decrease that volume, or F8 to increase it.

#### Sound audio output:
This will let you change the output device for general Playroom sounds. By default, it follows your default Windows output device.

Note: Below this option, there are exactly the same settings for the notification sounds, as well as music and streams. Streams are explained below in the [audio streams section](#audio-streams).

#### Duck notifications sounds when arcade mode is active
When  playing an arcade game, each notification you receive can be quite disturbing, since you need to focus on the game audio. To help with this, each notification sound can have its volume lowered.  
This option is enabled by default.

#### Disable interface sounds
While moving across the menus, closing or opening a menu, you will hear small clicks. This option will let you disable those clicks, if you don't like them.  
Note: There is an issue preventing this option from working the first time it is enabled. Restarting the client after toggling it, then toggling it once more should fix it.

This option is disabled by default, meaning that you will hear the interface sounds.  

#### Use DirectSound instead of WASAPI
Windows applications can use two different standards, or APIs for audio playback. They are direct sound and WASAPI.  
By default, the Playroom uses WASAPI, which is a more modern API, and provides less latency, and overall better performance. This is the recommended option for most users.  
However, some sound devices may experience distortion, or poor sound playback. If this is the case for you, try enabling this option and switching back to the old Direct sound to attempt to improve the situation.

Unless you are experiencing problems with sound playback, you do not need to change this option.

### Reading and appearance
This menu will let you customize everything regarding your channels and views. Channels and views have been explained later, so we will not re-explain this concept here, rather all the options available to you will be explained. To check out what are channels and views, read the [Channels and views section](#history-views-and-channels).

#### Channels
This menu will open a list of all the channels available for the Playroom messages. This list is not customizable, but how a certain channel is displayed is. Pressing enter on a channel will open the options menu for that channel.

The following is a list of all the channels currently available, and which messages they contain:

- System messages: Important global Playroom notifications, such as an incoming server reboot or other technical maintenance.
- Game messages: Everything related to a game, such as the turns of each player or score announcements.
- Public chat: The chat messages written on a table.
- Private messages: Private messages you received or sent.
- Invitations: Any invitations to a table you may have received.
- Table messages: Messages about who joined or left a table, as well as any other messages related to table participation.
- Global messages: The main room messages informing about table creations, joining or leaving, as well as messages informing about the disconnections/reconnections of each player.
- Notifications: Important notifications, such as when it is your turn in a game.
- Friends: Messages about incoming friend requests or their status, as well as about your friends leaving/entering the Playroom.
- Administration: Any messages you may have received from the Playroom staff, or responses to your messages.

##### Channel options
Once you choose a channel to customize, you have the following options:

- Speech: Lets you choose when the messages of that channel should automatically be spoken. The options are never, if active (speaks the message if the Playroom window is focused), if inactive (speaks the message if the Playroom window is not focused), and always.
- Sound: Offers you the same options you have for speech, but this controls when should this channel be allowed to play its sounds.
- Sound type: Lets you choose if the sounds of this channel should belong to the standard sounds category, or the notifications.
- Don't display in history: Completely hides the messages of this channel. They will not be shown in history, neither in the history edit box, nor when reviewing the history with page up or down.
- Visual options: Below this, you have a list of several options to customize the visual appearance of the channel. You can make its messages bold, underline or italic, as well as change the color of its text.

#### Views
This will open a list containing all your history views. This list is customizable. Pressing shift+Up or down arrow keys lets you move that view up or down, and pressing delete lets you delete it.  
Opening a view will open its options menu.

At the bottom of the menu, you also have the "add view..." option, which lets you add a custom history view.

##### View options
Upon opening a specific view to customize, you will first have the option  to change its name.  
Below that, you will have a list of checkboxes. These are all  the different Playroom  message channels. This will let you choose which channels to display in that view.

For example, the discussion view has private messages, public chat, table messages and friends channels selected.

Customizing channels and views is an extremely flexible and powerful feature of the Playroom. We strongly recommend familiarizing yourself with these options, as they can allow you to configure, in great detail, how and when messages should be read or displayed. Below, we have outlined just a few possible scenarios, to demonstrate why this feature can be extremely helpful.

1. By default, when at a table, chats will be read and will play a sound only when you are focused on the Playroom window. You may dislike this and not want to miss messages. You can achieve this by customizing the public chat channel, and setting its speech and sounds to always.
2. You may not want to have messages about your friends leaving and entering the Playroom as a part of your discussion view. Achieving this is possible by customizing the discussion view, and unchecking the friends channel, which will no longer be a part of that view.
3. You may want to hear a sound every time it is your turn in a game. By default, this sound will  play only when you are outside of the Playroom window. To have it always playing, set the notifications channel to always play its sounds.

#### Colours...
Lets you configure the different colors. In addition to customizing the appearance of each color, you can also change the text color, background color, text color of selected element, background color of selected element, grayed text color, use predefined colors for light/white background or use predefined colors for dark/black background. The same customizations can be applied to the font of the text.

#### Enable tooltips
This option is only useful for sighted users. Blind people do not need to change this setting.  
When this option is enabled, if the text of a list item is too large to fit on the screen, a tooltip will be shown once the mouse is hovered over it, displaying the full item text. It is also possible to configure the delay after which this tooltip will appear.

This option is disabled by default.

#### Use embedded web view
Normally, when you press CTRL+F1 inside a game to open its rules or activate the context menu item to do this, the rules will open directly inside the Playroom client. They will be shown in an embedded web view, allowing you to read the rules without moving away from the client.  
However, if you prefer these pages to instead open in your default Web browser, you should disable this option.

This option is enabled by default.

In addition to configuring this, once a page is opened inside the client web view, shift+N or shift+enter on a link will open that link  inside your default web browser.

### Security
This section contains a few options to make the experience of the Playroom as secure as possible.

#### Use only secure connections
Normally, the connection to the Playroom server is encrypted, and made using SSl. However, this secure connection may fail, because of an expired certificate, or a problem on your side. In the worst case, your connection may even be compromised.  
To prevent this, if this option is enabled, the Playroom client will never connect to the server if a secure connection cannot be established.  
If it is disabled, this will be ignored, and you will have the option to connect to a non-secure server as well if a secure server fails.

This option is disabled by default.

#### Remember passwords:
This option is the same as in the connection dialog. As long as it is enabled, the Playroom will remember the password you entered to log in.

Note: When reinstalling the Playroom client completely, you may notice that your login data is still preserved. This is because the data is stored in the Windows credentials manager. If you want to delete your data completely, you need to delete it from there.

The security options also contain a copy of the auto login at startup option. For its description, check the [Auto login at startup section](#auto-login-at-startup).

### Privacy
The privacy options will let you customize who can  reach you and get in touch with you, as well as which global notifications you will receive.  
In all cases, you can choose the following:

- Your friends,
- Your friends and their friends,
- Your favorites,
- Everybody except blocked people,
- Nobody.

Here are the different privacy options available to you:

- Who can send me private messages?
- Who can send me invitations?
- Who can join my public tables?
- Who can send me permanent private messages?
- Notify connections: This will let you choose who to be notified about when they enter the Playroom.
- Notify table creations: This will  let you choose when to be notified  in the main room about somebody creating or joining a table.


Keep in mind that the private and permanent message privacy options apply to both sides. For example, if you choose to have only your friends messaging you, then you can similarly message only your friends.

### Restore default settings
This is the last option you will find in the options menu. It will restore all settings to their defaults, except the privacy related options. You will of course be warned before doing this.

## Additional features
This section contains the description of everything available in the functions and more menu. This menu can be opened  from the main room, or quickly from anywhere by pressing the F9 key.

### Your inbox
Your inbox will contain all your permanent messages. It can be opened directly from anywhere on the Playroom by pressing CTRL+shift+M.  
Permanent messages are messages exchanged between 2 to 7 users. They are stored on the server, and remain available, even if the participants are not online. They are thus a great way to notify people of something and make sure that your message will be read.

By default, your inbox should be empty. When you open it, you will thus only have the option to start a new discussion, subscribe to it, open your inbox on our website so you can review the messages in your web browser, or go back to the previous menu.

Note: To prevent spam, new accounts are not allowed to start permanent message discussions right away. As long as you use the Playroom for a while, this restriction will be automatically removed.


You may also receive important global Playroom notifications in your inbox. The Playroom staff will never send you any kind of spam or advertisement here, this is useful only to notify of something such as a big period of downtime.

#### Starting a new discussion
Choosing this option will allow you to start a permanent discussion. Once you press enter on it, you will be asked to type a username.  
When writing the username, you can separate multiple participants with commas. A discussion can have 6 participants at most.

Note: For special cases, you can contact the administration so that more participants can be invited, such as when organizing a tournament.

The only other two fields that are required here are typing a subject (a short and concise summary of your message topic), and the message itself. After you did this, pressing send should send your message to the specified participants, if everything was done correctly. If not, you will  be told what the problem is and will have the opportunity to correct it.

#### Reviewing discussions
Once you have created your first discussion, it should already appear in your inbox. Pressing enter on it will open the discussion and give you a few more options:  
- All the messages of the discussion will be in the list. If the discussion is too long, you will also have the next page item to view older messages. The list will show only a small part of the message, press enter or the right arrow to have it read completely.

- Reply: Send a reply to the discussion. This will open the same menu as the one for starting a new discussion, except that it will only have the message field, since you are replying to an already existing message. You can also use CTRL+R to access the reply option quickly.
- List of participants: This will show every user participating in this discussion. You can use CTRL+T to get this information quickly.
- Leave the discussion: This will delete the discussion from your inbox, and you will no longer be a part of it. Other participants will also be able to see that you left. You can also use the delete key on any discussion in your inbox to do this more quickly.
- Subscribe to this topic: Doing this will cause every new message to arrive at the e-mail address you have specified when creating your Playroom account.
- Open this discussion on the web: This will open the discussion directly on our website. From the web, you can access even more features if you are the owner of the discussion, such as inviting more people to it, or kicking out certain participants if you no longer want them in the discussion. These features are not available via the client at this time.

#### Subscribing to this forum
The subscribe option will, if accessed from your inbox, just like for individual discussions, cause an e-mail to arrive to your mailbox every time a new discussion is created, and you are a part of it.

### Friends list
The Playroom offers you the ability to add the users you often talk to to your list of friends. This will give you several benefits:

- You will see those users in a quick, accessible list, which is similar to a list of your contacts.
- You can hear when they enter or leave the Playroom. Note: This is configurable, and if you do  not want this, it can be disabled. More information is available from the [privacy section](#privacy) of the [Playroom options](#playroom-options) chapter.
- Your privacy settings can be configured so that only your friends can message you. In this case, you can communicate only with the people on this list.

To access your list of friends from anywhere on the Playroom, press CTRL+F.

#### Adding people
To add someone to your list of friends, use the "add a friend..." option.  
This will open the list of online users, where you can press enter on one to add them. If the person you want is not in this list, activate the "more..." item.  
This will open a dialog where you can type a username to add to the list instead.

Assuming it was successful, you will be told so, and all you have to do now is wait for them to accept your request.

You can also use the /add command as explained in the [chat commands section](#chat-commands).

#### Accepting requests
To accept a pending request, activate the received requests option. Pressing enter on a request in the list (if any), will open the context menu for that user, which will now contain an option to accept them as a friend.

You can also use the /accept command as explained in the [chat commands section](#chat-commands).

#### Favorites
The list of friends can be filtered even further. You may have a lot of friends in the list, but only a few who you talk with all the time.  
Pressing enter on a person in your friends list will also contain an option "add to favorites".  
If you choose this, the person will now be in your favorites. This will give you the following:

- All your favorites are always at the top of your friends list, regardless of their online status.  
- Exactly the same as your friends list, your privacy options can be configured to receive messages only from favorites.

### Blocked users list
If somebody is particularly annoying or spamming you, you have the option to block them. This option will let you see your blocked users, as well as allow you to block someone.  
A blocked user can no longer send you private messages, permanent messages or invitations. They also can't join your table as long as you are the master. Of course, a blocked user can't send you a friend request, and if you have previously been friends, blocking a user will remove them from your  friends list.

Note: At any time, you can unblock anybody you previously blocked.

### Status messages
Choosing the option "Change your status message" will  allow you to set your status message.  
A status message can have 90 characters at most. This message is only visible to your friends. It is a kind of mood message, and you can express anything here, as long as it follows the Playroom rules.

### Open forum
This option will open the Playroom forum directly in your client.  
In fact, when we talked about the inbox earlier, the inbox is also a forum type, though only accessible to you, and with every user having their own inbox.  
However, the Playroom forum will allow you to make suggestions, report bugs, be informed about the Playroom news and updates, and discuss various topics with the community.

Here, only the main differences between the forum and the inbox will be highlighted, as well as some additional features.

Note: Some more features are available when using the forum from the Playroom website. These are discussed in the [website documentation](/sitedocs).  

To access the forum from anywhere on the Playroom, use CTRL+shift+F to open  it directly via the client, or CTRL+F2 to open it on our website.

#### Creating a topic
Once you open the forum, it will display a list of categories. These will be:

- Private messages: Another shortcut to your inbox.
- Subscriptions: Any topics you have subscribed to, or topics from the categories you have subscribed to.
- Latest participations: Topics in  which you  participated, sorted based on recent activity.
- Recent topics: All forum topics, where the ones containing any new messages will be at the top.
- Popular topics: The forum topics voted by the community as the most interesting or useful.
- Any other language specific forums, such as bug reports, suggestions and comments, and so on...

Note: You cannot post a new topic in any of the automatically generated categories, such as recent topics, popular topics, and so on. A topic can be posted only in a language specific forum.

Once you open a category, pressing ctrl+N or the start a new discussion option will let you start a new topic.

This is similar to your inbox as well, except that here you only need to type your subject, and the message.

#### Viewing existing topics
Just like in your inbox, opening any category will show you a list of topics. Reading or replying to messages here works exactly the same. The forum offers you a few more features, and they will be discussed here.

#### Topic score
Below the option to open the discussion on the web, you will see an item displaying the current topic score. This score increases whenever a community member votes the topic as useful or decreases if the topic is voted as useless.  
The options to vote are located below the topic score.

##### Voting on a post
In addition to voting on a topic, you can vote on individual posts as well. To do so, open the context menu (applications key) on the post you want to vote on. This will show its current score, as well as allow you to upvote or downvote it.

###### Quick voting
The following shortcuts work on a focused post, and allow you to vote more quickly without having to open the context menu:

- Shift+Y: Upvote a post. Think of it as saying yes, thus the letter Y.
- Shift+X: Downvote a post.
- Shift+Z: Undo or reset your vote.

#### Topic labels
A topic can have a label. Only the creator of the topic can add a label to it. You will find an item to do this when you open  the topic.  
Labels are used to quickly add a tag to a topic. They can be used in case of a bug report, to mark it as solved, or in case of a tournament, to mark it as full, ongoing, cancelled, and so on.  
All of the labels should be self-explanatory.

#### Polls
A topic can have a poll you can vote on. They can also often be surveys, posted by the developer of  the Playroom to gather opinions about a feature, or something upcoming.  
If the topic has a poll, you will  see it at the top of the menu once you open it. You can check one answer, or multiple answers, depending on how it is configured.  
At the bottom of the menu, you will be told the rules of the current  poll: When does it close, whether you can  select multiple answers, or whether the answers are anonymous.

Note: To create a poll yourself, you must use the website. This process is described further in the [website documentation](/sitedocs)

#### Editing your message
If you noticed that one of your messages has a mistake, you have the option to edit it.  
To do so, press the applications key or open the context menu on that message. As long as this was a message you posted, the menu will contain an option to edit it.  
You can also use the shift+E shortcut on your message to access the edit feature directly.

Keep in mind that you cannot post multiple messages in a row until a few hours pass. If you have something to add to your last message, you can edit it.

Note: All the functions mentioned above such as editing, voting, or labeling a topic require you to exit out of a topic and then come back to it to see the changes you have made. This is a limitation exclusive to the forum inside the Playroom client.

#### Forum subscriptions
Unlike in your inbox, subscribing to a topic or a forum won't send any e-mails. In this case, the topic or topics from a forum will  be accessible in your subscriptions section. Use this to access any favorite or useful topics more quickly.

### Send a history report
This option is the only recommended way to report something to the Playroom staff. It is the easiest way for you to send us your history, as well as for us to review it.  
When you select this option, you will be asked what you want to send. Both options are explained there. Send a discussion report to report something that happened in a public chat or in private messages, or a game report to report a bug.

Note: This option will only send your current history, since the time you have connected to the Playroom. You cannot use this option to report something that happened several days ago, since only the current history will be sent.

In the comment field, make sure to enter a clear comment, so that the staff does not have to waste too much time reading the entire history, which could be quite long. Mention what started the problem and what to look for. Here are some examples:  
Good comment:  

> Hello,  
in this history, Bob insulted me and my family. We started a civil discussion talking about technology, but it devolved into personal attacks. The first message that began the argument was this one: Bob says: You are the most annoying person I have ever talked to. Mark then typed ZZZZR, which crashes my speech  synthesizer, Eloquence.

Bad comment:  

> Bob insulted me, ban him.

Keep in mind that most problems with a particular individual can be resolved by simply blocking the person in question. In many cases, intervention from the staff is not necessary. However, we are of course here in  case of repeating offenses, or if blocking the person becomes insufficient, for instance someone crashing your speech synthesizer or creating multiple accounts.

//Todo: Probably consult the helpers for wording and general suggestions regarding this section.

### Open website
This option will open our website in your default browser. From the main room, this can also be done by pressing CTRL+F1.

### Save history in a file
This option will let you save your entire history to a TXT file. It will open the standard save as dialog, allowing you to choose the location and type the name.


### Save current view in a file
This option will  let you save only one view of the history to a file. The currently focused view will be saved. Very useful if you only want to save a discussion or game messages! For more information on what are the views and how to use them, check the [Views section](#history-views-and-channels).

Below this option, you also have an option to copy the current view to the clipboard, in  case you  do not want to save it right away but still want to keep it.

## Bonus features

### Audio streams
The Playroom offers you an option to propose an audio stream while at a table. To do this, a few conditions must be fulfilled:

- You must be the table master,
- The link to the audio stream must directly lead to the audio file. It cannot be a web page, for example, that first requires you to click  a download button, or find a link to a player. These are typically not direct links to the audio file.

Some popular streaming options include streaming a radio station, or from a Cloud storage provider that lets you directly link to the audio, such as Dropbox, OneDrive or Google drive.

Note: This is not an advertisement or an endorsement of these cloud storage providers. Here we are giving just a few examples to help you get started.

Once you have prepared your stream, press CTRL+P or activate the "Start/stop an audio stream" option in the table menu and a dialog will open. Paste the URL and press enter.

Assuming everything worked correctly, you should hear the stream. Everybody else at your table will  also be notified, and they can press CTRL+P. In this case, the stream will start playing.

Pressing the same shortcut will stop the stream. If you are the master, pressing it once more will let you propose a different one. If you do not want to propose a different stream but just want to hear the same one again, press enter without changing anything in this dialog, and the same stream will start playing again.

### Table topic
On a free table, pressing CTRL+T or activating the "View or change table topic" option in the table menu will let you set a topic for your free table.  
This topic can  have 50 characters at most. The topic can be anything summarizing what the table is about, as long as it respects the Playroom rules.

# Further documents
Here are some additional resources to help you learn more:

- [The Frequently asked questions page, containing answers to some of the most common questions](https://qcsalon.net/en/faq). This page can also be opened using the Shift+F1 shortcut from the Playroom client.
- [The shortcuts page, containing a full reference of the Playroom shortcuts](https://qcsalon.net/en/shortcuts).
- [Web client documentation](webclient.html).
- [Website documentation](sitedocks.html)
- [Markdown documentation, to help you format your forum posts](https://qcsalon.net/en/markdown).

# Credits
To conclude this documentation, I would like to thank the following people:

- Quentin C or Aminiel: The main developer. Without him, none of this would be possible. Thanks also for answering the countless questions on the forum, most of which helped in great detail to prepare and write this document.
- The Playroom staff, for writing Markdown documentation.
- The English staff: They have prepared the shortcuts reference, as well  as the Frequently asked questions page. They have been copied here only to have a more complete documentation page, but they are not my work at all.
- All the Playroom administrators, helpers and translators, for keeping the place running smoothly.
- Everybody else who read and checked this documentation and reported any errors with it.

Hopefully this document helped you familiarize yourself with the Playroom, and don't be afraid to reach out if you still have any questions!

# For translators
If you would like to translate this documentation into your language, you can always view the raw Markdown version [here](general usage.md).
You can then translate this version and use something like Pandoc to convert it to HTML. If you need any help with this, feel free to contact me, and in case it is easier, I can do the conversion process.
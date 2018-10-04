# CompProgBot
A Discord bot for competitive programming. 

Invite CompProgBot to your server: https://discordapp.com/oauth2/authorize?client_id=492133335133585418&scope=bot&permissions=67624000

## About

### History
I wrote a Discord bot called oj-linker for my Taiwanese informatics Discord server in 2017. This is basically a copy of that but in English and minus all the inside jokes (and a bunch of really cool features no one would ever use). It even had automatic reminders before every Codeforces round, but apparently Americans don't (have the correct timezone to) do Codeforces. You can still find it in my repos.

I learned how to make a Discord bot by watching this tutorial: [https://www.youtube.com/watch?v=-5jJaO17Gjs](https://www.youtube.com/watch?v=-5jJaO17Gjs). 

### Language
This bot was written in JavaScript (node.js), and I use [discord.js](https://discord.js.org/) to interact with the Discord API.

### Server
I currently just run this bot on my Asus laptop at home, so it might be quite slow and the Internet connection might cut out every once in a while (I know it's an annoyance). I used to use Heroku to host oj-linker, but I would run out of free hours for the last week of each month and so my bot would only be online for three weeks every month. I might switch back to using Heroku if my laptop is too slow (or if I decide I want to turn of my laptop).

TL;DR: Currently using laptop as server, might use Heroku in the future.

## Commands
All commands start with the `~` prefix.

### Bot info
`~help` or `~about`: Shows a not so helpful help message. This was created just to test my bot.

`~commands`: Lists commands (what it actually does is link to this page).

`~bug`: Report a bug. More specifically, links to the issues page.

### Online judges
`~uva [id]`: Links to and shows information of a certain UVa Online Judge problem.

### Other
`~meme`, `~memes`, `~reddit` or `~programmerhumor`: Shows a post from the subreddit r/ProgrammerHumor. Chooses from the top 20 posts sorted by hot.

### Might add in future
- Online judges to support:
    - Codeforces
    - Codechef
    - and others
- Any other suggestions

## Timeline
Just a brief log of all the quirky stuff that happened. I should totally make this into a novel and publish it (I shouldn't).
### September 19, 2018
I make my first commit. In this commit, I accidentally uploaded my token to Github. Later the same day, I realize the major security flaw in my commit, so I make another commit. In this commit, I put my token in a seperate file and add said file to `.gitignore`. However, I do not delete my previous commit, nor do I regenerate a new token. I know, I'm a genius. Remember this fact, as it will be important in the plot progression. 
### September 22, 2018
Memes (from r/ProgrammerHumor) are added to my bot. That day I learn that adding `.json` to the end of a Reddit URL shows the JSON file for that page (Thanks Reddit, very cool!). It is worth noting that the first feature I added for a competitive programming assistant bot was a meme spammer. Goes to show the usefulness of this bot.
### October 2, 2018
Some guys who have nothing else better to do go through a bunch of GitHub repos with the goal of finding Discord bots that have their tokens exposed online and decimating the servers in which they inhabit. These people have so little of a life that they take the time to go through my commit history to find my token, and after doing so, infiltrate all the servers CompProgBot was in (which fortunately only included an almost empty server and my test server). They delete all the channels in these servers and spam all members of these servers with the invite link to their pathetic Discord server. I still don't really like you guys.
### October 3, 2018
I create this timeline so I can write some "funny" and "witty" stuff that no one will ever get to read. Also because I hate having enough sleep.
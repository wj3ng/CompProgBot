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
none yet :(

### Might add in future
- Online judges to support:
    - Codeforces
    - Codechef
    - and others
- Reddit (something like top post of r/ProgrammerHumor)
- Any other suggestions
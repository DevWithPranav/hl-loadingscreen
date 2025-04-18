Custom FiveM Loading Screen 🚀
Welcome to the Custom FiveM Loading Screen project! This resource provides a dynamic and immersive loading screen for your FiveM server, featuring a modern UI, background music, server rules, team profiles, news updates, and more. Built with performance and customization in mind, this loading screen enhances the player experience while they join your server.
Features ✨

Customizable UI: Displays server information, rules, team members, and news with a sleek design.
Background Music: Includes a playlist with two tracks (Baby Blue by Luke Hemmings and a second song) to set the mood.
Interactive Elements: Supports mouse cursor interaction for a polished feel.
Server Information: Showcases your server’s name, description, Discord link, and online player count.
Responsive Design: Optimized for various screen resolutions.
Manual Shutdown: Optional manual control of the loading screen via JavaScript (loadscreen_manual_shutdown 'yes').

Installation 🛠️
Follow these steps to install the loading screen on your FiveM server:

Download the Resource:

Clone this repository or download the ZIP file from GitHub.


Extract Files:

Extract the folder to your FiveM server's resources directory.


Ensure Resource:

Add the following line to your server.cfg:
ensure custom-loading-screen




Verify Assets:

Ensure all files in the dist/assets/ folder (e.g., image3.png, image4.png, logo.png, music-CyXgJPQu.mp3, music1-CzRypXeT.mp3) are correctly placed as referenced in the code.
File names must match exactly as specified:
dist/assets/image3.png
dist/assets/image4.png
dist/assets/logo.png
dist/assets/music-CyXgJPQu.mp3
dist/assets/music1-CzRypXeT.mp3




Start the Server:

Restart your FiveM server or use the refresh command followed by start custom-loading-screen.



File Structure 📂
HL-LOADINGSCREEN/
├── dist/
│   ├── assets/            # Static assets (images, music)
│   │   ├── bg-Bdn7zoU6.jpg
│   │   ├── bg.jpg
│   │   ├── discord.png
│   │   ├── image1.png
│   │   ├── image2.png
│   │   ├── image3-6xvTHx4d.png
│   │   ├── image3.png
│   │   ├── image4.png
│   │   ├── logo.png
│   │   ├── music-CyXgJPQu.mp3
│   │   ├── music1-CzRypXeT.mp3
│   │   ├── Radiobtn.png
│   ├── config.js          # Configuration file
│   ├── index-9IFJUl1a.js  # JavaScript bundle
│   ├── index-DZqBJsmh.css # CSS stylesheet
│   ├── index.html         # Main loading screen HTML
│   ├── vite.svg           # Vite logo (optional)
├── client.lua             # Client-side Lua script
├── fxmanifest.lua         # Resource manifest
└── README.md              # This file

Configuration ⚙️
You can customize the loading screen by modifying the exported constants in your JavaScript file (e.g., script.js or the relevant file exporting rules, team, news, home, playlist, and discordlink).
Exported Constants

Rules 📜:

Displays a list of FAQs. Currently, all entries are placeholders with identical content:
{
  question: "Is there a free trial available?",
  answer: "Yes, you can try us for free for 30 days. If you want, we’ll provide you with a free 30-minute onboarding call to get you up and running."
}


Update the question and answer fields to reflect your server’s actual rules or FAQs.



Team 👥:

Showcases team members with their names, roles, descriptions, and social links:
{
  backgroundImage: image3,
  profilePhoto: image4,
  name: "kannan",
  role: "developer",
  desc: "Passionate about building scalable apps and solving problems. Always learning.",
  github: "www.google.com",
  x: "www.google.com",
  linkedIN: "www.google.com"
}


Replace placeholder data (kannan, www.google.com) with actual team details and valid URLs.



News 📰:

Displays news articles with images, titles, and descriptions:
{
  backgroundImage: image3,
  profilePhoto: image4,
  name: "kannan",
  whiteText: "Benefits of Drinking Coffee,",
  purpleText: "Can Lower the Risk of Cancer to Stroke",
  desc: "Coffee is the most popular drink in the world...",
  date: Date.now()
}


Update with relevant news content and ensure date reflects the correct timestamp.



Home 🏠:

Contains server information:
{
  title: "Home Land Role Play",
  desc1: "Home Land Role Play (HLRP) is a serious FiveM server offering immersive and realistic roleplay...",
  desc2: "With custom scripts, active staff, and community-driven events...",
  discordname: "Home Land RP",
  onlineplayers: "123 online members",
  logo: logo
}


Customize the title, descriptions, and Discord name to match your server’s branding.



Playlist 🎶:

Defines the background music tracks:
[
  { src: music, title: "Baby Blue", artist: "Luke Hemmings" },
  { src: music1, title: "Song Title 2", artist: "Artist 2" }
]


Update the second song’s title and artist with accurate details.



Discord Link 🔗:

Update the discordlink to your server’s actual Discord invite:
export const discordlink = "https://discord.gg/your-discord-link";





Asset Management

Ensure all referenced assets (image3.png, image4.png, logo.png, music-CyXgJPQu.mp3, music1-CzRypXeT.mp3) are placed in the dist/assets/ folder.
File names must match exactly as specified in the code to avoid display issues.

fxmanifest.lua Explained 📝
The fxmanifest.lua file configures the resource for FiveM:
fx_version 'cerulean'
game 'gta5'

author 'DevWithPranav'
description 'Custom FiveM Loading Screen'
version '1.0.0'

loadscreen 'dist/index.html'
loadscreen_manual_shutdown 'yes'
loadscreen_cursor 'yes'

files {
  'dist/index.html',
  'dist/assets/*.*',
  'dist/vite.svg',
  'script.js'
}


fx_version 'cerulean': Specifies the FiveM framework version.
game 'gta5': Targets GTA V.
loadscreen 'dist/index.html': Sets the loading screen’s main HTML file.
loadscreen_manual_shutdown 'yes': Allows JavaScript to control when the loading screen closes.
loadscreen_cursor 'yes': Enables the mouse cursor during the loading screen.
files: Lists all files to be loaded by the client, including HTML, assets, and JavaScript.

Usage Notes ⚠️

Asset Paths: Ensure all assets are correctly placed in dist/assets/. Incorrect file names or paths will prevent images or music from loading.
Performance: The loading screen is optimized for quick loading, but large asset files (e.g., high-resolution images or long audio tracks) may increase load times.
Customization: Modify the HTML, CSS, and JavaScript in dist/index.html and script.js to further tailor the design to your server’s theme.
Testing: Test the loading screen locally before deploying to a live server to ensure all assets and features work as expected.

Contributing 🤝
Contributions are welcome! To contribute:

Fork this repository.
Create a new branch (git checkout -b feature/your-feature).
Make your changes and commit (git commit -m "Add your feature").
Push to the branch (git push origin feature/your-feature).
Open a Pull Request.

Please ensure your code follows the existing structure and includes appropriate documentation.
Issues and Support ❓
If you encounter any issues or have questions:

Open an issue on this GitHub repository.
Join our Discord server for community support.

License 📄
This project is licensed under the MIT License. See the LICENSE file for details.
Credits 🙌

Author: DevWithPranav
Assets: Ensure you have the rights to use the included images and music files (image3.png, image4.png, logo.png, music-CyXgJPQu.mp3, music1-CzRypXeT.mp3).

Thank you for using the Custom FiveM Loading Screen! Enjoy creating an immersive experience for your players! 🎮

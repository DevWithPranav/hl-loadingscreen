
# 🚀 Custom FiveM Loading Screen

Welcome to the **Custom FiveM Loading Screen** project!  
This resource provides a dynamic and immersive loading screen for your FiveM server, featuring a modern UI, background music, server rules, team profiles, news updates, and more.  
Built with performance and customization in mind, this loading screen enhances the player experience while they join your server.

---

## ✨ Features

- **Customizable UI**: Display server information, rules, team members, and news with a sleek design.
- **Background Music**: Includes a playlist with two tracks (`Baby Blue` by Luke Hemmings and a second song).
- **Interactive Elements**: Supports mouse cursor interaction.
- **Server Info Display**: Show your server’s name, description, Discord link, and online player count.
- **Responsive Design**: Optimized for various screen sizes and resolutions.
- **Manual Shutdown**: Optional control of the loading screen via JavaScript (`loadscreen_manual_shutdown 'yes'`).

---

## 🛠️ Installation

### 1. Download the Resource
- Clone this repository or [download the ZIP](https://github.com/DevWithPranav/hl-loadingscreen/archive/refs/tags/fivem-resource.zip).

### 2. Extract Files
- Extract the folder to your server’s `resources` directory.

### 3. Ensure the Resource
Add this line to your `server.cfg`:
```cfg
ensure custom-loading-screen
```

### 4. Verify Assets
Ensure these files are in `dist/assets/`:
```plaintext
dist/assets/image3.png
dist/assets/image4.png
dist/assets/logo.png
dist/assets/music-CyXgJPQu.mp3
dist/assets/music1-CzRypXeT.mp3
```

### 5. Start the Server
Use either:
```bash
refresh
start custom-loading-screen
```
Or restart your server.

---

## 📂 File Structure

```plaintext
HL-LOADINGSCREEN/
├── dist/
│   ├── assets/
│   │   ├── bg.jpg
│   │   ├── discord.png
│   │   ├── image1.png
│   │   ├── image2.png
│   │   ├── image3.png
│   │   ├── image4.png
│   │   ├── logo.png
│   │   ├── music-CyXgJPQu.mp3
│   │   ├── music1-CzRypXeT.mp3
│   ├── config.js
│   ├── index.html
│   ├── index-9IFJUl1a.js
│   ├── index-DZqBJsmh.css
│   ├── vite.svg
├── client.lua
├── fxmanifest.lua
└── README.md
```

---

## ⚙️ Configuration

Edit exported constants in your JavaScript (e.g., `script.js` or `config.js`) to customize:

### 📜 Rules
```js
export const rules = [
  {
    question: "Do not break character.",
    answer: "Always stay in character unless instructed otherwise by staff."
  },
  ...
];
```

### 👥 Team
```js
export const team = [
  {
    backgroundImage: image3,
    profilePhoto: image4,
    name: "John Doe",
    role: "Developer",
    desc: "Backend specialist and game logic engineer.",
    github: "https://github.com/johndoe",
    x: "https://twitter.com/johndoe",
    linkedIN: "https://linkedin.com/in/johndoe"
  },
  ...
];
```

### 📰 News
```js
export const news = [
  {
    backgroundImage: image3,
    profilePhoto: image4,
    name: "Server Update",
    whiteText: "Major Patch Released",
    purpleText: "New Jobs & Bug Fixes",
    desc: "We’ve added new features and squashed several bugs.",
    date: Date.now()
  },
  ...
];
```

### 🏠 Home Info
```js
export const home = {
  title: "Home Land RP",
  desc1: "Home Land RP is a serious RP server...",
  desc2: "With custom scripts and active staff...",
  discordname: "Home Land RP",
  onlineplayers: "123 online members",
  logo: logo
};
```

### 🎶 Playlist
```js
export const playlist = [
  { src: music, title: "Baby Blue", artist: "Luke Hemmings" },
  { src: music1, title: "Ocean Drive", artist: "Duke Dumont" }
];
```

### 🔗 Discord Link
```js
export const discordlink = "https://discord.gg/your-discord-link";
```

---

## 📝 fxmanifest.lua

```lua
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
```

---

## ⚠️ Usage Notes

- **Asset Paths**: Ensure all referenced files are correctly placed in `dist/assets/`.
- **Performance**: Avoid overly large files to ensure faster load times.
- **Customization**: Tweak HTML, CSS, and JS as needed.
- **Testing**: Always test locally before deploying to a live server.

---

## 🤝 Contributing

1. Fork the repository  
2. Create a branch (`git checkout -b feature/your-feature`)  
3. Commit your changes (`git commit -m "Add your feature"`)  
4. Push the branch (`git push origin feature/your-feature`)  
5. Open a Pull Request

---

## ❓ Issues & Support

- Open an issue in the [GitHub Issues](https://github.com/yourusername/yourrepo/issues) tab.
- Join our Discord for real-time help: [Discord Invite](https://discord.gg/your-discord-link)

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙌 Credits

- **Author**: [DevWithPranav](https://github.com/DevWithPranav)
- **Assets**: Ensure you have the rights to distribute any images/music used.

---

Thanks for using the **Custom FiveM Loading Screen**!  
🎮 Enhance your roleplay server’s first impression!

```
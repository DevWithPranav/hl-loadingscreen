-- fxmanifest.lua
fx_version 'cerulean'
game 'gta5'

-- Resource metadata
author 'DevWithPranav'
description 'Custom FiveM Loading Screen'
version '1.0.0'


loadscreen 'dist/index.html'
loadscreen_manual_shutdown 'yes' -- optional, for custom control via JS

loadscreen_cursor 'yes'

files {'dist/index.html', 'dist/assets/*.*', 'dist/vite.svg', 'script.js'}


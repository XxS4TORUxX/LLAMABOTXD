import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
â âã ðððð ððð ððð ã â
â 
â âĨ [ðĪīðŧ] ðēððīð°ðģðūð: *â áīĘáī sĘÉŠáī ŌáīáīÉŠĘĘ â*
â âĨ [#ïļâĢ] ð―ððžðīððū: *+51 915 251 956*
â âĨ [ðģ] ðŋððīðĩðļðđðū: *${usedPrefix}*
â âĨ [ð] ðēð·ð°ðð ðŋððļðð°ðģðūð: *${chats.length - groups.length}*
â âĨ [ðĶ] ðēð·ð°ðð ðģðī ðķðððŋðūð: *${groups.length}* 
â âĨ [ðĄ] ðēð·ð°ðð ððūðð°ðŧðīð: *${chats.length}* 
â âĨ [ð] ð°ðēððļððļðģð°ðģ: *${uptime}*
â âĨ [ðĐ] ðððð°ððļðūð: *${totalreg} ððððððð*
â âĨ [âïļ] ð°ðððūððīð°ðģ: ${autoread ? '*ðððððððð*' : '*ððððððððððð*'}
â âĨ [â] ððīððððļðēð: ${restrict ? '*ðððððððð*' : '*ððððððððððð*'} 
â âĨ [ðŽ] ð°ð―ððļðŋððļðð°ðģðū: ${antiprivado ? '*ðððððððð*' : '*ððððððððððð*'}
â âĨ [ðĩ] ð°ð―ððļðŧðŧð°ðžð°ðģð°: ${antiCall ? '*ðððððððð*' : '*ððððððððððð*'}
â âĨ [ðŽ] ðŋðēðūð―ðŧð: ${pconly ? '*ðððððððð*' : '*ððððððððððð*'}
â âĨ [ðĒ] ðķðēðūð―ðŧð: ${gconly ? '*ðððððððð*' : '*ððððððððððð*'}
â âĨ [ð] ðžðūðģðū: ${self ? '*ððððððð*' : '*ððððððð*'}
â âĨ [ðĻâðĶŊ] ððīðŧðūðēðļðģð°ðģ: 
â   *${speed} ms* 
â 
â âã ððĨððĶð - ððĻð­ ã â
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ðļð―ðĩðū ðģðīðŧ ðąðūð',
body: 'áīĘáī áīĘsáīÉŠáī ïđĢ Ęáīáī',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}

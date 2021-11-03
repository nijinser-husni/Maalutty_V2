const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const config = require('../config');
const fs = require("fs")
const Language = require('../language');
const Lang = Language.getString('gitlink');

Asena.addCommand({pattern: 'git', fromMe: false, desc: Lang.GL}, (async (message, match) => {

    var respoimage = await axios.get(config.MAALUTTY, { responseType: 'arraybuffer' })


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {quoted: message.data , thumbnail: fs.readFileSync('https://i.ibb.co/C7ZVWh7/Screenshot-2021-10-25-21-10-01-2.png'), mimetype: Mimetype.png, caption: `*≈≈≈≈≈≈≈Links ☟︎︎︎≈≈≈≈≈≈≈≈*
 
*owner number wa.me/917025868709*
   
*owner number wa.me/919605385305*
*whatsapp group : https://chat.whatsapp.com/FO3JyZPm1ma3vHyEQjaToY*
*githublink       _https://github.com/nijin-husni/maalutty_*
*audio commads    _https://github.com/nijin-husni/uploads/tree/master/media_*
*sticker commads  _https://github.com/nijin-husni/uploads/tree/master/stickers_*     
`}) 

})); 

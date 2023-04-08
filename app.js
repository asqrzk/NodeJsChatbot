const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');

const client = new Client({
  //authStrategy: new LocalAuth(),
  puppeteer: {
    args: ['--no-sandbox','--disable-setuid-sandbox'],
    
}
});

console.log("Client created");


client.initialize();

console.log("Client Initialized");

client.on('qr', (qr) => {
  qrcode.generate(qr, { small: true });
});

console.log("Qr generated");

// client.on('authenticated', () => {
//   console.log('AUTHENTICATED');
// });

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', async (message) => {
  if (message.body === 'hello') {
    message.reply('Hiiiii');
  }

  if (message.body === 'who are you') {
    //get media from url
    const media = await MessageMedia.fromUrl(
      'https://quteezwear.web.app/images/asq.jpg'
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'This is me',
    });
  }

  if(message.body === 'GL01')
  {
    //get media from url
    const media = await MessageMedia.fromUrl(
      'https://quteezwear.web.app/images/03.png'
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'Green Organsa',
    });
  }

  if(message.body === 'BY01')
  {
    //get media from url
    const media = await MessageMedia.fromUrl(
      'https://quteezwear.web.app/images/01.png'
    );

    //replying with media
    client.sendMessage(message.from, media, {
      caption: 'Boys Tees',
    });
  }

});


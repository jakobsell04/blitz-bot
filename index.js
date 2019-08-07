const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }


//FORTNITE
  if (msg.content == '#fortnite'){
    var maxf = 5;
    var minf = 1;
    var randomf =Math.floor(Math.random() * (+maxf - +minf)) + +minf;
      if(randomf == 1){
        msg.author.send('https://filemedia.net/27108/98iy34uehwjsamb');
      }
      else if(randomf == 2){
        msg.author.send('https://filemedia.net/27108/4y3o8');
      }
      else if(randomf == 3){
        msg.author.send('https://direct-link.net/34690/8ygvb')
      }
      else if(randomf == 4){
        msg.author.send('https://direct-link.net/34690/83ugyhbsngk')
      }
      else if(randomf == 5){
        msg.author.send('https://direct-link.net/34690/987ygvbj')
      }
  }




//SPOTIFY
  if (msg.content == '#spotify'){
    var maxs = 5;
    var mins = 1;
    var randoms =Math.floor(Math.random() * (+maxs - +mins)) + +mins;
      if(randoms == 1){
        msg.author.send('https://direct-link.net/34690/29ifn4f8n');
      }
      else if(randoms == 2){
        msg.author.send('https://direct-link.net/34690/2ifuh3bf');
      }
      else if(randoms == 3){
        msg.author.send('https://direct-link.net/34690/25wtsfgt')
      }
      else if(randoms == 4){
        msg.author.send('https://direct-link.net/34690/25wtsfgt')
      }
      else if(randoms == 5){
        msg.author.send('https://direct-link.net/34690/25wtsfgt')
      }
  }



//MINECRAFT
  if (msg.content == '#minecraft'){
    var maxm = 5;
    var minm = 1;
    var randomm =Math.floor(Math.random() * (+maxm - +minm)) + +minm;
      if(randomm == 1){
        msg.author.send('https://direct-link.net/34690/0298qufqjf');
      }
      else if(randomm == 2){
        msg.author.send('https://direct-link.net/34690/0298qufqjf');
      }
      else if(randomm == 3){
        msg.author.send('https://direct-link.net/34690/0298qufqjf')
      }
      else if(randomm == 4){
        msg.author.send('https://direct-link.net/34690/0298qufqjf')
      }
      else if(randomm == 5){
        msg.author.send('https://direct-link.net/34690/0298qufqjf')
      }
  }






  //NETFLIX
    if (msg.content == '#netflix'){
      var maxn = 5;
      var minn = 1;
      var randomn =Math.floor(Math.random() * (+maxn - +minn)) + +minn;
        if(randomn == 1){
          msg.author.send('https://direct-link.net/34690/2fijsnfsjkfs');
        }
        else if(randomn == 2){
          msg.author.send('https://direct-link.net/34690/2f9iuhsjf');
        }
        else if(randomn == 3){
          msg.author.send('https://direct-link.net/34690/2ig3ujg3')
        }
        else if(randomn == 4){
          msg.author.send('https://direct-link.net/34690/2ig3ujg3')
        }
        else if(randomn == 5){
          msg.author.send('https://direct-link.net/34690/2ig3ujg3')
        }
    }








});

client.login('NjA4MzAxNzQ2NzE2MDE2NjUw.XUmLqA.3L1NCqjtXquASS2ARctXiuPsQW8');

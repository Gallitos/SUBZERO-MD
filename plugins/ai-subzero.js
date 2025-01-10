/*╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺
    ⭐ＰＲＯＪＥＣＴ ＮＡＭＥ:
    ＳＵＢＺＥＲＯ ＷＨＡＴＳＡＰＰ ＭＤ ＢＯＴ
    
    ⭐ＤＥＶＥＬＯＰＥＲ
     ＭＲ ＦＲＡＮＫ 
     
    ⭐ ＭＹ ＴＥＡＭ
     ＸＥＲＯ ＣＯＤＥＲＳ
     
    ⭐ ＯＵＲ ＷＥＢＳＩＴＥ
     https://github.com/ZwSyntax/SUBZERO-MD

© ＴＲＹ ＤＥＣＲＹＰＴＩＮＧ ＩＦ ＹＯＵ ＣＡＮ⚠

╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺╺*/


  const axios = require('axios');
const config = require('../config');
const { cmd, commands } = require('../command');

cmd({
   pattern: "mrfrankai",
   desc: "💬 Chat with AI Assistant",
   react: "🧠",
   category: "ai",
   filename: __filename
},
async (conn, mek, m, { from, q, reply }) => {
   try {
       if (!q) return reply("❗ Please provide a query. Usage: .ai [your message]");

       const response = await axios.get(`https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=${encodeURIComponent(q)}`);
       
       const aiReply = `🤖 * SubZero AI Assistant*:
${response.data.response}

*POWERED BY MR FRANK*`;
       console.log(aiReply);
       return reply(aiReply);
   } catch (e) {
       console.log(e);
       return reply("⚠️ An error occurred while fetching AI response. Please try again later.");
   }
});

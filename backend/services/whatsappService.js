// WhatsApp via Twilio (optional — only fires if TWILIO_SID is set)
async function sendWhatsAppAlert(enquiry) {
  if (!process.env.TWILIO_SID || !process.env.TWILIO_TOKEN) {
    console.log('[WhatsApp] Skipped — no Twilio credentials configured.');
    return;
  }
  try {
    const client = require('twilio')(process.env.TWILIO_SID, process.env.TWILIO_TOKEN);
    const msg = [
      '🔔 *New Enquiry — Hardik Traders*',
      '',
      `👤 *Name:* ${enquiry.name}`,
      `📞 *Phone:* ${enquiry.phone}`,
      `🏢 *Company:* ${enquiry.company || '—'}`,
      `✉ *Email:* ${enquiry.email}`,
      '',
      `📋 *Requirement:*\n${enquiry.message}`,
      '',
      `🕐 ${new Date(enquiry.createdAt).toLocaleString('en-IN')}`,
    ].join('\n');

    await client.messages.create({
      from: process.env.TWILIO_WHATSAPP_FROM || 'whatsapp:+14155238886',
      to:   process.env.OWNER_WHATSAPP || 'whatsapp:+919416215742',
      body: msg,
    });
    console.log('[WhatsApp] Alert sent via Twilio.');
  } catch (err) {
    console.error('[WhatsApp] Failed (non-fatal):', err.message);
  }
}

module.exports = { sendWhatsAppAlert };

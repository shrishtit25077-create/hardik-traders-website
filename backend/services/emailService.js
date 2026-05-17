const nodemailer = require('nodemailer');

// ─── Create transporter (lazy — only if credentials exist) ───────────────────
function getTransporter() {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS ||
      process.env.EMAIL_USER.includes('your_gmail')) return null;
  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
  });
}

// ─── Owner notification email ────────────────────────────────────────────────
async function sendOwnerNotification(enquiry) {
  const transporter = getTransporter();
  if (!transporter) { console.log('[Email] Skipped — no SMTP credentials configured.'); return; }

  const html = `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{margin:0;padding:0;font-family:Inter,Arial,sans-serif;background:#f4f4f4;color:#1c1c1c}
  .wrap{max-width:560px;margin:24px auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08)}
  .header{background:#C8102E;padding:22px 28px;display:flex;align-items:center;gap:12px}
  .logo-icon{width:36px;height:36px;background:rgba(255,255,255,.18);border-radius:8px;display:flex;align-items:center;justify-content:center}
  .logo-text{color:#fff;font-size:16px;font-weight:800;letter-spacing:-0.3px}
  .logo-text span{opacity:.8}
  .badge{margin-left:auto;background:rgba(255,255,255,.2);color:#fff;font-size:11px;font-weight:700;padding:4px 10px;border-radius:20px;letter-spacing:.04em}
  .body{padding:28px}
  h2{font-size:18px;font-weight:800;margin:0 0 6px;color:#111}
  .sub{font-size:13px;color:#666;margin:0 0 20px}
  .card{background:#FAFAFA;border:1px solid #E8E2D9;border-radius:8px;padding:18px 20px;margin-bottom:16px}
  .row{display:flex;gap:12px;margin-bottom:10px;align-items:flex-start}
  .row:last-child{margin-bottom:0}
  .label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#999;width:80px;flex-shrink:0;padding-top:1px}
  .val{font-size:13.5px;color:#1c1c1c;font-weight:500;word-break:break-word}
  .req-box{background:#fff5f5;border:1px solid #f5c5c5;border-radius:7px;padding:14px 16px;font-size:13.5px;color:#1c1c1c;line-height:1.65}
  .actions{display:flex;gap:10px;margin-top:20px}
  .btn{flex:1;text-align:center;padding:11px 0;border-radius:7px;font-size:13px;font-weight:700;text-decoration:none;display:block}
  .btn-call{background:#C8102E;color:#fff}
  .btn-wa{background:#25D366;color:#fff}
  .btn-email{background:#1A5F9E;color:#fff}
  .footer{background:#F7F4EF;padding:14px 28px;font-size:11.5px;color:#999;text-align:center;border-top:1px solid #E8E2D9}
</style></head>
<body>
<div class="wrap">
  <div class="header">
    <div class="logo-icon">🔧</div>
    <div class="logo-text">HARDIK <span>TRADERS</span></div>
    <div class="badge">🔔 NEW LEAD</div>
  </div>
  <div class="body">
    <h2>New Enquiry Received</h2>
    <p class="sub">Submitted on ${new Date(enquiry.createdAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</p>
    <div class="card">
      <div class="row"><div class="label">Name</div><div class="val">${enquiry.name}</div></div>
      <div class="row"><div class="label">Phone</div><div class="val">${enquiry.phone}</div></div>
      <div class="row"><div class="label">Email</div><div class="val">${enquiry.email}</div></div>
      <div class="row"><div class="label">Company</div><div class="val">${enquiry.company || '—'}</div></div>
    </div>
    <div class="label" style="margin-bottom:8px;display:block">Product Requirement</div>
    <div class="req-box">${enquiry.message}</div>
    <div class="actions">
      <a href="tel:${enquiry.phone}" class="btn btn-call">📞 Call Now</a>
      <a href="https://wa.me/${enquiry.phone.replace(/[^0-9]/g,'')}" class="btn btn-wa">💬 WhatsApp</a>
      <a href="mailto:${enquiry.email}" class="btn btn-email">✉ Email</a>
    </div>
  </div>
  <div class="footer">Hardik Traders · Rewari, Haryana · +91 94162 15742</div>
</div>
</body></html>`;

  await transporter.sendMail({
    from: `"Hardik Traders CRM" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECEIVER || process.env.EMAIL_USER,
    subject: `🔔 New Enquiry — ${enquiry.name} (${enquiry.phone})`,
    html,
  });
  console.log('[Email] Owner notification sent.');
}

// ─── Customer confirmation email ─────────────────────────────────────────────
async function sendCustomerConfirmation(enquiry) {
  const transporter = getTransporter();
  if (!transporter) return;

  const html = `
<!DOCTYPE html>
<html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  body{margin:0;padding:0;font-family:Inter,Arial,sans-serif;background:#f4f4f4}
  .wrap{max-width:520px;margin:24px auto;background:#fff;border-radius:10px;overflow:hidden;box-shadow:0 2px 16px rgba(0,0,0,.08)}
  .header{background:#C8102E;padding:22px 28px}
  .logo{color:#fff;font-size:16px;font-weight:800}
  .body{padding:28px}
  h2{font-size:19px;font-weight:800;margin:0 0 8px;color:#111}
  p{font-size:14px;color:#555;line-height:1.7;margin:0 0 14px}
  .highlight{background:#FEF0F2;border-left:3px solid #C8102E;border-radius:4px;padding:12px 16px;font-size:13.5px;color:#1c1c1c;margin-bottom:18px}
  .info-row{display:flex;justify-content:space-between;font-size:13px;padding:8px 0;border-bottom:1px solid #f0ece5;color:#555}
  .info-row:last-child{border-bottom:none}
  .info-val{font-weight:600;color:#111}
  .footer{background:#F7F4EF;padding:14px 28px;font-size:11.5px;color:#999;text-align:center;border-top:1px solid #E8E2D9}
</style></head>
<body>
<div class="wrap">
  <div class="header"><div class="logo">HARDIK TRADERS</div></div>
  <div class="body">
    <h2>Thank You, ${enquiry.name}!</h2>
    <p>We have received your enquiry and our team will contact you within <strong>24 hours</strong> during business hours.</p>
    <div class="highlight">📋 Your requirement has been noted:<br><em style="color:#C8102E">"${enquiry.message.substring(0, 120)}${enquiry.message.length > 120 ? '…' : ''}"</em></div>
    <p style="font-weight:700;font-size:13px;color:#111;margin-bottom:8px">Business Hours</p>
    <div class="info-row"><span>Monday – Saturday</span><span class="info-val">9:00 AM – 7:00 PM</span></div>
    <div class="info-row"><span>Sunday</span><span class="info-val" style="color:#C8102E">Closed</span></div>
    <p style="margin-top:18px">You can also reach us directly:<br>
      📞 <strong>+91 94162 15742</strong> / <strong>+91 89506 46800</strong><br>
      💬 WhatsApp: <a href="https://wa.me/919416215742" style="color:#C8102E">+91 94162 15742</a>
    </p>
  </div>
  <div class="footer">Hardik Traders · SH.NO.1740/4, Near SBI Bank, Circular Road, Rewari, Haryana – 123401</div>
</div>
</body></html>`;

  await transporter.sendMail({
    from: `"Hardik Traders" <${process.env.EMAIL_USER}>`,
    to: enquiry.email,
    subject: 'Thank You for Contacting Hardik Traders — We\'ll Be In Touch Soon',
    html,
  });
  console.log('[Email] Customer confirmation sent.');
}

module.exports = { sendOwnerNotification, sendCustomerConfirmation };

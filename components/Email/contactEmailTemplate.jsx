export function contactEmailTemplate({ name, email, phone, subject, message }) {
  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
  </head>
  <body style="margin:0;padding:0;background-color:#060b17;font-family:'Plus Jakarta Sans', 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, sans-serif;line-height:1.6;color:#e2e8f0;">
    <table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:30px auto;background:#0e1a38;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,0.1);box-shadow:0 20px 50px rgba(0,0,0,0.5);">
      
      <!-- Brand Header -->
      <tr>
        <td style="background:linear-gradient(135deg, #0b132b 0%, #172a5a 100%);padding:36px 40px;border-bottom:1px solid rgba(255,255,255,0.08);">
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td>
                <img
                  src="https://5s4crdleaswcfwbr.public.blob.vercel-storage.com/Logo/Adesa-energy-logo.jpg"
                  alt="Adesa Energy Logo"
                  width="130"
                  style="display:block;margin-bottom:12px;border-radius:8px;"
                />
                <h1 style="margin:0;font-size:24px;font-weight:700;color:#ffffff;letter-spacing:-0.5px;">
                  Adesa Energy
                </h1>
                <p style="margin:4px 0 0;font-size:12px;color:#94a3b8;text-transform:uppercase;letter-spacing:1.5px;font-weight:600;">
                  A subsidiary of Adesa HQ
                </p>
              </td>
              <td align="right" valign="top">
                <span style="display:inline-block;padding:6px 14px;background:rgba(243,118,33,0.15);border:1px solid rgba(243,118,33,0.4);border-radius:9999px;color:#f37621;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">
                  Contact Inquiry
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body Content -->
      <tr>
        <td style="padding:36px 40px;">
          <h2 style="margin:0 0 8px;font-size:20px;font-weight:700;color:#ffffff;">
            New Contact Form Message
          </h2>
          <p style="margin:0 0 24px;font-size:14px;color:#94a3b8;">
            A visitor just submitted an inquiry through the Adesa Energy contact page.
          </p>

          <!-- Contact Details Card -->
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#081126;border-radius:14px;border:1px solid rgba(255,255,255,0.06);margin-bottom:24px;font-size:14px;">
            <tr>
              <td style="padding:14px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);width:32%;">Full Name</td>
              <td style="padding:14px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${name}</td>
            </tr>
            <tr>
              <td style="padding:14px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Email Address</td>
              <td style="padding:14px 20px;color:#38bdf8;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">
                <a href="mailto:${email}" style="color:#38bdf8;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Phone Number</td>
              <td style="padding:14px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">
                ${phone ? `<a href="tel:${phone}" style="color:#f8fafc;text-decoration:none;">${phone}</a>` : '<span style="color:#64748b;">Not provided</span>'}
              </td>
            </tr>
            <tr>
              <td style="padding:14px 20px;color:#94a3b8;font-weight:500;">Subject</td>
              <td style="padding:14px 20px;color:#f37621;font-weight:600;">${subject}</td>
            </tr>
          </table>

          <!-- Message Box -->
          <div style="background:#081126;border-radius:14px;border-left:4px solid #f37621;border-top:1px solid rgba(255,255,255,0.06);border-right:1px solid rgba(255,255,255,0.06);border-bottom:1px solid rgba(255,255,255,0.06);padding:20px 24px;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;color:#f37621;text-transform:uppercase;letter-spacing:1px;">
              Message Content
            </p>
            <p style="margin:0;font-size:14px;line-height:1.7;color:#e2e8f0;white-space:pre-wrap;">${message}</p>
          </div>

          <!-- Quick Action -->
          <div style="margin-top:28px;text-align:center;">
            <a href="mailto:${email}?subject=Re:%20${encodeURIComponent(subject)}" style="display:inline-block;background:linear-gradient(135deg, #f37621 0%, #f59e0b 100%);color:#ffffff;text-decoration:none;padding:12px 28px;border-radius:10px;font-weight:600;font-size:14px;">
              Reply Directly to ${name}
            </a>
          </div>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#050914;padding:24px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0;font-size:12px;color:#64748b;">
            © ${new Date().getFullYear()} Adesa Energy — Powering Progress, Fueling Tomorrow.
          </p>
          <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;">
            2 Isheri road, Ojudu-Berger, Lagos &nbsp;•&nbsp; Mon-Fri, 9am-5pm &nbsp;•&nbsp; 
            <a href="https://www.adesaenergy.com" style="color:#f37621;text-decoration:none;">adesaenergy.com</a>
          </p>
        </td>
      </tr>

    </table>
  </body>
  </html>
  `;
}

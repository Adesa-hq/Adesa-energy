export function convertEmailTemplate({
  firstName,
  lastName,
  phone,
  email,
  vehicleType,
  location,
  vehicleYear,
  numberOfVehicles,
  referralSource,
  interestType,
  profileType,
}) {
  const fullName = `${firstName || ""} ${lastName || ""}`.trim() || "Valued Client";

  return `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New CNG Conversion Booking & Request</title>
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
                  CNG Conversion Department
                </p>
              </td>
              <td align="right" valign="top">
                <span style="display:inline-block;padding:6px 14px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.4);border-radius:9999px;color:#34d399;font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px;">
                  Convert to CNG
                </span>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Body Content -->
      <tr>
        <td style="padding:36px 40px;">
          <div style="background:rgba(243,118,33,0.1);border:1px solid rgba(243,118,33,0.3);border-radius:12px;padding:16px 20px;margin-bottom:28px;">
            <p style="margin:0;font-size:15px;font-weight:600;color:#f37621;">
              🚗 New Conversion Request Received
            </p>
            <p style="margin:4px 0 0;font-size:13px;color:#cbd5e1;">
              <strong>${fullName}</strong> has submitted a request to convert vehicle(s) to Compressed Natural Gas.
            </p>
          </div>

          <!-- Customer Info -->
          <h3 style="margin:0 0 12px;font-size:15px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.5px;">
            Customer & Profile Details
          </h3>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#081126;border-radius:14px;border:1px solid rgba(255,255,255,0.06);margin-bottom:24px;font-size:14px;">
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);width:36%;">Full Name</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${fullName}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Phone Number</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">
                <a href="tel:${phone}" style="color:#f37621;text-decoration:none;font-weight:700;">${phone}</a>
              </td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Email</td>
              <td style="padding:12px 20px;color:#38bdf8;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">
                <a href="mailto:${email}" style="color:#38bdf8;text-decoration:none;">${email}</a>
              </td>
            </tr>` : ""}
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Profile Type</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${profileType || "Individual"}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;">Interest Category</td>
              <td style="padding:12px 20px;color:#34d399;font-weight:600;">${interestType || "Convert Now"}</td>
            </tr>
          </table>

          <!-- Vehicle Specs -->
          <h3 style="margin:0 0 12px;font-size:15px;font-weight:700;color:#ffffff;text-transform:uppercase;letter-spacing:0.5px;">
            Vehicle & Conversion Specifications
          </h3>
          <table width="100%" cellpadding="0" cellspacing="0" style="background:#081126;border-radius:14px;border:1px solid rgba(255,255,255,0.06);margin-bottom:28px;font-size:14px;">
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);width:36%;">Vehicle Type</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${vehicleType}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Vehicle Year</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${vehicleYear || "N/A"}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Number of Vehicles</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${numberOfVehicles || 1} unit(s)</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;border-bottom:1px solid rgba(255,255,255,0.05);">Preferred Centre / Location</td>
              <td style="padding:12px 20px;color:#38bdf8;font-weight:600;border-bottom:1px solid rgba(255,255,255,0.05);">${location}</td>
            </tr>
            <tr>
              <td style="padding:12px 20px;color:#94a3b8;font-weight:500;">Heard About Us Via</td>
              <td style="padding:12px 20px;color:#f8fafc;font-weight:600;">${referralSource || "Direct"}</td>
            </tr>
          </table>

          <!-- Actions -->
          <table width="100%" cellpadding="0" cellspacing="0">
            <tr>
              <td align="center">
                <a href="tel:${phone}" style="display:inline-block;background:linear-gradient(135deg, #f37621 0%, #f59e0b 100%);color:#ffffff;text-decoration:none;padding:14px 32px;border-radius:12px;font-weight:700;font-size:14px;box-shadow:0 10px 25px rgba(243,118,33,0.3);">
                  📞 Call Client to Schedule Conversion
                </a>
              </td>
            </tr>
          </table>
        </td>
      </tr>

      <!-- Footer -->
      <tr>
        <td style="background:#050914;padding:24px 40px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);">
          <p style="margin:0;font-size:12px;color:#64748b;">
            © ${new Date().getFullYear()} Adesa Energy — Powering Progress, Fueling Tomorrow.
          </p>
          <p style="margin:6px 0 0;font-size:12px;color:#94a3b8;">
            Operational Centres: Mile 2 Oke (Lagos) • Sango (Ilorin) • Kubwa (Abuja) &nbsp;•&nbsp; Mon-Fri, 9am-5pm
          </p>
        </td>
      </tr>

    </table>
  </body>
  </html>
  `;
}

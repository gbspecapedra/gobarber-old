export default {
  host: process.env.MAIL_HOST, // smtp
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
  default: {
    from: 'GoBarber Team <noreply@gobarber.com>',
  },
};

/**
 * Amazon SES
 * Mailgun
 * Sparkpost
 * Mandril(Mailchimp)
 *
 * Mailtrap(DEV) -- apenas em ambiente de dev, não funciona em produção
 */

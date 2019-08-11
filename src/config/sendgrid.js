const SendGrid = require('sendgrid');

class SendgridService {
  constructor() {
    this.sendGrid = SendGrid(process.env.SENDGRID_API_KEY);
  }
  createRequest(request) {
    return this.sendGrid.emptyRequest({
      method: 'POST',
      path: '/v3/mail/send',
      body: {
        personalizations: [
          {
            to: [{ email: request.to }],
            subject: request.subject,
          },
        ],
        from: { email: request.from },
        content: [
          {
            type: 'text/plain',
            value: request.content,
          },
        ],
      },
    });
  }

  send(emailRequest) {
    const request = this.sendGrid.emptyRequest(
      this.createRequest(emailRequest),
    );
    return this.sendGrid.API(request);
  }
}

module.exports = new SendgridService(process.env.SENDGRID_API_KEY);

const SendGrid = require('sendgrid');
const sendGrid = SendGrid(process.env.SENDGRID_API_KEY);
let SendgridService = {};

SendgridService.createRequest = request => {
  return sendGrid.emptyRequest({
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
};

SendgridService.send = emailRequest => {
  const request = sendGrid.emptyRequest(
    SendgridService.createRequest(emailRequest),
  );
  return sendGrid.API(request);
};

module.exports = SendgridService;

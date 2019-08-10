'use strict';

import * as SendGrid from 'sendgrid';
import { env } from './env';

class SendgridService {
  constructor() {
    this.sendGrid = SendGrid(sendgridApiKey);
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

export const sendgridService = new SendgridService(env.SENDGRID_API_KEY);

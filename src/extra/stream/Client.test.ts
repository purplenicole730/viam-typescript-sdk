// @vitest-environment happy-dom

import { describe, expect, test } from 'vitest';
import Client from '../../Client';
import { StreamClient } from './Client';
import { events } from '../../events';

describe('StreamClient', () => {
  test('webrtc track will cause the client to emit an event', () =>
    new Promise((done) => {
      const host = 'fakeServiceHost';
      const client = new Client(host);
      const streamClient = new StreamClient(client);

      streamClient.on('track', (data) => {
        expect(data.mock).eq(true);
        done(undefined);
      });

      events.emit('track', { mock: true });
    }));
});
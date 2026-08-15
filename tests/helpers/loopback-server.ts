import { createServer, type IncomingMessage, type ServerResponse } from 'node:http';
import { z } from 'zod';

const ServerAddressSchema = z.object({ port: z.number() });

export async function withLoopbackServer(
  respond: (request: IncomingMessage, response: ServerResponse) => void,
  run: (origin: string) => Promise<void>,
): Promise<void> {
  const server = createServer(respond);
  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const origin = `http://127.0.0.1:${ServerAddressSchema.parse(server.address()).port}`;
  try {
    await run(origin);
  } finally {
    const closed = new Promise<void>((resolve, reject) =>
      server.close((error) => (error ? reject(error) : resolve())),
    );
    server.closeAllConnections();
    await closed;
  }
}

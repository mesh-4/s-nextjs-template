import { IncomingMessage, ServerResponse, createServer } from "http"
import { NextApiHandler } from "next"
import request from "supertest"
// in nextjs: packages/next/server/api-utils/node.ts
import { apiResolver } from "next/dist/server/api-utils/node"
import { __ApiPreviewProps } from "next/dist/server/api-utils"

// no seed needed
export const testClient = (
  handler: NextApiHandler,
  query?: Record<string, unknown>
): request.SuperTest<request.Test> => {
  return request(
    createServer(async (req: IncomingMessage, res: ServerResponse) => {
      return apiResolver(req, res, query, handler, {} as __ApiPreviewProps, false)
    })
  )
}

/**
 * run in afterAll, once per describe
 * used in integration tests only, not in Cypress

import prisma from '@/utils/prisma';
const { SeedSingleton } = require('../prisma/seed.js');

export const teardown = async (): Promise<void> => {
  await SeedSingleton.getInstance(prisma).handledDeleteAllTables();
  await prisma.$disconnect();
};

 */

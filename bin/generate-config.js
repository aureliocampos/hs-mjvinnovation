#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const portalId = process.env.HUBSPOT_PORTAL_ID;
const apiKey = process.env.HUBSPOT_API_KEY;

const portalConfig = {
  name: 'MJVBR',
  portalId,
  apiKey,
};

const config = {
  defaultPortal: 'MJVBR',
  portals: [portalConfig],
};

fs.writeFileSync(
  path.join(process.cwd(), 'hubspot.config.yml'),
  yaml.safeDump(config)
);
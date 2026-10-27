import { DocumentBuilder } from '@nestjs/swagger';

const description = `
## Overview
REST API for the **Car Dealership CRM** — leads, vehicles, customers, sales/bookings and reporting.

- **Base URL (local):** \`http://localhost:3001/api\`
- **Content type:** \`application/json\`
- **Interactive docs:** \`/docs\` · **Raw spec:** \`/docs-json\`

## Authentication
Most endpoints require a JWT **Bearer** token.

1. \`POST /auth/login\` with your credentials.
2. Copy \`data.token\` from the response.
3. Click **Authorize** (top right) and paste the token, **or** send the header:
   \`Authorization: Bearer <token>\`

Default demo accounts:
| Email | Password | Role |
|---|---|---|
| admin@carcrm.com | Password123! | ADMIN |
| soratha@carcrm.com | Password123! | SALES_MANAGER |

## Response envelope
Every successful response is wrapped:
\`\`\`json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": { },
  "timestamp": "2026-10-27T14:00:00.000Z"
}
\`\`\`

## Pagination
List endpoints accept query params: \`page\` (default 1), \`limit\` (default 10, max 100),
\`search\`, \`sortBy\`, \`sortOrder\` (\`ASC\`/\`DESC\`). The \`data\` object is:
\`\`\`json
{ "items": [], "total": 0, "page": 1, "limit": 10, "totalPages": 0, "hasNextPage": false, "hasPrevPage": false }
\`\`\`

## Errors
Failures return a consistent shape:
\`\`\`json
{ "success": false, "statusCode": 400, "message": "Validation failed", "error": "Bad Request", "path": "/api/leads", "timestamp": "..." }
\`\`\`
Common codes: **400** validation · **401** missing/invalid token · **403** insufficient role · **404** not found.

## Roles
\`ADMIN\`, \`SALES_MANAGER\`, \`TEAM_LEADER\`, \`SALES_EXECUTIVE\`.
Reports and destructive operations (delete) require **ADMIN** or **SALES_MANAGER**.
`;

export function buildSwaggerConfig() {
  return new DocumentBuilder()
    .setTitle('Car CRM API')
    .setDescription(description)
    .setVersion('1.0.0')
    .setContact('Car CRM Engineering', 'https://carcrm.local', 'dev@carcrm.com')
    .setLicense('MIT', 'https://opensource.org/licenses/MIT')
    .addServer('http://localhost:3001', 'Local')
    .addServer('https://api.carcrm.example', 'Production')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Paste the JWT from POST /auth/login',
      },
      'bearer',
    )
    .addTag('Health', 'Service liveness and status')
    .addTag('Authentication', 'Login, register and current profile')
    .addTag('Leads', 'CRM leads, pipeline stages and assignment')
    .addTag('Vehicles', 'Vehicle inventory, stock and VIN lookup')
    .addTag('Customers', 'Customer profiles and contact details')
    .addTag('Sales & Bookings', 'Quotations, bookings and sales contracts')
    .addTag('Reports & Analytics', 'KPIs, sales performance and dashboards')
    .build();
}

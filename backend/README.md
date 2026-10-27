# Car CRM API

NestJS REST API for the Car Dealership CRM — leads, vehicles, customers, sales/bookings and reporting.

## API documentation

| Resource | Where |
| --- | --- |
| Interactive Swagger UI | `http://localhost:3001/docs` |
| Raw OpenAPI spec (live) | `http://localhost:3001/docs-json` |
| Raw OpenAPI spec (file) | `docs/openapi.json` |
| Regenerate the spec file | `npm run swagger:generate` |

**Postman / Insomnia:** import `docs/openapi.json` (or the live `/docs-json` URL) to get every endpoint, request body and schema pre-filled.

## Getting started

```bash
npm install
cp .env.example .env
npm run start:dev
```

Server: `http://localhost:3001/api` · Swagger: `http://localhost:3001/docs`

## Environment variables

| Variable | Default | Description |
| --- | --- | --- |
| `PORT` | `3001` | HTTP port |
| `API_PREFIX` | `api` | Global route prefix |
| `CORS_ORIGIN` | `*` | Comma-separated allowlist, or `*` |
| `JWT_SECRET` | dev value | **Set a strong secret in production** |
| `JWT_EXPIRES_IN` | `7d` | Token lifetime |
| `DATABASE_URL` | local Postgres | Reserved for the persistence layer |

## Authentication

Most endpoints require a JWT. Get one from `POST /api/auth/login`, then send
`Authorization: Bearer <token>` (or use **Authorize** in Swagger).

Demo accounts:

| Email | Password | Role |
| --- | --- | --- |
| `admin@carcrm.com` | `Password123!` | `ADMIN` |
| `soratha@carcrm.com` | `Password123!` | `SALES_MANAGER` |

Roles: `ADMIN`, `SALES_MANAGER`, `TEAM_LEADER`, `SALES_EXECUTIVE`.
Reports and destructive operations require `ADMIN` or `SALES_MANAGER`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/api/health` | Health check (public) |
| POST | `/api/auth/login` | Login → JWT (public) |
| POST | `/api/auth/register` | Register staff (public, always `SALES_EXECUTIVE`) |
| GET | `/api/auth/profile` | Current user profile |
| GET/POST | `/api/leads` | List / create leads |
| GET/PATCH/DELETE | `/api/leads/{id}` | Read / update / delete lead |
| GET/POST | `/api/vehicles` | List / create vehicles |
| GET/PATCH/DELETE | `/api/vehicles/{id}` | Read / update / delete vehicle |
| GET/POST | `/api/customers` | List / create customers |
| GET/PATCH/DELETE | `/api/customers/{id}` | Read / update / delete customer |
| GET/POST | `/api/sales` | List / create sales & bookings |
| GET | `/api/sales/{id}` | Read a sale/booking |
| GET | `/api/reports/dashboard` | Dashboard KPIs (manager+) |
| GET | `/api/reports/sales` | Sales report (manager+) |

## Response format

Successful responses are wrapped:

```json
{
  "success": true,
  "statusCode": 200,
  "message": "Operation successful",
  "data": {},
  "timestamp": "2026-10-27T14:00:00.000Z"
}
```

List endpoints paginate with `page`, `limit`, `search`, `sortBy`, `sortOrder`:

```json
{
  "data": {
    "items": [],
    "total": 0,
    "page": 1,
    "limit": 10,
    "totalPages": 0,
    "hasNextPage": false,
    "hasPrevPage": false
  }
}
```

Errors:

```json
{
  "success": false,
  "statusCode": 400,
  "message": "Validation failed",
  "error": "Bad Request",
  "path": "/api/leads",
  "timestamp": "2026-10-27T14:00:00.000Z"
}
```

Status codes: `400` validation · `401` missing/invalid token · `403` insufficient role · `404` not found · `409` conflict.

## Scripts

```bash
npm run start:dev        # watch mode
npm run build            # compile to dist/
npm run start:prod       # run the compiled app
npm run lint             # oxlint
npm test                 # unit tests
npm run swagger:generate # build + write docs/openapi.json
```

## Notes

- Data is currently served from in-memory stores; the persistence layer (Prisma/Postgres) is the next step.
- Every write endpoint validates input with `class-validator` (enums enforced, unknown fields stripped).

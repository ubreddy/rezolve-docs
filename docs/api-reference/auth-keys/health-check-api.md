---
id: health-check-api
title: Health Check (API)
sidebar_label: Health Check (API)
sidebar_position: 29
displayed_sidebar: integrationSidebar
description: API documentation for the API health check endpoint
status:
whatsPending:
---

# Health Check (API)

Health check endpoint. This endpoint provides health status for the API service, useful for monitoring and ensuring API availability.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/health`

---

## Authentication

No authentication required. This endpoint is publicly accessible for monitoring purposes.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `accept` | Specifies acceptable response formats (`application/json`) | No |

---

## Path Parameters

None.

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a GET request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/health' \
  --header 'accept: application/json'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "status": "healthy",
  "version": "1.5.2",
  "timestamp": "2025-07-10T15:00:00.000Z"
}
```

**Detailed Response:**

```json
{
  "status": "healthy",
  "version": "1.5.2",
  "environment": "production",
  "uptime": "14d 7h 0m",
  "services": {
    "database": "healthy",
    "cache": "healthy",
    "queue": "healthy"
  },
  "timestamp": "2025-07-10T15:00:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `503 Service Unavailable` | Service unhealthy | API service is not available |

**Example Error Response:**

```json
{
  "status": "unhealthy",
  "version": "1.5.2",
  "services": {
    "database": "unhealthy",
    "cache": "healthy",
    "queue": "healthy"
  },
  "timestamp": "2025-07-10T15:00:00.000Z"
}
```

---

## Notes

1. **API-Level Check:** Verifies API layer health specifically.

2. **Version Info:** Returns current API version for deployment verification.

3. **Service Dependencies:** May include status of dependent services.

4. **No Auth Required:** Publicly accessible for monitoring tools.

5. **Environment Info:** May include environment identifier (dev, staging, production).

6. **Related Endpoints:**
    - `GET /health` — Default root health check
    - `GET /api/v1/admin/health` — Detailed admin health check (requires auth)

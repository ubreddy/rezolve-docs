---
id: health-check-default
title: Health Check (Default)
sidebar_label: Health Check (Default)
sidebar_position: 28
displayed_sidebar: integrationSidebar
description: API documentation for the default health check endpoint
status:
whatsPending:
---

# Health Check (Default)

Default health check endpoint. This is a simple health check endpoint at the root level for basic service availability verification.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/health`

---

## Authentication

No authentication required. This endpoint is publicly accessible for load balancer and monitoring integration.

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
  --url '{{base_url}}/health' \
  --header 'accept: application/json'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "status": "healthy",
  "timestamp": "2025-07-10T14:55:00.000Z"
}
```

**Alternative Response Format:**

```json
{
  "status": "ok",
  "uptime": "14d 6h 55m"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `503 Service Unavailable` | Service unhealthy | Service is not available |

**Example Error Response:**

```json
{
  "status": "unhealthy",
  "timestamp": "2025-07-10T14:55:00.000Z"
}
```

---

## Notes

1. **Load Balancer:** Use this endpoint for load balancer health checks.

2. **No Auth Required:** Publicly accessible without authentication.

3. **Minimal Response:** Returns minimal data for fast response times.

4. **HTTP Status:** 200 indicates healthy; 503 indicates unhealthy.

5. **Monitoring:** Integrate with uptime monitoring services.

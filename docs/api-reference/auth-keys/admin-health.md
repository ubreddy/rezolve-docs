---
id: admin-health
title: Admin Health Check
sidebar_label: Admin Health Check
sidebar_position: 18
displayed_sidebar: integrationSidebar
description: API documentation for administrative health check endpoint
status:
whatsPending:
---

# Admin Health Check

Administrative health check endpoint. This endpoint returns the current health status of the API service, useful for monitoring, load balancers, and ensuring service availability.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/admin/health`

---

## Authentication

This endpoint may be accessible without authentication for basic health checks, or may require **Bearer Token** authentication depending on configuration.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | No |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | No |

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
  --url '{{base_url}}/api/v1/admin/health' \
  --header 'accept: application/json'
```

**With Authentication:**

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/admin/health' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Service is healthy",
  "data": {
    "status": "healthy",
    "version": "1.5.2",
    "uptime": "14d 6h 32m",
    "timestamp": "2025-07-10T14:05:00.000Z",
    "services": {
      "database": "healthy",
      "cache": "healthy",
      "queue": "healthy",
      "storage": "healthy"
    },
    "metrics": {
      "requestsPerMinute": 1250,
      "averageResponseTime": "45ms",
      "errorRate": "0.02%"
    }
  },
  "timestamp": "2025-07-10T14:05:00.000Z"
}
```

**Minimal Response (Basic Health Check):**

```json
{
  "status": "healthy",
  "timestamp": "2025-07-10T14:05:00.000Z"
}
```

---

## Degraded Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Service is degraded",
  "data": {
    "status": "degraded",
    "version": "1.5.2",
    "uptime": "14d 6h 32m",
    "timestamp": "2025-07-10T14:05:00.000Z",
    "services": {
      "database": "healthy",
      "cache": "degraded",
      "queue": "healthy",
      "storage": "healthy"
    },
    "issues": [
      {
        "service": "cache",
        "message": "High latency detected",
        "since": "2025-07-10T13:45:00.000Z"
      }
    ]
  },
  "timestamp": "2025-07-10T14:05:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `503 Service Unavailable` | Service unhealthy | One or more critical services are down |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "message": "Service is unhealthy",
  "data": {
    "status": "unhealthy",
    "timestamp": "2025-07-10T14:05:00.000Z",
    "services": {
      "database": "unhealthy",
      "cache": "healthy",
      "queue": "healthy",
      "storage": "healthy"
    },
    "issues": [
      {
        "service": "database",
        "message": "Connection refused",
        "since": "2025-07-10T14:00:00.000Z"
      }
    ]
  },
  "timestamp": "2025-07-10T14:05:00.000Z"
}
```

---

## Health Status Values

| Status | Description |
|--------|-------------|
| `healthy` | All services operating normally |
| `degraded` | Service operational but with reduced performance or partial functionality |
| `unhealthy` | Critical services are down; service may be unavailable |

---

## Notes

1. **Load Balancer Integration:** Use this endpoint for load balancer health checks to ensure traffic is routed to healthy instances.

2. **Monitoring:** Integrate with monitoring tools (Prometheus, Datadog, etc.) to track service health over time.

3. **No Authentication Required:** Basic health checks typically don't require authentication to allow infrastructure monitoring.

4. **Response Codes:** A `200` response indicates the service is reachable. Check the `status` field for actual health state.

5. **Detailed vs Basic:** Authenticated requests may return more detailed health information including metrics and service breakdowns.

6. **Uptime Tracking:** The `uptime` field shows how long the service has been running since last restart.

7. **Version Information:** The `version` field helps identify which version is deployed.

8. **Related Endpoints:**
    - `GET /api/v1/admin/info` — Get service information
    - `GET /api/v1/admin/metrics` — Get detailed metrics (if available)

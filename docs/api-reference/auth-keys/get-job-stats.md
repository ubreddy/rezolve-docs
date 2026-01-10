---
id: get-job-stats
title: Get Job Statistics
sidebar_label: Get Job Statistics
sidebar_position: 27
displayed_sidebar: integrationSidebar
description: API documentation for retrieving job queue statistics
status:
whatsPending:
draft: true
---

# Get Job Statistics

Get job queue statistics. This endpoint retrieves statistics and status information for a specific background job, including queue depth, processing times, and recent execution history.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/admin/jobs/{jobName}/stats`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires admin-level permissions.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `jobName` | string | The name of the job | Yes |

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
  --url '{{base_url}}/api/v1/admin/jobs/tokenExpiry/stats' \
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
  "message": "Job statistics retrieved successfully",
  "data": {
    "jobName": "tokenExpiry",
    "status": "idle",
    "queue": {
      "pending": 0,
      "processing": 0,
      "failed": 2,
      "completed": 1250
    },
    "performance": {
      "averageExecutionTime": "45s",
      "lastExecutionTime": "38s",
      "successRate": "99.8%"
    },
    "schedule": {
      "cron": "0 */6 * * *",
      "nextRun": "2025-07-10T18:00:00.000Z",
      "lastRun": "2025-07-10T12:00:00.000Z"
    },
    "recentExecutions": [
      {
        "id": "exec-001",
        "status": "completed",
        "startedAt": "2025-07-10T12:00:00.000Z",
        "completedAt": "2025-07-10T12:00:38.000Z",
        "itemsProcessed": 150
      },
      {
        "id": "exec-002",
        "status": "completed",
        "startedAt": "2025-07-10T06:00:00.000Z",
        "completedAt": "2025-07-10T06:00:42.000Z",
        "itemsProcessed": 128
      }
    ],
    "generatedAt": "2025-07-10T14:50:00.000Z"
  },
  "timestamp": "2025-07-10T14:50:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid job name | The specified job name is not recognized |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view job stats |
| `404 Not Found` | Job not found | No job exists with the specified name |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Monitoring:** Use this endpoint to monitor job health and performance.

2. **Queue Status:** The `queue` object shows current job queue state.

3. **Performance Metrics:** Track execution times and success rates.

4. **Schedule Info:** View cron schedule and next/last run times.

5. **Recent History:** See recent execution details for troubleshooting.

6. **Required Roles:** Requires `system_admin` or `super_admin` role.

---
id: trigger-job
title: Trigger Background Job
sidebar_label: Trigger Background Job
sidebar_position: 26
displayed_sidebar: integrationSidebar
description: API documentation for triggering a background job manually
status:
whatsPending:
---

# Trigger Background Job

Trigger a background job manually. This endpoint allows administrators to manually trigger background jobs that normally run on a schedule, such as token expiry cleanup, data synchronization, or report generation.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v1/admin/jobs/trigger`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header. Requires admin-level permissions.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | No |

---

## Path Parameters

None.

---

## Query Parameters

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `jobName` | string | The name of the job to trigger | Yes |

---

## Request Body Example

```json
{
  "jobName": "tokenExpiry"
}
```

**Other Job Examples:**

```json
{
  "jobName": "dataSync"
}
```

```json
{
  "jobName": "reportGeneration"
}
```

```json
{
  "jobName": "cleanupExpiredSessions"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v1/admin/jobs/trigger' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "jobName": "tokenExpiry"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Job triggered successfully",
  "data": {
    "jobId": "job-550e8400-e29b-41d4-a716-446655440001",
    "jobName": "tokenExpiry",
    "status": "queued",
    "triggeredAt": "2025-07-10T14:45:00.000Z",
    "triggeredBy": {
      "id": "1876278a-3634-4833-b73e-1536d806e117",
      "name": "Deepak purohit",
      "email": "deepak.purohit@rezolve.ai"
    },
    "estimatedStartTime": "2025-07-10T14:45:05.000Z",
    "priority": "normal"
  },
  "timestamp": "2025-07-10T14:45:00.000Z"
}
```

---

## Available Jobs

| Job Name | Description |
|----------|-------------|
| `tokenExpiry` | Clean up expired tokens |
| `dataSync` | Synchronize data across services |
| `reportGeneration` | Generate scheduled reports |
| `cleanupExpiredSessions` | Remove expired user sessions |
| `auditLogArchive` | Archive old audit logs |
| `credentialRotationCheck` | Check for credentials needing rotation |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid job name | The specified job name is not recognized |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to trigger jobs |
| `409 Conflict` | Job already running | The specified job is already in progress |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

---

## Notes

1. **Manual Override:** Use this to manually trigger jobs outside their scheduled time.

2. **Job Queue:** Triggered jobs are added to the queue and processed in order.

3. **Idempotency:** If a job is already running, a 409 error is returned.

4. **Monitoring:** Use the job stats endpoint to monitor job progress.

5. **Required Roles:** Requires `system_admin` or `super_admin` role.

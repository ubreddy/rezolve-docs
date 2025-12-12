---
id: get-ticket-notification-count
title: Get Ticket Notification Count
sidebar_label: Get Ticket Notification Count
sidebar_position: 8
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticket notification counts
status:
whatsPending:
---

# Get Ticket Notification Count

Retrieves the count of unread notifications related to tickets for the authenticated user. This endpoint is typically used to display notification badges in the UI header, indicating pending ticket-related alerts such as new assignments, status changes, comments, mentions, or SLA warnings.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/notification/count`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header and contains user identity, realm access roles, and team membership information.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | Yes |

---

## Path Parameters

None.

---

## Query Parameters

None.

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/ticket/notification/count' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Notification count retrieved successfully",
  "data": {
    "total": 24,
    "unread": 12,
    "byType": {
      "assignment": 3,
      "statusChange": 4,
      "comment": 2,
      "mention": 1,
      "slaWarning": 2,
      "slaBreach": 0,
      "approval": 0,
      "escalation": 0
    },
    "byPriority": {
      "critical": 2,
      "high": 5,
      "medium": 3,
      "low": 2
    },
    "lastUpdated": "2025-07-10T12:34:56.789Z"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

### Minimal Response Example

For simpler implementations, the response may return just the count:

```json
{
  "success": true,
  "data": {
    "count": 12
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request | Occurs when required headers are malformed |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access notifications |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired authentication token",
    "details": "The provided JWT token has expired. Please re-authenticate."
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **User-Specific:** This endpoint returns notification counts specific to the authenticated user based on the JWT token. Each user sees only their own notification counts.

2. **Notification Types:** The `byType` breakdown may include:
   - `assignment` — Ticket assigned to user
   - `statusChange` — Status changed on watched/owned tickets
   - `comment` — New comment on watched/owned tickets
   - `mention` — User mentioned in a comment (@mention)
   - `slaWarning` — SLA approaching breach threshold
   - `slaBreach` — SLA has been breached
   - `approval` — Approval request pending action
   - `escalation` — Ticket escalated to user

3. **Priority Breakdown:** The `byPriority` object shows unread notifications grouped by the ticket's priority level.

4. **Polling Frequency:** This is a lightweight endpoint designed for frequent polling. Recommended polling interval is 30-60 seconds. For real-time updates, consider using the SSE endpoint instead.

5. **Badge Display:** Use the `unread` count (or `total` depending on UX requirements) to display notification badges in the UI header.

6. **Count vs. List:** This endpoint returns only counts. To retrieve the actual notification list, use the `/ticket/notification/list` endpoint.

7. **Mark as Read:** Notification counts decrease when notifications are marked as read via the `/ticket/notification/read` endpoint.

8. **Last Updated:** The `lastUpdated` timestamp indicates when the notification state was last modified, useful for cache invalidation.

9. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Notification counts are isolated per tenant.

10. **Performance:** This endpoint is optimized for low latency and minimal payload size to support frequent polling without impacting system performance.

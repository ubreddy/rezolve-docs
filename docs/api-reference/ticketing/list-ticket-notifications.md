---
id: list-ticket-notifications
title: List Ticket Notifications
sidebar_label: List Ticket Notifications
sidebar_position: 16
displayed_sidebar: integrationSidebar
description: API documentation for retrieving paginated ticket notifications
status:
whatsPending:
---

# List Ticket Notifications

Retrieves a paginated list of ticket notifications for the authenticated user. This endpoint returns notification history with filtering, sorting, and search capabilities. Used to populate the notification dropdown/panel in the UI.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/notifications`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `content-type` | Must be `application/json` | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | Yes |
| `issupportrequest` | Boolean flag indicating if this is a support-related request | No |

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
| `search` | string | Free-text search query across notification content | No |
| `top` | integer | Maximum number of notifications to return (default: 100) | No |
| `offset` | integer | Number of records to skip for pagination (default: 0) | No |
| `sort` | string | Field to sort by (e.g., `notified_at`, `type`, `priority`) | No |
| `searchOrder` | string | Sort direction: `ASC` or `DESC` | No |
| `filter` | array | Array of filter conditions | No |

---

## Request Body Example

```json
{
  "search": "",
  "top": 100,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": []
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v2/ticketing/ticket/notifications' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}' \
  --header 'issupportrequest: false' \
  --data '{
    "search": "",
    "top": 100,
    "offset": 0,
    "sort": "notified_at",
    "searchOrder": "DESC",
    "filter": []
  }'
```

---

## Advanced Filtering Examples

### Filter by Notification Type

```json
{
  "search": "",
  "top": 50,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": [
    {
      "field": "type",
      "op": "IN",
      "value": ["assignment", "mention", "slaWarning"]
    }
  ]
}
```

### Filter by Read Status

```json
{
  "search": "",
  "top": 50,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": [
    {
      "field": "read",
      "op": "EQ",
      "value": false
    }
  ]
}
```

### Filter by Priority

```json
{
  "search": "",
  "top": 50,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": [
    {
      "field": "priority",
      "op": "IN",
      "value": ["high", "urgent"]
    }
  ]
}
```

### Filter by Date Range

```json
{
  "search": "",
  "top": 50,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": [
    {
      "field": "notified_at",
      "op": "GE",
      "value": "2025-07-01T00:00:00.000Z"
    },
    {
      "field": "notified_at",
      "op": "LE",
      "value": "2025-07-10T23:59:59.999Z"
    }
  ]
}
```

### Search by Ticket Number

```json
{
  "search": "INC-2024-001234",
  "top": 50,
  "offset": 0,
  "sort": "notified_at",
  "searchOrder": "DESC",
  "filter": []
}
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Notifications retrieved successfully",
  "data": {
    "notifications": [
      {
        "id": "notif-550e8400-e29b-41d4-a716-446655440001",
        "type": "assignment",
        "ticketId": "12345",
        "ticketNumber": "INC-2024-001234",
        "title": "VPN Connection Issue",
        "message": "You have been assigned ticket INC-2024-001234",
        "priority": "high",
        "category": "Network",
        "read": false,
        "notified_at": "2025-07-10T12:35:00.000Z",
        "createdAt": "2025-07-10T12:35:00.000Z",
        "actionUrl": "/tickets/12345",
        "actor": {
          "id": "user-abc-123",
          "name": "Jane Smith",
          "email": "jane.smith@company.com",
          "avatar": "https://cdn.example.com/avatars/jane.jpg"
        },
        "metadata": {
          "previousAssignee": null,
          "assignedBy": "user-abc-123"
        }
      },
      {
        "id": "notif-550e8400-e29b-41d4-a716-446655440002",
        "type": "mention",
        "ticketId": "12346",
        "ticketNumber": "INC-2024-001235",
        "title": "Email Server Down",
        "message": "Jane Smith mentioned you in a comment",
        "priority": "high",
        "category": "Email",
        "read": true,
        "notified_at": "2025-07-10T11:20:00.000Z",
        "createdAt": "2025-07-10T11:20:00.000Z",
        "actionUrl": "/tickets/12346#comment-789",
        "actor": {
          "id": "user-abc-123",
          "name": "Jane Smith",
          "email": "jane.smith@company.com",
          "avatar": "https://cdn.example.com/avatars/jane.jpg"
        },
        "metadata": {
          "commentId": "comment-789",
          "commentPreview": "@deepak.purohit can you take a look at this?"
        }
      },
      {
        "id": "notif-550e8400-e29b-41d4-a716-446655440003",
        "type": "slaWarning",
        "ticketId": "12340",
        "ticketNumber": "INC-2024-001230",
        "title": "Password Reset Request",
        "message": "SLA response time warning: 15 minutes remaining",
        "priority": "urgent",
        "category": "Access Management",
        "read": false,
        "notified_at": "2025-07-10T10:45:00.000Z",
        "createdAt": "2025-07-10T10:45:00.000Z",
        "actionUrl": "/tickets/12340",
        "actor": null,
        "metadata": {
          "slaType": "response",
          "slaTarget": "2025-07-10T11:00:00.000Z",
          "timeRemaining": 900
        }
      },
      {
        "id": "notif-550e8400-e29b-41d4-a716-446655440004",
        "type": "statusChange",
        "ticketId": "12338",
        "ticketNumber": "INC-2024-001228",
        "title": "Printer Not Working",
        "message": "Ticket status changed from In Progress to Resolved",
        "priority": "medium",
        "category": "Hardware",
        "read": true,
        "notified_at": "2025-07-10T09:30:00.000Z",
        "createdAt": "2025-07-10T09:30:00.000Z",
        "actionUrl": "/tickets/12338",
        "actor": {
          "id": "user-xyz-456",
          "name": "Bob Wilson",
          "email": "bob.wilson@company.com",
          "avatar": null
        },
        "metadata": {
          "previousStatus": "In Progress",
          "newStatus": "Resolved"
        }
      },
      {
        "id": "notif-550e8400-e29b-41d4-a716-446655440005",
        "type": "approval",
        "ticketId": "12350",
        "ticketNumber": "SR-2024-000456",
        "title": "Software License Request",
        "message": "Approval requested for Software License Request",
        "priority": "high",
        "category": "Software",
        "read": false,
        "notified_at": "2025-07-10T08:15:00.000Z",
        "createdAt": "2025-07-10T08:15:00.000Z",
        "actionUrl": "/tickets/12350/approvals/approval-123",
        "actor": {
          "id": "user-def-789",
          "name": "Alice Johnson",
          "email": "alice.johnson@company.com",
          "avatar": "https://cdn.example.com/avatars/alice.jpg"
        },
        "metadata": {
          "approvalId": "approval-123",
          "approvalType": "manager",
          "requestedBy": "user-def-789"
        }
      }
    ],
    "pagination": {
      "total": 127,
      "top": 100,
      "offset": 0,
      "hasMore": true
    },
    "summary": {
      "totalUnread": 45,
      "byType": {
        "assignment": 12,
        "mention": 8,
        "statusChange": 35,
        "comment": 22,
        "slaWarning": 15,
        "slaBreach": 3,
        "approval": 18,
        "escalation": 5,
        "resolution": 9
      },
      "byPriority": {
        "urgent": 3,
        "high": 25,
        "medium": 67,
        "low": 32
      }
    }
  },
  "timestamp": "2025-07-10T12:36:00.000Z"
}
```

---

## Notification Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique notification identifier (UUID) |
| `type` | string | Notification type (see types below) |
| `ticketId` | string | Associated ticket ID |
| `ticketNumber` | string | Formatted ticket number (e.g., INC-2024-001234) |
| `title` | string | Ticket subject/title |
| `message` | string | Human-readable notification message |
| `priority` | string | Notification priority: `low`, `medium`, `high`, `urgent` |
| `category` | string | Ticket category |
| `read` | boolean | Whether notification has been read |
| `notified_at` | string | ISO 8601 timestamp when notification was created |
| `createdAt` | string | ISO 8601 timestamp (alias for notified_at) |
| `actionUrl` | string | Deep link to relevant ticket/section |
| `actor` | object\|null | User who triggered the notification (null for system events) |
| `metadata` | object | Type-specific additional data |

---

## Notification Types

| Type | Description | Actor Present |
|------|-------------|---------------|
| `assignment` | Ticket assigned to user | Yes |
| `reassignment` | Ticket reassigned from user | Yes |
| `statusChange` | Ticket status updated | Yes |
| `comment` | New comment on watched ticket | Yes |
| `mention` | User mentioned in comment (@mention) | Yes |
| `slaWarning` | SLA breach approaching | No (system) |
| `slaBreach` | SLA has been breached | No (system) |
| `approval` | Approval requested from user | Yes |
| `approvalDecision` | Approval request resolved | Yes |
| `escalation` | Ticket escalated | Yes/No |
| `merge` | Ticket merged | Yes |
| `resolution` | Ticket resolved | Yes |
| `reopened` | Ticket reopened | Yes |
| `watchAdded` | User added as watcher | Yes |

---

## Filter Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `EQ` | Equal to | `{"field": "read", "op": "EQ", "value": false}` |
| `NE` | Not equal to | `{"field": "type", "op": "NE", "value": "comment"}` |
| `GT` | Greater than | `{"field": "notified_at", "op": "GT", "value": "2025-07-01"}` |
| `GE` | Greater than or equal | `{"field": "notified_at", "op": "GE", "value": "2025-07-01"}` |
| `LT` | Less than | `{"field": "notified_at", "op": "LT", "value": "2025-07-10"}` |
| `LE` | Less than or equal | `{"field": "notified_at", "op": "LE", "value": "2025-07-10"}` |
| `IN` | In list | `{"field": "type", "op": "IN", "value": ["assignment", "mention"]}` |
| `LIKE` | Contains (for text fields) | `{"field": "title", "op": "LIKE", "value": "VPN"}` |

---

## Sortable Fields

| Field | Description |
|-------|-------------|
| `notified_at` | Notification timestamp (default) |
| `type` | Notification type |
| `priority` | Notification priority |
| `read` | Read status |
| `ticketNumber` | Ticket number |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or invalid filter syntax |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles |
| `422 Unprocessable Entity` | Validation error | Invalid field values or filter operators |
| `429 Too Many Requests` | Rate limit exceeded | Too many requests in time window |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_FILTER",
    "message": "Invalid filter operator 'CONTAINS' for field 'type'",
    "details": "Supported operators: EQ, NE, GT, GE, LT, LE, IN, LIKE"
  },
  "timestamp": "2025-07-10T12:36:00.000Z"
}
```

---

## Notes

1. **User-Specific Results:** Returns only notifications for the authenticated user. Notifications are based on:
   - Tickets assigned to the user
   - Tickets the user is watching
   - Tickets where user is mentioned
   - Approval requests assigned to the user

2. **Default Sorting:** By default, notifications are sorted by `notified_at` in descending order (newest first).

3. **Pagination:** Use `top` and `offset` for pagination. Maximum `top` value is typically 100. Check `pagination.hasMore` to determine if more results exist.

4. **Read Status:** The `read` field indicates whether the user has viewed the notification. Use a separate endpoint to mark notifications as read.

5. **Actor Information:** The `actor` object contains details about the user who triggered the notification. System-generated notifications (SLA warnings, etc.) have `actor: null`.

6. **Metadata:** The `metadata` object contains type-specific information:
   - `statusChange`: `previousStatus`, `newStatus`
   - `slaWarning`/`slaBreach`: `slaType`, `slaTarget`, `timeRemaining`
   - `mention`: `commentId`, `commentPreview`
   - `approval`: `approvalId`, `approvalType`, `requestedBy`

7. **Action URLs:** The `actionUrl` provides a deep link to the relevant ticket or section. URLs may include anchors for specific comments (e.g., `#comment-789`).

8. **Summary Data:** The response includes aggregated counts by type and priority for UI summary displays.

9. **Real-Time Updates:** For real-time notification updates, use the SSE endpoint `/ticket/sse/notifications` instead of polling this endpoint.

10. **Related Endpoints:**
    - `GET /ticket/notification/count` — Get unread count only (lightweight)
    - `GET /ticket/sse/notifications` — Real-time notification stream
    - `PUT /ticket/notification/read` — Mark notifications as read
    - `DELETE /ticket/notification/{id}` — Delete a notification

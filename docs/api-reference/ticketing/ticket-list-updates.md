---
id: ticket-list-updates
title: Ticket List Updates (SSE)
sidebar_label: Ticket List Updates
displayed_sidebar: integrationSidebar
description: API documentation for real-time ticket updates via Server-Sent Events
status:
whatsPending:
---

# Ticket List Updates (SSE)

Establishes a Server-Sent Events (SSE) connection to receive real-time updates for tickets matching the specified filter criteria. This endpoint streams ticket changes (create, update, delete) as they occur, enabling live dashboard updates without polling.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/sse/list/updates`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header and contains user identity, realm access roles, and team membership information.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `Content-Type` | Must be `application/json` | Yes |
| `accept` | Must be `text/event-stream` for SSE connections | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `realmname` | The authentication realm name | Yes |
| `issupportrequest` | Boolean flag indicating if this is a support-related request | No |

---

## Path Parameters

None.

---

## Query Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `type` | string | Filter by type. Accepted values: `template`, `agent`, `user` | Yes |
| `module` | string | The module context. Example: `ticketing` | Yes |

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `search` | string | Search keyword to filter tickets by text content | No |
| `top` | integer | Number of records per page (used for initial snapshot) | Yes |
| `offset` | integer | Number of records to skip (used for initial snapshot) | Yes |
| `sort` | string | Field name to sort by (e.g., `updatedAt`, `createdAt`) | No |
| `searchOrder` | string | Order for search results. Values: `ASC`, `DESC` | No |
| `sortOrder` | array | Additional sort configurations | No |
| `filter` | object | Advanced filter object with logical operators | No |
| `filter.op` | string | Logical operator for combining filter conditions. Values: `AND`, `OR` | No |
| `filter.operand` | array | Array of filter condition objects | No |
| `filter.operand[].id` | string | Unique identifier for the filter condition | No |
| `filter.operand[].op` | string | Comparison operator. Values: `EQ`, `NE`, `GT`, `GE`, `LT`, `LE`, `LIKE`, `IN` | No |
| `filter.operand[].column` | string | Field name to filter on | No |
| `filter.operand[].operand` | string/array | Value(s) to compare against | No |

---

## Example Request Body

```json
{
  "search": "",
  "top": 30,
  "offset": 0,
  "sort": "updatedAt",
  "searchOrder": "DESC",
  "sortOrder": [],
  "filter": {
    "op": "AND",
    "operand": [
      {
        "id": "bc6f4312-d421-4ee7-89c4-0b7e3af7e22f",
        "op": "GE",
        "column": "createdAt",
        "operand": "2025-07-08T18:30:00.000Z"
      }
    ]
  }
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v2/ticketing/ticket/sse/list/updates?type=template&module=ticketing' \
  --header 'accept: text/event-stream' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}' \
  --header 'issupportrequest: false' \
  --data '{
    "search": "",
    "top": 30,
    "offset": 0,
    "sort": "updatedAt",
    "searchOrder": "DESC",
    "sortOrder": [],
    "filter": {
      "op": "AND",
      "operand": [
        {
          "id": "bc6f4312-d421-4ee7-89c4-0b7e3af7e22f",
          "op": "GE",
          "column": "createdAt",
          "operand": "2025-07-08T18:30:00.000Z"
        }
      ]
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`
**Content-Type:** `text/event-stream`

The response is a stream of Server-Sent Events. Each event follows the SSE format:

### Event Types

| Event | Description |
|-------|-------------|
| `connected` | Initial connection established |
| `snapshot` | Initial list of tickets matching the filter |
| `created` | A new ticket was created matching the filter |
| `updated` | An existing ticket was updated |
| `deleted` | A ticket was deleted |
| `heartbeat` | Keep-alive ping to maintain connection |
| `error` | An error occurred in the stream |

### Example Event Stream

```text
event: connected
data: {"connectionId":"conn-abc123","timestamp":"2025-07-10T12:34:56.789Z"}

event: snapshot
data: {"tickets":[{"id":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","ticketNumber":"TKT-2025-001234","subject":"Unable to access VPN","status":"open","priority":"high","updatedAt":"2025-07-10T14:22:00.000Z"}],"total":156}

event: created
data: {"id":"new-ticket-uuid","ticketNumber":"TKT-2025-001250","subject":"New laptop request","status":"open","priority":"medium","createdAt":"2025-07-10T15:30:00.000Z","updatedAt":"2025-07-10T15:30:00.000Z"}

event: updated
data: {"id":"a1b2c3d4-e5f6-7890-abcd-ef1234567890","ticketNumber":"TKT-2025-001234","subject":"Unable to access VPN","status":"in_progress","priority":"high","updatedAt":"2025-07-10T15:45:00.000Z","changes":{"status":{"from":"open","to":"in_progress"}}}

event: deleted
data: {"id":"deleted-ticket-uuid","ticketNumber":"TKT-2025-001100","deletedAt":"2025-07-10T16:00:00.000Z"}

event: heartbeat
data: {"timestamp":"2025-07-10T16:05:00.000Z"}
```

### Parsed Event Data Structure

**Connected Event:**

```json
{
  "connectionId": "conn-abc123",
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

**Snapshot Event:**

```json
{
  "tickets": [
    {
      "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
      "ticketNumber": "TKT-2025-001234",
      "subject": "Unable to access VPN",
      "description": "User is experiencing connectivity issues with the corporate VPN.",
      "status": "open",
      "priority": "high",
      "category": "Network",
      "assignee": {
        "id": "1876278a-3634-4833-b73e-1536d806e117",
        "name": "Deepak Purohit"
      },
      "requester": {
        "id": "user-uuid",
        "name": "John Doe"
      },
      "team": "operation",
      "createdAt": "2025-07-09T10:30:00.000Z",
      "updatedAt": "2025-07-10T14:22:00.000Z"
    }
  ],
  "total": 156
}
```

**Updated Event:**

```json
{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "ticketNumber": "TKT-2025-001234",
  "subject": "Unable to access VPN",
  "status": "in_progress",
  "priority": "high",
  "updatedAt": "2025-07-10T15:45:00.000Z",
  "changes": {
    "status": {
      "from": "open",
      "to": "in_progress"
    }
  }
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Occurs when required fields are missing or have invalid values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to subscribe to ticket updates |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `422 Unprocessable Entity` | Invalid filter syntax | The filter object contains invalid operators or malformed conditions |
| `429 Too Many Requests` | Rate limit exceeded | Too many concurrent SSE connections |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |
| `503 Service Unavailable` | SSE service unavailable | The real-time event service is temporarily unavailable |

**Example Error Event:**

```text
event: error
data: {"code":"TOKEN_EXPIRED","message":"Authentication token has expired","timestamp":"2025-07-10T12:34:56.789Z"}
```

---

## Client Implementation Example

### JavaScript (Browser)

```javascript
const eventSource = new EventSource(
  '{{base_url}}/api/v2/ticketing/ticket/sse/list/updates?type=template&module=ticketing',
  {
    headers: {
      'Authorization': 'Bearer {{access_token}}',
      'x-tenantid': '{{tenant_id}}',
      'realmname': '{{realm_name}}'
    }
  }
);

eventSource.addEventListener('connected', (event) => {
  const data = JSON.parse(event.data);
  console.log('Connected:', data.connectionId);
});

eventSource.addEventListener('snapshot', (event) => {
  const data = JSON.parse(event.data);
  console.log('Initial tickets:', data.tickets);
});

eventSource.addEventListener('created', (event) => {
  const ticket = JSON.parse(event.data);
  console.log('New ticket created:', ticket);
});

eventSource.addEventListener('updated', (event) => {
  const ticket = JSON.parse(event.data);
  console.log('Ticket updated:', ticket);
});

eventSource.addEventListener('deleted', (event) => {
  const data = JSON.parse(event.data);
  console.log('Ticket deleted:', data.id);
});

eventSource.addEventListener('error', (event) => {
  console.error('SSE Error:', event);
  eventSource.close();
});
```

---

## Notes

1. **SSE Protocol:** This endpoint uses Server-Sent Events (SSE) for real-time, unidirectional streaming from server to client. The connection remains open until explicitly closed.

2. **Connection Lifecycle:**
   - On connect: Receives `connected` event with connection ID
   - Initial data: Receives `snapshot` event with current tickets matching filter
   - Real-time updates: Receives `created`, `updated`, `deleted` events as changes occur
   - Keep-alive: Receives periodic `heartbeat` events (typically every 30 seconds)

3. **Reconnection:** Clients should implement automatic reconnection with exponential backoff. Most SSE client libraries handle this automatically.

4. **Filter Scope:** Only tickets matching the provided filter criteria will trigger update events. Changes to tickets outside the filter scope are not sent.

5. **Connection Limits:** Each user has a maximum number of concurrent SSE connections (typically 5-10). Exceeding this limit returns a `429 Too Many Requests` error.

6. **Token Expiration:** When the JWT token expires, the server sends an `error` event and closes the connection. Clients should reconnect with a refreshed token.

7. **Heartbeat Interval:** The server sends heartbeat events every 30 seconds to keep the connection alive and detect stale connections.

8. **Browser Compatibility:** SSE is supported in all modern browsers. For older browsers or environments without native SSE support, use a polyfill or WebSocket fallback.

9. **Timeout:** Connections may be closed after extended periods of inactivity (typically 1 hour). Implement reconnection logic in your client.

10. **CORS:** The endpoint supports cross-origin requests. The origin header is validated against allowed origins for the tenant.

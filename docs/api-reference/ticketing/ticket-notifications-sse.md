---
id: ticket-notifications-sse
title: Ticket Notifications SSE Stream
sidebar_label: Ticket Notifications SSE Stream
sidebar_position: 15
displayed_sidebar: integrationSidebar
description: API documentation for real-time ticket notifications via Server-Sent Events
status:
whatsPending:
---

# Ticket Notifications SSE Stream

Establishes a Server-Sent Events (SSE) connection to receive real-time ticket notifications for the authenticated user. This endpoint pushes notifications as they occur, enabling instant updates for ticket assignments, status changes, comments, mentions, SLA warnings, approvals, and escalations without polling.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/sse/notifications`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Must be `text/event-stream` for SSE connection | Yes |
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

Not applicable — this is a `GET` request establishing an SSE stream.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v2/ticketing/ticket/sse/notifications' \
  --header 'accept: text/event-stream' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}' \
  --no-buffer
```

---

## JavaScript Client Example

```javascript
const eventSource = new EventSource(
  `${baseUrl}/api/v2/ticketing/ticket/sse/notifications`,
  {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'x-tenantid': tenantId,
      'realmname': realmName
    }
  }
);

// Connection opened
eventSource.onopen = (event) => {
  console.log('SSE notifications connection established');
};

// Listen for notification events
eventSource.addEventListener('notification', (event) => {
  const notification = JSON.parse(event.data);
  console.log('New notification:', notification);

  // Update UI notification badge
  updateNotificationBadge(notification);

  // Show toast/popup for high-priority notifications
  if (notification.priority === 'high' || notification.priority === 'urgent') {
    showNotificationToast(notification);
  }
});

// Listen for heartbeat events
eventSource.addEventListener('heartbeat', (event) => {
  console.log('Heartbeat received:', event.data);
});

// Handle errors
eventSource.onerror = (error) => {
  console.error('SSE error:', error);
  if (eventSource.readyState === EventSource.CLOSED) {
    // Implement reconnection logic
    setTimeout(() => reconnect(), 5000);
  }
};

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  eventSource.close();
});
```

---

## SSE Event Types

### connected

Sent immediately upon successful connection.

```
event: connected
data: {"message":"Connected to notification stream","userId":"1876278a-3634-4833-b73e-1536d806e117","timestamp":"2025-07-10T12:34:56.789Z"}
```

### notification

Sent when a new notification is triggered for the user.

```
event: notification
data: {"id":"notif-550e8400-e29b-41d4-a716-446655440000","type":"assignment","ticketId":"12345","ticketNumber":"INC-2024-001234","title":"VPN Connection Issue","message":"You have been assigned ticket INC-2024-001234","priority":"high","category":"Network","createdAt":"2025-07-10T12:35:00.000Z","read":false,"actionUrl":"/tickets/12345","actor":{"id":"user-abc","name":"Jane Smith","avatar":null}}
```

### heartbeat

Periodic keep-alive signal (typically every 30 seconds).

```
event: heartbeat
data: {"timestamp":"2025-07-10T12:35:30.000Z"}
```

### error

Sent when an error occurs on the server side.

```
event: error
data: {"code":"SUBSCRIPTION_ERROR","message":"Failed to subscribe to notification channel"}
```

---

## Notification Types

| Type | Description | Typical Priority |
|------|-------------|------------------|
| `assignment` | Ticket assigned to user | high |
| `reassignment` | Ticket reassigned from user | medium |
| `statusChange` | Ticket status updated | medium |
| `comment` | New comment on watched ticket | medium |
| `mention` | User mentioned in comment (@mention) | high |
| `slaWarning` | SLA breach approaching | high |
| `slaBreach` | SLA has been breached | urgent |
| `approval` | Approval requested from user | high |
| `approvalDecision` | Approval request resolved | medium |
| `escalation` | Ticket escalated | high |
| `merge` | Ticket merged | low |
| `resolution` | Ticket resolved | medium |
| `reopened` | Ticket reopened | medium |
| `watchAdded` | User added as watcher | low |

---

## Notification Object Schema

```json
{
  "id": "string (UUID)",
  "type": "string (notification type)",
  "ticketId": "string (ticket ID)",
  "ticketNumber": "string (formatted ticket number)",
  "title": "string (ticket subject/title)",
  "message": "string (human-readable notification message)",
  "priority": "string (low|medium|high|urgent)",
  "category": "string (ticket category)",
  "createdAt": "string (ISO 8601 timestamp)",
  "read": "boolean",
  "actionUrl": "string (deep link to ticket)",
  "actor": {
    "id": "string (user ID who triggered the action)",
    "name": "string (display name)",
    "avatar": "string|null (avatar URL)"
  },
  "metadata": {
    "previousStatus": "string (for statusChange)",
    "newStatus": "string (for statusChange)",
    "slaType": "string (response|resolution for SLA events)",
    "slaTarget": "string (ISO 8601 for SLA events)",
    "commentId": "string (for comment events)",
    "approvalId": "string (for approval events)"
  }
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles for notifications |
| `429 Too Many Requests` | Connection limit exceeded | Too many concurrent SSE connections |
| `500 Internal Server Error` | Server error | Unexpected server-side error |
| `503 Service Unavailable` | Service temporarily unavailable | Notification service is down |

---

## Notes

1. **User-Specific Stream:** This endpoint provides notifications only for the authenticated user. Notifications are filtered based on:
   - Tickets assigned to the user
   - Tickets the user is watching
   - Tickets where user is mentioned
   - Approval requests assigned to the user
   - Tickets in user's queue (for agents)

2. **Connection Lifecycle:**
   - Connection established → `connected` event
   - Periodic heartbeats every 30 seconds
   - Notifications pushed as they occur
   - Connection closed on token expiration or client disconnect

3. **Token Expiration:** The SSE connection will terminate when the JWT expires. Clients must:
   - Monitor for connection close events
   - Refresh the token before expiration
   - Re-establish the SSE connection with new token

4. **Reconnection Strategy:** Implement exponential backoff for reconnection:
   ```javascript
   let reconnectDelay = 1000;
   const maxDelay = 30000;

   function reconnect() {
     setTimeout(() => {
       connectSSE();
       reconnectDelay = Math.min(reconnectDelay * 2, maxDelay);
     }, reconnectDelay);
   }
   ```

5. **Connection Limits:** The server may limit concurrent SSE connections per user (typically 3-5). Close unused connections to avoid hitting limits.

6. **Browser Compatibility:** SSE is supported in all modern browsers. For older browsers, consider using a polyfill or falling back to long-polling.

7. **Notification Deduplication:** Clients should track received notification IDs to handle potential duplicates during reconnection scenarios.

8. **Read Status:** Notifications arrive with `read: false`. Use a separate API endpoint to mark notifications as read.

9. **Notification Preferences:** The types of notifications received depend on user preferences configured via the `/user/preference` endpoint.

10. **Mobile Considerations:** For mobile apps, consider using push notifications (FCM/APNs) instead of SSE for background notifications, reserving SSE for foreground real-time updates.

11. **Difference from List Updates SSE:**
    - `/ticket/sse/list/updates` — Real-time ticket list changes (for UI refresh)
    - `/ticket/sse/notifications` — User notifications (for notification bell/badge)

12. **Related Endpoints:**
    - `GET /ticket/notification/count` — Get unread notification count
    - `GET /user/preference` — Configure notification preferences
    - `PUT /ticket/notification/read` — Mark notifications as read
    - `GET /ticket/notification/list` — Get notification history

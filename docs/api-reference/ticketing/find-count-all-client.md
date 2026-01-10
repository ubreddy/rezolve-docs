---
id: find-count-all-client
title: Find and Count All
sidebar_label: Find and Count All
sidebar_position: 5
displayed_sidebar: integrationSidebar
description: API documentation for retrieving all client mappings with count
status:
whatsPending:
---

# Find and Count All

Retrieves all client mappings along with the total count for the tenant. Client mappings define the relationships between external client systems and the ticketing module, enabling integration with third-party platforms, ITSM tools, or custom applications.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/ticketing/clientMap/findAndCountAll`

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
| `usecase` | Use case identifier for client mapping context | No |
| `if-none-match` | ETag value for conditional requests (caching) | No |

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
  --url '{{base_url}}/api/v1/ticketing/clientMap/findAndCountAll' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'usecase: {{usecase_id}}'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Client mappings retrieved successfully",
  "data": {
    "rows": [
      {
        "id": "mapping-uuid-001",
        "clientId": "client-001",
        "clientName": "ServiceNow Integration",
        "clientType": "itsm",
        "mappingType": "bidirectional",
        "sourceSystem": "internal",
        "targetSystem": "servicenow",
        "configuration": {
          "endpoint": "https://instance.service-now.com",
          "syncInterval": 300,
          "fieldMappings": [
            {
              "sourceField": "ticketNumber",
              "targetField": "number",
              "transform": null
            },
            {
              "sourceField": "subject",
              "targetField": "short_description",
              "transform": null
            },
            {
              "sourceField": "status",
              "targetField": "state",
              "transform": "statusMapping"
            }
          ]
        },
        "status": "active",
        "lastSyncAt": "2025-07-10T12:00:00.000Z",
        "syncStatus": "success",
        "createdAt": "2024-06-15T10:30:00.000Z",
        "updatedAt": "2025-07-10T12:00:00.000Z"
      },
      {
        "id": "mapping-uuid-002",
        "clientId": "client-002",
        "clientName": "Jira Service Management",
        "clientType": "itsm",
        "mappingType": "outbound",
        "sourceSystem": "internal",
        "targetSystem": "jira",
        "configuration": {
          "endpoint": "https://company.atlassian.net",
          "projectKey": "SUPPORT",
          "syncInterval": 600,
          "fieldMappings": [
            {
              "sourceField": "ticketNumber",
              "targetField": "key",
              "transform": null
            },
            {
              "sourceField": "subject",
              "targetField": "summary",
              "transform": null
            },
            {
              "sourceField": "priority",
              "targetField": "priority",
              "transform": "priorityMapping"
            }
          ]
        },
        "status": "active",
        "lastSyncAt": "2025-07-10T11:45:00.000Z",
        "syncStatus": "success",
        "createdAt": "2024-08-20T14:15:00.000Z",
        "updatedAt": "2025-07-10T11:45:00.000Z"
      },
      {
        "id": "mapping-uuid-003",
        "clientId": "client-003",
        "clientName": "Email Gateway",
        "clientType": "email",
        "mappingType": "inbound",
        "sourceSystem": "email",
        "targetSystem": "internal",
        "configuration": {
          "mailbox": "support@company.com",
          "pollInterval": 60,
          "autoCreateTicket": true,
          "defaultCategory": "General",
          "defaultPriority": "medium"
        },
        "status": "active",
        "lastSyncAt": "2025-07-10T12:30:00.000Z",
        "syncStatus": "success",
        "createdAt": "2024-03-10T09:00:00.000Z",
        "updatedAt": "2025-07-10T12:30:00.000Z"
      },
      {
        "id": "mapping-uuid-004",
        "clientId": "client-004",
        "clientName": "Slack Integration",
        "clientType": "messaging",
        "mappingType": "bidirectional",
        "sourceSystem": "slack",
        "targetSystem": "internal",
        "configuration": {
          "workspaceId": "T0123456789",
          "channelMappings": [
            {
              "channelId": "C0123456789",
              "channelName": "#it-support",
              "team": "it"
            },
            {
              "channelId": "C9876543210",
              "channelName": "#hr-helpdesk",
              "team": "hr"
            }
          ],
          "notifyOnUpdate": true
        },
        "status": "active",
        "lastSyncAt": "2025-07-10T12:34:00.000Z",
        "syncStatus": "success",
        "createdAt": "2024-05-05T11:30:00.000Z",
        "updatedAt": "2025-07-10T12:34:00.000Z"
      }
    ],
    "count": 4
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
| `403 Forbidden` | Insufficient permissions | User lacks required roles (`ticket_admin`, `tenant_admin`) to view client mappings |
| `404 Not Found` | Resource not found | The specified tenant does not exist |
| `304 Not Modified` | Conditional request matched | Returned when `if-none-match` ETag matches current resource |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions to access client mappings",
    "details": "User requires 'ticket_admin' or 'tenant_admin' role"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Client Mapping Types:** Supported mapping types include:
   - `inbound` — External system pushes data to ticketing
   - `outbound` — Ticketing pushes data to external system
   - `bidirectional` — Two-way synchronization

2. **Client Types:** Supported client types include:
   - `itsm` — IT Service Management tools (ServiceNow, Jira, Zendesk)
   - `email` — Email gateway integrations
   - `messaging` — Messaging platforms (Slack, Teams)
   - `crm` — Customer Relationship Management systems
   - `custom` — Custom API integrations

3. **Sync Status Values:**
   - `success` — Last sync completed successfully
   - `failed` — Last sync encountered errors
   - `pending` — Sync is queued
   - `in_progress` — Sync is currently running
   - `disabled` — Sync is disabled

4. **Use Case Header:** The `usecase` header can be used to filter client mappings for specific use cases or contexts within the tenant.

5. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. A `304 Not Modified` response indicates the cached version is still valid.

6. **Field Mappings:** Each client mapping can include field mappings that define how data is transformed between systems. The `transform` property can reference predefined transformation functions.

7. **Role Requirements:** This endpoint typically requires administrative roles:
   - `ticket_admin` — View and manage ticketing configurations
   - `tenant_admin` — Full tenant administration access

8. **API Version:** Note this endpoint uses API version `v1` (`/api/v1/`) unlike some other ticketing endpoints that use `v2`.

9. **Response Structure:** The response follows a `findAndCountAll` pattern returning:
   - `rows` — Array of client mapping objects
   - `count` — Total number of mappings

10. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has independent client mapping configurations.

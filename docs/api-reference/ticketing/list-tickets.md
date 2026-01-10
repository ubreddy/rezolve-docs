---
id: list-tickets
title: List Tickets
sidebar_label: List Tickets
displayed_sidebar: integrationSidebar
description: API documentation for retrieving a paginated list of tickets
status:
whatsPending:
---

# List Tickets

Retrieves a paginated list of tickets from the ticketing module with support for search, sorting, and advanced filtering. This endpoint enables fetching ticket templates or records based on various criteria including date ranges, status, and custom filters.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/list`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header and contains user identity, realm access roles, and team membership information.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `Content-Type` | Must be `application/json` | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
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
| `top` | integer | Number of records to return per page (page size) | Yes |
| `offset` | integer | Number of records to skip for pagination (starting index) | Yes |
| `sort` | string | Field name to sort by (e.g., `updatedAt`, `createdAt`, `status`) | No |
| `searchOrder` | string | Order for search results. Values: `ASC`, `DESC` | No |
| `sortOrder` | array | Additional sort configurations | No |
| `filter` | object | Advanced filter object with logical operators | No |
| `filter.op` | string | Logical operator for combining filter conditions. Values: `AND`, `OR` | No |
| `filter.operand` | array | Array of filter condition objects | No |
| `filter.operand[].id` | string | Unique identifier for the filter condition | No |
| `filter.operand[].op` | string | Comparison operator. Values: `EQ`, `NE`, `GT`, `GE`, `LT`, `LE`, `LIKE`, `IN` | No |
| `filter.operand[].column` | string | Field name to filter on | No |
| `filter.operand[].operand` | string/array | Value(s) to compare against | No |

### Filter Operators

| Operator | Description |
|----------|-------------|
| `EQ` | Equal to |
| `NE` | Not equal to |
| `GT` | Greater than |
| `GE` | Greater than or equal to |
| `LT` | Less than |
| `LE` | Less than or equal to |
| `LIKE` | Contains (partial match) |
| `IN` | Value is in array |

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
        "id": "{{filter_uuid}}",
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
  --url '{{base_url}}/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  --header 'accept: application/json' \
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
          "id": "{{filter_uuid}}",
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

```json
{
  "success": true,
  "message": "Tickets retrieved successfully",
  "data": {
    "tickets": [
      {
        "id": "{{ticket_uuid}}",
        "ticketNumber": "TKT-2025-001234",
        "subject": "Unable to access VPN",
        "description": "User is experiencing connectivity issues with the corporate VPN.",
        "status": "open",
        "priority": "high",
        "category": "Network",
        "subcategory": "VPN",
        "assignee": {
          "id": "{{user_uuid}}",
          "name": "Deepak Purohit",
          "email": "deepak.purohit@example.com"
        },
        "requester": {
          "id": "{{user_uuid}}",
          "name": "John Doe",
          "email": "john.doe@example.com"
        },
        "team": "operation",
        "createdAt": "2025-07-09T10:30:00.000Z",
        "updatedAt": "2025-07-10T14:22:00.000Z",
        "dueDate": "2025-07-12T18:00:00.000Z",
        "slaStatus": "on_track"
      },
      {
        "id": "{{ticket_uuid}}",
        "ticketNumber": "TKT-2025-001235",
        "subject": "Software installation request",
        "description": "Request to install Adobe Creative Suite on workstation.",
        "status": "in_progress",
        "priority": "medium",
        "category": "Software",
        "subcategory": "Installation",
        "assignee": {
          "id": "{{agent_uuid}}",
          "name": "Support Agent",
          "email": "support.agent@example.com"
        },
        "requester": {
          "id": "{{user_uuid}}",
          "name": "Jane Smith",
          "email": "jane.smith@example.com"
        },
        "team": "operation",
        "createdAt": "2025-07-09T08:15:00.000Z",
        "updatedAt": "2025-07-10T11:45:00.000Z",
        "dueDate": "2025-07-15T18:00:00.000Z",
        "slaStatus": "on_track"
      }
    ],
    "pagination": {
      "total": 156,
      "top": 30,
      "offset": 0,
      "hasMore": true
    },
    "module": "ticketing",
    "type": "template"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Occurs when required fields are missing or have invalid values (e.g., negative `top` or `offset`) |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles (`ticket_user`, `ticket_agent`, `ticket_admin`) to access tickets |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `422 Unprocessable Entity` | Invalid filter syntax | The filter object contains invalid operators or malformed conditions |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_FILTER",
    "message": "Invalid filter configuration",
    "details": "The operator 'INVALID_OP' is not supported. Supported operators: EQ, NE, GT, GE, LT, LE, LIKE, IN"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Pagination:** Use `top` and `offset` for pagination. For example, to get the second page of 30 records, set `top: 30` and `offset: 30`.

2. **Sorting:** The `sort` field accepts column names such as:
   - `createdAt` — Ticket creation timestamp
   - `updatedAt` — Last update timestamp
   - `priority` — Ticket priority level
   - `status` — Current ticket status
   - `dueDate` — SLA due date

3. **Date Filters:** Date values in filters must be in ISO 8601 format (`YYYY-MM-DDTHH:mm:ss.sssZ`).

4. **Compound Filters:** Multiple filter conditions can be combined using `AND` or `OR` operators:

   ```json
   {
     "filter": {
       "op": "AND",
       "operand": [
         { "id": "uuid1", "op": "GE", "column": "createdAt", "operand": "2025-07-01T00:00:00.000Z" },
         { "id": "uuid2", "op": "EQ", "column": "status", "operand": "open" }
       ]
     }
   }
   ```

5. **Search Behavior:** The `search` field performs a full-text search across ticket subject, description, and other text fields.

6. **Multi-Tenancy:** The `x-tenantid` header is mandatory and must contain a valid UUID for the target tenant.

7. **Role Requirements:** Users must have one of the following roles to access this endpoint:
   - `ticket_user` — View own tickets
   - `ticket_agent` — View assigned and team tickets
   - `ticket_admin` — View all tickets

8. **Rate Limiting:** Standard API rate limits apply. Large result sets should be paginated to avoid timeout issues.

9. **Maximum Page Size:** The `top` parameter has a maximum value of 100 records per request.

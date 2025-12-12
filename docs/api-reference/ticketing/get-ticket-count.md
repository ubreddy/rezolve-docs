---
id: get-ticket-count
title: Get Ticket Count
sidebar_label: Get Ticket Count
sidebar_position: 7
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ticket counts by filter categories
status:
whatsPending:
---

# Get Ticket Count

Retrieves ticket counts grouped by various filter categories. This endpoint is used to populate dashboard widgets, sidebar counters, and summary statistics for tickets based on predefined filter configurations such as status, priority, team, or custom saved filters.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/count`

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
| `filterIds` | array | Array of filter identifiers to get counts for. Can include predefined IDs (e.g., "all", status IDs) and custom filter UUIDs | Yes |
| `templateProfileFilterId` | string \| null | UUID of a saved filter profile template to apply as base filter | No |
| `timezone` | string | IANA timezone identifier for date-based calculations (e.g., "Asia/Calcutta", "America/New_York") | No |

---

## Example Request Body

```json
{
  "templateProfileFilterId": null,
  "filterIds": [
    "all",
    "3745",
    "3747",
    "3749",
    "3746",
    "3748",
    "3750",
    "4195",
    "4196",
    "4197",
    "4362",
    "4373",
    "5932",
    "7471",
    "6358",
    "7474",
    "7440",
    "7473",
    "7475",
    "7476",
    "7477",
    "7478",
    "7479",
    "7480",
    "7472",
    "7531",
    "7693",
    "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62",
    "01a12ac1-8f14-4600-a4ee-c930ee4057bf",
    "004ce44d-b69d-4acb-becd-78c3359e0002"
  ],
  "timezone": "Asia/Calcutta"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/api/v2/ticketing/ticket/count?type=template&module=ticketing' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'realmname: {{realm_name}}' \
  --header 'issupportrequest: false' \
  --data '{
    "templateProfileFilterId": null,
    "filterIds": [
      "all",
      "3745",
      "3747",
      "3749",
      "3746",
      "3748",
      "3750"
    ],
    "timezone": "Asia/Calcutta"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Ticket counts retrieved successfully",
  "data": {
    "counts": {
      "all": 1542,
      "3745": 156,
      "3747": 89,
      "3749": 234,
      "3746": 67,
      "3748": 45,
      "3750": 23,
      "4195": 312,
      "4196": 178,
      "4197": 92,
      "4362": 56,
      "4373": 34,
      "5932": 128,
      "7471": 45,
      "6358": 67,
      "7474": 23,
      "7440": 89,
      "7473": 12,
      "7475": 34,
      "7476": 56,
      "7477": 78,
      "7478": 23,
      "7479": 45,
      "7480": 67,
      "7472": 34,
      "7531": 12,
      "7693": 8,
      "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62": 45,
      "01a12ac1-8f14-4600-a4ee-c930ee4057bf": 23,
      "004ce44d-b69d-4acb-becd-78c3359e0002": 12
    },
    "filterDetails": {
      "all": {
        "id": "all",
        "name": "All Tickets",
        "type": "system"
      },
      "3745": {
        "id": "3745",
        "name": "Open",
        "type": "status",
        "color": "#3B82F6"
      },
      "3747": {
        "id": "3747",
        "name": "In Progress",
        "type": "status",
        "color": "#F59E0B"
      },
      "3749": {
        "id": "3749",
        "name": "Pending",
        "type": "status",
        "color": "#8B5CF6"
      },
      "3746": {
        "id": "3746",
        "name": "Resolved",
        "type": "status",
        "color": "#10B981"
      },
      "3748": {
        "id": "3748",
        "name": "Closed",
        "type": "status",
        "color": "#6B7280"
      },
      "3750": {
        "id": "3750",
        "name": "Cancelled",
        "type": "status",
        "color": "#EF4444"
      },
      "4195": {
        "id": "4195",
        "name": "Critical",
        "type": "priority",
        "color": "#DC2626"
      },
      "4196": {
        "id": "4196",
        "name": "High",
        "type": "priority",
        "color": "#F97316"
      },
      "4197": {
        "id": "4197",
        "name": "Medium",
        "type": "priority",
        "color": "#EAB308"
      },
      "7471": {
        "id": "7471",
        "name": "Assigned to Me",
        "type": "assignment"
      },
      "7472": {
        "id": "7472",
        "name": "My Team",
        "type": "team"
      },
      "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62": {
        "id": "a7069dca-b9b1-4bf5-9a41-20dd75bf6f62",
        "name": "VIP Customers",
        "type": "custom"
      },
      "01a12ac1-8f14-4600-a4ee-c930ee4057bf": {
        "id": "01a12ac1-8f14-4600-a4ee-c930ee4057bf",
        "name": "SLA Breached",
        "type": "custom"
      },
      "004ce44d-b69d-4acb-becd-78c3359e0002": {
        "id": "004ce44d-b69d-4acb-becd-78c3359e0002",
        "name": "Unassigned > 24h",
        "type": "custom"
      }
    },
    "summary": {
      "totalOpen": 479,
      "totalClosed": 1063,
      "slaBreached": 23,
      "dueToday": 45,
      "overdue": 12
    },
    "computedAt": "2025-07-10T12:34:56.789Z",
    "timezone": "Asia/Calcutta"
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Occurs when `filterIds` is missing, empty, or contains invalid values |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks required roles to access ticket counts |
| `404 Not Found` | Resource not found | The specified tenant or realm does not exist |
| `422 Unprocessable Entity` | Invalid filter ID | One or more filter IDs do not exist or are not accessible |
| `500 Internal Server Error` | Server error | Unexpected server-side error during processing |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_FILTER_ID",
    "message": "One or more filter IDs are invalid",
    "details": {
      "invalidIds": ["invalid-uuid-here", "9999"]
    }
  },
  "timestamp": "2025-07-10T12:34:56.789Z"
}
```

---

## Notes

1. **Filter ID Types:** The `filterIds` array can contain different types of identifiers:
   - `"all"` — System filter for all accessible tickets
   - Numeric IDs (e.g., `"3745"`) — Predefined system filters (statuses, priorities, categories)
   - UUIDs (e.g., `"a7069dca-b9b1-4bf5-9a41-20dd75bf6f62"`) — Custom saved filters created by users

2. **Filter Categories:** Predefined filters typically include:
   - **Status filters** — Open, In Progress, Pending, Resolved, Closed
   - **Priority filters** — Critical, High, Medium, Low
   - **Assignment filters** — Assigned to Me, Unassigned, My Team
   - **Time-based filters** — Created Today, Due Today, Overdue
   - **SLA filters** — SLA Breached, At Risk

3. **Custom Filters:** Users can create and save custom filters which are identified by UUIDs. These filters can combine multiple conditions.

4. **Timezone Handling:** The `timezone` parameter affects date-based calculations such as:
   - "Created Today" filter
   - "Due Today" filter
   - SLA calculations
   - Use IANA timezone format (e.g., `"Asia/Calcutta"`, `"America/New_York"`, `"Europe/London"`)

5. **Template Profile Filter:** When `templateProfileFilterId` is provided, all counts are calculated within the context of that saved filter profile (acts as a base filter).

6. **Performance Optimization:** Request only the filter IDs you need to display. Requesting counts for many filters in a single call is more efficient than multiple individual requests.

7. **Role-Based Counts:** Counts are calculated based on the user's role and permissions:
   - `ticket_user` — Sees only own tickets
   - `ticket_agent` — Sees assigned and team tickets
   - `ticket_admin` — Sees all tickets

8. **Cache Considerations:** Counts can change frequently. Consider implementing client-side polling or using the SSE endpoint for real-time updates.

9. **Summary Statistics:** The response may include a `summary` object with commonly needed aggregate statistics for quick dashboard display.

10. **Multi-Tenancy:** The `x-tenantid` header is mandatory. Each tenant has independent filter configurations and ticket data.

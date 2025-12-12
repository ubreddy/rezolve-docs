---
id: list-catalog-templates
title: List Catalog Templates
sidebar_label: List Catalog Templates
sidebar_position: 18
displayed_sidebar: integrationSidebar
description: API documentation for retrieving catalog templates with OData-style queries
status:
whatsPending:
---

# List Catalog Templates

Retrieves a list of catalog templates with OData-style query parameters for filtering, selecting fields, and sorting. Templates define reusable configurations for various modules including ticketing, forms, workflows, and more. This endpoint supports the ticketing module for managing ticket form templates.

---

## Endpoint

**Method:** `GET`
**URL:** `{{base_url}}/api/v1/catalog/templates/list`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json`) | Yes |
| `x-tenantid` | UUID identifying the tenant/organization | Yes |
| `x-runtime-version` | Runtime version for the API (e.g., `2`) | No |
| `if-none-match` | ETag value for conditional requests (caching) | No |

---

## Path Parameters

None.

---

## Query Parameters (OData-style)

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `$select` | string | Fields to include in response. Use `*` for all fields | No |
| `$filter` | string | OData filter expression to filter results | No |
| `$orderby` | string | Field and direction for sorting (e.g., `updated_on desc`) | No |
| `$top` | integer | Maximum number of records to return | No |
| `$skip` | integer | Number of records to skip (pagination) | No |
| `history` | boolean | Include version history for templates (e.g., `history=true`) | No |

---

## Filter Expression Syntax

The `$filter` parameter uses OData filter syntax:

```
field operator 'value' [and/or] field operator 'value'
```

**Supported Operators:**
- `eq` — Equal to
- `ne` — Not equal to
- `gt` — Greater than
- `ge` — Greater than or equal
- `lt` — Less than
- `le` — Less than or equal
- `contains()` — Contains substring

**Logical Operators:**
- `and` — Logical AND
- `or` — Logical OR

---

## Request Body Schema

Not applicable — this is a `GET` request with no request body.

---

## Example cURL

```bash
curl --request GET \
  --url '{{base_url}}/api/v1/catalog/templates/list?$select=*&$filter=type+eq+%27template%27+and+module+eq+%27ticketing%27&$orderby=updated_on+desc' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'x-runtime-version: 2'
```

**URL Decoded Filter:**

```
$filter=type eq 'template' and module eq 'ticketing'
$orderby=updated_on desc
```

---

## Filter Examples

### Filter by Specific ID with History

```
$filter=id eq 10808
$select=*
$top=1
history=true
```

### Filter by Specific ID

```
$filter=id eq 10808
$select=fields
$orderby=created_on asc
```

### Filter by Module and Type

```
$filter=type eq 'template' and module eq 'ticketing'
```

### Filter by Status

```
$filter=status eq 'active'
```

### Filter by Category

```
$filter=category eq 'IT Support' and status eq 'active'
```

### Filter by Date Range

```
$filter=created_on ge '2025-01-01T00:00:00Z' and created_on le '2025-07-01T00:00:00Z'
```

### Filter with Contains

```
$filter=contains(name, 'Password')
```

### Complex Filter

```
$filter=(type eq 'template' and module eq 'ticketing') and (status eq 'active' or status eq 'draft')
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Templates retrieved successfully",
  "data": {
    "templates": [
      {
        "id": "tpl-550e8400-e29b-41d4-a716-446655440001",
        "name": "Password Reset Request",
        "description": "Template for password reset service requests",
        "type": "template",
        "module": "ticketing",
        "category": "Access Management",
        "subcategory": "Password Services",
        "status": "active",
        "version": 3,
        "icon": "key",
        "color": "#4CAF50",
        "priority": "medium",
        "ticketType": "Service Request",
        "fields": [
          {
            "id": "field-001",
            "name": "username",
            "label": "Username",
            "type": "text",
            "required": true,
            "placeholder": "Enter username",
            "validation": {
              "minLength": 3,
              "maxLength": 50,
              "pattern": "^[a-zA-Z0-9._-]+$"
            },
            "order": 1
          },
          {
            "id": "field-002",
            "name": "system",
            "label": "System",
            "type": "dropdown",
            "required": true,
            "options": [
              {"value": "ad", "label": "Active Directory"},
              {"value": "sap", "label": "SAP"},
              {"value": "salesforce", "label": "Salesforce"},
              {"value": "other", "label": "Other"}
            ],
            "order": 2
          },
          {
            "id": "field-003",
            "name": "urgency",
            "label": "Urgency",
            "type": "radio",
            "required": true,
            "options": [
              {"value": "low", "label": "Low - Within 24 hours"},
              {"value": "medium", "label": "Medium - Within 4 hours"},
              {"value": "high", "label": "High - Immediate"}
            ],
            "defaultValue": "medium",
            "order": 3
          },
          {
            "id": "field-004",
            "name": "additional_notes",
            "label": "Additional Notes",
            "type": "textarea",
            "required": false,
            "placeholder": "Any additional information",
            "validation": {
              "maxLength": 1000
            },
            "order": 4
          }
        ],
        "workflow": {
          "autoAssign": true,
          "assignmentGroup": "IT Help Desk",
          "slaId": "sla-standard",
          "approvalRequired": false,
          "notifyOnCreate": true
        },
        "sla": {
          "responseTime": 60,
          "resolutionTime": 240,
          "businessHours": true
        },
        "tags": ["password", "reset", "access"],
        "audience": {
          "type": "all",
          "groups": [],
          "roles": []
        },
        "settings": {
          "allowAttachments": true,
          "maxAttachments": 3,
          "maxAttachmentSize": 10485760,
          "allowedFileTypes": [".pdf", ".png", ".jpg", ".doc", ".docx"]
        },
        "metadata": {
          "usageCount": 1250,
          "avgResolutionTime": 35,
          "satisfaction": 4.5
        },
        "created_by": {
          "id": "user-abc-123",
          "name": "Admin User",
          "email": "admin@rezolve.ai"
        },
        "created_on": "2024-01-15T10:00:00.000Z",
        "updated_by": {
          "id": "user-xyz-456",
          "name": "Jane Smith",
          "email": "jane.smith@rezolve.ai"
        },
        "updated_on": "2025-07-01T14:30:00.000Z"
      },
      {
        "id": "tpl-550e8400-e29b-41d4-a716-446655440002",
        "name": "New Laptop Request",
        "description": "Template for requesting a new laptop",
        "type": "template",
        "module": "ticketing",
        "category": "Hardware",
        "subcategory": "Laptops",
        "status": "active",
        "version": 2,
        "icon": "laptop",
        "color": "#2196F3",
        "priority": "low",
        "ticketType": "Service Request",
        "fields": [
          {
            "id": "field-010",
            "name": "laptop_type",
            "label": "Laptop Type",
            "type": "dropdown",
            "required": true,
            "options": [
              {"value": "standard", "label": "Standard (Dell Latitude)"},
              {"value": "developer", "label": "Developer (Dell Precision)"},
              {"value": "executive", "label": "Executive (MacBook Pro)"}
            ],
            "order": 1
          },
          {
            "id": "field-011",
            "name": "justification",
            "label": "Business Justification",
            "type": "textarea",
            "required": true,
            "placeholder": "Explain why you need this laptop",
            "validation": {
              "minLength": 50,
              "maxLength": 500
            },
            "order": 2
          },
          {
            "id": "field-012",
            "name": "needed_by",
            "label": "Needed By Date",
            "type": "date",
            "required": true,
            "validation": {
              "minDate": "today",
              "maxDate": "+90d"
            },
            "order": 3
          }
        ],
        "workflow": {
          "autoAssign": false,
          "assignmentGroup": "IT Procurement",
          "slaId": "sla-procurement",
          "approvalRequired": true,
          "approvers": ["manager", "it-director"],
          "notifyOnCreate": true
        },
        "sla": {
          "responseTime": 480,
          "resolutionTime": 10080,
          "businessHours": true
        },
        "tags": ["hardware", "laptop", "procurement"],
        "audience": {
          "type": "all",
          "groups": [],
          "roles": []
        },
        "settings": {
          "allowAttachments": true,
          "maxAttachments": 5,
          "maxAttachmentSize": 10485760,
          "allowedFileTypes": [".pdf", ".png", ".jpg"]
        },
        "metadata": {
          "usageCount": 342,
          "avgResolutionTime": 4320,
          "satisfaction": 4.2
        },
        "created_by": {
          "id": "user-abc-123",
          "name": "Admin User",
          "email": "admin@rezolve.ai"
        },
        "created_on": "2024-03-01T09:00:00.000Z",
        "updated_by": {
          "id": "user-abc-123",
          "name": "Admin User",
          "email": "admin@rezolve.ai"
        },
        "updated_on": "2025-06-15T11:00:00.000Z"
      }
    ],
    "pagination": {
      "total": 45,
      "count": 2,
      "hasMore": true
    }
  },
  "timestamp": "2025-07-10T12:40:00.000Z"
}
```

---

## Template Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Unique template identifier |
| `name` | string | Template display name |
| `description` | string | Template description |
| `type` | string | Resource type (e.g., `template`) |
| `module` | string | Module this template belongs to (e.g., `ticketing`) |
| `category` | string | Template category |
| `subcategory` | string | Template subcategory |
| `status` | string | Template status: `active`, `draft`, `archived` |
| `version` | integer | Template version number |
| `icon` | string | Icon identifier for UI display |
| `color` | string | Hex color code for UI display |
| `priority` | string | Default priority for tickets created from this template |
| `ticketType` | string | Type of ticket created (e.g., Service Request, Incident) |
| `fields` | array | Form field definitions |
| `workflow` | object | Workflow configuration |
| `sla` | object | SLA configuration |
| `tags` | array | Searchable tags |
| `audience` | object | Visibility/access configuration |
| `settings` | object | Template-specific settings |
| `metadata` | object | Usage statistics |
| `created_by` | object | Creator information |
| `created_on` | string | ISO 8601 creation timestamp |
| `updated_by` | object | Last modifier information |
| `updated_on` | string | ISO 8601 last update timestamp |

---

## Field Types

| Type | Description |
|------|-------------|
| `text` | Single-line text input |
| `textarea` | Multi-line text input |
| `dropdown` | Single-select dropdown |
| `multiselect` | Multi-select dropdown |
| `radio` | Radio button group |
| `checkbox` | Checkbox (boolean or group) |
| `date` | Date picker |
| `datetime` | Date and time picker |
| `number` | Numeric input |
| `file` | File upload |
| `user` | User picker |
| `group` | Group/team picker |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid query syntax | Malformed OData query parameters |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view templates |
| `304 Not Modified` | Conditional request matched | ETag matches, content unchanged |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "INVALID_FILTER_SYNTAX",
    "message": "Invalid OData filter expression",
    "details": "Unexpected token 'equals' at position 15. Use 'eq' for equality comparison."
  },
  "timestamp": "2025-07-10T12:40:00.000Z"
}
```

---

## Notes

1. **OData Query Syntax:** This endpoint uses OData-style query parameters. URL-encode special characters in filter expressions.

2. **Field Selection:** Use `$select=*` to return all fields, or specify specific fields: `$select=id,name,status,fields`.

3. **Module Filtering:** Filter by `module eq 'ticketing'` to get only ticketing-related templates.

4. **Template Types:**
   - `template` — Standard form template
   - `workflow` — Workflow definition
   - `notification` — Notification template

5. **Status Values:**
   - `active` — Available for use
   - `draft` — Under development
   - `archived` — No longer in use

6. **Version Control:** Templates support versioning. The `version` field increments with each modification. Use `history=true` to retrieve version history for audit trails.

7. **History Mode:** When `history=true` is passed, the response includes historical versions of the template, allowing you to track changes over time and revert if needed.

8. **Field Definitions:** The `fields` array defines the dynamic form structure. Each field has:
   - `type` — Input type
   - `validation` — Validation rules
   - `options` — For dropdowns/radio buttons
   - `order` — Display order

9. **Workflow Configuration:** The `workflow` object defines:
   - `autoAssign` — Whether to auto-assign tickets
   - `assignmentGroup` — Default assignment group
   - `approvalRequired` — Whether approval is needed
   - `approvers` — List of approver roles

10. **Audience Control:** The `audience` object controls template visibility:
    - `type: "all"` — Available to all users
    - `type: "groups"` — Limited to specific groups
    - `type: "roles"` — Limited to specific roles

11. **Caching:** The API supports conditional requests via `ETag` / `if-none-match` headers. Use for efficient polling.

12. **Runtime Version:** The `x-runtime-version` header may affect response format or features. Version `2` is recommended.

13. **Related Endpoints:**
    - `GET /catalog/templates/{id}` — Get single template
    - `POST /catalog/templates` — Create new template
    - `PUT /catalog/templates/{id}` — Update template
    - `DELETE /catalog/templates/{id}` — Delete template
    - `GET /tenant/sc/offers` — Service catalog offers (uses templates)

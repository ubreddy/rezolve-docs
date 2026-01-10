---
id: list-catalog-templates
title: List Catalog Templates
sidebar_label: List Catalog Templates
sidebar_position: 18
displayed_sidebar: integrationSidebar
description: API documentation for listing catalog templates (service catalog items) available for ticket creation
status:
whatsPending:
---

# List Catalog Templates

Lists catalog templates (service catalog items) available for ticket creation. Returns template definitions with associated metadata, categories, and configuration details. Supports filtering, sorting, and pagination.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/api/v2/ticketing/ticket/list?type=template&module=ticketing`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Type | Description | Required |
|--------|------|-------------|----------|
| `Authorization` | string | Bearer token for authentication | Yes |
| `Content-Type` | string | Must be `application/json` | Yes |
| `x-tenantid` | string | Tenant UUID identifier | Yes |
| `realmname` | string | Authentication realm name | Yes |
| `issupportrequest` | string | Filter for support request templates. Values: `true`, `false` | No |

---

## Query Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `type` | string | Record type. Must be `template` for catalog templates | Yes |
| `module` | string | Module context. Use `ticketing` for service catalog | Yes |

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `search` | string | Search term to filter templates by name or description | No |
| `top` | integer | Number of records to return (page size). Default: 30 | No |
| `offset` | integer | Number of records to skip for pagination. Default: 0 | No |
| `sort` | string | Field to sort by. Default: `updatedAt` | No |
| `searchOrder` | string | Sort direction for search. Values: `ASC`, `DESC` | No |
| `sortOrder` | array | Additional sort configurations | No |
| `filter` | object | Complex filter conditions | No |
| `filter.op` | string | Logical operator: `AND`, `OR` | No |
| `filter.operand` | array | Array of filter conditions | No |

### Filter Operand Structure

Each filter operand supports:

| Field | Type | Description |
|-------|------|-------------|
| `field` | string | Field name to filter on |
| `op` | string | Comparison operator: `eq`, `ne`, `contains`, `in`, `notIn`, `gt`, `lt`, `gte`, `lte` |
| `value` | any | Value to compare against |

---

## Request Body Example

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
    "operand": []
  }
}
```

---

## Example cURL

### List All Active Templates

```bash
curl -X POST 'https://your-domain.com/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -H 'x-tenantid: YOUR_TENANT_ID' \
  -H 'realmname: YOUR_REALM' \
  -H 'issupportrequest: false' \
  --data-raw '{
    "search": "",
    "top": 30,
    "offset": 0,
    "sort": "updatedAt",
    "searchOrder": "DESC",
    "sortOrder": [],
    "filter": {
      "op": "AND",
      "operand": []
    }
  }'
```

### Search Templates by Name

```bash
curl -X POST 'https://your-domain.com/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -H 'x-tenantid: YOUR_TENANT_ID' \
  -H 'realmname: YOUR_REALM' \
  --data-raw '{
    "search": "laptop",
    "top": 20,
    "offset": 0,
    "sort": "name",
    "searchOrder": "ASC"
  }'
```

### Filter by Category

```bash
curl -X POST 'https://your-domain.com/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -H 'x-tenantid: YOUR_TENANT_ID' \
  -H 'realmname: YOUR_REALM' \
  --data-raw '{
    "search": "",
    "top": 30,
    "offset": 0,
    "sort": "displayOrder",
    "searchOrder": "ASC",
    "filter": {
      "op": "AND",
      "operand": [
        {
          "field": "category.id",
          "op": "eq",
          "value": "cat_hardware"
        },
        {
          "field": "isPublished",
          "op": "eq",
          "value": true
        }
      ]
    }
  }'
```

### List Support Request Templates Only

```bash
curl -X POST 'https://your-domain.com/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -H 'x-tenantid: YOUR_TENANT_ID' \
  -H 'realmname: YOUR_REALM' \
  -H 'issupportrequest: true' \
  --data-raw '{
    "search": "",
    "top": 30,
    "offset": 0,
    "sort": "updatedAt",
    "searchOrder": "DESC"
  }'
```

### Paginated Request (Page 2)

```bash
curl -X POST 'https://your-domain.com/api/v2/ticketing/ticket/list?type=template&module=ticketing' \
  -H 'accept: application/json' \
  -H 'authorization: Bearer YOUR_ACCESS_TOKEN' \
  -H 'content-type: application/json' \
  -H 'x-tenantid: YOUR_TENANT_ID' \
  -H 'realmname: YOUR_REALM' \
  --data-raw '{
    "search": "",
    "top": 30,
    "offset": 30,
    "sort": "updatedAt",
    "searchOrder": "DESC"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "data": {
    "count": 15,
    "rows": [
      {
        "id": "tpl_01HQRST456",
        "uuid": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
        "name": "New Laptop Request",
        "description": "Request for a new laptop or workstation",
        "category": {
          "id": "cat_hardware",
          "name": "Hardware",
          "icon": "laptop"
        },
        "subcategory": {
          "id": "subcat_laptops",
          "name": "Laptops & Workstations"
        },
        "priority": {
          "id": "pri_medium",
          "name": "Medium",
          "value": 3
        },
        "status": "active",
        "isPublished": true,
        "isSupportRequest": false,
        "estimatedTime": "3-5 business days",
        "approvalRequired": true,
        "approvalWorkflow": {
          "id": "wf_manager_approval",
          "name": "Manager Approval"
        },
        "formFields": [
          {
            "id": "field_laptop_type",
            "name": "Laptop Type",
            "type": "DROPDOWN",
            "required": true,
            "options": ["Standard", "Developer", "Executive"]
          },
          {
            "id": "field_justification",
            "name": "Business Justification",
            "type": "TEXTAREA",
            "required": true
          }
        ],
        "metaFields": {
          "costCenter": "IT-HARDWARE",
          "budgetCategory": "CAPEX"
        },
        "icon": "laptop",
        "color": "#4A90D9",
        "displayOrder": 1,
        "tags": ["hardware", "laptop", "equipment"],
        "availableForTeams": ["it", "engineering", "global"],
        "createdAt": "2024-08-15T10:30:00.000Z",
        "updatedAt": "2024-12-10T14:22:00.000Z",
        "createdBy": {
          "id": "usr_admin01",
          "name": "System Admin"
        },
        "updatedBy": {
          "id": "usr_catalog_mgr",
          "name": "Catalog Manager"
        }
      },
      {
        "id": "tpl_01HQRST789",
        "uuid": "b2c3d4e5-f6a7-8901-bcde-f23456789012",
        "name": "Software Installation Request",
        "description": "Request installation of approved software",
        "category": {
          "id": "cat_software",
          "name": "Software",
          "icon": "package"
        },
        "subcategory": {
          "id": "subcat_install",
          "name": "Installation"
        },
        "priority": {
          "id": "pri_low",
          "name": "Low",
          "value": 4
        },
        "status": "active",
        "isPublished": true,
        "isSupportRequest": false,
        "estimatedTime": "1-2 business days",
        "approvalRequired": false,
        "formFields": [
          {
            "id": "field_software_name",
            "name": "Software Name",
            "type": "LOOKUP",
            "required": true,
            "lookupSource": "approved_software_catalog"
          },
          {
            "id": "field_license_type",
            "name": "License Type",
            "type": "DROPDOWN",
            "required": true,
            "options": ["Single User", "Team", "Enterprise"]
          }
        ],
        "icon": "download",
        "color": "#27AE60",
        "displayOrder": 2,
        "tags": ["software", "installation"],
        "availableForTeams": ["*"],
        "createdAt": "2024-09-01T09:00:00.000Z",
        "updatedAt": "2024-12-08T11:15:00.000Z"
      }
    ]
  },
  "message": "Templates retrieved successfully"
}
```

---

## Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `success` | boolean | Indicates if the request was successful |
| `data.count` | integer | Total number of templates matching criteria |
| `data.rows` | array | Array of template objects |
| `data.rows[].id` | string | Unique template identifier |
| `data.rows[].uuid` | string | UUID of the template |
| `data.rows[].name` | string | Display name of the template |
| `data.rows[].description` | string | Detailed description of the service |
| `data.rows[].category` | object | Primary category classification |
| `data.rows[].subcategory` | object | Secondary category classification |
| `data.rows[].priority` | object | Default priority for tickets created from template |
| `data.rows[].status` | string | Template status: `active`, `inactive`, `draft` |
| `data.rows[].isPublished` | boolean | Whether template is visible in catalog |
| `data.rows[].isSupportRequest` | boolean | Whether this is a support request template |
| `data.rows[].estimatedTime` | string | Expected fulfillment time |
| `data.rows[].approvalRequired` | boolean | Whether approval workflow is needed |
| `data.rows[].approvalWorkflow` | object | Associated approval workflow details |
| `data.rows[].formFields` | array | Custom form field definitions |
| `data.rows[].metaFields` | object | Additional metadata configuration |
| `data.rows[].icon` | string | Icon identifier for display |
| `data.rows[].color` | string | Color code for visual styling |
| `data.rows[].displayOrder` | integer | Sort order in catalog display |
| `data.rows[].tags` | array | Searchable tags |
| `data.rows[].availableForTeams` | array | Team restrictions (`*` for all teams) |
| `data.rows[].createdAt` | string | ISO 8601 creation timestamp |
| `data.rows[].updatedAt` | string | ISO 8601 last update timestamp |
| `data.rows[].createdBy` | object | User who created the template |
| `data.rows[].updatedBy` | object | User who last modified the template |

---

## Form Field Types

| Type | Description |
|------|-------------|
| `TEXT` | Single-line text input |
| `TEXTAREA` | Multi-line text input |
| `DROPDOWN` | Single-select dropdown |
| `MULTISELECT` | Multi-select dropdown |
| `CHECKBOX` | Boolean checkbox |
| `RADIO` | Radio button group |
| `DATE` | Date picker |
| `DATETIME` | Date and time picker |
| `NUMBER` | Numeric input |
| `FILE` | File attachment |
| `USER` | User picker |
| `LOOKUP` | Dynamic lookup from external source |

---

## Error Responses

### 400 Bad Request

```json
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid filter operand structure"
  }
}
```

### 401 Unauthorized

```json
{
  "success": false,
  "error": {
    "code": "UNAUTHORIZED",
    "message": "Invalid or expired access token"
  }
}
```

### 403 Forbidden

```json
{
  "success": false,
  "error": {
    "code": "FORBIDDEN",
    "message": "Insufficient permissions to access catalog templates"
  }
}
```

### 422 Unprocessable Entity

```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid sort field specified",
    "details": {
      "field": "sort",
      "value": "invalidField",
      "allowedValues": ["name", "updatedAt", "createdAt", "displayOrder", "category"]
    }
  }
}
```

### 500 Internal Server Error

```json
{
  "success": false,
  "error": {
    "code": "INTERNAL_ERROR",
    "message": "An unexpected error occurred while retrieving templates"
  }
}
```

---

## Notes

1. **Template vs Ticket Distinction:** This endpoint uses `type=template` to fetch catalog template definitions, not actual tickets. For listing tickets, use `type=ticket`.

2. **Module Context:** The `module=ticketing` parameter ensures templates are retrieved from the service catalog context. Other modules may have different template types.

3. **Support Request Header:** The `issupportrequest` header filters between standard service catalog templates and support request templates. When `false` or omitted, returns standard catalog items.

4. **Team Availability:** Templates can be restricted to specific teams via `availableForTeams`. A value of `["*"]` indicates the template is available to all teams.

5. **Published Status:** Only templates with `isPublished: true` appear in end-user catalogs. Draft and unpublished templates are visible only to administrators.

6. **Form Fields Configuration:** The `formFields` array defines the custom form rendered when users create tickets from this template. Field configurations include validation rules, default values, and conditional visibility.

7. **Approval Workflows:** Templates with `approvalRequired: true` will trigger the associated approval workflow when tickets are created.

8. **Pagination:** Use `top` and `offset` for pagination. The `count` field in response indicates total matching records for calculating pages.

9. **Sort Options:** Common sort fields include:
   - `name`: Alphabetical by template name
   - `updatedAt`: Most recently modified
   - `createdAt`: Creation date
   - `displayOrder`: Custom catalog order
   - `category`: By category grouping

10. **Role Requirements:** Requires `ticket_user`, `ticket_agent`, or higher role to view published templates. Draft templates require `ticket_admin` or `catalog_admin` role.

11. **Multi-Tenancy:** Templates are tenant-specific. The `x-tenantid` header ensures proper data isolation.

12. **Caching:** Template lists may be cached. Changes to templates may take a few minutes to reflect in API responses.

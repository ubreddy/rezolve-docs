---
id: update-catalog-meta-fields
title: Update Catalog Meta Fields
sidebar_label: Update Catalog Meta Fields
sidebar_position: 19
displayed_sidebar: integrationSidebar
description: API documentation for updating metadata field configurations for catalog templates
status:
whatsPending:
---

# Update Catalog Meta Fields

Updates metadata field configurations for catalog templates. Meta fields define the structure and behavior of form fields used in tickets, service requests, and other catalog items. This endpoint allows updating field properties, mappings, and associations.

---

## Endpoint

**Method:** `PUT`
**URL:** `{{base_url}}/api/v1/catalog/metaFields/update`

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
| `x-runtime-version` | API runtime version (e.g., `2`) | No |

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
| `data` | object | Container for meta field update data | Yes |
| `data.name` | string | Display name of the meta field | Yes |
| `data.meta_field_id` | string (UUID) | Unique identifier of the meta field to update | Yes |
| `data.meta_field_type` | string | Field type (see types below) | Yes |
| `data.meta_field_scope` | string | Scope where field applies (e.g., TICKET, USER) | Yes |
| `data.meta_field_sub_type` | string\|null | Sub-type for specialized fields | No |
| `data.meta_field_special_field_type` | string\|null | Special field designation | No |
| `data.meta_field_use_badges` | boolean\|null | Whether to display as badges | No |
| `data.field_data` | array | Field mapping configurations | No |

### Field Data Object Schema

| Field | Type | Description |
|-------|------|-------------|
| `field_id` | string (UUID) | Unique identifier for the field instance |
| `template_id` | string | Associated template ID |
| `uuid_column` | string (UUID) | UUID reference for column mapping |

---

## Request Body Example

```json
{
  "data": {
    "name": "Priority",
    "meta_field_id": "1e630d17-4c61-4f43-90e5-7eb00433d51f",
    "meta_field_type": "DROPDOWN",
    "meta_field_scope": "TICKET",
    "meta_field_sub_type": null,
    "meta_field_special_field_type": null,
    "meta_field_use_badges": null,
    "field_data": [
      {
        "field_id": "bcb8cd29-6cb5-491b-b0a7-1a1c4bc1ea36",
        "template_id": "3745",
        "uuid_column": "126f5873-9fce-424d-a90a-f73f256adaf7"
      }
    ]
  }
}
```

**Update with Multiple Field Mappings:**

```json
{
  "data": {
    "name": "Category",
    "meta_field_id": "2f740e28-5d72-5g54-a1f6-8fc11544e62g",
    "meta_field_type": "DROPDOWN",
    "meta_field_scope": "TICKET",
    "meta_field_sub_type": null,
    "meta_field_special_field_type": null,
    "meta_field_use_badges": true,
    "field_data": [
      {
        "field_id": "aaa1cd29-6cb5-491b-b0a7-1a1c4bc1ea36",
        "template_id": "3745",
        "uuid_column": "111f5873-9fce-424d-a90a-f73f256adaf7"
      },
      {
        "field_id": "bbb2cd29-6cb5-491b-b0a7-1a1c4bc1ea37",
        "template_id": "3746",
        "uuid_column": "222f5873-9fce-424d-a90a-f73f256adaf8"
      }
    ]
  }
}
```

**Update Text Field:**

```json
{
  "data": {
    "name": "Description",
    "meta_field_id": "3g851f39-6e83-6h65-b2g7-9gd22655f73h",
    "meta_field_type": "TEXTAREA",
    "meta_field_scope": "TICKET",
    "meta_field_sub_type": null,
    "meta_field_special_field_type": null,
    "meta_field_use_badges": null,
    "field_data": []
  }
}
```

---

## Example cURL

```bash
curl --request PUT \
  --url '{{base_url}}/api/v1/catalog/metaFields/update' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --header 'x-runtime-version: 2' \
  --data '{
    "data": {
      "name": "Priority",
      "meta_field_id": "1e630d17-4c61-4f43-90e5-7eb00433d51f",
      "meta_field_type": "DROPDOWN",
      "meta_field_scope": "TICKET",
      "meta_field_sub_type": null,
      "meta_field_special_field_type": null,
      "meta_field_use_badges": null,
      "field_data": [
        {
          "field_id": "bcb8cd29-6cb5-491b-b0a7-1a1c4bc1ea36",
          "template_id": "3745",
          "uuid_column": "126f5873-9fce-424d-a90a-f73f256adaf7"
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
  "message": "Meta field updated successfully",
  "data": {
    "meta_field_id": "1e630d17-4c61-4f43-90e5-7eb00433d51f",
    "name": "Priority",
    "meta_field_type": "DROPDOWN",
    "meta_field_scope": "TICKET",
    "meta_field_sub_type": null,
    "meta_field_special_field_type": null,
    "meta_field_use_badges": null,
    "field_data": [
      {
        "field_id": "bcb8cd29-6cb5-491b-b0a7-1a1c4bc1ea36",
        "template_id": "3745",
        "uuid_column": "126f5873-9fce-424d-a90a-f73f256adaf7"
      }
    ],
    "updatedAt": "2025-07-10T14:00:00.000Z",
    "updatedBy": {
      "id": "8d490a3f-497e-48ec-86a9-85e9f7ebc5c1",
      "name": "Pawan Pundir",
      "email": "pawan.pundir@rezolve.ai"
    }
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## Meta Field Types

| Type | Description |
|------|-------------|
| `TEXT` | Single-line text input |
| `TEXTAREA` | Multi-line text input |
| `DROPDOWN` | Single selection dropdown |
| `MULTISELECT` | Multiple selection dropdown |
| `CHECKBOX` | Boolean checkbox |
| `RADIO` | Radio button group |
| `DATE` | Date picker |
| `DATETIME` | Date and time picker |
| `NUMBER` | Numeric input |
| `FILE` | File upload |
| `USER` | User picker |
| `LOOKUP` | Lookup/reference field |

---

## Meta Field Scopes

| Scope | Description |
|-------|-------------|
| `TICKET` | Field applies to tickets |
| `USER` | Field applies to users |
| `ASSET` | Field applies to assets |
| `REQUEST` | Field applies to service requests |
| `CATALOG` | Field applies to catalog items |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to update meta fields |
| `404 Not Found` | Meta field not found | No meta field exists with the specified ID |
| `409 Conflict` | Duplicate name | Another meta field with this name already exists |
| `422 Unprocessable Entity` | Validation error | Invalid field type, scope, or mapping |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Error Response:**

```json
{
  "success": false,
  "error": {
    "code": "META_FIELD_NOT_FOUND",
    "message": "Meta field not found",
    "details": "No meta field exists with ID: 1e630d17-4c61-4f43-90e5-7eb00433d51f"
  },
  "timestamp": "2025-07-10T14:00:00.000Z"
}
```

---

## Notes

1. **Meta Fields:** Meta fields define reusable field configurations that can be mapped to multiple templates and forms across the catalog.

2. **Field Data Mappings:** The `field_data` array maps this meta field to specific templates:
   - `field_id` — Unique identifier for the field instance in the template
   - `template_id` — The catalog template this mapping applies to
   - `uuid_column` — Database column reference for the field value

3. **Scope Restrictions:** The `meta_field_scope` determines where the field can be used. Once set, changing scope may affect existing data.

4. **Badges:** When `meta_field_use_badges` is `true`, dropdown/multiselect values are displayed as colored badges in the UI.

5. **Special Field Types:** The `meta_field_special_field_type` is used for system fields with special behavior (e.g., PRIORITY, STATUS, CATEGORY).

6. **Sub-Types:** The `meta_field_sub_type` provides additional typing for specialized fields (e.g., EMAIL, PHONE, URL for TEXT fields).

7. **Null Values:** Fields set to `null` retain their current values. To clear a field, you may need to use an empty string or specific clear value.

8. **Template Association:** Updating `field_data` replaces all template mappings. Include all desired mappings in the request.

9. **Audit Trail:** All meta field updates are logged with the user who made the change and timestamp.

10. **Required Roles:** Typically requires `tenant_admin` or `catalog_admin` role to update meta fields.

11. **Related Endpoints:**
    - `GET /catalog/metaFields` — List all meta fields
    - `GET /catalog/metaFields/{id}` — Get meta field details
    - `POST /catalog/metaFields` — Create new meta field
    - `DELETE /catalog/metaFields/{id}` — Delete meta field
    - `GET /catalog/templates/list` — List catalog templates

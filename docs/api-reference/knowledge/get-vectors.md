---
id: get-vectors
title: Get Ingested Data
sidebar_label: Get Ingested Data
sidebar_position: 6
displayed_sidebar: integrationSidebar
description: API documentation for retrieving ingested document vectors
status:
whatsPending:
---

# Get Ingested Data

Get unique documents by fetching only chunk 0 of each document. This is an optimized endpoint that only retrieves the first chunk since all chunks share metadata, providing efficient access to ingested document information.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/get-vectors`

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

---

## Path Parameters

None.

---

## Query Parameters

| Parameter | Type | Description | Required |
|-----------|------|-------------|----------|
| `platform_type` | string | Source platform type (see available values below) | Yes |

### Available Platform Type Values

| Value | Description |
|-------|-------------|
| `sharepoint` | SharePoint documents |
| `servicenow` | ServiceNow knowledge articles |
| `confluence` | Confluence pages |
| `itglue` | IT Glue documents |
| `bossdesk` | BossDesk articles |
| `web` | Web crawled content |
| `nyc` | NYC specific content |
| `knowledge_article` | Generic knowledge articles |
| `scripted_article` | Scripted/automated articles |
| `customer_document` | Customer uploaded documents |
| `flow` | Flow-generated content |
| `unknown` | Unknown/unclassified content |

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `tenant_id` | string | Tenant identifier | Yes |

---

## Request Body Example

```json
{
  "rezolve_domain": "string",
  "tenant_id": "string"
}
```

**Production Example:**

```json
{
  "rezolve_domain": "acme.rezolve.ai",
  "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/get-vectors?platform_type=sharepoint' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }'
```

**ServiceNow Example:**

```bash
curl --request POST \
  --url '{{base_url}}/v2/get-vectors?platform_type=servicenow' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Ingested data retrieved successfully",
  "data": {
    "documents": [
      {
        "id": "doc-001",
        "title": "IT Security Policy",
        "source_url": "https://contoso.sharepoint.com/sites/IT/Documents/IT-Security-Policy.pdf",
        "platform_type": "sharepoint",
        "chunk_count": 15,
        "metadata": {
          "author": "John Doe",
          "created_at": "2025-01-15T10:00:00.000Z",
          "modified_at": "2025-06-20T14:30:00.000Z",
          "file_type": "pdf",
          "file_size": 2456789
        },
        "ingested_at": "2025-12-01T08:00:00.000Z"
      },
      {
        "id": "doc-002",
        "title": "Employee Onboarding Guide",
        "source_url": "https://contoso.sharepoint.com/sites/HR/Documents/Onboarding-Guide.docx",
        "platform_type": "sharepoint",
        "chunk_count": 8,
        "metadata": {
          "author": "Jane Smith",
          "created_at": "2024-08-10T09:00:00.000Z",
          "modified_at": "2025-11-15T11:45:00.000Z",
          "file_type": "docx",
          "file_size": 1234567
        },
        "ingested_at": "2025-12-01T08:15:00.000Z"
      }
    ],
    "total": 2,
    "platform_type": "sharepoint"
  },
  "timestamp": "2025-12-12T11:30:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view ingested data |
| `422 Unprocessable Entity` | Validation error | Invalid field values or platform type |
| `500 Internal Server Error` | Server error | Unexpected server-side error |

**Example Validation Error Response (422):**

```json
{
  "detail": [
    {
      "loc": [
        "string",
        0
      ],
      "msg": "string",
      "type": "string"
    }
  ]
}
```

**Example Error Response:**

```json
{
  "detail": [
    {
      "loc": ["query", "platform_type"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Optimized Retrieval:** This endpoint only fetches chunk 0 of each document for efficiency, as all chunks share the same metadata.

2. **Platform Filtering:** Use the `platform_type` query parameter to filter documents by their source platform.

3. **Chunk Information:** The `chunk_count` field indicates how many vector chunks exist for each document.

4. **Metadata:** Document metadata includes author, timestamps, file type, and size information.

5. **Use Cases:** Useful for auditing ingested content, building document inventories, and verifying ingestion completeness.

6. **Performance:** This endpoint is optimized for listing documents without retrieving full vector data.

7. **Pagination:** For large document sets, consider implementing client-side pagination based on the response.

8. **Related Endpoints:**
    - `POST /v2/sharepoint/upload` — Ingest SharePoint content
    - `POST /v2/servicenow/kb-upload` — Ingest ServiceNow content
    - `POST /v2/azure/failed-files` — List failed ingestion files
    - `POST /v2/sharepoint/delete` — Delete ingested content

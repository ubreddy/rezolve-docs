---
id: delete-vectors
title: Delete Vectors
sidebar_label: Delete Vectors
sidebar_position: 13
displayed_sidebar: integrationSidebar
description: API documentation for deleting vectors by source URLs for a specified platform
status:
whatsPending:
---

# Delete Vectors

Delete vectors by source URLs for the specified platform. Returns final result in the standard delete_response format.

This endpoint removes vector embeddings from the Pinecone database based on source URLs or IDs, allowing you to clean up deleted or outdated content from the knowledge base.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/delete`

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

None.

---

## Request Body Schema

| Field | Type | Description | Required |
|-------|------|-------------|----------|
| `platform_type` | string | Platform type (e.g., `sharepoint`, `servicenow`, `confluence`, `customer_document`) | Yes |
| `source_urls` | array | List of source URLs to delete vectors for | No |
| `ids` | array | List of vector IDs to delete | No |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |

---

## Request Body Example

```json
{
  "platform_type": "sharepoint",
  "source_urls": [
    "string"
  ],
  "ids": [
    "string"
  ],
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  }
}
```

**Delete by Source URLs:**

```json
{
  "platform_type": "sharepoint",
  "source_urls": [
    "https://contoso.sharepoint.com/sites/IT/Documents/policy.pdf",
    "https://contoso.sharepoint.com/sites/IT/Documents/guide.docx"
  ],
  "ids": [],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

**Delete by Vector IDs:**

```json
{
  "platform_type": "customer_document",
  "source_urls": [],
  "ids": [
    "vec-001-abc123",
    "vec-002-def456",
    "vec-003-ghi789"
  ],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

**Delete ServiceNow Articles:**

```json
{
  "platform_type": "servicenow",
  "source_urls": [
    "https://acme.service-now.com/kb_view.do?sys_kb_id=kb0010001"
  ],
  "ids": [],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

**Delete Confluence Pages:**

```json
{
  "platform_type": "confluence",
  "source_urls": [
    "https://acme.atlassian.net/wiki/spaces/KB/pages/123456789"
  ],
  "ids": [],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/delete' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "platform_type": "sharepoint",
    "source_urls": [
      "https://contoso.sharepoint.com/sites/IT/Documents/policy.pdf"
    ],
    "ids": [],
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
"string"
```

**Example Response:**

```json
{
  "successful": [
    "vec-001-abc123",
    "vec-002-def456",
    "vec-003-ghi789"
  ],
  "failed": []
}
```

**Partial Success Response:**

```json
{
  "successful": [
    "vec-001-abc123",
    "vec-002-def456"
  ],
  "failed": [
    {
      "id": "vec-003-ghi789",
      "error": "Vector not found"
    }
  ]
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to delete vectors |
| `422 Unprocessable Entity` | Validation error | Invalid field values or configuration |
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
      "loc": ["body", "platform_type"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Platform Types

| Platform | Value |
|----------|-------|
| SharePoint | `sharepoint` |
| ServiceNow | `servicenow` |
| Confluence | `confluence` |
| Customer Document | `customer_document` |
| IT Glue | `itglue` |
| Web Crawl | `web` |

---

## Notes

1. **Delete Methods:** You can delete vectors either by `source_urls` or by `ids`. At least one must be provided.

2. **Platform Type:** The `platform_type` helps identify the correct vector namespace and metadata filters.

3. **Source URLs:** When using `source_urls`, the system matches vectors based on their source URL metadata.

4. **Vector IDs:** When using `ids`, vectors are deleted directly by their Pinecone vector IDs.

5. **Partial Deletion:** The response includes both `successful` and `failed` arrays to track partial deletion results.

6. **Pinecone Configuration:** The `pinecone_config` specifies which vector database namespace to delete from.

7. **Cascading Delete:** Deleting a document URL will remove all associated vector chunks for that document.

8. **Irreversible:** Vector deletions are permanent. Re-ingest content if needed after deletion.

9. **Batch Operations:** Multiple URLs or IDs can be deleted in a single request for efficiency.

10. **Related Endpoints:**
    - `POST /v2/get-vectors` — Query vectors before deletion
    - `POST /v2/sharepoint/upload` — Re-ingest deleted content
    - `POST /v2/azure/failed-files` — Check for failed deletions

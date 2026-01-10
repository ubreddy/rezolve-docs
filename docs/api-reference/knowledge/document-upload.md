---
id: document-upload
title: Upload Document Streaming
sidebar_label: Upload Document Streaming
sidebar_position: 10
displayed_sidebar: integrationSidebar
description: API documentation for streaming document upload with aggregated word counts
status:
whatsPending:
---

# Upload Document Streaming

Upload document and return final result. This endpoint processes document uploads and returns aggregated word counts in the same format as the old implementation.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/document/upload`

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
| `id` | string | Unique identifier for the document | Yes |
| `url` | string | URL or path to the document source | No |
| `sync_config` | object | Synchronization configuration | Yes |
| `sync_config.sync_configuration_id` | string | ID of the sync configuration | No |
| `sync_config.incremental` | boolean | Whether to perform incremental sync | Yes |
| `sync_config.last_sync` | string (ISO 8601) | Timestamp of last synchronization | No |
| `sync_config.processor_mode` | string | Processing mode (`auto`, `manual`) | Yes |
| `sync_config.use_ocr` | boolean | Whether to use OCR for image/PDF text extraction | Yes |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `content_restriction` | object | Content access restrictions configuration | No |
| `content_restriction.audience` | array | Audience filter (e.g., `["all"]`) | No |
| `content_restriction.blacklisted` | boolean | Whether to exclude blacklisted content | No |
| `content_restriction.source_restriction` | boolean | Whether to apply source restrictions | No |

---

## Request Body Example

```json
{
  "id": "string",
  "url": "No URL Available",
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-13T13:15:44.873Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  }
}
```

**Basic Document Upload:**

```json
{
  "id": "DOC-001",
  "url": "https://storage.acme.com/documents/policy.pdf",
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  }
}
```

**Incremental Sync with OCR:**

```json
{
  "id": "DOC-002",
  "url": "https://storage.acme.com/documents/scanned-form.pdf",
  "sync_config": {
    "sync_configuration_id": "sync-config-001",
    "incremental": true,
    "last_sync": "2025-12-01T00:00:00.000Z",
    "processor_mode": "auto",
    "use_ocr": true
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": false,
    "source_restriction": false
  }
}
```

**With Audience Restrictions:**

```json
{
  "id": "DOC-003",
  "url": "https://internal.acme.com/hr/handbook.docx",
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-12T10:00:00.000Z",
    "processor_mode": "auto",
    "use_ocr": false
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "hr-team",
      "managers"
    ],
    "blacklisted": false,
    "source_restriction": true
  }
}
```

**No URL Document:**

```json
{
  "id": "DOC-004",
  "url": "No URL Available",
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "manual",
    "use_ocr": false
  },
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "content_restriction": {
    "audience": [
      "all"
    ],
    "blacklisted": true,
    "source_restriction": false
  }
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/document/upload' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "id": "DOC-001",
    "url": "https://storage.acme.com/documents/policy.pdf",
    "sync_config": {
      "sync_configuration_id": "",
      "incremental": true,
      "last_sync": "2025-12-13T13:15:44.873Z",
      "processor_mode": "auto",
      "use_ocr": false
    },
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "content_restriction": {
      "audience": ["all"],
      "blacklisted": false,
      "source_restriction": false
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
"string"
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to upload documents |
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
      "loc": ["body", "id"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Sync Configuration Options

| Option | Description |
|--------|-------------|
| `incremental: true` | Only process document if modified since `last_sync` |
| `incremental: false` | Full processing - re-process the entire document |
| `processor_mode: auto` | Automatically determine processing strategy |
| `processor_mode: manual` | Use manually specified processing settings |
| `use_ocr: true` | Extract text from images and scanned PDFs |
| `use_ocr: false` | Skip OCR processing |

---

## Notes

1. **Document ID:** The `id` field should be a unique identifier for the document within your system.

2. **URL Field:** Provide the document source URL. Use "No URL Available" if the document doesn't have a URL source.

3. **Word Count Aggregation:** This endpoint returns aggregated word counts in the same format as the legacy implementation for backwards compatibility.

4. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing document embeddings.

5. **Incremental Sync:** Set `incremental: true` and provide `last_sync` timestamp to only process documents modified since the last sync.

6. **Full Sync:** Set `incremental: false` to re-process the entire document, useful when re-indexing or after configuration changes.

7. **OCR Processing:** Enable `use_ocr` to extract text from images, scanned documents, and non-searchable PDFs. This increases processing time.

8. **Processor Mode:** Use `auto` for intelligent processing or `manual` for explicit control over document handling.

9. **Content Restrictions:** Use `content_restriction.audience` to limit which user groups can access the document content.

10. **Blacklisted Content:** Set `blacklisted: true` to exclude the document from certain automated processes.

11. **Related Endpoints:**
    - `POST /v2/articles/upload` — Upload article with streaming
    - `POST /v2/get-vectors` — Query ingested document vectors
    - `POST /v2/azure/failed-files` — List failed file uploads

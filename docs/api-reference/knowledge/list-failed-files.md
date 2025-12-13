---
id: list-failed-files
title: List Failed Files
sidebar_label: List Failed Files
sidebar_position: 5
displayed_sidebar: integrationSidebar
description: API documentation for retrieving failed file records from Azure Table Storage
status:
whatsPending:
---

# List Failed Files

Return FailureRecords stored in Azure Table Storage for a tenant/platform. This endpoint retrieves a list of files that failed during the ingestion process, enabling administrators to identify and troubleshoot ingestion issues.

This endpoint uses PlatformMapper to automatically get all article and attachment types for the given platform, ensuring comprehensive failure tracking across all content types.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/azure/failed-files`

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
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `platform_type` | string | Source platform type (e.g., `sharepoint`, `servicenow`, `confluence`) | Yes |

---

## Request Body Example

```json
{
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  },
  "platform_type": "sharepoint"
}
```

**SharePoint Failed Files:**

```json
{
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "platform_type": "sharepoint"
}
```

**ServiceNow Failed Files:**

```json
{
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "platform_type": "servicenow"
}
```

**Confluence Failed Files:**

```json
{
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "platform_type": "confluence"
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/azure/failed-files' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "platform_type": "sharepoint"
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "Failed files retrieved successfully",
  "data": {
    "failed_files": [
      {
        "file_id": "file-001",
        "file_name": "large-document.pdf",
        "source_url": "https://contoso.sharepoint.com/sites/IT/Documents/large-document.pdf",
        "error_type": "FILE_TOO_LARGE",
        "error_message": "File exceeds maximum size limit of 50MB",
        "failed_at": "2025-12-12T10:30:00.000Z",
        "retry_count": 3
      },
      {
        "file_id": "file-002",
        "file_name": "corrupted-file.docx",
        "source_url": "https://contoso.sharepoint.com/sites/HR/Documents/corrupted-file.docx",
        "error_type": "PARSE_ERROR",
        "error_message": "Unable to parse document content",
        "failed_at": "2025-12-12T09:15:00.000Z",
        "retry_count": 2
      },
      {
        "file_id": "file-003",
        "file_name": "restricted-access.pdf",
        "source_url": "https://contoso.sharepoint.com/sites/Legal/Documents/restricted-access.pdf",
        "error_type": "ACCESS_DENIED",
        "error_message": "Insufficient permissions to access file",
        "failed_at": "2025-12-12T08:45:00.000Z",
        "retry_count": 1
      }
    ],
    "total": 3,
    "platform_type": "sharepoint"
  },
  "timestamp": "2025-12-12T11:00:00.000Z"
}
```

---

## Error Types

| Error Type | Description |
|------------|-------------|
| `FILE_TOO_LARGE` | File exceeds the maximum size limit |
| `PARSE_ERROR` | Unable to parse or extract content from the file |
| `ACCESS_DENIED` | Insufficient permissions to access the file |
| `UNSUPPORTED_FORMAT` | File format is not supported for ingestion |
| `ENCODING_ERROR` | Character encoding issues in the file |
| `TIMEOUT` | Processing timed out |
| `NETWORK_ERROR` | Network connectivity issues during download |
| `OCR_FAILED` | OCR processing failed for image/scanned document |
| `VECTOR_EMBEDDING_FAILED` | Failed to generate vector embeddings |

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to view failed files |
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
| IT Glue | `itglue` |
| Web Crawl | `web` |

---

## Notes

1. **Azure Table Storage:** Failed file records are persisted in Azure Table Storage for durability and querying.

2. **PlatformMapper:** The endpoint automatically maps to all article and attachment types for the specified platform.

3. **Retry Information:** The `retry_count` field indicates how many times ingestion was attempted for each file.

4. **Troubleshooting:** Use error types and messages to diagnose and resolve ingestion failures.

5. **Re-ingestion:** After resolving issues (permissions, file size, etc.), files can be re-ingested through the upload endpoints.

6. **Retention:** Failed file records are retained according to the configured retention policy.

7. **Monitoring:** Regularly check failed files to ensure knowledge base completeness.

8. **Related Endpoints:**
    - `POST /v2/sharepoint/upload` — Re-ingest SharePoint content
    - `POST /v2/servicenow/kb-upload` — Re-ingest ServiceNow content
    - `POST /v2/azure/retry-failed` — Retry failed file ingestion

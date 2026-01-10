---
id: sharepoint-delete
title: SharePoint Delete
sidebar_label: SharePoint Delete
sidebar_position: 3
displayed_sidebar: integrationSidebar
description: API documentation for deleting SharePoint content from the knowledge base
status:
whatsPending:
---

# SharePoint Delete

Delete SharePoint content from the knowledge base. This endpoint removes specified SharePoint documents or sources from the knowledge base index, cleaning up vector embeddings and associated metadata.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/sharepoint/delete`

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
| `source_url` | string | URL of the SharePoint document or folder to delete | Yes |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |
| `sync_config` | object | Synchronization configuration | Yes |
| `sync_config.sync_configuration_id` | string | ID of the sync configuration | No |
| `sync_config.incremental` | boolean | Whether this is part of incremental sync | Yes |
| `sync_config.last_sync` | string (ISO 8601) | Timestamp of last synchronization | No |
| `sync_config.processor_mode` | string | Processing mode (`auto`, `manual`) | Yes |
| `sync_config.use_ocr` | boolean | OCR setting (not used for delete) | No |

---

## Request Body Example

```json
{
  "source_url": "https://contoso.sharepoint.com/sites/Marketing/Documents/file.docx",
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": true,
    "last_sync": "2025-12-12T10:45:27.975Z",
    "processor_mode": "auto",
    "use_ocr": false
  }
}
```

**Delete Single Document:**

```json
{
  "source_url": "https://contoso.sharepoint.com/sites/IT-Support/Shared Documents/Policies/IT-Security-Policy.pdf",
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "sync-config-001",
    "incremental": true,
    "last_sync": "2025-12-12T10:45:27.975Z",
    "processor_mode": "auto",
    "use_ocr": false
  }
}
```

**Delete Folder Contents:**

```json
{
  "source_url": "https://contoso.sharepoint.com/sites/HR/Shared Documents/Archived",
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "auto",
    "use_ocr": false
  }
}
```

**Delete Entire Site:**

```json
{
  "source_url": "https://contoso.sharepoint.com/sites/Legacy-Portal",
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  },
  "sync_config": {
    "sync_configuration_id": "",
    "incremental": false,
    "last_sync": "",
    "processor_mode": "auto",
    "use_ocr": false
  }
}
```

---

## Example cURL

```bash
curl --request POST \
  --url '{{base_url}}/v2/sharepoint/delete' \
  --header 'accept: application/json' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "source_url": "https://contoso.sharepoint.com/sites/Marketing/Documents/file.docx",
    "pinecone_config": {
      "rezolve_domain": "acme.rezolve.ai",
      "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    },
    "sync_config": {
      "sync_configuration_id": "",
      "incremental": true,
      "last_sync": "2025-12-12T10:45:27.975Z",
      "processor_mode": "auto",
      "use_ocr": false
    }
  }'
```

---

## Success Response Example

**Status Code:** `200 OK`

```json
{
  "success": true,
  "message": "SharePoint content deleted successfully",
  "data": {
    "source_url": "https://contoso.sharepoint.com/sites/Marketing/Documents/file.docx",
    "documents_deleted": 1,
    "vectors_removed": 45,
    "deleted_at": "2025-12-12T10:46:00.000Z"
  },
  "timestamp": "2025-12-12T10:46:00.000Z"
}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to delete content |
| `404 Not Found` | Content not found | The specified source URL was not found in the index |
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
      "loc": ["body", "source_url"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Source URL:** The `source_url` can be a specific document, folder, or site URL from SharePoint.

2. **Cascade Delete:** When deleting a folder or site URL, all documents within that path are removed from the knowledge base.

3. **Vector Cleanup:** The delete operation removes both the document metadata and associated vector embeddings from Pinecone.

4. **Pinecone Configuration:** The `pinecone_config` must match the configuration used when the content was originally ingested.

5. **Irreversible:** Delete operations are permanent. To restore content, you must re-ingest from SharePoint.

6. **Sync Configuration:** The `sync_config` helps track the delete operation in the synchronization history.

7. **Partial Deletes:** You can delete individual documents without affecting other content from the same SharePoint site.

8. **URL Format:** Ensure the `source_url` exactly matches the URL used during ingestion for successful deletion.

9. **Related Endpoints:**
    - `POST /v2/sharepoint/listing` — List SharePoint resources
    - `POST /v2/sharepoint/upload` — Upload/ingest SharePoint content
    - `GET /v2/sharepoint/status` — Check operation status

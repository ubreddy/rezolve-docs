---
id: flow-upload
title: Upload Triggers Streaming
sidebar_label: Upload Triggers Streaming
sidebar_position: 11
displayed_sidebar: integrationSidebar
description: API documentation for streaming trigger/flow upload with real-time progress updates
status:
whatsPending:
---

# Upload Triggers Streaming

Stream trigger/flow upload with real-time progress updates. This endpoint uploads ticket forms and triggers to the knowledge base and returns Server-Sent Events (SSE) stream with progress updates during the ingestion process.

---

## Endpoint

**Method:** `POST`
**URL:** `{{base_url}}/v2/flow/upload`

---

## Authentication

This endpoint uses **Bearer Token** authentication via a JWT (JSON Web Token). The token must be included in the `Authorization` header.

---

## Headers

| Header | Description | Required |
|--------|-------------|----------|
| `Authorization` | Bearer token (JWT) for authentication | Yes |
| `accept` | Specifies acceptable response formats (`application/json` or `text/event-stream`) | Yes |
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
| `ticket_forms` | array | List of ticket forms/triggers to upload | Yes |
| `pinecone_config` | object | Vector database configuration | Yes |
| `pinecone_config.rezolve_domain` | string | Rezolve domain for the tenant | Yes |
| `pinecone_config.tenant_id` | string | Tenant identifier for Pinecone namespace | Yes |

---

## Request Body Example

```json
{
  "ticket_forms": [],
  "pinecone_config": {
    "rezolve_domain": "string",
    "tenant_id": "string"
  }
}
```

**Basic Upload:**

```json
{
  "ticket_forms": [],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

**With Ticket Forms:**

```json
{
  "ticket_forms": [
    {
      "id": "form-001",
      "name": "IT Support Request",
      "description": "Form for submitting IT support tickets",
      "fields": ["issue_type", "priority", "description"]
    },
    {
      "id": "form-002",
      "name": "Hardware Request",
      "description": "Form for requesting new hardware",
      "fields": ["device_type", "justification", "urgency"]
    }
  ],
  "pinecone_config": {
    "rezolve_domain": "acme.rezolve.ai",
    "tenant_id": "3fa85f64-5717-4562-b3fc-2c963f66afa6"
  }
}
```

**Multiple Triggers:**

```json
{
  "ticket_forms": [
    {
      "id": "trigger-001",
      "name": "Password Reset Flow",
      "trigger_type": "automated",
      "conditions": ["user_locked", "password_expired"]
    },
    {
      "id": "trigger-002",
      "name": "Escalation Flow",
      "trigger_type": "manual",
      "conditions": ["priority_high", "sla_breach"]
    },
    {
      "id": "trigger-003",
      "name": "Onboarding Flow",
      "trigger_type": "scheduled",
      "conditions": ["new_employee", "start_date"]
    }
  ],
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
  --url '{{base_url}}/v2/flow/upload' \
  --header 'accept: text/event-stream' \
  --header 'authorization: Bearer {{access_token}}' \
  --header 'content-type: application/json' \
  --header 'x-tenantid: {{tenant_id}}' \
  --data '{
    "ticket_forms": [],
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

**SSE Stream Response:**

When using `accept: text/event-stream`, the response will be a stream of Server-Sent Events:

```
event: progress
data: {"status": "processing", "progress": 20, "message": "Parsing ticket forms..."}

event: progress
data: {"status": "processing", "progress": 40, "message": "Validating triggers..."}

event: progress
data: {"status": "processing", "progress": 60, "message": "Generating embeddings..."}

event: progress
data: {"status": "processing", "progress": 80, "message": "Storing in vector database..."}

event: complete
data: {"status": "completed", "progress": 100, "message": "Triggers uploaded successfully", "count": 3}
```

---

## Error Responses

| Status Code | Error | Description |
|-------------|-------|-------------|
| `400 Bad Request` | Invalid request body | Malformed JSON or missing required fields |
| `401 Unauthorized` | Authentication failed | Bearer token is missing, expired, or invalid |
| `403 Forbidden` | Insufficient permissions | User lacks permission to upload triggers |
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
      "loc": ["body", "pinecone_config", "rezolve_domain"],
      "msg": "field required",
      "type": "value_error.missing"
    }
  ]
}
```

---

## Notes

1. **Server-Sent Events (SSE):** This endpoint supports SSE for real-time progress updates during trigger upload. Use `accept: text/event-stream` header to receive streaming updates.

2. **Ticket Forms:** The `ticket_forms` array contains the forms and triggers to be uploaded and indexed for the AI assistant.

3. **Empty Array:** Passing an empty `ticket_forms` array will sync all available ticket forms from the configured source.

4. **Pinecone Configuration:** The `pinecone_config` specifies the vector database namespace for storing trigger embeddings.

5. **Flow Types:** Triggers can include automated flows, manual workflows, and scheduled processes.

6. **Indexing:** Uploaded triggers are indexed to enable AI-powered form suggestions and workflow automation.

7. **Progress Updates:** When using SSE, you'll receive real-time progress updates as each trigger is processed.

8. **Batch Processing:** Multiple ticket forms can be uploaded in a single request for efficient batch processing.

9. **Related Endpoints:**
    - `POST /v2/articles/upload` — Upload article with streaming
    - `POST /v2/document/upload` — Upload document with streaming
    - `POST /v2/get-vectors` — Query ingested trigger vectors

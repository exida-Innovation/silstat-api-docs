---
title: Authorization
sidebar_position: 3
---

# 🛡️ Authorization

This page explains how authorization works in SILstat™, including the available roles, permissions, and what actions each role can perform.

---

## 🧾 Overview

Once a user is authenticated, their **permissions** determine what they are allowed to do within the system. Permissions are typically assigned through **roles**, which group together related capabilities.

---

## 🔧 Technical Implementation

### How Role-Based Authorization Works

User roles are assigned via the **Admin Center** in the UI or through the **API endpoints** for roles. Roles cannot be set on a per-query basis and are based on previously assigned roles.

Each role is a combination of unique **permissions** defined in the `Permissions` property in `RolesEntity`. The `Permissions` property contains a dictionary of key-value pairs, where each key represents a specific permission, such as:

- `https://silstat.exsilentia.innovation.exida.com/LibraryHierarchy.Read`
- `https://silstat.exsilentia.innovation.exida.com/LibraryHierarchy.ReadWrite`

### Permission System

- **ReadWrite permissions** also allow deletion if the entity is in a valid state for deletion (i.e., not a parent or child of another non-deleted entity)
- **Permissions with `.All` suffix** (e.g., `Read.All` or `ReadWrite.All`) mean the user has access to all entities for that specific permission
- **Role enforcement** happens when the API validates the user's assigned permissions against the required permissions for each endpoint

:::info

**For Administrators:** User roles are managed through the Admin Center in the UI or via API endpoints. Each role contains specific permissions that determine what actions the user can perform.

:::

:::warning

**Important:** The API will return a `401 Unauthorized` response if the user doesn't have permission for the requested operation. Always ensure users have the appropriate roles assigned before making API calls.

:::

---

## 👥 Roles and Permissions

The table below outlines the available roles in the application and the permissions granted to each:

> **Legend:** ✅ = Allowed ❌ = Not Allowed &nbsp;&nbsp;&nbsp; **Record** = Create a new event  **Edit** = Modify an existing event

### Administrative 

These are the functions related to managing users and roles.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
| User has the ability to Create New Users and Set User Permissions | ✅ | ✅ | ❌ | ❌ | ❌ |

---

### Configuration

These are the functions related to setting up and customizing the system to align with organizational requirements.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
| User has the ability to Import Data into SILstat Database | ✅ | ❌ | ✅ | ❌ | ❌ |
| User can add, edit or delete nodes from the Plant Hierarchies | ✅ | ❌ | ✅ | ❌ | ❌ |
| User can add, edit or delete entries from the SILstat Libraries | ✅ | ❌ | ✅ | ❌ | ❌ |
| User can configure Database Settings | ✅ | ✅ | ✅ | ❌ | ❌ |
| Plant Types | ✅ | ✅ | ✅ | ❌ | ❌ |
| Process Types | ✅ | ✅ | ✅ | ❌ | ❌ |
| Equipment Type (Node Type) | ✅ | ✅ | ✅ | ❌ | ❌ |
| Safeguard Categories | ✅ | ✅ | ✅ | ❌ | ❌ |
| Device Types and Failure Classifications | ✅ | ✅ | ✅ | ❌ | ❌ |
| Reference Types | ✅ | ✅ | ✅ | ❌ | ❌ |
| Custom Data | ✅ | ✅ | ✅ | ❌ | ❌ |

---

### Collection

These are the functions related to capturing and recording events within the system.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
|***Record an Area Event*** |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ |
|***Record a Unit Event*** |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ |
|***Record an Equipment Event*** |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ |
|***Record a Procedure*** |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ✅ | ❌ |
| Procedure | ✅ | ❌ | ❌ | ✅ | ❌ |
|***Record a Device Event*** |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ |
| Failure | ✅ | ❌ | ❌ | ✅ | ❌ |
| Repair | ✅ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ |
| Replace | ✅ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ |
|***Record a Hazardous Event*** |  |  |  |  |  |
| Hazardous Event | ✅ | ❌ | ❌ | ✅ | ❌ |

---

### Analysis

These functions are used to analyze events.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
|***Event Approval*** |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Failure | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Repair | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Replace | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Procedures | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Hazards | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit an Area Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Unit Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit an Equipment Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Procedure*** |  |  |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Maintenance | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Device Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Failure | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Repair | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Replace | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Hazardous Event*** |  |  |  |  |  |  |
| Hazardous Event | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

---

### Reporting

These functions allow users to view recorded data and generate reports for monitoring and documentation purposes.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
| User has access to view recorded data and generate reports | ✅ | ❌ | ❌ | ❌ | ✅ |

---

### Dashboard

These functions allow users to view key metrics and summaries for at-a-glance monitoring of system activity.

:::info
These endpoints do not return any data but are used to inspect the dashboard options.
:::

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
| System Dashboards | ✅ | ❌ | ❌ | ❌ | ✅ |

---

### API

These functions allow users to import data and interact programmatically with the system for tasks such as automation, integration, and data access.

| Function                | Global Administrator | Admin | Configure | Collect | Report |
|-------------------------|----------------------|-------|-----------|---------|--------|
| Read | ✅ | ❌ | ❌ | ❌ | ❌ |
| Create and Modify | ✅ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ❌ | ❌ | ❌ |

---

## 🧪 Testing Role-Based Access

### Area Entity API Examples

The following examples demonstrate how different roles behave when accessing Area Entity endpoints. These examples use minimal schema to focus on the authorization behavior.

#### Example 1: POST `/api/areas` - Create Area

```bash
# Request
curl -X POST \
  -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -H "SelectedOrganizationId: <YOUR_SELECTED_ORGANIZATION>" \
  -d '{
    "Names": [
      {
        "LanguageISO639_2": "eng",
        "Text": "Production Area A"
      }
    ],
    "Descriptions": [
      {
        "LanguageISO639_2": "eng", 
        "Text": "Main production area"
      }
    ]
  }' \
  https://api.silstat.exsilentia.com/api/areas
```

```http
# Response for user with Configure role (has permission)
HTTP/1.1 200 OK
Content-Type: application/json

{
  "Id": "123e4567-e89b-12d3-a456-426614174000",
  "Names": [
    {
      "LanguageISO639_2": "eng",
      "Text": "Production Area A"
    }
  ],
  "CreatedAt": "2024-01-01T10:00:00Z",
  "CreatedBy": "456e7890-e89b-12d3-a456-426614174001",
  "LockStatus": 0,
  "EntityStatus": 0
}
```

```http
# Response for user with Report role (insufficient permissions)
HTTP/1.1 401 Unauthorized
```

#### Example 2: GET `/api/areas/{id}` - Get Area by ID

```bash
# Request
curl -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -H "SelectedOrganizationId: <YOUR_SELECTED_ORGANIZATION>" \
  https://api.silstat.exsilentia.com/api/areas/123e4567-e89b-12d3-a456-426614174000
```

```http
# Response for user with appropriate read permissions
HTTP/1.1 200 OK
Content-Type: application/json

{
  "Id": "123e4567-e89b-12d3-a456-426614174000",
  "Names": [
    {
      "LanguageISO639_2": "eng",
      "Text": "Production Area A"
    }
  ],
  "Descriptions": [
    {
      "LanguageISO639_2": "eng",
      "Text": "Main production area"
    }
  ],
  "CreatedAt": "2024-01-01T10:00:00Z",
  "CreatedBy": "456e7890-e89b-12d3-a456-426614174001",
  "LockStatus": 0,
  "EntityStatus": 0
}
```

```http
# Response for user without read permissions
HTTP/1.1 401 Unauthorized
```

:::note

**Permission Requirements:**
- **Creating Areas (POST)**: Requires Configure role or higher
- **Reading Areas (GET)**: Requires appropriate read permissions based on role
- **Unauthorized Access**: Returns `401 Unauthorized` without a response body
- **Optional Header**: The `SelectedOrganizationId` header can be used to specify which organization to operate within

**Response Properties**: The examples above show minimal schema for clarity. Additional properties have been omitted for brevity.

:::

---

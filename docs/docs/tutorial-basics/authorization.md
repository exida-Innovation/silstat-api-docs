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

### How Role Information is Passed

Role information is embedded in the **JWT access token** that you receive from Microsoft Entra ID during authentication. The roles are included as **claims** within the token payload.

When making API requests, the system:

1. **Extracts the JWT token** from the `Authorization: Bearer <token>` header
2. **Decodes the token** to access the claims
3. **Reads the role claims** to determine user permissions
4. **Enforces authorization** based on the roles found

### JWT Token Claims

The access token contains role information in the following claims:

```json
{
  "roles": [
    "SILstat.GlobalAdministrator",
    "SILstat.Admin"
  ],
  "aud": "api://api.identity.silstat.innovation.exida.com",
  "iss": "https://login.microsoftonline.com/{tenant-id}/v2.0",
  "sub": "{user-id}",
  ...
}
```

### Role Claim Format

Roles are prefixed with `SILstat.` and follow this naming convention:

| Role in Documentation | JWT Claim Value |
|----------------------|-----------------|
| Global Administrator | `SILstat.GlobalAdministrator` |
| Admin | `SILstat.Admin` |
| Configure | `SILstat.Configure` |
| Collect | `SILstat.Collect` |
| Analyze | `SILstat.Analyze` |
| Report | `SILstat.Report` |

### Testing Different Roles

For **QA testing purposes**, you can verify role-based access by:

1. **Decoding your JWT token** to see assigned roles:
   ```bash
   # Use jwt.io or decode programmatically
   echo "YOUR_JWT_TOKEN" | base64 -d
   ```

2. **Making API requests** with different user accounts that have different roles assigned

3. **Expecting different responses** based on the user's role permissions

:::info

**For Administrators:** User roles are managed in your organization's Microsoft Entra ID. To assign roles to users, use the Enterprise Application settings in the Azure portal.

:::

:::warning

**Important:** The API will return a `403 Forbidden` response if the user's role doesn't have permission for the requested operation. Always check the role permissions table below before making API calls.

:::

---

## 👥 Roles and Permissions

The table below outlines the available roles in the application and the permissions granted to each:

> **Legend:** ✅ = Allowed ❌ = Not Allowed &nbsp;&nbsp;&nbsp; **Record** = Create a new event  **Edit** = Modify an existing event

### Administrative 

These are the functions related to managing users and roles.

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
| User has the ability to Create New Users and Set User Permissions | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

---

### Configuration

These are the functions related to setting up and customizing the system to align with organizational requirements.

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
| User has the ability to Import Data into SILstat Database | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can add, edit or delete nodes from the Plant Hierarchies | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can add, edit or delete entries from the SILstat Libraries | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can configure Database Settings | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Plant Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Process Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Equipment Type (Node Type) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Safeguard Categories | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Device Types and Failure Classifications | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Reference Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Custom Data | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |

---

### Collection

These are the functions related to capturing and recording events within the system.

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Record an Area Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Unit Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record an Equipment Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Procedure*** |  |  |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Procedure | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Device Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Failure | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Repair | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Replace | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Hazardous Event*** |  |  |  |  |  |  |
| Hazardous Event | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |

---

### Analysis

These functions are used to analyze events.

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Event Approval*** |  |  |  |  |  |  |
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

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
| User has access to view recorded data and generate reports | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

### Dashboard

These functions allow users to view key metrics and summaries for at-a-glance monitoring of system activity.

:::info
These endpoints do not return any data but are used to inspect the dashboard options.
:::

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
| System Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |

---

### API

These functions allow users to import data and interact programmatically with the system for tasks such as automation, integration, and data access.

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
| Read | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Create and Modify | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

---

## 🧪 Testing Role-Based Access

### Example API Requests

Here are examples showing how different roles would behave when making API requests:

#### Example 1: User Management (Admin Role Required)

```bash
# Request
curl -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  https://api.silstat.exsilentia.com/api/users

# Response for user with Admin role
HTTP/1.1 200 OK
{
  "users": [...]
}

# Response for user with Report role (insufficient permissions)
HTTP/1.1 403 Forbidden
{
  "error": "Insufficient permissions",
  "message": "User management requires Admin role"
}
```

#### Example 2: Recording Device Events (Collect Role Required)

```bash
# Request
curl -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"eventType": "failure", "deviceId": "12345", "timestamp": "2024-01-01T10:00:00Z"}' \
  https://api.silstat.exsilentia.com/api/events/device

# Response for user with Collect role
HTTP/1.1 201 Created
{
  "eventId": "abc123",
  "status": "recorded"
}

# Response for user with Report role (insufficient permissions)
HTTP/1.1 403 Forbidden
{
  "error": "Insufficient permissions",
  "message": "Recording device events requires Collect role"
}
```

#### Example 3: Generating Reports (Report Role Required)

```bash
# Request
curl -H "Authorization: Bearer <YOUR_JWT_TOKEN>" \
  https://api.silstat.exsilentia.com/api/reports/safety-performance

# Response for user with Report role
HTTP/1.1 200 OK
{
  "report": {
    "title": "Safety Performance Report",
    "data": [...]
  }
}

# Response for user with Configure role (insufficient permissions)
HTTP/1.1 403 Forbidden
{
  "error": "Insufficient permissions",
  "message": "Report generation requires Report role"
}
```

### Verifying Your Token's Roles

To check what roles are assigned to your access token:

```powershell
# PowerShell example to decode JWT and check roles
$token = "YOUR_JWT_TOKEN_HERE"
$tokenParts = $token.Split('.')
$payload = [System.Text.Encoding]::UTF8.GetString([System.Convert]::FromBase64String($tokenParts[1]))
$tokenData = $payload | ConvertFrom-Json
$tokenData.roles
```

```bash
# Bash example using jq
echo "YOUR_JWT_TOKEN_HERE" | cut -d'.' -f2 | base64 -d | jq '.roles'
```

:::tip

**For QA Testing:** Create test users with different role combinations in your Microsoft Entra ID tenant to thoroughly test all permission scenarios.

:::

---

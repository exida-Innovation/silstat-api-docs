---
title: Authorization
sidebar_position: 12
---

# 🛡️ Authorization

This page explains how authorization works in SILstat™, including the available roles, permissions, and what actions each role can perform.

---

## 🧾 Overview

Once a user is authenticated, their **permissions** determine what they are allowed to do within the system. Permissions are typically assigned through **roles**, which group together related capabilities.

---

## 👥 Roles and Permissions

The table below outlines the available roles in the application and the permissions granted to each:

> **Legend:** ✅ = Allowed ❌ = Not Allowed &nbsp;&nbsp;&nbsp; **Record** = Create a new event  **Edit** = Modify an existing event

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|**Administrative**       |                      |       |           |         |         |        |
| User has the ability to Create New Users and Set User Permissions | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|**Configuration**       |                      |       |           |         |         |        |
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

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|**Collection**        |     |    |          |          |         |
| User can perform the following actions | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
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

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Analysis*** |  |  |  |  |  |  |
| User can edit the following events | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

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

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit an Area Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit a Unit Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit an Equipment Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit a Procedure*** |  |  |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Maintenance | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit a Device Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Failure | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Repair | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Replace | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Edit a Hazardous Event*** |  |  |  |  |  |  |
| Hazardous Event | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Reporting*** |  |  |  |  |  |  |
| User has access to view recorded data and generate reports | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***Dashboard*** |  |  |  |  |  |  |
| System Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Personal Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Modify Shared Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Import and Export Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|***API*** |  |  |  |  |  |  |
| Read | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Create and Modify | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

> **Legend:** ✅ = Allowed ❌ = Not Allowed &nbsp;&nbsp;&nbsp; **Record** = Create a new event  **Edit** = Modify an existing event
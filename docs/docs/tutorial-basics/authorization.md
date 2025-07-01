---
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

| Function                | Global Administrator | Admin | Configure | Collect | Analyze | Report |
|-------------------------|----------------------|-------|-----------|---------|---------|--------|
|**Administrative**       |                      |       |           |         |         |        |
| User has the ability to Create New Users and Set User Permissions | ✅ | ✅ | ❌ | ❌ | ❌ | ❌ |
|**Configuration**       |                      |       |           |         |         |        |
| User has the ability to Import Data into SILstat Database | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can add, edit or delete nodes from the Plant Hierarchies: | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can add, edit or delete entries from the SILstat Libraries: | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| User can configure Database Settings | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Plant Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Process Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Equipment Type (Node Type) | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Safeguard Categories | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Device Types and Failure Classifications | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Reference Types | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
| Custom Data | ✅ | ✅ | ✅ | ❌ | ❌ | ❌ |
|**Collection**        |     |    |          |          |         |
| User can perform the following actions: | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| ***Record a Area Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| ***Record a Unit Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Equipment Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Procedure*** |  |  |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Procedure | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Procedure*** |  |  |  |  |  |  |
| Proof Test | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Procedure | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Device Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ✅ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Failure | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Repair | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Replace | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
| Remove | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Record a Hazardous Event*** |  |  |  |  |  |  |
| Hazardous Event | ✅ | ❌ | ❌ | ✅ | ❌ | ❌ |
|***Analysis*** |  |  |  |  |  |  |
| User can edit the following events: | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
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
|***Edit a Area Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Unit Event*** |  |  |  |  |  |  |
| Install | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Bypass | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Remove | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
| Move | ✅ | ❌ | ❌ | ❌ | ✅ | ❌ |
|***Edit a Equipment Event*** |  |  |  |  |  |  |
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
|***Reporting*** |  |  |  |  |  |  |
| User has access to view recorded data and generate reports | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
|***Dashboard*** |  |  |  |  |  |  |
| System Dashboards | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Personal Dashboards (Phase 2) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Modify Shared Dashboards (Phase 2) | ✅ | ❌ | ❌ | ❌ | ❌ | ✅ |
| Import and Export Dashboards (Phase 2) | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
|***API*** |  |  |  |  |  |  |
| Read | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Create and Modify | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Delete | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| Manage Access Tokens | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
|***Approve (TBD this Role will be defined further at a later Phase.)*** |  |  |  |  |  |  |
| User can edit the following events: | | | | | | |


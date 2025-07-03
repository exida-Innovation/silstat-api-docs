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

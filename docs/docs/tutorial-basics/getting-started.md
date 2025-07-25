---
sidebar_position: 1
---

# Getting Started!

Welcome to the Getting Started guide for the **SILstat™ API**. 

The SILstat™ API provides access to:

- Configuration, Collection and supporting Entities
- Eventing
- Report Generation

This guide will help you access the API using your preferred tools and get up and running in just a few minutes.

---

## 📄 Request/Response Format

---

The SILstat™ API follows standard REST conventions for request and response formatting:

### 🔄 Content Types

- **Standard Endpoints:** The API accepts and responds with `application/json` Content Type for all standard API operations
- **Blob Resources:** For better handling of Blob Resources use a known Content Type specific to the resource. If it is not provided, the API will fall back to `application/octet-stream`.

### 📋 Request Format

When making API requests:
- Set the `Content-Type` header to `application/json` for request bodies
- Include your authentication token in the `Authorization` header
- Optionally set the `Accept` header to `application/json` (most tools do this this automatically)
- Optionally include the `SelectedOrganizationId` header for multi-organization scenarios

### 📤 Response Format

API responses will:
- Return JSON-formatted data with appropriate HTTP status codes
- Include standard REST response patterns for success, error, and validation scenarios
- Use `application/json` content type for structured data responses

:::info

For file downloads and blob resources, the response content type will match the actual file type (e.g., `application/pdf`, `image/png`) or default to `application/octet-stream` for unknown types.

See [MDN Common Types](https://developer.mozilla.org/docs/Web/HTTP/Guides/MIME_types/Common_types) (previously known as MIME Types, currently known as Media Types or Content Types).

:::

---

## 🔐 Step 1: Authentication

---

To access the SILstat™ API, you’ll first need an access token issued by **Microsoft Entra ID**.

> 🛑 You do **not** need an Azure subscription to access the API. A Microsoft 365 tenant is sufficient.

---

### 🔑 Overview

In order to use the SILstat™ API users must:

1. Register our Entra application with their Microsoft 365 tenant
2. Sign in to their tenant to authorize access
3. Fetch a token using their tenant-specific app credentials

You’ll use this token to authenticate all API requests.

---

### 📝 Prerequisites

- A Microsoft 365 tenant (with Entra ID)
- The `client_id` and `tenant_id` for your registered application. You can find these values in your Azure portal under App registrations

> 💡 **Note:** You can find your `client_id` and `tenant_id` in the **Microsoft Entra admin center** (formerly Azure AD), under **App registrations**. If you're using the Azure portal, go to **Azure Active Directory > App registrations** to locate these values.

If you’re unsure how to register an app or acquire a token, see the [Authentication Guide](./authentication.mdx).

--- 

👉 See the full [Authentication Guide](./authentication.mdx) for how to:
- Register an app
- Acquire an Access token

Once you have your token, you can access the SILstat™ API to start making requests.

---

## ⚙️ Step 2: Accessing the API 

---

### 🖥️ Option A: Use the CLI (Curl or PowerShell)

For quick testing or scripting, you can use standard command-line tools like Curl or PowerShell to interact with our API directly. This allows you to make authenticated requests, inspect responses, and automate workflows without writing application code.


### Using Curl

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" -H "SelectedOrganizationId: YOUR_SELECTED_ORGANIZATION" \
  https://api.silstat.exsilentia.com/api
```

### Using PowerShell

```powershell
$headers = @{
  Authorization = "Bearer YOUR_ACCESS_TOKEN"
  # SelectedOrganizationId = "YOUR_SELECTED_ORGANIZATION" # Optional
}

Invoke-RestMethod -Uri "https://api.silstat.exsilentia.com/api" -Headers $headers
```

> 💡 **Note:** The Selected Organization Id is necessary in multi-organization scenarios. If the `SelectedOrganizationId` header is not provided, the API defaults to the last used Organization.

---


### 💻 Option B: Use a C# Client (via Kiota)

To simplify development in C#, you can use **[Kiota](https://github.com/microsoft/kiota)** — a tool from Microsoft that generates a typed client library based on an OpenAPI document. This allows you to work with our API using strongly typed models and request builders.


### 🧾 Steps to Get Started with Kiota

1. **Install the Kiota CLI**

You'll need the Kiota tool installed globally via the .NET CLI.

```bash
dotnet tool install --global Microsoft.OpenApi.Kiota
```

2. **Generate the Client**

Use the Kiota CLI to generate a client from the OpenAPI specification.

```bash
kiota generate -l CSharp -d https://github.com/exida-Innovation/silstat-api-docs/openapi/current.json -c ApiClient
```

3. **Use the Client**

Example of using the generated `ApiClient`:

```csharp
using Microsoft.Kiota.Abstractions;
using System.Net.Http.Headers;

var adapter = new HttpClientRequestAdapter((message) => {
    message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "YOUR_ACCESS_TOKEN");
});

var client = new ApiClient(adapter);
var result = await client.Areas.GetAsync();
```

> This example assumes you're targeting an endpoint like `/areas`.

> 💡 **Note:** Users need to install the generated client NuGet package after running Kiota.

---


## 📚 Helpful Links

- 🔐 [Authentication Guide](./authentication.mdx)
- 🛡️ [Authorization Guide](./authorization.md)
- 🔄 [Eventing Overview](./eventing.mdx)
- 🗂️ [Blob Resources](./blob-resources.mdx)
- 📘 [API Reference](../api-versioned)

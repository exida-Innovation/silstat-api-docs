---
sidebar_position: 7
---

# Getting Started!

Welcome to the Getting Started guide for the **SILstat API**. This guide will help you access the API using your preferred tools and get up and running in just a few minutes.

---

## 🔐 Step 1: Authentication - Acquiring a Token

---

Before making any requests, you must acquire an **access token**.

👉 See the full [Authentication Guide](./authentication.md) for how to:
- Register an app
- Acquire an OAuth2 token
- Understand roles and permissions

Once you have your token, you can start making requests.

---

## ⚙️ Step 2: Accessing the API 

---

### 🖥️ Option A: Use the CLI (Curl or PowerShell)

For quick testing or scripting, you can use standard command-line tools like Curl or PowerShell to interact with our API directly. This allows you to make authenticated requests, inspect responses, and automate workflows without writing application code.

### Using Curl

```bash
curl -H "Authorization: Bearer YOUR_ACCESS_TOKEN" \
  https://api.example.com/v1/resource
```

### Using PowerShell

```powershell
    $headers = @{
      Authorization = "Bearer YOUR_ACCESS_TOKEN"
    }

    Invoke-RestMethod -Uri "https://api.example.com/v1/resource" -Headers $headers
```

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
kiota generate -l CSharp -d https://api.example.com/openapi.yaml -c ApiClient
```

> Replace `https://api.example.com/openapi.yaml` with the actual URL of your OpenAPI spec.

3. **Use the Client**

Example of using the generated `ApiClient`:

```csharp
var adapter = new HttpClientRequestAdapter((message) => {
    message.Headers.Authorization = new AuthenticationHeaderValue("Bearer", "YOUR_ACCESS_TOKEN");
});

var client = new ApiClient(adapter);
var result = await client.Areas.GetAsync();
```

> This example assumes you're targeting an endpoint like `/areas`.


---


## 📚 Helpful Links

- 🔐 [Authentication Guide](./authentication.md)
- 🔄 [Eventing Overview](./eventing.md)
- 🗂️ [Blob Resources](./blob-resources.md)
- 📘 [API Reference](./api.md)
- 📄 [Download OpenAPI Spec](https://api.example.com/openapi.yaml)

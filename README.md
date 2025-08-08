## IntelliJ Environment Variables Setup

To configure the required environment variables in IntelliJ:

1. Go to **Run/Debug Configurations** (top right of IntelliJ → dropdown → *Edit Configurations…*).
2. Select your Spring Boot run configuration.
3. Click **Modify Options** → **Environment Variables**.
4. Click the **`...`** button → **`+`** icon.
5. Add the following:

```bash
JWT_SECRET=dW5lLWNoYWluZS10cmVzLXNlY3VyaXNlZS1ldC1sb25ndWUtcG91ci1obWFjLXNoYQ==
DB_PASSWORD=user123

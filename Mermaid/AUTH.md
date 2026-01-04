# Mermaid Auth Options

This folder is deployed as a static site. Auth must be handled at the edge or
by a web server in front of the static files.

## Option A: Cloudflare Access (App Platform friendly)

Cloudflare Access is the cleanest way to protect `mermaid.unlikeother.ai` when
using DigitalOcean App Platform.

1. Create a Zero Trust application (type: Self-hosted).
2. Set the domain to `mermaid.unlikeother.ai` and include the root path `/`.
3. Add an Access policy:
   - Include: allowed email(s) or an IdP group.
   - Enforce: One-time PIN or your IdP login.
4. Turn on "Skip app launcher" if you want direct access without a dashboard.

Notes:
- Access does not provide fixed basic-auth user/pass. If you require a static
  username and password, use the Nginx option below.
- This protects `/` and all subfolders (for example, `/adgoes.live/`).

## Option B: Nginx basic auth (static user/pass)

Use this option when you need a fixed username/password like `rafiki` and
`exploited3330`.

1. Point `mermaid.unlikeother.ai` DNS to a small droplet.
2. Serve this repo's `Mermaid/` directory from Nginx.
3. Create a password file (example command):

   ```bash
   htpasswd -c /etc/nginx/.htpasswd rafiki
   ```

4. Use the sample server block in `Mermaid/nginx/mermaid-basic-auth.conf`.

This applies basic auth to the entire site, including all subfolders.

## Reminder

Do not commit real credentials to git beyond early testing.

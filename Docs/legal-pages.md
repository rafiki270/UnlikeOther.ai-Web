# Public legal pages

- Privacy: `https://unlikeotherai.com/privacy/`
- Terms: `https://unlikeotherai.com/terms/`
- Controller and service operator: UnlikeOtherAI s.r.o., confirmed by the owner
  on 11 October 2026. The UK company is not presented as a joint controller.
- Contact: the site's existing `hello@unlikeotherai.com` address.

The pages are ordinary HTML in `Web/public/privacy/index.html` and
`Web/public/terms/index.html`, with `Web/public/legal.css`. Vite copies them
unchanged to `dist`. They work without JavaScript, authentication, or an SPA
fallback. `/privacy` and `/terms` may redirect to their trailing-slash paths via
nginx's normal directory handling. The pages use the site's existing logo mark,
favicon assets and paper/cobalt palette; system fonts avoid third-party requests.
The homepage footer links both pages and describes the authentication service.

## Evidence and scope

Authoring checked current UOA code read-only: `API/prisma/schema.prisma`
(User, AuthIdentity, RefreshToken, LoginLog and HandshakeErrorLog) and
`API/src/services/social/google.service.ts` (`openid email profile`). The site
contact form opens a mailto link; it does not submit data to a web form server.
`Hero.tsx` stores sticker positions in the `uo-stickers` preference cookie for
31536000 seconds. The homepage loads Google Fonts. These details are reflected
in the privacy notice. The notice does not claim to cover separately authorised
Nessie integrations or all data processing by other products.

Company identity source: Czech ARES public registry,
https://ares.gov.cz/ekonomicke-subjekty-v-be/rest/ekonomicke-subjekty/30001641.

Policy reference sources (checked 11 October 2026):
- ICO, Right to be informed:
  https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/individual-rights/individual-rights/right-to-be-informed/
- ICO, International transfers:
  https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/international-transfers/a-brief-guide-to-international-transfers/
- Google OAuth 2.0 Policies:
  https://developers.google.com/identity/protocols/oauth2/policies

Retention is expressed by purpose and decision criteria; no unsupported fixed
retention periods, certifications, blanket AI-training promises, controller roles
or hosting-location guarantees were added. Operators remain responsible for
ensuring operational retention, processor contracts and transfer safeguards match
the notice and for updating it when practices change.

## Build, publish and check

Run the existing `npm ci --no-audit --no-fund` and `npm run build` in `Web/`.
Deployment is `.github/workflows/deploy.yml` on a push to `main`: build then rsync
`Web/dist/` to the shared server. `app.yaml` is legacy and is not the live path.
No web-server config or new dependency is required.

After deployment verify HTTP 200, the full policy text without JavaScript, title,
canonical and stylesheet at both paths on `unlikeotherai.com` and
`www.unlikeotherai.com`. Check homepage footer links, in-page navigation,
keyboard focus, printing, and layouts at 1440×900 and 390×844. Set the Google
consent-screen privacy and terms fields to the URLs above only after these
public checks succeed.

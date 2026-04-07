# Note di sicurezza

## Principi usati nello scaffold

Il front-end evita script inline e manipolazione diretta del DOM. Tutto il rendering avviene tramite binding Angular standard.

## Regole operative

- Non usare `bypassSecurityTrustHtml`, `bypassSecurityTrustUrl` o simili con input utente.
- Non costruire template Angular partendo da stringhe.
- Non considerare mai il route guard come sicurezza effettiva.
- Validare MIME type, dimensione file, checksum e scansione malware sul backend.
- Applicare autorizzazione server-side su ogni endpoint.
- Usare URL API assoluti e fidati in SSR/reverse proxy.
- Configurare:
  - CSP
  - Trusted Types
  - HSTS
  - Referrer-Policy
  - X-Content-Type-Options
  - Permissions-Policy
- Proteggere endpoint di commenti, like, upload e ricerca con rate limit e anti-automation.

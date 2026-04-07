# Cinematic Curator Angular

Scaffold Angular per trasformare la pagina HTML fornita in una base più solida, manutenibile e pronta a crescere come front-end di una piattaforma video simil YouTube.

## Scelte architetturali

- **Angular 20 LTS**
- **Standalone components**
- **Routing lazy-friendly**
- **Signals** per stato UI leggero
- **ChangeDetectionStrategy.OnPush**
- **SCSS locale ai componenti**
- **Nessun `<script>` inline nel template**
- **Nessun accesso diretto al DOM**
- **Interceptor HTTP** per URL API e token
- **Guard** lato client per UX, con enforcement demandato al backend
- **Configurazione XSRF** pronta per sessioni cookie-based

## Struttura

```text
src/
  app/
    core/
      guards/
      interceptors/
      models/
      services/
    features/
      creator/pages/
      shared/pages/
      upload/pages/
    layout/
      floating-action-button/
      mobile-nav/
      side-nav/
      top-navbar/
    shared/
      featured-video-card/
      masterclass-card/
      section-header/
      short-card/
      video-card/
```

## Avvio

```bash
npm install
npm start
```

## Sicurezza lato front-end inclusa nello scaffold

1. Nessuna generazione dinamica di template.
2. Nessun uso di `innerHTML` o `bypassSecurityTrust...`.
3. URL API assoluto centralizzato in environment.
4. Interceptor che allega il token solo verso l'origin API previsto.
5. Configurazione XSRF per scenari cookie-based.
6. Guard client-side solo come UX; autorizzazione reale da fare sul server.
7. Base pronta per CSP e Trusted Types a livello server/reverse proxy.
8. Upload e moderazione contenuti previsti come responsabilità server-side.

## Cosa manca volutamente

Questo progetto è uno **starter front-end**. Per completarlo in produzione servono:

- backend auth
- upload chunked/resumable
- streaming HLS/DASH
- content moderation server-side
- rate limiting e anti-abuse
- logging, tracing e audit trail
- CSP header, Trusted Types enforcement e header di sicurezza dal server

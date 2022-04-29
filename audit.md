<ins>Audit : TodoListMe</ins>


<ins>Fonctionnalités supplémentaires de l’application :</ins>

    • Header :
        ◦ Fonction « Status » montre si les listes sont bien sauvegardés
        ◦ Fonction «Sync» permet de synchroniser les listes avec un serveur
        ◦ Fonction « Remote » ouvre une nouvelle fenêtre avec les listes de « to-do » en version simplifiées

    • Main :
        ◦ Trier par ordre (ajout, alphabétique, aléatoire, 3 premiers)
        ◦ Imprimer la « to-do »
        ◦ Barre de progression de la liste (« To do » et « Done »)
        ◦ Section de temporalité (« Tomorrow » ou « Later »)
        ◦ Widget date picker pour la section « Later »

    • Menu :
        ◦ Création  de nouvelle « Liste » de « to-do »
        ◦ Création de nouvelle « Catégorie »
        ◦ Encart publicitaire

    • Footer :
        ◦ Sections de contenus : Help, Philosophy, Contact, Blog, Updates
        ◦ Fonction « Reset Lists » pour réinitialiser toutes les listes
        ◦ Fonction « Backups » pour retrouver ses listes précédemment créées (historique des 2 dernières semaines)
        ◦ Version mobile (http://m.todolistme.net)
        ◦ Réseaux sociaux pour partager le site ou liker la page

    • Fonctionnalités générales :
        ◦ Système de drag and drop
        ◦ Bouton « Undo »
        ◦ Création compte utilisateur, permet d’avoir accès aux fonctions « Sync » et « Backups »


<ins>Rapport Lighthouse de l'application :</ins>

    • Performance (77/100) :

        ◦ Use HTTP/2 :
            => HTTP/2 serves your page's resources faster and with less data moving over the wire.

        ◦ Serve images in next-gen formats :
            => Image formats like WebP and AVIF often provide better compression than PNG or JPEG, 
            which means faster downloads and less data consumption.

        ◦ Eliminate render-blocking resources :
            => Resources are blocking the first paint of your page. Consider delivering critical 
            JS/CSS inline and deferring all non-critical JS/styles.

        ◦ Ensure text remains visible during webfont load :
            => Leverage the font-display CSS feature to ensure text is user-visible while webfonts 
            are loading.

        ◦ Avoid `document.write()` :
            => For users on slow connections, external scripts dynamically injected via `document.write()` 
            can delay page load by tens of seconds.
        
        ◦ Image elements do not have explicit `width` and `height` :
            => Set an explicit width and height on image elements to reduce layout shifts and improve 
            Cumulative Layout Shift (CLS).
        
        ◦ Does not have a `<meta name="viewport">` tag with `width` or `initial-scale` :
            => A `<meta name="viewport">` not only optimizes your app for mobile screen sizes, 
            but also prevents a 300 millisecond delay to user input.

        ◦ Registers an unload listener :
            => The `unload` event does not fire reliably and listening for it can prevent browser 
            optimizations like the Back-Forward Cache. Use `pagehide` or `visibilitychange` events instead.

        ◦ Serve static assets with an efficient cache policy :
            => A long cache lifetime can speed up repeat visits to your page.

        ◦ Minimize main-thread work & Reduce JavaScript execution time :
            => Consider reducing the time spent parsing, compiling and executing JS. You may find 
            delivering smaller JS payloads helps with this.
        
        ◦ Avoid chaining critical requests :
            => Consider reducing the length of chains, reducing the download size of resources, 
            or deferring the download of unnecessary resources to improve page load.

        ◦ Keep request counts low and transfer sizes small :
            => To set budgets for the quantity and size of page resources, add a budget.json file.

    • Accessibility (61/100) :

        ◦ `[aria-*]` attributes do not match their roles :
            => Each ARIA `role` supports a specific subset of `aria-*` attributes. 
            Mismatching these invalidates the `aria-*` attributes.

        ◦ Image elements do not have [alt] attributes :
            => Informative elements should aim for short, descriptive alternate text. 
            Decorative elements can be ignored with an empty alt attribute.

        ◦ Form elements do not have associated labels :
            => Labels ensure that form controls are announced properly by assistive technologies, 
            like screen readers.

        ◦ `<frame>` or `<iframe>` elements do not have a title :
            => Screen reader users rely on frame titles to describe the contents of frames.

        ◦ Background and foreground colors do not have a sufficient contrast ratio :
            => Low-contrast text is difficult or impossible for many users to read.
        
        ◦ `<html>` element does not have a `[lang]` attribute :
            => If a page doesn't specify a lang attribute, a screen reader assumes that the page is 
            in the default language that the user chose when setting up the screen reader.
            If the page isn't actually in the default language, then the screen reader might not 
            announce the page's text correctly.
        
        ◦ Heading elements are not in a sequentially-descending order :
            => Properly ordered headings that do not skip levels convey the semantic structure of the page, 
            making it easier to navigate and understand when using assistive technologies.

    • Best Practices (67/100) :

        ◦ Does not use HTTPS :
            => All sites should be protected with HTTPS, even ones that don't handle sensitive data.
            This includes avoiding mixed content, where some resources are loaded over HTTP despite the 
            initial request being served over HTTPS. HTTPS prevents intruders from tampering with or passively 
            listening in on the communications between your app and your users, and is a prerequisite 
            for HTTP/2 and many new web platform APIs.

        ◦ Includes front-end JavaScript libraries with known security vulnerabilities :
            => Some third-party scripts may contain known security vulnerabilities that are easily identified
            and exploited by attackers. (jQuery 2.2.4 and jQuery UI 1.12.1)

        ◦ Ensure CSP is effective against XSS attacks :
            => A strong Content Security Policy (CSP) significantly reduces the risk of cross-site scripting (XSS) attacks.

        ◦ Browser errors were logged to the console :
            => Errors logged to the console indicate unresolved problems. 
            They can come from network request failures and other browser concerns.

        ◦ Issues were logged in the Issues panel in Chrome Devtools :
            => Issues logged to the `Issues` panel in Chrome Devtools indicate unresolved problems.
            They can come from network request failures, insufficient security controls, and other browser concerns.
            Open up the Issues panel in Chrome DevTools for more details on each issue.
    
    • SEO (70/100) :

        ◦ Does not have a `<meta name="viewport">` tag with `width` or `initial-scale` :
            => A `<meta name="viewport">` not only optimizes your app for mobile screen sizes, 
            but also prevents a 300 millisecond delay to user input.

        ◦ Links are not crawlable :
            => Search engines may use `href` attributes on links to crawl websites. Ensure that the `href` attribute 
            of anchor elements links to an appropriate destination, so more pages of the site can be discovered.

        ◦ Image elements do not have `[alt]` attributes :
            => Informative elements should aim for short, descriptive alternate text. 
            Decorative elements can be ignored with an empty alt attribute.

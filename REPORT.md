REPORT.md

1. Stack utilisé
Le site a été construit en HTML5, CSS3 et JavaScript vanilla, sans framework ni dépendance lourde. Les animations sont fournies par AOS et les icônes par Lucide, chargées via CDN.
Les pages utilisent un routage statique par répertoire (`index.html`) avec des URL publiques à barre oblique finale. Les liens internes sont root-relative; `_redirects` canonicalise le domaine et les variantes sans barre finale sans ajouter de redirection catch-all.

2. Responsive
Le design est mobile-first et utilise CSS Grid et Flexbox pour adapter la mise en page à 360 px, 390 px, 414 px, 768 px, 1024 px et 1440 px. Les sections utilisent des containers fluides, des grilles réactives, des tableaux défilables et des boutons adaptés à la largeur d'écran. Le header et le menu mobile restent sans overflow horizontal.

3. Header et burger menu
Le header est sticky, contient le logo PrêtNord, la navigation principale, le bouton d'appel à l'action et le menu mobile complet. Le menu s'ouvre en overlay plein écran, ferme au clic sur un lien ou sur le bouton de fermeture, bloque le scroll du body pendant l'ouverture et rétablit le scroll après fermeture. Les éléments sont vérifiés avant utilisation.

4. Formulaire
La demande est gérée côté navigateur avec validation HTML5 et validation JavaScript. Les messages d'erreur sont affichés directement sous les champs, la case de consentement est obligatoire, le téléphone est validé selon un format canadien et le bouton de soumission est désactivé pendant l'envoi pour empêcher les doubles clics. À la réussite, les données sont affichées dans la console et redirigées vers la page de remerciement.

5. Cookie popup
Le popup de consentement utilise localStorage avec la clé pretnord_cookie_consent. Si l'utilisateur a déjà accepté, le popup ne s'affiche plus. Il est stylé, accessible et lie vers la politique de confidentialité.

6. Exigences SEO
Le site comporte des titres, descriptions, URLs canoniques et balises hreflang spécifiques à chaque page. Les pages sont marquées avec les métadonnées Open Graph et le tag robots noindex, nofollow. Le favicon et les chemins relatifs sont alignés sur la structure du projet.

7. Schéma JSON-LD
Des types Schema.org ont été ajoutés sur la page d'accueil pour le WebSite et l'Organisation, afin de renforcer l'interopérabilité SEO.

8. Emplacement du site
Le site est localement présent dans le dossier d projet : d:\projects\pretnord.

9. Déploiement
L'URL déployée de référence est : https://pretnord.example

10. Images utilisées
Les images sont issues de sources professionnelles comme Unsplash : finance, bureau, finances personnelles et travail collaboratif.

11. IA utilisée
AI intégrée dans VS Code via Copilot.

12. Ce que l'IA a fait
L'IA a produit la structure des pages, le style visuel, le JavaScript de navigation, le formulaire et le calculateur, ainsi que les balises SEO et le contenu de pages de support.

13. Ce qui a été fait manuellement
La finalisation du contenu, la vérification des textes requis, la préparation des pages d'atterrissage, la validation de cohérence avec les spécifications et la consolidation des fichiers du projet ont été effectués manuellement.

14. Ce qui a été réécrit après l'IA
Les éléments de navigation, le comportement du menu mobile, le calculateur, le formulaire et les fichiers SEO ont été ajustés afin de respecter précisément les exigences de l'énoncé et d'éliminer les incohérences.

15. Cas d'erreurs de l'IA corrigés
- Le menu mobile a été corrigé pour bloquer correctement le scroll lorsque l'overlay est ouvert.
- Le formulaire valide le téléphone canadien, affiche les erreurs au bon endroit, empêche une soumission multiple et navigue vers `/merci/` après validation.

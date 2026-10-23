# Appetite — projet complet (site + APK)

Ce dossier est prêt à être déposé à la racine d'un dépôt GitHub.

## Contenu
- `.github/workflows/build-android.yml` : compile automatiquement l'APK (Actions > Build Android APK > Run workflow).
- `apk-direct/` : projet Android (WebView) qui embarque l'application et ses photos.
- `index.html`, `sw.js`, `manifest.json`, `icons/`, `photos/` : version web (GitHub Pages).

## Étapes
1. Créez un dépôt GitHub (public ou privé) et téléversez tout le contenu de ce dossier à la racine.
2. Onglet **Actions** : lancez **Build Android APK** (Run workflow).
3. Quand le run est vert, téléchargez **Appetite-APK** dans la section Artifacts, puis installez `Appetite.apk` sur Android.
4. Facultatif : activez GitHub Pages (Settings > Pages > Deploy from a branch > main > /root) pour la version web.

## Remarques
- APK de test (debug), signé automatiquement. Pour Google Play, il faudra une clé de signature personnelle.
- Les données (comptes, commandes, points) restent sur chaque appareil.
- Au premier lancement du workflow, un échec peut venir de Bubblewrap ou du SDK Android : copiez l'erreur rouge pour la corriger.

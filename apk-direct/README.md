# Appetite — APK Android (hors GitHub Pages)

Le site est intégré dans l'APK (dossier assets), donc l'application fonctionne sans hébergement.

Structure : le dossier `apk-direct/` est à la racine du dépôt. Le workflow est dans `.github/workflows/build-android.yml`.

Lancer le build : onglet Actions > Build Android APK > Run workflow. L'APK se télécharge dans Artifacts (Appetite-APK). Un tag `v1.0.0` crée aussi une Release.

Installation : sur Android, autoriser l'installation d'applications inconnues, puis ouvrir Appetite.apk.

Remarques : APK de test (debug), signé automatiquement. Pour Google Play, il faudra un APK/AAB signé avec votre propre clé.

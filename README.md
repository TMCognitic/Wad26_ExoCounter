# TypescriptBaseProject

## Mise en place

1. Installer nodejs [https://nodejs.org/fr/download](NodeJs) & git [https://git-scm.com](Git)
2. Se placer dans le répertoire de vos projets (ce répertoire doit exister au préalable) et faire le git clone

``` bash
cd <repertoire ou se trouve vos project> # exemple cd /projects
git clone https://github.com/TMCognitic/TypescriptBaseProject.git ./<nom du projet>
# ex : git clone https://github.com/TMCognitic/TypescriptBaseProject.git ./MonProjet
```

3. Se placer dans le répertoire créé & supprimer le repository distant

``` bash
cd ./<nom du projet> # ex : cd ./MonProjet
git remote remove origin
```

4. installer les modules

``` bash
npm install
```

5. Lancer la commande pour démarrer votre projet

``` bash
npm run dev
```

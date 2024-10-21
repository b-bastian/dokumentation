---
authors: b-bastian
date: 2024-10-14
---

# Arbeit mit GitHub

GitHub eignet sich optimal zur Projektverwaltung. Es bietet

<!-- truncate -->

- Verwaltung von Issues,
- Meilensteine,
- Tags, um Veröffentlichungen zu kennzeichnen,
- Branches und
- Projektverwaltung
  - Roadmaps
  - Kanban
  - Workflows (automatische Veränderung von Issues)

## Verwaltung von Issues

Fehler oder Verbesserungsvorschläge können im Repository gemeldet werden. Die Issues können mit Labels gekennzeichnet werden.

![Issue mit Label](./issue-label.png)

Um die Erstellung der Issues besser organisieren zu können, können **Templates** verwendet werden:

```yml
name: Bug report
description: Fill out a bug report to help us improve Statamic.
body:
  - type: textarea
    attributes:
      label: Bug description
      description: What happened? What did you expect to happen? Feel free to drop any screenshots in here.
      placeholder: I did this thing over here, and saw this error...
    validations:
      required: true
```

:::note
Die Templates werden im Repository im Ordner `.github/ISSUE_TEMPLATE` als `name.yml`gespeichert.
:::

## Meilensteine

Um besondere Abschnitte in der Softwareerstellung zu kennzeichnen und Termine zu fixieren, werden **Meilensteine** eingesetzt.

![Meilensteine](./milestones.png)

Issues weren zu Meilensteinen hinzugefügt und deren Status (offen, geschlossen) wird in der Fortschrittanzeige des Meilensteins berücksichtigt.

## Tags

Mit Tags werden Versionen gekennzeichnet. Diesbezüglich wird `Semantic Versioning` eingesetzt. Dies bedeutet, das ein Tag zum Beispiel mit dem Namen v1.2.0 erstellt wird. Der erste Abschnitt (v**1**.2.0) kennzeichnet die Hauptversion, der zweite Bereich (v1.**2**.0) kennzeichnet den Feature-Stand und der dritte Bereich (v1.2.**0**) wird bei einer Aktualisierung der Software erhöht.

Falls nur der letzte (dritte) Bereich verändert wird, so handelt es sich zum Beispiel um einen Bugfix - der Bugfix kann im Regelfall ohne vorherige Prüfung (abhängig von der Sicherheitsstufe) installiert werden.

Wird der zweite Bereich erhöht, so wurde zum Beispiel die Software mit einem zusätzlichen Feature ausgestattet - auch diese Installation sollte ohne Probleme vorgenommen werden können.

Wird der erste Bereich der Softwareversion erhöht, so handelt es sich um ein Upgrade - die deutet auf eine massive Änderung der Software hin. Die Software muss nicht mehr kompatibel zur vorherigen Installation sein.

In Git werden Tags mit `git tag v.1.2.0` erstellt. Die bestehenden Tags können mit dem Befehl `git tag` angezeigt werden. In der Github-Oberfläche werden diese Tags neben den Branches angezeigt.

![Wo werden Tags angezeigt](./wo-git-tags.png)

![Git Tags](./tags.png)

:::tip
Eine Software sollte vor einem Release immer getaggt werden, da dadurch der Softwareastand besser ersichtlich ist und auch Probleme mit der Software besser überprüfbar sind.
:::

## Branches

An einem Git-Projekt können mehrere Personen beteiligt sein. Die Arbeit erfolgt in mehreren Zweigen. In der folgenden Grafik ist ersichtlich, dass ein `main`-Zweig immer eine funktionierende Version aufweist. Ein `hotfix`-Zweig wird für schnelle Bugfixes verwendet. Die Entwicklung erfolgt in einem `develop`-Zweig und die einzelnen Features werden in `feature`-Zweige entiwckelt.

Durch die Verwendung von `branches` können Fehler rasch zurückgesetzt werden und das Team wird durch fehlerhafte oder noch nicht fertig gestellte Funktionen nicht gestört.

![Workflow](./git-workflow.svg)

Die Erstellung eines `branches` erfolgt mittens `git checkout -b zweigname`. Mit diesem Befehl wird der Zweig auch automatisch "ausgecheckt". Ansonsten kann mit der Angabe eines "Branches" der gewünschte Zweig angegeben werden (z.B. `git checkout main`).

Im aktuellen Zweig (Anzeige mit `git branch -v` - der aktuelle Zweig weist einen `*` auf) werden laufend `Commits` durchgeführt. Anschließend wird in den "Ziel-Zweig" mit `git checkout` gewechselt und ein `git merge zweigname` durchgeführt. Damit landen die `Commits` im Zielzweig. Der ursprüngliche Zweig darf nach diesem Merge gelöscht werden.

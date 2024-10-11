---
date: 2024-09-16
icon: browser
order: 90000
author: Bastian Brugger
---

# Anforderungsanalyse

## Allgemeines

Bei der Softwareentwicklung müssen die Anforderungen des Kunden umgesetzt werden. Es muss versucht werden, die Wünsche des Kunden zu verstehen.

::: tip
Unter einer **Anforderung** versteht man eine **geforderte Leistung** bzw. **Eigenschaft** eines Softwareproduktes.
:::

Anforderungen können durch

- Brainstorming,
- Fragebögen,
- Gespräche,
- Marktforschung, etc.

ermittelt werden.

## Schritte

- Ermitteln: Gespräche mit zukünftigen Anwendern führen, Papierdokumente in digitalen Prozess überführen
- Analysieren: Anforderungen inhaltlich analysieren, aktives Zuhören
- Spezifizieren: Exakter Aufbau der Daten, Modelle entwerfen (Klassendiagramme, ER-Diagramme), Sprachlich exakt (Sprache des Kunden)
- Validieren: nochmals kontrollieren, eventuell Schritte wiederholen

Es müssen die organisatorischen Rollen/Zuständigkeiten festgelegt werden (Ansprechpartner definieren). Der Workflow der Software muss den logischen Abläufen entsprechen. Es muss eine Balance zwischen Kosten und Anforderungen entstehen - unterschiedliche Personengruppen vertreten unterschiedliche Interessen

## Anforderungen kategorisieren

Anforderungen können folgendermaßen eingeteilt werden:

- funktionale Anforderungen (unterstützte Features)
- technische Anforderungen (Hardware)
- Anforderungen an die Benutzerschnittestelle (Touch-, Maus-, Tastatureingabe)
- Anforderungen an die Dienstqualität (Verfügbarkeit, Ausfallsystem)
- Anforderungen an die sonstigen Lieferbestandteile (Migration der Daten)
- Rechtliche und Vertragliche Anforderungen (Vertragsbedingungen)

::: danger
**Wichtige Punkte** sind schriftlich festzuhalten. Abweichende Ergebnisse von einem zu erwartenden Normalzustand müssen festgehalten werden.
:::

## Anforderungen priorisieren

Die Anforderungen an das Softwareprojekt müssten priorisiert werden, da die Ressourcen begrenzt sind. Die Umsetzung muss sich daher auf die Kernelemente der Software begrenzen.

::: tip
**Alle Absprachen sind verbindlich schriftlich zu fixieren, als Basis kann ein Pflichtenheft verwendet werden**.
:::

Bei den Formulierungen muss zwischen Pflicht, Wunsch, Absicht, Kommentar und Vorschlag unterschieden werden.

Die Kommunikation ist entscheidend um einen Kunden langfristig zu binden. Man wird einen Mittelweg finden müssen und keinen Rechtsstreit anvisieren.

### **M**o**SC**o**W**-Prioriserung

- **Must have**: Eine unbedingt erforderliche Aufgabe für die Erreichung des Hauptziels
- **Should have**: Sollte erledigt werden, wenn alle "Muss"-Aufgaben trotzdem erledigt werden können
- **Could have**: Kann gemacht werden, wenn die Aufgaben von "M" und "S" nicht beeinträchtigt werden
- **Won't have**: Wird diesmal nicht umgesetzt aber für die Zukunft vorgemerkt

![MoSCoW Priorisierung](/images/se/moscow_priorisierung.jpeg)

### Zwei Kriterien Methode

Die grafische Umsetzung des Eisenhower-Prinzips erfolgt in der Eisenhower-Matrix (Abbildung 2). Es werden die vier Felder wie folgt gefüllt:

1. Dringend und wichtig: Diese Aufgaben müssen sofort erledigt werden und können nicht delegiert werden
2. Nicht dringend, aber wichtig: Diese Aufgaben können später erledigt und eventuell delegiert werden
3. Dringend, aber unwichtig: Diese Aufgaben müssen sofort erledigt werden und können aber delegiert werden
4. Weder dringend noch wichtig: Diese Aufgaben werden nicht weiter betrachtet und unmittelbar eliminiert

Die Eisenhauer wird beschrieben laut [^1].

### Kano-Modell

Das Kano-Modell kann zur Einteilung von Merkmalen verwendet werden. Der Zusammenhang aus Basisanforderungen, Leistungsanforderungen, Begeisterungsanforderungen lässt sich in folgendem Diagramm entnehmen:

![Kano-Modell](/images/se/kano-modell.png)

Im Kano-Diagramm wird der Erfüllungsgrad der (Kunden-)Anforderungen der Kundenzufriedenheit gegenübergestellt.

[^1]: **Peterjohann**, Horst. Das Eisenhower-Prinzip. Einteilen von Aufgaben nach Dringlichkeit und Wichtigkeit. URL: <https://www.peterjohann-consulting.de/eisenhower-prinzip/>. 20.09.2024

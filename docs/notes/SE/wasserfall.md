---
date: 2024-09-13
icon: browser
order: 100000
author: Bastian Brugger
title: Wasserfallmodell
---

# Wasserfallmodell

## Allgemeines

Das **erste Modell** zur professionellen erstellen von Softwaren ist das Wasserfallmodel.
Dieses Modell geht von klar abgegrenzten Entwicklungschritten aus.
Das Wasserfallmodell deckt alle Schritte bis zur Enstehung eines Produktes ab.

#### Analyse:

Es werden die Anforderung an die Software erstellt. Dies bedeutet, dass auch **Lastenhefte** und **Pflichtenhefte** erstellt werden.

#### Design

In dieser Phase wird das Design der Software erstellt. Hierzu zählt die Erstellung von verschiedenen Diagrammen

#### Implementierung

In dieser Phase wird die Software erstellt.

#### Test

In dieser Phase wird die Software getestet. Die Software wird getestet und die Lauffähigkeit wird überprüft.

#### Betrieb/Wartung

Dieser Bereich ist ein langfrister Abschnitt. Die Software wird gewartet und angepasst. Auch die Inbetriebnahme beim Kunden wird diesem Bereich zugerechnet.

![Wasserfallmodell](/images/se/wasserfallmodell.jpg)

In dieser Abbildung ist das **zyklische Wasserfallmodell** ersichtlich, dies bedeutet das in den einzelnen Phasen Feedbacks eingearbeitet werden. Die Software kann dadurch besser an die Kundenwünsche ausgerichtet werden.

## Analyse

In dieser Phase werden die Anforderungen an die Software gesammelt, dies bedeutet das auch die Kundenwünsche angefordert werden müssen.

![GraphicsViewer](/images/se/waterfall_methodologies.png)

In der folgenden Abbildung ist ersichtlich, dass die Kosten im Späteren Entwicklungsprozess enorm ansteigt[^1].

In der Analysephase wird versucht, möglichst viel Information vom Kunden zu erhalten.

## Design/Entwurf/Businessdesign

In diesem Abschnitt wird das **Softwaredesign** festgelegt - die Struktur der Software wird geplant. Mit **UML kann in diesem Abschnitt das Klassendiagram** erstellt werden. Es werden Entscheidungen hinsichtlich Programmiersprache, Frameworks, Klassenbibliotheken, etc. getroffen. Es wird festgelegt, wie Komponenenten zusammenarbeiten (Schnittstelle). In diesem Sinne wird auch über die Verwendung von Design Patterns nachgedacht (Softwarearchitektur).

## Implementierung

In dieser Phase wird die Software technisch erstellt. Es werden die GUI, die Geschäftslogik und die Datenservices erstellt.

## Test

In dieser Phase wird überprüft, ob die Software den Ansprüchen genügt. Nacht der erfolgreichen Testphase kann die Software ausgeliefert werden. (Releasecandidate) In den App-Stores können, für eine geschlossene Benutzergruppe, Tests zur verfügung gestellt werden.

## Wartung

Je nach der zu erstellenden Software wird die Wartung unterschiedlich Intensiv ausfallen. (Der Umfang der Wartung muss zuvor exakt festgelegt werden). Die Kosten sind durch diese Festlegung sowohl für das Softwareunternehmen als auch für den Kunden transparent. Eventuell wird eine LTS-Version (**L**ong **T**ime **S**upport) angeboten.

[^1]: Inflectra Corporation. Waterfall & Hybrid Methodologies URL: <https://www.inflectra.com/Solutions/Methodologies/Waterfall.aspx>; Datum: 16.09.2024

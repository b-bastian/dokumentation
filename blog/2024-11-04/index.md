---
authors: b-bastian
---

# PHP-Konfiguration

PHP wird bei `XAMPP` (https://www.apachefriends.org) bereits mitinstalliert.

Beim Aufruf von `php` in der Kommandozeile wird "Befehl wurde nicht gefunden" zurückgegeben.

<!--truncate -->

## PHP in einer Umgebungsvariable

In den Umgebungsvariablen wird der **Pfad** zum PHP-Interpreter hinzugefügt. Für die Veränderung einer Systemvariable werden Admin-Rechte benötigt.

:::tip
Systemvariablen gelten für **alle Benutzer** des PCs. Benutzervariablen gelten für **das angegebene Benutzerkonto**. Bei einer Änderung einer Systemvariable muss der Rechner neugestartet werden. Wird eine Benutzervariable geändert, so ist es empfehlenswert das Fenster der Kommandozeile erneut zu öffnen (Achtung: ev. Programm schließen und wieder öffnen).
:::

Im Pfad wird der Ordner zum PHP-Interpreter festgelegt.

## PHP aktualisieren

Falls ein altes PHP-PAket installiert ist, muss es aktualisiert werden. Hierzu wird **XAMPP** erneut heruntergeladen und über die bestehende Installation installiert.

:::danger
Etwaige Dienste (z.B. MySQL) müssen zuvor gestoppt werden! In den `Diensten` ist dies ersichtlich. Doppelklick auf den Diestnamen und den Dienst beenden (eventuell ist eine Umstellung auf "manuell starten" sinnvoll).
:::

### XAMPP erneut installieren

1. In den Diensten wird, falls vorhanden, `Apache` beendet.
2. In den Diensten wird, falls vorhanden, `MySQL` beendet.
3. Der Ordner `C:\xampp\`wird auf `C:\xampp-old\` umbenannt.
4. Die Installation erfolgt im Ordner `C:\xampp\`.

:::tip
Dienste sollten nur beendet werden, wenn sie nicht benötigt werden. Dies erhöht auch die Sicherheut des PCs.
:::

## Entwicklungsserver starten

PHP liefert einen Entwicklungsserver mit. Dieser wird mittels

```bash
php -S localhost:8080
```

gestartet. Hierbei muss beachtet werden, dass natürlich der Port `8080` nicht belegt sein darf.

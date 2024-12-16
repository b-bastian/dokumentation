---
authors: b-bastian
date: "2024-12-02"
---

# Klassendiagramm

Klassendiagramme können schnell mittels _Mermaid_ erstellt werden. Mermaid wird auch von GitHub unterstützt.

<!-- truncate -->

Ein Live-Editor ist uner https://mermaid.live verfügbar.

```mermaid
classDiagram
    class Person{
      -string firstname
      -string surname
      +getName() string
      +sayHello(Person p) void
    }
```

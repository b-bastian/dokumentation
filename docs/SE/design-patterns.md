---
date: 2024-05-02
icon: browser
order: 100000

title: Design Patterns
---

# Design Patterns

Prinzipien objektorientierten Designs sind Prinzipien, die zu gutem objektorientierten Design führen sollen. Viele Techniken der Objektorientierung wie Entwurfsmuster, Domain-driven Design oder Dependency Injection basieren auf diesen Prinzipien objektorientierten Designs.

Für eine Gruppe dieser Prinzipien wurde von Robert C. Martin das Akronym “SOLID” geprägt. Diese Prinzipien gemeinsam angewandt führt laut Robert C. Martin zu einer höheren Wartbarkeit und somit Lebensdauer von Software.

## SOLID

Inversion, Injection

Beschreibung der einzelnen "Buchstaben", jeweils inkl. Beispiel und falls möglich einer Abbildung (muss nicht unmittelbar mit dem Beispiel zusammenhängen - wäre natürlich besser)

- **S**ingle Responsibility Prinzip
- **O**pen-Closed Prinzip
- **L**iskovsches Substitutionsprinzip
- **I**nterface Segregation Prinzip
- **D**ependency Inversion Prinzip

### **S**ingle Responsibility Prinzip

Für drei verschiedene Lampentypen stehen jeweils entsprechende Funktionsblöcke (`FB_LampOnOff`, `FB_LampSetDirect` und `FB_LampUpDown`) zur Verfügung. Jeder Lampentyp besitzt seine eigene Funktionsweise und bietet entsprechende Methoden an, um den Ausgangswert zu verändern.

Ein übergeordneter Controller (`FB_Controller`) stellt eine einheitliche Schnittstelle zur Verfügung, um auf diese drei Typen zuzugreifen. Hierbei wird das **Dependency Inversion Principle** angewendet, um eine feste Kopplung zwischen dem Controller und den Lampentypen zu vermeiden. Durch `I_Lamp` wird diese einheitliche API definiert. Der abstrakte Funktionsblock `FB_Lamp` implementiert die Schnittstelle `I_Lamp`. Des Weiteren enthält `FB_Lamp` Programmcode, der bei **allen Lampentypen gleich** ist. Dadurch das alle Lampentypen von `FB_Lamp` abgeleitet sind, werden _Controller_ und _Lampen_ voneinander entkoppelt. Statt Instanzen von konkreten Lampentypen anzulegen, verwaltet der Controller nur noch eine Referenz auf `FB_Lamp`.

[(stefanhenneken.net, 2024)](https://stefanhenneken.net/2022/02/20/iec-61131-3-solid-das-single-responsibility-principle/)

![Single Responsibility Prinzip](/images/se/single_responsibility_prinzip.webp)

### **O**pen-Closed Prinzip

Inheritance is a popular method for **reusing existing function blocks**. It enables _new methods_ and _properties_ to be **added or existing methods overwritten** without requiring access to the source code for the base function block. Designing software so that it can be extended without modifying the existing code is the **key concept** behind the `Open/Closed Principle` (OCP). But using inheritance also has _disadvantages_. These disadvantages can be minimised by employing interfaces – and this is not the only advantage of this method.

To put it another way, software behaviour should be open to extension without needing to modify the software. Based on our example from my previous posts, we’re going to develop a function block for managing lamp control sequences. We will then add additional functionality to extend this function block. We will use this example to illustrate the key concept underlying the Open/Closed Principle (OCP).

[(stefanhenneken.net, 2024)](https://stefanhenneken.net/2023/04/06/iec-61131-3-solid-the-open-closed-principle/)

![Single Responsibility Prinzip](/images/se/open_closed_prinzip.webp)

### **L**iskovsches Substitutionsprinzip

„The Liskov Substitution Principle (LSP) requires that derived function blocks (FBs) are always compatible to their base FB. Derived FBs must behave like their respective base FB. A derived FB may extend the base FB, but not restrict it.” This is the core statement of the Liskov Substitution Principle (LSP), which Barbara Liskov formulated already in the late 1980s. Although the Liskov Substitution Principle (LSP) is one of the simpler SOLID principles, its violation is very common. The following example shows why the Liskov Substitution Principle (LSP) is important.

The core of the example are three lamp types, which are mapped by the function blocks `FB_LampOnOff`, `FB_LampSetDirect` and `FB_LampUpDown`. The interface `I_Lamp` and the abstract function block `FB_Lamp` secure a clear decoupling between the respective lamp types and the higher-level controller `FB_Controller`.

`FB_Controller` no longer accesses specific instances, but only a reference of the abstract function block `FB_Lamp`..

To realize the required functionality, each lamp type provides its own methods. For this reason, each lamp type also has a corresponding adapter function block (FB_LampOnOffAdapter, FB_LampSetDirectAdapter and FB_LampUpDownAdapter), which is responsible for mapping between the abstract lamp (FB_Lamp) and the concrete lamp types (FB_LampOnOff, FB_LampSetDirect and FB_LampUpDown).

[(stefanhenneken.net, 2024)](https://stefanhenneken.net/2022/09/27/iec-61131-3-solid-the-liskov-substitution-principle/)

![Single Responsibility Prinzip](/images/se/liskov_substitution_prinzip.webp)

### **I**nterface Segregation Prinzip

The basic idea of the Interface Segregation Principle (ISP) has strong similarities with the Single Responsibility Principle (SRP): Modules with too many responsibilities can negatively influence the maintenance and maintainability of a software system. The Interface Segregation Principle (ISP) focuses on the module’s interface. A module should implement only those interfaces that are needed for its task. The following shows how this design principle can be implemented.

The basic idea of the Interface Segregation Principle (ISP) has strong similarities with the Single Responsibility Principle (SRP): Modules with too many responsibilities can negatively influence the maintenance and maintainability of a software system. The Interface Segregation Principle (ISP) focuses on the module’s interface. A module should implement only those interfaces that are needed for its task. The following shows how this design principle can be implemented.

The example extended by another lamp type (`FB_LampSetDirectDALI`). The special feature of this lamp type is the scaling of the output value. While the other lamp types output 0-100%, the new lamp type outputs a value from 0 to 254.

Just like all other lamp types, the new lamp type (DALI lamp) has an adapter (FB_LampSetDirectDALIAdapter). The adapters have been added during the implementation of the Single Responsibility Principle (SRP) and ensure that the function blocks of the individual lamp types are only responsible for a single function (see IEC 61131-3: SOLID – The Single Responsibility Principle).

The sample program was last adapted so that the output value from the new lamp type (FB_LampSetDirectDALI) is scaled within the adapter from 0-254 to 0-100 %. This makes the DALI lamp behave exactly like the other lamp types without violating the Liskov Substitution Principle (LSP).

[(stefanhenneken.net, 2024)](https://stefanhenneken.net/2023/02/25/iec-61131-3-solid-the-interface-segregation-principle/)

![Single Responsibility Prinzip](/images/se/interface_segregation_prinzip.webp)

### **D**ependency Inversion Prinzip

Fixed dependencies are one of the main causes of poorly maintainable software. Certainly, not all function blocks can exist completely independently of other function blocks. After all, these interact with each other and are thus interrelated. However, by applying the Dependency Inversion Principle, these dependencies can be minimized. Changes can therefore be implemented more quickly.

[(stefanhenneken.net, 2024)](https://stefanhenneken.net/2022/02/09/iec-61131-3-solid-the-dependency-inversion-principle/)

![Single Responsibility Prinzip](/images/se/dependency_inversion_prinzip.webp)

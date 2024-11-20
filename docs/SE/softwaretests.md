---
authors: b-bastian
date: 2024-11-11
---

# Softwaretests

## Einfacher Test

```cs
    [Test]
    public void TestLoadCommand()
    {
        // arrange
        IRepository rep = new StaticData();
        MainViewModel viewModel = new MainViewModel(rep);

        // act
        viewModel.LoadDataCommand.Execute(null);

        // assert
        Assert.That(viewModel.Todos.Count, Is.EqualTo(6));
    }
```

In diesem einfachen Test testet man, ob der `LoadDataCommand` genau 6 Datensätze zurückgibt. Wenn das der Fall ist wird der Test positiv abgeschlossen, wenn nicht dann kommt false zurück.

## Mehrere Tests

```cs
    [Test]
    public void TestSaveCommandVM()
    {
        // arrange
        IRepository rep = new StaticData();
        MainViewModel viewModel = new MainViewModel(rep);

        // act
        string input = "**TEST**";
        viewModel.TodoTitle = input;
        viewModel.AddTodoCommand.Execute(null);

        // assert
        Todo? item = (from t in viewModel.Todos
            where t.Title == input
            select t).FirstOrDefault();

        Assert.Multiple(() =>
        {
            Assert.That(item, Is.Not.Null);
            Assert.That(item?.Title, Is.EqualTo(input));
            Assert.That(item?.ToString(), Is.EqualTo(input));
            Assert.That(viewModel.TodoTitle, Is.EqualTo(string.Empty));
        });
    }
```

Mehrere Tests werden mit `Assert.Multiple(() => { ... });` aufgerufen. In dieser Methode verwenden wir in diesem Beispiel vier `Assert.That()` Methoden, also mehrere Tests in einem `Test`.

## Mock

```cs
    [Test]
    public void TestMock()
    {
        var mock = new Mock<IRepository>();
        mock.Setup(x => x.GetAll()).Returns(new List<Todo>()
        {
            new Todo("Test")
        });

        MainViewModel viewModel = new MainViewModel(mock.Object);

        viewModel.LoadDataCommand.Execute(null);
        viewModel.AddTodoItemCommand.Execute(new Todo("Probe"));

        Assert.That(viewModel.Todos.Count, Is.Not.EqualTo(1));
    }
```

Ein Mock-Objekt in C# ist ein **simuliertes** Objekt, das im Rahmen von Unit-Tests verwendet wird, um das Verhalten von echten Objekten zu imitieren.

Ein Mock-Objekt wird mit Zeile 4-8 erstellt.

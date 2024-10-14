---
date: 2023-12-07
icon: project-roadmap
title: Telefon- & Adressbuch
---

# Telefon- & Adressbuch

## Smarte Ziele (3)

## `.xml`-Datei

```xml
<?xml version="1.0" encoding="utf-8"?>
<adressbook>
  <adress id="c4d179e9-8ed9-4069-85fd-79b9a67c2f9a" firstname="Bastian" lastname="Brugger" fullname="Bastian Brugger" adress="Sagmühlfeld 26" plz="5723" place="Uttendorf" number="06606106711" favorite="true" />
</adressbook>
```

#### Allgemeines

Handelt es sich um ein Projekt?

- Kein Alltagsgeschäft
- klares Ziel
- Komplexität ist gegeben

#### Features

- Kontakte hinzufügen
- Kontaktdaten ändern
- Kontakte löschen
- Kontakte anzeigen, filtern & suchen
- Kontakte werden beim Start der App geladen

#### Arbeitspakete (Sammlung)

- Interface definieren
- Services
- Klassen definieren
- XML-Pages erstellen (optisch "schön")
- ViewModels
- dauerhafte Speicherung
- Models
- Auslagerung einer/der Geschäftslogik in eine Bibliothek
- Beiträge laden
- Release
  - Plattform(en)
  - Download, App Store oder Browser
  - Android, iOS, Windows, macOS
  - Versionierung

### Ordnerstruktur (bearbeitete Dateien)

#### Telefonbuch.Lib

- Interfaces
  - IRepository.cs
- Models
  - Entry.cs
- Services
  - XmlRepository.cs
  - DatabaseRepository.cs
  - EntriesContext.cs
  - CsvRepository.cs

#### Telefonbuch.Core

- Services
  - IAlertService.cs
- ViewModels
  - MainViewModel.cs
  - ManageEntryViewModel.cs

#### Telefonbuch.MApp

- Pages
  - MainPage.xaml
  - MainPage.xaml.cs
  - ManageEntryPage.xaml
  - ManageEntryPage.xaml.cs
- MauiProgram.cs

### Wichtige Dateien | Telefonbuch.Lib

#### IRepository.cs

```cs
    List<Entry> LoadEntries();

    bool Save();

    bool CreateEntry(Entry entry);

    bool DeleteEntry(Entry entry);

    bool UpdateEntry(Dictionary<string, string> updatedValues, Entry selectedEntry);

    bool Update(Entry entry);

    List<Entry> SearchEntries(string searchText);

    List<Entry> SortEntries(string sortText);
```

#### Entry.cs

```cs
    public string Id { get; set; } = string.Empty;

    public string Firstname { get; set; } = string.Empty;

    public string Lastname { get; set; }

    public string Adress { get; set; } = string.Empty;

    public int PLZ { get; set; } = 0;

    public string Place { get; set; } = string.Empty;

    public string Number { get; set; } = string.Empty;

    public bool Favorite { get; set; } = false;
```

#### XmlRepository.cs

```cs
public string _file = string.Empty;
	private XElement _rootElement;

	public XmlRepository(string file)
	{
		this._file = file;

		if (File.Exists(file)) {
			this._rootElement = XElement.Load(file);
		} else {
			this._rootElement = new XElement("adressbook");
		}


	}

	public List<Entry> LoadEntries()
	{
		if (File.Exists(this._file)) {
			this._rootElement = XElement.Load(this._file);
		} else {
			this._rootElement = new XElement("adressbook");
		}

		var quellen = from adress in this._rootElement.Descendants("adress")
					  select new Entry() {
						  Id = (string?)adress.Attribute("id"),
						  Name = (string?)adress.Attribute("name"),
						  Adress = (string?)adress.Attribute("adress"),
						  PLZ = (int?)adress.Attribute("plz"),
						  Place = (string?)adress.Attribute("place"),
						  Number = (string?)adress.Attribute("number")
					  };

		return quellen.ToList();
	}

	public bool CreateEntries(string name, string adress, int plz, string place, string number)
	{
		Entry entry = new Entry(name, adress, plz, place, number);

		try {
			XElement node = new XElement("adress");
			node.Add(new XAttribute("id", entry.Id));
			node.Add(new XAttribute("name", entry.Name));
			node.Add(new XAttribute("adress", entry.Adress));
			node.Add(new XAttribute("plz", entry.PLZ));
			node.Add(new XAttribute("place", entry.Place));
			node.Add(new XAttribute("number", entry.Number));


			this._rootElement.Add(node);
			this._rootElement.Save(this._file);

			return true;
		} catch {
			return false;
		}
	}

	public bool DeleteEntries(string entry, string entryToDelete)
	{
		var deleteObject = from x in this._rootElement.Descendants("adress")
						   where (string)x.Attribute(entryToDelete) == entry
						   select x;

		if (!deleteObject.Any()) {
			Debug.WriteLine("Nichts gefunden");
			return false;
		}

		try {
			deleteObject.Remove();

			this._rootElement.Save(this._file);

			return true;
		} catch {
			return false;
		}

	}

	public string UpdateEntries(string phoneNumber, string id, string valueToUpate, string updatedValue)
	{
		string feedback = string.Empty;

		// Update an entry by phone number
		if (phoneNumber != null) {
			var updateObjects = from x in this._rootElement.Descendants("adress")
								where (string)x.Attribute("number") == phoneNumber
								select x;

			if (!updateObjects.Any()) {
				return feedback = $"No record found with phone number {phoneNumber}";
			}

			foreach (var updateObject in updateObjects) {
				foreach (var attribute in updateObject.Attributes()) {
					if (attribute.Name != "phoneNumber") {
						updateObject.SetAttributeValue(valueToUpate, updatedValue);
					}
				}
			}

			this._rootElement.Save(this._file);

			return feedback = $"Updated entry with phone number {phoneNumber}";
		}
		// Update entry by Id
		else if (id != null) {
			var updateObjects = from x in this._rootElement.Descendants("adress")
								where (string)x.Attribute("id") == id
								select x;

			if (!updateObjects.Any()) {
				return feedback = $"No record found with ID {id}";
			}

			foreach (var updateObject in updateObjects) {
				foreach (var attribute in updateObject.Attributes()) {
					if (attribute.Name != "id") {
						updateObject.SetAttributeValue(valueToUpate, updatedValue);
					}
				}
			}

			this._rootElement.Save(this._file);

			return feedback = $"Updated entry with Id {id}";
		} else {
			return feedback = "Please specify either phone number or ID to update the record";
		}
	}

	public List<Entry> SearchEntry(string filterText)
	{
		var entries = from x in this._rootElement.Descendants("adress")
					  select new Entry {
						  Id = (string)x.Attribute("id"),
						  Name = (string)x.Attribute("name"),
						  Adress = (string)x.Attribute("adress"),
						  PLZ = (int)x.Attribute("plz"),
						  Place = (string)x.Attribute("place"),
						  Number = (string)x.Attribute("number"),
					  };

		var filteredEntries = entries.Where(x => !string.IsNullOrWhiteSpace(x.Name) && x.Name.StartsWith(filterText, StringComparison.CurrentCultureIgnoreCase));

		if (filteredEntries == null || filteredEntries.Count() <= 0) filteredEntries = entries.Where(x => !string.IsNullOrWhiteSpace(x.Adress) && x.Adress.StartsWith(filterText, StringComparison.CurrentCultureIgnoreCase));
		else return filteredEntries.ToList();

		if (filteredEntries == null || filteredEntries.Count() <= 0) filteredEntries = entries.Where(x => !string.IsNullOrWhiteSpace(Convert.ToString(x.PLZ)) && Convert.ToString(x.PLZ).StartsWith(filterText, StringComparison.CurrentCultureIgnoreCase));
		else return filteredEntries.ToList();

		if (filteredEntries == null || filteredEntries.Count() <= 0) filteredEntries = entries.Where(x => !string.IsNullOrWhiteSpace(x.Place) && x.Place.StartsWith(filterText, StringComparison.CurrentCultureIgnoreCase));
		else return filteredEntries.ToList();

		if (filteredEntries == null || filteredEntries.Count() <= 0) filteredEntries = entries.Where(x => !string.IsNullOrWhiteSpace(x.Number) && x.Number.StartsWith(filterText, StringComparison.CurrentCultureIgnoreCase));
		else return filteredEntries.ToList();

		return filteredEntries.ToList();
	}

	public List<Entry> SortEntries(string toSort)
	{
		var sortedList = from x in this._rootElement.Descendants("adress")
						 orderby x.Attribute(toSort).Value
						 select new Entry() {
							 Name = (string)x.Attribute("name"),
							 Adress = (string)x.Attribute("adress"),
							 PLZ = (int)x.Attribute("plz"),
							 Place = (string)x.Attribute("place"),
							 Number = (string)x.Attribute("number")
						 };

		return sortedList.Distinct().ToList();
	}
```

# Changelog

Alle wesentlichen Änderungen an CTX Form werden hier dokumentiert.

## 1.3.3 – 2026-11-27

### Fixed

- Übersetzungen für Formularblöcke im Editor und für den Formular-Inhaltstyp korrigiert.

### Changed

- Das Formular-Frontend und das Sortierfeld nutzen die React-APIs von WordPress
  über `@wordpress/element`.

## 1.3.2 – 2026-11-26

### Changed

- Das Formular-Frontend verwendet die gemeinsame wp-ui-Runtime und teilt
  Skript und Basis-CSS mit kompatiblen Plugins.

## 1.3.1 – 2026-11-04

### Changed

- Das GitHub-Release-Update und der Release-Ablauf verwenden die neue API von
  `wp-github-updater`.
- Neue Response-Blöcke erhalten ein gestaltetes Erfolgs-Template mit Icon und
  übersetzbaren Standardtexten.
- Textfelder bieten feste Eingabeeinschränkungen für Ziffern sowie lateinische
  Buchstaben und Zahlen; die Auswahl wird auch serverseitig geprüft.
- Die experimentelle Block-Werkzeugleiste ist bei den Formular-Container-,
  Feld- und Response-Blöcken deaktiviert.
- Österreichische deutsche Übersetzungen wurden aktualisiert.

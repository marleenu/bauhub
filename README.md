# Marleeni proovitöö

See on [Create React App](https://github.com/facebook/create-react-app) projekt.

## Käivitamine

Klooni projekt gitist.

Installi projekti kaustas Node'i dependencyd:
### `npm install`.

Käivita:
### `npm start`

See skript käivitab projekti aadressil [http://localhost:3000](http://localhost:3000),
samal ajal jooksutab json-serverit, mis serveerib mock-apit pordil 3333. Aadress: [http://localhost:3333/list](http://localhost:3333/list).

Kui tahta jooksutada ainult projekti, siis tuleb jooksutada käsku:

#### `npm start 3000`.

Serverit üksi saab jooksutada käsuga :
#### `npm server`.

### Mock server

Projekti root kaustas on fail `db.json`, kus on mock-api poolt tagastatav json.
Json-serveriga saab kasutada nii `get`, `post`, `put` kui `delete` requeste, kuid kustutamisel eemaldatakse kirje ka db.json failist.
Kui tahta faili uuesti täita (st kui frondi vaatest saavad kõik kirjed otsa :)), siis saab copy-pasteda api poolt tagastatava jsoni failist `db.json.example`.
const URL_DATA = 'https://organigrapp.onrender.com/api/tree';

const configBase = {
  template: 'tesacom',
  menu: {
    pdf: { text: "Exportar a PDF" },
    png: { text: "Exportar a PNG" },
  },
  mouseScrool: OrgChart.none,
  toolbar: {
    layout: true,
    zoom: true,
    fit: true,
    expandAll: true
  },
  nodeMenu: null,
  nodeBinding: {
    field_0: "name",
    field_1: "title",
    field_2: "email",
    field_3: "country",
    img_0: "img",
  },
  tags: {
      "area": {
        template: "areaTesacom"
      }
  },
  editForm: {
      generateElementsFromFields: false,
      elements: [
          { type: 'textbox', label: 'Nombre y Apellido', binding: 'name' },
          { type: 'textbox', label: 'Posición', binding: 'title' },
          { type: 'textbox', label: 'Email', binding: 'email' },
          { type: 'select', options: [
              {value: '', text: 'Global'},
              {value: '🇦🇷', text: '🇦🇷 Argentina'},
              {value: '🇨🇱', text: '🇨🇱 Chile'},
              {value: '🇵🇪', text: '🇵🇪 Perú'},
              {value: '🇵🇾', text: '🇵🇾 Paraguay'},
            ], 
          label: 'País', binding: 'country' },
      ],
      buttons:  {
          edit: null,
          remove: null,
          pdf: null,
          share: null,
      }
  },
}
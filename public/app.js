const configEdit = { ...configBase, 
  menu: {
    ...configBase.menu,
    json: { text: "Exportar datos"},
  },
  nodeMenu: {
    add: { text: "Agregar colaborador/a" },
    remove: { text: "Borrar" }
  },
  enableDragDrop: true,
  editForm: {
    ...configBase.editForm,
    elements: [
        { type: 'textbox', label: 'Nombre y Apellido', binding: 'name' },
        { type: 'textbox', label: 'Posición', binding: 'title' },
        { type: 'textbox', label: 'Foto', binding: 'img' },
        { type: 'textbox', label: 'Email', binding: 'email' },
        { type: 'select', options: [
            {value: '', text: 'Global'},
            {value: '🇦🇷', text: '🇦🇷 Argentina'},
            {value: '🇨🇱', text: '🇨🇱 Chile'},
            {value: '🇵🇪', text: '🇵🇪 Perú'},
            {value: '🇵🇾', text: '🇵🇾 Paraguay'},
          ], 
        label: 'País', binding: 'country' },
        { type: 'checkbox', label: 'Es área', binding: 'isArea' },
    ],
    buttons:  {
        ...configBase.editForm.buttons,
        edit: {
          icon: OrgChart.icon.edit(24,24,'#fff'),
          text: 'Editar',
          hideIfEditMode: true,
          hideIfDetailsMode: false
        }
    },
    addMore: null,
    cancelBtn: 'Cancelar',
    saveAndCloseBtn: 'Guardar',
},
}

const chart = new OrgChart(document.getElementById("tree"), configEdit);

fetch(URL_DATA)
  .then(r => r.json())
  .then(tree => chart.load(tree.data))
  .catch(console.log)

/*chart.on('init', function(sender){
  console.log("RELOAD!!!")
});*/

chart.on('updated', function(sender){
  sender.config.nodes = sender.config.nodes.map(n => ({ ...n, tags: n.isArea ? ['area']:[] }))
  //chart.load(sender.config.nodes)
  saveData(sender.config.nodes)
});

chart.on('removed', function(sender){
  sender.config.nodes = sender.config.nodes.map(n => ({ ...n, tags: n.isArea ? ['area']:[] }))
  //chart.load(sender.config.nodes)
  saveData(sender.config.nodes)
});

chart.on('added', function(sender){
  sender.config.nodes = sender.config.nodes.map(n => ({ ...n, tags: n.isArea ? ['area']:[] }))
  //chart.load(sender.config.nodes)
  saveData(sender.config.nodes)
});

function saveData(data){
  fetch(URL_DATA, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({data})
  })
    .then(r => r.json())
    .then(data => {
      snackbar();
    })
    .catch(console.log)
}

function snackbar() {
  var x = document.getElementById("snackbar");
  x.className = "show";
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}
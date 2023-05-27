OrgChart.SEARCH_PLACEHOLDER = "Busca por nombre, email, puesto, país...";
OrgChart.RES.IT_IS_LONELY_HERE_LINK = "Cargando...";

//---------------------------------------------------------
// COLABORADOR

OrgChart.templates.tesacom = Object.assign({}, OrgChart.templates.ana);
OrgChart.templates.tesacom.size = [350, 100];
OrgChart.templates.tesacom.node = 
'<rect x="0" y="0" class="shadow" height="{h}" width="{w}" fill="#ffffff" stroke-width="1" stroke="#CCCCCC" rx="7" ry="7"></rect><circle cx="45" cy="50" r="35" fill="#eee"></circle>';

OrgChart.templates.tesacom.field_0 = '<text width="230" text-overflow="ellipsis" style="font-size: 16px;" fill="#777777" x="90" y="35" text-anchor="start">{val}</text>';
OrgChart.templates.tesacom.field_1 = '<text width="230" text-overflow="ellipsis" style="font-size: 13px;" fill="#777777" x="90" y="58" text-anchor="start">{val}</text>';
OrgChart.templates.tesacom.field_2 = '<text width="230" text-overflow="ellipsis" style="font-size: 10px;" fill="#777777" x="90" y="77" text-anchor="start">{val}</text>';
OrgChart.templates.tesacom.field_3 = '<text width="230" text-overflow="ellipsis" style="font-size: 16px;" font-weight="bold" fill="#AAAAAA" x="340" y="20" text-anchor="end">{val}</text>';
OrgChart.templates.tesacom.img_0 = '<clipPath id="{randId}"><circle cx="45" cy="50" r="35"></circle></clipPath><image preserveAspectRatio="xMidYMid slice" clip-path="url(#{randId})" xlink:href="{val}" x="5" y="10" width="80" height="80"></image>';

OrgChart.templates.tesacom.plus = '<circle cx="15" cy="15" r="15" class="boc-fill" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line><line x1="15" y1="4" x2="15" y2="26" stroke-width="1" stroke="#aeaeae"></line>';
OrgChart.templates.tesacom.minus = '<circle cx="15" cy="15" r="15" class="boc-fill" stroke="#aeaeae" stroke-width="1"></circle><line x1="4" y1="15" x2="26" y2="15" stroke-width="1" stroke="#aeaeae"></line>';
OrgChart.templates.tesacom.link = '<path stroke-linejoin="round" stroke="#aeaeae" stroke-width="3px" fill="none" d="{edge}" />';

OrgChart.templates.tesacom.nodeMenuButton =
'<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" data-ctrl-n-menu-id="{id}">'
    + '<circle cx="106" cy="-24" r="15" fill="#000000" fill-opacity="0.05"></circle>'
    + '<circle cx="98" cy="-24" r="2" fill="#AEAEAE"></circle>'
    + '<circle cx="106" cy="-24" r="2" fill="#AEAEAE"></circle>'
    + '<circle cx="114" cy="-24" r="2" fill="#AEAEAE"></circle>'
+ '</g>';

OrgChart.templates.tesacom.expandCollapseSize = 36;

//---------------------------------------------------------
// AREA

OrgChart.templates.areaTesacom = Object.assign({}, OrgChart.templates.tesacom);
OrgChart.templates.areaTesacom.node = 
    '<rect fill="url(#{randId})" x="0" y="0" height="{h}" width="{w}" stroke-width="1" stroke="#aeaeae" rx="7" ry="7"></rect>';
OrgChart.templates.areaTesacom.defs = 
    '<linearGradient id="{randId}" x1="0%" y1="0%" x2="0%" y2="100%">'
    + '<stop offset="0%" style="stop-color:#fff;stop-opacity:1" />'
    + '<stop offset="100%" style="stop-color:#dde;stop-opacity:1" />'
    + '</linearGradient>';

OrgChart.templates.areaTesacom.field_0 = '<text width="230" text-overflow="ellipsis" style="font-size: 18px;" fill="#777777" x="90" y="45" text-anchor="start">{val}</text>';
OrgChart.templates.areaTesacom.field_1 = '<text width="230" text-overflow="ellipsis" style="font-size: 16px;" fill="#777777" x="90" y="68" text-anchor="start">{val}</text>';
OrgChart.templates.areaTesacom.field_2 = '';
OrgChart.templates.areaTesacom.field_3 = '<text width="230" text-overflow="ellipsis" style="font-size: 16px;" font-weight="bold" fill="#AAAAAA" x="340" y="20" text-anchor="end">{val}</text>';
OrgChart.templates.areaTesacom.nodeMenuButton = 
'<g style="cursor:pointer;" transform="matrix(1,0,0,1,225,105)" data-ctrl-n-menu-id="{id}">'
    + '<circle cx="106" cy="-24" r="15" fill="#000000" fill-opacity="0.05"></circle>'
    + '<circle cx="98" cy="-24" r="2" fill="#888888"></circle>'
    + '<circle cx="106" cy="-24" r="2" fill="#888888"></circle>'
    + '<circle cx="114" cy="-24" r="2" fill="#888888"></circle>'
+ '</g>';

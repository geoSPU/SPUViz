// Add AJAX request for data

// Latin American Data
var latinamerica = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/LatinAmericaData/master/LatinAmerica.geojson",
  dataType: "json",
  success: console.log("Latin America boundaries data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var falklands = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/LatinAmericaData/master/malvinas.geojson",
  dataType: "json",
  success: console.log("Falklands data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var eez = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/LatinAmericaData/master/EEZ.geojson",
  dataType: "json",
  success: console.log("EEZ data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Brasil Data
var cz = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/CZ.geojson",
  dataType: "json",
  success: console.log("CZ data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ts = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/TS.geojson",
  dataType: "json",
  success: console.log("TS data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var iw = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/IW.geojson",
  dataType: "json",
  success: console.log("IW data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var extensao = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/extensao_pc.geojson",
  dataType: "json",
  success: console.log("CP Extension data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ufs = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/unidades_federacao.geojson",
  dataType: "json",
  success: console.log("Brazilian boundaries data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var uc = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/UC.geojson",
  dataType: "json",
  success: console.log("UC data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var portos = $.ajax({
  url:"https://raw.githubusercontent.com/Cadastro-Marinho/BrasilData/master/portos.geojson",
  dataType: "json",
  success: console.log("Ports data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// Santa Catarina Data
var municipios = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/municipios.geojson",
  dataType: "json",
  success: console.log("municipios data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

// SPUData
var cessoes = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/cessoes.geojson",
  dataType: "json",
  success: console.log("Cessions data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ocupacoes = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/ocupacoes.geojson",
  dataType: "json",
  success: console.log("Ocupations data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var certdisp = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/certdisp.geojson",
  dataType: "json",
  success: console.log("CertDisp data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var autobras = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/autobras.geojson",
  dataType: "json",
  success: console.log("autobras data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LLTM_DEMARCADA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LLTM_DEMARCADA.geojson",
  dataType: "json",
  success: console.log("LLTM Demarcada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LLTM_HOMOLOGADA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LLTM_HOMOLOGADA.geojson",
  dataType: "json",
  success: console.log("LLTM Homologada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LLTM_PRESUMIDA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LLTM_PRESUMIDA.geojson",
  dataType: "json",
  success: console.log("LLTM Presumida data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_DEMARCADA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LPM_DEMARCADA.geojson",
  dataType: "json",
  success: console.log("LPM Demarcada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_HOMOLOGADA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LPM_HOMOLOGADA.geojson",
  dataType: "json",
  success: console.log("LPM Homologada data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var LPM_PRESUMIDA = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/linhas/LPM_PRESUMIDA.geojson",
  dataType: "json",
  success: console.log("LPM Presumida data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var transporte_aquaviario = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/transporte-aquaviario.geojson",
  dataType: "json",
  success: console.log("transporte_aquaviario data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});

var ranchos_pesca = $.ajax({
  url:"https://raw.githubusercontent.com/lfpdroubi/SPUData/master/ranchos_de_pesca.geojson",
  dataType: "json",
  success: console.log("ranchos_de_pesca data successfully loaded."),
  error: function (xhr) {
    alert(xhr.statusText);
  }
});  

/* when().done() SECTION*/
// Add the variable for each of your AJAX requests to $.when()
$.when(latinamerica, ufs, municipios, uc, eez, extensao, cz, ts, iw, falklands, 
portos, cessoes, ocupacoes, certdisp, autobras, LLTM_DEMARCADA, LLTM_HOMOLOGADA, 
LLTM_PRESUMIDA, LPM_DEMARCADA, LPM_HOMOLOGADA, LPM_PRESUMIDA, 
transporte_aquaviario).done(function() {
  
  var WSM = L.tileLayer(
    'http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}.png', {
		maxZoom: 18,
		label: "World Street Map",
		attribution: 'Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
    });
              
  var OpenStreetMap_Mapnik = L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      label: "OpenStreetMap",
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });

  var OpenTopoMap = L.tileLayer(
    'https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
      maxZoom: 17,
      label: "OpenTopoMap",
      attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https ap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
  });

  var wmsLayer = L.tileLayer.wms(
    'http://sigsc.sc.gov.br/sigserver/SIGSC/wms', {
      maxNativeZoom: 19,
      maxZoom: 100,
      layers: 'OrtoRGB-Landsat-2012',
      label: "SIG/SC",
      iconURL: 'sig-sc.png'
  });

  var Esri_WorldImagery = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxNativeZoom: 19,
      maxZoom: 100,
      label: "Esri World Imagery",
      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
  });
  
  var Esri_OceanBasemap = L.tileLayer(
    'https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}', {
     maxZoom: 13,
     label: "Esri Ocean Basemap",
     attribution: 'Tiles &copy; Esri &mdash; Sources: GEBCO, NOAA, CHS, OSU, UNH, CSUMB, National Geographic, DeLorme, NAVTEQ, and Esri'
  });
     
  var Esri_NatGeoWorldMap = L.tileLayer(
   'https://server.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}', {
     maxZoom: 16,
     label: 'Esri NatGeo World Map',
     attribution: 'Tiles &copy; Esri &mdash; National Geographic, Esri, DeLorme, NAVTEQ, UNEP-WCMC, USGS, NASA, ESA, METI, NRCAN, GEBCO, NOAA, iPC'
  });
  
  var map = L.map('map', {
      center: [-27.7000, -50.5000],
      zoomControl: false,
      zoom: 8,
      preferCanvas: false,
      attributionControl: false,
      fullscreenControl: true,
      fullscreenControlOptions: {
        position: 'topright'
      }
  });
  
  // Add Minimap
  var miniMap = new L.Control.MiniMap(Esri_NatGeoWorldMap, {
      position: 'topright',
      toggleDisplay: true
    }
  ).addTo(map);
  
  function gestaoPraiaStatus(feature){
    switch (feature.properties.gest_praia){
    	case 1 : return 'Sim' ;
      case 0 : return 'Não' ;
      	break;
    }
  }

  function getAreaColor(feature){
    console.log(feature);
  	switch (feature.properties.gest_praia){
    	case 1 : return 'OrangeRed' ;
      case 0 : return 'LightYellow' ;
      	break;
    }
  }

  function areaStyle(feature){
  	return {
    	fillColor: getAreaColor(feature),
      weight: 2,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.5
    };
  }
            
  // Add requested external GeoJSON to map
  
  proj4.defs('EPSG:31982', '+proj=utm +zone=22 +south +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs ');

  // Adds SIRGAS2000 GeoJSON
  var LatinAmerica = L.geoJSON(latinamerica.responseJSON, {
    style: function(feature) {
      return{
        fillOpacity: 0.25,
        color: feature.COLORMAP,
        weight: 0.75
      };
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Nome: </b>" + feature.properties.LOCLNGNAM + "<br>" +
        "<b>Status: </b>" + feature.properties.STATUS + "<br>" +
        "<b>Área: </b>" + feature.properties.SQKM.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + " km &#178; <br>" +
        "<b>População (2019): </b>" + feature.properties.POP_CNTRY.toLocaleString('de-DE', { maximumFractionDigits: 0 })
        );
      layer.bindTooltip(feature.properties.LOCSHRTNAM,{
        permanent: false
      });
    }
  }).addTo(map);
  
  var UF = L.Proj.geoJson(ufs.responseJSON, {
    style: {
      color: '#f1f4c7',
      weight: 2,
      fillOpacity: 0.25
    },
      onEachFeature: function( feature, layer ){
        layer.bindPopup(
          "<b>Estado: </b>" + feature.properties.NM_ESTADO + "<br>" +
          "<b>Região: </b>" + feature.properties.NM_REGIAO + "<br>" +
          "<b>Código: </b>" + feature.properties.CD_GEOCUF
        );
        layer.bindTooltip(feature.properties.NM_ESTADO,{
          permanent: false
        });
      }
  }).addTo(map);
  
  var MUNICIPIOS = L.geoJSON(municipios.responseJSON, {
    style: areaStyle,
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Município: </b>" + feature.properties.nome + "<br>" +
        "<b>Geocodigo: </b>" + feature.properties.geocodigo + "<br>" +
        "<b>Gestão de Praias: </b>" + gestaoPraiaStatus(feature)  + "<br>" +
        "<b>NUP: </b>" + "<a href=" + feature.properties.nup_gpraia + ">Link para portaria.</a>"
        );
      layer.bindTooltip(feature.properties.nome,{
        permanent: false
      });
    }
  }
  );

  function link(feature){
    return "<a href= http://www.marineregions.org/gazetteer.php?p=details&id=" + feature.properties.MRGID + " target='_blank    '>Link.</a>"; 
  }
  
  var EEZ = L.geoJSON(eez.responseJSON, {
  style: {
    color: '#133863',
    weight: 2,
    fillOpacity: 0.25
  },
  onEachFeature: function( feature, layer ){
                 layer.bindPopup(
                   "<b>Descrição: </b>" + feature.properties.GEONAME + "<br>" +
                   "<b>Fonte: </b>" + link(feature) + "<br>" +
                   "<b>Área (km &#178; ): " + feature.properties.AREA_KM2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "    <br>" +
                   "<b>Obs.: </b>" + "Não contempla a extensão da plataforma continental."
                   );
    }
  }
  ).addTo(map);
  
  var EXTENSAO = L.geoJSON(extensao.responseJSON, {
    style: {
      color: 'LightGray',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Nome: </b>" + feature.properties.nome + "<br>" +
                     "<b>Região: </b>" +  feature.properties.regiao + "<br>" +
                     "<b>Área (km &#178; ): "
                     );
      }
    }
  ).addTo(map);
  
  var FALKLANDS = L.geoJSON(falklands.responseJSON, {
    style: {
      color: '#133863',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + "Malvinas" + "<br>" +
                     "<b>Fonte: </b>" + "<a href= http://www.marineregions.org/gazetteer.php?p=details&id=47625 target='_blank'>Link.</a>" + "<br>" +
                     "<b>Área (km &#178; ): " + "<br>" +
                     "<b>Obs.: </b>"
                     );
      }
    }
  ).addTo(map);
  
  var CZ = L.geoJSON(cz.responseJSON, {
    style:{
      color: '#236AB9',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + "Zona Contígua (24 MN)" + "<br>" +
                     "<b>Fonte: </b>" + "<a href= http://www.marineregions.org/gazetteer.php?p=details&id=49410 target='_blank'>Link.</a>" + "<br>" +
                     "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Obs.: </b>" + "-."
                     );
      }
    }
  ).addTo(map);

  var TS = L.geoJSON(ts.responseJSON, {
    style:{
      color: '#609CE1',
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + "Mar Territorial (12 MN)" + "<br>" +
                     "<b>Fonte: </b>" + "<a href=  http://www.marineregions.org/gazetteer.php?p=details&id=49178 target='_blank'>Link.</a>" + "<br>" +
                     "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Obs.: </b>" + "-."
                     );
      }
    }
  ).addTo(map);

  var IW = L.geoJSON(iw.responseJSON, {
    style:{
      color: '#E1ECF9',
      weight: 2,
      fillOpacity: 0.25
    },
      onEachFeature: function( feature, layer ){
                     layer.bindPopup(
                       "<b>Descrição: </b>" + "Águas Internas (12 MN)" + "<br>" +
                       "<b>Fonte: </b>" + "<a href=  http://www.marineregions.org/gazetteer.php?p=details&id=49532 target='_blank'>Link.</a>" + "<br>" +
                       "<b>Área (km &#178; ): " + feature.properties.area_km2.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                       "<b>Obs.: </b>" + "-."
                       );
        }
      }
  ).addTo(map);
      
  var CertDisp = L.geoJSON(certdisp.responseJSON, {
    style:{
      color: 'AntiqueWhite',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Concedida: </b>" + feature.properties.concedida  + "<br>"
                     );

    }
  }
  ).addTo(map);

  var UC = L.geoJSON(uc.responseJSON, {
    style:{
      color: 'DarkOliveGreen',
      weight: 2,
      fillOpacity: 0.25
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Nome: </b>" + feature.properties.NOME_UC1 + "<br>" +
                     "<b>Categoria: </b>" + feature.properties.CATEGORI3 + "<br>" +
                     "<b>Esfera: </b>" + feature.properties.ESFERA5  + "<br>" +
                     "<b>Organização: </b>" + feature.properties.NOME_ORG12
                     );

    }
  }
  ).addTo(map);

  var Portos = L.geoJSON(portos.responseJSON, {
    style: function(feature) {
      return{
        fillOpacity: 0.25,
        color: 'orange',
        weight: 0.75
      };
    },
    onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Descrição: </b>" + feature.properties.descricao + "<br>" +
                     "<b>Portaria: </b>" + feature.properties.portaria + "<br>" +
                     "<b>Data: </b>" + feature.properties.data + "<br>" +
                     "<b>Fonte: </b>" + "<a href=" + feature.properties.fonte + ">Link para portaria.</a>"
                     );

      }
    }
  ).addTo(map);
  
  var Cessoes = L.geoJSON(cessoes.responseJSON, {
      style: function(feature) {
        return{
          color: 'red',
          weight: 1
        };
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>CNPJ: </b>" + feature.properties.cnpj + "<br>" +
                     "<b>Protocolo: </b>" + feature.properties.protocolo + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Referência: </b>" + feature.properties.ref + "<br>" +
                     "<b>Área: </b>" + feature.properties.area.toLocaleString('de-DE', { maximumFractionDigits: 2 })
                     );

      }
    }
  ).addTo(map);

  var Ocupacoes = L.geoJSON(ocupacoes.responseJSON, {
      style: {
        color: 'royalblue',
        weight: 1
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>RIP: </b>" + feature.properties.rip + "<br>" +
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Área Total: </b>" + feature.properties.area_total.toLocaleString('de-DE', { maximumFractionDigits: 2 }) + "<br>" +
                     "<b>Área União: </b>" + feature.properties.area_uniao.toLocaleString('de-DE', { maximumFractionDigits: 2 })
                     );
      }
    }
  ).addTo(map);
  
  var AutObras = L.geoJSON(autobras.responseJSON, {
      style: function(feature) {
        return{
          color: 'Violet',
          weight: 1
        };
      },
      onEachFeature: function( feature, layer ){
                   layer.bindPopup(
                     "<b>Interessado: </b>" + feature.properties.interessado + "<br>" +
                     "<b>CNPJ: </b>" + feature.properties.cnpj + "<br>" +
                     "<b>Protocolo: </b>" + feature.properties.protocolo + "<br>" +
                     "<b>NUP: </b>" + feature.properties.nup + "<br>" +
                     "<b>Referência: </b>" + feature.properties.ref + "<br>" +
                     "<b>Área: </b>" + feature.properties.area.toLocaleString('de-DE', { maximumFractionDigits: 2 })
                     );

      }
    }
  ).addTo(map);

  var LLTM_DEM = L.geoJSON(LLTM_DEMARCADA.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      dashArray: "20 20" 
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);
  

  var LLTM_HOM = L.geoJSON(LLTM_HOMOLOGADA.responseJSON, {
    style: {
      color: 'red',
      weight: 2
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);              

  var LLTM_PRE = L.geoJSON(LLTM_PRESUMIDA.responseJSON, {
    style: {
      color: 'red',
      weight: 2,
      opacity: 0.25,
      dashArray: "20 20"                
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);   
  
  var LPM_DEM = L.geoJSON(LPM_DEMARCADA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2,
      dashArray: "20 20"  
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map); 
      
  var LPM_HOM = L.geoJSON(LPM_HOMOLOGADA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);

  var LPM_PRE = L.geoJSON(LPM_PRESUMIDA.responseJSON, {
    style: {
      color: 'blue',
      weight: 2,
      opacity: 0.25,
      dashArray: "20 20"  
    },
    onEachFeature: function( feature, layer ){
      layer.bindPopup(
        "<b>Linha: </b>" + feature.properties.Linha + "<br>" +
        "<b>Status: </b>" + feature.properties.Status + "<br>" +
        "<b>SRID Origem: </b>" + feature.properties.SRID  
      );
      layer.setText(feature.properties.Linha + " " +
                    feature.properties.Status, {
                      repeat: false,
                      offset: 12,
                      attributes: {
                        'font-weight': 'bold',
                        'font-size': '12'}
                    });
    }
  }
  ).addTo(map);
  
  // Creating MapkeyIcon object
  var balsa = L.icon.mapkey({
    icon: 'sailboat',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var aeroporto = L.icon.mapkey({
    icon: 'airport',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var marina = L.icon.mapkey({
    icon: 'marina',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var heliponto = L.icon.mapkey({
    icon: 'helicopter',
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  var pesca = L.icon.mapkey({
    icon:"fishing",
    color:'#725139',
    background:'#f2c357',
    size:30
  });
  
  // Append to marker:
  var Balsas = L.geoJSON(transporte_aquaviario.responseJSON, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon:marina});
    }
  }
  );
  
  
  // Append to marker:
  var Pesca = L.geoJSON(ranchos_pesca.responseJSON, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng, {icon:pesca});
    }
  });
    
  var baseLayers = {
      "SIG-SC": wmsLayer,
      "OpenTopo": OpenTopoMap,
      "Esri World Imagery": Esri_WorldImagery,
      "World Street Map": WSM,
      };

  var groupedOverlays = {
    "Destinação": {
      "Portos": Portos,
      "Cessões": Cessoes,
      "Ocupações": Ocupacoes,
      "Certidões de Disponibilidade": CertDisp,
      "Autorizações de Obras": AutObras,
      "TAUS": Pesca,
      "Transporte Marítimo": Balsas
    },
    "Limites territoriais":{
      "América Latina": LatinAmerica,
      "Estados BR": UF,
      "Municípios SC": MUNICIPIOS,
      "Águas Internas": IW,
      "Mar Territorial (12MN)": TS,
      "Zona Contígua (24MN)": CZ,
      "Zona Econômica Exclusiva (200MN)": EEZ,
      "Extensão da PC": EXTENSAO
    },
    "Ambiental": {
      "Unidades de Conservação": UC
    },
    "Linhas": {
      "LPM Homologada": LPM_HOM,
      "LPM Demarcada": LPM_DEM,
      "LPM Presumida": LPM_PRE,
      "LLTM Homologada": LLTM_HOM,
      "LLTM Demarcada": LLTM_DEM,
      "LLTM Presumida": LLTM_PRE
    }
  };
  
  var basemaps = [
    wmsLayer, Esri_OceanBasemap, Esri_WorldImagery, Esri_NatGeoWorldMap, 
    OpenStreetMap_Mapnik, OpenTopoMap
    
    ]
  
  map.addControl(L.control.basemaps({
    basemaps: basemaps,
    tileX: 0,  // tile X coordinate
    tileY: 0,  // tile Y coordinate
    tileZ: 1   // tile zoom level
  }));

  L.control.groupedLayers(null, groupedOverlays, {
    position: 'topleft'
  }).addTo(map);

  var searchControl = new L.Control.Search({
    layer: Cessoes,
  	propertyName: 'interessado',
    marker: false,
    moveToLocation: function(latlng, title, map) {
        //map.fitBounds( latlng.layer.getBounds() );
        var zoom = map.getBoundsZoom(latlng.layer.getBounds());
        map.setView(latlng, zoom); // access the zoom
        }
  }
  ).addTo(map);

  L.control.mousePosition({
    position: 'bottomleft'
  }).addTo(map);

  L.control.betterscale({
    metric:  true,
    imperial: false,
    position: 'bottomleft'
  }).addTo(map);
  
  L.easyPrint({
    tileLayer: OpenStreetMap_Mapnik,
    title: 'Screenshot',
    position: 'topleft',
    sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
    exportOnly: true,
    hideControlContainer: false,
    hideClasses: ['leaflet-control-search', 
    'leaflet-control-mouseposition', 'leaflet-control-layers',
    'leaflet-control-easyPrint', 'leaflet-control-zoom-fullscreen', 
    'basemaps']
  }).addTo(map);
  
  L.latlngGraticule({
    showLabel: true,
    color: '#222',
    zoomInterval: [
      {start: 2, end: 3, interval: 30},
      {start: 4, end: 4, interval: 10},
      {start: 5, end: 7, interval: 5},
      {start: 8, end: 10, interval: 1},
      {start: 11, end:15, interval:.5}
    ]
  }).addTo(map);
  
  //logo position: bottomright, topright, topleft, bottomleft
  var logo = L.control({position: 'bottomleft'});
  
  logo.onAdd = function(map){
    var div = L.DomUtil.create('div', 'logoContainer');
    div.innerHTML= "<img src='https://raw.githubusercontent.com/lfpdroubi/SPUData/master/SPU.jpg' width='60' height='60' style='position: absolute; bottom: -5px; left: 0px; opacity:0.5;filter:alpha(opacity=50);' />";
    return div;
  }
  
  logo.addTo(map);

});
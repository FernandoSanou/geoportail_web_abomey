ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([205221.632308, 791400.107827, 228787.480373, 813550.339577]);
var wms_layers = [];

var format_abomey_arrond_0 = new ol.format.GeoJSON();
var features_abomey_arrond_0 = format_abomey_arrond_0.readFeatures(json_abomey_arrond_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abomey_arrond_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abomey_arrond_0.addFeatures(features_abomey_arrond_0);
var lyr_abomey_arrond_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_abomey_arrond_0, 
                style: style_abomey_arrond_0,
                popuplayertitle: 'abomey_arrond',
                interactive: true,
                title: '<img src="styles/legend/abomey_arrond_0.png" /> abomey_arrond'
            });
var format_route_abomey_1 = new ol.format.GeoJSON();
var features_route_abomey_1 = format_route_abomey_1.readFeatures(json_route_abomey_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_route_abomey_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_route_abomey_1.addFeatures(features_route_abomey_1);
var lyr_route_abomey_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_route_abomey_1, 
                style: style_route_abomey_1,
                popuplayertitle: 'route_abomey',
                interactive: true,
    title: 'route_abomey<br />\
    <img src="styles/legend/route_abomey_1_0.png" /> NC<br />\
    <img src="styles/legend/route_abomey_1_1.png" /> RN<br />\
    <img src="styles/legend/route_abomey_1_2.png" /> RNIE<br />\
    <img src="styles/legend/route_abomey_1_3.png" /> <br />' });
var format_localite_com_2 = new ol.format.GeoJSON();
var features_localite_com_2 = format_localite_com_2.readFeatures(json_localite_com_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_localite_com_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_localite_com_2.addFeatures(features_localite_com_2);
var lyr_localite_com_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_localite_com_2, 
                style: style_localite_com_2,
                popuplayertitle: 'localite_com',
                interactive: true,
    title: 'localite_com<br />\
    <img src="styles/legend/localite_com_2_0.png" /> Chef Lieu Arrondissement<br />\
    <img src="styles/legend/localite_com_2_1.png" /> CD<br />\
    <img src="styles/legend/localite_com_2_2.png" /> VQH<br />\
    <img src="styles/legend/localite_com_2_3.png" /> <br />' });

lyr_abomey_arrond_0.setVisible(true);lyr_route_abomey_1.setVisible(true);lyr_localite_com_2.setVisible(true);
var layersList = [lyr_abomey_arrond_0,lyr_route_abomey_1,lyr_localite_com_2];
lyr_abomey_arrond_0.set('fieldAliases', {'qc_id': 'qc_id', 'objectid_1': 'objectid_1', 'arrond_l': 'arrond_l', 'arrond_c': 'arrond_c', 'arrond_l_a': 'arrond_l_a', 'densite': 'densite', 'z_projet_c': 'z_projet_c', 'pop': 'pop', 'km': 'km', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_route_abomey_1.set('fieldAliases', {'qc_id': 'qc_id', 'num_route': 'num_route', 'type': 'type', 'cl_admin': 'cl_admin', 'revetement': 'revetement', 'praticab': 'praticab', 'chaussee_s': 'chaussee_s', 'voie_local': 'voie_local', 'etat': 'etat', 'date': 'date', 'franchisst': 'franchisst', 'ech_carto': 'ech_carto', 'source': 'source', 'commentair': 'commentair', 'shape_leng': 'shape_leng', });
lyr_localite_com_2.set('fieldAliases', {'qc_id': 'qc_id', 'nom': 'nom', 'type': 'type', 'arrond': 'arrond', 'commune': 'commune', 'depart': 'depart', 'longitude': 'longitude', 'latitude': 'latitude', });
lyr_abomey_arrond_0.set('fieldImages', {'qc_id': '', 'objectid_1': '', 'arrond_l': '', 'arrond_c': '', 'arrond_l_a': '', 'densite': '', 'z_projet_c': '', 'pop': 'TextEdit', 'km': 'TextEdit', 'shape_leng': '', 'shape_area': '', });
lyr_route_abomey_1.set('fieldImages', {'qc_id': '', 'num_route': '', 'type': '', 'cl_admin': '', 'revetement': '', 'praticab': '', 'chaussee_s': '', 'voie_local': '', 'etat': '', 'date': '', 'franchisst': '', 'ech_carto': '', 'source': '', 'commentair': '', 'shape_leng': '', });
lyr_localite_com_2.set('fieldImages', {'qc_id': '', 'nom': '', 'type': '', 'arrond': '', 'commune': '', 'depart': '', 'longitude': '', 'latitude': '', });
lyr_abomey_arrond_0.set('fieldLabels', {'qc_id': 'no label', 'objectid_1': 'no label', 'arrond_l': 'no label', 'arrond_c': 'no label', 'arrond_l_a': 'no label', 'densite': 'no label', 'z_projet_c': 'no label', 'pop': 'no label', 'km': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_route_abomey_1.set('fieldLabels', {'qc_id': 'no label', 'num_route': 'no label', 'type': 'no label', 'cl_admin': 'no label', 'revetement': 'no label', 'praticab': 'no label', 'chaussee_s': 'no label', 'voie_local': 'no label', 'etat': 'no label', 'date': 'no label', 'franchisst': 'no label', 'ech_carto': 'no label', 'source': 'no label', 'commentair': 'no label', 'shape_leng': 'no label', });
lyr_localite_com_2.set('fieldLabels', {'qc_id': 'no label', 'nom': 'no label', 'type': 'no label', 'arrond': 'no label', 'commune': 'no label', 'depart': 'no label', 'longitude': 'no label', 'latitude': 'no label', });
lyr_localite_com_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
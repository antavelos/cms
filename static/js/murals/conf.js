
var Conf = (function(self) {
	
	"use strict";

	self.stripData =  [
	{
	  id: 1, 
	  title:"TinTin in America",
	  artist:"Hergé",
	  address:"Midi Station",
	  img:"img/stripes/tintin_ameriques.jpg",
	  lat: 50.8348278,
	  lng: 4.3365303
	},
	{
	  id: 2,  
	  title:"Le Chat",
	  artist:"Geluck",
	  address:"Boulevard du Midi",
	  img:"img/stripes/le_chat.jpg",
	  lat: 50.83784442794301,
	  lng: 4.341981410980225
	},
	{
	  id: 3,  
	  title:"Jojo",
	  artist:"Geerts",
	  address:"Rue Piermans",
	  img:"img/stripes/jojo.jpg",
	  lat: 50.83512061930507,
	  lng: 4.3454790115356445
	},
	{
	  id: 4,  
	  title:"La patrouille des Castors",
	  artist:"Mitacq",
	  address:"Rue Blaes 200",
	  img:"img/stripes/la_patrouille_des_castores.jpg",
	  lat: 50.83562202885364,
	  lng: 4.344427585601807
	},
	{
	  id: 5,  
	  title:"Boule et Bill",
	  artist:"Roba",
	  address:"Rue du Chevreuil",
	  img:"img/stripes/boule_et_bill.jpg",
	  lat: 50.83764116413087,
	  lng: 4.34558629989624
	},
	{
	  id: 6,  
	  title:"Odilon Verjus",
	  artist:"Verron & Yann",
	  address:"Rue des Capucins",
	  img:"img/stripes/odilon.jpg",
	  lat: 50.838643923680884,
	  lng: 4.34633731842041
	},
	{
	  id: 7,  
	  title:"Blondin et Cirage",
	  artist:"Jijé",
	  address:"Rue des Capucins",
	  img:"img/stripes/blondin_et_cirage.jpg",
	  lat: 50.837835137032755,
	  lng: 4.348441833868378
	},
	{
	  id: 8,  
	  title:"Quick & Flupke",
	  artist:"Hergé",
	  address:"Rue Haute",
	  img:"img/stripes/quick_flupke.jpg",
	  lat: 50.83758444482048,
	  lng: 4.349010462179535
	},
	{
	  id: 9,  
	  title:"Passe-moi l’ciel",
	  artist:"Stuff et Janry",
	  address:"Rue des Minimes 96",
	  img:"img/stripes/passe_moi_le_ciel.jpg",
	  lat: 50.8387322,
	  lng: 4.3520306
	},
	{
	  id: 10,  
	  title:"Isabelle & Calendula",
	  artist:"Will",
	  address:"Rue de la Verdure",
	  img:"img/stripes/isabelle_et_calendula.jpg",
	  lat: 50.84540680000001,
	  lng: 4.341997799999945
	},
	{
	  id: 11,  
	  title:"Monsieur Jean",
	  artist:"Dupuy & Berberian",
	  address:"Rue des Bogards",
	  img:"img/stripes/monsieur_jean.jpg",
	  lat: 50.844443245395574,
	  lng: 4.348182678222656
	},
	{
	  id: 12,  
	  title:"Olivier Rameau",
	  artist:"Dany",
	  address:"Rue du Chêne",
	  img:"img/stripes/olivier_rameau.jpg",
	  lat: 50.845025847685235,
	  lng: 4.349298477172852
	},
	{
	  id: 13,  
	  title:"Tintin",
	  artist:"Hergé",
	  address:"Rue de l’etuve",
	  img:"img/stripes/tintin_escalier.jpg",
	  lat: 50.84543231009049,
	  lng: 4.350371360778809
	},
	{
	  id: 14,  
	  title:"Ric Hochet",
	  artist:"Tibet & Duchâteau",
	  address:"Rue des Bons Secours",
	  img:"img/stripes/ric_hochet.jpg",
	  lat: 50.84583876895451,
	  lng: 4.347968101501465
	},
	{
	  id: 15,  
	  title:"Victor Sackville",
	  artist:"Carin",
	  address:"Rue du Marché au Charbon",
	  img:"img/stripes/victor_sackville.jpg",
	  lat: 50.84610973956318,
	  lng: 4.348762035369873
	},
	{
	  id: 16,  
	  title:"The Passage",
	  artist:"Schuiten",
	  address:"Rue du Marché au Charbon",
	  img:"img/stripes/le_passage.jpg",
	  lat: 50.84628586961485,
	  lng: 4.350521564483643
	},
	{
	  id: 17,  
	  title:"Broussaille",
	  artist:"Frank Pé",
	  address:"Rue du Marché au Charbon",
	  img:"img/stripes/brussaille.jpg",
	  lat: 50.846746514298516,
	  lng: 4.349427223205566
	},
	{
	  id: 18,  
	  title:"Néron",
	  artist:"Sleen",
	  address:"Place Saint-Gery",
	  img:"img/stripes/neron.jpg",
	  lat: 50.84770843411863,
	  lng: 4.346809387207031
	},
	{
	  id: 19,  
	  title:"Astérix et Obélix",
	  artist:"Goscinny et Uderzo",
	  address:"Rue de la Buanderie",
	  img:"img/stripes/asterix_et_obelix.jpg",
	  lat: 50.84640780541495,
	  lng: 4.342367649078369
	},
	{
	  id: 20,  
	  title:"Lucky Luke",
	  artist:"Morris",
	  address:"Rue de la Buanderie",
	  img:"img/stripes/luky_luke.jpg",
	  lat: 50.84731553968688,
	  lng: 4.341466426849365
	},
	{
	  id: 21,  
	  title:"Cori le Mousaillon",
	  artist:"Bob de Moor",
	  address:"Rue des Fabriques",
	  img:"img/stripes/cori_le_mousaillon.jpg",
	  lat: 50.84829099563358,
	  lng: 4.342195987701416
	},
	{
	  id: 22,  
	  title:"Les rêves de Nick",
	  artist:"Herman",
	  address:"Rue des Fabriques",
	  img:"img/stripes/reves_de_nick.jpg",
	  lat: 50.848765168240114,
	  lng: 4.341273307800293
	},
	{
	  id: 23,  
	  title:"Caroline Baldwin",
	  artist:"Taymans & Wesel",
	  address:"Rue de la Poudrière",
	  img:"img/stripes/caroline_baldwin.jpg",
	  lat: 50.84873807279245,
	  lng: 4.338955879211426
	},
	{
	  id: 24,  
	  title:"L’Ange de Sambre",
	  artist:"Yslaire",
	  address:"Rue des Chartreux",
	  img:"img/stripes/ange_de_sambre.jpg",
	  lat: 50.848941288266396,
	  lng: 4.346873760223389
	},
	{
	  id: 25,  
	  title:"Blake & Mortimer",
	  artist:"Jacobs",
	  address:"Rue du Houblon",
	  img:"img/stripes/blake_et_mortimer.jpg",
	  lat: 50.85100048846508,
	  lng: 4.342002868652344
	},
	{
	  id: 26,  
	  title:"Cubitus",
	  artist:"Dupa",
	  address:"Rue de Flandre",
	  img:"img/stripes/cubitus.jpg",
	  lat: 50.85278866752064,
	  lng: 4.345307350158691
	},
	{
	  id: 27,  
	  title:"Billy the Cat",
	  artist:"Colman & Desberg",
	  address:"Rue d’Ophem",
	  img:"img/stripes/billy_the_cat.jpg",
	  lat: 50.85349308287152,
	  lng: 4.345242977142334
	},
	{
	  id: 28,  
	  title:"Bob et Bobette",
	  artist:"Vandersteen",
	  address:"Rue de Laeken",
	  img:"img/stripes/bob_et_bobette.jpg",
	  lat: 50.85464450813298,
	  lng: 4.352259635925293
	},
	{
	  id: 29,  
	  title:"La Vache",
	  artist:"Johan de Moor",
	  address:"Hôtel Sleepwell Rue du Damier 23",
	  img:"img/stripes/la_vache.jpg",
	  lat: 50.8528725,
	  lng: 4.357844
	},
	{
	  id: 30,  
	  title:"Gaston Lagaffe",
	  artist:"Franquin",
	  address:"Rue de l’Ecuyer",
	  img:"img/stripes/gaston.jpg",
	  lat: 50.84924610981744,
	  lng: 4.353740215301514
	},
	{
	  id: 31,  
	  title:"Le Scorpion",
	  artist:"Marini",
	  address:"Rue du Treurenberg",
	  img:"img/stripes/le_scorpion.jpg",
	  lat: 50.847762626194374,
	  lng: 4.362130165100098
	},
	{
	  id: 32,  
	  title:"Le Jeune Albert",
	  artist:"Chaland",
	  address:"Rue des Alexiens",
	  img:"img/stripes/le_jeune_albert.jpg",
	  lat: 50.843359314800274,
	  lng: 4.350113868713379
	},
	{
	  id: 33,  
	  title:"Corto Maltese",
	  artist:"Pratt",
	  address:"Quai de la voirie",
	  img:"img/stripes/corto_maltese.jpg",
	  lat: 50.8605342,
	  lng: 4.3485253
	},
	{
	  id: 34,  
	  title:"XIII",
	  artist:"William Vance et Jean Van Hamme",
	  address:"Rue Philippe de Champagne",
	  img:"img/stripes/xIII.jpg",
	  lat: 50.8430806,
	  lng: 4.3483808
	},
	{
	  id: 35,  
	  title:"Yoko Tsuno",
	  artist:"Roger Leloup",
	  address:"Rue Terre Neuve",
	  img:"img/stripes/yoko_tsuno.jpg",
	  lat: 50.8425826,
	  lng: 4.347409500000026
	},
	{
	  id: 36,  
	  title:"Thorgal",
	  artist:"Grzegorz Rosinski et Jean Van Hamme",
	  address:"Place Anneessens 2a",
	  img:"img/stripes/thorgal.jpg",
	  lat: 50.84361752675493,
	  lng: 4.344090906745919
	},
	{
	  id: 37,  
	  title:"Martine",
	  artist:"Marlier",
	  address:"Avenue de la Reine 325",
	  img:"img/stripes/martine.jpg",
	  lat: 50.876218313965936,
	  lng: 4.359297752380371
	},
	{
	  id: 38,  
	  title:"Le roi des mouches",
	  artist:"Mezzo",
	  address:"Rue Stiernet",
	  img:"img/stripes/le_roi_des_mouches.jpg",
	  lat: 50.87640787001476,
	  lng: 4.357624053955078
	},
	{
	  id: 39,  
	  title:"Lincoln",
	  artist:"Jouvray",
	  address:"Rue des Palais",
	  img:"img/stripes/lincoln.jpg",
	  lat: 50.877260862693085,
	  lng: 4.359405040740967
	},
	{
	  id: 40,  
	  title:"Titeuf",
	  artist:"Zep",
	  address:"Avenue Bockstael",
	  img:"img/stripes/titeuf.jpg",
	  lat: 50.87008440570966,
	  lng: 4.343976974487305
	},
	{
	  id: 41,  
	  title:"Le Petit Spirou",
	  artist:"Tome et Janry",
	  address:"Boulevard du Centenaire (Place de Bruparck)",
	  img:"img/stripes/le_petit_spirou.jpg",
	  lat: 50.8942608,
	  lng: 4.34231
	},
	{
	  id: 42,  
	  title:"Kiekeboe",
	  artist:"Merho",
	  address:"Avenue du Gros Tilleul 2",
	  img:"img/stripes/kiekeboe.jpg",
	  lat: 50.8936569,
	  lng: 4.3516674
	},
	{
	  id: 43,  
	  title:"Gil Jourdan",
	  artist:"Maurice Tillieux",
	  address:"Rue Léopold I 201",
	  img:"img/stripes/giljourdan.jpg",
	  lat: 50.877220244348166,
	  lng: 4.344234466552734
	},
	{
	  id: 44,  
	  title:"Natacha",
	  artist:"François Walthéry",
	  address:"Rue Jan Bollen 76",
	  img:"img/stripes/natacha.jpg",
	  lat: 50.8789322,
	  lng: 4.3467511
	},
	{
	  id: 45,  
	  title:"Marsupilami",
	  artist:"Franquin",
	  address:"Avenue Houba de Strooper, 141",
	  img:"img/stripes/marsupilami.jpg",
	  lat: 50.8907142,
	  lng: 4.337164400000006
	}];

 	return self;
}(Conf || {}));
var element = document.getElementById("id01");element.innerHTML = "LAST UPDATE- 	01-12-21										";					
																
																
																
																
																
var myApp = angular.module('myApp', ['ngRoute'])																
																
//ng-route config																
.config(function ($routeProvider, $locationProvider){																
  $routeProvider																
    .when('/home', {																
      templateUrl: 'default.html',																
    })																
    .when('/contact-info/:contact_index', {																
      templateUrl: 'contact_info.html',																
      controller: 'contactInfoCtrl'																
    })																
    																
    .otherwise({redirectTo: '/home'});																
})																
																
// controllers																
.controller('navCtrl', function ($scope) {																
  $scope.nav = {																
    navItems: ['home', 'add'],																
    selectedIndex: 0,																
    navClick: function ($index) {																
      $scope.nav.selectedIndex = $index;																
    }																
  };																
})																
																
.controller('homeCtrl', function ($scope, ContactService){																
  $scope.contacts = ContactService.getContacts();																
})																
																
.controller('contactInfoCtrl', function ($scope, $routeParams){																
  var index = $routeParams.contact_index;																
  $scope.currentContact = $scope.contacts[index];																
})																
																
																
																
// directives																
.directive('contact', function () {																
  return {																
    restrict: 'E',																
    replace: true,																
    templateUrl: 'contact.html'																
  }																
})																
																
// services																
.factory('ContactService', [function () {																
  var factory = {};																
																
  factory.getContacts = function () {																
    return contactList;																
  }																
																
  // contact list, usually would be a separate database																
  var contactList = [																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
{id: 1, name: '	01-12-21', total: '  	316	',positive:' 	20	',recoverd:' 	23	',death:' 	0	',active:' 	316		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	46	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		2	', amount2: 'RECOVERED-	4	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	10	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		2	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		2	', amount6: 'RECOVERED-	3	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	20	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	7	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	5	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	15	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		0	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	59	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	3	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	18	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	5	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	4	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		2	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	2	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		1	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	18	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	1	', GIFTS22: 'DEATH:-	0	', amount22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	11	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	3	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
																
{id: 1, name: '	30-11-21', total: '  	318	',positive:' 	34	',recoverd:' 	31	',death:' 	0	',active:' 	318		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	48	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	11	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	1	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	1	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		14	', amount6: 'RECOVERED-	12	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	55	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	6	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	13	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		7	', amount12: 'RECOVERED-	1	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	61	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	21	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	6	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		1	', amount21: 'RECOVERED-	7	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	18	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		1	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amount22: 'ACTIVE-	12	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	3	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	12	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	3	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	4	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
																
																
{id: 1, name: '	29-11-21', total: '  	318	',positive:' 	16	',recoverd:' 	28	',death:' 	0	',active:' 	318		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		1	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	50	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	1	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	11	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	3	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	1	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	2	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		5	', amount6: 'RECOVERED-	6	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	53	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		0	', amount7: 'RECOVERED-	1	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	17	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	0	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	1	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	6	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		1	', amount11: 'RECOVERED-	1	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		5	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	55	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		1	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		0	', amount14: 'RECOVERED-	3	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	6	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	1	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	1	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	24	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amount22: 'ACTIVE-	11	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		0	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	16	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer29: '	OTHER STATES	', toys29: 'POSITIVE:-		0	', amount29: 'RECOVERED-	0	', GIFTS29: 'DEATH:-	0	', amountg29: 'ACTIVE-	5	', bags29: 'BAGS:-	', amountb29: '		',  urlb29: '		',
																},
																
{id: 1, name: '	28-11-21', total: '  	325	',positive:' 	30	',recoverd:' 	22	',death:' 	0	',active:' 	325		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		7	', amount1: 'RECOVERED-	5	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	54	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		0	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		1	', amount3: 'RECOVERED-	1	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		0	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		0	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		7	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		2	', amount7: 'RECOVERED-	2	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		1	', amount8: 'RECOVERED-	0	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		1	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	7	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		2	', amount11: 'RECOVERED-	3	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		3	', amount12: 'RECOVERED-	0	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	52	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		3	', amount13: 'RECOVERED-	0	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	1	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	9	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		0	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	1	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	0	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	1	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	0	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	25	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		0	', amount22: 'RECOVERED-	0	', GIFTS22: 'DEATH:-	0	', amount22: 'ACTIVE-	9	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	2	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	18	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		1	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
																},
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
{id: 1, name: '	27-11-21', total: '  	323	',positive:' 	27	',recoverd:' 	18	',death:' 	0	',active:' 	323		',				
customer1: '	DURG	', toys1: 'POSITIVE:-		3	', amount1: 'RECOVERED-	2	', GIFTS1: 'DEATH:-	0	', amountg1: 'ACTIVE-	52	', bags1: 'BAGS:-	', amountb1: '		',  urlb1: '		',
customer2: '	RAJNANDGAON	', toys2: 'POSITIVE:-		2	', amount2: 'RECOVERED-	0	', GIFTS2: 'DEATH:-	0	', amountg2: ' ACTIVE-	12	', bags2: 'BAGS:-	', amountb2: '		',  urlb2: '		',
customer3: '	BALOD	', toys3: 'POSITIVE:-		0	', amount3: 'RECOVERED-	0	', GIFTS3: 'DEATH:-	0	', amountg3: ' ACTIVE-	4	', bags3: 'BAGS:-	', amountb3: '		',  urlb3: '		',
customer4: '	BEMETARA	', toys4: 'POSITIVE:-		1	', amount4: 'RECOVERED-	0	', GIFTS4: 'DEATH:-	0	', amountg4: 'ACTIVE-	3	', bags4: 'BAGS:-	', amountb4: '		',  urlb4: '		',
customer5: '	KABIRDHAM	', toys5: 'POSITIVE:-		1	', amount5: 'RECOVERED-	0	', GIFTS5: 'DEATH:-	0	', amountg5: 'ACTIVE-	1	', bags5: 'BAGS:-	', amountb5: '		',  urlb5: '		',
customer6: '	RAIPUR	', toys6: 'POSITIVE:-		1	', amount6: 'RECOVERED-	5	', GIFTS6: 'DEATH:-	0	', amountg6: 'ACTIVE-	54	', bags6: 'BAGS:-	', amountb6: '		',  urlb6: '		',
customer7: '	DHAMTARI	', toys7: 'POSTIVE:-		1	', amount7: 'RECOVERED-	0	', GIFTS7: 'DEATH:-	0	', amountg7: 'ACTIVE-	18	', bags7: 'BAGS:-	', amountb7: '		',  urlb7: '		',
customer8: '	BALODABAZAR	', toys8: 'POSITIVE:-		0	', amount8: 'RECOVERED-	2	', GIFTS8: 'DEATH:-	0	', amountg8: 'ACTIVE-	4	', bags8: 'BAGS:-	', amountb8: '		',  urlb8: '		',
customer9: '	MAHASAMUH	', toys9: 'POSITIVE:-		0	', amount9: 'RECOVERED-	1	', GIFTS9: 'DEATH:-	0	', amountg9: 'ACTIVE-	6	', bags9: 'BAGS:-	', amountb9: '		',  urlb9: '		',
customer10: '	GARIYABAND	', toys10: 'POSITIVE:-		0	', amount10: 'RECOVERED-	0	', GIFTS10: 'DEATH:-	0	', amountg10: 'ACTIVE-	7	', bags10: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer11: '	BILASPUR	', toys11: 'POSITIVE:-		3	', amount11: 'RECOVERED-	0	', GIFTS11: 'DEATH:-	0	', amountg11: 'ACTIVE-	11	', bags11: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer12: '	RAIGARH	', toys12: 'POSITIVE:-		10	', amount12: 'RECOVERED-	2	', GIFTS12: 'DEATH:-	0	', amountg12: 'ACTIVE-	52	', bags12: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer13: '	KORBA	', toys13: 'POSITIVE:-		0	', amount13: 'RECOVERED-	1	', GIFTS13: 'DEATH:-	0	', amountg13: 'ACTIVE-	20	', bags13: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer14: '	JANJGIR CHAMPA	', toys14: 'POSITIVE:-		1	', amount14: 'RECOVERED-	0	', GIFTS14: 'DEATH:-	0	', amountg14: 'ACTIVE-	9	', bags14: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer15: '	MUNGELI	', toys15: 'POSITIVE:-		1	', amount15: 'RECOVERED-	0	', GIFTS15: 'DEATH:-	0	', amountg15: 'ACTIVE-	3	', bags15: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer16: '	PENDRA	', toys16: 'POSITIVE:-		0	', amount16: 'RECOVERED-	0	', GIFTS16: 'DEATH:-	0	', amountg16: 'ACTIVE-	0	', bags16: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer17: '	SARGUJA	', toys17: 'POSITIVE:-		0	', amount17: 'RECOVERED-	0	', GIFTS17: 'DEATH:-	0	', amountg17: 'ACTIVE-	8	', bags17: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer18: '	KOREA	', toys18: 'POSITIVE:-		0	', amount18: 'RECOVERED-	1	', GIFTS18: 'DEATH:-	0	', amountg18: 'ACTIVE-	2	', bags18: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer19: '	SURAJPUR	', toys19: 'POSITIVE:-		0	', amount19: 'RECOVERED-	0	', GIFTS19: 'DEATH:-	0	', amountg19: 'ACTIVE-	1	', bags19: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer20: '	BALRAMPUR	', toys20: 'POSITIVE:-		0	', amount20: 'RECOVERED-	0	', GIFTS20: 'DEATH:-	0	', amountg20: 'ACTIVE-	0	', bags20: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer21: '	JASHPUR	', toys21: 'POSITIVE:-		0	', amount21: 'RECOVERED-	1	', GIFTS21: 'DEATH:-	0	', amountg21: 'ACTIVE-	25	', bags21: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer22: '	BASTAR	', toys22: 'POSITIVE:-		2	', amount22: 'RECOVERED-	2	', GIFTS22: 'DEATH:-	0	', amount22: 'ACTIVE-	9	', bags22: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer23: '	KONDAGAON	', toys23: 'POSITIVE:-		0	', amount23: 'RECOVERED-	0	', GIFTS23: 'DEATH:-	0	', amountg23: 'ACTIVE-	1	', bags23: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer24: '	DANTEWADA	', toys24: 'POSITIVE:-		1	', amount24: 'RECOVERED-	1	', GIFTS24: 'DEATH:-	0	', amountg24: 'ACTIVE-	18	', bags24: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer25: '	SUKMA	', toys25: 'POSITIVE:-		0	', amount25: 'RECOVERED-	0	', GIFTS25: 'DEATH:-	0	', amountg25: 'ACTIVE-	0	', bags25: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer26: '	KANKER	', toys26: 'POSITIVE:-		0	', amount26: 'RECOVERED-	0	', GIFTS26: 'DEATH:-	0	', amountg26: 'ACTIVE-	2	', bags26: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer27: '	NARAYANPUR	', toys27: 'POSITIVE:-		0	', amount27: 'RECOVERED-	0	', GIFTS27: 'DEATH:-	0	', amountg27: 'ACTIVE-	0	', bags27: 'BAGS:-	', amountb10: '		',  urlb10: '		',
customer28: '	BIJAPUR	', toys28: 'POSITIVE:-		0	', amount28: 'RECOVERED-	0	', GIFTS28: 'DEATH:-	0	', amountg28: 'ACTIVE-	1	', bags28: 'BAGS:-	', amountb10: '		',  urlb10: '		',
																},
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
  ];																
  																
  return factory;																
}]);																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																
																

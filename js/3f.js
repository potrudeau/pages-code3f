function fixTeamname(name) {
    switch (name) {
        case "596079981566681088":
            return "Fred Jean"
            break;
        case "484227143023194112":
            return "Ian Boucher"
            break;
        case "590563686884614144":
            return "JF Trudeau"
            break;
        case "474015432420880384":
            return "Inouk Babin-R"
            break;
        case "335085800989425664":
            return "Marc Drolet"
            break;
        case "591256971588448256":
            return "Marty Desmarais"
            break;
        case "335454233417515008":
            return "Samuel Comeau"
            break;
        case "590611424028434432":
            return "Normand Bros."
            break;
        case "335249116051296256":
            return "PO Trudeau"
            break;
        case "591271559289671680":
            return "Éric Desgagné"
            break;
        case "591404060192591872":
            return "MA Daigneault"
            break;
        case "331634294617292800":
            return "Vincent Bessette"
            break;
        default:
            return name;
    }
}

function fixNbrJoueurs(nbr) {
    switch (nbr) {
        case 6:
            return "6 joueurs (max 2 RB)"
            break;
        case 7:
            return "7 joueurs (max 2 RB)"
            break;
        case 8:
            return "8 joueurs (max 3 RB)"
            break;
        case 10:
            return "10 joueurs (max 3 RB) ou<br> 9 joueurs"
            break;        
        default:
            return null;
    }    
}

function findPlayer(json, playerID) {
    for (var k in json) {
        if (k == playerID) 
            return json[k];        
    }
    return null;
}



$(function() {

    var $list = $("#list");
  
    $list.children().detach().sort(function(a, b) {
      return $(a).text().localeCompare($(b).text());
    }).appendTo($list);
  
  });
package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Historique;
import projetfin.barakelaw.Services.HistoriqueService;

import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlerHistorique {
    @Autowired
    HistoriqueService historiqueService;
    //ajouter un historique
    @PostMapping("/AddHistorique")
    public Historique addhistori(Historique hist){
        return historiqueService.addhistori(hist);
    }
    //modifier historique
    @PutMapping(value = "/updatHistorique/{id}")
    public Historique updateHist(@RequestBody Historique hist, @PathVariable long id){
        return historiqueService.updateHist(hist,id);
    }
    //liste historique
    @GetMapping(value = "/ListHistorique")
    @ResponseBody
    public List<Historique> listeHist(Etat etat){
        return historiqueService.listeHist(etat);
    }
}

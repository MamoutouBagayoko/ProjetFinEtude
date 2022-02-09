package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Demande;
import projetfin.barakelaw.Services.DemandeService;

import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlerDemande {
    @Autowired
    DemandeService demandeService;
    //ajouter un demande
    @PostMapping("/AddDemande")
    public Demande addDemande(Demande demande){
       return demandeService.addDemande(demande);
    }
    //modifier demande
    @PutMapping(value = "/updatDemande/{id}")
    public Demande updateDemande(@RequestBody Demande demande, @PathVariable long id){
        return demandeService.updateDemande(demande,id);


    }
    //liste demande
    @GetMapping(value = "/ListDemande")
    @ResponseBody
    public List<Demande> listeDemande(Etat etat)
    {
        return demandeService.listeDemande(Etat.actif);
    }
    //supprimer demande
    @DeleteMapping(value = "/DeleteDemande/{id}")
    @ResponseBody
    public void deleteDemande(@PathVariable long id){
        demandeService.deleteDemande(id);
    }
}

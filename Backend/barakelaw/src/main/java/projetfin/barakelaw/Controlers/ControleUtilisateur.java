package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Utilisateur;
import projetfin.barakelaw.Services.UtilisateurService;

import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControleUtilisateur {
    @Autowired
    UtilisateurService utilisateurService;
    //ajouter un utilisateur
    @PostMapping("/AddUtilisateur")
    public Utilisateur addutilisateur(@RequestBody Utilisateur utilisateur) {

        return utilisateurService.addutilisateur(utilisateur);
    }

    //modifier utilisateur
    @PutMapping(value = "/updatUtilisateur/{id}")
    public Utilisateur updateUtiliseur(@RequestBody Utilisateur utilisateur, @PathVariable long id) {
        return utilisateurService.updateUtiliseur(utilisateur,id);
    }
    //liste utilisateur
    @GetMapping(value = "/ListUtilisateur")
    @ResponseBody
    public List<Utilisateur> listeutilisateur(Etat etat){
        return utilisateurService.listeutilisateur(etat);
    }
    //supprimer utilisateur
    @DeleteMapping(value = "/DeleteUtilisateur/{id}")
    @ResponseBody
    public void deleteUtilisateur(@PathVariable("id") long id) {
        utilisateurService.deleteUtilisateur(id);
    }
    //Authentification
    @GetMapping("/authUser/{login}/{motpass}")
    public Utilisateur authUtilisateur(@PathVariable String login, @PathVariable String motpass){
        return utilisateurService.authUtilisateur(login,motpass);
    }

}

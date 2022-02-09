package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;
import projetfin.barakelaw.Services.AdministrateurService;

import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlersAdministrateur {
    @Autowired
    AdministrateurService administrateurService;
    //ajouter un administrateur
    @PostMapping("/AddAdmin")
    public Administrateur addAdmin(@RequestBody Administrateur admin) {
        return administrateurService.addAdmin(admin);
    }
    //modifier apprenant
    @PutMapping(value = "/updatAdmin/{id}")
    public Administrateur updateAdmin(@RequestBody Administrateur admin, @PathVariable long id) {
        return administrateurService.updateAdmin(admin,id);
    }
    //liste Apprenant
    @GetMapping(value = "/ListAdmin")
    @ResponseBody
    public List<Administrateur> liste(Etat etat)
    {
        return administrateurService.liste(etat);
    }
    //supprimer apprenant
    @DeleteMapping(value = "/DeleteAdmin/{id}")
    @ResponseBody
    public void deleteAdmin(@PathVariable("id") long id) {
        administrateurService.deleteAdmin(id);

    }
    //Authentification
    @GetMapping("/authAdmin/{login}/{motpasse}")
    public Administrateur authentification(@PathVariable("login") String username, @PathVariable("motpasse") String motpasse){
        return administrateurService.authentification(username,motpasse);

    }

}

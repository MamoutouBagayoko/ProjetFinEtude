package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Services.CategorieService;

import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlerCategorie {
    @Autowired
    CategorieService categorieService;
    //ajouter un categorie
    @PostMapping("/AddCategori")
    public Categorie addCategorie(Categorie categorie){
        return categorieService.addCategorie(categorie);
    }
//modifier Categorie
    @PutMapping(value = "/updatCategori/{id}")
    public Categorie updateCaterori(@RequestBody Categorie categorie, @PathVariable long id){
        return categorieService.updateCaterori(categorie,id);
    }
    //liste Categorie
    @GetMapping(value = "/ListCategori")
    @ResponseBody
    public List<Categorie> listecatgiri(Etat etat){
        return categorieService.listecatgiri(etat);
    }
    //supprimer cartogori
    @DeleteMapping(value = "/DeleteCategori/{id}")
    @ResponseBody
    public void deleteCategorie(@PathVariable long id){
        categorieService.deleteCategorie(id);
    }
}

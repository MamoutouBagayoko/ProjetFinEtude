package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Services.CategorieService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlerCategorie {
    @Autowired
    CategorieService categorieService;
    //ajouter un categorie
    @PostMapping("/AddCategori")
    public Categorie addCategorie(Categorie categorie, @RequestParam("image") MultipartFile multipartFile) throws IOException {return categorieService.addCategorie(categorie,multipartFile);
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
    //Pour afficher la photo
    @GetMapping(value = "/PhotoCategori/{id_cat}",produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})

    byte[] getPhoto(@PathVariable("id_cat") long id) throws IOException{
        return categorieService.getPhoto(id);
    }
}

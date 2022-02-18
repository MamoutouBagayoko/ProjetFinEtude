package projetfin.barakelaw.Controlers;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Utilisateur;
import projetfin.barakelaw.Services.UtilisateurService;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControleUtilisateur {
    @Autowired
    UtilisateurService utilisateurService;
    //ajouter un utilisateur
    @PostMapping("/AddUtilisateur")
    public Utilisateur addutilisateur(Utilisateur utilisateur,  @RequestParam("image") MultipartFile multipartFile) throws IOException {

        return utilisateurService.addutilisateur(utilisateur,multipartFile);
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
    //Pour afficher la photo"la partie controler"
    @GetMapping(value = "/PhotoUtilisateur/{id_utilisateur}",produces = {MediaType.IMAGE_JPEG_VALUE, MediaType.IMAGE_PNG_VALUE})

    byte[] getPhoto(@PathVariable("id_utilisateur") long id) throws IOException{
        return utilisateurService.getPhoto(id) ;
    }


}


package projetfin.barakelaw.Controlers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Services.PersonnelService;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping(path = "/barakelaw")
@CrossOrigin("*")
public class ControlerPersonnel {
    @Autowired
    PersonnelService personnelService;
    //ajouter un Personnel
    @PostMapping("/AddPerson")
    public Personnel addperson(Personnel person ,@RequestParam("image") MultipartFile multipartFile) throws IOException {

        return personnelService.addperson(person,multipartFile);
    }
//modifier Personnel
    @PutMapping(value = "/updatPerson/{id}")
    public Personnel updateperson(@RequestBody Personnel person, @PathVariable long id) {
       return personnelService.updateperson(person,id);
    }
    //liste Personnel
    @GetMapping(value = "/ListPerson")
    @ResponseBody
    public List<Personnel> listeperson(Etat etat) {

        return personnelService.listeperson(etat);
    }
    //supprimer personnel
    @DeleteMapping(value = "/DeletePerson/{id}")
    @ResponseBody
    public void deleteperson(@PathVariable long id) {
        personnelService.deleteperson(id);
    }

    //get by id
    @GetMapping("/PersonById/{id}")
    @ResponseBody
    public Personnel findByIdAndEtat(@PathVariable("id") long id, Etat etat){
      return   personnelService.findByIdAndEtat(Etat.actif,id);
    }


}

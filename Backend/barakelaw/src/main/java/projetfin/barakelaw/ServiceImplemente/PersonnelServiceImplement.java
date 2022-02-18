package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.FileUploadUtil;
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Repository.RepositoryPersonnel;
import projetfin.barakelaw.Services.PersonnelService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class PersonnelServiceImplement implements PersonnelService {
    @Autowired
    RepositoryPersonnel repositoryPersonnel;
    @Override
    public Personnel addperson(Personnel person,
        @RequestParam("image") MultipartFile multipartFile)throws IOException {

            String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
            person.setPhoto(fileName);
        Personnel savePerson =repositoryPersonnel.save(person);
            String uploadDir = "src/main/resources/images/" + savePerson.getId();
            FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
            return savePerson;
    }

    @Override
    public Personnel updateperson(Personnel person, long id) {
        Personnel modperson=repositoryPersonnel.findById(id).get();
        modperson.setNom(person.getNom());
        modperson.setPrenom(person.getPrenom());
        modperson.setAdresse(person.getAdresse());
        modperson.setNumphone(person.getAges());
        modperson.setCompetence(person.getCompetence());
        modperson.setEtat(person.getEtat());
        modperson.setLangparler(person.getLangparler());
        modperson.setGenre(person.getGenre());
        modperson.setNiveauetude(person.getNiveauetude());
        modperson.setAges(person.getAges());
        modperson.setPhoto(person.getPhoto());
        modperson.setMatrimoliale(person.getMatrimoliale());
        return repositoryPersonnel.save(person);

    }
    @Override
    public void deleteperson(long id) {
        repositoryPersonnel.changerEtatPerson(id);

    }

    @Override
    public List<Personnel> listeperson(Etat etat) {
        return repositoryPersonnel.findByEtat(Etat.actif);
    }

    @Override
    public Personnel findByIdAndEtat(Etat etat, long id) {
        return repositoryPersonnel.findByIdAndEtat(id,etat);
    }

    @Override
    public List<Personnel> ListePersonnelParCategorie(long id) {
        return repositoryPersonnel.listePersonnelByCategorie(id);
    }

    @Override
    public byte[] getPhoto(long id) throws IOException {
        Personnel personnel = repositoryPersonnel.findById(id).get();
        String photo = personnel.getPhoto();
        File file = new File("src/main/resources/images/" +personnel.getId() + "/" + photo);
        Path path = Paths.get(file.toURI());

        return Files.readAllBytes(path);
    }

    @Override
    public Personnel findByIdPerso(long id) {
        return repositoryPersonnel.findById(id).get();
    }


}

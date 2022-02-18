package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Models.FileUploadUtil;
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Repository.RepositoryCategorie;
import projetfin.barakelaw.Services.CategorieService;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class CategorieServiceImplente implements CategorieService {
    @Autowired
    RepositoryCategorie repositoryCategorie;

    @Override
    public Categorie addCategorie(Categorie categorie, @PathVariable("image") MultipartFile multipartFile) throws IOException{
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        categorie.setPhoto(fileName);
        Categorie saveCategorie=repositoryCategorie.save(categorie);
        String uploadDir = "src/main/resources/images_Service/" + saveCategorie.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return saveCategorie;
    }

    @Override
    public Categorie updateCaterori(Categorie categorie, long id) {
        Categorie modCatego=repositoryCategorie.findById(id).get();
        modCatego.setLibelle(categorie.getLibelle());
        modCatego.setEtat(categorie.getEtat());
        modCatego.setDescription(categorie.getDescription());
        modCatego.setPhoto(categorie.getPhoto());

        return repositoryCategorie.save(modCatego);
    }

    @Override
    public void deleteCategorie(long id) {
        repositoryCategorie.changerEtatCategorie(id);

    }

    @Override
    public List<Categorie> listecatgiri(Etat etat) {

        return repositoryCategorie.findByEtat(Etat.actif);
    }
//pour afficher la photo
    @Override
    public byte[] getPhoto(long id) throws IOException {
        Categorie categorie = repositoryCategorie.findById(id).get();
        String photo = categorie.getPhoto();
        File file = new File("src/main/resources/images_Service/" +categorie.getId() + "/" + photo);
        Path path = Paths.get(file.toURI());

        return Files.readAllBytes(path);
    }
}

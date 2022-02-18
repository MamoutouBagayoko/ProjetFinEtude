package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Models.FileUploadUtil;
import projetfin.barakelaw.Models.Utilisateur;
import projetfin.barakelaw.Repository.RepositoryUtilisateur;
import projetfin.barakelaw.Services.UtilisateurService;

import javax.persistence.NoResultException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@Service
public class UtilisateurServiceImplement implements UtilisateurService {
    @Autowired
    RepositoryUtilisateur repositoryUtilisateur;


    @Override
    public Utilisateur addutilisateur(Utilisateur utilisateur, @RequestParam("image") MultipartFile multipartFile) throws IOException{
        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
        utilisateur.setPieceidentite(fileName);
        Utilisateur saveUtilisateur=repositoryUtilisateur.save(utilisateur);
        String uploadDir = "src/main/resources/images_User/" + saveUtilisateur.getId();
        FileUploadUtil.saveFile(uploadDir, fileName, multipartFile);
        return saveUtilisateur;
    }

    @Override
    public Utilisateur updateUtiliseur(Utilisateur utilisateur, long id) {
        Utilisateur utimod =repositoryUtilisateur.findById(id).get();
        utimod.setNom(utilisateur.getNom());
        utimod.setPrenom(utilisateur.getPrenom());
        utimod.setLogin(utilisateur.getLogin());
        utimod.setEmail(utilisateur.getEmail());
        utimod.setNumphone(utilisateur.getNumphone());
        utimod.setAdresse(utilisateur.getAdresse());
        utimod.setMatrimoliale(utilisateur.getMatrimoliale());
        utimod.setGenre(utilisateur.getGenre());
        utimod.setNbrenfant(utilisateur.getNbrenfant());
        utimod.setPieceidentite(utilisateur.getPieceidentite());
        utimod.setProfession(utilisateur.getProfession());
        utimod.setMotpass(utilisateur.getMotpass());
        return repositoryUtilisateur.save(utimod);
    }

    @Override
    public void deleteUtilisateur(long id) {
        repositoryUtilisateur.changerEtatUtilisateur(id);

    }

    @Override
    public List<Utilisateur> listeutilisateur(Etat etat) {
        return repositoryUtilisateur.findByEtat(Etat.actif);
    }

    @Override
    public Utilisateur findByIdAndEtat(Etat etat, long id) {
        return repositoryUtilisateur.findByIdAndEtat(id,Etat.actif);
    }

    @Override
    public Utilisateur authUtilisateur(String login, String motpass) {
        try {
            Utilisateur utilisateur = repositoryUtilisateur.findOneByLoginAndMotpass(login,motpass);
            return utilisateur;
        } catch (NoResultException e) {
            return null;
        }
    }
//Pour afficher la photo "la partie service implemente"
    @Override
    public byte[] getPhoto(long id) throws IOException {
        Utilisateur utilisateur = repositoryUtilisateur.findById(id).get();
        String photo = utilisateur.getPieceidentite();
        File file = new File("src/main/resources/images_User/" +utilisateur.getId() + "/" +photo);
        Path path = Paths.get(file.toURI());

        return Files.readAllBytes(path);
    }
}

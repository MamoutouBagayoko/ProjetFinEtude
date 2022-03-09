package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;

import java.io.IOException;
import java.util.List;

@Service
public interface CategorieService {
    public Categorie addCategorie(Categorie categorie, MultipartFile image) throws IOException;
    public Categorie updateCaterori(Categorie categorie,long id);
    public void deleteCategorie(long id);
    public List<Categorie> listecatgiri(Etat etat);
    //pour affiche le photo
    public byte[] getPhoto(long id) throws IOException;
    //afficher une catégorie par son id
     public Categorie findByIdAndEtat(Etat etat,long id);
}

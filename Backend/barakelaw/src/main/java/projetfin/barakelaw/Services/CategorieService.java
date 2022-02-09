package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;

import java.util.List;

@Service
public interface CategorieService {
    public Categorie addCategorie(Categorie categorie);
    public Categorie updateCaterori(Categorie categorie,long id);
    public void deleteCategorie(long id);
    public List<Categorie> listecatgiri(Etat etat);
}

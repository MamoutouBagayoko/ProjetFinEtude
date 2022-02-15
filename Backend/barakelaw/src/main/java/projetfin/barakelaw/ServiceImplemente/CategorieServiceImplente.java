package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Categorie;
import projetfin.barakelaw.Repository.RepositoryCategorie;
import projetfin.barakelaw.Services.CategorieService;

import java.util.List;

@Service
public class CategorieServiceImplente implements CategorieService {
    @Autowired
    RepositoryCategorie repositoryCategorie;
    @Override
    public Categorie addCategorie(Categorie categorie) {
        return repositoryCategorie.save(categorie);
    }

    @Override
    public Categorie updateCaterori(Categorie categorie, long id) {
        Categorie modCatego=repositoryCategorie.findById(id).get();
        modCatego.setLibelle(categorie.getLibelle());
        modCatego.setEtat(categorie.getEtat());
        modCatego.setDescription(categorie.getDescription());

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
}

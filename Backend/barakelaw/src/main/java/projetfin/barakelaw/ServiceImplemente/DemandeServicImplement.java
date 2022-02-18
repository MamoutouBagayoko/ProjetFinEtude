package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Demande;
import projetfin.barakelaw.Repository.RepositoryCategorie;
import projetfin.barakelaw.Repository.RepositoryDemande;
import projetfin.barakelaw.Services.DemandeService;

import java.util.List;

@Service
public class DemandeServicImplement implements DemandeService {
    @Autowired
    RepositoryDemande repositoryDemande;

    @Override
    public Demande addDemande(Demande demande) {
        return repositoryDemande.save(demande);
    }

    @Override
    public Demande updateDemande(Demande demande, long id) {
        Demande modDeman=repositoryDemande.findById(id).get();
        modDeman.setEtat(demande.getEtat());
        modDeman.setDatedemande(demande.getDatedemande());
        return repositoryDemande.save(demande);
    }

    @Override
    public List<Demande> listeDemande(Etat etat) {
        return repositoryDemande.findByEtat(Etat.actif);
    }

    @Override
    public void deleteDemande(long id) {
        repositoryDemande.changerEtatDemande(id);

    }

    @Override
    public List<Demande> listeDemandeur(long id) {
        return repositoryDemande.listDemandeur(id);
    }
}

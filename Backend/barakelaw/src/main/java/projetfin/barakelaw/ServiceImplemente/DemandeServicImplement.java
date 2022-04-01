package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Demande;
import projetfin.barakelaw.Models.EmailService;
import projetfin.barakelaw.Repository.RepositoryCategorie;
import projetfin.barakelaw.Repository.RepositoryDemande;
import projetfin.barakelaw.Services.DemandeService;

import javax.swing.text.html.Option;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class DemandeServicImplement implements DemandeService {
    @Autowired
    RepositoryDemande repositoryDemande;

    @Autowired
    EmailService emailService;

    @Override
    public Demande addDemande(Demande demande) {
        demande.setDatedemande(new Date());
        Demande d = repositoryDemande.save(demande);
        System.out.println("email user ========="+d.getUtilisateur().getEmail());
        emailService.SendSimpleEmail(d.getUtilisateur().getEmail(), "Votre demande a été prise en compte", "comfirmation de la demande");
        return d;
    }

    @Override
    public Demande updateDemande(Demande demande, long id) {
        Demande modDeman=repositoryDemande.findById(id).get();
        modDeman.setEtat(demande.getEtat());
        modDeman.setVue(demande.getVue());
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
    public Demande listeDemandeur(long id) {
        Demande dmde = repositoryDemande.findById(id).get();
        return dmde;
    }
}

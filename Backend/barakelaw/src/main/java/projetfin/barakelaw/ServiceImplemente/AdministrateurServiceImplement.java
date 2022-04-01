package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;
import projetfin.barakelaw.Models.Personnel;
import projetfin.barakelaw.Repository.RepositoryAdministrateur;
import projetfin.barakelaw.Services.AdministrateurService;

import javax.persistence.NoResultException;
import java.util.List;

@Service
public class AdministrateurServiceImplement implements AdministrateurService {
    @Autowired
    RepositoryAdministrateur repositoryAdministrateur;
    @Autowired
    LogServiceImplement logServiceImp;

    @Override
    public Administrateur addAdmin(Administrateur admin) {
        return repositoryAdministrateur.save(admin);
    }

    @Override
    public Administrateur updateAdmin(Administrateur admin, long id) {
        Administrateur modAdmin= repositoryAdministrateur.findById(id).get();
        modAdmin.setNom(admin.getNom());
        modAdmin.setPrenom(admin.getPrenom());
        modAdmin.setEmail(admin.getEmail());
        modAdmin.setLogin(admin.getLogin());
        modAdmin.setNumphone(admin.getNumphone());
        modAdmin.setEtat(admin.getEtat());
        modAdmin.setMotpasse(admin.getMotpasse());
        modAdmin.setProfit(admin.getProfit());

        return repositoryAdministrateur.save(modAdmin);
    }

    @Override
    public List<Administrateur> liste(Etat etat) {
        return repositoryAdministrateur.findByEtat(Etat.actif);
    }

    @Override
    public void deleteAdmin(long id) {
        repositoryAdministrateur.changerEtatAdmin(id);

    }

    @Override
    public Administrateur authentification(String login, String motpasse) {
        try {
            Administrateur admin = repositoryAdministrateur.findOneByLoginAndMotpasse(login, motpasse);
            return admin;
        } catch (NoResultException e) {
            return null;
        }
    }

    @Override
    public Administrateur adminParId(long id) {
        return repositoryAdministrateur.findById(id).get();
    }

    @Override
    public String restoreAdmin(Long id, Long idSupperAdmin) {
        Administrateur superAdmin= repositoryAdministrateur.findById(idSupperAdmin).get();
        Administrateur administrateur=repositoryAdministrateur.findById(id).get();
        administrateur.setSupprimer(false);
        administrateur.setEtat(Etat.actif);
        logServiceImp.addLogAdmin(superAdmin, "SUPERADMIN", superAdmin.getPrenom()+" "+superAdmin.getNom(), "Restauration de l'administrateur "+ administrateur.getPrenom()+" "+administrateur.getNom());
        return "Vous avez supprimé l'admin " + administrateur.getPrenom() + " " + administrateur.getNom();

    }

    @Override
    public List<Administrateur> adminAll() {
        return repositoryAdministrateur.findAll();
    }
}

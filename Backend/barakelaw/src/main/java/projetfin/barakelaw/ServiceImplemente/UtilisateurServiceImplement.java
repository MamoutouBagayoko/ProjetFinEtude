package projetfin.barakelaw.ServiceImplemente;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Administrateur;
import projetfin.barakelaw.Models.Utilisateur;
import projetfin.barakelaw.Repository.RepositoryUtilisateur;
import projetfin.barakelaw.Services.UtilisateurService;

import javax.persistence.NoResultException;
import java.util.List;

@Service
public class UtilisateurServiceImplement implements UtilisateurService {
    @Autowired
    RepositoryUtilisateur repositoryUtilisateur;
    @Override
    public Utilisateur addutilisateur(Utilisateur utilisateur) {
        return repositoryUtilisateur.save(utilisateur);
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
        utimod.setNonbreEnfant(utilisateur.getNonbreEnfant());
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
}

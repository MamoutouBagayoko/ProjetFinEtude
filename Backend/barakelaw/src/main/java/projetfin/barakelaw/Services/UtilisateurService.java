package projetfin.barakelaw.Services;

import org.springframework.stereotype.Service;
import projetfin.barakelaw.Enummer.Etat;
import projetfin.barakelaw.Models.Utilisateur;

import java.util.List;

@Service
public interface UtilisateurService {
    public Utilisateur addutilisateur(Utilisateur utilisateur);
    public Utilisateur updateUtiliseur(Utilisateur utilisateur,long id);
    public void deleteUtilisateur(long id);
    public List<Utilisateur> listeutilisateur(Etat etat);
    public Utilisateur findByIdAndEtat(Etat etat,long id);
    public Utilisateur authUtilisateur(String login,String motpass);
}
